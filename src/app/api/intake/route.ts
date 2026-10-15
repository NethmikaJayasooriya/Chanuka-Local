import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { SITE_KEY } from "@/lib/site";
import { createClient } from "@/lib/supabase/server";
import { supabaseConfigured } from "@/lib/supabase/guard";
import { resolveOrder } from "@/lib/pricing";
import { randomUUID } from "node:crypto";
import { InputError, assertSameOrigin, inputText, readLimitedBody } from "@/lib/request-validation";

export const runtime = "nodejs";

/**
 * Public endpoint: a customer submits their brief. Saves the fields and
 * uploads the CV into the private 'cvs' bucket, so the admin panel
 * receives everything (the brief + the CV file).
 */
export async function POST(request: Request) {
  if (!supabaseConfigured()) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  try {
    assertSameOrigin(request);
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.toLowerCase().startsWith("multipart/form-data;")) throw new InputError("unsupported_media_type", 415);
    const bytes = await readLimitedBody(request, 4 * 1024 * 1024);
    let form: FormData;
    try { form = await new Response(bytes.buffer as ArrayBuffer, { headers: { "Content-Type": contentType } }).formData(); }
    catch { throw new InputError("bad_request"); }
    const text = (key: string, max = 10_000) => inputText(form.get(key), max);
    if (text("name", 200).length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text("email", 254)) ||
        text("phone", 60).length < 7 || text("targetRole", 200).length < 2) throw new InputError("invalid_details");
    const cv = form.get("cv");
    if (cv !== null && !(cv instanceof File)) throw new InputError("invalid_cv");
    const ext = cv?.name.split(".").pop()?.toLowerCase() ?? "";
    const mimeTypes: Record<string, string> = { pdf: "application/pdf", doc: "application/msword", docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" };
    if (cv && cv.size > 0) {
      if (cv.size > 3 * 1024 * 1024) throw new InputError("cv_too_large", 413);
      if (!Object.hasOwn(mimeTypes, ext) || (cv.type && cv.type !== "application/octet-stream" && cv.type !== mimeTypes[ext])) throw new InputError("invalid_cv");
      const header = new Uint8Array(await cv.slice(0, 8).arrayBuffer());
      const signature = ext === "pdf" ? [0x25, 0x50, 0x44, 0x46, 0x2d] : ext === "doc" ? [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1] : [0x50, 0x4b, 0x03, 0x04];
      if (!signature.every((byte, i) => header[i] === byte)) throw new InputError("invalid_cv");
    }
    const db = createAdminClient();

    // The signed-in customer (if any). Their brief and CV are tied to them.
    const auth = await createClient();
    const {
      data: { user },
    } = await auth.auth.getUser();
    const userId = user?.id ?? null;

    let orderId: string | null = null;

    // Preferred path: the order already exists (account flow). Verify it
    // belongs to this customer before linking anything to it.
    const existingOrderId = text("order_id", 80);
    if (existingOrderId) {
      if (!userId) throw new InputError("not_signed_in", 401);
      if (!/^[0-9a-f-]{36}$/i.test(existingOrderId)) throw new InputError("invalid_order");
      const { data: owned } = await db
        .from("orders")
        .select("id")
        .eq("id", existingOrderId)
        .eq("user_id", userId)
        .eq("site", SITE_KEY)
        .maybeSingle();
      if (!owned) throw new InputError("order_not_found", 404);
      orderId = owned.id;
    }

    // Legacy / guest path: no pre-created order, build one from the summary.
    if (!orderId) {
      const orderRaw = form.get("order");
      if (orderRaw) {
        try {
          const o = JSON.parse(String(orderRaw));
          if (!o || typeof o !== "object" || Array.isArray(o)) throw new InputError("invalid_order");
          const [prefix, suffix] = String(o.package_id ?? "").split(":");
          const selection = resolveOrder(suffix ?? prefix, o.level_id, o.delivery_id, suffix ? prefix : "essential");
          if (!selection) throw new InputError("invalid_order");
          const { data, error } = await db
            .from("orders")
            .insert({
              site: SITE_KEY,
              user_id: userId,
              ...selection,
              customer_name: text("name", 200),
              customer_email: user?.email ?? text("email", 254),
              customer_phone: text("phone", 60),
            })
            .select("id")
            .single();
          if (error || !data) throw new InputError("order_not_saved", 500);
          orderId = data.id;
        } catch (error) {
          if (error instanceof InputError) throw error;
          throw new InputError("invalid_order");
        }
      }
    }

    const record: Record<string, unknown> = {
      site: SITE_KEY,
      order_id: orderId,
      user_id: userId,
      order_summary: text("order_summary", 2000),
      name: text("name", 200),
      email: text("email", 254),
      phone: text("phone", 60),
      whatsapp: text("whatsapp", 60),
      address: text("address", 500),
      linkedin: text("linkedin", 500),
      target_role: text("targetRole", 200),
      education: text("education"),
      professional: text("professional"),
      experience: text("experience"),
      skills: text("skills"),
      projects: text("projects"),
      achievements: text("achievements"),
      certifications: text("certifications"),
      additional: text("additional"),
    };

    if (cv && cv.size > 0) {
      const safe = (record.name as string).toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30) || "cv";
      const folder = userId ?? String(new Date().getFullYear());
      const path = `${folder}/${safe}-${randomUUID()}.${ext}`;
      const buf = new Uint8Array(await cv.arrayBuffer());
      const { error } = await db.storage.from("cvs").upload(path, buf, {
        contentType: mimeTypes[ext],
        upsert: false,
      });
      if (error) throw new InputError("cv_upload_failed", 500);
      record.cv_path = path;
      record.cv_filename = cv.name.slice(0, 200);
    }

    const { error } = await db.from("intake_submissions").insert(record);
    if (error) throw new InputError("brief_not_saved", 500);

    if (orderId) {
      await db.from("orders").update({ status: "in_progress" }).eq("id", orderId).eq("site", SITE_KEY).eq("payment_status", "paid").eq("status", "new");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, reason: error instanceof InputError ? error.reason : "submission_failed" }, { status: error instanceof InputError ? error.status : 500 });
  }
}
