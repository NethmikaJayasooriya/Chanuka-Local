const items = [
  {
    title: "ATS Friendly CV",
    body: "Rewritten around the achievements a hiring manager acts on, in a structure that parses cleanly through applicant tracking systems.",
    points: ["Role and market positioning", "Achievement-led bullet points", "Clean, parseable formatting"],
  },
  {
    title: "Cover Letter Writing",
    body: "A letter written for one role and one employer, not a template with the company name swapped in.",
    points: ["Tailored to the job description", "Tone matched to the market", "Clear value proposition"],
  },
  {
    title: "LinkedIn Optimization",
    body: "A profile recruiters can find in search and want to read once they land on it.",
    points: ["Headline and About rewrite", "Keyword strategy for your market", "Experience repositioned for search"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative isolate scroll-mt-20 overflow-hidden border-t border-line bg-surface py-12 sm:py-16 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-accent-soft/65 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 -z-10 h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container-page relative">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">What you get</p>
          <h2 className="display mt-3 text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
            Three services, written as one story.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-muted">
            Your CV, your letter and your profile should say the same thing about you.
            When they are written together, they do.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={item.title}
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              className="lift reveal relative overflow-hidden rounded-[18px] border border-line bg-paper p-5 shadow-[0_18px_45px_-36px_rgb(14_26_43/0.45)] hover:border-brand sm:p-6"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-accent to-brand/40" />
              <span className="num-badge h-6 px-2.5 rounded-md bg-accent-soft border border-accent/25 text-[11px] text-accent-deep">
                0{i + 1}
              </span>
              <h3 className="display mt-3 text-[20px] text-ink">{item.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{item.body}</p>
              <ul className="mt-5 space-y-2 border-t border-line pt-4">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
