"use client";

import { useState, useMemo, useEffect } from "react";
import {
  INVOICE_COUNTRIES,
  getCountryServicePrice,
  formatCountryAmount,
} from "@/lib/invoicePackages";
import {
  deliveries,
  levels,
  packages,
  services,
  tiers,
  type DeliveryId,
  type LevelId,
  type ServiceId,
  type TierId,
} from "@/lib/pricing";

interface Props {
  initialCountry?: string;
  onApplyPackage: (data: {
    countryKey: string;
    currency: string;
    site: "com" | "lk" | "uk";
    items: Array<{ description: string; quantity: number; unit_price: number; total: number }>;
  }) => void;
  onAddPackage: (data: {
    countryKey: string;
    currency: string;
    site: "com" | "lk" | "uk";
    items: Array<{ description: string; quantity: number; unit_price: number; total: number }>;
  }) => void;
}

export function InvoicePackageConfigurator({
  initialCountry = "lk",
  onApplyPackage,
  onAddPackage,
}: Props) {
  const [countryKey, setCountryKey] = useState<string>(initialCountry);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3 | null>(1);
  const [tier, setTier] = useState<TierId>("essential");
  const [level, setLevel] = useState<LevelId>("3-to-9");
  const [selectedServices, setSelectedServices] = useState<ServiceId[]>(["cv"]);
  const [delivery, setDelivery] = useState<DeliveryId>("normal");
  const [conflictAction, setConflictAction] = useState<{
    target: ServiceId;
    replace: ServiceId;
    message: string;
  } | null>(null);

  const country = useMemo(() => {
    return INVOICE_COUNTRIES.find((c) => c.key === countryKey) || INVOICE_COUNTRIES[0];
  }, [countryKey]);

  // Clean up consultation if level switches away from Executive
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
      if (s === "cv-review") return false;
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

  const handleToggleService = (serviceId: ServiceId) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length <= 1) return;
      setSelectedServices((prev) => prev.filter((s) => s !== serviceId));
      if (conflictAction && (conflictAction.target === serviceId || conflictAction.replace === serviceId)) {
        setConflictAction(null);
      }
      return;
    }

    if (serviceId === "foreign-cv" && selectedServices.includes("cv")) {
      setConflictAction({
        target: "foreign-cv",
        replace: "cv",
        message:
          "ATS CV Writing and Foreign Job CV cannot be selected together in one package. Please choose either domestic ATS CV Writing or international Foreign Job CV.",
      });
      return;
    }

    if (serviceId === "cv" && selectedServices.includes("foreign-cv")) {
      setConflictAction({
        target: "cv",
        replace: "foreign-cv",
        message:
          "ATS CV Writing and Foreign Job CV cannot be selected together in one package. Please choose either domestic ATS CV Writing or international Foreign Job CV.",
      });
      return;
    }

    setConflictAction(null);
    setSelectedServices((prev) => [...prev, serviceId]);
  };

  const levelObj = levels.find((l) => l.id === level);
  const deliveryOption = deliveries.find((d) => d.id === delivery);
  const tierObj = tiers.find((t) => t.id === tier);

  // Computed Pricing for active country
  const serviceBreakdown = useMemo(() => {
    return activeServices.map((sId) => {
      const price = getCountryServicePrice(countryKey, tier, sId, level);
      const name = services[sId]?.name || sId;
      const tierLabel = tier === "signature" ? "Signature Tier" : "Essential Tier";
      const levelLabel = levelObj?.name || "";
      const description = `${name} (${levelLabel}) · ${tierLabel}`;
      return {
        serviceId: sId,
        name,
        price,
        description,
      };
    });
  }, [activeServices, countryKey, tier, level, levelObj]);

  const subtotal = useMemo(() => {
    return serviceBreakdown.reduce((sum, item) => sum + item.price, 0);
  }, [serviceBreakdown]);

  const deliveryFee = useMemo(() => {
    if (!deliveryOption || deliveryOption.surcharge <= 0) return 0;
    return Math.round(subtotal * deliveryOption.surcharge);
  }, [subtotal, deliveryOption]);

  const total = subtotal + deliveryFee;

  const packageTitle = useMemo(() => {
    if (activeServices.length === 1) {
      return services[activeServices[0]]?.name || "Single Service";
    }
    if (activeServices.length === 2) {
      return activeServices.map((s) => services[s]?.short || s).join(" + ");
    }
    if (
      activeServices.includes("cv") &&
      activeServices.includes("linkedin") &&
      activeServices.includes("cover-letter")
    ) {
      return "Full Career Pack";
    }
    return `${activeServices.length} Selected Services`;
  }, [activeServices]);

  const buildItemsPayload = () => {
    const payloadItems = serviceBreakdown.map((item) => ({
      description: item.description,
      quantity: 1,
      unit_price: item.price,
      total: item.price,
    }));

    if (deliveryFee > 0 && deliveryOption) {
      payloadItems.push({
        description: `${deliveryOption.name} Delivery Turnaround (${deliveryOption.note} express turnaround - ${deliveryOption.window})`,
        quantity: 1,
        unit_price: deliveryFee,
        total: deliveryFee,
      });
    }

    return payloadItems;
  };

  const handleApply = () => {
    onApplyPackage({
      countryKey,
      currency: country.currency,
      site: country.site,
      items: buildItemsPayload(),
    });
  };

  const handleAdd = () => {
    onAddPackage({
      countryKey,
      currency: country.currency,
      site: country.site,
      items: buildItemsPayload(),
    });
  };

  return (
    <div className="rounded-2xl border border-line bg-surface p-4 sm:p-6 shadow-sm mb-6">
      {/* Country Selection Pill Row */}
      <div className="mb-6 pb-4 border-b border-line">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent-deep block">
              Market & Currency
            </span>
            <h3 className="text-[16px] font-bold text-ink">
              Choose Country / Market Rates
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {INVOICE_COUNTRIES.map((c) => {
              const isSelected = c.key === countryKey;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCountryKey(c.key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-brand text-paper shadow-xs"
                      : "bg-sand/40 hover:bg-sand/70 text-ink-soft border border-line"
                  }`}
                >
                  <span>{c.flag}</span>
                  <span>{c.name.split(" ")[0]}</span>
                  <span className={isSelected ? "text-paper/80 text-[10.5px]" : "text-muted text-[10.5px]"}>
                    ({c.currency})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] items-start">
        {/* Left Column: 3-Step Selection */}
        <div className="space-y-4">
          {/* Tier Selector */}
          <div>
            <label className="text-[12px] font-bold uppercase tracking-wider text-muted block mb-2">
              Service Tier
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {tiers.map((t) => {
                const isSelected = t.id === tier;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTier(t.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "border-accent bg-accent-soft/60 shadow-[0_0_0_1px_var(--color-accent)] text-ink"
                        : "border-line bg-surface hover:border-line-strong text-ink"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[13.5px] font-bold text-ink">{t.name}</span>
                      {isSelected && (
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-brand text-paper text-[10px]">
                          ✓
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[11.5px] leading-snug text-muted">
                      {t.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 1: CAREER STAGE */}
          <div className="rounded-xl border border-line bg-surface overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
              className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-sand/30 transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-paper text-[11px] font-bold">
                  1
                </span>
                <div className="truncate">
                  <span className="text-[13.5px] font-bold text-ink block leading-tight">
                    Career Stage / Experience Level
                  </span>
                  <span className="text-[12px] font-medium text-accent-deep truncate block">
                    {levelObj?.name} · {levelObj?.hint}
                  </span>
                </div>
              </div>
              <span className="text-[11.5px] font-semibold text-muted">
                {activeStep === 1 ? "Close ▲" : "Change ▼"}
              </span>
            </button>

            {activeStep === 1 && (
              <div className="border-t border-line/60 p-3 bg-sand/15 space-y-2">
                {levels.map((l) => {
                  const isSelected = l.id === level;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => {
                        setLevel(l.id);
                        setActiveStep(2);
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-brand bg-brand-soft/80 ring-1 ring-brand text-ink"
                          : "border-line bg-surface hover:border-line-strong text-ink"
                      }`}
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#b9862f] block">
                          {l.eyebrow}
                        </span>
                        <span className="text-[13px] font-bold text-ink block leading-snug">
                          {l.name}
                        </span>
                        <span className="text-[11.5px] text-muted block">
                          {l.hint}
                        </span>
                      </div>
                      <span className="stat-number text-[12.5px] font-extrabold text-ink">
                        {formatCountryAmount(
                          getCountryServicePrice(countryKey, tier, "cv", l.id),
                          countryKey
                        )} (CV)
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* STEP 2: PACKAGE OPTIONS (MULTI-SELECT) */}
          <div className="rounded-xl border border-line bg-surface overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
              className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-sand/30 transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-paper text-[11px] font-bold">
                  2
                </span>
                <div className="truncate">
                  <span className="text-[13.5px] font-bold text-ink block leading-tight">
                    Package Options (Multi-select Services)
                  </span>
                  <span className="text-[12px] font-medium text-accent-deep truncate block">
                    {activeServices.length} service{activeServices.length > 1 ? "s" : ""} selected · {formatCountryAmount(subtotal, countryKey)}
                  </span>
                </div>
              </div>
              <span className="text-[11.5px] font-semibold text-muted">
                {activeStep === 2 ? "Close ▲" : "Change ▼"}
              </span>
            </button>

            {activeStep === 2 && (
              <div className="border-t border-line/60 p-3 bg-sand/15 space-y-2.5">
                <div className="flex items-center justify-between px-1">
                  <span className="text-[11.5px] text-muted">
                    Pick one or more services to bundle into this invoice:
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep bg-accent/10 border border-accent/25 px-2 py-0.5 rounded-full">
                    {activeServices.length} selected
                  </span>
                </div>

                {/* Mutual Exclusivity Guidance Notice */}
                {conflictAction && (
                  <div className="rounded-xl border border-brand/20 bg-brand-soft/50 p-3 shadow-xs">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[12.5px] font-bold text-ink block">
                          Cannot select both CV formats at once
                        </span>
                        <p className="mt-0.5 text-[11.5px] text-muted leading-relaxed">
                          {conflictAction.message}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedServices((prev) =>
                                prev.map((s) => (s === conflictAction.replace ? conflictAction.target : s))
                              );
                              setConflictAction(null);
                            }}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-brand hover:bg-brand-deep text-paper font-semibold text-[11.5px] cursor-pointer"
                          >
                            <span>Switch to {services[conflictAction.target]?.name}</span>
                            <span>→</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setConflictAction(null)}
                            className="px-2 py-1 rounded-lg text-muted hover:text-ink text-[11.5px] font-medium cursor-pointer"
                          >
                            Keep current
                          </button>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setConflictAction(null)}
                        className="text-muted hover:text-ink text-sm p-0.5 cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}

                {/* Services Checkboxes */}
                <div className="space-y-1.5">
                  {availableSingles.map((p) => {
                    const sId = p.includes[0] as ServiceId;
                    const isSelected = activeServices.includes(sId);
                    const name = services[sId]?.name || p.name;
                    const servicePrice = getCountryServicePrice(countryKey, tier, sId, level);
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
                        className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          isSelected
                            ? "border-brand bg-brand-soft/70 ring-1 ring-brand text-ink"
                            : isConflicting
                            ? "border-line bg-surface/80 hover:border-brand/40 text-ink"
                            : "border-line bg-surface hover:border-line-strong text-ink"
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
                              <svg viewBox="0 0 14 14" fill="none" className="h-3 w-3 stroke-current stroke-[2.5]">
                                <polyline points="2.5 7.5 5.5 10.5 11.5 3.5" />
                              </svg>
                            )}
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-[13px] font-bold text-ink block leading-tight">
                                {name}
                              </span>
                              {isConflicting && (
                                <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[9.5px] font-semibold bg-brand-soft/70 text-accent-deep border border-brand/15">
                                  Pick 1 CV type
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-muted block leading-tight mt-0.5">
                              {p.blurb}
                            </span>
                          </div>
                        </div>

                        <span className="stat-number text-[13px] font-extrabold text-ink shrink-0 ml-2">
                          {formatCountryAmount(servicePrice, countryKey)}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* STEP 3: TURNAROUND SPEED */}
          <div className="rounded-xl border border-line bg-surface overflow-hidden shadow-xs">
            <button
              type="button"
              onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
              className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-sand/30 transition-colors"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-paper text-[11px] font-bold">
                  3
                </span>
                <div className="truncate">
                  <span className="text-[13.5px] font-bold text-ink block leading-tight">
                    Delivery Speed & Turnaround
                  </span>
                  <span className="text-[12px] font-medium text-accent-deep truncate block">
                    {deliveryOption?.name} ({deliveryOption?.window}) · {deliveryOption?.note}
                  </span>
                </div>
              </div>
              <span className="text-[11.5px] font-semibold text-muted">
                {activeStep === 3 ? "Close ▲" : "Change ▼"}
              </span>
            </button>

            {activeStep === 3 && (
              <div className="border-t border-line/60 p-3 bg-sand/15 space-y-1.5">
                {deliveries.map((d) => {
                  const isSelected = d.id === delivery;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setDelivery(d.id)}
                      className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "border-brand bg-brand-soft/70 ring-1 ring-brand text-ink"
                          : "border-line bg-surface hover:border-line-strong text-ink"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                            isSelected ? "border-brand bg-brand text-paper" : "border-line-strong bg-paper"
                          }`}
                        >
                          {isSelected && (
                            <svg viewBox="0 0 12 12" className="h-1.5 w-1.5 fill-current">
                              <circle cx="6" cy="6" r="3" />
                            </svg>
                          )}
                        </span>
                        <div>
                          <span className="text-[13px] font-bold text-ink block leading-tight">
                            {d.name}
                          </span>
                          <span className="text-[11px] text-muted block">
                            {d.window}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`rounded px-2 py-0.5 text-[10.5px] font-bold ${
                          d.surcharge > 0
                            ? "bg-accent/15 text-accent-deep border border-accent/25"
                            : "bg-sand text-ink-soft"
                        }`}
                      >
                        {d.note}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Quote & Actions */}
        <div className="rounded-2xl border border-line bg-sand/35 p-5 shadow-xs">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#b9862f] block">
              {tierObj?.name} Tier · {country.name}
            </span>
            <h4 className="display mt-1 text-2xl font-bold text-ink">
              {packageTitle}
            </h4>
            <p className="text-[12px] text-muted mt-0.5">
              {levelObj?.hint}
            </p>
          </div>

          {/* Price display */}
          <div className="mt-4 pb-3 border-b border-line">
            <div className="display text-3xl font-black text-ink leading-tight">
              {formatCountryAmount(total, countryKey)}
            </div>
            <p className="text-[11.5px] text-muted mt-1">
              Combined price in {country.currency} ({country.name})
            </p>
          </div>

          {/* Itemized Service Breakdown */}
          <div className="mt-4 space-y-2 text-[12.5px]">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-muted block">
              Invoice Items Breakdown:
            </span>
            {serviceBreakdown.map((item) => (
              <div
                key={item.serviceId}
                className="flex items-center justify-between py-1 border-b border-line/40 text-ink"
              >
                <span className="font-normal text-ink-soft">{item.name}</span>
                <span className="font-bold text-ink">
                  {formatCountryAmount(item.price, countryKey)}
                </span>
              </div>
            ))}
            {deliveryFee > 0 && deliveryOption && (
              <div className="flex items-center justify-between py-1 border-b border-line/40 text-ink">
                <span className="font-normal text-ink-soft">
                  {deliveryOption.name} ({deliveryOption.note})
                </span>
                <span className="font-bold text-ink">
                  +{formatCountryAmount(deliveryFee, countryKey)}
                </span>
              </div>
            )}
            <div className="flex items-center justify-between py-1 text-[11.5px] text-muted">
              <span>{tier === "signature" ? "Signature support" : "Revision round"}</span>
              <span className="font-semibold text-emerald-600">
                {tier === "signature" ? "30 days included" : "1 round included"}
              </span>
            </div>
          </div>

          {/* Action Buttons to populate Invoice */}
          <div className="mt-6 pt-4 border-t border-line space-y-2">
            <button
              type="button"
              onClick={handleApply}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand hover:bg-brand-deep text-paper font-bold py-3 px-4 shadow-sm transition-all text-[14px] cursor-pointer"
            >
              <span>⚡ Replace Invoice with This Package</span>
            </button>
            <button
              type="button"
              onClick={handleAdd}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-surface hover:bg-sand/40 border border-line text-ink font-semibold py-2.5 px-4 transition-colors text-[13px] cursor-pointer"
            >
              <span>+ Add to Existing Line Items</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
