import Link from "next/link";
import { notFound } from "next/navigation";
import { OrderControls } from "./OrderControls";
import { uploadDeliverable, deleteDeliverable } from "../../actions";
import { Badge, Card } from "@/components/admin/ui";
import { createAdminClient } from "@/lib/supabase/admin";
import { canManageSite, requireAdmin, supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function OrderDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!supabaseConfigured()) return null;
  const db = createAdminClient();
  const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
  const { data: o } = await (isUuid
    ? db.from("orders").select("*").eq("id", id).maybeSingle()
    : db.from("orders").select("*").eq("ref", id).maybeSingle());
  if (!o) notFound();
  const access = await requireAdmin();
  if (!canManageSite(access, o.site)) notFound();

  const { data: brief } = await db
    .from("intake_submissions")
    .select("id,name,target_role,handled")
    .eq("order_id", o.id)
    .maybeSingle();

  const { data: files } = await db
    .from("deliverables")
    .select("id,label,kind,file_name,created_at")
    .eq("order_id", o.id)
    .order("created_at", { ascending: false });

  const rows: Array<[string, string]> = [
    ["Customer", o.customer_name ?? "-"],
    ["Email", o.customer_email ?? "-"],
    ["Phone", o.customer_phone ?? "-"],
    ["Account", o.user_id ? "Registered customer" : "Guest / no account"],
    ["Payment", (o.payment_status ?? "pending").toUpperCase()],
    ["Target role", o.target_role ?? "-"],
    ["Target market", o.target_country ?? "-"],
    ["Package", o.package_name ?? "-"],
    ["Experience", o.level_name ?? "-"],
    ["Delivery", o.delivery_window ?? "-"],
    ["Total", o.total_usd != null ? (o.site === "lk" ? `Rs ${o.total_usd}` : o.site === "uk" ? `£${o.total_usd}` : `$${o.total_usd}`) : "-"],
    ["Placed", new Date(o.created_at).toLocaleString()],
  ];

  return (
    <>
      <Link href="/admin/orders" className="text-[13px] font-semibold text-brand">← Orders</Link>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-[22px] font-bold text-ink">{o.ref}</h1>
          <Badge status={o.status} />
        </div>
        <div className="flex items-center gap-2.5">
          <Link
            href={`/order-workflow?id=${o.id}&role=seller`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#1dbf73] bg-[#eefaf4] px-3.5 py-1.5 text-[13px] font-bold text-[#1dbf73] shadow-xs hover:bg-[#1dbf73] hover:text-white transition-all"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Order Workflow View
          </Link>
          <Link
            href={`/admin/invoices/new?order_id=${o.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-3.5 py-1.5 text-[13px] font-semibold text-ink shadow-xs hover:border-brand hover:text-brand transition-all"
          >
            <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Generate Invoice
          </Link>
        </div>
      </div>

      {o.status === "revision" && (
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-[#fed7aa] bg-[#fffaf5] p-4 text-[13.5px] text-[#7c2d12] shadow-xs">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fef3c7] text-[#d97706] font-bold">
              ✎
            </span>
            <div>
              <p className="font-bold text-[#b45309]">Client Requested a Revision</p>
              <p className="text-[12.5px] text-[#9a3412]">
                The buyer has requested adjustments on this order. View feedback notes and deliver the updated documents in the order workflow.
              </p>
            </div>
          </div>
          <Link
            href={`/order-workflow?id=${o.id}&role=seller`}
            className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-[#1dbf73] px-4 py-2 text-[12.5px] font-bold text-white shadow-xs hover:bg-[#19a463] transition"
          >
            <span>View Feedback &amp; Deliver</span>
            <span>→</span>
          </Link>
        </div>
      )}

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_320px]">
        <Card>
          <dl className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {rows.map(([k, v]) => (
              <div key={k} className="border-b border-line py-3">
                <dt className="text-[12px] font-semibold uppercase tracking-wide text-muted">{k}</dt>
                <dd className="mt-1 break-words text-[14px] text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-5">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-muted">Linked brief</p>
            {brief ? (
              <Link href={`/admin/submissions/${brief.id}`} className="mt-1 inline-block text-[14px] font-medium text-brand">
                {brief.name ?? "View brief"} · {brief.target_role ?? ""} →
              </Link>
            ) : (
              <p className="mt-1 text-[13.5px] text-muted">No brief submitted for this order yet.</p>
            )}
          </div>

          <div className="mt-6 border-t border-line pt-5">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-muted">Deliverables (customer downloads these)</p>
            {(files ?? []).length === 0 ? (
              <p className="mt-1 text-[13.5px] text-muted">Nothing delivered yet.</p>
            ) : (
              <ul className="mt-3 divide-y divide-line">
                {(files ?? []).map((f) => (
                  <li key={f.id} className="flex items-center justify-between gap-3 py-2.5">
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-medium text-ink">{f.label}</span>
                      <span className="text-[11.5px] uppercase tracking-wide text-muted">{f.kind} · {f.file_name}</span>
                    </span>
                    <form action={deleteDeliverable.bind(null, f.id, o.id)}>
                      <button className="shrink-0 text-[12.5px] font-semibold text-red-600 hover:underline">Remove</button>
                    </form>
                  </li>
                ))}
              </ul>
            )}

            <form action={uploadDeliverable} className="mt-4 rounded-[12px] border border-line bg-[#f7f9fc] p-4">
              <input type="hidden" name="order_id" value={o.id} />
              <p className="text-[12.5px] font-semibold text-ink">Upload a document for the customer</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <input name="label" placeholder="e.g. First draft CV" required className="rounded-[8px] border border-line-strong bg-white px-3 py-2 text-[13.5px] outline-none focus:border-brand" />
                <select name="kind" className="rounded-[8px] border border-line-strong bg-white px-3 py-2 text-[13.5px] outline-none focus:border-brand">
                  <option value="draft">Draft</option>
                  <option value="revision">Revision</option>
                  <option value="final">Final</option>
                </select>
              </div>
              <input name="file" type="file" required className="mt-3 block w-full text-[12.5px]" />
              <button className="mt-3 rounded-full bg-brand px-5 py-2 text-[13px] font-semibold text-white hover:bg-brand-deep">Upload &amp; deliver</button>
            </form>
          </div>
        </Card>

        <OrderControls id={o.id} status={o.status} payment={o.payment_status ?? "pending"} notes={o.admin_notes ?? ""} />
      </div>
    </>
  );
}
