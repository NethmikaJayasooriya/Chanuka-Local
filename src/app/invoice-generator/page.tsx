import { Metadata } from "next";
import { CustomizableInvoiceGenerator } from "@/components/invoice/CustomizableInvoiceGenerator";
import { getInvoiceById, getRecentOrdersForImport } from "@/app/admin/(panel)/invoices/actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Customizable Invoice Generator | Chanuka Jeewantha",
  description:
    "Generate, customize, and download clear, professional invoices for executive career services and international consulting.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function InvoiceGeneratorPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; order_id?: string }>;
}) {
  const { id, order_id } = await searchParams;

  const [existingInvoice, recentOrders] = await Promise.all([
    id ? getInvoiceById(id) : Promise.resolve(null),
    getRecentOrdersForImport(),
  ]);

  let initialInvoice = existingInvoice || undefined;

  // Pre-fill from order if requested
  if (!initialInvoice && order_id) {
    const matchedOrder = recentOrders.find((o) => o.id === order_id);
    if (matchedOrder) {
      initialInvoice = {
        id: "",
        invoice_number: `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        order_id: matchedOrder.id,
        site: matchedOrder.site,
        currency: matchedOrder.currency,
        status: "draft",
        issue_date: new Date().toISOString().split("T")[0],
        due_date: new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
        from_name: "Chanuka Jeewantha",
        from_email: "info@chanukajeewantha.com",
        to_name: matchedOrder.customer_name,
        to_email: matchedOrder.customer_email,
        items: [
          {
            id: "1",
            description: `${matchedOrder.package_name} (${matchedOrder.level_name})`,
            quantity: 1,
            unit_price: matchedOrder.total_usd,
            total: matchedOrder.total_usd,
          },
        ],
        subtotal: matchedOrder.total_usd,
        total: matchedOrder.total_usd,
        discount_type: "none",
        discount_value: 0,
        discount_amount: 0,
        tax_rate: 0,
        tax_amount: 0,
        notes: "",
        terms: "",
        payment_methods: {},
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
    }
  }

  return (
    <CustomizableInvoiceGenerator
      initialInvoice={initialInvoice}
      ordersForImport={recentOrders}
      isAdmin={true}
    />
  );
}
