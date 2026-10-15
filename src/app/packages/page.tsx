import { pageMetadata } from "@/lib/seo";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { PriceList } from "@/components/PriceList";

export const metadata = pageMetadata({
  title: "CV Writing Prices in Sri Lanka | Essential & Signature Packages",
  description: "Compare Essential and Signature CV, LinkedIn, cover letter, foreign job CV and CV Review prices in LKR for students, professionals and executives.",
  path: "/packages",
});

export default function PackagesPage() {
  return <>
    <PageHeader eyebrow="Sri Lanka pricing · LKR" title="Your career. Your choice of service."
      lead="Choose team-crafted Essential packages, quality-checked by Chanuka, or founder-led Signature packages personally crafted by Chanuka Jeewantha. Both are available at every experience level."
      crumbs={[{ label: "Packages" }]} primary={{ href: "/#build", label: "Build your package" }} />
    <section className="py-10 sm:py-16"><div className="container-page">
      <p className="mb-6 text-sm leading-relaxed text-muted">All prices are per service in Sri Lankan rupees. Select any price to start an order with that service, tier and experience level. CV Review assesses an existing CV; it is separate from CV writing.</p>
      <PriceList />
      <div className="mt-8 rounded-2xl border border-line bg-surface p-6 text-sm leading-relaxed text-muted">
        <h2 className="font-semibold text-ink">Clear pricing before you order</h2>
        <p className="mt-2">Student / Fresh Graduate: less than 1 year of experience. Professional: 1–9 years. Executive: more than 9 years. Essential documents are team-crafted under Chanuka’s supervision and quality-checked by him. Signature work is personally crafted by Chanuka, with industry and country positioning and 30-day support.</p>
        <p className="mt-2">Combine services in the calculator for an itemized total, with no automatic bundle discount. The existing strategy consultation is priced separately and is not part of these new service price lists. Your delivery window and total are shown before you place an order.</p>
      </div>
    </div></section>
    <ConversionFooter heading="Build your exact package." body="Choose Essential or Signature, your experience level and the services you need." related={[{ href: "/services", label: "All services" }, { href: "/how-it-works", label: "How it works" }, { href: "/faq", label: "FAQ" }]} />
  </>;
}
