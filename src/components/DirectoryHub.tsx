import Link from "next/link";
import { ConversionFooter } from "./ConversionFooter";
import { PageHeader } from "./PageHeader";
import { JsonLd } from "./Seo";
import { itemListLd } from "@/lib/seo";

export type DirectoryItem = {
  href: string;
  name: string;
  blurb: string;
  meta?: string;
  group?: string;
};

/**
 * Shared directory layout for every silo hub: job roles, industries,
 * career levels, career situations. One component so all four hubs stay
 * consistent as they grow from a handful of entries to hundreds.
 */
export function DirectoryHub({
  eyebrow,
  title,
  lead,
  crumbs,
  items,
  grouped = false,
  note,
  related,
  ctaHeading,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  crumbs: Array<{ label: string; href?: string }>;
  items: DirectoryItem[];
  grouped?: boolean;
  note?: string;
  related?: Array<{ href: string; label: string }>;
  ctaHeading?: string;
}) {
  const groups = grouped
    ? Array.from(new Set(items.map((i) => i.group ?? "Other")))
    : [null];

  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        crumbs={crumbs}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/services", label: "All services" }}
      />

      <JsonLd data={itemListLd(title, items.map((i) => ({ name: i.name, path: i.href })))} />
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-page space-y-12">
          {groups.map((group) => {
            const groupItems = group
              ? items.filter((i) => (i.group ?? "Other") === group)
              : items;

            return (
              <div key={group ?? "all"}>
                {group && (
                  <h2 className="reveal mb-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                    {group}
                  </h2>
                )}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {groupItems.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
                      className="lift reveal group flex h-full flex-col rounded-[14px] border border-line bg-surface p-5 sm:p-6 hover:border-brand"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="display shrink-0 text-[18px] leading-snug text-ink">
                          {item.name}
                        </h3>
                        {item.meta && (
                          <span className="min-w-0 text-right text-[12px] leading-snug text-muted">{item.meta}</span>
                        )}
                      </div>
                      <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted">
                        {item.blurb}
                      </p>
                      <span className="mt-5 text-[13.5px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">
                        Read the guidance →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {note && (
            <p className="reveal max-w-2xl border-t border-line pt-6 text-[13.5px] leading-relaxed text-muted">
              {note}
            </p>
          )}
        </div>
      </section>

      <ConversionFooter
        heading={ctaHeading ?? "Get this written properly."}
        related={related}
      />
    </>
  );
}
