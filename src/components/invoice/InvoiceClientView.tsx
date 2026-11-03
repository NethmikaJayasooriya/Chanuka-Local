"use client";

import { useState } from "react";
import Link from "next/link";
import {
  type Invoice,
  formatInvoiceMoney,
  getCurrencySymbol,
} from "@/lib/invoices";
import { downloadInvoiceAsPdf } from "@/lib/generateInvoicePdf";

interface Props {
  invoice: Invoice;
}

export function InvoiceClientView({ invoice }: Props) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadPdf = async () => {
    setIsDownloadingPdf(true);
    setDownloadSuccess(false);
    try {
      await downloadInvoiceAsPdf(invoice, "invoice-paper");
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setTimeout(() => setIsDownloadingPdf(false), 800);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopyLink = async () => {
    if (typeof window !== "undefined") {
      const url = window.location.href;
      try {
        await navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      } catch {
        prompt("Copy invoice link:", url);
      }
    }
  };

  const themeColor = invoice.theme_color || "#17355c";
  const invoiceTitle = invoice.invoice_title || "INVOICE";
  const currencySymbol = getCurrencySymbol(invoice.currency);
  const alignments = invoice.layout?.section_alignments || {};
  const headerAlign = alignments.header || (invoice.layout?.header_layout === "sender_right" ? "right" : "left");
  const billToAlign = alignments.bill_to || (invoice.layout?.client_layout === "client_right" ? "right" : (invoice.layout?.client_layout === "centered" ? "center" : "left"));
  const itemsAlign = alignments.items || "left";
  const totalsAlign = alignments.totals || invoice.layout?.totals_align || "right";
  const payNotesAlign = alignments.payment_and_notes || (invoice.layout?.payment_layout === "payment_right" ? "right" : "left");
  const footerAlign = alignments.footer || invoice.layout?.footer_align || "center";

  const sectionOrder = invoice.layout?.section_order && invoice.layout.section_order.length > 0
    ? invoice.layout.section_order
    : ["header", "bill_to", "items", "totals", "payment_and_notes", "footer"];

  const sectionSpacing = invoice.layout?.section_spacing || {};
  const spacers = invoice.layout?.spacers || {};

  // 1. Header
  const renderHeader = () => {
    const sender = (
      <div
        key="sender"
        className={`flex-1 ${
          headerAlign === "center"
            ? "text-center"
            : headerAlign === "right"
            ? "sm:text-right text-left"
            : "text-left"
        }`}
      >
        <span
          className="text-[22px] sm:text-[25px] font-black tracking-tight block leading-tight"
          style={{ color: themeColor }}
        >
          {invoice.from_name}
        </span>
        {invoice.from_title && (
          <p className="text-[13px] font-medium text-slate-500 mt-0.5">
            {invoice.from_title}
          </p>
        )}
        <div className="mt-2 text-[12.5px] text-slate-500 space-y-0.5">
          {invoice.from_email && <p>{invoice.from_email}</p>}
          {invoice.from_phone && <p>{invoice.from_phone}</p>}
          {invoice.from_address && <p>{invoice.from_address}</p>}
        </div>
      </div>
    );

    const invoiceInfo = (
      <div
        key="info"
        className={`shrink-0 ${
          headerAlign === "center"
            ? "text-center mt-3 sm:mt-0"
            : headerAlign === "right"
            ? "sm:text-left text-left"
            : "sm:text-right text-left"
        }`}
      >
        <span
          className="text-[28px] sm:text-[34px] font-black uppercase tracking-wider block leading-none"
          style={{ color: themeColor }}
        >
          {invoiceTitle}
        </span>
        <div className="mt-2 text-[13px] text-slate-600 space-y-1">
          <p>
            <span className="text-slate-400">Invoice #:</span>{" "}
            <span className="font-bold text-slate-900">{invoice.invoice_number}</span>
          </p>
          <p>
            <span className="text-slate-400">Date:</span>{" "}
            <span className="text-slate-700">{invoice.issue_date}</span>
          </p>
          {invoice.due_date && (
            <p>
              <span className="text-slate-400">Due Date:</span>{" "}
              <span className="text-slate-900 font-semibold">{invoice.due_date}</span>
            </p>
          )}
          <div className="pt-1">
            <span
              className={`inline-block rounded-md border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                invoice.status === "paid"
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : "bg-slate-100 text-slate-700 border-slate-200"
              }`}
            >
              {invoice.status === "paid" ? "✓ Paid" : "Payment Due"}
            </span>
          </div>
        </div>
      </div>
    );

    return (
      <div
        className={`flex flex-col border-b border-slate-200 pb-8 ${
          headerAlign === "center"
            ? "items-center text-center gap-6"
            : "sm:flex-row sm:items-start sm:justify-between gap-6"
        }`}
      >
        {headerAlign === "right" ? [invoiceInfo, sender] : [sender, invoiceInfo]}
      </div>
    );
  };

  // 2. Billed To
  const renderBillTo = () => (
    <div
      className={`my-6 flex ${
        billToAlign === "right"
          ? "justify-end text-right"
          : billToAlign === "center"
          ? "justify-center text-center"
          : "justify-start text-left"
      }`}
    >
      <div className="max-w-sm w-full">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
          Billed To
        </span>
        <p className="text-[16px] font-bold text-slate-900">{invoice.to_name}</p>
        {invoice.to_company && (
          <p className="text-[13px] text-slate-600">{invoice.to_company}</p>
        )}
        {invoice.to_email && (
          <p className="text-[12.5px] text-slate-500">{invoice.to_email}</p>
        )}
        {invoice.to_address && (
          <p className="text-[12.5px] text-slate-500">{invoice.to_address}</p>
        )}
      </div>
    </div>
  );

  // 3. Items Table
  const renderItems = () => (
    <div className={`my-6 ${itemsAlign === "right" ? "text-right" : itemsAlign === "center" ? "text-center" : "text-left"}`}>
      <table className="w-full text-left text-[13.5px]">
        <thead>
          <tr className="border-b-2 border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <th className="py-2.5">Description</th>
            <th className="py-2.5 px-3 text-center w-16">Qty</th>
            <th className="py-2.5 px-3 text-right w-28">Rate ({currencySymbol.trim()})</th>
            <th className="py-2.5 pl-3 text-right w-32">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {invoice.items.map((item, idx) => (
            <tr key={item.id || idx}>
              <td className="py-3 align-top font-medium text-slate-800">
                {item.description}
              </td>
              <td className="py-3 px-3 align-top text-center text-slate-600">
                {item.quantity}
              </td>
              <td className="py-3 px-3 align-top text-right text-slate-600 font-mono">
                {Number(item.unit_price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3 pl-3 align-top text-right font-bold text-slate-900 font-mono">
                {currencySymbol}
                {Number(item.total).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // 4. Totals
  const renderTotals = () => (
    <div
      className={`flex ${
        totalsAlign === "left"
          ? "justify-start"
          : totalsAlign === "center"
          ? "justify-center"
          : "justify-end"
      }`}
    >
      <div className="w-64 space-y-2 text-[13.5px] border-t border-slate-200 pt-3">
        <div className="flex justify-between text-slate-600">
          <span>Subtotal</span>
          <span className="font-semibold text-slate-800 font-mono">
            {formatInvoiceMoney(invoice.subtotal, invoice.currency)}
          </span>
        </div>

        {invoice.discount_amount > 0 && (
          <div className="flex justify-between text-emerald-700 text-[12.5px]">
            <span>
              Discount {invoice.discount_type === "percentage" ? `(${invoice.discount_value}%)` : ""}
            </span>
            <span className="font-semibold font-mono">
              -{formatInvoiceMoney(invoice.discount_amount, invoice.currency)}
            </span>
          </div>
        )}

        {invoice.tax_amount > 0 && (
          <div className="flex justify-between text-slate-600 text-[12.5px]">
            <span>Tax ({invoice.tax_rate}%)</span>
            <span className="font-semibold font-mono">
              +{formatInvoiceMoney(invoice.tax_amount, invoice.currency)}
            </span>
          </div>
        )}

        <div className="border-t-2 border-slate-300 pt-2 flex justify-between items-baseline">
          <span className="text-[15px] font-bold text-slate-900 uppercase">Total Due</span>
          <span className="text-[20px] font-black font-mono" style={{ color: themeColor }}>
            {formatInvoiceMoney(invoice.total, invoice.currency)}
          </span>
        </div>
      </div>
    </div>
  );

  // 5. Payment Details & Notes (High-contrast, crystal clear executive design)
  const renderPaymentAndNotes = () => {
    const paymentBlock = invoice.payment_methods && (
      <div key="pay" className={payNotesAlign === "right" ? "sm:text-right text-left" : "text-left"}>
        <span className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
          Payment Details
        </span>
        <div className="space-y-2 text-[13.5px]">
          {invoice.payment_methods.bank_name && (
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Bank:</span>
              <span className="font-bold text-slate-900">{invoice.payment_methods.bank_name}</span>
            </div>
          )}
          {invoice.payment_methods.account_name && (
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Account Name:</span>
              <span className="font-semibold text-slate-900">{invoice.payment_methods.account_name}</span>
            </div>
          )}
          {invoice.payment_methods.account_number && (
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Account No:</span>
              <span className="font-extrabold font-mono text-[15px] tracking-wider text-slate-950">
                {invoice.payment_methods.account_number}
              </span>
            </div>
          )}
          {invoice.payment_methods.swift_code && (
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">SWIFT / BIC:</span>
              <span className="font-bold font-mono tracking-wider text-slate-900">
                {invoice.payment_methods.swift_code}
              </span>
            </div>
          )}
        </div>
      </div>
    );

    const notesBlock = invoice.notes && (
      <div key="notes" className={payNotesAlign === "right" ? "sm:text-right text-left" : "text-left"}>
        <span className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
          Notes
        </span>
        <p className="text-slate-700 text-[13px] leading-relaxed whitespace-pre-line">
          {invoice.notes}
        </p>
      </div>
    );

    if (!paymentBlock && !notesBlock) return null;

    return (
      <div
        className={`border-t border-slate-200 pt-6 text-[12.5px] ${
          payNotesAlign === "center"
            ? "max-w-md mx-auto space-y-6"
            : "grid grid-cols-1 sm:grid-cols-2 gap-8"
        }`}
      >
        {payNotesAlign === "right" ? [notesBlock, paymentBlock] : [paymentBlock, notesBlock]}
      </div>
    );
  };

  // 6. Footer
  const renderFooter = () => (
    <div
      className={`border-t border-slate-100 pt-4 text-[11.5px] text-slate-400 ${
        footerAlign === "left"
          ? "text-left"
          : footerAlign === "right"
          ? "text-right"
          : "text-center"
      }`}
    >
      {invoice.from_name} · {invoice.from_title} · {invoice.from_website}
    </div>
  );

  const sectionMap: Record<string, () => React.ReactNode> = {
    header: renderHeader,
    bill_to: renderBillTo,
    items: renderItems,
    totals: renderTotals,
    payment_and_notes: renderPaymentAndNotes,
    footer: renderFooter,
  };

  return (
    <div className="min-h-screen bg-slate-100/80 py-8 px-4 sm:px-6 print:min-h-0 print:bg-white print:p-0">
      {/* Top Clean Toolbar */}
      <div className="mx-auto max-w-3xl mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white border border-slate-200/80 px-4 py-2.5 shadow-xs print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-[12.5px] font-semibold text-slate-500 hover:text-slate-900"
          >
            ← chanukajeewantha.com
          </Link>
          <span className="text-slate-300">|</span>
          <span className="font-mono text-[12.5px] font-bold text-slate-700">
            {invoice.invoice_number}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/invoice-generator?id=${invoice.id}`}
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            Edit in Generator
          </Link>

          <button
            type="button"
            onClick={handleCopyLink}
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
          >
            {copiedLink ? "✓ Link Copied" : "Share Link"}
          </button>

          <button
            type="button"
            disabled={isDownloadingPdf}
            onClick={handleDownloadPdf}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-[12.5px] font-bold shadow-2xs transition-all cursor-pointer disabled:opacity-50 ${
              downloadSuccess
                ? "bg-emerald-600 text-white shadow-emerald-500/20"
                : "bg-amber-500 text-slate-950 hover:bg-amber-400"
            }`}
          >
            {isDownloadingPdf ? (
              <>
                <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Exporting PDF...</span>
              </>
            ) : downloadSuccess ? (
              <>
                <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span>Saved to Downloads!</span>
              </>
            ) : (
              <>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="rounded-xl bg-slate-900 px-3.5 py-1.5 text-[12.5px] font-bold text-white hover:bg-slate-800 shadow-2xs cursor-pointer"
          >
            Print
          </button>
        </div>
      </div>

      {/* -------------------------------------------------------------
          THE CLEAN, CLEAR, UNCOMPLICATED INVOICE SHEET
         ------------------------------------------------------------- */}
      <div
        id="invoice-paper"
        className="mx-auto max-w-3xl bg-white text-slate-900 rounded-2xl shadow-sm p-8 sm:p-12 border border-slate-200/90 print:border-none print:shadow-none print:rounded-none print:p-0"
      >
        {sectionOrder.map((secId) => {
          if (secId.startsWith("spacer-")) {
            const height = spacers[secId] || 28;
            return (
              <div
                key={secId}
                style={{ height: `${height}px` }}
                className="w-full transition-all"
                aria-hidden="true"
              />
            );
          }
          const fn = sectionMap[secId];
          if (!fn) return null;
          const spacing = sectionSpacing[secId] || { marginTop: 16, marginBottom: 20, offsetX: 0 };
          return (
            <div
              key={secId}
              style={{
                marginTop: `${spacing.marginTop ?? 16}px`,
                marginBottom: `${spacing.marginBottom ?? 20}px`,
                transform: spacing.offsetX ? `translateX(${spacing.offsetX}px)` : undefined,
              }}
            >
              {fn()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
