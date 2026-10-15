import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { SITE_KEY } from "@/lib/site";
import { supabaseConfigured } from "@/lib/supabase/guard";
import { resolveOrder } from "@/lib/pricing";
import { InputError, readJsonBody, inputText } from "@/lib/request-validation";

export const runtime = "nodejs";

/**
 * Creates an order for the signed-in customer. The price is recomputed
 * on the server from the package/level/delivery, never trusted from the
 * client. Payment starts as "pending"; a gateway (PayHere) marks it paid
 * later. Returns the order id and reference for the checkout step.
 */
export async function POST(request: Request) {
  if (!supabaseConfigured()) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 503 });
  }

  // The customer must be signed in (the order flow signs them in first).
  const auth = await createClient();
  const {
    data: { user },
  } = await auth.auth.getUser();
  if (!user) return NextResponse.json({ ok: false, reason: "not_signed_in" }, { status: 401 });

  let b: Record<string, unknown>;
  try {
    b = await readJsonBody(request);
  } catch (error) {
    return NextResponse.json({ ok: false, reason: error instanceof InputError ? error.reason : "bad_request" }, { status: error instanceof InputError ? error.status : 400 });
  }

  const selection = resolveOrder(b.package_id, b.level_id, b.delivery_id, b.tier_id);
  if (!selection) {
    return NextResponse.json({ ok: false, reason: "invalid_order" }, { status: 400 });
  }
  const name = inputText(b.name, 200);
  const phone = inputText(b.phone, 60);
  const targetRole = inputText(b.target_role, 200);
  const targetCountry = inputText(b.target_country, 120);
  if (name.length < 2 || targetRole.length < 2 || targetCountry.length < 2) {
    return NextResponse.json({ ok: false, reason: "invalid_details" }, { status: 400 });
  }

  const db = createAdminClient();
  const { data, error } = await db
    .from("orders")
    .insert({
      site: SITE_KEY,
      user_id: user.id,
      ...selection,
      status: "new",
      payment_status: "pending",
      customer_name: name,
      customer_email: user.email ?? null,
      customer_phone: phone || null,
      target_role: targetRole,
      target_country: targetCountry,
      deadline: inputText(b.deadline, 200) || null,
      brief_notes: inputText(b.notes, 4000) || null,
    })
    .select("id, ref")
    .single();

  if (error || !data) {
    return NextResponse.json({ ok: false, reason: "insert_failed" }, { status: 500 });
  }

  // Keep the customer's profile name/phone current.
  await db.from("profiles").upsert(
    { user_id: user.id, full_name: name, phone: phone || null },
    { onConflict: "user_id" },
  );

  return NextResponse.json({ ok: true, id: data.id, ref: data.ref });
}
