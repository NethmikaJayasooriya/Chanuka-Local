"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { AUTH_ON } from "@/lib/auth";

/**
 * "Continue with Google" button. Redirects to Google, then back to
 * /auth/callback which sets the session and forwards to `next`.
 * Requires the Google provider to be enabled in Supabase Auth.
 */
export function GoogleButton({ next = "/dashboard", label = "Continue with Google" }: { next?: string; label?: string }) {
  const [busy, setBusy] = useState(false);
  if (!AUTH_ON) return null;

  const go = async () => {
    if (busy) return;
    setBusy(true);
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });
    if (error) setBusy(false);
  };

  return (
    <button
      type="button"
      onClick={go}
      disabled={busy}
      className="flex w-full items-center justify-center gap-2.5 rounded-full border border-line-strong bg-paper px-6 py-3 text-[14px] font-semibold text-ink transition-colors hover:border-brand disabled:opacity-60"
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px]">
        <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.63h6.45a5.5 5.5 0 01-2.39 3.61v3h3.86c2.26-2.08 3.58-5.15 3.58-8.79z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.92l-3.86-3a7.2 7.2 0 01-10.74-3.79H1.36v3.1A12 12 0 0012 24z" />
        <path fill="#FBBC05" d="M5.35 14.29a7.2 7.2 0 010-4.58v-3.1H1.36a12 12 0 000 10.78l3.99-3.1z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.43-3.43C17.95 1.17 15.23 0 12 0A12 12 0 001.36 6.61l3.99 3.1A7.2 7.2 0 0112 4.75z" />
      </svg>
      {busy ? "Redirecting..." : label}
    </button>
  );
}
