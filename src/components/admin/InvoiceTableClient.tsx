"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Invoice, InvoiceStatus } from "@/lib/invoices";
import { formatInvoiceMoney } from "@/lib/invoices";
import { Badge } from "@/components/admin/ui";
import { updateInvoiceStatus, deleteInvoice } from "@/app/admin/(panel)/invoices/actions";

interface Props {
  initialInvoices: Invoice[];
}

export function InvoiceTableClient({ initialInvoices }: Props) {
  const router = useRouter();
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [siteFilter, setSiteFilter] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleCopyLink = async (invoice: Invoice) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const url = `${origin}/invoice/${invoice.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(invoice.id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // Fallback
      prompt("Copy invoice link:", url);
    }
  };

  const handleStatusChange = async (id: string, newStatus: InvoiceStatus) => {
    // Optimistic update
    setInvoices((prev) =>
      prev.map((inv) => (inv.id === id ? { ...inv, status: newStatus } : inv))
    );
    startTransition(async () => {
      await updateInvoiceStatus(id, newStatus);
      router.refresh();
    });
  };

  const handleDelete = async (id: string, invoiceNumber: string) => {
    if (!confirm(`Are you sure you want to delete invoice ${invoiceNumber}? This action cannot be undone.`)) {
      return;
    }
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
    startTransition(async () => {
      await deleteInvoice(id);
      router.refresh();
    });
  };

  // Filter invoices
  const filtered = invoices.filter((inv) => {
    if (statusFilter !== "all" && inv.status !== statusFilter) return false;
    if (siteFilter !== "all" && inv.site !== siteFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchNum = inv.invoice_number.toLowerCase().includes(q);
      const matchName = inv.to_name.toLowerCase().includes(q);
      const matchEmail = (inv.to_email ?? "").toLowerCase().includes(q);
      const matchCompany = (inv.to_company ?? "").toLowerCase().includes(q);
      if (!matchNum && !matchName && !matchEmail && !matchCompany) return false;
    }
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Search & Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search invoice #, client name, email..."
            className="w-full rounded-xl border border-line bg-white px-3.5 py-2 pl-9 text-[13.5px] text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          />
          <svg
            className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-2.5 top-2.5 text-[11px] text-muted hover:text-ink"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Site Filter */}
          <select
            value={siteFilter}
            onChange={(e) => setSiteFilter(e.target.value)}
            className="rounded-xl border border-line bg-white px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
          >
            <option value="all">All Sites</option>
            <option value="com">Global (.com - USD)</option>
            <option value="lk">Sri Lanka (.lk - LKR)</option>
          </select>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-line bg-white px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
            <option value="overdue">Overdue</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13.5px]">
            <thead className="border-b border-line bg-gray-50/75 text-[11.5px] font-bold uppercase tracking-wider text-muted">
              <tr>
                <th className="px-5 py-3.5">Invoice #</th>
                <th className="px-5 py-3.5">Client</th>
                <th className="px-5 py-3.5">Date</th>
                <th className="px-5 py-3.5">Amount</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-muted">
                    No invoices match your search or filter criteria.
                  </td>
                </tr>
              ) : (
                filtered.map((inv) => (
                  <tr key={inv.id} className="transition-colors hover:bg-gray-50/50">
                    {/* Invoice Number & Site */}
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/admin/invoices/${inv.id}`}
                          className="font-bold text-brand hover:underline font-mono"
                        >
                          {inv.invoice_number}
                        </Link>
                        <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-muted">
                          {inv.site}
                        </span>
                      </div>
                      {inv.order_id && (
                        <p className="mt-0.5 text-[11px] text-muted">
                          Linked Order: <span className="font-mono">{inv.order_id.slice(0, 8)}...</span>
                        </p>
                      )}
                    </td>

                    {/* Client */}
                    <td className="px-5 py-4 align-top">
                      <div className="font-semibold text-ink">{inv.to_name}</div>
                      {inv.to_company && (
                        <div className="text-[12px] text-muted">{inv.to_company}</div>
                      )}
                      {inv.to_email && (
                        <div className="text-[12px] text-muted">{inv.to_email}</div>
                      )}
                    </td>

                    {/* Dates */}
                    <td className="px-5 py-4 align-top text-[12.5px] text-muted">
                      <div>Issued: <span className="font-medium text-ink">{inv.issue_date}</span></div>
                      {inv.due_date && (
                        <div className="mt-0.5">Due: <span className="text-gray-500">{inv.due_date}</span></div>
                      )}
                    </td>

                    {/* Amount */}
                    <td className="px-5 py-4 align-top">
                      <div className="font-bold text-ink">
                        {formatInvoiceMoney(inv.total, inv.currency)}
                      </div>
                      <div className="text-[11px] text-muted">
                        {inv.items?.length || 0} item{(inv.items?.length || 0) === 1 ? "" : "s"}
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-center gap-2">
                        <Badge status={inv.status} />
                        <select
                          value={inv.status}
                          disabled={isPending}
                          onChange={(e) => handleStatusChange(inv.id, e.target.value as InvoiceStatus)}
                          className="rounded border border-line bg-transparent px-1.5 py-0.5 text-[11px] text-muted hover:border-gray-400 focus:outline-none"
                          title="Change status"
                        >
                          <option value="draft">Draft</option>
                          <option value="sent">Sent</option>
                          <option value="paid">Paid</option>
                          <option value="overdue">Overdue</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4 align-top text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleCopyLink(inv)}
                          title="Copy Client Invoice Link"
                          className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-[12px] font-medium transition-all ${
                            copiedId === inv.id
                              ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                              : "border-line bg-white text-muted hover:bg-gray-50 hover:text-ink"
                          }`}
                        >
                          {copiedId === inv.id ? (
                            <>
                              <svg className="h-3.5 w-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <svg className="h-3.5 w-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              <span>Link</span>
                            </>
                          )}
                        </button>

                        <Link
                          href={`/invoice/${inv.id}`}
                          target="_blank"
                          title="Open Client View in New Tab"
                          className="inline-flex items-center gap-1 rounded-lg border border-line bg-white px-2.5 py-1 text-[12px] font-medium text-muted hover:bg-gray-50 hover:text-ink transition-colors"
                        >
                          <svg className="h-3.5 w-3.5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Preview</span>
                        </Link>

                        <Link
                          href={`/admin/invoices/${inv.id}`}
                          title="Edit Invoice"
                          className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-2.5 py-1 text-[12px] font-semibold text-ink hover:bg-gray-200 transition-colors"
                        >
                          Edit
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDelete(inv.id, inv.invoice_number)}
                          title="Delete Invoice"
                          className="rounded-lg p-1 text-gray-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                        >
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
