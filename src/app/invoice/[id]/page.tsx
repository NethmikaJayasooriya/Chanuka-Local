import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInvoiceById } from "@/app/admin/(panel)/invoices/actions";
import { InvoiceClientView } from "@/components/invoice/InvoiceClientView";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const invoice = await getInvoiceById(id);
  if (!invoice) {
    return {
      title: "Invoice Not Found | Chanuka Jeewantha",
    };
  }

  return {
    title: `Invoice ${invoice.invoice_number} | Chanuka Jeewantha`,
    description: `Official invoice for ${invoice.to_name} from Chanuka Jeewantha Career Branding.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PublicInvoicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const invoice = await getInvoiceById(id);

  if (!invoice) {
    notFound();
  }

  return <InvoiceClientView invoice={invoice} />;
}
