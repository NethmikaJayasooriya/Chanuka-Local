"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { TierSelector } from "./TierSelector";
import {
  tiers,
  type TierId,
  deliveries,
  levels,
  packages,
  quote,
  formatLKR,
  getPackageDisplayName,
  services,
  type ServiceId,
  TIER_PRICES,
  type Package,
  type DeliveryId,
  type LevelId,
} from "@/lib/pricing";
import { whatsappUrl } from "@/lib/site";

export function Configurator() {
  // Step expansion state: 1 = Career Level, 2 = Package Options, 3 = Turnaround Speed
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | null>(1);
  // Which steps the visitor has actually chosen (so the green ticks only
  // appear as they progress, not all filled in from the start).
  const [done, setDone] = useState<{ 1: boolean; 2: boolean; 3: boolean }>({ 1: false, 2: false, 3: false });

  // Configuration state
  const [tier, setTier] = useState<TierId>("essential");
  const [level, setLevel] = useState<LevelId>("3-to-9");
  const [selectedServices, setSelectedServices] = useState<ServiceId[]>(["cv"]);
  const [delivery, setDelivery] = useState<DeliveryId>("normal");
  const [mounted, setMounted] = useState(false);
  const [conflictAction, setConflictAction] = useState<{
    target: ServiceId;
    replace: ServiceId;
    message: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Ensure consultation (if not over-10) and cv-review are deselected
  useEffect(() => {
    if (selectedServices.includes("cv-review") || (level !== "over-10" && selectedServices.includes("consultation"))) {
      setSelectedServices((prev) => {
        const next = prev.filter((s) => s !== "cv-review" && (level === "over-10" || s !== "consultation"));
        return next.length > 0 ? next : ["cv"];
      });
    }
  }, [level, selectedServices]);

  const singles = useMemo(() => packages.filter((p) => p.includes.length === 1), []);

  const availableSingles = useMemo(() => {
    return singles.filter((p) => {
      const s = p.includes[0];
      if (s === "cv-review") return false; // Removed CV Review option as requested
      if (s === "consultation" && level !== "over-10") return false;
      return true;
    });
  }, [singles, level]);

  const activeServices = useMemo(() => {
    const valid = selectedServices.filter((s) => {
      if (s === "cv-review") return false;
      if (s === "consultation" && level !== "over-10") return false;
      return true;
    });
    return valid.length > 0 ? valid : (["cv"] as ServiceId[]);
  }, [selectedServices, level]);

  const pkg: Package = useMemo(() => {
    if (activeServices.length === 1) {
      const matched = packages.find(
        (p) => p.includes.length === 1 && p.includes[0] === activeServices[0]
      );
      if (matched) return matched;
    }
    if (activeServices.length === 2) {
      const matched = packages.find((p) => {
        if (p.id === "complete") return false;
        return (
          p.includes.length === 2 &&
          p.includes.every((s) => activeServices.includes(s))
        );
      });
      if (matched) return matched;
    }

    const shortNames = activeServices.map((s) => services[s]?.short || s);
    const fullName = shortNames.join(" + ");
    return {
      id: `custom_${activeServices.join("_")}`,
      name: fullName,
      includes: activeServices,
      blurb: `Custom package: ${shortNames.join(", ")}`,
    };
  }, [activeServices]);

  const q = useMemo(() => quote(pkg, level, delivery, tier), [pkg, level, delivery, tier]);

  const levelObj = levels.find((l) => l.id === level);
  const deliveryOption = deliveries.find((d) => d.id === delivery);
  const pkgDisplayName = getPackageDisplayName(pkg, level);

  const step2Summary = useMemo(() => {
    if (activeServices.length === 1) {
      return `${services[activeServices[0]]?.name || "1 service"} · ${formatLKR(q.total)}`;
    }
    if (activeServices.length === 2) {
      const names = activeServices.map((s) => services[s]?.short || s).join(" + ");
      return `${names} · ${formatLKR(q.total)}`;
    }
    return `${activeServices.length} services selected · ${formatLKR(q.total)}`;
  }, [activeServices, q.total]);

  const completionDate = useMemo(() => {
    if (!mounted) {
      return delivery === "ultra" ? "Within 24 Hours" : delivery === "fast" ? "1 to 3 Days" : "5 to 7 Days";
    }
    const d = new Date();
    const addDays = delivery === "ultra" ? 1 : delivery === "fast" ? 3 : 7;
    d.setDate(d.getDate() + addDays);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" });
  }, [delivery, mounted]);

  const orderHref = `/order?package=${pkg.id}&level=${level}&delivery=${delivery}&tier=${tier}#order-form`;
  
  const whatsappDiscussUrl = whatsappUrl(
    `Hi Chanuka, I would like to discuss the ${tier} ${pkgDisplayName} (${formatLKR(q.total)}) for ${levelObj?.name} (${levelObj?.hint}).`
  );

  const toggleStep = (step: 1 | 2 | 3) => {
    setActiveStep((curr) => (curr === step ? null : step));
  };

  const handleSelectLevel = (newLevel: LevelId) => {
    setLevel(newLevel);
    setDone((d) => ({ ...d, 1: true }));
    // Smoothly progress to step 2 if step 1 was open
    if (activeStep === 1) {
      setActiveStep(2);
    }
  };

  const handleToggleService = (serviceId: ServiceId) => {
    // If user is unchecking an already selected service
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length <= 1) return; // Keep at least one service selected
      setSelectedServices((prev) => prev.filter((s) => s !== serviceId));
      if (conflictAction && (conflictAction.target === serviceId || conflictAction.replace === serviceId)) {
        setConflictAction(null);
      }
      setDone((d) => ({ ...d, 2: true }));
      return;
    }

    // Mutual exclusivity check: ATS CV Writing ("cv") and Foreign Job CV ("foreign-cv")
    if (serviceId === "foreign-cv" && selectedServices.includes("cv")) {
      setConflictAction({
        target: "foreign-cv",
        replace: "cv",
        message:
          "Each package includes either a local ATS CV or an international CV. Would you like to switch to Foreign Job CV?",
      });
      return;
    }

    if (serviceId === "cv" && selectedServices.includes("foreign-cv")) {
      setConflictAction({
        target: "cv",
        replace: "foreign-cv",
        message:
          "Each package includes either a local ATS CV or an international CV. Would you like to switch to ATS CV Writing?",
      });
      return;
    }

    // Normal valid selection
    setConflictAction(null);
    setSelectedServices((prev) => [...prev, serviceId]);
    setDone((d) => ({ ...d, 2: true }));
  };

  const handleSelectDelivery = (newDelivery: DeliveryId) => {
    setDelivery(newDelivery);
    setDone((d) => ({ ...d, 3: true }));
  };

  return (
    <section className="relative isolate overflow-hidden border-y border-line/60 bg-[linear-gradient(180deg,#e8eff9_0%,#f7f9fc_42%,#f9fafc_100%)] pb-16 pt-14 sm:pt-16 lg:pb-24 lg:pt-20">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-white/75 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-12 -z-10 h-80 w-80 rounded-full bg-accent-soft/80 blur-3xl" />
      
      <div className="container-page relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header: Sri Lanka Focus */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <p className="reveal eyebrow inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent-deep text-[11px] font-bold uppercase tracking-wider">
            Sri Lanka Pricing Calculator
          </p>
          <h2 className="reveal d1 display mt-2 text-[clamp(1.5rem,3vw,2.4rem)] font-bold text-ink">
            Transparent Pricing in Sri Lankan Rupees (LKR)
          </h2>
          <p className="reveal d2 mt-1.5 text-[13.5px] text-muted max-w-md mx-auto">
            Select your career stage and services to see guaranteed fixed rates with no hidden costs.
          </p>
        </div>

        {/* Master Unified Card: 2 Columns on Desktop, Vertical Stack on Mobile */}
        <div id="build" className="reveal d3 scroll-mt-24 grid overflow-hidden rounded-3xl border border-white/80 bg-surface shadow-[0_34px_80px_-42px_rgb(15_36_64/0.48)] ring-1 ring-brand/5 lg:grid-cols-[1.3fr_1.1fr]">
          {/* ============================================================= */}
          {/* LEFT COLUMN: THE 3 SEQUENTIAL SELECTION STEPS */}
          {/* ============================================================= */}
          <div className="min-w-0 p-5 sm:p-7 flex flex-col justify-between">
            <div className="min-w-0">
              {/* Card Title */}
              <div className="mb-5">
                <div className="flex min-w-0 items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="display text-xl sm:text-2xl font-bold text-ink">
                      Configure your package
                    </h3>
                    <div className="h-1 w-14 bg-accent rounded-full mt-1.5" />
                  </div>
                </div>
              </div>

              <TierSelector value={tier} onChange={setTier} />
              {/* Inset Steps Container */}
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
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${done[1] ? "bg-emerald-600 text-white" : "bg-sand text-muted"}`}>
                        {done[1] ? "✓" : "1"}
                      </span>
                      <div className="truncate">
                        <span className="text-[13px] font-bold text-ink block leading-tight">
                          Career stage
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
                    <div className="border-t border-line/60 p-2.5 sm:p-3 bg-sand/10 space-y-2">
                      {levels.map((l) => {
                        const isSelected = l.id === level;
                        return (
                          <button
                            key={l.id}
                            type="button"
                            onClick={() => handleSelectLevel(l.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? "border-brand bg-brand-soft/80 ring-1 ring-brand text-ink shadow-xs"
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
                                <div className="flex items-center gap-2">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#b9862f]">
                                    {l.eyebrow}
                                  </span>
                                </div>
                                <span className="text-[13px] font-bold text-ink block leading-snug">
                                  {l.name}
                                </span>
                                <span className="text-[11px] text-muted block">
                                  {l.hint}
                                </span>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* ------------------------------------------------------- */}
                {/* STEP 2: PACKAGE OPTIONS (MULTI-SELECT) */}
                {/* ------------------------------------------------------- */}
                <div className="rounded-xl border border-line/70 bg-surface overflow-hidden transition-all shadow-xs">
                  <button
                    type="button"
                    onClick={() => toggleStep(2)}
                    className="w-full flex items-center justify-between p-3 sm:p-3.5 text-left cursor-pointer hover:bg-sand/30 transition-colors"
                    aria-expanded={activeStep === 2}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${done[2] ? "bg-emerald-600 text-white" : "bg-sand text-muted"}`}>
                        {done[2] ? "✓" : "2"}
                      </span>
                      <div className="truncate">
                        <span className="text-[13px] font-bold text-ink block leading-tight">
                          Package options
                        </span>
                        <span className="text-[11.5px] font-medium text-accent-deep truncate block">
                          {step2Summary}
                        </span>
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
                      {/* Helper line with counter */}
                      <div className="flex items-center justify-between px-1">
                        <p className="text-[11px] text-muted">
                          Select one or more services to customize your package:
                        </p>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep bg-accent/10 border border-accent/25 px-2 py-0.5 rounded-full shrink-0 ml-2">
                          {activeServices.length} selected
                        </span>
                      </div>

                      {/* Option Guidance Notice */}
                      {conflictAction && (
                        <div className="rounded-2xl border border-brand/20 bg-brand-soft/50 p-3 sm:p-3.5 shadow-xs transition-all">
                          <div className="flex items-start justify-between gap-2.5">
                            <div className="flex items-start gap-2.5 min-w-0">
                              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand mt-0.5">
                                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                                  <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3.5a1 1 0 110 2 1 1 0 010-2zM6.75 8a.75.75 0 01.75-.75h1a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-2.75h-.25A.75.75 0 016.75 8z" />
                                </svg>
                              </div>
                              <div className="min-w-0">
                                <span className="text-[12.5px] font-bold text-ink block">
                                  Select one CV format
                                </span>
                                <p className="mt-0.5 text-[11.5px] text-muted leading-relaxed">
                                  {conflictAction.message}
                                </p>
                                <div className="mt-2.5 flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setSelectedServices((prev) =>
                                        prev.map((s) => (s === conflictAction.replace ? conflictAction.target : s))
                                      );
                                      setConflictAction(null);
                                    }}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand hover:bg-brand-deep text-paper font-semibold text-[11.5px] transition-colors cursor-pointer shadow-xs"
                                  >
                                    <span>Switch to {services[conflictAction.target]?.name || "selected CV"}</span>
                                    <span>→</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setConflictAction(null)}
                                    className="px-2.5 py-1.5 rounded-xl text-muted hover:text-ink text-[11.5px] font-medium transition-colors cursor-pointer"
                                  >
                                    Keep current
                                  </button>
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => setConflictAction(null)}
                              className="text-muted hover:text-ink text-sm p-0.5 -mt-0.5 shrink-0 cursor-pointer transition-colors"
                              aria-label="Close notice"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Package Item Rows (Multi-select Checkboxes) */}
                      <div className="space-y-1.5">
                        {availableSingles.map((p) => {
                          const sId = p.includes[0] as ServiceId;
                          const isSelected = activeServices.includes(sId);
                          const name = services[sId]?.name || p.name;
                          const servicePrice = TIER_PRICES[tier][sId][level];

                          const isConflicting =
                            (!isSelected && sId === "foreign-cv" && activeServices.includes("cv")) ||
                            (!isSelected && sId === "cv" && activeServices.includes("foreign-cv"));

                          return (
                            <button
                              key={p.id}
                              type="button"
                              role="checkbox"
                              aria-checked={isSelected}
                              onClick={() => handleToggleService(sId)}
                              className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-lg border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? "border-brand bg-brand-soft/70 ring-1 ring-brand text-ink"
                                  : isConflicting
                                  ? "border-line bg-surface/80 hover:border-brand/40 text-ink"
                                  : "border-line bg-surface hover:border-line-strong hover:bg-sand/40 text-ink"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span
                                  className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                    isSelected
                                      ? "border-brand bg-brand text-paper shadow-xs"
                                      : isConflicting
                                      ? "border-line-strong bg-sand/30"
                                      : "border-line-strong bg-paper"
                                  }`}
                                >
                                  {isSelected && (
                                    <svg
                                      viewBox="0 0 14 14"
                                      fill="none"
                                      className="h-3 w-3 stroke-current stroke-[2.5]"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <polyline points="2.5 7.5 5.5 10.5 11.5 3.5" />
                                    </svg>
                                  )}
                                </span>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="text-[12.5px] font-bold text-ink block leading-tight">
                                      {name}
                                    </span>
                                    {isConflicting && (
                                      <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[9.5px] font-semibold bg-brand-soft/70 text-accent-deep border border-brand/15">
                                        Pick 1 CV type
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-[10.5px] text-muted block leading-tight mt-0.5">
                                    {p.blurb || "Single service"}
                                  </span>
                                </div>
                              </div>

                              <div className="flex shrink-0 items-center gap-2 ml-2">
                                <span className="stat-number text-[13px] font-extrabold text-ink">
                                  {formatLKR(servicePrice)}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Advance to next step footer */}
                      <div className="pt-2 flex items-center justify-between border-t border-line/60">
                        <span className="text-[11.5px] text-muted">
                          {activeServices.length === 1
                            ? "1 service selected"
                            : `${activeServices.length} services selected`}
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveStep(3)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand text-paper text-[12px] font-semibold hover:bg-brand-deep transition-colors cursor-pointer"
                        >
                          <span>Next: Delivery time</span>
                          <span>↓</span>
                        </button>
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
                      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${done[3] ? "bg-emerald-600 text-white" : "bg-sand text-muted"}`}>
                        {done[3] ? "✓" : "3"}
                      </span>
                      <div className="truncate">
                        <span className="text-[13px] font-bold text-ink block leading-tight">
                          Delivery Time
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

                            <div className="flex items-center gap-2">
                              {d.note && (
                                <span
                                  className={`rounded px-2 py-0.5 text-[10.5px] font-bold ${
                                    d.surcharge > 0
                                      ? "bg-accent/15 text-accent-deep border border-accent/25"
                                      : "bg-sand text-ink-soft"
                                  }`}
                                >
                                  {d.note}
                                </span>
                              )}
                            </div>
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
          {/* RIGHT COLUMN: PRECISE PACKAGE CARD MATCHING SRI LANKA SPEC */}
          {/* ============================================================= */}
          <aside className="min-w-0 bg-sand/35 p-5 sm:p-7 border-t lg:border-t-0 lg:border-l border-line flex flex-col justify-between">
            {/* Top Details */}
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#b9862f] block">
                    {tiers.find((item) => item.id === tier)?.name}
                  </span>
                  <h4 className="display mt-1 text-2xl sm:text-3xl font-bold text-ink">
                    {pkgDisplayName}
                  </h4>
                  <p className="text-[12.5px] text-muted mt-1 leading-snug">
                    {levelObj?.hint}
                  </p>
                </div>
              </div>

              {/* Price Display */}
              <div className="mt-5 pb-4 border-b border-line">
                <div className="display text-3xl sm:text-4xl font-black text-ink leading-tight">
                  {formatLKR(q.total)}
                </div>
                <p className="text-[11.5px] text-muted mt-1">
                  {activeServices.length > 1
                    ? `Combined total for ${activeServices.length} selected services · No hidden fees`
                    : "Guaranteed fixed rate · No hidden fees"}
                </p>
              </div>

              {/* Service Items Breakdown with Exact Prices */}
              <div className="mt-4 pt-1">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted block mb-3">
                  Service Breakdown:
                </span>
                <div className="space-y-2.5 text-[13px]">
                  {q.serviceBreakdown.map((item) => (
                    <div
                      key={item.serviceId}
                      className="flex items-center justify-between py-1 border-b border-line/40 text-ink"
                    >
                      <span className="font-normal text-ink-soft">{item.name}</span>
                      <span className="font-bold text-ink">{formatLKR(item.price)}</span>
                    </div>
                  ))}
                  {q.deliveryFee > 0 && (
                    <div className="flex items-center justify-between py-1 border-b border-line/40 text-ink">
                      <span className="font-normal text-ink-soft">
                        {deliveryOption?.name} ({deliveryOption?.note})
                      </span>
                      <span className="font-bold text-ink">+{formatLKR(q.deliveryFee)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between py-1 text-[11.5px] text-muted">
                    <span>{tier === "signature" ? "Signature support" : "Revision round"}</span>
                    <span className="font-semibold text-emerald-600">{tier === "signature" ? "30 days" : "Included"}</span>
                  </div>
                </div>
              </div>

              {/* Estimated Turnaround Callout */}
              <div className="mt-5 rounded-xl bg-surface border border-line/80 px-3.5 py-2.5 flex items-center justify-between text-[11.5px] shadow-xs">
                <span className="text-muted">Estimated first draft:</span>
                <span className="font-bold text-ink">{completionDate}</span>
              </div>
            </div>

            {/* Bottom: order/payment flow is primary, WhatsApp is the backup */}
            <div className="mt-6 pt-4 border-t border-line">
              <Link
                href={orderHref}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-brand hover:bg-brand-deep text-paper font-bold py-3.5 px-6 shadow-md hover:shadow-lg transition-all text-[15px] cursor-pointer"
              >
                <span>Continue to order</span>
                <span>→</span>
              </Link>

              <a
                href={whatsappDiscussUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 w-full flex items-center justify-center gap-2 rounded-2xl border border-line-strong bg-surface hover:border-brand text-ink font-semibold py-3 px-6 transition-colors text-[14px] cursor-pointer"
              >
                <span>Or discuss on WhatsApp</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
