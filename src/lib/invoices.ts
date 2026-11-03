export type InvoiceStatus = "draft" | "sent" | "paid" | "cancelled" | "overdue";

export interface InvoiceItem {
  id: string;
  description: string;
  details?: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface PaymentMethods {
  bank_name?: string;
  account_name?: string;
  account_number?: string;
  branch?: string;
  swift_code?: string;
  paypal_email?: string;
  online_pay_url?: string;
  custom_instructions?: string;
}

export interface Invoice {
  id: string;
  invoice_number: string;
  order_id?: string | null;
  site: "com" | "lk";
  status: InvoiceStatus;
  issue_date: string;
  due_date?: string | null;
  currency: string;

  // From (Chanuka Jeewantha Branding)
  from_name: string;
  from_title?: string;
  from_email: string;
  from_phone?: string;
  from_address?: string;
  from_website?: string;

  // To (Client)
  to_name: string;
  to_company?: string;
  to_email?: string;
  to_phone?: string;
  to_address?: string;
  to_country?: string;

  // Items & Pricing
  items: InvoiceItem[];
  subtotal: number;
  discount_type: "percentage" | "fixed" | "none";
  discount_value: number;
  discount_amount: number;
  tax_rate: number;
  tax_amount: number;
  total: number;

  // Notes, Terms & Payment
  notes?: string;
  terms?: string;
  payment_methods: PaymentMethods;

  // Customization & Aesthetics
  invoice_title?: string;
  theme_color?: string;
  po_number?: string;
  payment_terms_label?: string;
  amount_paid?: number;
  balance_due?: number;
  layout?: InvoiceLayout;

  created_at: string;
  updated_at: string;
}

export interface SectionSpacing {
  marginTop?: number; // empty space above in px
  marginBottom?: number; // empty space below in px
  offsetX?: number; // horizontal shift/offset in px (move anywhere)
}

export interface InvoiceLayout {
  section_order?: string[];
  header_layout?: "sender_left" | "sender_right" | "centered";
  client_layout?: "client_left" | "client_right" | "centered";
  totals_align?: "right" | "left" | "center";
  section_alignments?: Record<string, "left" | "center" | "right">;
  section_spacing?: Record<string, SectionSpacing>;
  spacers?: Record<string, number>; // spacer-id -> height in px
  page_density?: "compact" | "normal" | "spacious";
  payment_layout?: "payment_left" | "payment_right";
  footer_align?: "left" | "center" | "right";
}

export const DEFAULT_SECTION_ORDER = [
  "header",
  "bill_to",
  "items",
  "totals",
  "payment",
  "notes",
  "terms",
  "signature",
];

export const INVOICE_THEMES = [
  { id: "navy", name: "Executive Navy", primary: "#17355c", accent: "#b9862f" },
  { id: "gold", name: "Warm Gold", primary: "#8f6419", accent: "#b9862f" },
  { id: "emerald", name: "Forest Emerald", primary: "#065f46", accent: "#059669" },
  { id: "indigo", name: "Royal Indigo", primary: "#3730a3", accent: "#4f46e5" },
  { id: "slate", name: "Minimalist Slate", primary: "#1e293b", accent: "#475569" },
];

export const CURRENCIES = [
  { code: "USD", symbol: "$", label: "USD ($) - Global" },
  { code: "LKR", symbol: "Rs ", label: "LKR (Rs) - Sri Lanka" },
  { code: "GBP", symbol: "£", label: "GBP (£) - United Kingdom" },
  { code: "EUR", symbol: "€", label: "EUR (€) - Europe" },
  { code: "AUD", symbol: "A$", label: "AUD (A$) - Australia" },
  { code: "CAD", symbol: "C$", label: "CAD (C$) - Canada" },
  { code: "AED", symbol: "AED ", label: "AED - United Arab Emirates" },
  { code: "SGD", symbol: "S$", label: "SGD (S$) - Singapore" },
];

export function getCurrencySymbol(code: string = "USD"): string {
  const match = CURRENCIES.find((c) => c.code.toUpperCase() === code.toUpperCase());
  return match?.symbol ?? `${code} `;
}

export function formatInvoiceMoney(amount: number, currency: string = "USD"): string {
  const symbol = getCurrencySymbol(currency);
  return `${symbol}${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function computeInvoiceTotals(
  items: Array<{ quantity: number; unit_price: number }>,
  discountType: "percentage" | "fixed" | "none",
  discountValue: number,
  taxRate: number
) {
  const subtotal = items.reduce((acc, item) => {
    const qty = Number(item.quantity) || 0;
    const price = Number(item.unit_price) || 0;
    return acc + qty * price;
  }, 0);

  let discountAmount = 0;
  if (discountType === "percentage") {
    discountAmount = (subtotal * Math.max(0, Number(discountValue) || 0)) / 100;
  } else if (discountType === "fixed") {
    discountAmount = Math.max(0, Number(discountValue) || 0);
  }
  discountAmount = Math.min(subtotal, Math.max(0, discountAmount));

  const afterDiscount = Math.max(0, subtotal - discountAmount);
  const taxAmount = (afterDiscount * Math.max(0, Number(taxRate) || 0)) / 100;
  const total = afterDiscount + taxAmount;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    discountAmount: Number(discountAmount.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
}

export function generateInvoiceNumber(prefix = "INV"): string {
  const date = new Date();
  const year = date.getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${year}-${random}`;
}

export const DEFAULT_INVOICE_TEMPLATE = {
  from_name: "Chanuka Jeewantha",
  from_title: "CV & Career Branding Specialist",
  from_email: "info@chanukajeewantha.com",
  from_phone: "+94 77 000 0000",
  from_address: "Colombo, Sri Lanka",
  from_website: "https://chanukajeewantha.com",
  currency: "USD",
  notes: "Thank you for trusting Chanuka Jeewantha with your career branding. Your documents are tailored to meet rigorous international ATS and executive recruiter standards.",
  terms: "Payment is due within 7 days. Your consultation and personalized revision rounds commence upon payment confirmation.",
  payment_methods: {
    bank_name: "Commercial Bank of Ceylon",
    account_name: "Chanuka Jeewantha",
    account_number: "8001234567",
    branch: "Colombo Main Branch",
    swift_code: "CCEYLKX",
    paypal_email: "payments@chanukajeewantha.com",
    online_pay_url: "",
    custom_instructions: "Please include your invoice number in the bank transfer reference.",
  },
};
