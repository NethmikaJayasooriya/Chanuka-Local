import Link from "next/link";
import { breadcrumbLd } from "@/lib/seo";
import { ReviewsPill } from "./ReviewsPill";
import { TrustRibbon } from "./TrustRibbon";

export type Crumb = { label: string; href?: string };

/**
 * Standard inner-page header. Every page below the home page uses this
 * so the site has one consistent entry moment: breadcrumb, eyebrow, H1,
 * lead paragraph and up to two actions, with a proof panel filling the
 * right column so the band never reads as empty.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs = [],
  primary,
  secondary,
  showProof = true,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  showProof?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {crumbs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbLd([{ name: "Home", path: "/" }, ...crumbs.map((c) => ({ name: c.label, path: c.href }))]),
            ),
          }}
        />
      )}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/70 to-paper"
      />
      {/* Soft brand glow so the band has depth instead of flat empty space */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-brand-soft/60 blur-3xl"
      />

      <div className="container-page relative pb-14 pt-10 lg:pb-16 lg:pt-14">
        <div className="max-w-3xl">
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="rise mb-5">
              <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted">
                <li>
                  <Link href="/" className="transition-colors hover:text-brand">
                    Home
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.label} className="flex items-center gap-2">
                    <span aria-hidden className="text-line-strong">
                      /
                    </span>
                    {c.href ? (
                      <Link href={c.href} className="transition-colors hover:text-brand">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-ink-soft">{c.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {/* Small Google reviews pill first, at the top, like the home hero */}
          {showProof && <ReviewsPill className="rise mb-5" />}

          {eyebrow && <p className="eyebrow rise d1">{eyebrow}</p>}

          <h1 className="display rise d1 mt-3 max-w-[20ch] text-[clamp(1.85rem,4.4vw,3rem)] text-ink">
            {title}
          </h1>

          {lead && (
            <p className="rise d2 mt-5 max-w-2xl text-[16.5px] leading-relaxed text-muted">
              {lead}
            </p>
          )}

          {(primary || secondary) && (
            <div className="rise d3 mt-7 flex flex-col sm:flex-row gap-3">
              {primary && (
                <Link
                  href={primary.href}
                  className="w-full sm:w-auto text-center rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-paper shadow-[0_10px_26px_-14px_rgb(23_53_92/0.9)] transition-all hover:bg-brand-deep hover:shadow-[0_14px_30px_-12px_rgb(23_53_92/0.85)]"
                >
                  {primary.label}
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="w-full sm:w-auto text-center rounded-full border border-line-strong bg-surface px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {secondary.label}
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Same trust ribbon as the home hero: Google badge + proof tiles */}
        {showProof && <TrustRibbon className="rise mt-10" />}
      </div>
    </section>
  );
}
