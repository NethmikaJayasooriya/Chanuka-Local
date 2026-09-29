const steps = [
  {
    n: 1,
    title: "Submit Your Current CV / Resume",
    body: "Share your existing document, target role, target market, and career goals.",
  },
  {
    n: 2,
    title: "Profile Review & Direction",
    body: "Your career level, industry, strengths, gaps, and target-role requirements are reviewed in detail.",
  },
  {
    n: 3,
    title: "Strategic Writing & Optimization",
    body: "Your CV, LinkedIn, cover letter, or full package is rewritten with ATS, recruiter, and senior-market positioning in mind.",
  },
  {
    n: 4,
    title: "Review & Refinement",
    body: "You receive the completed documents with revision support based on your selected package.",
  },
  {
    n: 5,
    title: "Apply With Confidence",
    body: "Use your refined career documents for applications, recruiter outreach, and inbound opportunities.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative isolate scroll-mt-20 overflow-hidden border-y border-brand/10 bg-brand-soft/45 py-14 sm:py-18 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:radial-gradient(circle,rgba(23,53,92,0.18)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-white/60 to-transparent" />
      <div className="container-page relative">
        <div className="reveal text-center max-w-xl mx-auto">
          <p className="eyebrow">Process</p>
          <h2 className="display mt-2.5 text-[clamp(1.75rem,3.6vw,2.6rem)] text-ink">
            How the service works.
          </h2>
          <p className="mt-2 text-[14px] text-muted">
            A transparent five-stage workflow from submission to completed documents.
          </p>
        </div>

        {/* Mobile Connected Timeline View (< 640px) */}
        <div className="mt-8 sm:hidden relative pl-6 border-l-2 border-accent/30 space-y-4 ml-3">
          {steps.map((step, i) => (
            <div
              key={step.n}
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className="reveal relative rounded-[16px] border border-white/90 bg-surface p-4 shadow-[0_14px_34px_-28px_rgb(15_36_64/0.55)]"
            >
              {/* Timeline marker on the left border */}
              <span className="absolute -left-[35px] top-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[10.5px] font-bold text-paper ring-4 ring-paper shadow-xs">
                {step.n}
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep">
                  Stage 0{step.n}
                </span>
              </div>
              <h3 className="display mt-1 text-[15.5px] leading-snug text-ink">{step.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{step.body}</p>
            </div>
          ))}
        </div>

        {/* Tablet & Desktop Grid View (>= 640px) */}
        <ol className="mt-12 hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {steps.map((step, i) => (
            <li
              key={step.n}
              className={`lift reveal flex flex-col rounded-[16px] border border-white/90 bg-surface p-5 shadow-[0_18px_40px_-34px_rgb(15_36_64/0.5)] transition-all hover:border-brand hover:shadow-md lg:p-6 ${
                i === 4 ? "sm:col-span-2 md:col-span-1" : ""
              }`}
              style={{
                ["--reveal-delay" as string]: `${i * 90}ms`,
              }}
            >
              <div className="flex items-center justify-between border-b border-line/70 pb-3 mb-3">
                <span className="num-badge h-7 px-2.5 rounded-md bg-accent-soft border border-accent/25 text-[12px] text-accent-deep">
                  0{step.n}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted/70">
                  Step
                </span>
              </div>
              <h3 className="display text-[16px] lg:text-[16.5px] leading-snug text-ink">{step.title}</h3>
              <p className="mt-2.5 text-[13px] lg:text-[13.5px] leading-relaxed text-muted mt-auto">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
