"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { canManageSite, requireAdmin, type AdminSite } from "@/lib/supabase/guard";
import { createAdminClient } from "@/lib/supabase/admin";
import { landingPath } from "@/lib/landing";
import { submitToIndexNow } from "@/lib/indexnow";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80);
}

const siteFrom = (value: FormDataEntryValue | null): AdminSite => value === "lk" ? "lk" : "com";

async function authorizeRecord(table: "orders" | "intake_submissions" | "blog_posts" | "landing_pages" | "deliverables", id: string) {
  const access = await requireAdmin();
  const { data } = await createAdminClient().from(table).select("site").eq("id", id).maybeSingle();
  if (!data || !canManageSite(access, data.site)) throw new Error("You do not have access to this site's records.");
  return { access, site: data.site as AdminSite };
}

/**
 * Accepts an uploaded/pasted HTML article. If a full document is given, keep
 * the <head> <style> blocks and the <body> inner HTML (so the author's design
 * survives) and drop the html/head/body wrappers so it renders inline in the
 * blog page. A plain fragment is stored as-is.
 */
function normalizeUploadedHtml(raw: string): string {
  const html = raw.trim();
  if (!html) return "";
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return html;
  const head = html.slice(0, html.search(/<body[^>]*>/i));
  const headStyles = (head.match(/<style[\s\S]*?<\/style>/gi) || []).join("\n");
  return (headStyles + "\n" + bodyMatch[1]).trim();
}


/** "Q: ...\nA: ..." pairs from a textarea into structured FAQs. */
function parseFaqs(raw: string): Array<{ q: string; a: string }> {
  const out: Array<{ q: string; a: string }> = [];
  let cur: { q: string; a: string } | null = null;
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (/^q[:.)]/i.test(t)) {
      if (cur && cur.q && cur.a) out.push(cur);
      cur = { q: t.replace(/^q[:.)]\s*/i, ""), a: "" };
    } else if (/^a[:.)]/i.test(t) && cur) {
      cur.a = t.replace(/^a[:.)]\s*/i, "");
    } else if (t && cur) {
      if (cur.a) cur.a += " " + t;
      else cur.q += " " + t;
    }
  }
  if (cur && cur.q && cur.a) out.push(cur);
  return out;
}

function aeoFields(form: FormData) {
  return {
    quick_answer: String(form.get("quick_answer") ?? "").trim() || null,
    faqs: parseFaqs(String(form.get("faqs") ?? "")),
    primary_keyword: String(form.get("primary_keyword") ?? "").trim() || null,
    noindex: form.get("noindex") === "on",
  };
}

export async function savePost(form: FormData) {
  const targetSite = siteFrom(form.get("site"));
  await requireAdmin(targetSite);
  const db = createAdminClient();

  const id = (form.get("id") as string) || null;
  if (id) await authorizeRecord("blog_posts", id);
  const title = String(form.get("title") ?? "").trim();
  const slug = slugify(String(form.get("slug") || title));
  const status = String(form.get("status") ?? "draft");

  const record: Record<string, unknown> = {
    site: targetSite,
    title,
    slug,
    excerpt: String(form.get("excerpt") ?? ""),
    body: String(form.get("body") ?? ""),
    body_html: normalizeUploadedHtml(String(form.get("body_html") ?? "")),
    ...aeoFields(form),
    category: String(form.get("category") ?? ""),
    read_minutes: Math.max(1, Math.round(Number(form.get("read_minutes")) || 5)),
    meta_title: String(form.get("meta_title") ?? ""),
    meta_description: String(form.get("meta_description") ?? ""),
    status,
    published_at: status === "published" ? new Date().toISOString() : null,
  };

  // Optional cover image upload
  const cover = form.get("cover") as File | null;
  if (cover && cover.size > 0) {
    const ext = cover.name.split(".").pop() || "jpg";
    const path = `covers/${slug}-${Date.now()}.${ext}`;
    const buf = new Uint8Array(await cover.arrayBuffer());
    const { error } = await db.storage.from("blog").upload(path, buf, {
      contentType: cover.type || "image/jpeg",
      upsert: true,
    });
    if (!error) record.cover_image_path = path;
  }

  if (id) {
    await db.from("blog_posts").update(record).eq("id", id);
  } else {
    await db.from("blog_posts").insert(record);
  }

  revalidatePath("/admin/blog");
  revalidatePath("/career-advice");
  revalidatePath(`/career-advice/${slug}`);
  if (status === "published") await submitToIndexNow([`/career-advice/${slug}`, "/career-advice"]);
  redirect("/admin/blog");
}

export async function deletePost(id: string) {
  await authorizeRecord("blog_posts", id);
  const db = createAdminClient();
  await db.from("blog_posts").delete().eq("id", id);
  revalidatePath("/admin/blog");
  revalidatePath("/career-advice");
}

export async function updateOrderStatus(id: string, status: string) {
  await authorizeRecord("orders", id);
  const db = createAdminClient();
  await db.from("orders").update({ status }).eq("id", id);
  revalidatePath("/admin/orders");
  revalidatePath(`/admin/orders/${id}`);
  revalidatePath("/admin");
}

export async function saveOrderNotes(id: string, admin_notes: string) {
  await authorizeRecord("orders", id);
  const db = createAdminClient();
  await db.from("orders").update({ admin_notes }).eq("id", id);
  revalidatePath(`/admin/orders/${id}`);
}

export async function markBriefHandled(id: string, handled: boolean) {
  await authorizeRecord("intake_submissions", id);
  const db = createAdminClient();
  await db.from("intake_submissions").update({ handled }).eq("id", id);
  revalidatePath("/admin/submissions");
  revalidatePath(`/admin/submissions/${id}`);
  revalidatePath("/admin");
}

export async function savePrices(form: FormData) {
  await requireAdmin("com");
  const db = createAdminClient();

  const priceRows: { service_id: string; level_id: string; price_usd: number }[] = [];
  for (const [key, value] of form.entries()) {
    const m = key.match(/^price:(.+):(.+)$/);
    if (m) {
      priceRows.push({
        service_id: m[1],
        level_id: m[2],
        price_usd: Math.max(0, Math.round(Number(value) || 0)),
      });
    }
  }
  if (priceRows.length) await db.from("service_prices").upsert(priceRows);

  const deliveryIds = form.getAll("delivery_id") as string[];
  for (const id of deliveryIds) {
    const surcharge = Number(form.get(`surcharge:${id}`)) || 0;
    const window_label = String(form.get(`window:${id}`) ?? "");
    await db
      .from("delivery_options")
      .update({ surcharge_pct: Math.max(0, surcharge), window_label })
      .eq("id", id);
  }

  const bundleCounts = form.getAll("bundle_count") as string[];
  for (const c of bundleCounts) {
    const discount = Number(form.get(`discount:${c}`)) || 0;
    await db
      .from("bundle_discounts")
      .update({ discount_pct: Math.max(0, discount) })
      .eq("service_count", Number(c));
  }

  revalidatePath("/admin/pricing");
  revalidatePath("/", "layout"); // prices feed the whole public site
}

// ================= SEO landing pages =================

export async function saveLanding(form: FormData) {
  const targetSite = siteFrom(form.get("site"));
  await requireAdmin(targetSite);
  const db = createAdminClient();

  const id = (form.get("id") as string) || null;
  if (id) await authorizeRecord("landing_pages", id);
  const section = String(form.get("section") ?? "").trim();
  const slug = slugify(String(form.get("slug") || form.get("title")));
  const title = String(form.get("title") ?? "").trim();
  const status = String(form.get("status") ?? "draft");

  const record: Record<string, unknown> = {
    site: targetSite,
    section,
    slug,
    title,
    body_html: normalizeUploadedHtml(String(form.get("body_html") ?? "")),
    ...aeoFields(form),
    meta_title: String(form.get("meta_title") ?? ""),
    meta_description: String(form.get("meta_description") ?? ""),
    status,
    published_at: status === "published" ? new Date().toISOString() : null,
  };

  const cover = form.get("cover") as File | null;
  if (cover && cover.size > 0) {
    const ext = cover.name.split(".").pop() || "jpg";
    const path = `landings/${section}-${slug}-${Date.now()}.${ext}`;
    const buf = new Uint8Array(await cover.arrayBuffer());
    const { error } = await db.storage.from("blog").upload(path, buf, {
      contentType: cover.type || "image/jpeg",
      upsert: true,
    });
    if (!error) record.cover_image_path = path;
  }

  if (id) {
    await db.from("landing_pages").update(record).eq("id", id);
  } else {
    await db.from("landing_pages").upsert(record, { onConflict: "section,slug" });
  }

  revalidatePath("/admin/pages");
  revalidatePath(landingPath(section, slug));
  if (status === "published") await submitToIndexNow([landingPath(section, slug)]);
  redirect("/admin/pages");
}

export async function deleteLanding(id: string) {
  await authorizeRecord("landing_pages", id);
  const db = createAdminClient();
  const { data } = await db.from("landing_pages").select("section,slug").eq("id", id).maybeSingle();
  await db.from("landing_pages").delete().eq("id", id);
  if (data) revalidatePath(landingPath(data.section, data.slug));
  revalidatePath("/admin/pages");
  redirect("/admin/pages");
}

// ================= Payments & deliverables =================

export async function setPaymentStatus(id: string, status: string) {
  await authorizeRecord("orders", id);
  if (!["pending", "paid", "refunded", "cancelled", "failed", "charged_back"].includes(status)) return;
  const db = createAdminClient();
  await db.from("orders").update({ payment_status: status }).eq("id", id);
  revalidatePath(`/admin/orders/${id}`);
  revalidatePath("/admin/orders");
  revalidatePath("/admin");
}

export async function uploadDeliverable(form: FormData) {
  const db = createAdminClient();

  const orderId = String(form.get("order_id") ?? "");
  const label = String(form.get("label") ?? "").trim() || "Document";
  const kind = String(form.get("kind") ?? "draft");
  const file = form.get("file") as File | null;
  if (!orderId || !file || file.size === 0) {
    revalidatePath(`/admin/orders/${orderId}`);
    return;
  }

  const { site } = await authorizeRecord("orders", orderId);
  const { data: order } = await db.from("orders").select("user_id,site").eq("id", orderId).maybeSingle();
  const userId = order?.user_id ?? null;

  const ext = file.name.split(".").pop() || "pdf";
  const safe = label.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30) || "doc";
  const path = `${userId ?? "unassigned"}/${orderId}/${safe}-${Date.now()}.${ext}`;
  const buf = new Uint8Array(await file.arrayBuffer());
  const { error } = await db.storage.from("deliverables").upload(path, buf, {
    contentType: file.type || "application/octet-stream",
    upsert: false,
  });
  if (!error) {
    await db.from("deliverables").insert({
      order_id: orderId,
      site,
      user_id: userId,
      label,
      kind,
      file_path: path,
      file_name: file.name,
    });
    // Reflect the stage on the order so the customer's timeline moves.
    if (kind === "final") {
      await db.from("orders").update({ status: "completed", updated_at: new Date().toISOString() }).eq("id", orderId);
    } else {
      await db.from("orders").update({ status: "draft_delivered", updated_at: new Date().toISOString() }).eq("id", orderId).neq("status", "completed");
    }

    // Record delivery in timeline events table
    try {
      await db.from("order_timeline_events").insert({
        order_id: orderId,
        event_type: "delivery",
        sender_role: "seller",
        sender_name: "Chanuka Jeewantha",
        message: `Chanuka delivered: ${label}`,
        files: [
          {
            id: `deliv-${Date.now()}`,
            name: file.name,
            url: path,
            type: ext,
            size: `${Math.round(file.size / 1024)} KB`,
          },
        ],
        metadata: { is_revision: kind === "revision" },
      });
    } catch {}

    // Send an automated delivery notification message into the order's in-app chat
    try {
      const { data: ordRow } = await db.from("orders").select("customer_name,ref").eq("id", orderId).maybeSingle();
      const customerName = ordRow?.customer_name || "there";
      const timestamp = new Date().toISOString();
      const formattedTime = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      const deliveryChatMsg = {
        id: `msg-delivery-${Date.now()}`,
        sender: "Chanuka Jeewantha",
        role: "seller",
        text: `📦 Hi ${customerName}! I have completed and delivered your customized CV (${file.name}). Please download and review your documents below. If you need any tweaks, request a revision, or click Approve & Complete if you love it!`,
        time: formattedTime,
        timestamp,
      };

      await db.from("deliverables").insert({
        order_id: orderId,
        label: `Chat from Chanuka Jeewantha: Delivery update`,
        file_path: "chat:seller",
        file_name: JSON.stringify(deliveryChatMsg),
        kind: "chat_message",
        site,
      });
    } catch {}
  }
  revalidatePath(`/admin/orders/${orderId}`);
  revalidatePath("/admin/orders");
  revalidatePath("/order-workflow");
  revalidatePath("/dashboard");
}

export async function deleteDeliverable(id: string, orderId: string) {
  await authorizeRecord("orders", orderId);
  await authorizeRecord("deliverables", id);
  const db = createAdminClient();
  const { data: row } = await db.from("deliverables").select("file_path").eq("id", id).maybeSingle();
  if (row?.file_path) await db.storage.from("deliverables").remove([row.file_path]);
  await db.from("deliverables").delete().eq("id", id);
  revalidatePath(`/admin/orders/${orderId}`);
  revalidatePath("/order-workflow");
  revalidatePath("/dashboard");
}
