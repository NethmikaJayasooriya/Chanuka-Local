"use client";

import { useEffect, useMemo, useState } from "react";
import {
  deliveries,
  levels,
  packages,
  quote,
  services,
  usd,
  type DeliveryId,
  type LevelId,
} from "@/lib/pricing";

function GoldSaveBadge({
  saving,
  discountPercent,
  className = "",
}: {
  saving: number;
  discountPercent: number;
  className?: string;
}) {
  if (saving <= 0) return null;
  return (
    <div className={`flex items-center justify-center animate-in fade-in zoom-in duration-300 ${className}`}>
      <div className="relative flex flex-col items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-accent via-accent-deep to-amber-800 text-paper shadow-md shadow-accent/25 border-2 border-paper rotate-6 hover:rotate-0 transition-transform cursor-default select-none">
        {/* Scalloped decorative ring */}
        <svg
          className="absolute inset-0 w-full h-full text-accent-soft/35 pointer-events-none"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="4, 3"
          />
        </svg>
        <span className="text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider leading-none opacity-90">
          SAVE
        </span>
        <span className="text-[12px] sm:text-[13.5px] font-extrabold leading-tight tracking-tight">
          {usd(saving)}
        </span>
        <span className="text-[7.5px] sm:text-[8px] font-bold opacity-90">
          {discountPercent}% OFF
        </span>
      </div>
    </div>
  );
}

export function Configurator() {
  // Step expansion state: 1 = Career Level, 2 = Package Options, 3 = Turnaround Speed
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | null>(1);

  // Configuration state
  const [level, setLevel] = useState<LevelId>("3-to-9");
  const [packageId, setPackageId] = useState("cv-linkedin");
  const [delivery, setDelivery] = useState<DeliveryId>("normal");
  const [tab, setTab] = useState<"bundles" | "singles">("bundles");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bundles = useMemo(() => packages.filter((p) => p.includes.length > 1), []);
  const singles = useMemo(() => packages.filter((p) => p.includes.length === 1), []);

  const pkg = useMemo(
    () => packages.find((p) => p.id === packageId) ?? packages[0],
    [packageId]
  );
  const q = useMemo(() => quote(pkg, level, delivery), [pkg, level, delivery]);

  const levelObj = levels.find((l) => l.id === level);
  const deliveryOption = deliveries.find((d) => d.id === delivery);

  const completionDate = useMemo(() => {
    if (!mounted) {
      return delivery === "ultra" ? "Within 24 Hours" : delivery === "fast" ? "2 to 3 Days" : "5 to 7 Days";
    }
    const d = new Date();
    const addDays = delivery === "ultra" ? 1 : delivery === "fast" ? 3 : 7;
    d.setDate(d.getDate() + addDays);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" });
  }, [delivery, mounted]);

  const orderHref = `/order?package=${pkg.id}&level=${level}&delivery=${delivery}`;
  const toggleStep = (step: 1 | 2 | 3) => {
    setActiveStep((curr) => (curr === step ? null : step));
  };

  const handleSelectLevel = (newLevel: LevelId) => {
    setLevel(newLevel);
    // Smoothly progress to step 2 if step 1 was open
    if (activeStep === 1) {
      setActiveStep(2);
    }
  };

  const handleSelectPackage = (newPkgId: string) => {
    setPackageId(newPkgId);
    // Smoothly progress to step 3 if step 2 was open
    if (activeStep === 2) {
      setActiveStep(3);
    }
  };

  const handleSelectDelivery = (newDelivery: DeliveryId) => {
    setDelivery(newDelivery);
  };

  const handleTabChange = (newTab: "bundles" | "singles") => {
    setTab(newTab);
    if (newTab === "bundles" && singles.some((p) => p.id === packageId)) {
      setPackageId("cv-linkedin");
    } else if (newTab === "singles" && bundles.some((p) => p.id === packageId)) {
      setPackageId("ats-cv");
    }
  };

  return (
    <section className="relative isolate overflow-hidden border-y border-line/60 bg-[linear-gradient(180deg,#e8eff9_0%,#f7f9fc_42%,#f9fafc_100%)] pb-16 pt-14 sm:pt-16 lg:pb-24 lg:pt-20">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-white/75 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-12 -z-10 h-80 w-80 rounded-full bg-accent-soft/80 blur-3xl" />
      <div className="container-page relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header: Minimal, Clean, Engaging */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="reveal eyebrow inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent-deep text-[11px] font-bold uppercase tracking-wider">
            Instant Package Calculator
          </p>
          <h2 className="reveal d1 display mt-2 text-[clamp(1.5rem,3vw,2.4rem)] font-bold text-ink">
            Transparent Pricing. Exact Quotes.
          </h2>
          <p className="reveal d2 mt-1.5 text-[13.5px] text-muted max-w-md mx-auto">
            Select your career stage and services to see guaranteed fixed pricing and delivery.
          </p>
        </div>

        {/* Master Unified Card: 2 Columns on Desktop, Vertical Stack on Mobile */}
        {/* id="build" lives on the card (not the section) so the hero CTA scrolls
            straight to the picker instead of stopping at the section heading. */}
        <div id="build" className="reveal d3 scroll-mt-24 grid overflow-hidden rounded-3xl border border-white/80 bg-surface shadow-[0_34px_80px_-42px_rgb(15_36_64/0.48)] ring-1 ring-brand/5 lg:grid-cols-[1.35fr_1fr]">
          {/* ============================================================= */}
          {/* LEFT COLUMN: THE 3 SEQUENTIAL SELECTION STEPS */}
          {/* ============================================================= */}
          <div className="min-w-0 p-5 sm:p-7 flex flex-col justify-between">
            <div className="min-w-0">
              {/* Card Title with Reference Accent Underline */}
              <div className="mb-5">
                <div className="flex min-w-0 items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="display text-xl sm:text-2xl font-bold text-ink">
                      Configure your package
                    </h3>
                    <div className="h-1 w-14 bg-accent rounded-full mt-1.5" />
                  </div>
                  <GoldSaveBadge
                    saving={q.bundleSaving}
                    discountPercent={q.discountPercent}
                    className="lg:hidden shrink-0"
                  />
                </div>
              </div>

              {/* Inset Steps Container (Inspired by client reference screenshots) */}
              <div className="rounded-2xl border border-line/80 bg-sand/20 p-2.5 sm:p-3.5 space-y-2.5">
                {/* ------------------------------------------------------- */}
                {/* STEP 1: CAREER LEVEL */}
                {/* ------------------------------------------------------- */}
                <div className="rounded-xl border border-line/70 bg-surface overflow-hidden transition-all shadow-xs">
                  <button
                    type="button"
                    onClick={() => toggleStep(1)}
                    className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left cursor-pointer hover:bg-sand/30 transition-colors"
                    aria-expanded={activeStep === 1}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                        ✓
                      </span>
                      <div className="truncate">
                        <span className="text-[13px] font-bold text-ink block leading-tight">
                          Career level
                        </span>
                        {levelObj && (
                          <span className="text-[11.5px] font-medium text-accent-deep truncate block">
                            {levelObj.name} · {levelObj.hint}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-muted shrink-0 pl-2">
                      <span className="text-[11px] hidden sm:inline font-medium">
                        {activeStep === 1 ? "Close" : "Change"}
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeStep === 1 ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>

                  {activeStep === 1 && (
                    <div className="border-t border-line/60 p-2.5 sm:p-3 bg-sand/10 space-y-1.5">
                      {levels.map((l) => {
                        const isSelected = l.id === level;
                        return (
                          <button
                            key={l.id}
                            type="button"
                            onClick={() => handleSelectLevel(l.id)}
                            className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-lg border text-left transition-all cursor-pointer ${
                              isSelected
                                ? "border-brand bg-brand-soft/70 ring-1 ring-brand text-ink"
                                : "border-line bg-surface hover:border-line-strong hover:bg-sand/40 text-ink"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                                  isSelected
                                    ? "border-brand bg-brand text-paper"
                                    : "border-line-strong bg-paper"
                                }`}
                              >
                                {isSelected && (
                                  <svg viewBox="0 0 12 12" className="h-1.5 w-1.5 fill-current">
                                    <circle cx="6" cy="6" r="3" />
                                  </svg>
                                )}
                              </span>
                              <span className="text-[12.5px] font-bold text-ink">
                                {l.name}
                              </span>
                            </div>
                            <span className="text-[11px] text-muted text-right">
                              {l.hint}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* ------------------------------------------------------- */}
                {/* STEP 2: PACKAGE OPTIONS */}
                {/* ------------------------------------------------------- */}
                <div className="rounded-xl border border-line/70 bg-surface overflow-hidden transition-all shadow-xs">
                  <button
                    type="button"
                    onClick={() => toggleStep(2)}
                    className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left cursor-pointer hover:bg-sand/30 transition-colors"
                    aria-expanded={activeStep === 2}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                        ✓
                      </span>
                      <div className="truncate">
                        <span className="text-[13px] font-bold text-ink block leading-tight">
                          Package options
                        </span>
                        {pkg && (
                          <span className="text-[11.5px] font-medium text-accent-deep truncate block">
                            {pkg.name} {pkg.includes.length > 1 ? `· Save ${q.discountPercent}%` : ""}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-muted shrink-0 pl-2">
                      <span className="text-[11px] hidden sm:inline font-medium">
                        {activeStep === 2 ? "Close" : "Change"}
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeStep === 2 ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>

                  {activeStep === 2 && (
                    <div className="border-t border-line/60 p-2.5 sm:p-3 bg-sand/10 space-y-2.5">
                      {/* Bundle / Single selector: two clear, tappable cards */}
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleTabChange("bundles")}
                          aria-pressed={tab === "bundles"}
                          className={`rounded-xl border px-3 py-2.5 text-left transition-all cursor-pointer ${
                            tab === "bundles"
                              ? "border-brand bg-brand text-paper shadow-md"
                              : "border-line bg-surface text-ink hover:border-brand/40 hover:bg-sand/30"
                          }`}
                        >
                          <span className="block text-[12.5px] font-extrabold leading-tight">Complete Bundles</span>
                          <span
                            className={`mt-0.5 inline-flex items-center gap-1 text-[10.5px] font-bold ${
                              tab === "bundles" ? "text-amber-300" : "text-accent-deep"
                            }`}
                          >
                            <svg viewBox="0 0 16 16" aria-hidden className="h-3 w-3 fill-current">
                              <path d="M8 1l1.9 4 4.4.5-3.3 3 1 4.4L8 10.8l-3.9 2.1 1-4.4L1.7 5.5 6.1 5z" />
                            </svg>
                            Save up to 30%
                          </span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleTabChange("singles")}
                          aria-pressed={tab === "singles"}
                          className={`rounded-xl border px-3 py-2.5 text-left transition-all cursor-pointer ${
                            tab === "singles"
                              ? "border-brand bg-brand text-paper shadow-md"
                              : "border-line bg-surface text-ink hover:border-brand/40 hover:bg-sand/30"
                          }`}
                        >
                          <span className="block text-[12.5px] font-extrabold leading-tight">Single Services</span>
                          <span
                            className={`mt-0.5 block text-[10.5px] font-semibold ${
                              tab === "singles" ? "text-paper/70" : "text-muted"
                            }`}
                          >
                            Just one service
                          </span>
                        </button>
                      </div>

                      {/* Helper line: tells the user exactly what this tab is */}
                      <p className="px-1 text-[11px] text-muted">
                        {tab === "bundles"
                          ? "Two or three services together, at a discount."
                          : "Pick one service on its own."}
                      </p>

                      {/* Package Item Rows */}
                      <div className="space-y-1.5">
                        {(tab === "bundles" ? bundles : singles).map((p) => {
                          const isSelected = p.id === packageId;
                          const discountBadge =
                            p.includes.length === 3 ? "Save 30%" : p.includes.length === 2 ? "Save 20%" : null;
                          const rowPrice = quote(p, level, delivery).total;

                          return (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => handleSelectPackage(p.id)}
                              className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-lg border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? "border-brand bg-brand-soft/70 ring-1 ring-brand text-ink"
                                  : "border-line bg-surface hover:border-line-strong hover:bg-sand/40 text-ink"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span
                                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                                    isSelected
                                      ? "border-brand bg-brand text-paper"
                                      : "border-line-strong bg-paper"
                                  }`}
                                >
                                  {isSelected && (
                                    <svg viewBox="0 0 12 12" className="h-1.5 w-1.5 fill-current">
                                      <circle cx="6" cy="6" r="3" />
                                    </svg>
                                  )}
                                </span>
                                <div className="min-w-0">
                                  <span className="text-[12.5px] font-bold text-ink block leading-tight">
                                    {p.name}
                                  </span>
                                  <span className="text-[10.5px] text-muted block leading-tight mt-0.5">
                                    {p.includes.length > 1 ? `${p.includes.length} services` : "Single service"}
                                  </span>
                                </div>
                              </div>

                              <div className="flex shrink-0 items-center gap-2 ml-2">
                                {discountBadge && (
                                  <span className="rounded bg-accent/15 px-2 py-0.5 text-[10px] font-bold text-accent-deep">
                                    {discountBadge}
                                  </span>
                                )}
                                <span className="stat-number text-[13px] font-extrabold text-ink">
                                  {usd(rowPrice)}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* ------------------------------------------------------- */}
                {/* STEP 3: TURNAROUND SPEED */}
                {/* ------------------------------------------------------- */}
                <div className="rounded-xl border border-line/70 bg-surface overflow-hidden transition-all shadow-xs">
                  <button
                    type="button"
                    onClick={() => toggleStep(3)}
                    className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left cursor-pointer hover:bg-sand/30 transition-colors"
                    aria-expanded={activeStep === 3}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">
                        ✓
                      </span>
                      <div className="truncate">
                        <span className="text-[13px] font-bold text-ink block leading-tight">
                          Turnaround speed
                        </span>
                        {deliveryOption && (
                          <span className="text-[11.5px] font-medium text-accent-deep truncate block">
                            {deliveryOption.name} ({deliveryOption.window}) · Draft by {completionDate}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-muted shrink-0 pl-2">
                      <span className="text-[11px] hidden sm:inline font-medium">
                        {activeStep === 3 ? "Close" : "Change"}
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeStep === 3 ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </button>

                  {activeStep === 3 && (
                    <div className="border-t border-line/60 p-2.5 sm:p-3 bg-sand/10 space-y-1.5">
                      {deliveries.map((d) => {
                        const isSelected = d.id === delivery;
                        return (
                          <button
                            key={d.id}
                            type="button"
                            onClick={() => handleSelectDelivery(d.id)}
                            className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-lg border text-left transition-all cursor-pointer ${
                              isSelected
                                ? "border-brand bg-brand-soft/70 ring-1 ring-brand text-ink"
                                : "border-line bg-surface hover:border-line-strong hover:bg-sand/40 text-ink"
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                                  isSelected
                                    ? "border-brand bg-brand text-paper"
                                    : "border-line-strong bg-paper"
                                }`}
                              >
                                {isSelected && (
                                  <svg viewBox="0 0 12 12" className="h-1.5 w-1.5 fill-current">
                                    <circle cx="6" cy="6" r="3" />
                                  </svg>
                                )}
                              </span>
                              <div>
                                <span className="text-[12.5px] font-bold text-ink block leading-tight">
                                  {d.name}
                                </span>
                                <span className="text-[10.5px] text-muted block">
                                  {d.window}
                                </span>
                              </div>
                            </div>

                            {d.note && (
                              <span className="rounded bg-sand px-2 py-0.5 text-[10px] font-bold text-ink-soft">
                                {d.note}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* ============================================================= */}
          {/* RIGHT COLUMN: SLEEK PRICE & CHECKOUT SUMMARY */}
          {/* ============================================================= */}
          <aside className="min-w-0 bg-sand/35 p-5 sm:p-7 border-t lg:border-t-0 lg:border-l border-line flex flex-col justify-between">
            {/* Top Details */}
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted block">
                    Price Summary
                  </span>
                  <h4 className="display mt-0.5 text-2xl font-bold text-ink">
                    {pkg.name}
                  </h4>
                  <p className="text-[12px] text-muted mt-0.5">
                    {levelObj?.name} · {deliveryOption?.name} delivery
                  </p>
                </div>

                <GoldSaveBadge
                  saving={q.bundleSaving}
                  discountPercent={q.discountPercent}
                  className="shrink-0"
                />
              </div>

              {/* Package Inclusions Pills */}
              <div className="mt-4 pt-3.5 border-t border-line/70">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted block mb-2">
                  What&apos;s Included:
                </span>
                <div className="space-y-1.5 text-[12px] text-ink-soft">
                  {pkg.includes.map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span className="font-semibold text-ink">{services[s].name}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>1 full revision round included</span>
                  </div>
                </div>
              </div>

              {/* Estimated Delivery Date Callout */}
              <div className="mt-4 rounded-xl bg-surface border border-line/80 px-3.5 py-2.5 flex items-center justify-between text-[11.5px] shadow-xs">
                <span className="text-muted">Estimated first draft:</span>
                <span className="font-bold text-ink">{completionDate}</span>
              </div>
            </div>

            {/* Bottom: Price, Primary CTA, and Sub-action */}
            <div className="mt-6 pt-4 border-t border-line">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                  Total Due (USD)
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="stat-number text-3xl sm:text-4xl font-extrabold text-ink leading-none">
                    {usd(q.total)}
                  </span>
                  {q.bundleSaving > 0 && (
                    <span className="text-sm text-muted/60 line-through">
                      {usd(q.listPrice + q.deliveryFee)}
                    </span>
                  )}
                </div>
              </div>

              {/* High-Converting Primary CTA */}
              <a
                href={orderHref}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-brand hover:bg-brand-deep text-paper font-bold py-3.5 px-6 shadow-md hover:shadow-lg transition-all text-[15px] cursor-pointer"
              >
                <span>Continue to order</span>
                <span>→</span>
              </a>

            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
