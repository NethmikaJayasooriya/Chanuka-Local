import { AnswerBox, FaqSection, JsonLd } from "@/components/Seo";
import { ConversionFooter } from "./ConversionFooter";
import { LinkChips, MistakeList, Section } from "./EntitySections";
import { PageHeader } from "./PageHeader";
import { type CvSample, getCvSample } from "@/lib/cv-samples";

export function CvSamplePageView({ sample }: { sample: CvSample }) {
  const related = [
    ...sample.relatedSamples
      .map(getCvSample)
      .filter(Boolean)
      .map((s) => ({ href: `/cv-samples/${s!.slug}`, label: s!.name })),
    ...sample.relatedLinks,
  ];

  return (
    <>
      <PageHeader
        eyebrow={`CV sample · ${sample.audience}`}
        title={`${sample.name}: structure and example`}
        lead={sample.lead}
        crumbs={[{ label: "CV samples", href: "/cv-samples" }, { label: sample.name }]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/cv-writing", label: "CV writing service" }}
      />
      <AnswerBox answer={sample.quickAnswer} />

      <Section eyebrow="Overview">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{sample.overview}</p>
      </Section>

      <Section
        eyebrow="Structure"
        title={`How a ${sample.name.toLowerCase()} is put together.`}
        lead="Each section in order, with what it is doing. Use it as the frame; the content has to be your own."
        tone="surface"
      >
        <ol className="space-y-4">
          {sample.structure.map((s, i) => (
            <li
              key={s.section}
              className="flex gap-5 rounded-[14px] border border-line bg-paper p-6"
            >
              <span className="display shrink-0 text-[15px] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="display text-[17px] leading-snug text-ink">{s.section}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Why it works" title="What makes this version land.">
        <ul className="grid gap-4 sm:grid-cols-2">
          {sample.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2.5 rounded-[14px] border border-line bg-surface p-5 text-[14.5px] leading-relaxed text-ink-soft"
            >
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
              {h}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Watch for" title="What weakens this kind of CV." tone="surface">
        <MistakeList items={sample.watchFor} />
      </Section>

      <FaqSection faqs={sample.faqs} title={"Questions about this CV type"} tone="surface" />

      <Section eyebrow="Related">
        <LinkChips items={related} />
      </Section>

      <ConversionFooter
        heading={`Have your ${sample.name.toLowerCase()} written.`}
        body="Choose your package, your experience level and how fast you need it. The price is shown before you commit."
      />
    </>
  );
}
