import { CustomizableInvoiceGenerator } from "@/components/invoice/CustomizableInvoiceGenerator";
import { getRecentOrdersForImport } from "../actions";
import { generateInvoiceNumber, type Invoice } from "@/lib/invoices";

export const dynamic = "force-dynamic";

export default async function NewInvoicePage({
  searchParams,
}: {
  searchParams: Promise<{ order_id?: string }>;
}) {
  const { order_id } = await searchParams;
  const recentOrders = await getRecentOrdersForImport();

  let initialInvoice: Partial<Invoice> | undefined = undefined;

  if (order_id) {
    const matchedOrder = recentOrders.find((o) => o.id === order_id);
    if (matchedOrder) {
      initialInvoice = {
        invoice_number: generateInvoiceNumber(),
        order_id: matchedOrder.id,
        site: matchedOrder.site,
        currency: matchedOrder.currency,
        status: "draft",
        issue_date: new Date().toISOString().split("T")[0],
        due_date: new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0],
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
