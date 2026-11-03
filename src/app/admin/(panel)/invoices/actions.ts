"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";
import type { Invoice, InvoiceStatus } from "@/lib/invoices";

// In-memory fallback store for local development before Supabase keys are configured
const globalMemoryStore = globalThis as unknown as { __mockInvoices?: Invoice[] };
if (!globalMemoryStore.__mockInvoices) {
  globalMemoryStore.__mockInvoices = [
    {
      id: "demo-inv-1",
      invoice_number: "INV-2026-001",
      order_id: null,
      site: "com",
      status: "sent",
      issue_date: new Date().toISOString().split("T")[0],
      due_date: new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
      currency: "USD",
      from_name: "Chanuka Jeewantha",
      from_title: "CV & Career Branding Specialist",
      from_email: "info@chanukajeewantha.com",
      from_phone: "+94 77 123 4567",
      from_address: "Colombo, Sri Lanka",
      from_website: "https://chanukajeewantha.com",
      to_name: "Alexander Wright",
      to_company: "AeroTech Solutions UK",
      to_email: "a.wright@aerotech.co.uk",
      to_phone: "+44 7911 123456",
      to_address: "24 Canary Wharf, London",
      to_country: "United Kingdom",
      items: [
        {
          id: "1",
          description: "Executive CV & Career Narrative (UK / Europe Market Alignment)",
          quantity: 1,
          unit_price: 249,
          total: 249,
        },
        {
          id: "2",
          description: "Targeted Cover Letter & Recruiter Strategy Brief",
          quantity: 1,
          unit_price: 69,
          total: 69,
        },
        {
          id: "3",
          description: "LinkedIn Executive Profile SEO & Recruiter Outreach Polish",
          quantity: 1,
          unit_price: 99,
          total: 99,
        },
      ],
      subtotal: 417,
      discount_type: "percentage",
      discount_value: 10,
      discount_amount: 41.7,
      tax_rate: 0,
      tax_amount: 0,
      total: 375.3,
      notes: "Prepared specifically for UK and European senior engineering management opportunities.",
      terms: "Payment is due within 7 days. Consultation and delivery schedule commences upon payment.",
      payment_methods: {
        bank_name: "Commercial Bank of Ceylon",
        account_name: "Chanuka Jeewantha",
        account_number: "8001234567",
        branch: "Colombo Main Branch",
        swift_code: "CCEYLKX",
        paypal_email: "payments@chanukajeewantha.com",
        online_pay_url: "",
        custom_instructions: "Please cite reference INV-2026-001 in your bank transfer note.",
      },
      created_at: new Date(Date.now() - 86400000).toISOString(),
      updated_at: new Date().toISOString(),
    },
  ];
}

export async function getInvoices({
  site,
  status,
  search,
}: {
  site?: "com" | "lk";
  status?: string;
  search?: string;
} = {}): Promise<Invoice[]> {
  if (!supabaseConfigured()) {
    let list = [...(globalMemoryStore.__mockInvoices ?? [])];
    if (site) list = list.filter((i) => i.site === site);
    if (status && status !== "all") list = list.filter((i) => i.status === status);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (i) =>
          i.invoice_number.toLowerCase().includes(q) ||
          i.to_name.toLowerCase().includes(q) ||
          (i.to_email ?? "").toLowerCase().includes(q)
      );
    }
    return list;
  }

  try {
    const db = createAdminClient();
    let query = db.from("invoices").select("*").order("created_at", { ascending: false });

    if (site) query = query.eq("site", site);
    if (status && status !== "all") query = query.eq("status", status);
    if (search) {
      query = query.or(
        `invoice_number.ilike.%${search}%,to_name.ilike.%${search}%,to_email.ilike.%${search}%`
      );
    }

    const { data, error } = await query;
    if (error) {
      console.warn("Supabase invoice query error:", error.message);
      return globalMemoryStore.__mockInvoices ?? [];
    }
    return (data as Invoice[]) ?? [];
  } catch (err) {
    console.error("Failed to load invoices from DB:", err);
    return globalMemoryStore.__mockInvoices ?? [];
  }
}

export async function getInvoiceById(id: string): Promise<Invoice | null> {
  if (!supabaseConfigured()) {
    const found = globalMemoryStore.__mockInvoices?.find(
      (i) => i.id === id || i.invoice_number === id
    );
    return found ?? null;
  }

  try {
    const db = createAdminClient();
    const { data, error } = await db
      .from("invoices")
      .select("*")
      .or(`id.eq.${id},invoice_number.eq.${id}`)
      .maybeSingle();

    if (error || !data) {
      return (
        globalMemoryStore.__mockInvoices?.find((i) => i.id === id || i.invoice_number === id) ??
        null
      );
    }
    return data as Invoice;
  } catch (err) {
    console.error("Error fetching invoice by ID:", err);
    return (
      globalMemoryStore.__mockInvoices?.find((i) => i.id === id || i.invoice_number === id) ?? null
    );
  }
}

export async function saveInvoice(payload: Partial<Invoice>): Promise<{
  success: boolean;
  id: string;
  invoice_number: string;
  error?: string;
}> {
  const isUpdate = Boolean(payload.id && !payload.id.startsWith("demo-"));
  const recordId = payload.id && !payload.id.startsWith("demo-") ? payload.id : crypto.randomUUID();
  const invoiceNumber =
    payload.invoice_number ||
    `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

  const invoiceData: Invoice = {
    id: recordId,
    invoice_number: invoiceNumber,
    order_id: payload.order_id || null,
    site: payload.site || "com",
    status: (payload.status as InvoiceStatus) || "draft",
    issue_date: payload.issue_date || new Date().toISOString().split("T")[0],
    due_date: payload.due_date || null,
    currency: payload.currency || "USD",
    from_name: payload.from_name || "Chanuka Jeewantha",
    from_title: payload.from_title || "CV & Career Branding Specialist",
    from_email: payload.from_email || "info@chanukajeewantha.com",
    from_phone: payload.from_phone || "+94 77 123 4567",
    from_address: payload.from_address || "Colombo, Sri Lanka",
    from_website: payload.from_website || "https://chanukajeewantha.com",
    to_name: payload.to_name || "Valued Client",
    to_company: payload.to_company || "",
    to_email: payload.to_email || "",
    to_phone: payload.to_phone || "",
    to_address: payload.to_address || "",
    to_country: payload.to_country || "",
    items: payload.items || [],
    subtotal: payload.subtotal || 0,
    discount_type: payload.discount_type || "none",
    discount_value: payload.discount_value || 0,
    discount_amount: payload.discount_amount || 0,
    tax_rate: payload.tax_rate || 0,
    tax_amount: payload.tax_amount || 0,
    total: payload.total || 0,
    notes: payload.notes || "",
    terms: payload.terms || "",
    payment_methods: payload.payment_methods || {},
    invoice_title: payload.invoice_title || "INVOICE",
    theme_color: payload.theme_color || "#17355c",
    po_number: payload.po_number || "",
    payment_terms_label: payload.payment_terms_label || "Due on receipt",
    amount_paid: payload.amount_paid || 0,
    balance_due: payload.balance_due !== undefined ? payload.balance_due : (payload.total || 0),
    layout: payload.layout || {},
    created_at: payload.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // Always update in-memory store
  if (globalMemoryStore.__mockInvoices) {
    const idx = globalMemoryStore.__mockInvoices.findIndex((i) => i.id === invoiceData.id);
    if (idx >= 0) {
      globalMemoryStore.__mockInvoices[idx] = invoiceData;
    } else {
      globalMemoryStore.__mockInvoices.unshift(invoiceData);
    }
  }

  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      if (isUpdate) {
        const { error } = await db.from("invoices").update(invoiceData).eq("id", recordId);
        if (error) throw error;
      } else {
        const { error } = await db.from("invoices").insert(invoiceData);
        if (error) throw error;
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      console.warn("Failed to persist invoice to Supabase DB:", errorMsg);
    }
  }

  revalidatePath("/admin/invoices");
  revalidatePath(`/invoice/${recordId}`);
  revalidatePath(`/invoice/${invoiceNumber}`);

  return { success: true, id: recordId, invoice_number: invoiceNumber };
}

export async function updateInvoiceStatus(id: string, status: InvoiceStatus): Promise<boolean> {
  if (globalMemoryStore.__mockInvoices) {
    const item = globalMemoryStore.__mockInvoices.find((i) => i.id === id);
    if (item) item.status = status;
  }

  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      await db.from("invoices").update({ status, updated_at: new Date().toISOString() }).eq("id", id);
    } catch (err) {
      console.warn("Failed to update status in Supabase:", err);
    }
  }

  revalidatePath("/admin/invoices");
  revalidatePath(`/invoice/${id}`);
  return true;
}

export async function deleteInvoice(id: string): Promise<boolean> {
  if (globalMemoryStore.__mockInvoices) {
    globalMemoryStore.__mockInvoices = globalMemoryStore.__mockInvoices.filter((i) => i.id !== id);
  }

  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      await db.from("invoices").delete().eq("id", id);
    } catch (err) {
      console.warn("Failed to delete invoice from Supabase:", err);
    }
  }

  revalidatePath("/admin/invoices");
  return true;
}

export async function getRecentOrdersForImport(): Promise<
  Array<{
    id: string;
    ref: string;
    customer_name: string;
    customer_email: string;
    package_name: string;
    level_name: string;
    total_usd: number;
    currency: string;
    site: "com" | "lk";
  }>
> {
  if (!supabaseConfigured()) {
    return [
      {
        id: "demo-ord-1",
        ref: "ORD-92841",
        customer_name: "Sarah Jenkins",
        customer_email: "sarah.j@outlook.com",
        package_name: "Complete Career Suite",
        level_name: "Senior Management (8-15 years)",
        total_usd: 399,
        currency: "USD",
        site: "com",
      },
      {
        id: "demo-ord-2",
        ref: "ORD-92842",
        customer_name: "Kavinda Perera",
        customer_email: "kavinda.p@gmail.com",
        package_name: "ATS-Optimised CV",
        level_name: "Mid-Career (3-8 years)",
        total_usd: 35000,
        currency: "LKR",
        site: "lk",
      },
    ];
  }

  try {
    const db = createAdminClient();
    const { data } = await db
      .from("orders")
      .select("id,ref,customer_name,customer_email,package_name,level_name,total_usd,site")
      .order("created_at", { ascending: false })
      .limit(30);

    return (
      data?.map((o) => ({
        id: o.id,
        ref: o.ref ?? `ORD-${o.id.slice(0, 5)}`,
        customer_name: o.customer_name ?? "Client",
        customer_email: o.customer_email ?? "",
        package_name: o.package_name ?? "Custom Career Package",
        level_name: o.level_name ?? "Professional",
        total_usd: Number(o.total_usd) || 0,
        currency: o.site === "lk" ? "LKR" : "USD",
        site: o.site || "com",
      })) ?? []
    );
  } catch (err) {
    console.warn("Could not fetch orders for import:", err);
    return [];
  }
}
