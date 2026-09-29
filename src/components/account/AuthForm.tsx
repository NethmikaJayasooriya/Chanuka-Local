"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { signIn, signUp, AUTH_ON } from "@/lib/auth";
import { GoogleButton } from "@/components/account/GoogleButton";

const field =
  "mt-1.5 w-full rounded-[10px] border border-line-strong bg-paper px-4 py-3 text-[14.5px] text-ink outline-none transition-colors focus:border-brand";

export function AuthForm({ mode }: { mode: "signin" | "signup" }) {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/dashboard";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setError("");
    if (!AUTH_ON) {
      setError("Accounts are not available yet.");
      return;
    }
    setBusy(true);
    const res =
      mode === "signup"
        ? await signUp(email, password, name)
        : await signIn(email, password);
    if (!res.ok) {
      setError(res.message);
      setBusy(false);
      return;
    }
    router.push(next);
    router.refresh();
  };

  return (
    <div className="mt-7">
      <GoogleButton next={next} label={mode === "signup" ? "Sign up with Google" : "Continue with Google"} />
      <div className="my-5 flex items-center gap-3 text-[12.5px] text-muted">
        <span className="h-px flex-1 bg-line" />
        or use email
        <span className="h-px flex-1 bg-line" />
      </div>
      <form onSubmit={submit} className="space-y-4">
      {mode === "signup" && (
        <div>
          <label htmlFor="name" className="text-[13px] font-semibold text-ink">Full name</label>
          <input id="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Your name" />
        </div>
      )}
      <div>
        <label htmlFor="email" className="text-[13px] font-semibold text-ink">Email</label>
        <input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={field} placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="password" className="text-[13px] font-semibold text-ink">Password</label>
        <input
          id="password"
          type="password"
          autoComplete={mode === "signup" ? "new-password" : "current-password"}
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={field}
          placeholder={mode === "signup" ? "At least 8 characters" : "Your password"}
        />
      </div>

      {error && <p className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-[13px] text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-brand px-6 py-3.5 text-[14.5px] font-semibold text-paper transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
      >
        {busy ? "Please wait..." : mode === "signup" ? "Create account" : "Sign in"}
      </button>

      <p className="pt-1 text-center text-[13px] text-muted">
        {mode === "signup" ? (
          <>Already have an account? <Link href="/login" className="font-semibold text-brand hover:underline">Sign in</Link></>
        ) : (
          <>No account yet? <Link href="/signup" className="font-semibold text-brand hover:underline">Create one</Link>, or just <Link href="/order" className="font-semibold text-brand hover:underline">start an order</Link>.</>
        )}
      </p>
      </form>
    </div>
  );
}
