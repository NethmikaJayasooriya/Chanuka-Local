import Link from "next/link";
import { ConversionFooter } from "./ConversionFooter";
import { FaqList } from "./FaqList";
import { LinkChips } from "./EntitySections";
import { PageHeader } from "./PageHeader";
import { AnswerBox, Byline, JsonLd, KeyFacts, Sources } from "./Seo";
import type { LkGuide } from "@/lib/content/lk/types";
import { articleLd, faqLd, howToLd } from "@/lib/seo";

const DEFAULT_UI = {
  contents: "In this guide",
  faq: "Frequently asked questions",
  related: "Related",
  steps: "Step by step",
  summary: "The short version",
  keyFacts: "Key facts",
};

/**
 * Long-form Sri Lanka pillar guide: answer-first summary, byline,
 * key facts, contents, sections (with optional comparison tables),
 * HowTo steps, takeaways, sources, FAQ, plus Article, HowTo and
 * FAQPage schema in the page's own language.
 */
export function LkGuideView({ guide }: { guide: LkGuide }) {
  const ui = { ...DEFAULT_UI, ...(guide.ui ?? {}) };
  const path = `/${guide.slug}`;
  const inLanguage = guide.lang === "si" ? "si-LK" : "en-LK";

  return (
    <div lang={inLanguage}>
      <JsonLd
        data={[
          articleLd({
            title: guide.h1,
            description: guide.metaDescription,
            path,
            published: guide.published,
            updated: guide.updated,
            section: "CV guides for Sri Lanka",
            about: "CV writing in Sri Lanka",
            inLanguage,
          }),
          faqLd(guide.faqs, inLanguage),
          ...(guide.steps
            ? [howToLd({ name: guide.steps.title, description: guide.metaDescription, path, steps: guide.steps.items, inLanguage })]
            : []),
        ]}
      />
      <PageHeader
        eyebrow={guide.eyebrow}
        title={guide.h1}
        lead={guide.lead}
        crumbs={[{ label: guide.lang === "si" ? "CV මාර්ගෝපදේශ" : "CV guides", href: "/career-advice" }, { label: guide.h1 }]}
        primary={{ href: guide.cta.href, label: guide.cta.label }}
        secondary={guide.alternate ? { href: `/${guide.alternate.slug}`, label: guide.alternate.label } : { href: "/packages", label: "See packages & prices" }}
        showProof={false}
      />
      <AnswerBox answer={guide.quickAnswer} label={guide.quickAnswerLabel ?? "The short answer"} narrow />

      <article className="py-12 lg:py-16">
        <div className="container-page max-w-3xl">
          <Byline published={guide.published} updated={guide.updated} reviewed={false} />

          {guide.keyFacts && guide.keyFacts.length > 0 && (
            <div className="mt-8">
              <KeyFacts items={guide.keyFacts} title={ui.keyFacts} />
            </div>
          )}

          {guide.sections.length > 3 && (
            <nav aria-label={ui.contents} className="mt-10 rounded-[14px] border border-line bg-surface p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{ui.contents}</p>
              <ol className="mt-3 space-y-2">
                {guide.sections.map((s, i) => (
                  <li key={s.id} className="text-[14.5px]">
                    <a href={`#${s.id}`} className="text-ink-soft hover:text-brand">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
                {guide.steps && (
                  <li className="text-[14.5px]">
                    <a href="#steps" className="text-ink-soft hover:text-brand">
                      {guide.sections.length + 1}. {guide.steps.title}
                    </a>
                  </li>
                )}
              </ol>
            </nav>
          )}

          <div className="mt-12 space-y-12">
            {guide.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="display text-[clamp(1.4rem,2.8vw,1.8rem)] text-ink">{section.heading}</h2>
                {section.paragraphs && (
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="text-[16px] leading-relaxed text-ink-soft">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2.5 pl-1">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.table && (
                  <div className="mt-6 overflow-x-auto rounded-[14px] border border-line">
                    <table className="w-full min-w-[560px] text-left text-[14px]">
                      {section.table.caption && (
                        <caption className="border-b border-line bg-surface px-4 py-3 text-left text-[12.5px] font-semibold uppercase tracking-wide text-muted">
                          {section.table.caption}
                        </caption>
                      )}
                      <thead className="bg-surface text-[12.5px] uppercase tracking-wide text-muted">
                        <tr>
                          {section.table.head.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {section.table.rows.map((row) => (
                          <tr key={row[0]}>
                            {row.map((cell, ci) =>
                              ci === 0 ? (
                                <th key={ci} scope="row" className="px-4 py-3 align-top font-semibold text-ink">
                                  {cell}
                                </th>
                              ) : (
                                <td key={ci} className="px-4 py-3 align-top leading-relaxed text-ink-soft">
                                  {cell}
                                </td>
                              ),
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}

            {guide.steps && (
              <section id="steps" className="scroll-mt-28">
                <h2 className="display text-[clamp(1.4rem,2.8vw,1.8rem)] text-ink">{guide.steps.title}</h2>
                <ol className="mt-6 space-y-5">
                  {guide.steps.items.map((s, i) => (
                    <li key={s.name} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-[13px] font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-[16px] font-semibold text-ink">{s.name}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">{s.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}
          </div>

          {guide.takeaways && guide.takeaways.length > 0 && (
            <div className="mt-14 rounded-[16px] border border-line bg-surface p-7">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-deep">{ui.summary}</h2>
              <ul className="mt-5 space-y-3">
                {guide.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <svg viewBox="0 0 16 16" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-accent">
                      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 rounded-[16px] border border-brand/25 bg-brand-soft/40 p-7">
            <h2 className="display text-[clamp(1.25rem,2.4vw,1.5rem)] text-ink">{guide.cta.heading}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{guide.cta.body}</p>
            <Link
              href={guide.cta.href}
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-6 py-3 text-[14.5px] font-semibold text-paper hover:bg-brand-deep"
            >
              {guide.cta.label}
            </Link>
          </div>

          <Sources items={guide.sources} />

          {guide.related.length > 0 && (
            <div className="mt-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{ui.related}</p>
              <div className="mt-4">
                <LinkChips items={guide.related} />
              </div>
            </div>
          )}
        </div>
      </article>

      <section className="border-y border-line bg-surface py-12 sm:py-16">
        <div className="container-page max-w-4xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-3 text-[clamp(1.5rem,3vw,2rem)] text-ink">{ui.faq}</h2>
          <div className="mt-8">
            <FaqList items={guide.faqs} />
          </div>
        </div>
      </section>

      <ConversionFooter
        heading={guide.lang === "si" ? "CV එක ඔබ වෙනුවෙන් ලියා දෙන්නද?" : "Rather have it written for you?"}
        body={
          guide.lang === "si"
            ? "Package එක, ඔබේ experience level එක සහ delivery speed එක තෝරන්න. Order කරන්න කලින්ම මිල පෙනේ."
            : "Build your package, choose your level and delivery speed, and see the price in LKR before you commit."
        }
      />
    </div>
  );
}
