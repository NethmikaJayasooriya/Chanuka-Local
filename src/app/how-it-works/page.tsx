import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { Process } from "@/components/Process";
import { deliveries } from "@/lib/pricing";

export const metadata: Metadata = pageMetadata({
  title: "How it works",
  description: "From order to final documents: intake, profile review, writing, revision and delivery. Timelines, what is expected of you, and what you receive.",
  path: "/how-it-works",
});

const expectations = [
  {
    title: "What I need from you",
    points: [
      "Your current CV, or a detailed work history if you do not have one",
      "The target role, market and seniority you are aiming at",
      "One or two job adverts you would genuinely apply to",
      "Your comments on the draft in one message, not spread over a week",
    ],
  },
  {
    title: "What you get from me",
    points: [
      "A confirmed delivery date at the point of order",
      "A first draft written personally, not assembled from a template",
      "One full revision round on your comments",
      "Final files in Word and PDF, ready to send the same day",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From order to final documents, with dates."
        lead="You always know what happens next and when. No silence between payment and delivery, and no discovery call required before you can see a price."
        crumbs={[{ label: "How it works" }]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/packages", label: "See packages" }}
      />

      <Process />

      {/* Expectations */}
      <section className="border-y border-line bg-surface py-14 lg:py-20">
        <div className="container-page grid gap-10 md:grid-cols-2 lg:gap-16">
          {expectations.map((block) => (
            <div key={block.title}>
              <h2 className="display text-[21px] text-ink">{block.title}</h2>
              <ul className="mt-5 space-y-3">
                {block.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                    <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8.5l3.2 3.2L13 5"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Timelines */}
      <section className="py-14 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Timelines</p>
          <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
            How long it takes.
          </h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted">
            The clock starts when your intake form is complete, not when you pay. If the
            brief arrives on a Friday evening, the first draft date is counted from the
            next working day.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {deliveries.map((d) => (
              <div key={d.id} className="rounded-[14px] border border-line bg-surface p-6">
                <h3 className="display text-[18px] text-ink">{d.name}</h3>
                <p className="mt-1.5 text-[14px] text-muted">{d.window}</p>
                <p className="mt-4 border-t border-line pt-4 text-[13.5px] leading-relaxed text-muted">
                  {d.id === "normal" &&
                    "The default. Enough time for a considered draft and a proper revision round."}
                  {d.id === "fast" &&
                    "For a deadline in the same week. Revision turnaround is also shortened."}
                  {d.id === "ultra" &&
                    "For an advert closing tomorrow. Limited weekly capacity, so confirm availability first."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversionFooter
        heading="Start your order."
        related={[
          { href: "/packages", label: "Packages and pricing" },
          { href: "/services", label: "All services" },
          { href: "/faq", label: "FAQ" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </>
  );
}
