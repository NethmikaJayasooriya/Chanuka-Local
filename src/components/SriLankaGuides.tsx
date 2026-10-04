import Link from "next/link";
import { lkGuides } from "@/lib/content/lk";

const BLURB: Record<string, string> = {
  "cv-format-sri-lanka": "Sections, length, photo, NIC and referees, plus formats for freshers, banks and government jobs.",
  "cv-format-sinhala": "CV සහ Resume අතර වෙනස සහ හොඳ CV එකක් ලියන පියවර, සරල සිංහලෙන්.",
  "foreign-job-cv-sri-lanka": "What changes for Dubai, Qatar, Saudi Arabia, the UK, Europe, Australia and Canada.",
  "how-to-choose-a-cv-writer-sri-lanka": "Credentials, reviews, ATS, revisions and fair LKR prices. Red flags to avoid.",
};

/**
 * Home page links into the Sri Lanka pillar guides. Passes authority from
 * the strongest page on the site to the pages built to rank for the
 * biggest Sri Lankan CV searches.
 */
export function SriLankaGuides() {
  return (
    <section className="border-t border-line py-14 sm:py-20">
      <div className="container-page">
        <p className="eyebrow reveal">Free CV guides for Sri Lanka</p>
        <h2 className="display reveal d1 mt-3 max-w-2xl text-[clamp(1.6rem,3.2vw,2.25rem)] text-ink">
          Writing it yourself? Start with the format Sri Lankan employers expect.
        </h2>
        <div className="reveal d2 mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lkGuides.map((g) => (
            <Link
              key={g.slug}
              href={`/${g.slug}`}
              lang={g.lang === "si" ? "si-LK" : undefined}
              className="group flex flex-col rounded-[16px] border border-line bg-surface p-5 transition-colors hover:border-brand"
            >
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-accent-deep">{g.eyebrow}</span>
              <h3 className="display mt-2 text-[17px] leading-snug text-ink">{g.h1}</h3>
              <p className="mt-2 flex-1 text-[14px] leading-relaxed text-muted">{BLURB[g.slug] ?? g.lead}</p>
              <span className="mt-4 text-[13.5px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">
                {g.lang === "si" ? "කියවන්න →" : "Read the guide →"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
