"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { AUTH_ON } from "@/lib/auth";

function SignInIcon({ className }: { className?: string }) {
  // Person entering / sign-in arrow
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <path d="M10 3.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 16.5a6 6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AccountIcon({ className }: { className?: string }) {
  // Person inside a rounded badge (signed-in)
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" fill="currentColor" />
      <path d="M6.2 14.6a4 4 0 0 1 7.6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Header account link. Shows "My account" when signed in, "Sign in"
 * otherwise, each with a matching icon. Reads the session in the browser
 * so the header stays a fast static component.
 */
export function AccountLink({ className, mobile = false }: { className?: string; mobile?: boolean }) {
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    if (!AUTH_ON) return;
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setSignedIn(!!data.user));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => setSignedIn(!!session?.user));
    return () => sub.subscription.unsubscribe();
  }, []);

  const isIn = AUTH_ON && signedIn === true;
  const href = isIn ? "/dashboard" : "/login";
  const label = isIn ? "My account" : "Sign in";
  const iconCls = mobile ? "h-4 w-4" : "h-4 w-4";
  const icon = isIn ? <AccountIcon className={iconCls} /> : <SignInIcon className={iconCls} />;

  return (
    <Link href={href} className={className}>
      <span className="inline-flex items-center justify-center gap-1.5">
        {icon}
        <span>{label}</span>
      </span>
    </Link>
  );
}
