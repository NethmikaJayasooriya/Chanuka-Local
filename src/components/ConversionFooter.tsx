import Link from "next/link";

export type RelatedLink = { href: string; label: string };

/**
 * The universal conversion footer. Every indexable page ends with this:
 * related content, then one clear action. Built once here so a new page
 * never ships without a next step.
 */
export function ConversionFooter({
  heading = "Ready to start?",
  body = "Choose your package, your experience level and how fast you need it. The price is shown before you commit.",
  primaryHref = "/#build",
  primaryLabel = "Build your package",
  related = [],
  relatedTitle = "Related pages",
}: {
  heading?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  related?: RelatedLink[];
  relatedTitle?: string;
}) {
  return (
    <>
      {related.length > 0 && (
        <section className="border-t border-line bg-surface py-12">
          <div className="container-page">
            <p className="reveal text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
              {relatedTitle}
            </p>
            <ul className="reveal d1 mt-5 flex flex-wrap gap-2.5">
              {related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="inline-block rounded-full border border-line bg-paper px-4 py-2 text-[13.5px] text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-brand py-14 lg:py-16">
        <div className="container-page flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="reveal max-w-xl">
            <h2 className="display text-[clamp(1.5rem,3vw,2rem)] text-paper">{heading}</h2>
            <p className="mt-3 text-[15.5px] leading-relaxed text-paper/75">{body}</p>
          </div>
          <div className="reveal d1 flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <Link
              href={primaryHref}
              className="w-full sm:w-auto text-center rounded-full bg-paper px-7 py-3.5 text-[15px] font-semibold text-brand transition-colors hover:bg-surface"
            >
              {primaryLabel}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
