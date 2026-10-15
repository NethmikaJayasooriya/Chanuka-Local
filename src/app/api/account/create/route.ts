import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";
import { InputError, readJsonBody, inputText } from "@/lib/request-validation";

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

  let body: Record<string, unknown>;
  try {
    body = await readJsonBody(request, 8192);
  } catch (error) {
    return NextResponse.json({ ok: false, reason: error instanceof InputError ? error.reason : "bad_request" }, { status: error instanceof InputError ? error.status : 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const full_name = inputText(body.full_name, 200);
  const phone = inputText(body.phone, 60);

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, reason: "invalid_email" }, { status: 400 });
  }
  if (password.length < 8 || password.length > 128) {
    return NextResponse.json({ ok: false, reason: "weak_password" }, { status: 400 });
  }

  const db = createAdminClient();
  const { data, error } = await db.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: full_name.slice(0, 200) },
  });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("already") || msg.includes("registered") || msg.includes("exists")) {
      return NextResponse.json({ ok: false, reason: "exists" }, { status: 409 });
    }
    return NextResponse.json({ ok: false, reason: "create_failed" }, { status: 400 });
  }

  const userId = data.user?.id;
  if (userId) {
    await db.from("profiles").upsert(
      { user_id: userId, full_name: full_name.slice(0, 200) || null, phone: phone.slice(0, 60) || null },
      { onConflict: "user_id" },
    );
  }

  return NextResponse.json({ ok: true });
}
