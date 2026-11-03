"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  type Invoice,
  type InvoiceItem,
  type InvoiceStatus,
  CURRENCIES,
  DEFAULT_INVOICE_TEMPLATE,
  computeInvoiceTotals,
  formatInvoiceMoney,
  generateInvoiceNumber,
  getCurrencySymbol,
} from "@/lib/invoices";
import { saveInvoice } from "@/app/admin/(panel)/invoices/actions";

interface OrderImportOption {
  id: string;
  ref: string;
  customer_name: string;
  customer_email: string;
  package_name: string;
  level_name: string;
  total_usd: number;
  currency: string;
  site: "com" | "lk";
}

export function InvoiceBuilder({
  initialInvoice,
  ordersForImport = [],
}: {
  initialInvoice?: Partial<Invoice>;
  ordersForImport?: OrderImportOption[];
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [savedSuccess, setSavedSuccess] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Form State
  const [id, setId] = useState(initialInvoice?.id || "");
  const [invoiceNumber, setInvoiceNumber] = useState(
    initialInvoice?.invoice_number || generateInvoiceNumber()
  );
  const [orderId, setOrderId] = useState(initialInvoice?.order_id || "");
  const [site, setSite] = useState<"com" | "lk">(initialInvoice?.site || "com");
  const [status, setStatus] = useState<InvoiceStatus>(initialInvoice?.status || "draft");
  const [issueDate, setIssueDate] = useState(
    initialInvoice?.issue_date || new Date().toISOString().split("T")[0]
  );
  const [dueDate, setDueDate] = useState(
    initialInvoice?.due_date ||
      new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0]
  );
  const [currency, setCurrency] = useState(initialInvoice?.currency || "USD");

  // From
  const [fromName, setFromName] = useState(
    initialInvoice?.from_name || DEFAULT_INVOICE_TEMPLATE.from_name
  );
  const [fromTitle, setFromTitle] = useState(
    initialInvoice?.from_title || DEFAULT_INVOICE_TEMPLATE.from_title
  );
  const [fromEmail, setFromEmail] = useState(
    initialInvoice?.from_email || DEFAULT_INVOICE_TEMPLATE.from_email
  );
  const [fromPhone, setFromPhone] = useState(
    initialInvoice?.from_phone || DEFAULT_INVOICE_TEMPLATE.from_phone
  );
  const [fromAddress, setFromAddress] = useState(
    initialInvoice?.from_address || DEFAULT_INVOICE_TEMPLATE.from_address
  );
  const [fromWebsite, setFromWebsite] = useState(
    initialInvoice?.from_website || DEFAULT_INVOICE_TEMPLATE.from_website
  );

  // To
  const [toName, setToName] = useState(initialInvoice?.to_name || "");
  const [toCompany, setToCompany] = useState(initialInvoice?.to_company || "");
  const [toEmail, setToEmail] = useState(initialInvoice?.to_email || "");
  const [toPhone, setToPhone] = useState(initialInvoice?.to_phone || "");
  const [toAddress, setToAddress] = useState(initialInvoice?.to_address || "");
  const [toCountry, setToCountry] = useState(initialInvoice?.to_country || "");

  // Items
  const [items, setItems] = useState<InvoiceItem[]>(
    initialInvoice?.items && initialInvoice.items.length > 0
      ? initialInvoice.items
      : [
          {
            id: "1",
            description: "Executive CV & Career Narrative (ATS-Optimised)",
            quantity: 1,
            unit_price: 249,
            total: 249,
          },
        ]
  );

  // Financials
  const [discountType, setDiscountType] = useState<"percentage" | "fixed" | "none">(
    initialInvoice?.discount_type || "none"
  );
  const [discountValue, setDiscountValue] = useState<number>(initialInvoice?.discount_value || 0);
  const [taxRate, setTaxRate] = useState<number>(initialInvoice?.tax_rate || 0);

  // Notes & Payment
  const [notes, setNotes] = useState(
    initialInvoice?.notes !== undefined ? initialInvoice.notes : DEFAULT_INVOICE_TEMPLATE.notes
  );
  const [terms, setTerms] = useState(
    initialInvoice?.terms !== undefined ? initialInvoice.terms : DEFAULT_INVOICE_TEMPLATE.terms
  );
  const [bankName, setBankName] = useState(
    initialInvoice?.payment_methods?.bank_name || DEFAULT_INVOICE_TEMPLATE.payment_methods.bank_name
  );
  const [accountName, setAccountName] = useState(
    initialInvoice?.payment_methods?.account_name ||
      DEFAULT_INVOICE_TEMPLATE.payment_methods.account_name
  );
  const [accountNumber, setAccountNumber] = useState(
    initialInvoice?.payment_methods?.account_number ||
      DEFAULT_INVOICE_TEMPLATE.payment_methods.account_number
  );
  const [branch, setBranch] = useState(
    initialInvoice?.payment_methods?.branch || DEFAULT_INVOICE_TEMPLATE.payment_methods.branch
  );
  const [swiftCode, setSwiftCode] = useState(
    initialInvoice?.payment_methods?.swift_code ||
      DEFAULT_INVOICE_TEMPLATE.payment_methods.swift_code
  );
  const [paypalEmail, setPaypalEmail] = useState(
    initialInvoice?.payment_methods?.paypal_email ||
      DEFAULT_INVOICE_TEMPLATE.payment_methods.paypal_email
  );
  const [onlinePayUrl, setOnlinePayUrl] = useState(
    initialInvoice?.payment_methods?.online_pay_url || ""
  );

  // Active Tab for left editing column
  const [activeTab, setActiveTab] = useState<"basics" | "items" | "payment" | "notes">("basics");

  // Calculations
  const totals = computeInvoiceTotals(items, discountType, discountValue, taxRate);

  // Line item handlers
  const handleItemChange = (index: number, field: keyof InvoiceItem, val: string | number) => {
    setItems((prev) => {
      const copy = [...prev];
      const target = { ...copy[index] };
      if (field === "quantity" || field === "unit_price") {
        const num = Math.max(0, Number(val) || 0);
        target[field] = num;
        target.total = Number((target.quantity * target.unit_price).toFixed(2));
      } else if (field === "description") {
        target.description = String(val);
      }
      copy[index] = target;
      return copy;
    });
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        description: "New career consultation / service",
        quantity: 1,
        unit_price: 99,
        total: 99,
      },
    ]);
  };

  const removeItem = (index: number) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Import from order
  const handleImportOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    if (!selectedId) return;
    const ord = ordersForImport.find((o) => o.id === selectedId);
    if (!ord) return;

    setOrderId(ord.id);
    setToName(ord.customer_name);
    setToEmail(ord.customer_email);
    setSite(ord.site);
    setCurrency(ord.currency);

    setItems([
      {
        id: "1",
        description: `${ord.package_name} (${ord.level_name})`,
        quantity: 1,
        unit_price: ord.total_usd,
        total: ord.total_usd,
      },
    ]);
  };

  const handleSave = () => {
    startTransition(async () => {
      const res = await saveInvoice({
        id: id || undefined,
        invoice_number: invoiceNumber,
        order_id: orderId || null,
        site,
        status,
        issue_date: issueDate,
        due_date: dueDate || null,
        currency,
        from_name: fromName,
        from_title: fromTitle,
        from_email: fromEmail,
        from_phone: fromPhone,
        from_address: fromAddress,
        from_website: fromWebsite,
        to_name: toName || "Client",
        to_company: toCompany,
        to_email: toEmail,
        to_phone: toPhone,
        to_address: toAddress,
        to_country: toCountry,
        items,
        subtotal: totals.subtotal,
        discount_type: discountType,
        discount_value: discountValue,
        discount_amount: totals.discountAmount,
        tax_rate: taxRate,
        tax_amount: totals.taxAmount,
        total: totals.total,
        notes,
        terms,
        payment_methods: {
          bank_name: bankName,
          account_name: accountName,
          account_number: accountNumber,
          branch,
          swift_code: swiftCode,
          paypal_email: paypalEmail,
          online_pay_url: onlinePayUrl,
        },
      });

      if (res.success) {
        setId(res.id);
        setSavedSuccess(`Invoice ${res.invoice_number} saved successfully!`);
        setTimeout(() => setSavedSuccess(null), 4000);
        router.refresh();
      }
    });
  };

  const shareableUrl = typeof window !== "undefined" ? `${window.location.origin}/invoice/${id || invoiceNumber}` : `/invoice/${invoiceNumber}`;

  const copyShareLink = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(shareableUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/admin/invoices" className="text-[13px] font-semibold text-brand hover:underline">
              ← Invoices
            </Link>
            <span className="text-muted">/</span>
            <span className="text-[13px] font-medium text-muted">
              {id ? `Edit ${invoiceNumber}` : "New Invoice"}
            </span>
          </div>
          <h1 className="mt-1 text-2xl font-bold text-ink">
            {id ? `Invoice ${invoiceNumber}` : "Create Custom Invoice"}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {savedSuccess && (
            <span className="text-[13px] font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 animate-fade-in">
              ✓ {savedSuccess}
            </span>
          )}

          <button
            type="button"
            onClick={copyShareLink}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line bg-white px-3.5 py-2 text-[13px] font-semibold text-ink hover:border-brand hover:text-brand transition-colors shadow-2xs"
          >
            {copySuccess ? <span>✓ Link Copied</span> : <span>🔗 Copy Client Link</span>}
          </button>

          <a
            href={shareableUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line bg-white px-3.5 py-2 text-[13px] font-semibold text-ink hover:border-brand hover:text-brand transition-colors shadow-2xs"
          >
            <span>Preview Client Page ↗</span>
          </a>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-line bg-white px-3.5 py-2 text-[13px] font-semibold text-ink hover:border-brand hover:text-brand transition-colors shadow-2xs"
          >
            <span>🖨️ Print / PDF</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={isPending}
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-brand px-5 py-2 text-[13.5px] font-bold text-paper shadow-xs hover:bg-brand-deep transition-all disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Invoice"}
          </button>
        </div>
      </div>

      {/* Main Grid: Left Controls (5 cols) & Right Live Sheet Preview (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ========================================================= */}
        {/* LEFT COLUMN: LIVE CUSTOMIZER CONTROLS */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 space-y-5 print:hidden">
          {/* Quick Import Order helper */}
          {ordersForImport.length > 0 && (
            <div className="rounded-2xl border border-accent/40 bg-accent/5 p-4 shadow-2xs">
              <label className="block text-[12px] font-bold uppercase tracking-wider text-accent-deep">
                ⚡ Quick Pre-Fill From Order
              </label>
              <select
                onChange={handleImportOrder}
                defaultValue=""
                className="mt-2 block w-full rounded-xl border border-accent/30 bg-white px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
              >
                <option value="" disabled>
                  Select an existing order to pre-fill client & items...
                </option>
                {ordersForImport.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.ref} · {o.customer_name} ({o.package_name} - {o.currency} {o.total_usd})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Form Tabs */}
          <div className="flex border-b border-line bg-white rounded-t-2xl px-2 pt-2 gap-1 shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab("basics")}
              className={`px-3 py-2 text-[13px] font-bold rounded-t-xl transition-colors ${
                activeTab === "basics"
                  ? "bg-[#f4f6fa] text-brand border-b-2 border-brand"
                  : "text-muted hover:text-ink"
              }`}
            >
              1. Basics &amp; Client
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("items")}
              className={`px-3 py-2 text-[13px] font-bold rounded-t-xl transition-colors ${
                activeTab === "items"
                  ? "bg-[#f4f6fa] text-brand border-b-2 border-brand"
                  : "text-muted hover:text-ink"
              }`}
            >
              2. Line Items ({items.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("payment")}
              className={`px-3 py-2 text-[13px] font-bold rounded-t-xl transition-colors ${
                activeTab === "payment"
                  ? "bg-[#f4f6fa] text-brand border-b-2 border-brand"
                  : "text-muted hover:text-ink"
              }`}
            >
              3. Bank &amp; Pay
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("notes")}
              className={`px-3 py-2 text-[13px] font-bold rounded-t-xl transition-colors ${
                activeTab === "notes"
                  ? "bg-[#f4f6fa] text-brand border-b-2 border-brand"
                  : "text-muted hover:text-ink"
              }`}
            >
              4. Branding &amp; Notes
            </button>
          </div>

          {/* Tab 1: Basics & Client Info */}
          {activeTab === "basics" && (
            <div className="space-y-4 rounded-b-2xl border border-t-0 border-line bg-white p-5 shadow-2xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted">
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-semibold text-ink focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted">
                    Status
                  </label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as InvoiceStatus)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-semibold text-ink focus:border-brand focus:outline-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="sent">Sent to Client</option>
                    <option value="paid">Paid</option>
                    <option value="overdue">Overdue</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted">
                    Due Date
                  </label>
                  <input
                    type="date"
                    value={dueDate || ""}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted">
                    Currency
                  </label>
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-semibold text-ink focus:border-brand focus:outline-none"
                  >
                    {CURRENCIES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-muted">
                    Target Site
                  </label>
                  <select
                    value={site}
                    onChange={(e) => setSite(e.target.value as "com" | "lk")}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-semibold text-ink focus:border-brand focus:outline-none"
                  >
                    <option value="com">Global · .com (USD)</option>
                    <option value="lk">Sri Lanka · .lk (LKR)</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-line pt-4 space-y-3">
                <p className="text-[12px] font-bold uppercase tracking-wider text-brand">
                  Client / Billed To
                </p>
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Client Name *</label>
                  <input
                    type="text"
                    value={toName}
                    placeholder="e.g. Rachel Adams"
                    onChange={(e) => setToName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-muted">Company / Org</label>
                    <input
                      type="text"
                      value={toCompany}
                      placeholder="e.g. Adams Global"
                      onChange={(e) => setToCompany(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-muted">Target Country</label>
                    <input
                      type="text"
                      value={toCountry}
                      placeholder="e.g. United Kingdom"
                      onChange={(e) => setToCountry(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-muted">Email</label>
                    <input
                      type="email"
                      value={toEmail}
                      placeholder="client@example.com"
                      onChange={(e) => setToEmail(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-muted">Phone</label>
                    <input
                      type="text"
                      value={toPhone}
                      placeholder="+44 7911..."
                      onChange={(e) => setToPhone(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Billing Address</label>
                  <input
                    type="text"
                    value={toAddress}
                    placeholder="e.g. 12 Oxford Street, London"
                    onChange={(e) => setToAddress(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[13px] font-medium text-ink focus:border-brand focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Line Items & Financials */}
          {activeTab === "items" && (
            <div className="space-y-4 rounded-b-2xl border border-t-0 border-line bg-white p-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-bold uppercase tracking-wider text-brand">
                  Invoice Items
                </p>
                <button
                  type="button"
                  onClick={addItem}
                  className="rounded-lg bg-sand px-3 py-1.5 text-[12px] font-bold text-brand hover:bg-sand/80 transition-colors"
                >
                  + Add Item
                </button>
              </div>

              <div className="space-y-3">
                {items.map((item, idx) => (
                  <div key={item.id || idx} className="rounded-xl border border-line bg-surface p-3 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[11px] font-bold text-muted">#{idx + 1}</span>
                      {items.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeItem(idx)}
                          className="text-[11px] font-semibold text-red-500 hover:text-red-700"
                        >
                          Remove ✕
                        </button>
                      )}
                    </div>
                    <textarea
                      rows={2}
                      value={item.description}
                      placeholder="Service or document description..."
                      onChange={(e) => handleItemChange(idx, "description", e.target.value)}
                      className="w-full rounded-lg border border-line bg-white p-2 text-[12.5px] font-medium text-ink focus:border-brand focus:outline-none"
                    />
                    <div className="grid grid-cols-3 gap-2 items-center">
                      <div>
                        <label className="block text-[10px] font-bold text-muted">Qty</label>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(idx, "quantity", e.target.value)}
                          className="mt-0.5 w-full rounded-lg border border-line bg-white px-2 py-1.5 text-[12.5px] font-semibold text-ink text-center"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-muted">Rate ({getCurrencySymbol(currency)})</label>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={item.unit_price}
                          onChange={(e) => handleItemChange(idx, "unit_price", e.target.value)}
                          className="mt-0.5 w-full rounded-lg border border-line bg-white px-2 py-1.5 text-[12.5px] font-semibold text-ink text-right"
                        />
                      </div>
                      <div className="text-right">
                        <label className="block text-[10px] font-bold text-muted">Total</label>
                        <span className="block mt-1 text-[13px] font-bold text-ink">
                          {formatInvoiceMoney(item.total, currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount and Tax Section */}
              <div className="border-t border-line pt-4 space-y-3">
                <p className="text-[12px] font-bold uppercase tracking-wider text-brand">
                  Discounts &amp; Tax / VAT
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-muted">Discount Type</label>
                    <select
                      value={discountType}
                      onChange={(e) => setDiscountType(e.target.value as "percentage" | "fixed" | "none")}
                      className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                    >
                      <option value="none">No Discount</option>
                      <option value="percentage">Percentage (%)</option>
                      <option value="fixed">Fixed Amount ({getCurrencySymbol(currency)})</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-muted">Discount Value</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      disabled={discountType === "none"}
                      value={discountValue}
                      onChange={(e) => setDiscountValue(Number(e.target.value) || 0)}
                      className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-semibold text-ink disabled:opacity-40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-muted">Tax / VAT Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    value={taxRate}
                    placeholder="0"
                    onChange={(e) => setTaxRate(Number(e.target.value) || 0)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-semibold text-ink"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Bank Details & Payment Methods */}
          {activeTab === "payment" && (
            <div className="space-y-4 rounded-b-2xl border border-t-0 border-line bg-white p-5 shadow-2xs">
              <p className="text-[12px] font-bold uppercase tracking-wider text-brand">
                Payment &amp; Bank Transfer Details
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Bank Name</label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Branch</label>
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Account Name</label>
                  <input
                    type="text"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Account Number / IBAN</label>
                  <input
                    type="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-muted">SWIFT / BIC Code</label>
                  <input
                    type="text"
                    value={swiftCode}
                    onChange={(e) => setSwiftCode(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-muted">PayPal Email (Optional)</label>
                  <input
                    type="email"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-muted">Online Payment Link / PayHere URL</label>
                <input
                  type="url"
                  value={onlinePayUrl}
                  placeholder="https://pay.chanukajeewantha.com/..."
                  onChange={(e) => setOnlinePayUrl(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                />
              </div>
            </div>
          )}

          {/* Tab 4: Branding & Custom Notes */}
          {activeTab === "notes" && (
            <div className="space-y-4 rounded-b-2xl border border-t-0 border-line bg-white p-5 shadow-2xs">
              <p className="text-[12px] font-bold uppercase tracking-wider text-brand">
                Sender Branding (Chanuka Jeewantha)
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Sender Name</label>
                  <input
                    type="text"
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Professional Title</label>
                  <input
                    type="text"
                    value={fromTitle}
                    onChange={(e) => setFromTitle(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Sender Email</label>
                  <input
                    type="email"
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Website</label>
                  <input
                    type="text"
                    value={fromWebsite}
                    onChange={(e) => setFromWebsite(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface px-3 py-2 text-[12.5px] font-medium text-ink"
                  />
                </div>
              </div>

              <div className="border-t border-line pt-3 space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Notes to Client</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface p-3 text-[12.5px] font-medium text-ink"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-muted">Payment Terms</label>
                  <textarea
                    rows={2}
                    value={terms}
                    onChange={(e) => setTerms(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-line bg-surface p-3 text-[12.5px] font-medium text-ink"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: REAL-TIME PRINT-PERFECT INVOICE SHEET */}
        {/* ========================================================= */}
        <div className="lg:col-span-7">
          <div className="sticky top-6">
            <div className="invoice-sheet mx-auto max-w-2xl bg-white p-6 sm:p-10 rounded-2xl border border-line shadow-xl font-sans text-ink print:border-none print:shadow-none print:p-0 print:max-w-none">
              {/* Header Branding & Invoice Details */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 border-b border-line pb-8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
                      {fromName}
                    </span>
                    <span className="text-accent text-3xl font-bold leading-none">.</span>
                  </div>
                  <p className="mt-1 text-[13px] font-semibold text-muted">{fromTitle}</p>
                  <div className="mt-3 text-[12px] text-muted space-y-0.5">
                    <p>{fromEmail}</p>
                    <p>{fromPhone}</p>
                    <p>{fromAddress}</p>
                    <p className="text-brand font-medium">{fromWebsite}</p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="inline-block px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider mb-2 border"
                    style={{
                      borderColor:
                        status === "paid" ? "#10b981" : status === "overdue" ? "#ef4444" : "#e5e7eb",
                      backgroundColor:
                        status === "paid" ? "#ecfdf5" : status === "overdue" ? "#fef2f2" : "#f3f4f6",
                      color:
                        status === "paid" ? "#065f46" : status === "overdue" ? "#991b1b" : "#374151",
                    }}
                  >
                    {status.toUpperCase()}
                  </div>
                  <h2 className="text-3xl font-extrabold text-ink tracking-tight">INVOICE</h2>
                  <p className="mt-1 text-[14px] font-bold text-ink">{invoiceNumber}</p>
                  <div className="mt-2 text-[12px] text-muted space-y-0.5">
                    <p>
                      <span className="text-muted/80">Issue Date:</span>{" "}
                      <span className="font-semibold text-ink">{issueDate}</span>
                    </p>
                    {dueDate && (
                      <p>
                        <span className="text-muted/80">Due Date:</span>{" "}
                        <span className="font-semibold text-ink">{dueDate}</span>
                      </p>
                    )}
                    {orderId && (
                      <p className="text-[11px] text-muted">
                        Order Ref: {orderId}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bill To Section */}
              <div className="py-6 border-b border-line grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Billed To:</p>
                  <p className="mt-1 text-[16px] font-bold text-ink">{toName || "Client Name"}</p>
                  {toCompany && <p className="text-[13px] font-medium text-ink-soft">{toCompany}</p>}
                  <div className="mt-1.5 text-[12px] text-muted space-y-0.5">
                    {toEmail && <p>{toEmail}</p>}
                    {toPhone && <p>{toPhone}</p>}
                    {toAddress && <p>{toAddress}</p>}
                    {toCountry && <p className="font-semibold text-ink-soft">{toCountry}</p>}
                  </div>
                </div>

                <div className="sm:text-right flex flex-col justify-end">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Total Due:</p>
                  <p className="stat-number text-3xl font-extrabold text-brand mt-0.5">
                    {formatInvoiceMoney(totals.total, currency)}
                  </p>
                  <p className="text-[11px] text-muted mt-0.5">Currency: {currency}</p>
                </div>
              </div>

              {/* Line Items Table */}
              <div className="py-6">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b-2 border-line text-[11px] font-bold uppercase tracking-wider text-muted">
                      <th className="pb-3 w-10">#</th>
                      <th className="pb-3">Description</th>
                      <th className="pb-3 text-center w-16">Qty</th>
                      <th className="pb-3 text-right w-28">Rate</th>
                      <th className="pb-3 text-right w-28">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line/60">
                    {items.map((item, idx) => (
                      <tr key={item.id || idx}>
                        <td className="py-3.5 text-muted align-top">{idx + 1}</td>
                        <td className="py-3.5 pr-4 align-top">
                          <p className="font-semibold text-ink leading-snug">{item.description}</p>
                        </td>
                        <td className="py-3.5 text-center text-muted align-top">{item.quantity}</td>
                        <td className="py-3.5 text-right font-medium text-ink-soft align-top">
                          {formatInvoiceMoney(item.unit_price, currency)}
                        </td>
                        <td className="py-3.5 text-right font-bold text-ink align-top">
                          {formatInvoiceMoney(item.total, currency)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Subtotals & Grand Total */}
              <div className="border-t-2 border-line pt-4 flex flex-col sm:flex-row sm:justify-end">
                <div className="w-full sm:w-72 space-y-2 text-[13px]">
                  <div className="flex justify-between text-muted">
                    <span>Subtotal:</span>
                    <span className="font-medium text-ink">
                      {formatInvoiceMoney(totals.subtotal, currency)}
                    </span>
                  </div>

                  {totals.discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-medium">
                      <span>Discount ({discountType === "percentage" ? `${discountValue}%` : "Fixed"}):</span>
                      <span>-{formatInvoiceMoney(totals.discountAmount, currency)}</span>
                    </div>
                  )}

                  {totals.taxAmount > 0 && (
                    <div className="flex justify-between text-muted">
                      <span>Tax / VAT ({taxRate}%):</span>
                      <span className="font-medium text-ink">
                        +{formatInvoiceMoney(totals.taxAmount, currency)}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-[16px] font-extrabold text-brand border-t border-line pt-2">
                    <span>Total Amount:</span>
                    <span>{formatInvoiceMoney(totals.total, currency)}</span>
                  </div>
                </div>
              </div>

              {/* Payment Details Box */}
              {(bankName || paypalEmail || onlinePayUrl) && (
                <div className="mt-8 rounded-xl border border-line bg-[#f9fafc] p-4 text-[12px] space-y-2">
                  <p className="font-bold uppercase tracking-wider text-brand text-[11px]">
                    Payment Methods &amp; Bank Instructions
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-ink-soft">
                    {bankName && (
                      <div>
                        <p className="text-muted text-[10.5px]">Bank:</p>
                        <p className="font-semibold text-ink">{bankName}</p>
                      </div>
                    )}
                    {branch && (
                      <div>
                        <p className="text-muted text-[10.5px]">Branch:</p>
                        <p className="font-semibold text-ink">{branch}</p>
                      </div>
                    )}
                    {accountName && (
                      <div>
                        <p className="text-muted text-[10.5px]">Account Name:</p>
                        <p className="font-semibold text-ink">{accountName}</p>
                      </div>
                    )}
                    {accountNumber && (
                      <div>
                        <p className="text-muted text-[10.5px]">Account Number / IBAN:</p>
                        <p className="font-semibold font-mono text-ink">{accountNumber}</p>
                      </div>
                    )}
                    {swiftCode && (
                      <div>
                        <p className="text-muted text-[10.5px]">SWIFT / BIC:</p>
                        <p className="font-semibold font-mono text-ink">{swiftCode}</p>
                      </div>
                    )}
                    {paypalEmail && (
                      <div>
                        <p className="text-muted text-[10.5px]">PayPal Email:</p>
                        <p className="font-semibold text-ink">{paypalEmail}</p>
                      </div>
                    )}
                  </div>
                  {onlinePayUrl && (
                    <div className="pt-2 border-t border-line/60">
                      <a
                        href={onlinePayUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-bold text-brand hover:underline"
                      >
                        💳 Pay Online Now ↗
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Notes & Terms */}
              {(notes || terms) && (
                <div className="mt-6 pt-4 border-t border-line text-[11.5px] text-muted space-y-2">
                  {notes && (
                    <p>
                      <span className="font-bold text-ink-soft">Note:</span> {notes}
                    </p>
                  )}
                  {terms && (
                    <p>
                      <span className="font-bold text-ink-soft">Terms:</span> {terms}
                    </p>
                  )}
                </div>
              )}

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-line/60 flex items-center justify-between text-[11px] text-muted">
                <span>Chanuka Jeewantha Career Branding</span>
                <span>{fromWebsite}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
