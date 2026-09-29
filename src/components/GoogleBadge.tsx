import { site } from "@/lib/site";

function Star() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="h-[18px] w-[18px]">
      <path
        fill="#FBBC05"
        d="M10 1.6l2.47 5.28 5.53.72-4.06 3.9 1.03 5.62L10 14.42 5.03 17.12l1.03-5.62L2 7.6l5.53-.72L10 1.6z"
      />
    </svg>
  );
}

export function GoogleBadge() {
  return (
    <a
      href={site.reviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center text-center shrink-0 w-full sm:w-[220px] transition-transform duration-200 hover:scale-[1.02]"
    >
      {/* Top: Google Wordmark (Prominent size) */}
      <div className="flex items-center text-[30px] sm:text-[34px] font-bold tracking-[-0.03em] select-none leading-none mb-1.5">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </div>

      {/* Brand Name */}
      <h3 className="text-[16px] sm:text-[17px] font-bold text-ink leading-snug group-hover:text-brand transition-colors">
        Chanuka Jeewantha
      </h3>

      {/* Rating & Stars */}
      <div className="flex items-center justify-center gap-1.5 mt-1">
        <span className="text-xl sm:text-2xl font-extrabold text-ink leading-none">
          {site.rating.score}
        </span>
        <div className="flex items-center gap-0.5">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>

      {/* Review Count */}
      <p className="text-[13px] text-muted font-medium mt-1 group-hover:text-ink transition-colors">
        Read our {site.rating.count} Reviews
      </p>

      {/* Action Button */}
      <span className="mt-3 inline-flex items-center justify-center gap-1.5 w-full max-w-[190px] rounded-full bg-brand text-paper group-hover:bg-brand-deep text-[13px] font-semibold py-2.5 px-4 shadow-sm group-hover:shadow-md transition-all">
        <span>Read all reviews</span>
        <svg
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12l8-8m0 0H6m6 0v6" />
        </svg>
      </span>
    </a>
  );
}
