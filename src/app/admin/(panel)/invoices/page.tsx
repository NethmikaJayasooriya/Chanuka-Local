import Link from "next/link";
import { getInvoices } from "./actions";
import { PageTitle, Stat } from "@/components/admin/ui";
import { InvoiceTableClient } from "@/components/admin/InvoiceTableClient";
import { formatInvoiceMoney } from "@/lib/invoices";

export const dynamic = "force-dynamic";

export default async function InvoicesPage() {
  const invoices = await getInvoices();

  // Compute metrics
  const totalCount = invoices.length;
  const paidInvoices = invoices.filter((i) => i.status === "paid");
  const pendingInvoices = invoices.filter((i) => i.status === "sent");
  const overdueInvoices = invoices.filter((i) => i.status === "overdue");
  const draftInvoices = invoices.filter((i) => i.status === "draft");

  // Sum up USD and LKR totals for quick executive stats
  const totalUsdPaid = paidInvoices
    .filter((i) => i.currency === "USD")
    .reduce((sum, i) => sum + i.total, 0);

  const totalUsdPending = pendingInvoices
    .filter((i) => i.currency === "USD")
    .reduce((sum, i) => sum + i.total, 0);

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <PageTitle
            title="Invoice Generator"
            sub="Create, customize, track, and share professional career service invoices"
          />
        </div>
        <div>
          <Link
            href="/admin/invoices/new"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-[13.5px] font-semibold text-white shadow-sm hover:bg-brand-dark transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Create New Invoice
          </Link>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat
          label="Total Invoices"
          value={
            <div className="flex items-baseline gap-2">
              <span>{totalCount}</span>
              <span className="text-[13px] font-normal text-muted">all time</span>
            </div>
          }
        />
        <Stat
          label="Paid Invoices"
          value={
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-emerald-600">{paidInvoices.length}</span>
                <span className="text-[13px] font-normal text-muted">collected</span>
              </div>
              <p className="mt-1 text-[12px] font-medium text-emerald-700">
                {formatInvoiceMoney(totalUsdPaid, "USD")}
              </p>
            </div>
          }
        />
        <Stat
          label="Pending / Sent"
          value={
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-sky-600">{pendingInvoices.length}</span>
                <span className="text-[13px] font-normal text-muted">awaiting pay</span>
              </div>
              <p className="mt-1 text-[12px] font-medium text-sky-700">
                {formatInvoiceMoney(totalUsdPending, "USD")}
              </p>
            </div>
          }
        />
        <Stat
          label="Action Needed"
          value={
            <div className="flex items-baseline gap-2">
              <span className={overdueInvoices.length > 0 ? "text-rose-600" : "text-ink"}>
                {overdueInvoices.length} overdue
              </span>
              <span className="text-[12px] font-normal text-muted">
                · {draftInvoices.length} drafts
              </span>
            </div>
          }
        />
      </div>

      {/* Main Invoices Table */}
      <InvoiceTableClient initialInvoices={invoices} />
    </div>
  );
}
