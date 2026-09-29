import "server-only";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * Customer-facing reads. These use the signed-in user's own session, so
 * Row Level Security guarantees a customer only ever sees their own
 * orders, brief and documents. Signed download links for the private
 * deliverables bucket are minted server-side after that ownership check.
 */

export type CustomerOrder = {
  id: string;
  ref: string;
  package_name: string | null;
  level_name: string | null;
  delivery_window: string | null;
  total_usd: number | null;
  status: string;
  payment_status: string;
  target_role: string | null;
  target_country: string | null;
  created_at: string;
};

export type Deliverable = {
  id: string;
  order_id: string | null;
  label: string;
  file_name: string | null;
  kind: string | null;
  created_at: string;
  url: string | null;
};

const ORDER_COLS =
  "id, ref, package_name, level_name, delivery_window, total_usd, status, payment_status, target_role, target_country, created_at";

export async function getMyOrders(): Promise<CustomerOrder[]> {
  const db = await createClient();
  const { data } = await db.from("orders").select(ORDER_COLS).order("created_at", { ascending: false });
  return (data as CustomerOrder[] | null) ?? [];
}

export async function getMyOrder(id: string): Promise<CustomerOrder | null> {
  const db = await createClient();
  const { data } = await db.from("orders").select(ORDER_COLS).eq("id", id).maybeSingle();
  return (data as CustomerOrder | null) ?? null;
}

/** Whether this order already has a completed brief (CV + details). */
export async function orderHasBrief(orderId: string): Promise<boolean> {
  const db = await createClient();
  const { data } = await db.from("intake_submissions").select("id, cv_path").eq("order_id", orderId).maybeSingle();
  return !!data;
}

export async function getMyDeliverables(orderId?: string): Promise<Deliverable[]> {
  const db = await createClient();
  let q = db.from("deliverables").select("id, order_id, label, file_name, kind, file_path, created_at").order("created_at", { ascending: false });
  if (orderId) q = q.eq("order_id", orderId);
  const { data } = await q;
  const rows = (data as Array<Omit<Deliverable, "url"> & { file_path: string }> | null) ?? [];
  if (rows.length === 0) return [];

  // RLS confirmed these belong to the user; mint short-lived signed links.
  const admin = createAdminClient();
  const withUrls = await Promise.all(
    rows.map(async (r) => {
      const { data: signed } = await admin.storage.from("deliverables").createSignedUrl(r.file_path, 60 * 30);
      return {
        id: r.id,
        order_id: r.order_id,
        label: r.label,
        file_name: r.file_name,
        kind: r.kind,
        created_at: r.created_at,
        url: signed?.signedUrl ?? null,
      };
    }),
  );
  return withUrls;
}

/** Order ids that already have a completed brief. */
export async function getMyBriefOrderIds(): Promise<Set<string>> {
  const db = await createClient();
  const { data } = await db.from("intake_submissions").select("order_id");
  const set = new Set<string>();
  for (const r of (data as Array<{ order_id: string | null }> | null) ?? []) {
    if (r.order_id) set.add(r.order_id);
  }
  return set;
}

/** The customer's display name, if set. */
export async function getMyName(): Promise<string> {
  const db = await createClient();
  const { data } = await db.from("profiles").select("full_name").maybeSingle();
  return (data as { full_name: string | null } | null)?.full_name ?? "";
}
