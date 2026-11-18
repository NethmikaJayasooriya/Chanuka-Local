"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { TierSelector } from "./TierSelector";
import { useRouter } from "next/navigation";
import { AUTH_ON, ensureAccount } from "@/lib/auth";
import { createClient } from "@/lib/supabase/client";
import { GoogleButton } from "@/components/account/GoogleButton";
import {
  tiers,
  type TierId,
  deliveries,
  levels,
  packages,
  resolvePackage,
  getPackageDisplayName,
  quote,
  services,
  formatLKR,
  usd,
  TIER_PRICES,
  type Package,
  type ServiceId,
  type DeliveryId,
  type LevelId,
} from "@/lib/pricing";
import { site, emailLink } from "@/lib/site";
import { MailIcon } from "./CountryFlags";

type Details = {
  name: string;
  email: string;
  password: string;
  confirm: string;
  whatsapp: string;
  targetRole: string;
  targetCountry: string;
  deadline: string;
  notes: string;
};

const emptyDetails: Details = {
  name: "",
  email: "",
  password: "",
  confirm: "",
  whatsapp: "",
  targetRole: "",
  targetCountry: "",
  deadline: "",
  notes: "",
};

const steps = ["Package", "Your details", "Career brief", "Review"] as const;

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-surface px-3.5 sm:px-4 py-2.5 sm:py-3 text-[16px] sm:text-[14.5px] text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none";
const label = "block text-[12.5px] sm:text-[13px] font-semibold text-ink-soft";

const optionBase =
  "w-full rounded-xl border px-3.5 sm:px-4 py-3 sm:py-3.5 text-left transition-all duration-150 cursor-pointer";
const optionOn = "border-accent bg-accent-soft/60 shadow-[0_0_0_1px_var(--color-accent)]";
const optionOff = "border-line bg-surface hover:border-line-strong";

export function OrderWizard({
  initialTier = "essential",
  initialPackage,
  initialLevel,
  initialDelivery,
  initialCountry = "",
  initialRole = "",
  preconfigured = false,
}: {
  initialTier?: TierId;
  initialPackage: string;
  initialLevel: LevelId;
  initialDelivery: DeliveryId;
  initialCountry?: string;
  initialRole?: string;
  preconfigured?: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [signedIn, setSignedIn] = useState<boolean | null>(AUTH_ON ? null : false);
  const [sessionEmail, setSessionEmail] = useState("");

  useEffect(() => {
    if (!AUTH_ON) return;
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setSignedIn(!!data.user);
      if (data.user?.email) {
        setSessionEmail(data.user.email);
        setDetails((d) => ({ ...d, email: d.email || data.user!.email! }));
      }
    });
  }, []);
  // If the visitor already picked their package on the home page, open the
  // wizard on "Your details" so they are not asked to choose it all over
  // again. The package stays editable through the "Change" link below.
  const [step, setStep] = useState(preconfigured ? 1 : 0);

  useEffect(() => {
    if (preconfigured || (typeof window !== "undefined" && window.location.hash === "#order-form")) {
      const el = document.getElementById("order-form");
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
        return () => clearTimeout(timer);
      }
    }
  }, [preconfigured]);
  const initialServices = useMemo<ServiceId[]>(() => {
    const resolved = resolvePackage(initialPackage);
    if (resolved && resolved.includes && resolved.includes.length > 0) {
      return resolved.includes.filter((s) => s !== "cv-review");
    }
    return ["cv"];
  }, [initialPackage]);

  const [selectedServices, setSelectedServices] = useState<ServiceId[]>(initialServices);
  const [tier, setTier] = useState<TierId>(initialTier);
  const [level, setLevel] = useState<LevelId>(initialLevel);
  const [delivery, setDelivery] = useState<DeliveryId>(initialDelivery);
  const [conflictAction, setConflictAction] = useState<{
    target: ServiceId;
    replace: ServiceId;
    message: string;
  } | null>(null);
  const [details, setDetails] = useState<Details>({
    ...emptyDetails,
    targetCountry: initialCountry,
    targetRole: initialRole,
  });

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
  const q = useMemo(() => quote(pkg, level, delivery, tier), [pkg, level, delivery, tier]);
  const packageName = `${tiers.find((item) => item.id === tier)!.name} · ${getPackageDisplayName(pkg, level)}`;
  const levelName = levels.find((l) => l.id === level)?.name ?? "";
  const deliveryOption = deliveries.find((d) => d.id === delivery);

  const set = (k: keyof Details) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setDetails((d) => ({ ...d, [k]: e.target.value }));

  const needsPassword = AUTH_ON && signedIn === false;
  const detailsValid =
    details.name.trim().length > 1 &&
    details.email.includes("@") &&
    (!needsPassword || (details.password.length >= 8 && details.password === details.confirm));
  const briefValid = details.targetRole.trim().length > 1 && details.targetCountry.trim().length > 1;

  const canAdvance = step === 0 ? true : step === 1 ? detailsValid : step === 2 ? briefValid : true;

  const summaryText = `Order request

Package: ${packageName}
Experience: ${levelName}
Delivery: ${deliveryOption?.name} (${deliveryOption?.window})
Total: ${usd(q.total)}

Name: ${details.name}
Email: ${details.email || "-"}
Phone: ${details.whatsapp || "-"}
Target role: ${details.targetRole}
Target market: ${details.targetCountry}
Deadline: ${details.deadline || "-"}
Notes: ${details.notes || "-"}`;

  const checkoutHref = `/checkout?package=${pkg.id}&level=${level}&delivery=${delivery}&tier=${tier}`;

  // With accounts on: create/sign in the account, save the order to the
  // database, then go to checkout for that order. Without Supabase the
  // wizard falls back to the query-string checkout.
  const placeOrder = async () => {
    if (busy) return;
    setError("");
    setBusy(true);
    try {
      if (!signedIn) {
        const account = await ensureAccount(details.email, details.password, details.name, details.whatsapp);
        if (!account.ok) {
          setError(account.message);
          setBusy(false);
          return;
        }
      }
      const res = await fetch("/api/orders/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package_id: pkg.id,
          tier_id: tier,
          level_id: level,
          delivery_id: delivery,
          name: details.name,
          email: details.email,
          phone: details.whatsapp,
          target_role: details.targetRole,
          target_country: details.targetCountry,
          deadline: details.deadline,
          notes: details.notes,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.id) {
        setError("Could not place your order. Please try again.");
        setBusy(false);
        return;
      }
      router.push(`/checkout?order=${data.id}`);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
      setBusy(false);
    }
  };

  return (
    <div id="order-form" className="scroll-mt-16 sm:scroll-mt-20 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-start">
      <div className="card p-4 sm:p-6 sm:p-8 shadow-xs">
        {/* Mobile Quick Order Pill */}
        <div className="lg:hidden mb-5 rounded-xl border border-brand/20 bg-brand-soft/40 px-3.5 py-2.5 flex items-center justify-between">
          <div className="min-w-0 pr-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep block">Selected Package</span>
            <span className="text-[13px] font-bold text-ink truncate block">{packageName}</span>
          </div>
          <span className="stat-number text-[20px] font-extrabold text-ink shrink-0">{formatLKR(q.total)}</span>
        </div>

        {/* Responsive Step Progress */}
        <div className="border-b border-line pb-4 sm:pb-5">
          {/* Mobile: compact progress bar */}
          <div className="sm:hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11.5px] font-bold text-accent-deep uppercase tracking-wider">
                Step 0{step + 1} of 04
              </span>
              <span className="text-[13px] font-bold text-ink">
                {steps[step]}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-sand overflow-hidden">
              <div
                className="h-full bg-brand transition-all duration-300 rounded-full"
                style={{ width: `${((step + 1) / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Desktop: Horizontal numbered list */}
          <ol className="hidden sm:flex flex-wrap gap-x-6 gap-y-2">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  className={`num-badge h-6 px-2 rounded-md text-[11px] font-bold ${
                    i <= step ? "bg-brand text-paper" : "bg-sand text-muted"
                  }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`text-[13px] ${i === step ? "font-semibold text-ink" : "text-muted"}`}
                >
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="pt-5 sm:pt-7">
          {/* Selected-package recap with a quick way back to change it */}
          {step > 0 && (
            <div className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-line bg-sand/30 px-3.5 py-2.5">
              <div className="min-w-0">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-muted">Your package</span>
                <span className="block truncate text-[13px] font-semibold text-ink">
                  {packageName} · {levelName} · {deliveryOption?.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="shrink-0 rounded-full border border-line-strong px-3.5 py-1.5 text-[12px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                Change
              </button>
            </div>
          )}

          {/* 1. Package */}
          {step === 0 && (
            <div className="space-y-6 sm:space-y-8">
              <TierSelector value={tier} onChange={setTier} />

              {/* Multi-select Services */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-[14.5px] sm:text-[15px] font-semibold text-ink">Select your services</h2>
                    <p className="mt-0.5 text-[12.5px] text-muted">Select one or more services to customize your package:</p>
                  </div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-accent-deep bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-full shrink-0">
                    {activeServices.length} selected
                  </span>
                </div>

                {/* Conflict Guidance Notice */}
                {conflictAction && (
                  <div className="rounded-2xl border border-brand/20 bg-brand-soft/50 p-3.5 sm:p-4 shadow-xs">
                    <div className="flex items-start justify-between gap-2.5">
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand mt-0.5">
                          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 3.5a1 1 0 110 2 1 1 0 010-2zM6.75 8a.75.75 0 01.75-.75h1a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-2.75h-.25A.75.75 0 016.75 8z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <span className="text-[13px] font-bold text-ink block">
                            Cannot select both CV formats at once
                          </span>
                          <p className="mt-0.5 text-[12px] text-muted leading-relaxed">
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
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand hover:bg-brand-deep text-paper font-semibold text-[12px] transition-colors cursor-pointer shadow-xs"
                            >
                              <span>Switch to {services[conflictAction.target]?.name || "selected CV"}</span>
                              <span>→</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setConflictAction(null)}
                              className="px-2.5 py-1.5 rounded-xl text-muted hover:text-ink text-[12px] font-medium transition-colors cursor-pointer"
                            >
                              Keep current
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setConflictAction(null)}
                        className="text-muted hover:text-ink text-sm p-1 -mt-0.5 shrink-0 cursor-pointer transition-colors"
                        aria-label="Close notice"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid gap-2.5 sm:grid-cols-2">
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
                        className={`w-full rounded-xl border p-3.5 sm:p-4 text-left transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? "border-accent bg-accent-soft/60 shadow-[0_0_0_1px_var(--color-accent)] text-ink"
                            : isConflicting
                            ? "border-line bg-surface/80 hover:border-brand/40 text-ink"
                            : "border-line bg-surface hover:border-line-strong text-ink"
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
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
                                  <span className="text-[14px] font-semibold text-ink leading-snug">
                                    {name}
                                  </span>
                                  {isConflicting && (
                                    <span className="inline-flex items-center rounded px-1.5 py-0.5 text-[9.5px] font-semibold bg-brand-soft/70 text-accent-deep border border-brand/15">
                                      Pick 1 CV type
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <span className="stat-number text-[13.5px] font-extrabold text-ink shrink-0">
                              {formatLKR(servicePrice)}
                            </span>
                          </div>
                          <p className="mt-2 text-[12px] leading-snug text-muted pl-7">
                            {p.blurb}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="text-[15px] font-semibold text-ink">Experience level</h2>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                  {levels.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      aria-pressed={l.id === level}
                      onClick={() => setLevel(l.id)}
                      className={`${optionBase} ${l.id === level ? optionOn : optionOff}`}
                    >
                      <span className="text-[14px] font-semibold text-ink">{l.name}</span>
                      <p className="mt-1 text-[12.5px] leading-snug text-muted">{l.hint}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[15px] font-semibold text-ink">Delivery speed</h2>
                <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
                  {deliveries.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      aria-pressed={d.id === delivery}
                      onClick={() => setDelivery(d.id)}
                      className={`${optionBase} ${d.id === delivery ? optionOn : optionOff}`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[14px] font-semibold text-ink">{d.name}</span>
                        {d.note && (
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                              d.surcharge > 0
                                ? "bg-accent/15 text-accent-deep border border-accent/25"
                                : "bg-sand text-ink-soft"
                            }`}
                          >
                            {d.note}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[12.5px] text-muted">{d.window}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. Details */}
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-[15px] font-semibold text-ink">Your details</h2>
              <p className="text-[13.5px] text-muted">
                {AUTH_ON
                  ? "This creates your account, so you can track your order, upload your CV and download your final documents from your dashboard."
                  : "Use the email associated with your account to track this order and access your documents from your dashboard."}
              </p>
              <div>
                <label className={label} htmlFor="name">
                  Full name
                </label>
                <input id="name" autoComplete="name" className={field} value={details.name} onChange={set("name")} placeholder="As it should appear on the CV" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="email">
                    Email address (required)
                  </label>
                  <input id="email" type="email" autoComplete="email" className={field} value={details.email} onChange={set("email")} placeholder="you@example.com" />
                </div>
                <div>
                  <label className={label} htmlFor="whatsapp">
                    Phone number (optional)
                  </label>
                  <input id="whatsapp" autoComplete="tel" className={field} value={details.whatsapp} onChange={set("whatsapp")} placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              {AUTH_ON && signedIn === true && (
                <div className="rounded-xl border border-brand/20 bg-brand-soft/30 p-4 sm:p-5">
                  <p className="text-[13px] font-semibold text-ink">Signed in{sessionEmail ? ` as ${sessionEmail}` : ""}</p>
                  <p className="mt-1 text-[12.5px] text-muted">This order links to your account. You can track it and download your documents from your dashboard.</p>
                </div>
              )}
              {needsPassword && (
                <div className="rounded-xl border border-line bg-sand/30 p-4 sm:p-5">
                  <GoogleButton
                    next={`/order?package=${pkg.id}&level=${level}&delivery=${delivery}&tier=${tier}`}
                    label="Continue with Google"
                  />
                  <div className="my-4 flex items-center gap-3 text-[12px] text-muted">
                    <span className="h-px flex-1 bg-line" />
                    or set a password
                    <span className="h-px flex-1 bg-line" />
                  </div>
                  <p className="text-[12.5px] font-semibold text-ink">Create a password for your account</p>
                  <p className="mt-1 text-[12.5px] text-muted">You will use your email and this password to sign in and track your order.</p>
                  <div className="mt-3 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="password">Password</label>
                      <input id="password" type="password" autoComplete="new-password" className={field} value={details.password} onChange={set("password")} placeholder="At least 8 characters" />
                    </div>
                    <div>
                      <label className={label} htmlFor="confirm">Confirm password</label>
                      <input id="confirm" type="password" autoComplete="new-password" className={field} value={details.confirm} onChange={set("confirm")} placeholder="Repeat your password" />
                    </div>
                  </div>
                  {details.password.length > 0 && details.password.length < 8 && (
                    <p className="mt-2 text-[12px] text-red-600">Use at least 8 characters.</p>
                  )}
                  {details.confirm.length > 0 && details.confirm !== details.password && (
                    <p className="mt-2 text-[12px] text-red-600">Passwords do not match.</p>
                  )}
                  <p className="mt-3 text-[12px] text-muted">
                    Already ordered before? Just use the same email and password.{" "}
                    <Link href={`/login?next=${encodeURIComponent(`/order?package=${pkg.id}&level=${level}&delivery=${delivery}&tier=${tier}`)}`} className="font-semibold text-brand">Sign in instead</Link>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 3. Brief */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-[15px] font-semibold text-ink">Career brief</h2>
              <p className="text-[13.5px] text-muted">
                This is what the document is written for. Your current CV is uploaded after
                payment.
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={label} htmlFor="role">
                    Target role
                  </label>
                  <input id="role" className={field} value={details.targetRole} onChange={set("targetRole")} placeholder="Software Engineer" />
                </div>
                <div>
                  <label className={label} htmlFor="country">
                    Target market
                  </label>
                  <input id="country" className={field} value={details.targetCountry} onChange={set("targetCountry")} placeholder="United Kingdom" />
                </div>
              </div>
              <div>
                <label className={label} htmlFor="deadline">
                  Deadline, if you have one
                </label>
                <input id="deadline" className={field} value={details.deadline} onChange={set("deadline")} placeholder="Advert closes 30 September" />
              </div>
              <div>
                <label className={label} htmlFor="notes">
                  Anything I should know
                </label>
                <textarea id="notes" rows={4} className={field} value={details.notes} onChange={set("notes")} placeholder="Career gap, industry change, specific employer, anything worth flagging" />
              </div>
            </div>
          )}

          {/* 4. Review */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-[15px] font-semibold text-ink">Review your order</h2>
              <dl className="divide-y divide-line border-y border-line text-[14px]">
                {[
                  ["Package", pkg.name],
                  ["Experience", levelName],
                  ["Delivery", `${deliveryOption?.name} (${deliveryOption?.window})`],
                  ["Name", details.name || "-"],
                  ["Email", details.email || "-"],
                  ["Phone", details.whatsapp || "-"],
                  ["Target role", details.targetRole || "-"],
                  ["Target market", details.targetCountry || "-"],
                  ["Deadline", details.deadline || "-"],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6 py-2.5 sm:py-3">
                    <dt className="text-[12.5px] sm:text-[13.5px] text-muted">{k}</dt>
                    <dd className="sm:text-right text-[13.5px] sm:text-[14px] font-medium text-ink break-words">{v}</dd>
                  </div>
                ))}
              </dl>

              <p className="text-[13px] leading-relaxed text-muted">
                On the next screen you pay the total shown. Your current CV is uploaded
                straight after, and the delivery clock starts once that brief is complete.
              </p>

              {error && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13.5px] text-red-700">{error}</p>
              )}

              {AUTH_ON ? (
                <button
                  type="button"
                  onClick={placeOrder}
                  disabled={busy}
                  className="block w-full rounded-full bg-brand px-6 py-3.5 text-center text-[15px] font-semibold text-paper transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {busy ? "Placing your order..." : "Place order and continue to payment"}
                </button>
              ) : (
                <Link
                  href={checkoutHref}
                  className="block rounded-full bg-brand px-6 py-3.5 text-center text-[15px] font-semibold text-paper transition-colors hover:bg-brand-deep"
                >
                  Continue to checkout
                </Link>
              )}

              <a
                href={emailLink(`Order Request Inquiry: ${packageName} (${levelName})`, summaryText)}
                className="flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-center text-[14.5px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <MailIcon className="h-4 w-4 text-accent" />
                <span>Email this order inquiry to Chanuka</span>
              </a>
            </div>
          )}
        </div>

        {/* Nav */}
        {step < 3 && (
          <div className="mt-8 flex items-center justify-between border-t border-line pt-6">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="text-[14px] font-medium text-muted transition-colors hover:text-ink disabled:opacity-40"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(3, s + 1))}
              disabled={!canAdvance}
              className="rounded-full bg-brand px-7 py-3 text-[14.5px] font-semibold text-paper transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue
            </button>
          </div>
        )}
      </div>

      {/* Summary */}
      <aside className="card sticky top-20 overflow-hidden">
        <div className="border-b border-line bg-sand/50 px-6 py-5">
          <p className="eyebrow">Your order</p>
          <p className="display mt-2 text-[21px] leading-tight text-ink">{packageName}</p>
          <p className="mt-1.5 text-[13px] text-muted">
            {levelName} · {deliveryOption?.name} ({deliveryOption?.window})
          </p>
        </div>
        <div className="px-6 py-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted block mb-3">
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
            <div className="flex items-center justify-between py-1 text-[12px] text-muted">
              <span>{tier === "signature" ? "Signature support" : "Revision round"}</span>
              <span className="font-semibold text-emerald-600">
                {tier === "signature" ? "30 days included" : "1 round included"}
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
            <span className="text-[13px] font-medium text-muted">Total</span>
            <span className="stat-number text-[30px] font-black leading-none text-ink">{formatLKR(q.total)}</span>
          </div>
          <p className="mt-3 text-center text-[12px] leading-relaxed text-muted">
            Prices in LKR. Nothing is added at checkout.
          </p>
        </div>
      </aside>
    </div>
  );
}
