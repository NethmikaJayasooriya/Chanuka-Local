import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { CountryFlagIcon } from "@/components/CountryFlags";
import { PageHeader } from "@/components/PageHeader";
import { corridors } from "@/lib/corridors";
import { countries } from "@/lib/countries";

export const metadata: Metadata = pageMetadata({
  title: "CV and Resume Guides by Country",
  description: "CV and resume conventions across major international job markets: UK, US, Australia, Canada, New Zealand, UAE, and Singapore. Tailored for where you apply.",
  path: "/countries",
});

export default function CountriesDirectoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Global Markets"
        title="Written for the country you are applying to."
        lead="A CV written for London looks out of place in New York, and a resume that works in Sydney will get filtered out in Toronto. Choose your target market to see the exact format, length, and recruitment rules expected by local hiring managers."
        crumbs={[{ label: "Markets" }]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/international-job-seekers", label: "International job seekers" }}
      />

      {/* Primary Dedicated Markets */}
      <section className="py-14 lg:py-20">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="eyebrow">Primary hubs</p>
              <h2 className="display mt-2 text-[clamp(1.6rem,3.2vw,2.3rem)] text-ink">
                Dedicated country hubs.
              </h2>
            </div>
            <p className="text-[14px] text-muted max-w-md">
              Full market guides, hiring conventions, in-demand sectors, and localized packages in USD.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <article
                key={c.slug}
                className="group relative flex flex-col justify-between rounded-[20px] border border-line bg-surface p-7 shadow-xs transition-all duration-300 hover:border-brand/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <CountryFlagIcon slug={c.slug} className="h-6 w-9 rounded-sm shadow-xs" />
                    <span className="rounded-full bg-sand px-3 py-1 text-[12px] font-semibold text-ink-soft">
                      {c.docType} Standard
                    </span>
                  </div>

                  <h3 className="display mt-5 text-[21px] text-ink group-hover:text-brand transition-colors">
                    {c.name}
                  </h3>

                  <p className="mt-2.5 text-[14px] leading-relaxed text-muted line-clamp-3">
                    {c.overview}
                  </p>

                  <dl className="mt-6 space-y-2 border-t border-line pt-4 text-[13px]">
                    <div className="flex justify-between">
                      <dt className="text-muted">Standard Length:</dt>
                      <dd className="font-semibold text-ink">{c.standardLength.split("(")[0].trim()}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted">Spelling:</dt>
                      <dd className="font-medium text-ink-soft">{c.spellingStyle}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted">Photo Policy:</dt>
                      <dd className="font-medium text-ink-soft">
                        {c.photoRule.toLowerCase().includes("never") || c.photoRule.toLowerCase().includes("no")
                          ? "No Photo (Strict)"
                          : "Optional"}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="mt-7 pt-4 border-t border-line flex items-center justify-between">
                  <Link
                    href={`/${c.slug}`}
                    className="text-[14px] font-semibold text-brand hover:text-brand-deep flex items-center gap-1"
                  >
                    View {c.adjective} Guide <span aria-hidden>→</span>
                  </Link>
                  <Link
                    href={`/#build?market=${c.slug}`}
                    className="rounded-full bg-paper border border-line-strong px-3.5 py-1.5 text-[12.5px] font-medium text-ink hover:border-brand hover:text-brand transition-colors"
                  >
                    Order for {c.adjective}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-border migration corridors */}
      <section className="border-t border-line bg-sand/30 py-14 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Relocation & Visas</p>
          <h2 className="display mt-2 text-[clamp(1.5rem,3vw,2.1rem)] text-ink">
            International job-seeker corridors.
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            Applying from abroad? Explore destination-specific guides covering work rights orientation, overseas candidate filtering, and CV translation across global markets.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {corridors.map((corridor) => (
              <Link
                key={corridor.slug}
                href={`/international-job-seekers/${corridor.slug}`}
                className="group rounded-xl border border-line bg-paper p-5 transition-colors hover:border-brand shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-deep">
                    {corridor.region}
                  </span>
                  <span className="text-muted group-hover:text-brand transition-colors">→</span>
                </div>
                <h3 className="display mt-2 text-[17px] text-ink group-hover:text-brand transition-colors">
                  {corridor.name}
                </h3>
                <p className="mt-1.5 text-[13px] text-muted line-clamp-2">{corridor.overview}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConversionFooter
        heading="Unsure which format matches your goals?"
        body="Message Chanuka directly with your target countries. You will receive a direct recommendation on format, length, and positioning."
      />
    </>
  );
}
