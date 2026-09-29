"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const KEY = "cookie-consent";

/**
 * Cookie consent gate for Google Analytics. GA only loads once the visitor
 * accepts, so the default is privacy preserving (essential cookies only).
 * The choice is remembered per browser in localStorage.
 */
export function ConsentAnalytics({ gaId }: { gaId: string }) {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let v: string | null = null;
    try {
      v = localStorage.getItem(KEY);
    } catch {
      /* storage blocked; treat as undecided */
    }
    if (v === "granted" || v === "denied") setConsent(v);
    setReady(true);
  }, []);

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setConsent(value);
  };

  return (
    <>
      {consent === "granted" && gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}

      {ready && consent === null && (
        <div className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4">
          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-2xl border border-line bg-paper/95 p-4 shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:gap-4">
            <p className="flex-1 text-[12.5px] leading-relaxed text-ink-soft">
              We use cookies to measure site traffic with Google Analytics. Accept to help us
              improve, or decline to keep only essential cookies.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => choose("denied")}
                className="rounded-full border border-line-strong px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => choose("granted")}
                className="rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-paper transition-colors hover:bg-brand-deep"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
