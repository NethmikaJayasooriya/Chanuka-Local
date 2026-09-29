import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { AUTHOR_PATH, faqLd } from "@/lib/seo";

/** Renders any JSON-LD object. */
export function JsonLd({ data }: { data: object | object[] }) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}

/**
 * Answer-first summary block. Placed high on the page so readers and
 * answer engines (Google AI Overviews, ChatGPT, Perplexity) get the
 * direct answer before the detail.
 */
export function AnswerBox({ answer, label = "Quick answer", narrow = false }: { answer?: string; label?: string; narrow?: boolean }) {
  if (!answer) return null;
  return (
    <section aria-label={label} className="pt-10 sm:pt-12">
      <div className={`container-page ${narrow ? "max-w-3xl" : ""}`}>
        <div className="answer-box reveal max-w-3xl rounded-[16px] border border-brand/20 bg-brand-soft/40 p-6 sm:p-7">
          <p className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">{label}</p>
          <p className="mt-2.5 text-[16px] leading-relaxed text-ink">{answer}</p>
        </div>
      </div>
    </section>
  );
}

/** Label/value facts panel, useful for AI extraction and skimming. */
export function KeyFacts({ items, title = "Key facts" }: { items?: Array<{ label: string; value: string }>; title?: string }) {
  if (!items?.length) return null;
  return (
    <div className="rounded-[16px] border border-line bg-surface p-6 sm:p-7">
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-deep">{title}</p>
      <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {items.map((f) => (
          <div key={f.label} className="border-b border-line pb-3">
            <dt className="text-[12px] font-semibold uppercase tracking-wide text-muted">{f.label}</dt>
            <dd className="mt-1 text-[14.5px] leading-relaxed text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** Visible FAQ section plus FAQPage structured data. */
export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  tone = "paper",
}: {
  faqs?: Array<{ q: string; a: string }>;
  title?: string;
  tone?: "paper" | "surface";
}) {
  if (!faqs?.length) return null;
  return (
    <section className={`py-12 sm:py-16 ${tone === "surface" ? "border-y border-line bg-surface" : ""}`}>
      <JsonLd data={faqLd(faqs)} />
      <div className="container-page max-w-4xl">
        <p className="eyebrow reveal">FAQ</p>
        <h2 className="display reveal d1 mt-3 text-[clamp(1.5rem,3vw,2rem)] text-ink">{title}</h2>
        <div className="reveal d2 mt-8">
          <FaqList items={faqs} />
        </div>
      </div>
    </section>
  );
}

function fmt(d?: string) {
  if (!d) return "";
  const date = new Date(d);
  if (Number.isNaN(date.getTime())) return d;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/** Author + dates line (E-E-A-T and freshness signal). */
export function Byline({ updated, published, reviewed = false }: { updated?: string; published?: string; reviewed?: boolean }) {
  return (
    <p className="text-[13px] text-muted">
      {reviewed ? "Reviewed by " : "By "}
      <Link href={AUTHOR_PATH} className="font-semibold text-ink hover:text-brand">
        Chanuka Jeewantha
      </Link>
      {published && (
        <>
          {" · Published "}
          <time dateTime={published}>{fmt(published)}</time>
        </>
      )}
      {updated && (
        <>
          {" · Updated "}
          <time dateTime={updated}>{fmt(updated)}</time>
        </>
      )}
    </p>
  );
}

/** Official / authoritative references. */
export function Sources({ items }: { items?: Array<{ label: string; url: string }> }) {
  if (!items?.length) return null;
  return (
    <div className="mt-12 rounded-[14px] border border-line bg-surface p-6">
      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Official sources</p>
      <ul className="mt-3 space-y-2">
        {items.map((s) => (
          <li key={s.url} className="text-[14px] leading-relaxed">
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand underline underline-offset-2">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[12.5px] text-muted">Orientation only, not legal or immigration advice. Rules change: always check the official source.</p>
    </div>
  );
}
