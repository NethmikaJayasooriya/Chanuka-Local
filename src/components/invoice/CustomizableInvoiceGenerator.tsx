"use client";

import { useState, useEffect, useTransition } from "react";
import Link from "next/link";
import {
  type Invoice,
  type InvoiceItem,
  type InvoiceStatus,
  CURRENCIES,
  INVOICE_THEMES,
  DEFAULT_INVOICE_TEMPLATE,
  DEFAULT_SECTION_ORDER,
  computeInvoiceTotals,
  formatInvoiceMoney,
  generateInvoiceNumber,
  getCurrencySymbol,
} from "@/lib/invoices";
import { saveInvoice } from "@/app/admin/(panel)/invoices/actions";
import { downloadInvoiceAsPdf } from "@/lib/generateInvoicePdf";

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

interface Props {
  initialInvoice?: Partial<Invoice>;
  ordersForImport?: OrderImportOption[];
  isAdmin?: boolean;
}

export function CustomizableInvoiceGenerator({
  initialInvoice,
  ordersForImport = [],
  isAdmin = false,
}: Props) {
  const [isPending, startTransition] = useTransition();

  // Notifications
  const [savedSuccessUrl, setSavedSuccessUrl] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // View mode: "split" (live side-by-side), "edit" (canvas only), "preview" (exact output only)
  const [viewMode, setViewMode] = useState<"edit" | "split" | "preview">("split");

  // Layout State (sections can be moved Up, Down, Left, Right, Center!)
  const [sectionOrder, setSectionOrder] = useState<string[]>(
    initialInvoice?.layout?.section_order && initialInvoice.layout.section_order.length > 0
      ? initialInvoice.layout.section_order
      : ["header", "bill_to", "items", "totals", "payment_and_notes", "footer"]
  );
  const [headerLayout, setHeaderLayout] = useState<"sender_left" | "sender_right">(
    initialInvoice?.layout?.header_layout === "sender_right" ? "sender_right" : "sender_left"
  );
  const [totalsAlign, setTotalsAlign] = useState<"right" | "left">(
    initialInvoice?.layout?.totals_align === "left" ? "left" : "right"
  );

  // Directional alignments for each individual section
  const [sectionAlignments, setSectionAlignments] = useState<Record<string, "left" | "center" | "right">>({
    header: initialInvoice?.layout?.header_layout === "sender_right" ? "right" : (initialInvoice?.layout?.header_layout === "centered" ? "center" : "left"),
    bill_to: initialInvoice?.layout?.client_layout === "client_right" ? "right" : (initialInvoice?.layout?.client_layout === "centered" ? "center" : "left"),
    items: "left",
    totals: initialInvoice?.layout?.totals_align === "left" ? "left" : (initialInvoice?.layout?.totals_align === "center" ? "center" : "right"),
    payment_and_notes: initialInvoice?.layout?.payment_layout === "payment_right" ? "right" : "left",
    footer: initialInvoice?.layout?.footer_align || "center",
    ...(initialInvoice?.layout?.section_alignments || {}),
  });

  const moveSectionSide = (sectionId: string, side: "left" | "center" | "right") => {
    setSectionAlignments((prev) => ({
      ...prev,
      [sectionId]: side,
    }));
    if (sectionId === "header") {
      setHeaderLayout(side === "right" ? "sender_right" : "sender_left");
    }
    if (sectionId === "totals") {
      setTotalsAlign(side === "left" ? "left" : "right");
    }
  };

  // Section Spacing (Empty Spaces above & below) & Free Horizontal Movement (Move Anywhere)
  const [sectionSpacing, setSectionSpacing] = useState<
    Record<string, { marginTop: number; marginBottom: number; offsetX: number }>
  >({
    header: { marginTop: 0, marginBottom: 24, offsetX: 0 },
    bill_to: { marginTop: 16, marginBottom: 20, offsetX: 0 },
    items: { marginTop: 16, marginBottom: 20, offsetX: 0 },
    totals: { marginTop: 16, marginBottom: 24, offsetX: 0 },
    payment_and_notes: { marginTop: 24, marginBottom: 24, offsetX: 0 },
    footer: { marginTop: 24, marginBottom: 0, offsetX: 0 },
    ...(initialInvoice?.layout?.section_spacing || {}),
  });

  // Dedicated Empty Space Blocks (Spacers)
  const [spacers, setSpacers] = useState<Record<string, number>>(
    initialInvoice?.layout?.spacers || {}
  );

  // Drag-and-drop reordering state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [activeSpacingMenu, setActiveSpacingMenu] = useState<string | null>(null);

  const handleSpacingChange = (
    sectionId: string,
    field: "marginTop" | "marginBottom" | "offsetX",
    deltaOrVal: number,
    isAbsolute = false
  ) => {
    setSectionSpacing((prev) => {
      const current = prev[sectionId] || { marginTop: 16, marginBottom: 20, offsetX: 0 };
      const currentVal = current[field] ?? (field === "offsetX" ? 0 : 16);
      const nextVal = isAbsolute ? deltaOrVal : Math.max(field === "offsetX" ? -250 : 0, currentVal + deltaOrVal);
      return {
        ...prev,
        [sectionId]: {
          ...current,
          [field]: nextVal,
        },
      };
    });
  };

  const handleAddSpacer = (afterIndex?: number) => {
    const newSpacerId = `spacer-${Date.now()}`;
    setSpacers((prev) => ({
      ...prev,
      [newSpacerId]: 28, // default 28px empty space
    }));
    setSectionOrder((prev) => {
      const copy = [...prev];
      const insertAt = afterIndex !== undefined ? afterIndex + 1 : copy.length - 1;
      copy.splice(insertAt, 0, newSpacerId);
      return copy;
    });
  };

  const handleRemoveSpacer = (spacerId: string) => {
    setSpacers((prev) => {
      const copy = { ...prev };
      delete copy[spacerId];
      return copy;
    });
    setSectionOrder((prev) => prev.filter((id) => id !== spacerId));
  };

  const handleAdjustSpacer = (spacerId: string, delta: number) => {
    setSpacers((prev) => ({
      ...prev,
      [spacerId]: Math.max(8, (prev[spacerId] || 28) + delta),
    }));
  };

  const applyDensityPreset = (preset: "compact" | "normal" | "spacious") => {
    const multiplier = preset === "compact" ? 0.45 : preset === "spacious" ? 1.6 : 1.0;
    setSectionSpacing((prev) => {
      const next: Record<string, { marginTop: number; marginBottom: number; offsetX: number }> = {};
      Object.keys(prev).forEach((sec) => {
        next[sec] = {
          marginTop: Math.round((prev[sec]?.marginTop || 16) * multiplier),
          marginBottom: Math.round((prev[sec]?.marginBottom || 20) * multiplier),
          offsetX: prev[sec]?.offsetX || 0,
        };
      });
      return next;
    });
  };

  const handleResetLayout = () => {
    setSectionOrder(["header", "bill_to", "items", "totals", "payment_and_notes", "footer"]);
    setSpacers({});
    setSectionAlignments({
      header: "left",
      bill_to: "left",
      items: "left",
      totals: "right",
      payment_and_notes: "left",
      footer: "center",
    });
    setSectionSpacing({
      header: { marginTop: 0, marginBottom: 24, offsetX: 0 },
      bill_to: { marginTop: 16, marginBottom: 20, offsetX: 0 },
      items: { marginTop: 16, marginBottom: 20, offsetX: 0 },
      totals: { marginTop: 16, marginBottom: 24, offsetX: 0 },
      payment_and_notes: { marginTop: 24, marginBottom: 24, offsetX: 0 },
      footer: { marginTop: 24, marginBottom: 0, offsetX: 0 },
    });
    setActiveSpacingMenu(null);
  };

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === targetIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }
    setSectionOrder((prev) => {
      const copy = [...prev];
      const [removed] = copy.splice(draggedIndex, 1);
      copy.splice(targetIndex, 0, removed);
      return copy;
    });
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  // Core Invoice Data
  const [invoiceTitle, setInvoiceTitle] = useState(initialInvoice?.invoice_title || "INVOICE");
  const [themeColor, setThemeColor] = useState(initialInvoice?.theme_color || "#17355c");
  const [invoiceNumber, setInvoiceNumber] = useState(
    initialInvoice?.invoice_number || "INV-2026-001"
  );
  useEffect(() => {
    if (!initialInvoice?.invoice_number) {
      setInvoiceNumber(generateInvoiceNumber());
    }
  }, [initialInvoice?.invoice_number]);

  const [id, setId] = useState(initialInvoice?.id || "");
  const [orderId, setOrderId] = useState(initialInvoice?.order_id || "");
  const [site, setSite] = useState<"com" | "lk">(initialInvoice?.site || "com");
  const [status, setStatus] = useState<InvoiceStatus>(initialInvoice?.status || "sent");
  const [currency, setCurrency] = useState(initialInvoice?.currency || "USD");

  const [issueDate, setIssueDate] = useState(
    initialInvoice?.issue_date || "2026-10-19"
  );
  const [dueDate, setDueDate] = useState(
    initialInvoice?.due_date || "2026-10-26"
  );
  useEffect(() => {
    if (!initialInvoice?.issue_date) {
      setIssueDate(new Date().toISOString().split("T")[0]);
    }
    if (!initialInvoice?.due_date) {
      setDueDate(new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0]);
    }
  }, [initialInvoice?.issue_date, initialInvoice?.due_date]);

  // Sender Info
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
    initialInvoice?.from_phone || "+94 77 123 4567"
  );
  const [fromAddress, setFromAddress] = useState(
    initialInvoice?.from_address || "Colombo, Sri Lanka"
  );
  const [fromWebsite, setFromWebsite] = useState(
    initialInvoice?.from_website || "chanukajeewantha.com"
  );

  // Client Info
  const [toName, setToName] = useState(initialInvoice?.to_name || "Alexander Wright");
  const [toCompany, setToCompany] = useState(initialInvoice?.to_company || "AeroTech Solutions UK");
  const [toEmail, setToEmail] = useState(initialInvoice?.to_email || "a.wright@aerotech.co.uk");
  const [toAddress, setToAddress] = useState(initialInvoice?.to_address || "London, United Kingdom");

  // Line Items
  const [items, setItems] = useState<InvoiceItem[]>(
    initialInvoice?.items && initialInvoice.items.length > 0
      ? initialInvoice.items
      : [
          {
            id: "1",
            description: "Executive CV & Career Narrative",
            quantity: 1,
            unit_price: 249,
            total: 249,
          },
          {
            id: "2",
            description: "Targeted Cover Letter & Strategy Brief",
            quantity: 1,
            unit_price: 69,
            total: 69,
          },
          {
            id: "3",
            description: "LinkedIn Executive Profile SEO Polish",
            quantity: 1,
            unit_price: 99,
            total: 99,
          },
        ]
  );

  // Financials
  const [discountType, setDiscountType] = useState<"percentage" | "fixed" | "none">(
    initialInvoice?.discount_type || "percentage"
  );
  const [discountValue, setDiscountValue] = useState<number>(
    initialInvoice?.discount_value !== undefined ? initialInvoice.discount_value : 10
  );
  const [taxRate, setTaxRate] = useState<number>(initialInvoice?.tax_rate || 0);
  const [amountPaid, setAmountPaid] = useState<number>(initialInvoice?.amount_paid || 0);

  // Bank & Notes
  const [bankName, setBankName] = useState(
    initialInvoice?.payment_methods?.bank_name || "Commercial Bank of Ceylon"
  );
  const [accountName, setAccountName] = useState(
    initialInvoice?.payment_methods?.account_name || "Chanuka Jeewantha"
  );
  const [accountNumber, setAccountNumber] = useState(
    initialInvoice?.payment_methods?.account_number || "8001234567"
  );
  const [swiftCode, setSwiftCode] = useState(
    initialInvoice?.payment_methods?.swift_code || "CCEYLKX"
  );
  const [notes, setNotes] = useState(
    initialInvoice?.notes || "Payment is due within 7 days. Thank you for your business!"
  );

  // Calculations
  const { subtotal, discountAmount, taxAmount, total } = computeInvoiceTotals(
    items,
    discountType,
    discountValue,
    taxRate
  );
  const balanceDue = Math.max(0, total - amountPaid);
  const currencySymbol = getCurrencySymbol(currency);

  // Reorder Sections
  const moveSection = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= sectionOrder.length) return;
    setSectionOrder((prev) => {
      const copy = [...prev];
      const [removed] = copy.splice(index, 1);
      copy.splice(target, 0, removed);
      return copy;
    });
  };

  // Reorder Items
  const handleItemChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    setItems((prev) => {
      const next = [...prev];
      const item = { ...next[index], [field]: value };
      if (field === "quantity" || field === "unit_price") {
        const q = field === "quantity" ? Number(value) || 0 : item.quantity;
        const p = field === "unit_price" ? Number(value) || 0 : item.unit_price;
        item.total = q * p;
      }
      next[index] = item;
      return next;
    });
  };

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: `item-${Date.now()}`,
        description: "Professional Career Service",
        quantity: 1,
        unit_price: 50,
        total: 50,
      },
    ]);
  };

  const handleMoveItem = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    setItems((prev) => {
      const copy = [...prev];
      const [removed] = copy.splice(index, 1);
      copy.splice(target, 0, removed);
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  // Actions
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadPdf = async () => {
    setIsDownloadingPdf(true);
    setDownloadSuccess(false);
    try {
      const targetId =
        typeof document !== "undefined" && document.getElementById("exact-preview-paper-export")
          ? "exact-preview-paper-export"
          : (viewMode === "preview" || viewMode === "split"
              ? "exact-preview-paper"
              : "invoice-paper");

      await downloadInvoiceAsPdf(
        {
          invoice_number: invoiceNumber,
          invoice_title: invoiceTitle,
          theme_color: themeColor,
          issue_date: issueDate,
          due_date: dueDate,
          status,
          currency,
          from_name: fromName,
          from_title: fromTitle,
          from_email: fromEmail,
          from_phone: fromPhone,
          from_address: fromAddress,
          from_website: fromWebsite,
          to_name: toName,
          to_company: toCompany,
          to_email: toEmail,
          to_address: toAddress,
          items,
          subtotal,
          discount_type: discountType,
          discount_value: discountValue,
          discount_amount: discountAmount,
          tax_rate: taxRate,
          tax_amount: taxAmount,
          total,
          notes,
          payment_methods: {
            bank_name: bankName,
            account_name: accountName,
            account_number: accountNumber,
            swift_code: swiftCode,
          },
          layout: {
            section_order: sectionOrder,
            header_layout: sectionAlignments.header === "right" ? "sender_right" : "sender_left",
            client_layout: sectionAlignments.bill_to === "right" ? "client_right" : (sectionAlignments.bill_to === "center" ? "centered" : "client_left"),
            totals_align: sectionAlignments.totals === "left" ? "left" : "right",
            payment_layout: sectionAlignments.payment_and_notes === "right" ? "payment_right" : "payment_left",
            footer_align: sectionAlignments.footer || "center",
            section_alignments: sectionAlignments,
            section_spacing: sectionSpacing,
            spacers,
          },
        },
        targetId
      );
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

  const handleSave = () => {
    startTransition(async () => {
      const payload: Partial<Invoice> = {
        id: id || undefined,
        invoice_number: invoiceNumber,
        invoice_title: invoiceTitle,
        theme_color: themeColor,
        amount_paid: amountPaid,
        balance_due: balanceDue,
        layout: {
          section_order: sectionOrder,
          header_layout: sectionAlignments.header === "right" ? "sender_right" : "sender_left",
          client_layout: sectionAlignments.bill_to === "right" ? "client_right" : (sectionAlignments.bill_to === "center" ? "centered" : "client_left"),
          totals_align: sectionAlignments.totals === "left" ? "left" : "right",
          payment_layout: sectionAlignments.payment_and_notes === "right" ? "payment_right" : "payment_left",
          footer_align: sectionAlignments.footer || "center",
          section_alignments: sectionAlignments,
          section_spacing: sectionSpacing,
          spacers,
        },
        order_id: orderId || null,
        site,
        status,
        issue_date: issueDate,
        due_date: dueDate,
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
        to_address: toAddress,
        items,
        subtotal,
        discount_type: discountType,
        discount_value: discountValue,
        discount_amount: discountAmount,
        tax_rate: taxRate,
        tax_amount: taxAmount,
        total,
        notes,
        payment_methods: {
          bank_name: bankName,
          account_name: accountName,
          account_number: accountNumber,
          swift_code: swiftCode,
        },
      };

      const res = await saveInvoice(payload);
      if (res.success) {
        setId(res.id);
        const origin = typeof window !== "undefined" ? window.location.origin : "";
        const shareUrl = `${origin}/invoice/${res.id}`;
        setSavedSuccessUrl(shareUrl);
      }
    });
  };

  const handleCopyShareLink = async () => {
    if (!savedSuccessUrl) return;
    try {
      await navigator.clipboard.writeText(savedSuccessUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    } catch {
      prompt("Copy invoice link:", savedSuccessUrl);
    }
  };

  // ------------------------------------------
  // Clean Section Components
  // ------------------------------------------

  // 1. Header (Sender & Invoice #)
  const renderHeader = () => {
    const align = sectionAlignments.header || (headerLayout === "sender_right" ? "right" : "left");

    const sender = (
      <div
        key="sender"
        className={`flex-1 ${
          align === "center"
            ? "text-center"
            : align === "right"
            ? "sm:text-right text-left"
            : "text-left"
        }`}
      >
        <input
          type="text"
          value={fromName}
          onChange={(e) => setFromName(e.target.value)}
          placeholder="Your Name"
          className={`text-[22px] sm:text-[25px] font-black tracking-tight focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full ${
            align === "center" ? "text-center" : align === "right" ? "sm:text-right text-left" : "text-left"
          }`}
          style={{ color: themeColor }}
        />
        <input
          type="text"
          value={fromTitle}
          onChange={(e) => setFromTitle(e.target.value)}
          placeholder="Title / Subtitle"
          className={`text-[13px] font-medium text-slate-500 focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full mt-0.5 ${
            align === "center" ? "text-center" : align === "right" ? "sm:text-right text-left" : "text-left"
          }`}
        />
        <div
          className={`mt-2 text-[12.5px] text-slate-500 space-y-0.5 ${
            align === "center" ? "text-center" : align === "right" ? "sm:text-right text-left" : "text-left"
          }`}
        >
          <input
            type="text"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            placeholder="Email"
            className={`focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full ${
              align === "center" ? "text-center" : align === "right" ? "sm:text-right text-left" : "text-left"
            }`}
          />
          <input
            type="text"
            value={fromPhone}
            onChange={(e) => setFromPhone(e.target.value)}
            placeholder="Phone"
            className={`focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full ${
              align === "center" ? "text-center" : align === "right" ? "sm:text-right text-left" : "text-left"
            }`}
          />
          <input
            type="text"
            value={fromAddress}
            onChange={(e) => setFromAddress(e.target.value)}
            placeholder="Address"
            className={`focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full ${
              align === "center" ? "text-center" : align === "right" ? "sm:text-right text-left" : "text-left"
            }`}
          />
        </div>
      </div>
    );

    const invoiceInfo = (
      <div
        key="info"
        className={`shrink-0 ${
          align === "center"
            ? "text-center mt-3 sm:mt-0"
            : align === "right"
            ? "sm:text-left text-left"
            : "sm:text-right text-left"
        }`}
      >
        <input
          type="text"
          value={invoiceTitle}
          onChange={(e) => setInvoiceTitle(e.target.value.toUpperCase())}
          className={`text-[28px] sm:text-[34px] font-black uppercase tracking-wider focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 leading-none ${
            align === "center"
              ? "text-center"
              : align === "right"
              ? "sm:text-left text-left"
              : "sm:text-right text-left"
          }`}
          style={{ color: themeColor }}
        />
        <div
          className={`mt-2 text-[13px] text-slate-600 space-y-1 ${
            align === "center"
              ? "text-center"
              : align === "right"
              ? "sm:text-left text-left"
              : "sm:text-right text-left"
          }`}
        >
          <div
            className={`flex items-center gap-1 ${
              align === "center" ? "justify-center" : align === "right" ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <span className="text-slate-400">Invoice #:</span>
            <input
              type="text"
              value={invoiceNumber}
              onChange={(e) => setInvoiceNumber(e.target.value)}
              className={`font-bold text-slate-900 w-32 focus:outline-none focus:bg-slate-100 rounded px-1 ${
                align === "center" ? "text-center" : align === "right" ? "sm:text-left" : "sm:text-right"
              }`}
            />
          </div>
          <div
            className={`flex items-center gap-1 ${
              align === "center" ? "justify-center" : align === "right" ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <span className="text-slate-400">Date:</span>
            <input
              type="date"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
              className="text-slate-700 focus:outline-none focus:bg-slate-100 rounded px-1"
            />
          </div>
          <div
            className={`flex items-center gap-1 ${
              align === "center" ? "justify-center" : align === "right" ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <span className="text-slate-400">Due Date:</span>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="text-slate-700 font-medium focus:outline-none focus:bg-slate-100 rounded px-1"
            />
          </div>
          <div
            className={`flex items-center gap-1 pt-1 ${
              align === "center" ? "justify-center" : align === "right" ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as InvoiceStatus)}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-slate-700 focus:outline-none cursor-pointer"
            >
              <option value="sent">Payment Due</option>
              <option value="paid">Paid</option>
              <option value="overdue">Overdue</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>
    );

    return (
      <div
        className={`flex flex-col border-b border-slate-200 pb-8 ${
          align === "center"
            ? "items-center text-center gap-6"
            : "sm:flex-row sm:items-start sm:justify-between gap-6"
        }`}
      >
        {align === "right" ? [invoiceInfo, sender] : [sender, invoiceInfo]}
      </div>
    );
  };

  // 2. Billed To
  const renderBillTo = () => {
    const align = sectionAlignments.bill_to || "left";
    return (
      <div
        className={`my-6 flex ${
          align === "right"
            ? "justify-end text-right"
            : align === "center"
            ? "justify-center text-center"
            : "justify-start text-left"
        }`}
      >
        <div className="max-w-sm w-full">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Billed To
          </span>
          <input
            type="text"
            value={toName}
            onChange={(e) => setToName(e.target.value)}
            placeholder="Client Name"
            className={`text-[16px] font-bold text-slate-900 focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full ${
              align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left"
            }`}
          />
          <input
            type="text"
            value={toCompany}
            onChange={(e) => setToCompany(e.target.value)}
            placeholder="Company (optional)"
            className={`text-[13px] text-slate-600 focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full mt-0.5 ${
              align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left"
            }`}
          />
          <input
            type="text"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
            placeholder="Email address"
            className={`text-[12.5px] text-slate-500 focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full mt-0.5 ${
              align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left"
            }`}
          />
          <input
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            placeholder="City, Country"
            className={`text-[12.5px] text-slate-500 focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1 block w-full mt-0.5 ${
              align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left"
            }`}
          />
        </div>
      </div>
    );
  };

  // 3. Line Items Table (Simple & Clean)
  const renderItems = () => (
    <div className="my-6">
      <table className="w-full text-left text-[13.5px]">
        <thead>
          <tr className="border-b-2 border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-400">
            <th className="py-2.5 pr-2 w-8 print:hidden"></th>
            <th className="py-2.5">Description</th>
            <th className="py-2.5 px-3 text-center w-16">Qty</th>
            <th className="py-2.5 px-3 text-right w-28">Rate ({currencySymbol.trim()})</th>
            <th className="py-2.5 pl-3 text-right w-32">Amount</th>
            <th className="py-2.5 pl-2 w-8 print:hidden"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {items.map((item, idx) => (
            <tr key={item.id} className="group hover:bg-slate-50/70">
              {/* Move buttons */}
              <td className="py-3 pr-2 align-middle print:hidden">
                <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => handleMoveItem(idx, -1)}
                    disabled={idx === 0}
                    className="text-slate-400 hover:text-slate-700 disabled:opacity-20 text-[11px]"
                  >
                    ▲
                  </button>
                  <button
                    type="button"
                    onClick={() => handleMoveItem(idx, 1)}
                    disabled={idx === items.length - 1}
                    className="text-slate-400 hover:text-slate-700 disabled:opacity-20 text-[11px]"
                  >
                    ▼
                  </button>
                </div>
              </td>
              <td className="py-3 align-top">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) => handleItemChange(idx, "description", e.target.value)}
                  placeholder="Service description"
                  className="w-full font-medium text-slate-800 focus:outline-none focus:bg-slate-100 rounded px-1 -mx-1"
                />
              </td>
              <td className="py-3 px-3 align-top text-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(idx, "quantity", Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-12 text-center text-slate-700 focus:outline-none focus:bg-slate-100 rounded px-1"
                />
              </td>
              <td className="py-3 px-3 align-top text-right font-mono">
                <input
                  type="number"
                  min="0"
                  step="any"
                  value={item.unit_price}
                  onChange={(e) =>
                    handleItemChange(idx, "unit_price", parseFloat(e.target.value) || 0)
                  }
                  className="w-20 text-right text-slate-700 focus:outline-none focus:bg-slate-100 rounded px-1"
                />
              </td>
              <td className="py-3 pl-3 align-top text-right font-bold text-slate-900 font-mono">
                {currencySymbol}
                {Number(item.total).toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </td>
              <td className="py-3 pl-2 align-top text-center print:hidden">
                <button
                  type="button"
                  onClick={() => handleRemoveItem(idx)}
                  className="text-slate-300 hover:text-rose-500 opacity-0 group-hover:opacity-100 text-[13px]"
                >
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Line Item */}
      <div className="pt-2 print:hidden">
        <button
          type="button"
          onClick={handleAddItem}
          className="text-[12.5px] font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
        >
          <span>+ Add line item</span>
        </button>
      </div>
    </div>
  );

  // 4. Totals (Subtotal, Discount, Total)
  const renderTotals = () => {
    const align = sectionAlignments.totals || totalsAlign || "right";
    return (
      <div
        className={`flex my-6 ${
          align === "left"
            ? "justify-start"
            : align === "center"
            ? "justify-center"
            : "justify-end"
        }`}
      >
        <div className="w-64 space-y-2 text-[13.5px] border-t border-slate-200 pt-3">
          <div className="flex justify-between text-slate-600">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-800 font-mono">
              {formatInvoiceMoney(subtotal, currency)}
            </span>
          </div>

          {/* Optional Discount */}
          <div className="flex items-center justify-between text-slate-600 text-[12.5px]">
            <div className="flex items-center gap-1">
              <span>Discount:</span>
              <select
                value={discountType}
                onChange={(e) => setDiscountType(e.target.value as "percentage" | "fixed" | "none")}
                className="text-[11px] rounded border border-slate-200 bg-transparent px-1 print:hidden"
              >
                <option value="none">None</option>
                <option value="percentage">%</option>
                <option value="fixed">Fixed</option>
              </select>
              {discountType !== "none" && (
                <input
                  type="number"
                  min="0"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(parseFloat(e.target.value) || 0)}
                  className="w-12 text-[11px] rounded border border-slate-200 px-1 print:hidden"
                />
              )}
            </div>
            {discountAmount > 0 && (
              <span className="font-semibold text-emerald-700 font-mono">
                -{formatInvoiceMoney(discountAmount, currency)}
              </span>
            )}
          </div>

          {/* Total */}
          <div className="border-t-2 border-slate-300 pt-2 flex justify-between items-baseline">
            <span className="text-[15px] font-bold text-slate-900 uppercase">Total Due</span>
            <span className="text-[20px] font-black font-mono" style={{ color: themeColor }}>
              {formatInvoiceMoney(total, currency)}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // 5. Payment Details & Notes (Clear, clean layout without background box)
  const renderPaymentAndNotes = () => {
    const align = sectionAlignments.payment_and_notes || "left";

    const paymentBlock = (
      <div key="pay" className={align === "right" ? "sm:text-right text-left" : "text-left"}>
        <span className="text-[12px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
          Payment Details
        </span>
        <div className="space-y-2.5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[13px]">
            <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Bank Name:</span>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="e.g. Commercial Bank of Ceylon"
              className="flex-1 font-bold text-slate-900 bg-transparent border-b border-slate-200 focus:border-slate-700 focus:outline-none px-1 py-1 text-[13px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[13px]">
            <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Account Name:</span>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
              placeholder="e.g. Chanuka Jeewantha"
              className="flex-1 font-semibold text-slate-900 bg-transparent border-b border-slate-200 focus:border-slate-700 focus:outline-none px-1 py-1 text-[13px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[13px]">
            <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Account No:</span>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="e.g. 8001234567"
              className="flex-1 font-extrabold font-mono text-[14.5px] text-slate-950 bg-transparent border-b border-slate-200 focus:border-slate-700 focus:outline-none px-1 py-1 tracking-wider"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-[13px]">
            <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">SWIFT / BIC:</span>
            <input
              type="text"
              value={swiftCode}
              onChange={(e) => setSwiftCode(e.target.value)}
              placeholder="e.g. CCEYLKX"
              className="flex-1 font-bold font-mono text-[13px] text-slate-900 bg-transparent border-b border-slate-200 focus:border-slate-700 focus:outline-none px-1 py-1 tracking-wider"
            />
          </div>
        </div>
      </div>
    );

    const notesBlock = (
      <div key="notes" className={align === "right" ? "sm:text-right text-left" : "text-left"}>
        <span className="text-[12px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
          Notes & Terms
        </span>
        <textarea
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Payment terms, bank wire instructions, or client notes..."
          className="w-full text-slate-700 bg-transparent border border-slate-200 focus:border-slate-700 focus:outline-none rounded-lg p-2.5 text-[13px] resize-y leading-relaxed"
        />
      </div>
    );

    return (
      <div
        className={`my-8 border-t border-slate-200 pt-6 text-[12.5px] ${
          align === "center"
            ? "max-w-md mx-auto space-y-6"
            : "grid grid-cols-1 sm:grid-cols-2 gap-8"
        }`}
      >
        {align === "right" ? [notesBlock, paymentBlock] : [paymentBlock, notesBlock]}
      </div>
    );
  };

  // 6. Simple Footer
  const renderFooter = () => {
    const align = sectionAlignments.footer || "center";
    return (
      <div
        className={`mt-8 border-t border-slate-100 pt-4 text-[11.5px] text-slate-400 ${
          align === "left"
            ? "text-left"
            : align === "right"
            ? "text-right"
            : "text-center"
        }`}
      >
        {fromName} · {fromTitle} · {fromWebsite}
      </div>
    );
  };

  const sectionMap: Record<string, { label: string; render: () => React.ReactNode }> = {
    header: { label: "Header", render: renderHeader },
    bill_to: { label: "Billed To", render: renderBillTo },
    items: { label: "Items Table", render: renderItems },
    totals: { label: "Totals", render: renderTotals },
    payment_and_notes: { label: "Payment & Notes", render: renderPaymentAndNotes },
    footer: { label: "Footer", render: renderFooter },
  };

  // Exact 100% clean output representation (no controls, no borders, true WYSIWYG)
  const renderExactOutputPaper = (isSticky = false, elementId = "exact-preview-paper", isExport = false) => {
    return (
      <div
        id={elementId}
        className={
          isExport
            ? "bg-white text-slate-900 p-10 w-[794px] box-border"
            : `bg-white text-slate-900 rounded-2xl shadow-sm p-8 sm:p-12 border border-slate-200/90 print:border-none print:shadow-none print:rounded-none print:p-0 ${
                isSticky ? "sticky top-6" : ""
              }`
        }
      >
        {/* Subtle Watermark in live preview (omitted from exported PDF) */}
        {!isExport && (
          <div
            data-html2canvas-ignore="true"
            className="flex items-center justify-between pb-3 mb-6 border-b border-slate-100 text-[10.5px] font-mono text-slate-400 print:hidden"
          >
            <span className="flex items-center gap-1.5 font-bold text-slate-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE EXACT OUTPUT PREVIEW
            </span>
            <span>{invoiceNumber} · {currency}</span>
          </div>
        )}

        {sectionOrder.map((sectionId) => {
          if (sectionId.startsWith("spacer-")) {
            const height = spacers[sectionId] || 28;
            return (
              <div
                key={sectionId}
                style={{
                  height: `${height}px`,
                  transition: "height 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="w-full"
                aria-hidden="true"
              />
            );
          }

          const spacing = sectionSpacing[sectionId] || { marginTop: 16, marginBottom: 20, offsetX: 0 };
          const align = sectionAlignments[sectionId] || "left";

          let content: React.ReactNode = null;
          if (sectionId === "header") {
            const sender = (
              <div
                key="s"
                className={`flex-1 ${
                  align === "center"
                    ? "text-center"
                    : align === "right"
                    ? "sm:text-right text-left"
                    : "text-left"
                }`}
              >
                <h1
                  className="text-[22px] sm:text-[25px] font-black tracking-tight leading-tight"
                  style={{ color: themeColor }}
                >
                  {fromName || "Chanuka Jeewantha"}
                </h1>
                {fromTitle && (
                  <p className="text-[13px] font-medium text-slate-500 mt-0.5">
                    {fromTitle}
                  </p>
                )}
                <div className="mt-2 text-[12.5px] text-slate-500 space-y-0.5">
                  {fromEmail && <p>{fromEmail}</p>}
                  {fromPhone && <p>{fromPhone}</p>}
                  {fromAddress && <p>{fromAddress}</p>}
                </div>
              </div>
            );

            const meta = (
              <div
                key="m"
                className={`shrink-0 ${
                  align === "center"
                    ? "text-center mt-3 sm:mt-0"
                    : align === "right"
                    ? "sm:text-left text-left"
                    : "sm:text-right text-left"
                }`}
              >
                <span
                  className="text-[28px] sm:text-[34px] font-black uppercase tracking-wider block leading-none"
                  style={{ color: themeColor }}
                >
                  {invoiceTitle || "INVOICE"}
                </span>
                <div className="mt-2 text-[13px] text-slate-600 space-y-1">
                  <p>
                    <span className="text-slate-400">Invoice #:</span>{" "}
                    <span className="font-bold text-slate-900">{invoiceNumber}</span>
                  </p>
                  <p>
                    <span className="text-slate-400">Date:</span>{" "}
                    <span className="text-slate-700">{issueDate}</span>
                  </p>
                  {dueDate && (
                    <p>
                      <span className="text-slate-400">Due Date:</span>{" "}
                      <span className="text-slate-900 font-semibold">{dueDate}</span>
                    </p>
                  )}
                  <div className="pt-1">
                    <span
                      className={`inline-block rounded-md border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                        status === "paid"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
                      {status === "paid" ? "✓ Paid" : "Payment Due"}
                    </span>
                  </div>
                </div>
              </div>
            );

            content = (
              <div
                className={`flex flex-col border-b border-slate-200 pb-6 ${
                  align === "center"
                    ? "items-center text-center gap-6"
                    : "sm:flex-row sm:items-start sm:justify-between gap-6"
                }`}
              >
                {align === "right" ? [meta, sender] : [sender, meta]}
              </div>
            );
          } else if (sectionId === "bill_to") {
            content = (
              <div
                className={
                  align === "center"
                    ? "text-center"
                    : align === "right"
                    ? "sm:text-right text-left"
                    : "text-left"
                }
              >
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Billed To
                </span>
                <p className="text-[17px] font-bold text-slate-900">{toName || "Client"}</p>
                {toCompany && <p className="text-[13px] font-medium text-slate-600">{toCompany}</p>}
                {toEmail && <p className="text-[12.5px] text-slate-500 mt-0.5">{toEmail}</p>}
                {toAddress && <p className="text-[12.5px] text-slate-500">{toAddress}</p>}
              </div>
            );
          } else if (sectionId === "items") {
            content = (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13px]">
                  <thead>
                    <tr className="border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      <th className="py-2.5 pr-3">Description</th>
                      <th className="py-2.5 px-3 text-center">Qty</th>
                      <th className="py-2.5 px-3 text-right">Rate</th>
                      <th className="py-2.5 pl-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {items.map((it) => (
                      <tr key={it.id}>
                        <td className="py-3 pr-3 font-medium text-slate-800">{it.description}</td>
                        <td className="py-3 px-3 text-center text-slate-600 font-mono">{it.quantity}</td>
                        <td className="py-3 px-3 text-right font-mono text-slate-600">
                          {currencySymbol}
                          {Number(it.unit_price).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </td>
                        <td className="py-3 pl-3 text-right font-bold text-slate-900 font-mono">
                          {currencySymbol}
                          {Number(it.total).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          } else if (sectionId === "totals") {
            content = (
              <div
                className={`flex ${
                  align === "left"
                    ? "justify-start"
                    : align === "center"
                    ? "justify-center"
                    : "justify-end"
                }`}
              >
                <div className="w-64 space-y-2 text-[13.5px] border-t border-slate-200 pt-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-800 font-mono">
                      {formatInvoiceMoney(subtotal, currency)}
                    </span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 text-[12.5px]">
                      <span>Discount {discountType === "percentage" ? `(${discountValue}%)` : ""}</span>
                      <span className="font-semibold font-mono">
                        -{formatInvoiceMoney(discountAmount, currency)}
                      </span>
                    </div>
                  )}
                  {taxAmount > 0 && (
                    <div className="flex justify-between text-slate-600 text-[12.5px]">
                      <span>Tax ({taxRate}%)</span>
                      <span className="font-semibold font-mono">
                        +{formatInvoiceMoney(taxAmount, currency)}
                      </span>
                    </div>
                  )}
                  <div className="border-t-2 border-slate-300 pt-2 flex justify-between items-baseline">
                    <span className="text-[15px] font-bold text-slate-900 uppercase">Total Due</span>
                    <span className="text-[20px] font-black font-mono" style={{ color: themeColor }}>
                      {formatInvoiceMoney(total, currency)}
                    </span>
                  </div>
                </div>
              </div>
            );
          } else if (sectionId === "payment_and_notes") {
            const payBlock = (
              <div key="p" className={align === "right" ? "sm:text-right text-left" : "text-left"}>
                <span className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Payment Details
                </span>
                <div className="space-y-2 text-[13.5px]">
                  {bankName && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Bank:</span>
                      <span className="font-bold text-slate-900">{bankName}</span>
                    </div>
                  )}
                  {accountName && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Account Name:</span>
                      <span className="font-semibold text-slate-900">{accountName}</span>
                    </div>
                  )}
                  {accountNumber && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">Account No:</span>
                      <span className="font-extrabold font-mono text-[15px] tracking-wider text-slate-950">
                        {accountNumber}
                      </span>
                    </div>
                  )}
                  {swiftCode && (
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                      <span className="text-slate-500 font-medium sm:w-28 shrink-0 text-[12.5px]">SWIFT / BIC:</span>
                      <span className="font-bold font-mono tracking-wider text-slate-900">
                        {swiftCode}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );

            const noteBlock = notes ? (
              <div key="n" className={align === "right" ? "sm:text-right text-left" : "text-left"}>
                <span className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                  Notes
                </span>
                <p className="text-slate-700 text-[13px] leading-relaxed whitespace-pre-line">
                  {notes}
                </p>
              </div>
            ) : null;

            content = (
              <div
                className={`border-t border-slate-200 pt-6 text-[12.5px] ${
                  align === "center"
                    ? "max-w-md mx-auto space-y-6"
                    : "grid grid-cols-1 sm:grid-cols-2 gap-8"
                }`}
              >
                {align === "right" ? [noteBlock, payBlock] : [payBlock, noteBlock]}
              </div>
            );
          } else if (sectionId === "footer") {
            content = (
              <div
                className={`border-t border-slate-100 pt-4 text-[11.5px] text-slate-400 ${
                  align === "left"
                    ? "text-left"
                    : align === "right"
                    ? "text-right"
                    : "text-center"
                }`}
              >
                {fromName} · {fromTitle} · {fromWebsite}
              </div>
            );
          }

          return (
            <div
              key={sectionId}
              style={{
                marginTop: `${spacing.marginTop ?? 16}px`,
                marginBottom: `${spacing.marginBottom ?? 20}px`,
                transform: spacing.offsetX ? `translateX(${spacing.offsetX}px)` : undefined,
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), margin 0.25s ease",
              }}
            >
              {content}
            </div>
          );
        })}
      </div>
    );
  };

  // Interactive Editable Canvas with move controls and spacing widgets
  const renderEditablePaper = () => {
    return (
      <div
        id="invoice-paper"
        className="bg-white text-slate-900 rounded-2xl shadow-sm p-8 sm:p-12 border border-slate-200/90 print:border-none print:shadow-none print:rounded-none print:p-0"
      >
        {sectionOrder.map((sectionId, index) => {
          // If this is an Empty Space (Spacer) block
          if (sectionId.startsWith("spacer-")) {
            const height = spacers[sectionId] || 28;
            return (
              <div key={sectionId} className="relative">
                {/* In-Between Add Space Divider (hover) */}
                <div className="relative -my-1 h-3 group/addspace flex items-center justify-center print:hidden">
                  <div className="absolute inset-x-8 border-t border-dashed border-amber-300 opacity-0 group-hover/addspace:opacity-100 transition-opacity" />
                  <button
                    type="button"
                    onClick={() => handleAddSpacer(index - 1)}
                    className="relative z-10 opacity-0 group-hover/addspace:opacity-100 scale-90 group-hover/addspace:scale-100 transition-all rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-2 py-0.5 text-[10px] shadow-sm flex items-center gap-1 cursor-pointer"
                    title="Insert empty space here"
                  >
                    <span>+ Add Empty Space Here</span>
                  </button>
                </div>

                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  className={`relative group/spacer my-1 transition-all ${
                    dragOverIndex === index ? "border-t-2 border-amber-500 pt-1" : ""
                  }`}
                >
                  <div
                    className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50/70 hover:bg-amber-50/40 hover:border-amber-400 transition-colors flex items-center justify-between px-3 print:border-none print:bg-transparent"
                    style={{ height: `${height}px` }}
                  >
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 font-mono print:hidden">
                      <span
                        className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-900 text-[14px] px-1 select-none"
                        title="Drag empty space to move it anywhere"
                      >
                        ⠿
                      </span>
                      <span>↕ Empty Space ({height}px)</span>
                    </div>

                    <div className="flex items-center gap-1 opacity-70 group-hover/spacer:opacity-100 transition-opacity print:hidden">
                      {/* Quick Height Chips */}
                      <div className="hidden sm:flex items-center gap-1 border-r border-slate-200 pr-1 mr-1">
                        {[16, 28, 48, 72].map((sz) => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setSpacers((prev) => ({ ...prev, [sectionId]: sz }))}
                            className={`rounded px-1.5 py-0.5 text-[9.5px] font-bold cursor-pointer transition-colors ${
                              height === sz
                                ? "bg-slate-900 text-white"
                                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                            }`}
                          >
                            {sz}px
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleAdjustSpacer(sectionId, -4)}
                        disabled={height <= 8}
                        className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-30 cursor-pointer shadow-2xs"
                        title="Decrease empty space height"
                      >
                        -4px
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAdjustSpacer(sectionId, 4)}
                        className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-bold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-2xs"
                        title="Increase empty space height"
                      >
                        +4px
                      </button>
                      <button
                        type="button"
                        onClick={() => handleRemoveSpacer(sectionId)}
                        className="rounded border border-rose-200 bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-700 hover:bg-rose-100 cursor-pointer shadow-2xs ml-1"
                        title="Delete empty space block"
                      >
                        ✕ Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          const sectionConfig = sectionMap[sectionId];
          if (!sectionConfig) return null;

          const spacing = sectionSpacing[sectionId] || { marginTop: 16, marginBottom: 20, offsetX: 0 };
          const currentAlign = sectionAlignments[sectionId] || "left";
          const isMenuOpen = activeSpacingMenu === sectionId;

          return (
            <div key={sectionId} className="relative">
              {/* In-Between Add Space Divider (hover) */}
              <div className="relative -my-1.5 h-3 group/addspace flex items-center justify-center print:hidden">
                <div className="absolute inset-x-8 border-t border-dashed border-amber-300 opacity-0 group-hover/addspace:opacity-100 transition-opacity" />
                <button
                  type="button"
                  onClick={() => handleAddSpacer(index - 1)}
                  className="relative z-10 opacity-0 group-hover/addspace:opacity-100 scale-90 group-hover/addspace:scale-100 transition-all rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-2 py-0.5 text-[10px] shadow-sm flex items-center gap-1 cursor-pointer"
                  title="Insert a customizable empty space block here"
                >
                  <span>+ Add Empty Space Here</span>
                </button>
              </div>

              <div
                onDragOver={(e) => handleDragOver(e, index)}
                onDrop={(e) => handleDrop(e, index)}
                className={`relative group transition-all ${
                  dragOverIndex === index ? "border-t-2 border-amber-500" : ""
                }`}
                style={{
                  marginTop: `${spacing.marginTop}px`,
                  marginBottom: `${spacing.marginBottom}px`,
                  transform: spacing.offsetX ? `translateX(${spacing.offsetX}px)` : undefined,
                  transition: "margin 0.25s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Comprehensive Floating Control Widget */}
                <div className="absolute -top-3.5 right-0 z-20 flex items-center gap-1 rounded-lg bg-white/95 px-2 py-0.5 text-[11px] font-medium text-slate-600 shadow-xs border border-slate-200/90 backdrop-blur-xs transition-opacity opacity-40 group-hover:opacity-100 print:hidden">
                  {/* Drag Handle to Move Anywhere */}
                  <span
                    draggable
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragEnd={handleDragEnd}
                    className="cursor-grab active:cursor-grabbing text-slate-400 hover:text-slate-900 text-[13px] px-0.5 select-none"
                    title="Drag to move this section anywhere"
                  >
                    ⠿
                  </span>

                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-0.5">
                    {sectionConfig.label}
                  </span>

                  <div className="flex items-center gap-0.5 border-l border-slate-200 pl-1">
                    {/* Vertical Move Controls */}
                    <button
                      type="button"
                      title="Move section Up"
                      onClick={() => moveSection(index, -1)}
                      disabled={index === 0}
                      className="rounded p-0.5 hover:bg-slate-100 hover:text-slate-900 text-slate-600 disabled:opacity-20 cursor-pointer text-[10px]"
                    >
                      ▲
                    </button>
                    <button
                      type="button"
                      title="Move section Down"
                      onClick={() => moveSection(index, 1)}
                      disabled={index === sectionOrder.length - 1}
                      className="rounded p-0.5 hover:bg-slate-100 hover:text-slate-900 text-slate-600 disabled:opacity-20 cursor-pointer text-[10px]"
                    >
                      ▼
                    </button>
                  </div>

                  <div className="flex items-center gap-0.5 border-l border-slate-200 pl-1">
                    {/* Horizontal Sides */}
                    <button
                      type="button"
                      title="Move to Left side"
                      onClick={() => moveSectionSide(sectionId, "left")}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors cursor-pointer ${
                        currentAlign === "left"
                          ? "bg-slate-900 text-white font-bold"
                          : "hover:bg-slate-100 text-slate-600"
                      }`}
                    >
                      ◀ Left
                    </button>
                    <button
                      type="button"
                      title="Center align"
                      onClick={() => moveSectionSide(sectionId, "center")}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors cursor-pointer ${
                        currentAlign === "center"
                          ? "bg-slate-900 text-white font-bold"
                          : "hover:bg-slate-100 text-slate-600"
                      }`}
                    >
                      Center
                    </button>
                    <button
                      type="button"
                      title="Move to Right side"
                      onClick={() => moveSectionSide(sectionId, "right")}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors cursor-pointer ${
                        currentAlign === "right"
                          ? "bg-slate-900 text-white font-bold"
                          : "hover:bg-slate-100 text-slate-600"
                      }`}
                    >
                      Right ▶
                    </button>
                  </div>

                  {/* Empty Space & Nudge Anywhere Popover Button */}
                  <div className="relative border-l border-slate-200 pl-1">
                    <button
                      type="button"
                      onClick={() => setActiveSpacingMenu(isMenuOpen ? null : sectionId)}
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold transition-colors cursor-pointer ${
                        isMenuOpen
                          ? "bg-amber-500 text-slate-950 shadow-2xs"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                      title="Manage empty space above/below and move horizontally"
                    >
                      ↕ Space & Move
                    </button>

                    {/* Dropdown Panel for fine-grained space management & free move */}
                    {isMenuOpen && (
                      <div className="absolute right-0 top-6 z-30 w-76 rounded-xl bg-white p-3.5 shadow-xl border border-slate-200 text-slate-800 text-[12px] space-y-3">
                        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
                          <span className="font-bold text-slate-800">
                            {sectionConfig.label} · Space & Move
                          </span>
                          <button
                            type="button"
                            onClick={() => setActiveSpacingMenu(null)}
                            className="text-slate-400 hover:text-slate-600 font-bold px-1"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Top Empty Space */}
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                            <span>Empty Space Above (Top):</span>
                            <span className="font-mono font-bold text-slate-800">{spacing.marginTop}px</span>
                          </div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            {[0, 12, 24, 40].map((sz) => (
                              <button
                                key={sz}
                                type="button"
                                onClick={() => handleSpacingChange(sectionId, "marginTop", sz, true)}
                                className={`rounded px-1.5 py-0.5 text-[9.5px] font-bold cursor-pointer transition-colors ${
                                  spacing.marginTop === sz
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-white"
                                }`}
                              >
                                {sz}px
                              </button>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              step="4"
                              value={spacing.marginTop}
                              onChange={(e) => handleSpacingChange(sectionId, "marginTop", parseInt(e.target.value) || 0, true)}
                              className="flex-1 accent-slate-900 cursor-pointer"
                            />
                            <button
                              type="button"
                              onClick={() => handleSpacingChange(sectionId, "marginTop", -4)}
                              className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] hover:bg-slate-50 cursor-pointer"
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSpacingChange(sectionId, "marginTop", 4)}
                              className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] hover:bg-slate-50 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Bottom Empty Space */}
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                            <span>Empty Space Below (Bottom):</span>
                            <span className="font-mono font-bold text-slate-800">{spacing.marginBottom}px</span>
                          </div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            {[0, 16, 28, 48].map((sz) => (
                              <button
                                key={sz}
                                type="button"
                                onClick={() => handleSpacingChange(sectionId, "marginBottom", sz, true)}
                                className={`rounded px-1.5 py-0.5 text-[9.5px] font-bold cursor-pointer transition-colors ${
                                  spacing.marginBottom === sz
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-white"
                                }`}
                              >
                                {sz}px
                              </button>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="range"
                              min="0"
                              max="100"
                              step="4"
                              value={spacing.marginBottom}
                              onChange={(e) => handleSpacingChange(sectionId, "marginBottom", parseInt(e.target.value) || 0, true)}
                              className="flex-1 accent-slate-900 cursor-pointer"
                            />
                            <button
                              type="button"
                              onClick={() => handleSpacingChange(sectionId, "marginBottom", -4)}
                              className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] hover:bg-slate-50 cursor-pointer"
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSpacingChange(sectionId, "marginBottom", 4)}
                              className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] hover:bg-slate-50 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Free Horizontal Shift (Move to Anywhere) */}
                        <div>
                          <div className="flex justify-between text-[11px] text-slate-500 mb-1">
                            <span>Move Anywhere (Horizontal Offset):</span>
                            <span className="font-mono font-bold text-slate-800">
                              {spacing.offsetX ? `${spacing.offsetX > 0 ? "+" : ""}${spacing.offsetX}px` : "0px (Center)"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            {[-30, 0, 30].map((off) => (
                              <button
                                key={off}
                                type="button"
                                onClick={() => handleSpacingChange(sectionId, "offsetX", off, true)}
                                className={`rounded px-1.5 py-0.5 text-[9.5px] font-bold cursor-pointer transition-colors ${
                                  (spacing.offsetX || 0) === off
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-white"
                                }`}
                              >
                                {off === 0 ? "Center (0)" : `${off > 0 ? "+" : ""}${off}px`}
                              </button>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="range"
                              min="-140"
                              max="140"
                              step="5"
                              value={spacing.offsetX}
                              onChange={(e) => handleSpacingChange(sectionId, "offsetX", parseInt(e.target.value) || 0, true)}
                              className="flex-1 accent-slate-900 cursor-pointer"
                            />
                            <button
                              type="button"
                              onClick={() => handleSpacingChange(sectionId, "offsetX", 0, true)}
                              className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] hover:bg-slate-50 cursor-pointer"
                              title="Reset horizontal shift to center"
                            >
                              0
                            </button>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                          <button
                            type="button"
                            onClick={() => handleAddSpacer(index)}
                            className="font-bold text-amber-700 hover:text-amber-800 cursor-pointer flex items-center gap-1"
                          >
                            <span>↕ + Insert Spacer Below</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              handleSpacingChange(sectionId, "marginTop", 16, true);
                              handleSpacingChange(sectionId, "marginBottom", 20, true);
                              handleSpacingChange(sectionId, "offsetX", 0, true);
                            }}
                            className="text-slate-400 hover:text-slate-600 underline cursor-pointer"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {sectionConfig.render()}
              </div>
            </div>
          );
        })}

        {/* In-Between Add Space Divider (bottom of page) */}
        <div className="relative -my-1 h-3 group/addspace flex items-center justify-center print:hidden">
          <div className="absolute inset-x-8 border-t border-dashed border-amber-300 opacity-0 group-hover/addspace:opacity-100 transition-opacity" />
          <button
            type="button"
            onClick={() => handleAddSpacer(sectionOrder.length - 1)}
            className="relative z-10 opacity-0 group-hover/addspace:opacity-100 scale-90 group-hover/addspace:scale-100 transition-all rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-2.5 py-0.5 text-[10px] shadow-sm flex items-center gap-1 cursor-pointer"
            title="Insert empty space at the bottom"
          >
            <span>+ Add Empty Space Here</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-100/80 py-8 px-4 sm:px-6 print:min-h-0 print:bg-white print:p-0">
      {/* Top Clean Toolbar */}
      <div
        className={`mx-auto ${
          viewMode === "split" ? "max-w-7xl" : "max-w-3xl"
        } mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white border border-slate-200/80 px-4 py-2.5 shadow-xs print:hidden transition-all duration-300`}
      >
        {/* Left: Nav & Currency */}
        <div className="flex items-center gap-3">
          <Link
            href="/admin/invoices"
            className="text-[12.5px] font-semibold text-slate-500 hover:text-slate-900"
          >
            ← Admin
          </Link>
          <span className="text-slate-300">|</span>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="text-[12.5px] font-semibold text-slate-800 bg-transparent border border-slate-200 rounded-lg px-2 py-1 focus:outline-none"
          >
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code} ({c.symbol})
              </option>
            ))}
          </select>

          {/* Theme Color Dots */}
          <div className="flex items-center gap-1.5 pl-1">
            {INVOICE_THEMES.map((theme) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => setThemeColor(theme.primary)}
                title={theme.name}
                className={`h-4 w-4 rounded-full transition-transform ${
                  themeColor === theme.primary ? "ring-2 ring-slate-800 scale-110" : "opacity-70 hover:opacity-100"
                }`}
                style={{ backgroundColor: theme.primary }}
              />
            ))}
          </div>

          {/* Import from Supabase Orders */}
          {ordersForImport.length > 0 && (
            <select
              defaultValue=""
              onChange={(e) => {
                if (e.target.value) {
                  const o = ordersForImport.find((item) => item.id === e.target.value);
                  if (o) {
                    setOrderId(o.id);
                    setToName(o.customer_name);
                    setToEmail(o.customer_email);
                    setSite(o.site);
                    setCurrency(o.currency);
                    setItems([
                      {
                        id: `ord-${Date.now()}`,
                        description: `${o.package_name} (${o.level_name})`,
                        quantity: 1,
                        unit_price: o.total_usd,
                        total: o.total_usd,
                      },
                    ]);
                  }
                  e.target.value = "";
                }
              }}
              className="text-[12px] font-medium text-slate-700 bg-transparent border border-slate-200 rounded-lg px-2 py-1 focus:outline-none"
            >
              <option value="" disabled>
                📦 Import Supabase Order...
              </option>
              {ordersForImport.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.customer_name} · {o.package_name} ({o.currency} {o.total_usd})
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Center: View Switcher & Spacing tools */}
        <div className="flex flex-wrap items-center gap-2 text-[11.5px] text-slate-600">
          {/* Segmented View Mode */}
          <div className="flex items-center rounded-xl bg-slate-100 p-0.5 border border-slate-200 text-[11px] font-semibold text-slate-600">
            <button
              type="button"
              onClick={() => setViewMode("edit")}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                viewMode === "edit"
                  ? "bg-white text-slate-900 shadow-2xs font-bold"
                  : "hover:text-slate-900"
              }`}
              title="Editor Canvas with move handles and controls"
            >
              ✏️ Edit
            </button>
            <button
              type="button"
              onClick={() => setViewMode("split")}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                viewMode === "split"
                  ? "bg-white text-slate-900 shadow-2xs font-bold"
                  : "hover:text-slate-900"
              }`}
              title="Side-by-side: Edit on left, see live moving output on right"
            >
              ◫ Split Live
            </button>
            <button
              type="button"
              onClick={() => setViewMode("preview")}
              className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                viewMode === "preview"
                  ? "bg-white text-slate-900 shadow-2xs font-bold"
                  : "hover:text-slate-900"
              }`}
              title="Full exact preview of the clean final output"
            >
              👁 Exact Output
            </button>
          </div>

          <span className="text-slate-300">|</span>

          <button
            type="button"
            onClick={() => handleAddSpacer()}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 px-2.5 py-1 font-semibold text-slate-700 transition-colors shadow-2xs cursor-pointer"
            title="Insert a customizable empty space block anywhere on the invoice"
          >
            <span>↕ + Add Empty Space</span>
            {Object.keys(spacers).length > 0 && (
              <span className="rounded-full bg-amber-500 text-slate-950 px-1.5 py-0.2 text-[10px] font-black">
                {Object.keys(spacers).length}
              </span>
            )}
          </button>

          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 p-0.5 text-[11px] font-medium text-slate-600">
            <span className="px-1.5 text-slate-400">Gaps:</span>
            <button
              type="button"
              onClick={() => applyDensityPreset("compact")}
              className="rounded px-1.5 py-0.5 hover:bg-white hover:text-slate-900 cursor-pointer"
              title="Tight empty spaces"
            >
              Tight
            </button>
            <button
              type="button"
              onClick={() => applyDensityPreset("normal")}
              className="rounded px-1.5 py-0.5 hover:bg-white hover:text-slate-900 cursor-pointer"
              title="Standard empty spaces"
            >
              Normal
            </button>
            <button
              type="button"
              onClick={() => applyDensityPreset("spacious")}
              className="rounded px-1.5 py-0.5 hover:bg-white hover:text-slate-900 cursor-pointer"
              title="Generous empty spaces"
            >
              Spacious
            </button>
            <button
              type="button"
              onClick={handleResetLayout}
              className="rounded px-1.5 py-0.5 text-slate-400 hover:text-rose-600 hover:bg-white cursor-pointer ml-0.5"
              title="Reset all sections and empty spaces back to standard layout"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
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
            className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-[12.5px] font-semibold text-slate-700 hover:bg-slate-50 shadow-2xs cursor-pointer"
          >
            Print
          </button>
          <button
            type="button"
            disabled={isPending}
            onClick={handleSave}
            className="rounded-xl bg-slate-900 px-3.5 py-1.5 text-[12.5px] font-bold text-white hover:bg-slate-800 shadow-2xs cursor-pointer"
          >
            {isPending ? "Saving..." : "Save Invoice"}
          </button>
        </div>
      </div>

      {/* Share Link Banner if saved */}
      {savedSuccessUrl && (
        <div
          className={`mx-auto ${
            viewMode === "split" ? "max-w-7xl" : "max-w-3xl"
          } mb-4 flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-[12.5px] text-emerald-800 print:hidden`}
        >
          <span>✓ Invoice saved! Public URL: <strong className="font-mono">{savedSuccessUrl}</strong></span>
          <button
            type="button"
            onClick={handleCopyShareLink}
            className="font-bold underline ml-2 cursor-pointer"
          >
            {copySuccess ? "Copied!" : "Copy Link"}
          </button>
        </div>
      )}

      {/* -------------------------------------------------------------
          MAIN INVOICE VIEW MODES (Split, Preview, or Edit)
         ------------------------------------------------------------- */}
      {viewMode === "split" ? (
        <div className="mx-auto max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          <div>
            <div className="mb-2.5 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
              <span>✏️ Interactive Layout Canvas</span>
              <span className="text-[10.5px] font-normal text-slate-400">Move, drag & space elements →</span>
            </div>
            {renderEditablePaper()}
          </div>
          <div>
            <div className="mb-2.5 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">
              <span className="flex items-center gap-1.5 text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>👁 Exact Live Output Preview</span>
              </span>
              <span className="text-[10.5px] font-mono text-emerald-600 font-semibold">Real-Time Vector Sync</span>
            </div>
            {renderExactOutputPaper(true, "exact-preview-paper", false)}
          </div>
        </div>
      ) : viewMode === "preview" ? (
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center justify-between rounded-xl bg-slate-900 text-white px-4 py-2.5 text-[12.5px] shadow-sm print:hidden">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold">Exact Output Preview</span>
              <span className="text-slate-400">· 100% clean vector representation</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setViewMode("edit")}
                className="rounded-lg bg-white/10 hover:bg-white/20 px-2.5 py-1 text-[11.5px] font-medium cursor-pointer"
              >
                ← Return to Edit
              </button>
              <button
                type="button"
                onClick={handleDownloadPdf}
                className="rounded-lg bg-amber-500 text-slate-950 hover:bg-amber-400 px-3 py-1 text-[11.5px] font-bold cursor-pointer"
              >
                Download PDF
              </button>
            </div>
          </div>
          {renderExactOutputPaper(false, "exact-preview-paper", false)}
        </div>
      ) : (
        <div className="mx-auto max-w-3xl">
          {renderEditablePaper()}
        </div>
      )}

      {/* Hidden off-screen A4 container for 100% exact vector capture in all view modes */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          left: "-9999px",
          top: 0,
          zIndex: -9999,
          pointerEvents: "none",
          width: "794px",
        }}
      >
        {renderExactOutputPaper(false, "exact-preview-paper-export", true)}
      </div>
    </div>
  );
}
