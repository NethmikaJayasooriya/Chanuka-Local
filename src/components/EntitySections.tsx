import Link from "next/link";

export function Tick() {
  return (
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
  );
}

export function Cross() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-muted">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M4 4l8 8M12 4l-8 8"
      />
    </svg>
  );
}

/** Section wrapper so every entity page has identical rhythm. */
export function Section({
  eyebrow,
  title,
  lead,
  tone = "paper",
  children,
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  tone?: "paper" | "surface";
  children: React.ReactNode;
}) {
  return (
    <section
      className={`py-10 sm:py-14 lg:py-20 ${tone === "surface" ? "border-y border-line bg-surface" : ""}`}
    >
      <div className="container-page">
        {eyebrow && <p className="eyebrow reveal">{eyebrow}</p>}
        {title && (
          <h2 className="display reveal d1 mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
            {title}
          </h2>
        )}
        {lead && (
          <p className="reveal d2 mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted">
            {lead}
          </p>
        )}
        <div className={`reveal d2 ${title || eyebrow ? "mt-8" : ""}`}>{children}</div>
      </div>
    </section>
  );
}

export function BulletCards({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 rounded-[14px] border border-line bg-paper p-5 text-[14px] leading-relaxed text-ink-soft"
        >
          <Tick />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function MistakeList({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 py-4 text-[14.5px] leading-relaxed text-ink-soft">
          <Cross />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LinkChips({ items }: { items: Array<{ href: string; label: string }> }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-block rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] text-ink-soft transition-colors hover:border-brand hover:text-brand"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** High-converting mid-content CTA banner for entity pages. */
export function InlineOfferBanner({
  title,
  body,
  ctaText = "Build your package",
  ctaHref = "/#build",
  badge = "Executive Writing",
}: {
  title: string;
  body: string;
  ctaText?: string;
  ctaHref?: string;
  badge?: string;
}) {
  return (
    <div className="my-10 rounded-[20px] border border-line-strong bg-sand/50 p-5 sm:p-9 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="max-w-2xl">
          <span className="eyebrow">{badge}</span>
          <h3 className="display mt-1.5 text-[20px] sm:text-[21px] text-ink">{title}</h3>
          <p className="mt-2 text-[14px] sm:text-[14.5px] leading-relaxed text-muted">{body}</p>
        </div>
        <div className="shrink-0 flex w-full sm:w-auto items-center">
          <Link
            href={ctaHref}
            className="w-full sm:w-auto text-center rounded-full bg-brand px-6 py-3 text-[14px] font-semibold text-paper hover:bg-brand-deep transition-colors shadow-xs"
          >
            {ctaText} →
          </Link>
        </div>
      </div>
    </div>
  );
}
