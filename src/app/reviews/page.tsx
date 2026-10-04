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
    stat: "2 to 6 weeks",
    label: "Typical time to first interview callback after the rewrite",
  },
  {
    stat: "40+",
    label: "Countries clients have applied into",
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
        lead="Every review is a real, verified review left on Google by a client who paid for the service and went on to apply with the documents."
        crumbs={[{ label: "Reviews" }]}
        primary={{ href: "/#build", label: "Build your package" }}
      />

      <Reviews />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">In practice</p>
          <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
            What tends to change.
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
            These are observed ranges across past clients, not a promise. A better document
            raises your response rate. It does not replace applying, and it cannot control
            whether a role was already filled internally.
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
