import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";
import { supabaseConfigured } from "@/lib/supabase/guard";

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
    const form = await request.formData();
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
    const existingOrderId = String(form.get("order_id") ?? "").trim();
    if (existingOrderId && userId) {
      const { data: owned } = await db
        .from("orders")
        .select("id")
        .eq("id", existingOrderId)
        .eq("user_id", userId)
        .maybeSingle();
      if (owned) orderId = owned.id;
    }

    // Legacy / guest path: no pre-created order, build one from the summary.
    if (!orderId) {
      const orderRaw = form.get("order");
      if (orderRaw) {
        try {
          const o = JSON.parse(String(orderRaw));
          const { data } = await db
            .from("orders")
            .insert({
              user_id: userId,
              package_id: o.package_id ?? null,
              package_name: o.package_name ?? null,
              level_id: o.level_id ?? null,
              level_name: o.level_name ?? null,
              delivery_id: o.delivery_id ?? null,
              delivery_window: o.delivery_window ?? null,
              total_usd: o.total_usd ?? null,
              customer_name: String(form.get("name") ?? "") || null,
              customer_email: String(form.get("email") ?? "") || null,
              customer_phone: String(form.get("phone") ?? "") || null,
            })
            .select("id")
            .single();
          orderId = data?.id ?? null;
        } catch {
          /* ignore malformed order info */
        }
      }
    }

    const record: Record<string, unknown> = {
      order_id: orderId,
      user_id: userId,
      order_summary: String(form.get("order_summary") ?? ""),
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      whatsapp: String(form.get("whatsapp") ?? ""),
      address: String(form.get("address") ?? ""),
      linkedin: String(form.get("linkedin") ?? ""),
      target_role: String(form.get("targetRole") ?? ""),
      education: String(form.get("education") ?? ""),
      professional: String(form.get("professional") ?? ""),
      experience: String(form.get("experience") ?? ""),
      skills: String(form.get("skills") ?? ""),
      projects: String(form.get("projects") ?? ""),
      achievements: String(form.get("achievements") ?? ""),
      certifications: String(form.get("certifications") ?? ""),
      additional: String(form.get("additional") ?? ""),
    };

    const cv = form.get("cv") as File | null;
    if (cv && cv.size > 0) {
      const ext = cv.name.split(".").pop() || "pdf";
      const safe = (record.name as string).toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30) || "cv";
      const folder = userId ?? String(new Date().getFullYear());
      const path = `${folder}/${safe}-${Date.now()}.${ext}`;
      const buf = new Uint8Array(await cv.arrayBuffer());
      const { error } = await db.storage.from("cvs").upload(path, buf, {
        contentType: cv.type || "application/octet-stream",
        upsert: false,
      });
      if (!error) {
        record.cv_path = path;
        record.cv_filename = cv.name;
      }
    }

    const { error } = await db.from("intake_submissions").insert(record);
    if (error) return NextResponse.json({ ok: false, reason: error.message }, { status: 500 });

    if (orderId) {
      await db.from("orders").update({ status: "in_progress" }).eq("id", orderId).eq("status", "new");
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, reason: "error" }, { status: 500 });
  }
}
