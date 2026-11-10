import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const runtime = "nodejs";

/**
 * Creates a customer account with the email auto-confirmed, so ordering
 * never stalls on a confirmation email. The password is never stored by
 * us: Supabase Auth hashes it. If the email already has an account, we
 * say so and the client asks the customer to sign in instead.
 *
 * OTP / passwordless sign-in can be layered on later without changing
 * this: it only creates the account record.
 */
export async function POST(request: Request) {
  if (!supabaseConfigured()) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  let body: { email?: string; password?: string; full_name?: string; phone?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad_request" }, { status: 400 });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const password = String(body.password ?? "");
  const full_name = String(body.full_name ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, reason: "invalid_email" }, { status: 400 });
  }
  if (password.length < 8) {
    return NextResponse.json({ ok: false, reason: "weak_password" }, { status: 400 });
  }

  const db = createAdminClient();
  const { data, error } = await db.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name },
  });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("already") || msg.includes("registered") || msg.includes("exists")) {
      return NextResponse.json({ ok: false, reason: "exists" }, { status: 409 });
    }
    return NextResponse.json({ ok: false, reason: error.message }, { status: 400 });
  }

  const userId = data.user?.id;
  if (userId) {
    await db.from("profiles").upsert(
      { user_id: userId, full_name: full_name || null, phone: phone || null },
      { onConflict: "user_id" },
    );
  }

  return NextResponse.json({ ok: true });
}
