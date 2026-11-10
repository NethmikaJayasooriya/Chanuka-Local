import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Image from "next/image";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { PhotoFx } from "@/components/PhotoFx";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Chanuka Jeewantha",
  description: "Founder-led career branding. Eight years writing CVs, cover letters and LinkedIn profiles for graduates through to C-suite, for professionals competing anywhere in the world.",
  path: "/about",
});

const facts: Array<[string, string]> = [
  ["Founded", "Founder-led practice, every document written personally"],
  ["Experience", "8+ years in career branding and CV writing"],
  ["Clients", "1,700+ professionals"],
  ["Reach", "Worldwide, remote"],
  ["Rating", `${site.rating.score} from ${site.rating.count} Google reviews`],
  ["LinkedIn", "30,000+ followers built on the platform I optimise for clients"],
];

const audiences = [
  {
    title: "High-performing graduates",
    body: "First professional CV, no track record yet, and a market that filters on keywords before it looks at potential.",
  },
  {
    title: "Mid-career professionals",
    body: "Real achievements buried under job descriptions, and a CV that has quietly stopped matching the level being applied for.",
  },
  {
    title: "Senior leaders and executives",
    body: "Scope, P&L and influence that need to read as a business case rather than a longer list of responsibilities.",
  },
  {
    title: "C-suite and founders",
    body: "Positioning for boards, investors and search consultants, where the audience reads differently from a hiring manager.",
  },
];

const method = [
  {
    title: "Strategy before writing",
    body: "The target role, the level and the market get settled first. A document written before that decision is made is a list of jobs rather than an argument for one.",
  },
  {
    title: "ATS performance",
    body: "Parseable structure, standard headings, no critical information trapped in images or tables, and keywords drawn from real job descriptions rather than guessed at.",
  },
  {
    title: "Recruiter readability",
    body: "A recruiter gives a CV about seven seconds on the first pass. The layout decides what they see in those seconds, and that is a design decision, not an accident.",
  },
  {
    title: "Achievement-based positioning",
    body: "Responsibilities describe the job. Achievements describe you. Every bullet gets rebuilt around what changed and by how much.",
  },
  {
    title: "Market-specific direction",
    body: "CV conventions differ between markets on length, photographs, personal details and tone. Yours is written for the market you are actually applying into.",
  },
  {
    title: "Proof-driven storytelling",
    body: "Claims without evidence read as filler. Every strong line in a CV has a number, a scale or a named outcome standing behind it.",
  },
];

const principles = [
  {
    title: "One writer, every document",
    body: "Nothing is passed to a team or outsourced. That caps how many orders run at once, and it is the reason the faster delivery options carry a fee.",
  },
  {
    title: "Evidence over adjectives",
    body: "\"Results-driven professional\" tells a recruiter nothing. What you changed, by how much, and in what context tells them everything.",
  },
  {
    title: "Honest scope",
    body: "If your CV needs an afternoon of your own work rather than a paid rewrite, the review will say so. Selling a rewrite that will not help is a bad trade for both of us.",
  },
  {
    title: "No promises nobody can keep",
    body: "No one can guarantee you a job, or that a specific system will accept your file. What is guaranteed is that the document will not be the reason you were passed over.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Chanuka Jeewantha, career branding specialist."
        lead="I help professionals present themselves clearly, confidently and competitively, in whichever market they are applying into. Around 1,700 people have used the service so far, and every document has been written personally."
        crumbs={[{ label: "About" }]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/reviews", label: "Read reviews" }}
      />

      {/* Story */}
      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div className="max-w-2xl space-y-5 text-[16px] leading-relaxed text-muted">
            <p className="text-[19px] font-medium text-ink">
              Most people do not have a career problem. They have a translation problem.
            </p>
            <p>
              The work is real, the results are real, and{" "}
              <strong className="font-semibold text-ink">
                none of it survives the trip onto the page
              </strong>
              . Six years of responsibility gets compressed into four bullet points that
              could describe anyone, and the person reading it has no way to tell the
              difference between a candidate who ran something and one who sat near it.
            </p>
            <p>
              That gets worse the moment an application crosses a border. A CV written for
              one market is read by someone who expects a different length, a different tone
              and different things left out entirely.{" "}
              <strong className="font-semibold text-ink">
                The candidate is not weaker. The document is simply speaking the wrong
                language
              </strong>
              , and nobody tells them.
            </p>
            <p>
              <strong className="font-semibold text-ink">
                Over eight years I have built the work around that gap.
              </strong>{" "}
              The approach is{" "}
              <strong className="font-semibold text-ink">strategy-first</strong> and
              deliberately practical: establish the target, take what you have actually done,
              and write the shortest document that makes the case for it. That means asking
              questions before writing anything, and it means{" "}
              <strong className="font-semibold text-ink">
                telling you when a full rewrite is not what you need
              </strong>
              .
            </p>
            <p>
              <strong className="font-semibold text-ink">
                Everything is written by me. No team, no outsourcing and no template library
              </strong>{" "}
              with your name dropped into it. That is a hard limit on volume, and it is the
              reason the work holds up.
            </p>
          </div>

          <div className="group relative lg:sticky lg:top-24">
            <div
              aria-hidden
              className="absolute -inset-5 -z-10 rounded-[28px] opacity-80 blur-2xl"
              style={{
                background:
                  "radial-gradient(55% 55% at 70% 25%, rgba(23,53,92,0.18), transparent 70%), radial-gradient(45% 45% at 25% 80%, rgba(185,134,47,0.16), transparent 70%)",
              }}
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-[18px] bg-sand ring-1 ring-ink/[0.06] shadow-[0_36px_74px_-42px_rgb(14_26_43/0.55)]">
              <Image
                src="/images/chanuka-about.jpg"
                alt="Chanuka Jeewantha, career branding specialist"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-[center_15%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <PhotoFx warm={false} />
            </div>
          </div>
        </div>

        {/* Facts, full width so neither column ends ragged */}
        <div className="container-page mt-14">
          <dl className="grid gap-x-10 gap-y-0 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(([k, v]) => (
              <div key={k} className="border-b border-line py-5">
                <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-deep">
                  {k}
                </dt>
                <dd className="mt-2 text-[14.5px] leading-relaxed text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Who I work with */}
      <section className="border-y border-line bg-surface py-14 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Who I work with</p>
          <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
            Four groups, four different problems.
          </h2>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted">
            The service is not split by industry or by country. It is split by what the
            document has to prove, which changes far more with seniority than it does with
            geography.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <article key={a.title} className="rounded-[14px] border border-line bg-paper p-6">
                <span className="num-badge h-6 px-2.5 rounded-md bg-accent-soft border border-accent/25 text-[11px] text-accent-deep">
                  0{i + 1}
                </span>
                <h3 className="display mt-3 text-[17px] leading-snug text-ink">{a.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-16">
          <div className="flex flex-col">
            <p className="eyebrow">The method</p>
            <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
              Six things every document goes through.
            </h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted">
              This is the same for a graduate CV and a C-suite one. What changes is how much
              work each step takes.
            </p>

            <div className="group relative mt-8 aspect-3/2 overflow-hidden rounded-[18px] bg-sand ring-1 ring-ink/[0.06] shadow-[0_36px_74px_-42px_rgb(14_26_43/0.5)] lg:mt-10 lg:aspect-auto lg:min-h-[320px] lg:flex-1">
              <Image
                src="/images/chanuka-working.jpg"
                alt="Chanuka Jeewantha"
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[center_25%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <PhotoFx />
            </div>
          </div>

          <ol className="grid gap-5 sm:grid-cols-2">
            {method.map((m, i) => (
              <li key={m.title} className="rounded-[14px] border border-line bg-surface p-6">
                <span className="display text-[13px] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-3 text-[17px] leading-snug text-ink">{m.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-line bg-surface py-14 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
              Four things that do not change.
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {principles.map((p) => (
                <article key={p.title} className="rounded-[14px] border border-line bg-paper p-6">
                  <h3 className="display text-[17px] leading-snug text-ink">{p.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{p.body}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="group relative lg:mt-2 lg:self-stretch">
            <div
              aria-hidden
              className="absolute -inset-5 -z-10 rounded-[28px] opacity-80 blur-2xl"
              style={{
                background:
                  "radial-gradient(55% 55% at 30% 25%, rgba(23,53,92,0.20), transparent 70%), radial-gradient(45% 45% at 80% 80%, rgba(185,134,47,0.16), transparent 70%)",
              }}
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-[18px] bg-sand ring-1 ring-ink/[0.06] shadow-[0_36px_74px_-42px_rgb(14_26_43/0.55)] lg:h-full lg:min-h-[420px]">
              <Image
                src="/images/chanuka-portrait.jpg"
                alt="Chanuka Jeewantha"
                fill
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover object-[center_20%] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <PhotoFx warm={false} />
            </div>
          </div>
        </div>
      </section>

      <ConversionFooter
        heading="Work with me."
        body="Choose your package, your experience level and how fast you need it. The price is shown before you commit."
        related={[
          { href: "/services", label: "All services" },
          { href: "/packages", label: "Packages and pricing" },
          { href: "/how-it-works", label: "How it works" },
          { href: "/reviews", label: "Reviews" },
          { href: "/contact", label: "Contact" },
        ]}
      />
    </>
  );
}
