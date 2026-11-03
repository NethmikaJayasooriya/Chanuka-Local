import Link from "next/link";
import { GoogleBadge } from "./GoogleBadge";

export const proofPoints = [
  {
    title: "ATS-friendly formatting",
    subtitle: "Tested structure to pass recruiter screening",
    badge: "ATS Pass",
    href: "/#services",
    action: "Explore CVs",
    accent: {
      lightIcon: "bg-blue-50 text-[#17355c] border border-blue-200/70",
      lightBadge: "bg-blue-50/90 text-[#17355c] border border-blue-200/80",
      darkIcon: "bg-blue-950/60 text-blue-300 border border-blue-800/50",
      darkBadge: "bg-blue-950/50 text-blue-300 border border-blue-800/50",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Essential or Signature",
    subtitle: "Team-crafted or personally written by Chanuka",
    badge: "2 Tiers",
    href: "/packages",
    action: "Compare tiers",
    accent: {
      lightIcon: "bg-amber-50 text-[#b9862f] border border-amber-200/70",
      lightBadge: "bg-amber-50/90 text-[#b9862f] border border-amber-200/80",
      darkIcon: "bg-amber-950/60 text-amber-300 border border-amber-800/50",
      darkBadge: "bg-amber-950/50 text-amber-300 border border-amber-800/50",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
  },
  {
    title: "One revision round included",
    subtitle: "Full round to refine every detail until approved",
    badge: "Guaranteed",
    href: "/#process",
    action: "See workflow",
    accent: {
      lightIcon: "bg-emerald-50 text-emerald-700 border border-emerald-200/70",
      lightBadge: "bg-emerald-50/90 text-emerald-700 border border-emerald-200/80",
      darkIcon: "bg-emerald-950/60 text-emerald-300 border border-emerald-800/50",
      darkBadge: "bg-emerald-950/50 text-emerald-300 border border-emerald-800/50",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Delivery from 24 hours",
    subtitle: "Standard 48-72h with express turnaround options",
    badge: "From 24h",
    href: "/#build",
    action: "View speeds",
    accent: {
      lightIcon: "bg-orange-50 text-orange-700 border border-orange-200/70",
      lightBadge: "bg-orange-50/90 text-orange-700 border border-orange-200/80",
      darkIcon: "bg-orange-950/60 text-orange-300 border border-orange-800/50",
      darkBadge: "bg-orange-950/50 text-orange-300 border border-orange-800/50",
    },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

/**
 * The trust ribbon shared by the home hero and every page header: the big
 * Google reviews badge on the left and four interactive proof tiles on the right, in
 * one calm glass panel. Keeps the hero look identical across the site.
 */
export function ProofTiles({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 ${className}`}>
      {proofPoints.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          aria-label={`${item.title}: ${item.subtitle}. Click to learn more.`}
          className={`group relative flex flex-col justify-between rounded-[20px] p-4 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
            dark
              ? "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#c5b59a]/40 shadow-xs hover:shadow-md"
              : "border border-white/80 bg-white/70 hover:bg-white hover:border-brand/35 shadow-[0_4px_20px_-8px_rgb(23_53_92/0.08)] hover:shadow-[0_12px_28px_-10px_rgb(23_53_92/0.2)]"
          }`}
        >
          {/* Top Row: Icon + Badge / Arrow */}
          <div className="flex items-center justify-between gap-2">
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${
                dark ? item.accent.darkIcon : item.accent.lightIcon
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider transition-colors ${
                dark ? item.accent.darkBadge : item.accent.lightBadge
              }`}
            >
              <span>{item.badge}</span>
              <svg
                className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12l8-8m0 0H6m6 0v6" />
              </svg>
            </span>
          </div>

          {/* Middle: Title & Subtitle */}
          <div className="mt-3 min-w-0">
            <h4
              className={`text-[13.5px] sm:text-[14px] font-bold leading-snug tracking-tight transition-colors ${
                dark ? "text-[#f0ece1] group-hover:text-accent" : "text-ink group-hover:text-brand"
              }`}
            >
              {item.title}
            </h4>
            <p
              className={`mt-1 text-[11.5px] sm:text-[12px] leading-relaxed transition-colors ${
                dark ? "text-[#a39c8e] group-hover:text-white/80" : "text-muted group-hover:text-ink/85"
              }`}
            >
              {item.subtitle}
            </p>
          </div>

          {/* Bottom Action Cue */}
          <div
            className={`mt-3.5 pt-2.5 border-t flex items-center justify-between text-[11px] font-semibold tracking-wide transition-colors ${
              dark
                ? "border-white/8 text-[#c5b59a] group-hover:text-white"
                : "border-line/70 text-accent-deep group-hover:text-brand"
            }`}
          >
            <span>{item.action}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function TrustRibbon({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-[26px] p-4.5 sm:p-6 backdrop-blur-md transition-all ${
        dark
          ? "border border-white/12 bg-white/[0.04] shadow-2xl"
          : "border border-white/90 bg-white/50 max-lg:bg-white/40 shadow-[0_24px_60px_-28px_rgb(14_26_43/0.25)]"
      } ${className}`}
    >
      <div className="grid min-w-0 gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:items-stretch md:gap-7 lg:grid-cols-[220px_1px_minmax(0,1fr)]">
        <div className="flex flex-col justify-center">
          <GoogleBadge dark={dark} />
        </div>
        <div
          className={`hidden self-stretch w-px lg:block ${dark ? "bg-white/10" : "bg-line/80"}`}
          aria-hidden
        />

        <ProofTiles dark={dark} className="lg:grid-cols-4 lg:gap-3" />
      </div>
    </div>
  );
}
