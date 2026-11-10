import { site } from "@/lib/site";

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-brand-deep shadow-[inset_0_1px_0_rgb(255_255_255/0.05)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-100%,rgba(185,134,47,0.28),transparent_58%)]" />
      <div className="container-page relative grid grid-cols-2 divide-y divide-white/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {site.stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
            className={`reveal px-2 py-5 text-center sm:py-7 ${
              i % 2 === 1 ? "border-l border-white/10 sm:border-l-0" : ""
            }`}
          >
            <p className="stat-number text-[24px] text-paper sm:text-[32px]">{stat.value}</p>
            <p className="mt-1 text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] text-paper/58 sm:text-[12.5px] sm:tracking-[0.1em]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
