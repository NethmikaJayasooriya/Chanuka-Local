import { site } from "@/lib/site";

function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className={`h-[18px] w-[18px] ${className}`}>
      <path
        fill="currentColor"
        d="M10 1.6l2.47 5.28 5.53.72-4.06 3.9 1.03 5.62L10 14.42 5.03 17.12l1.03-5.62L2 7.6l5.53-.72L10 1.6z"
      />
    </svg>
  );
}

function GoogleG({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden style={{ width: size, height: size }}>
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.45a5.5 5.5 0 01-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.79z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.92l-3.87-3a7.2 7.2 0 01-10.73-3.79H1.36v3.1A12 12 0 0012 24z" />
      <path fill="#FBBC05" d="M5.35 14.29a7.2 7.2 0 010-4.58v-3.1H1.36a12 12 0 000 10.78l3.99-3.1z" />
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.17 15.23 0 12 0A12 12 0 001.36 6.61l3.99 3.1A7.2 7.2 0 0112 4.75z" />
    </svg>
  );
}

// Topics Google surfaces from the review text, with their real counts.
const topics = [
  { label: "Professional documents", count: 11 },
  { label: "Clear communication", count: 5 },
  { label: "Fast turnaround", count: 2 },
  { label: "Professional format", count: 2 },
];

// Real, verbatim Google reviews.
const testimonials = [
  {
    quote:
      "I am so pleased with the work done by Chanuka Jeewantha. He was very professional, friendly, and detail-oriented. He did not just rewrite my CV, but actually improved the way my skills, experience, and achievements were presented.",
    name: "Rashmika Sandaruwan",
    context: "Google review",
    initials: "RS",
  },
  {
    quote:
      "Excellent service! My CV was 100% ATS-friendly, exactly as I requested, and even better than I expected. They also provide an editable Word file, making it easy to make changes in the future. Great value for money.",
    name: "Nishaka Mahesh",
    context: "Google review",
    initials: "NM",
  },
  {
    quote:
      "Very good service. They delivered my CV within 3 days and checked with me several times to ensure everything was accurate. Communication was excellent and the service was well worth the price.",
    name: "D. C.",
    context: "Google review",
    initials: "DC",
  },
  {
    quote:
      "Excellent service! Very professional, responsive, and delivered a well-designed ATS-friendly CV. Highly recommend to anyone looking to improve their resume. Thank you!",
    name: "Asiri Isuranga",
    context: "Google review",
    initials: "AI",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative isolate scroll-mt-20 overflow-hidden border-y border-[#e6d8ca] bg-[#f5ede5] py-14 sm:py-18 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-white/80 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-80 w-80 rounded-full bg-accent-soft/80 blur-3xl" />
      <div className="container-page relative">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="display mt-2.5 text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
            Rated {site.rating.score} across {site.rating.count} Google reviews.
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-muted">
            Every review below is a real, verified review left on Google by a client who paid
            for the service and went on to apply with the documents.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-6 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
          {/* Google summary panel */}
          <aside className="reveal rounded-[18px] border border-white/90 bg-white/85 p-5 shadow-[0_22px_52px_-38px_rgb(14_26_43/0.55)] backdrop-blur sm:p-7">
            <div className="flex items-center gap-2.5">
              <GoogleG />
              <span className="text-[14px] font-semibold text-ink">Google Reviews</span>
            </div>

            <p className="display mt-4 sm:mt-5 text-[44px] sm:text-[52px] leading-none text-ink">
              {site.rating.score}
            </p>
            <div className="mt-2.5 flex text-accent" aria-hidden>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="mt-2 text-[13px] text-muted">
              Based on {site.rating.count} Google reviews
            </p>

            <div className="mt-5 sm:mt-6 border-t border-line pt-4 sm:pt-5">
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-muted">
                What clients mention
              </p>
              <ul className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
                {topics.map((t) => (
                  <li
                    key={t.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 sm:px-3 py-1 sm:py-1.5 text-[12px] sm:text-[12.5px] text-ink-soft"
                  >
                    {t.label}
                    <span className="text-[11px] font-semibold text-accent-deep">
                      {t.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={site.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block rounded-full border border-line-strong bg-surface px-5 py-3 text-center text-[13.5px] sm:text-[14px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand shadow-2xs"
            >
              Read reviews on Google
            </a>
          </aside>

          {/* Testimonials */}
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                className="lift reveal flex h-full flex-col rounded-[18px] border border-white/90 bg-white/82 p-5 shadow-[0_18px_45px_-36px_rgb(14_26_43/0.45)] backdrop-blur hover:border-brand sm:p-6"
              >
                <div className="flex text-accent" aria-hidden>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-[12px] font-semibold text-brand">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-semibold text-ink">{t.name}</span>
                    <span className="block text-[12.5px] text-muted">{t.context}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[12.5px] text-muted">
          Reviews shown as left on Google. Read all {site.rating.count} on the Google profile.
        </p>
      </div>
    </section>
  );
}
