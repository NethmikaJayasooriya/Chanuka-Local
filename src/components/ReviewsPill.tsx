import { site } from "@/lib/site";

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[16px] w-[16px] shrink-0">
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.45a5.5 5.5 0 01-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.79z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.92l-3.87-3a7.2 7.2 0 01-10.73-3.79H1.36v3.1A12 12 0 0012 24z" />
      <path fill="#FBBC05" d="M5.35 14.29a7.2 7.2 0 010-4.58v-3.1H1.36a12 12 0 000 10.78l3.99-3.1z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.17 15.23 0 12 0A12 12 0 001.36 6.61l3.99 3.1A7.2 7.2 0 0112 4.75z" />
    </svg>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="h-[14px] w-[14px]">
      <path fill="#FBBC05" d="M10 1.6l2.47 5.28 5.53.72-4.06 3.9 1.03 5.62L10 14.42 5.03 17.12l1.03-5.62L2 7.6l5.53-.72L10 1.6z" />
    </svg>
  );
}

/**
 * Compact, clickable Google-reviews trust pill. Placed at the very top of
 * the hero and every page header so the social proof is the first thing a
 * visitor sees, above the primary call to action.
 */
export function ReviewsPill({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.reviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${site.rating.score} from ${site.rating.count} Google reviews`}
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 shadow-xs transition-colors hover:border-brand ${className}`}
    >
      <GoogleG />
      <span className="text-[13px] font-bold text-ink">{site.rating.score}</span>
      <span className="flex items-center gap-0.5" aria-hidden>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>
      <span className="text-[12.5px] font-medium text-muted">
        {site.rating.count} Google reviews
      </span>
    </a>
  );
}
