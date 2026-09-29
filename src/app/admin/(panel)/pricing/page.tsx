import { savePrices } from "../actions";
import { Card, PageTitle } from "@/components/admin/ui";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

const SERVICES = [
  ["cv", "ATS Friendly CV"],
  ["cover-letter", "Cover Letter"],
  ["linkedin", "LinkedIn Optimization"],
] as const;
const LEVELS = [
  ["under-2", "Under 2 yrs"],
  ["3-to-9", "3 to 9 yrs"],
  ["over-10", "10+ yrs"],
] as const;

export default async function PricingPage() {
  if (!supabaseConfigured()) return null;
  const db = createAdminClient();
  const [{ data: prices }, { data: deliveries }, { data: bundles }] = await Promise.all([
    db.from("service_prices").select("*"),
    db.from("delivery_options").select("*").order("sort"),
    db.from("bundle_discounts").select("*").order("service_count"),
  ]);

  const priceOf = (s: string, l: string) =>
    prices?.find((p) => p.service_id === s && p.level_id === l)?.price_usd ?? 0;

  return (
    <>
      <PageTitle title="Pricing" sub="Edit base prices, delivery surcharges and bundle discounts. Changes apply to the live site." />
      <form action={savePrices} className="space-y-6">
        <Card>
          <h2 className="text-[14px] font-bold text-ink">Base prices (USD)</h2>
          <div className="mt-4 overflow-x-auto pb-1">
            <table className="w-full min-w-[480px] text-left text-[14px]">
              <thead className="text-[12px] uppercase tracking-wide text-muted">
                <tr>
                  <th className="py-2 pr-4 font-semibold">Service</th>
                  {LEVELS.map(([, l]) => <th key={l} className="px-3 py-2 font-semibold">{l}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {SERVICES.map(([sid, sname]) => (
                  <tr key={sid}>
                    <td className="py-3 pr-4 font-medium text-ink">{sname}</td>
                    {LEVELS.map(([lid]) => (
                      <td key={lid} className="px-3 py-3">
                        <div className="flex items-center gap-1">
                          <span className="text-muted">$</span>
                          <input name={`price:${sid}:${lid}`} type="number" min={0} defaultValue={priceOf(sid, lid)}
                            className="w-24 rounded-[8px] border border-line-strong bg-white px-2.5 py-1.5 text-[14px] outline-none focus:border-brand" />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-[14px] font-bold text-ink">Delivery options</h2>
          <div className="mt-4 space-y-3">
            {(deliveries ?? []).map((d) => (
              <div key={d.id} className="grid min-w-0 items-center gap-3 sm:grid-cols-[140px_minmax(0,1fr)_160px]">
                <input type="hidden" name="delivery_id" value={d.id} />
                <span className="text-[14px] font-medium text-ink">{d.name}</span>
                <input name={`window:${d.id}`} defaultValue={d.window_label}
                  className="rounded-[8px] border border-line-strong bg-white px-3 py-2 text-[13.5px] outline-none focus:border-brand" />
                <label className="flex flex-wrap items-center gap-2 text-[13px] text-muted sm:flex-nowrap">
                  Surcharge
                  <input name={`surcharge:${d.id}`} type="number" step="0.05" min={0} defaultValue={d.surcharge_pct}
                    className="w-20 rounded-[8px] border border-line-strong bg-white px-2.5 py-1.5 text-[14px] outline-none focus:border-brand" />
                  <span className="text-[12px]">(0.2 = +20%)</span>
                </label>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-[14px] font-bold text-ink">Bundle discounts</h2>
          <div className="mt-4 flex flex-wrap gap-5">
            {(bundles ?? []).map((b) => (
              <label key={b.service_count} className="flex items-center gap-2 text-[13.5px] text-ink">
                <input type="hidden" name="bundle_count" value={b.service_count} />
                {b.service_count} service{b.service_count > 1 ? "s" : ""}:
                <input name={`discount:${b.service_count}`} type="number" step="0.05" min={0} defaultValue={b.discount_pct}
                  className="w-20 rounded-[8px] border border-line-strong bg-white px-2.5 py-1.5 text-[14px] outline-none focus:border-brand" />
                <span className="text-[12px] text-muted">(0.2 = 20% off)</span>
              </label>
            ))}
          </div>
        </Card>

        <button type="submit" className="w-full rounded-full bg-brand px-7 py-3 text-[14.5px] font-semibold text-white hover:bg-brand-deep sm:w-auto">
          Save pricing
        </button>
      </form>
    </>
  );
}
