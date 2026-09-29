export function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-brand py-14 lg:py-20">
      <div aria-hidden className="pointer-events-none absolute -left-24 -top-40 -z-10 h-96 w-96 rounded-full bg-white/8 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-36 right-0 -z-10 h-96 w-96 rounded-full bg-accent/18 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="container-page relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="reveal max-w-xl">
          <h2 className="display text-[clamp(1.6rem,3.2vw,2.25rem)] text-paper">
            Your next application deserves a better document.
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-paper/75">
            Build your package in under a minute. Choose your service, experience level and
            delivery speed, and see the exact price before you commit.
          </p>
        </div>

        <div className="reveal d1 flex flex-wrap gap-3">
          <a
            href="#build"
            className="rounded-full bg-paper px-7 py-3.5 text-[15px] font-semibold text-brand transition-colors hover:bg-surface"
          >
            Build your package
          </a>
        </div>
      </div>
    </section>
  );
}
