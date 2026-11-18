"use client";

import { useState, useMemo, useEffect } from "react";
import {
  INVOICE_COUNTRIES,
  getCountryServicePrice,
  formatCountryAmount,
  getInvoicePackagePresets,
  getCountryDeliveries,
  getCountryBundleDiscount,
  type InvoicePackagePreset,
} from "@/lib/invoicePackages";
import {
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
  onClose?: () => void;
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
  onClose,
  onApplyPackage,
  onAddPackage,
}: Props) {
  const [countryKey, setCountryKey] = useState<string>(initialCountry);
  const [mode, setMode] = useState<"configurator" | "presets">("configurator");
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

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const country = useMemo(() => {
    return INVOICE_COUNTRIES.find((c) => c.key === countryKey) || INVOICE_COUNTRIES[0];
  }, [countryKey]);

  // Dynamic turnaround delivery options based on market
  const countryDeliveries = useMemo(() => {
    return getCountryDeliveries(countryKey);
  }, [countryKey]);

  const deliveryOption = useMemo(() => {
    return countryDeliveries.find((d) => d.id === delivery) || countryDeliveries[0];
  }, [countryDeliveries, delivery]);

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
          "ATS Friendly CV and Foreign Job CV cannot be selected together in one package. Please choose either domestic ATS Friendly CV or international Foreign Job CV.",
      });
      return;
    }

    if (serviceId === "cv" && selectedServices.includes("foreign-cv")) {
      setConflictAction({
        target: "cv",
        replace: "foreign-cv",
        message:
          "ATS Friendly CV and Foreign Job CV cannot be selected together in one package. Please choose either domestic ATS Friendly CV or international Foreign Job CV.",
      });
      return;
    }

    setConflictAction(null);
    setSelectedServices((prev) => [...prev, serviceId]);
  };

  const levelObj = levels.find((l) => l.id === level);
  const tierObj = tiers.find((t) => t.id === tier);

  const getLevelDisplay = (lvlId: LevelId) => {
    if (countryKey === "com") {
      if (lvlId === "under-2") return { name: "Under 2 years (Graduates)", hint: "Students & Recent Graduates", eyebrow: "Entry Level" };
      if (lvlId === "3-to-9") return { name: "3 to 9 years (Professionals)", hint: "Mid-to-Senior Level Professionals", eyebrow: "Professional" };
      if (lvlId === "over-10") return { name: "10+ years (Senior / Leadership)", hint: "Senior Leaders, Directors & Executives", eyebrow: "Executive" };
    }
    const l = levels.find((item) => item.id === lvlId);
    return { name: l?.name || "", hint: l?.hint || "", eyebrow: l?.eyebrow || "" };
  };

  // Computed Base Pricing for active country
  const serviceBreakdown = useMemo(() => {
    return activeServices.map((sId) => {
      const price = getCountryServicePrice(countryKey, tier, sId, level);
      const name = countryKey === "com" && sId === "cv" ? "ATS Friendly CV" : services[sId]?.name || sId;
      const tierLabel = tier === "signature" ? "Signature Tier" : "Essential Tier";
      const lvlDisplay = getLevelDisplay(level);
      const description = `${name} (${lvlDisplay.name}) · ${tierLabel}`;
      return {
        serviceId: sId,
        name,
        price,
        description,
      };
    });
  }, [activeServices, countryKey, tier, level]);

  // Level 2: Combined List Price
  const listPrice = useMemo(() => {
    return serviceBreakdown.reduce((sum, item) => sum + item.price, 0);
  }, [serviceBreakdown]);

  // Level 2: Bundle Discount
  const { rate: bundleDiscountRate, percent: bundleDiscountPercent } = useMemo(() => {
    return getCountryBundleDiscount(countryKey, activeServices.length);
  }, [countryKey, activeServices.length]);

  const bundleSaving = useMemo(() => {
    if (bundleDiscountRate <= 0) return 0;
    return Math.round(listPrice * bundleDiscountRate);
  }, [listPrice, bundleDiscountRate]);

  // Subtotal After Discount
  const subtotal = listPrice - bundleSaving;

  // Level 3: Delivery Surcharge applied to Subtotal
  const deliveryFee = useMemo(() => {
    if (!deliveryOption || deliveryOption.surcharge <= 0) return 0;
    return Math.round(subtotal * deliveryOption.surcharge);
  }, [subtotal, deliveryOption]);

  // Final Total Due
  const total = subtotal + deliveryFee;

  const packageTitle = useMemo(() => {
    if (activeServices.length === 1) {
      if (countryKey === "com" && activeServices[0] === "cv") return "ATS Friendly CV";
      return services[activeServices[0]]?.name || "Single Service";
    }
    if (
      activeServices.length === 3 &&
      activeServices.includes("cv") &&
      activeServices.includes("linkedin") &&
      activeServices.includes("cover-letter")
    ) {
      return "Full Career Pack";
    }
    if (activeServices.length === 2) {
      return activeServices
        .map((s) => (countryKey === "com" && s === "cv" ? "ATS CV" : services[s]?.short || s))
        .join(" + ");
    }
    return `${activeServices.length} Selected Services`;
  }, [activeServices, countryKey]);

  const buildItemsPayload = () => {
    const payloadItems = serviceBreakdown.map((item) => ({
      description: item.description,
      quantity: 1,
      unit_price: item.price,
      total: item.price,
    }));

    if (bundleSaving > 0) {
      payloadItems.push({
        description: `Multi-Service Bundle Savings (${bundleDiscountPercent}% OFF bundle rate)`,
        quantity: 1,
        unit_price: -bundleSaving,
        total: -bundleSaving,
      });
    }

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
    if (onClose) onClose();
  };

  const handleAdd = () => {
    onAddPackage({
      countryKey,
      currency: country.currency,
      site: country.site,
      items: buildItemsPayload(),
    });
    if (onClose) onClose();
  };

  // Presets list for the second tab
  const countryPresets = useMemo(() => {
    return getInvoicePackagePresets(countryKey);
  }, [countryKey]);

  const presetCategories = useMemo(() => {
    const cats: Array<"Full Packages" | "Individual Services" | "Consultation & Add-ons"> = [];
    countryPresets.forEach((p) => {
      if (!cats.includes(p.category)) cats.push(p.category);
    });
    return cats;
  }, [countryPresets]);

  const handleApplyPreset = (preset: InvoicePackagePreset) => {
    onApplyPackage({
      countryKey,
      currency: country.currency,
      site: country.site,
      items: [
        {
          description: preset.description,
          quantity: 1,
          unit_price: preset.unitPrice,
          total: preset.unitPrice,
        },
      ],
    });
    if (onClose) onClose();
  };

  const handleAddPreset = (preset: InvoicePackagePreset) => {
    onAddPackage({
      countryKey,
      currency: country.currency,
      site: country.site,
      items: [
        {
          description: preset.description,
          quantity: 1,
          unit_price: preset.unitPrice,
          total: preset.unitPrice,
        },
      ],
    });
    if (onClose) onClose();
  };

  const activeLevelDisplay = getLevelDisplay(level);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto print:hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) onClose();
      }}
    >
      <div
        className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] my-auto animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-slate-200 bg-slate-50/90 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white text-[15px] font-bold shadow-xs">
              ✨
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-[15px] sm:text-[16px] font-bold text-slate-900 leading-tight">
                  Official Package & Pricing Configurator
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-200">
                  <span>{country.flag}</span>
                  <span>{country.label}</span>
                  <span className="text-slate-500 font-mono">({country.currency})</span>
                </span>
              </div>
              <p className="text-[11.5px] text-slate-500 mt-0.5 truncate">
                3-Tier Hierarchy: Career Stage Base Prices · Multi-Service Bundle Discounts · Turnaround Surcharges
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Mode Switcher */}
            <div className="hidden sm:flex items-center rounded-xl bg-slate-200/70 p-1 border border-slate-200 text-[11.5px] font-semibold text-slate-700">
              <button
                type="button"
                onClick={() => setMode("configurator")}
                className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                  mode === "configurator"
                    ? "bg-white text-blue-700 shadow-2xs font-bold"
                    : "hover:text-slate-900"
                }`}
              >
                ⚡ 3-Step Configurator
              </button>
              <button
                type="button"
                onClick={() => setMode("presets")}
                className={`rounded-lg px-2.5 py-1 transition-all cursor-pointer ${
                  mode === "presets"
                    ? "bg-white text-blue-700 shadow-2xs font-bold"
                    : "hover:text-slate-900"
                }`}
              >
                📦 Quick Presets
              </button>
            </div>

            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="h-8 w-8 flex items-center justify-center rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer text-base font-bold"
                title="Close modal (Esc)"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Country Selector Sub-Bar (LK, COM, UK only) */}
        <div className="px-5 sm:px-6 py-2.5 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Select Country / Market:
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {INVOICE_COUNTRIES.map((c) => {
              const isSelected = c.key === countryKey;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setCountryKey(c.key)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12px] font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-xs ring-2 ring-blue-600/30"
                      : "bg-white hover:bg-slate-200/60 text-slate-700 border border-slate-200/90"
                  }`}
                >
                  <span className="text-[13px]">{c.flag}</span>
                  <span>{c.label}</span>
                  <span className={isSelected ? "text-blue-100 text-[10.5px] font-mono" : "text-slate-400 text-[10.5px] font-mono"}>
                    ({c.currency})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Mode Switcher */}
        <div className="sm:hidden px-5 py-2 border-b border-slate-200 bg-white flex items-center justify-center">
          <div className="flex items-center rounded-xl bg-slate-100 p-1 border border-slate-200 text-[11.5px] font-semibold w-full">
            <button
              type="button"
              onClick={() => setMode("configurator")}
              className={`flex-1 text-center rounded-lg py-1 transition-all cursor-pointer ${
                mode === "configurator"
                  ? "bg-white text-blue-700 shadow-2xs font-bold"
                  : "text-slate-600"
              }`}
            >
              ⚡ 3-Step Configurator
            </button>
            <button
              type="button"
              onClick={() => setMode("presets")}
              className={`flex-1 text-center rounded-lg py-1 transition-all cursor-pointer ${
                mode === "presets"
                  ? "bg-white text-blue-700 shadow-2xs font-bold"
                  : "text-slate-600"
              }`}
            >
              📦 Quick Presets
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-slate-50/50">
          {mode === "configurator" ? (
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-start">
              {/* Left Column: 3 Steps */}
              <div className="space-y-4">
                {/* Service Tier (For LK / UK, or toggle on COM) */}
                {countryKey !== "com" && (
                  <div>
                    <label className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Service Tier
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {tiers.map((t) => {
                        const isSelected = t.id === tier;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setTier(t.id)}
                            className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600 shadow-xs text-slate-900"
                                : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[13.5px] font-bold text-slate-900">{t.name}</span>
                              {isSelected && (
                                <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-bold">
                                  ✓
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-[11.5px] leading-snug text-slate-500">
                              {t.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 1: CAREER STAGE */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
                    className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[11px] font-bold">
                        1
                      </span>
                      <div className="truncate">
                        <span className="text-[13.5px] font-bold text-slate-900 block leading-tight">
                          Hierarchy Level 1: Career Stage (Sets Base Price)
                        </span>
                        <span className="text-[12px] font-medium text-blue-700 truncate block mt-0.5">
                          {activeLevelDisplay.name} · {activeLevelDisplay.hint}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11.5px] font-semibold text-slate-500 shrink-0 ml-2">
                      {activeStep === 1 ? "Close ▲" : "Change ▼"}
                    </span>
                  </button>

                  {activeStep === 1 && (
                    <div className="border-t border-slate-100 p-3 bg-slate-50/60 space-y-2">
                      {levels.map((l) => {
                        const isSelected = l.id === level;
                        const lvlInfo = getLevelDisplay(l.id);
                        const cvPrice = getCountryServicePrice(countryKey, tier, "cv", l.id);

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
                                ? "border-blue-600 bg-blue-50/80 ring-1 ring-blue-600 text-slate-900 shadow-2xs"
                                : "border-slate-200 bg-white hover:border-slate-300 text-slate-800"
                            }`}
                          >
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
                                {lvlInfo.eyebrow}
                              </span>
                              <span className="text-[13px] font-bold text-slate-900 block leading-snug">
                                {lvlInfo.name}
                              </span>
                              <span className="text-[11.5px] text-slate-500 block">
                                {lvlInfo.hint}
                              </span>
                            </div>
                            <span className="text-[13px] font-extrabold text-slate-900 font-mono shrink-0 ml-3">
                              {formatCountryAmount(cvPrice, countryKey)}{" "}
                              <span className="text-[10.5px] font-normal text-slate-400 font-sans">(CV)</span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* STEP 2: PACKAGE OPTIONS (MULTI-SELECT & BUNDLE DISCOUNT) */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
                    className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[11px] font-bold">
                        2
                      </span>
                      <div className="truncate">
                        <span className="text-[13.5px] font-bold text-slate-900 block leading-tight">
                          Hierarchy Level 2: Services & Bundle Discount
                        </span>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <span className="text-[12px] font-medium text-blue-700">
                            {activeServices.length} service{activeServices.length > 1 ? "s" : ""} selected · Subtotal: {formatCountryAmount(subtotal, countryKey)}
                          </span>
                          {bundleSaving > 0 && (
                            <span className="inline-flex items-center rounded px-1.5 py-0.2 text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                              {bundleDiscountPercent}% OFF applied (-{formatCountryAmount(bundleSaving, countryKey)})
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11.5px] font-semibold text-slate-500 shrink-0 ml-2">
                      {activeStep === 2 ? "Close ▲" : "Change ▼"}
                    </span>
                  </button>

                  {activeStep === 2 && (
                    <div className="border-t border-slate-100 p-3 bg-slate-50/60 space-y-2.5">
                      <div className="flex items-center justify-between px-1 flex-wrap gap-1">
                        <span className="text-[11.5px] text-slate-500">
                          {countryKey === "com"
                            ? "Bundle Discounts: 2 Services = 20% OFF · 3 Services = 30% OFF"
                            : "Select services to include in this invoice package:"}
                        </span>
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-blue-700 bg-blue-100 border border-blue-200 px-2 py-0.5 rounded-full">
                          {activeServices.length} selected
                        </span>
                      </div>

                      {/* Mutual Exclusivity Guidance Notice */}
                      {conflictAction && (
                        <div className="rounded-xl border border-amber-300 bg-amber-50 p-3 shadow-xs">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-amber-600 font-bold">⚠️</span>
                                <span className="text-[12.5px] font-bold text-slate-900">
                                  Cannot select both CV formats at once
                                </span>
                              </div>
                              <p className="mt-1 text-[11.5px] text-slate-600 leading-relaxed">
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
                                  className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold text-[11.5px] cursor-pointer shadow-2xs"
                                >
                                  <span>Switch to {services[conflictAction.target]?.name}</span>
                                  <span>→</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setConflictAction(null)}
                                  className="px-2.5 py-1 rounded-lg text-slate-600 hover:text-slate-900 text-[11.5px] font-medium cursor-pointer"
                                >
                                  Keep current selection
                                </button>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setConflictAction(null)}
                              className="text-slate-400 hover:text-slate-700 text-sm p-0.5 cursor-pointer"
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
                          const name = countryKey === "com" && sId === "cv" ? "ATS Friendly CV" : services[sId]?.name || p.name;
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
                              className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                                isSelected
                                  ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600 text-slate-900 shadow-2xs"
                                  : isConflicting
                                  ? "border-slate-200 bg-white/70 hover:border-blue-300 text-slate-800"
                                  : "border-slate-200 bg-white hover:border-slate-300 text-slate-800"
                              }`}
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <span
                                  className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                                    isSelected
                                      ? "border-blue-600 bg-blue-600 text-white shadow-xs"
                                      : isConflicting
                                      ? "border-slate-300 bg-slate-100"
                                      : "border-slate-300 bg-white"
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
                                    <span className="text-[13px] font-bold text-slate-900 block leading-tight">
                                      {name}
                                    </span>
                                    {isConflicting && (
                                      <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-800 border border-amber-200">
                                        Choose 1 CV type
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-[11.5px] text-slate-500 block leading-tight mt-0.5">
                                    {p.blurb}
                                  </span>
                                </div>
                              </div>

                              <span className="text-[13px] font-extrabold text-slate-900 font-mono shrink-0 ml-3">
                                {formatCountryAmount(servicePrice, countryKey)}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* STEP 3: TURNAROUND SPEED & SURCHARGE */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
                    className="w-full flex items-center justify-between p-3.5 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[11px] font-bold">
                        3
                      </span>
                      <div className="truncate">
                        <span className="text-[13.5px] font-bold text-slate-900 block leading-tight">
                          Hierarchy Level 3: Delivery Speed Surcharge
                        </span>
                        <span className="text-[12px] font-medium text-blue-700 truncate block mt-0.5">
                          {deliveryOption?.name} ({deliveryOption?.window}) · {deliveryOption?.note}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11.5px] font-semibold text-slate-500 shrink-0 ml-2">
                      {activeStep === 3 ? "Close ▲" : "Change ▼"}
                    </span>
                  </button>

                  {activeStep === 3 && (
                    <div className="border-t border-slate-100 p-3 bg-slate-50/60 space-y-2">
                      <p className="text-[11.5px] text-slate-500 px-1 pb-1">
                        Surcharge percentage applies to the discounted Subtotal:
                      </p>
                      {countryDeliveries.map((d) => {
                        const isSelected = d.id === delivery;
                        return (
                          <button
                            key={d.id}
                            type="button"
                            onClick={() => setDelivery(d.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              isSelected
                                ? "border-blue-600 bg-blue-50/70 ring-1 ring-blue-600 text-slate-900 shadow-2xs"
                                : "border-slate-200 bg-white hover:border-slate-300 text-slate-800"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border ${
                                  isSelected ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 bg-white"
                                }`}
                              >
                                {isSelected && (
                                  <svg viewBox="0 0 12 12" className="h-1.5 w-1.5 fill-current">
                                    <circle cx="6" cy="6" r="3" />
                                  </svg>
                                )}
                              </span>
                              <div>
                                <span className="text-[13px] font-bold text-slate-900 block leading-tight">
                                  {d.name}
                                </span>
                                <span className="text-[11.5px] text-slate-500 block">
                                  {d.window}
                                </span>
                              </div>
                            </div>

                            <span
                              className={`rounded-lg px-2.5 py-1 text-[11px] font-bold ${
                                d.surcharge > 0
                                  ? "bg-amber-100 text-amber-800 border border-amber-200"
                                  : "bg-slate-100 text-slate-600"
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

              {/* Right Column: Live Quote Card (Sticky) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sticky top-2">
                <div className="pb-3 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                      {countryKey === "com" ? "Official US / Global Rates" : `${tierObj?.name} Tier`} · {country.name}
                    </span>
                    <span className="text-base">{country.flag}</span>
                  </div>
                  <h4 className="text-[19px] sm:text-[21px] font-bold text-slate-950 mt-1 leading-snug">
                    {packageTitle}
                  </h4>
                  <p className="text-[12px] text-slate-500 mt-0.5">
                    {activeLevelDisplay.name}
                  </p>
                </div>

                {/* Price display with Strikethrough & Savings Badge */}
                <div className="py-4 border-b border-slate-100">
                  <div className="flex items-baseline gap-2.5 flex-wrap">
                    <div className="text-3xl font-black text-slate-950 font-mono tracking-tight leading-tight">
                      {formatCountryAmount(total, countryKey)}
                    </div>
                    {bundleSaving > 0 && (
                      <div className="text-base font-semibold text-slate-400 line-through font-mono">
                        {formatCountryAmount(listPrice + deliveryFee, countryKey)}
                      </div>
                    )}
                  </div>
                  {bundleSaving > 0 && (
                    <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <span>🎉 You save {formatCountryAmount(bundleSaving, countryKey)} ({bundleDiscountPercent}% OFF bundle)</span>
                    </div>
                  )}
                  <p className="text-[11.5px] text-slate-500 mt-1">
                    Combined total in {country.currency} ({country.label})
                  </p>
                </div>

                {/* Itemized Service Breakdown */}
                <div className="py-3.5 space-y-2 text-[12.5px] border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Invoice Items Breakdown:
                  </span>
                  {serviceBreakdown.map((item) => (
                    <div
                      key={item.serviceId}
                      className="flex items-center justify-between py-1 text-slate-700"
                    >
                      <span className="text-slate-600">{item.name}</span>
                      <span className="font-bold text-slate-950 font-mono">
                        {formatCountryAmount(item.price, countryKey)}
                      </span>
                    </div>
                  ))}

                  {/* Bundle Savings Row */}
                  {bundleSaving > 0 && (
                    <div className="flex items-center justify-between py-1 text-emerald-700 bg-emerald-50/70 px-2 rounded-lg border border-emerald-200/60 font-semibold text-[12px]">
                      <span>Bundle Savings ({bundleDiscountPercent}% OFF)</span>
                      <span className="font-mono">-{formatCountryAmount(bundleSaving, countryKey)}</span>
                    </div>
                  )}

                  {/* Subtotal after discount */}
                  {bundleSaving > 0 && (
                    <div className="flex items-center justify-between py-1 text-slate-900 font-semibold border-t border-slate-100 pt-1.5">
                      <span>Subtotal After Discount</span>
                      <span className="font-mono">{formatCountryAmount(subtotal, countryKey)}</span>
                    </div>
                  )}

                  {/* Delivery Surcharge Row */}
                  {deliveryFee > 0 && deliveryOption && (
                    <div className="flex items-center justify-between py-1 text-slate-700">
                      <span className="text-slate-600">
                        {deliveryOption.name} Delivery ({deliveryOption.note} on Subtotal)
                      </span>
                      <span className="font-bold text-amber-700 font-mono">
                        +{formatCountryAmount(deliveryFee, countryKey)}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1 text-[11.5px] text-slate-500">
                    <span>Turnaround speed</span>
                    <span className="font-semibold text-slate-800">
                      {deliveryOption?.window}
                    </span>
                  </div>
                </div>

                {/* Action Buttons to populate Invoice */}
                <div className="pt-4 space-y-2">
                  <button
                    type="button"
                    onClick={handleApply}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 shadow-sm transition-all text-[13.5px] cursor-pointer"
                  >
                    <span>⚡ Replace Invoice Items</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleAdd}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold py-2.5 px-4 transition-colors text-[13px] shadow-2xs cursor-pointer"
                  >
                    <span>+ Add to Existing Items</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Presets Mode: Browse ready packages */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-[15px] font-bold text-slate-900">
                    Ready Package Presets for {country.name} ({country.currency})
                  </h4>
                  <p className="text-[12px] text-slate-500">
                    Click any package to immediately insert it into the invoice
                  </p>
                </div>
              </div>

              {presetCategories.map((cat) => (
                <div key={cat} className="space-y-3">
                  <h5 className="text-[12px] font-bold uppercase tracking-wider text-blue-700 border-b border-blue-100 pb-1.5">
                    {cat}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {countryPresets
                      .filter((p) => p.category === cat)
                      .map((preset) => (
                        <div
                          key={preset.id}
                          className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between gap-3"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <span className="text-[13.5px] font-bold text-slate-900 block leading-snug">
                                  {preset.name}
                                </span>
                                {(preset.tier || preset.level) && (
                                  <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                                    {preset.tier && `${preset.tier} Tier · `}
                                    {preset.level}
                                  </span>
                                )}
                              </div>
                              <span className="text-[14px] font-black font-mono text-slate-950 shrink-0">
                                {preset.currency} {preset.unitPrice.toLocaleString()}
                              </span>
                            </div>
                            <p className="mt-2 text-[11.5px] text-slate-600 leading-relaxed italic">
                              "{preset.description}"
                            </p>
                          </div>

                          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                            <button
                              type="button"
                              onClick={() => handleApplyPreset(preset)}
                              className="flex-1 py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-bold shadow-2xs transition-colors cursor-pointer text-center"
                            >
                              ⚡ Replace Invoice
                            </button>
                            <button
                              type="button"
                              onClick={() => handleAddPreset(preset)}
                              className="flex-1 py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[12px] font-semibold transition-colors cursor-pointer text-center"
                            >
                              + Add Item
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Sticky Footer */}
        <div className="px-5 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[12px] text-slate-600">
            <span className="font-semibold text-slate-900">Current Selection:</span>
            <span>
              {packageTitle} ({activeLevelDisplay.name}) · {deliveryOption?.name}
            </span>
            <span className="text-slate-400">|</span>
            <span className="font-bold text-slate-900 font-mono">
              Total: {formatCountryAmount(total, countryKey)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 text-[12.5px] font-semibold transition-colors cursor-pointer"
              >
                Cancel
              </button>
            )}
            <button
              type="button"
              onClick={handleApply}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[12.5px] font-bold shadow-xs transition-colors cursor-pointer"
            >
              Apply to Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
