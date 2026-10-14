import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { Reviews } from "@/components/Reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: `Reviews: ${site.rating.score} from ${site.rating.count} Google Reviews`,
  description: `Rated ${site.rating.score} across ${site.rating.count} Google reviews. Read what professionals say after working with Chanuka Jeewantha.`,
  path: "/reviews",
});

const outcomes = [
  {
    stat: "Public proof",
    label: "Read dated reviews on the independent Google profile, not only quotations on this site",
  },
  {
    stat: "Relevant detail",
    label: "Look for comments about the brief, communication, document quality and delivery",
  },
  {
    stat: "1 round",
    label: "Revisions included with every package, used by most clients once",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Reviews"
        title="What people say after the rewrite."
        lead="Read client feedback and check the original Google profile before choosing your CV or LinkedIn writing service."
        crumbs={[{ label: "Reviews" }]}
        primary={{ href: "/#build", label: "Build your package" }}
      />

      <Reviews />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">In practice</p>
          <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
            How to assess the feedback.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.stat} className="rounded-[14px] border border-line bg-surface p-7">
                <p className="display text-[26px] text-ink">{o.stat}</p>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{o.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-[13.5px] leading-relaxed text-muted">
            The displayed rating was checked on 14 October 2026. Reviews and counts change;
            the linked Google profile has the latest information. Individual experiences do
            not guarantee an interview, a job offer or a similar result for another client.
          </p>
        </div>
      </section>

      <ConversionFooter
        heading="Join them."
        related={[
          { href: "/packages", label: "Packages and pricing" },
          { href: "/services", label: "All services" },
          { href: "/about", label: "About Chanuka" },
          { href: "/how-it-works", label: "How it works" },
        ]}
      />
    </>
  );
}
