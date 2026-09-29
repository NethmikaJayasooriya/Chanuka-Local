import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const runtime = "nodejs";

/**
 * OAuth redirect target (Google). Exchanges the one-time code for a
 * session cookie, makes sure the customer has a profile row, then sends
 * them on to wherever they were headed (the order flow or dashboard).
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const rawNext = url.searchParams.get("next") || "/dashboard";
  // Only allow same-site relative redirects.
  const next = rawNext.startsWith("/") ? rawNext : "/dashboard";

  if (!code || !supabaseConfigured()) {
    return NextResponse.redirect(new URL("/login?error=oauth", url.origin));
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(new URL("/login?error=oauth", url.origin));
  }

  // Ensure a profile exists (Google users skip the account-create route).
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      const admin = createAdminClient();
      const { data: existing } = await admin.from("profiles").select("user_id").eq("user_id", user.id).maybeSingle();
      if (!existing) {
        const full_name = (user.user_metadata?.full_name as string) || (user.user_metadata?.name as string) || "";
        await admin.from("profiles").insert({ user_id: user.id, full_name: full_name || null });
      }
    }
  } catch {
    /* profile is best-effort */
  }

  return NextResponse.redirect(new URL(next, url.origin));
}
