"use client";

import { createClient } from "@/lib/supabase/client";

export const AUTH_ON = !!process.env.NEXT_PUBLIC_SUPABASE_URL;

export type AuthResult = { ok: true } | { ok: false; message: string };

const FRIENDLY: Record<string, string> = {
  invalid_email: "That email address does not look right.",
  weak_password: "Use a password of at least 8 characters.",
  exists: "This email already has an account. Please sign in instead.",
  not_configured: "Accounts are not available yet. Please try again shortly.",
};

async function createAccount(email: string, password: string, full_name: string, phone: string): Promise<AuthResult> {
  const res = await fetch("/api/account/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, full_name, phone }),
  });
  if (res.ok) return { ok: true };
  const data = await res.json().catch(() => ({}));
  return { ok: false, message: FRIENDLY[data.reason as string] ?? "Could not create your account. Please try again." };
}

/** Sign in with email + password. */
export async function signIn(email: string, password: string): Promise<AuthResult> {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({ email: email.trim().toLowerCase(), password });
  if (error) return { ok: false, message: "Wrong email or password. Please try again." };
  return { ok: true };
}

/**
 * Used in the order flow. Signs the customer in if the account exists,
 * or creates it and signs in. Returns a friendly message on failure.
 */
export async function ensureAccount(
  email: string,
  password: string,
  full_name = "",
  phone = "",
): Promise<AuthResult> {
  const supabase = createClient();
  const e = email.trim().toLowerCase();

  const first = await supabase.auth.signInWithPassword({ email: e, password });
  if (!first.error) return { ok: true };

  const created = await createAccount(e, password, full_name, phone);
  if (!created.ok) {
    if (created.message.includes("already has an account")) {
      return { ok: false, message: "This email already has an account. Please check your password, or sign in." };
    }
    return created;
  }

  const second = await supabase.auth.signInWithPassword({ email: e, password });
  if (second.error) return { ok: false, message: "Account created, but sign in failed. Please try signing in." };
  return { ok: true };
}

export async function signOutClient() {
  const supabase = createClient();
  await supabase.auth.signOut();
}

/** Create a standalone account (signup page). */
export async function signUp(email: string, password: string, full_name: string, phone = ""): Promise<AuthResult> {
  const created = await createAccount(email, password, full_name, phone);
  if (!created.ok) return created;
  return signIn(email, password);
}
