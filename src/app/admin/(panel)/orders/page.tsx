import Link from "next/link";
import { Badge, EmptyState, PageTitle } from "@/components/admin/ui";
import { SiteFilter, SiteBadge } from "@/components/admin/SiteFilter";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin, resolveAdminSite, supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

const paymentTone: Record<string, string> = {
  paid: "bg-green-100 text-green-700",
  pending: "bg-amber-100 text-amber-700",
  refunded: "bg-blue-100 text-blue-700",
  cancelled: "bg-slate-100 text-slate-600",
  failed: "bg-red-100 text-red-700",
  charged_back: "bg-red-100 text-red-800",
};

export default async function OrdersPage({ searchParams }: { searchParams: Promise<{ site?: string }> }) {
  if (!supabaseConfigured()) return null;
  const { site = "" } = await searchParams;
  const access = await requireAdmin();
  const scopedSite = resolveAdminSite(site, access);
  const db = createAdminClient();
  let q = db
    .from("orders")
    .select("id,ref,site,package_name,level_name,delivery_window,total_usd,status,payment_status,customer_name,customer_email,created_at");
  if (scopedSite) q = q.eq("site", scopedSite); else q = q.in("site", access.sites);
  const { data: orders } = await q.order("created_at", { ascending: false });

  return (
    <>
      <PageTitle title="Orders" sub="Every order placed through both sites (.com and .lk)." />
      <SiteFilter active={scopedSite ?? ""} base="/admin/orders" allowed={access.sites} />
      {(orders ?? []).length === 0 ? (
        <EmptyState>No orders yet. They appear here the moment a customer checks out.</EmptyState>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-line bg-white md:overflow-x-auto">
          <table className="admin-responsive-table w-full text-left text-[13.5px]">
            <thead className="border-b border-line bg-[#f7f9fc] text-[12px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Ref</th>
                <th className="px-4 py-3 font-semibold">Site</th>
                <th className="px-4 py-3 font-semibold">Customer</th>
                <th className="px-4 py-3 font-semibold">Package</th>
                <th className="px-4 py-3 font-semibold">Total</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Payment</th>
                <th className="px-4 py-3 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {(orders ?? []).map((o) => (
                <tr key={o.id} className="hover:bg-[#f7f9fc]">
                  <td data-label="Ref" className="px-4 py-3">
                    <div className="flex flex-col gap-0.5">
                      <Link href={`/admin/orders/${o.id}`} className="font-semibold text-brand hover:underline">{o.ref}</Link>
                      <Link href={`/order-workflow?id=${o.id}&role=seller`} className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1dbf73] hover:underline">
                        Workflow →
                      </Link>
                    </div>
                  </td>
                  <td data-label="Site" className="px-4 py-3"><SiteBadge site={o.site} /></td>
                  <td data-label="Customer" className="px-4 py-3">
                    <p className="font-medium text-ink">{o.customer_name ?? "-"}</p>
                    <p className="text-[12px] text-muted">{o.customer_email ?? ""}</p>
                  </td>
                  <td data-label="Package" className="px-4 py-3 text-ink-soft">{o.package_name ?? "-"}<br /><span className="text-[12px] text-muted">{o.level_name} · {o.delivery_window}</span></td>
                  <td data-label="Total" className="px-4 py-3 font-semibold text-ink">{o.total_usd != null ? (o.site === "lk" ? `Rs ${Number(o.total_usd).toLocaleString()}` : `$${Number(o.total_usd).toLocaleString()}`) : "-"}</td>
                  <td data-label="Status" className="px-4 py-3"><Badge status={o.status} /></td>
                  <td data-label="Payment" className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${paymentTone[o.payment_status] ?? paymentTone.pending}`}>
                      {String(o.payment_status ?? "pending").replace("_", " ")}
                    </span>
                  </td>
                  <td data-label="Date" className="px-4 py-3 text-[12.5px] text-muted">{new Date(o.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
