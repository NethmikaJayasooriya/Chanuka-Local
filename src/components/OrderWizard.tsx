"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AUTH_ON, ensureAccount } from "@/lib/auth";
import { createClient } from "@/lib/supabase/client";
import { GoogleButton } from "@/components/account/GoogleButton";
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
  initialPackage,
  initialLevel,
  initialDelivery,
  initialCountry = "",
  initialRole = "",
  preconfigured = false,
}: {
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
  const [packageId, setPackageId] = useState(initialPackage);
  const [level, setLevel] = useState<LevelId>(initialLevel);
  const [delivery, setDelivery] = useState<DeliveryId>(initialDelivery);
  const [details, setDetails] = useState<Details>({
    ...emptyDetails,
    targetCountry: initialCountry,
    targetRole: initialRole,
  });

  const pkg = useMemo(
    () => packages.find((p) => p.id === packageId) ?? packages[0],
    [packageId]
  );
  const q = useMemo(() => quote(pkg, level, delivery), [pkg, level, delivery]);
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

Package: ${pkg.name}
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

  const checkoutHref = `/checkout?package=${pkg.id}&level=${level}&delivery=${delivery}`;

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
    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-start">
      <div className="card p-4 sm:p-6 sm:p-8 shadow-xs">
        {/* Mobile Quick Order Pill */}
        <div className="lg:hidden mb-5 rounded-xl border border-brand/20 bg-brand-soft/40 px-3.5 py-2.5 flex items-center justify-between">
          <div className="min-w-0 pr-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent-deep block">Selected Package</span>
            <span className="text-[13px] font-bold text-ink truncate block">{pkg.name}</span>
          </div>
          <span className="stat-number text-[20px] font-extrabold text-ink shrink-0">{usd(q.total)}</span>
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
                  {pkg.name} · {levelName} · {deliveryOption?.name}
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
              <div>
                <h2 className="text-[14.5px] sm:text-[15px] font-semibold text-ink">Confirm your package</h2>
                <div className="mt-3.5 sm:mt-4 grid gap-2.5 sm:grid-cols-2">
                  {packages.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      aria-pressed={p.id === packageId}
                      onClick={() => setPackageId(p.id)}
                      className={`${optionBase} ${p.id === packageId ? optionOn : optionOff}`}
                    >
                      <span className="text-[14px] font-semibold text-ink">{p.name}</span>
                      <p className="mt-1 text-[12.5px] leading-snug text-muted">{p.blurb}</p>
                    </button>
                  ))}
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
                      <span className="text-[14px] font-semibold text-ink">{d.name}</span>
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
                  ? "This creates your account, so you can track your order, upload your CV and download your final documents. Your receipt and draft links are emailed to you too."
                  : "Your order receipt, intake confirmation, and draft delivery links will be sent to your email."}
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
                    next={`/order?package=${pkg.id}&level=${level}&delivery=${delivery}`}
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
                    <Link href="/login" className="font-semibold text-brand">Sign in instead</Link>
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
                href={emailLink(`Order Request Inquiry: ${pkg.name} (${levelName})`, summaryText)}
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
          <p className="display mt-2 text-[21px] leading-tight text-ink">{pkg.name}</p>
          <p className="mt-1.5 text-[13px] text-muted">
            {levelName} · {deliveryOption?.window}
          </p>
        </div>
        <div className="px-6 py-5">
          <ul className="space-y-2.5">
            {pkg.includes.map((s) => (
              <li key={s} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                  <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" />
                </svg>
                {services[s].name}
              </li>
            ))}
            <li className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
              <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" />
              </svg>
              One revision round included
            </li>
          </ul>

          <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
            <span className="text-[13px] font-medium text-muted">Total</span>
            <span className="stat-number text-[32px] leading-none text-ink">{usd(q.total)}</span>
          </div>
          <p className="mt-4 text-center text-[12px] leading-relaxed text-muted">
            Prices in LKR. Nothing is added at checkout.
          </p>
        </div>
      </aside>
    </div>
  );
}
