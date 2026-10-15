import { Card, PageTitle } from "@/components/admin/ui";
import { requireAdmin } from "@/lib/supabase/guard";
import { PriceList } from "@/components/PriceList";

export const dynamic = "force-dynamic";
export default async function PricingPage() {
  await requireAdmin(true);
  return <>
    <PageTitle title="Sri Lanka pricing · LKR" sub="Current published Essential and Signature rates." />
    <Card><p className="text-sm leading-relaxed text-muted">These are the same rates used by the public calculator and server-side order totals. Pricing is maintained in the deployed local pricing source. Existing order totals remain unchanged. This reference does not modify the shared global USD pricing tables.</p></Card>
    <div className="mt-6"><PriceList orderLinks={false} /></div>
  </>;
}
