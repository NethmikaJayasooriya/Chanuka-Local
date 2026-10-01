import { GoogleBadge } from "./GoogleBadge";

const proofPoints = [
  {
    title: "ATS-tested formatting",
    subtitle: "Built to pass recruiter screens",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M7 3h6l4 4v10a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 3v4h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M7 13l2.5 2.5 4.5-4.5" />
      </svg>
    ),
  },
  {
    title: "Written personally by Chanuka",
    subtitle: "1-on-1 expert craft, no outsourcing",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M14.5 2.5a2.121 2.121 0 013 3L6 17l-4 1 1-4 11.5-11.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M13 4l3 3" />
      </svg>
    ),
  },
  {
    title: "One revision round included",
    subtitle: "Refined until you are fully satisfied",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 4v5h5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M2.5 11a7.5 7.5 0 0013.5 2.5M16 16v-5h-5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M17.5 9A7.5 7.5 0 004 6.5" />
      </svg>
    ),
  },
  {
    title: "Delivery from 24 hours",
    subtitle: "Fast options for urgent applications",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M11 2L4 11h5l-1 7 8-10h-5l1-6z" />
      </svg>
    ),
  },
];

/**
 * The trust ribbon shared by the home hero and every page header: the big
 * Google reviews badge on the left and four proof tiles on the right, in
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
    <div className={`grid min-w-0 grid-cols-1 gap-2.5 sm:grid-cols-2 ${className}`}>
      {proofPoints.map((item) => (
        <div
          key={item.title}
          className={`flex min-w-0 items-start gap-3 rounded-[16px] p-3.5 transition-colors ${
            dark
              ? "border border-white/8 bg-white/[0.03]"
              : "border border-white/60 bg-white/55 max-lg:bg-white/40 shadow-2xs"
          }`}
        >
          <div
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] ${
              dark ? "bg-[#c5b59a]/15 text-[#c5b59a]" : "bg-accent/15 text-accent"
            }`}
          >
            {item.icon}
          </div>
          <div className="min-w-0">
            <div
              className={`text-[13px] font-semibold leading-snug sm:text-[13.5px] ${
                dark ? "text-[#f0ece1]" : "text-ink"
              }`}
            >
              {item.title}
            </div>
            <div
              className={`mt-0.5 text-[11.5px] leading-snug sm:text-[12px] ${
                dark ? "text-[#a39c8e]" : "text-muted"
              }`}
            >
              {item.subtitle}
            </div>
          </div>
        </div>
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
      className={`rounded-[24px] p-4 backdrop-blur-md sm:p-5 transition-colors ${
        dark
          ? "border border-white/12 bg-white/[0.04] shadow-2xl"
          : "border border-white/80 bg-white/40 max-lg:bg-white/30 shadow-[0_20px_50px_-30px_rgb(14_26_43/0.25)]"
      } ${className}`}
    >
      <div className="grid min-w-0 gap-5 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:gap-6 lg:grid-cols-[220px_1px_minmax(0,1fr)]">
        <GoogleBadge dark={dark} />
        <div
          className={`hidden h-24 w-px lg:block ${dark ? "bg-white/10" : "bg-line/90"}`}
          aria-hidden
        />

        <ProofTiles dark={dark} className="lg:grid-cols-4 lg:gap-2.5" />
      </div>
    </div>
  );
}
