import Link from "next/link";
import { tiers, levels, listedServices, services, TIER_PRICES, formatLKR, packages, type ServiceId } from "@/lib/pricing";

/** Shared by public pages and the local admin reference. */
export function PriceList({ service, orderLinks = true }: { service?: ServiceId; orderLinks?: boolean }) {
  return <div className="space-y-8">
    {tiers.map((tier) => <section key={tier.id} className={`overflow-hidden rounded-2xl border shadow-xs ${tier.id === "signature" ? "border-[#b9862f] bg-[#101820] text-white" : "border-[#d9bf86] bg-[#fffcf5] text-ink"}`}>
      <div className="border-b border-[#b9862f]/40 p-5 sm:p-7">
        <h2 className="display text-2xl sm:text-3xl">{tier.name} Packages</h2>
        <p className={`mt-2 text-sm leading-relaxed ${tier.id === "signature" ? "text-white/80" : "text-muted"}`}>{tier.description}</p>
      </div>
      <div className="overflow-x-auto" tabIndex={0} role="region" aria-label={`${tier.name} pricing table, scroll horizontally on small screens`}>
        <table className="w-full min-w-[650px] text-left text-sm">
          <caption className="sr-only">{tier.name} prices in Sri Lankan rupees. Select a price to order.</caption>
          <thead className="bg-[#b9862f]/10"><tr>
            <th scope="col" className="p-4 sm:p-5">Service</th>
            {levels.map((level) => <th scope="col" key={level.id} className="p-4 sm:p-5"><span className="block">{level.name}</span><span className="mt-1 block text-xs font-normal">{level.id === "under-2" ? "Less than 1 year" : level.id === "3-to-9" ? "1–9 years" : "More than 9 years"}</span></th>)}
          </tr></thead>
          <tbody>{(service ? [service] : listedServices).map((id) => <tr key={id} className="border-t border-[#b9862f]/25">
            <th scope="row" className="p-4 sm:p-5 font-medium">{id === "cv" ? "Professional CV" : services[id].name}</th>
            {levels.map((level) => {
              const price = formatLKR(TIER_PRICES[tier.id][id][level.id]);
              const pkg = packages.find((item) => item.includes.length === 1 && item.includes[0] === id)!;
              return <td key={level.id} className="p-4 sm:p-5 font-semibold whitespace-nowrap">{orderLinks ? <Link className="underline decoration-[#b9862f]/60 underline-offset-4 hover:decoration-current" href={`/order?package=${pkg.id}&tier=${tier.id}&level=${level.id}&delivery=normal`} aria-label={`Order ${tier.name} ${services[id].name} for ${level.name}: ${price}`}>{price}</Link> : price}</td>;
            })}
          </tr>)}</tbody>
        </table>
      </div>
    </section>)}
  </div>;
}
