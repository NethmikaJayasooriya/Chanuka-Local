import { notFound } from "next/navigation";
import { CustomizableInvoiceGenerator } from "@/components/invoice/CustomizableInvoiceGenerator";
import { getInvoiceById, getRecentOrdersForImport } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditInvoicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [invoice, recentOrders] = await Promise.all([
    getInvoiceById(id),
    getRecentOrdersForImport(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <CustomizableInvoiceGenerator
      initialInvoice={invoice}
      ordersForImport={recentOrders}
      isAdmin={true}
    />
  );
}
