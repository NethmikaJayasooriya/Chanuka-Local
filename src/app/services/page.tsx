import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { BASE_PRICES, usd } from "@/lib/pricing";
import { servicePages } from "@/lib/services";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description: "CV writing, LinkedIn optimisation, cover letters, CV review and career strategy for professionals targeting international roles.",
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Five services. One consistent story about you."
        lead="Your CV, your letter and your profile should say the same thing. Each service works on its own, and they work considerably better together."
        crumbs={[{ label: "Services" }]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/packages", label: "See packages" }}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((s, i) => {
            const from = s.packageService ? BASE_PRICES[s.packageService]["under-2"] : null;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex h-full flex-col rounded-[14px] border border-line bg-surface p-7 transition-colors hover:border-brand"
              >
                <span className="num-badge h-6 px-2.5 rounded-md bg-accent-soft border border-accent/25 text-[11px] text-accent-deep">
                  0{i + 1}
                </span>
                <h2 className="display mt-3 text-[20px] leading-snug text-ink">{s.name}</h2>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">{s.lead}</p>

                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <span className="text-[13.5px] text-muted">
                    {from ? (
                      <>
                        From <span className="font-semibold text-ink">{usd(from)}</span>
                      </>
                    ) : (
                      "On enquiry"
                    )}
                  </span>
                  <span className="text-[13.5px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">
                    View →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <ConversionFooter
        heading="Not sure which one you need?"
        body="Build a package and the price updates as you choose, or send a message and we will work out what actually moves your search forward."
        related={[
          { href: "/packages", label: "Packages and pricing" },
          { href: "/how-it-works", label: "How it works" },
          { href: "/reviews", label: "Reviews" },
          { href: "/about", label: "About Chanuka" },
        ]}
      />
    </>
  );
}
