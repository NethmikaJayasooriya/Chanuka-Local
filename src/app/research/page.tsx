import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = pageMetadata({
  title: "Insights and field notes",
  description: "Patterns from a decade of writing CVs for international careers: what actually gets candidates filtered, how markets differ, and where good applicants lose to weaker ones.",
  path: "/research",
});

const insights = [
  {
    title: "The problem is almost never the person",
    body: [
      "Across the work, the same pattern repeats: strong candidates rejected for reasons that have nothing to do with their ability. The experience is real and the results are there, but the document loses them in the first pass. When a CV is rebuilt around the same underlying career, the change in response is often immediate, which tells you the raw material was never the issue.",
      "This is why a rewrite so often works where more applications did not. Sending the same weak document to more employers changes nothing. Fixing the document changes the reply rate.",
    ],
  },
  {
    title: "Markets diverge more than applicants expect",
    body: [
      "The gap between what a CV should look like in the UK, the Gulf and Australia is wider than most applicants realise, and applying one market's format in another is one of the most common silent failures. A photo that is expected in Doha is a liability in London. A four-page resume that suits an Australian government role sinks a UK application.",
      "The applicants who struggle abroad are rarely underqualified. They are using a document built for a market they are no longer applying to, and nobody writes back to tell them why.",
    ],
  },
  {
    title: "Good candidates lose to weaker ones on presentation",
    body: [
      "In any applicant pool, the strongest CV is frequently not the strongest candidate. Someone with less experience but a sharper document gets the interview, because the reader can only judge what is on the page in the seconds they spend on it. The better candidate who buried their evidence never gets the chance to prove it in person.",
      "This is not an argument for spin. It is an argument for making real strengths visible. The goal is a document that represents the candidate accurately at the speed it is actually read.",
    ],
  },
  {
    title: "Work rights are the quiet decider abroad",
    body: [
      "For international applicants, ambiguity about the right to work is one of the largest silent objections an employer has. A CV that leaves it unstated invites the employer to assume the hardest case and move on. A CV that states it plainly, where the applicant holds it, removes an obstacle the applicant often did not know was there.",
      "It is a small line on the page that changes how the whole application is read.",
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="What a decade of CVs actually teaches you."
        lead="These are field notes, not a formal study: patterns observed across years of writing CVs for professionals competing internationally. They are qualitative and drawn from the practice, offered because they are useful, not because they are dressed up as statistics."
        crumbs={[{ label: "Insights" }]}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page max-w-3xl">
          <div className="space-y-12">
            {insights.map((insight, i) => (
              <article key={insight.title}>
                <span className="display text-[14px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display mt-2 text-[clamp(1.4rem,2.8vw,1.9rem)] leading-tight text-ink">
                  {insight.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {insight.body.map((p, j) => (
                    <p key={j} className="text-[16px] leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[16px] border border-line bg-surface p-7">
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-deep">
              A note on method
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Everything here is drawn from direct experience writing and reviewing CVs, not from a
              controlled study, and it is presented that way on purpose. Where you want the
              detail behind a point, the guides set it out in full.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {[
                { href: "/career-advice", label: "Career advice" },
                { href: "/international-job-seekers", label: "CV conventions by market" },
                { href: "/cv-samples", label: "CV structures" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-block rounded-full border border-line bg-paper px-4 py-2 text-[13.5px] text-ink-soft transition-colors hover:border-brand hover:text-brand"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConversionFooter
        heading="Put it to work on your own CV."
        body="Build your package, choose your level and delivery speed, and see the price before you commit."
      />
    </>
  );
}
