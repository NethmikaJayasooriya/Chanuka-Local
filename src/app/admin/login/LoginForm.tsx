"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const denied = params.get("denied");
  const next = params.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(denied ? "That account is not an admin." : null);
  const [busy, setBusy] = useState(false);

  const configured =
    typeof process.env.NEXT_PUBLIC_SUPABASE_URL === "string" &&
    process.env.NEXT_PUBLIC_SUPABASE_URL.length > 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError(error.message);
        setBusy(false);
        return;
      }
      router.replace(next);
      router.refresh();
    } catch {
      setError("Could not sign in. Is the backend configured?");
      setBusy(false);
    }
  };

  const inputCls =
    "mt-1.5 w-full rounded-[10px] border border-line-strong bg-paper px-4 py-3 text-[14.5px] text-ink outline-none transition-colors focus:border-brand";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {!configured && (
        <p className="rounded-[10px] border border-amber-300 bg-amber-50 px-3 py-2 text-[12.5px] text-amber-800">
          Supabase is not configured yet. Add the keys to .env.local first.
        </p>
      )}
      <div>
        <label htmlFor="email" className="text-[13px] font-semibold text-ink">Email</label>
        <input id="email" type="email" autoComplete="email" required value={email}
          onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="password" className="text-[13px] font-semibold text-ink">Password</label>
        <input id="password" type="password" autoComplete="current-password" required value={password}
          onChange={(e) => setPassword(e.target.value)} className={inputCls} placeholder="••••••••" />
      </div>
      {error && <p className="text-[12.5px] text-red-600">{error}</p>}
      <button type="submit" disabled={busy}
        className="w-full rounded-full bg-brand px-6 py-3 text-[14.5px] font-semibold text-paper transition-colors hover:bg-brand-deep disabled:opacity-60">
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
