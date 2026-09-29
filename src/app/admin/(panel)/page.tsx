import Link from "next/link";
import { Badge, Card, PageTitle, Stat } from "@/components/admin/ui";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  if (!supabaseConfigured()) return null;
  const db = createAdminClient();

  const [ordersNew, ordersActive, briefsNew, postsPub, recentOrders, recentBriefs] =
    await Promise.all([
      db.from("orders").select("id", { count: "exact", head: true }).eq("status", "new"),
      db.from("orders").select("id", { count: "exact", head: true }).in("status", ["new", "in_progress", "revision"]),
      db.from("intake_submissions").select("id", { count: "exact", head: true }).eq("handled", false),
      db.from("blog_posts").select("id", { count: "exact", head: true }).eq("status", "published"),
      db.from("orders").select("id,ref,package_name,customer_name,status,total_usd,created_at").order("created_at", { ascending: false }).limit(6),
      db.from("intake_submissions").select("id,name,target_role,created_at,handled").order("created_at", { ascending: false }).limit(6),
    ]);

  return (
    <>
      <PageTitle title="Dashboard" sub="Orders, briefs and content at a glance." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="New orders" value={ordersNew.count ?? 0} href="/admin/orders" />
        <Stat label="Active orders" value={ordersActive.count ?? 0} href="/admin/orders" />
        <Stat label="New briefs" value={briefsNew.count ?? 0} href="/admin/submissions" />
        <Stat label="Published posts" value={postsPub.count ?? 0} href="/admin/blog" />
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-ink">Recent orders</h2>
            <Link href="/admin/orders" className="text-[13px] font-semibold text-brand">All →</Link>
          </div>
          <div className="divide-y divide-line">
            {(recentOrders.data ?? []).map((o) => (
              <Link key={o.id} href={`/admin/orders/${o.id}`} className="flex items-center justify-between gap-3 py-2.5 hover:opacity-70">
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-medium text-ink">{o.package_name ?? "Order"} · {o.customer_name ?? "-"}</p>
                  <p className="text-[12px] text-muted">{o.ref} · {new Date(o.created_at).toLocaleDateString()}</p>
                </div>
                <Badge status={o.status} />
              </Link>
            ))}
            {(recentOrders.data ?? []).length === 0 && <p className="py-4 text-[13px] text-muted">No orders yet.</p>}
          </div>
        </Card>

        <Card>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[15px] font-bold text-ink">Recent CV briefs</h2>
            <Link href="/admin/submissions" className="text-[13px] font-semibold text-brand">All →</Link>
          </div>
          <div className="divide-y divide-line">
            {(recentBriefs.data ?? []).map((s) => (
              <Link key={s.id} href={`/admin/submissions/${s.id}`} className="flex items-center justify-between gap-3 py-2.5 hover:opacity-70">
                <div className="min-w-0">
                  <p className="truncate text-[13.5px] font-medium text-ink">{s.name ?? "-"}</p>
                  <p className="truncate text-[12px] text-muted">{s.target_role ?? "-"} · {new Date(s.created_at).toLocaleDateString()}</p>
                </div>
                {!s.handled && <Badge status="new" label="new" />}
              </Link>
            ))}
            {(recentBriefs.data ?? []).length === 0 && <p className="py-4 text-[13px] text-muted">No briefs yet.</p>}
          </div>
        </Card>
      </div>
    </>
  );
}
