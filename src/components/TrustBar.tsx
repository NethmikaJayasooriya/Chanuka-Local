"use client";

import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  {
    numericValue: 10000,
    suffix: "+",
    label: "CVs & Resumes Crafted",
    decimalPlaces: 0,
    delay: 0,
  },
  {
    numericValue: 450,
    suffix: "+",
    label: "5-Star Reviews",
    decimalPlaces: 0,
    delay: 0.1,
  },
  {
    numericValue: 24,
    suffix: "h",
    label: "Fastest delivery",
    decimalPlaces: 0,
    delay: 0.2,
  },
  {
    numericValue: 4.9,
    suffix: "/5",
    label: "Average rating",
    decimalPlaces: 1,
    delay: 0.3,
  },
];

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-brand-deep shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-100%,rgba(185,134,47,0.28),transparent_58%)]"
      />
      <div className="container-page relative grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            className={`reveal px-2 py-5 text-center sm:py-7 ${
              i % 2 === 1 ? "border-l border-white/10 sm:border-l-0" : ""
            }`}
          >
            <p className="stat-number text-[26px] font-bold text-paper sm:text-[34px]">
              <NumberTicker
                value={stat.numericValue}
                suffix={stat.suffix}
                decimalPlaces={stat.decimalPlaces}
                delay={stat.delay}
              />
            </p>
            <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] text-paper/70 sm:text-[12.5px] sm:tracking-[0.1em]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
