import Link from "next/link";
import { Badge, EmptyState, PageTitle } from "@/components/admin/ui";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function OrdersPage() {
  if (!supabaseConfigured()) return null;
  const db = createAdminClient();
  const { data: orders } = await db
    .from("orders")
    .select("id,ref,package_name,level_name,delivery_window,total_usd,status,payment_status,customer_name,customer_email,created_at")
    .order("created_at", { ascending: false });

  return (
    <>
      <PageTitle title="Orders" sub="Every order placed through the site." />
      {(orders ?? []).length === 0 ? (
        <EmptyState>No orders yet. They appear here the moment a customer checks out.</EmptyState>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-line bg-white md:overflow-x-auto">
          <table className="admin-responsive-table w-full text-left text-[13.5px]">
            <thead className="border-b border-line bg-[#f7f9fc] text-[12px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Ref</th>
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
                    <Link href={`/admin/orders/${o.id}`} className="font-semibold text-brand">{o.ref}</Link>
                  </td>
                  <td data-label="Customer" className="px-4 py-3">
                    <p className="font-medium text-ink">{o.customer_name ?? "-"}</p>
                    <p className="text-[12px] text-muted">{o.customer_email ?? ""}</p>
                  </td>
                  <td data-label="Package" className="px-4 py-3 text-ink-soft">{o.package_name ?? "-"}<br /><span className="text-[12px] text-muted">{o.level_name} · {o.delivery_window}</span></td>
                  <td data-label="Total" className="px-4 py-3 font-semibold text-ink">{o.total_usd != null ? `$${o.total_usd}` : "-"}</td>
                  <td data-label="Status" className="px-4 py-3"><Badge status={o.status} /></td>
                  <td data-label="Payment" className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${o.payment_status === "paid" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                      {o.payment_status === "paid" ? "Paid" : "Pending"}
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
