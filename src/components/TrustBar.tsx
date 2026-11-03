"use client";

import Link from "next/link";
import { NumberTicker } from "@/components/ui/number-ticker";
import { site } from "@/lib/site";

const stats = [
  {
    numericValue: 10000,
    suffix: "+",
    label: "CVs & Resumes Crafted",
    sublabel: "Across Sri Lanka & overseas",
    decimalPlaces: 0,
    delay: 0,
    href: "/#services",
    action: "View services",
  },
  {
    numericValue: 450,
    suffix: "+",
    label: "5-Star Reviews",
    sublabel: "Verified Google reviews",
    decimalPlaces: 0,
    delay: 0.1,
    href: site.reviewsUrl,
    action: "Read reviews",
    external: true,
  },
  {
    numericValue: 24,
    suffix: "h",
    label: "Fastest delivery",
    sublabel: "Express options available",
    decimalPlaces: 0,
    delay: 0.2,
    href: "/#build",
    action: "See speeds",
  },
  {
    numericValue: 4.9,
    suffix: "/5",
    label: "Average rating",
    sublabel: `${site.rating.score}/5 client satisfaction`,
    decimalPlaces: 1,
    delay: 0.3,
    href: site.reviewsUrl,
    action: "Verified score",
    external: true,
  },
];

export function TrustBar() {
  return (
    <section id="trust-bar" className="relative overflow-hidden border-y border-white/10 bg-brand-deep shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-100%,rgba(185,134,47,0.28),transparent_58%)]"
      />
      <div className="container-page relative grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => {
          const content = (
            <div
              style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
              className={`group reveal relative h-full px-3 py-5 text-center transition-all duration-200 hover:bg-white/[0.04] sm:py-7 ${
                i % 2 === 1 ? "border-l border-white/10 sm:border-l-0" : ""
              }`}
            >
              <p className="stat-number text-[26px] font-bold text-paper transition-colors group-hover:text-accent sm:text-[34px]">
                <NumberTicker
                  value={stat.numericValue}
                  suffix={stat.suffix}
                  decimalPlaces={stat.decimalPlaces}
                  delay={stat.delay}
                />
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] text-paper/85 transition-colors group-hover:text-white sm:text-[12.5px] sm:tracking-[0.1em]">
                {stat.label}
              </p>
              <p className="mt-1 text-[10.5px] font-medium text-paper/50 transition-colors group-hover:text-paper/75 sm:text-[11.5px]">
                {stat.sublabel}
              </p>
              <span className="mt-2.5 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-accent opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5">
                <span>{stat.action}</span>
                <span aria-hidden>→</span>
              </span>
            </div>
          );

          if (stat.external) {
            return (
              <a
                key={stat.label}
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${stat.label}: ${stat.numericValue}${stat.suffix}. Click to view reviews on Google.`}
                className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {content}
              </a>
            );
          }

          return (
            <Link
              key={stat.label}
              href={stat.href}
              aria-label={`${stat.label}: ${stat.numericValue}${stat.suffix}. Click to learn more.`}
              className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
