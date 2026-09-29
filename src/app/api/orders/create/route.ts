import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";
import { deliveries, levels, packages, quote, type DeliveryId, type LevelId } from "@/lib/pricing";

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

  let b: Record<string, string>;
  try {
    b = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reason: "bad_request" }, { status: 400 });
  }

  const pkg = packages.find((p) => p.id === b.package_id);
  const level = levels.find((l) => l.id === b.level_id)?.id as LevelId | undefined;
  const delivery = deliveries.find((d) => d.id === b.delivery_id)?.id as DeliveryId | undefined;
  if (!pkg || !level || !delivery) {
    return NextResponse.json({ ok: false, reason: "invalid_order" }, { status: 400 });
  }

  const q = quote(pkg, level, delivery);
  const levelName = levels.find((l) => l.id === level)?.name ?? "";
  const deliveryWindow = deliveries.find((d) => d.id === delivery)?.window ?? "";

  const db = createAdminClient();
  const { data, error } = await db
    .from("orders")
    .insert({
      user_id: user.id,
      package_id: pkg.id,
      package_name: pkg.name,
      level_id: level,
      level_name: levelName,
      delivery_id: delivery,
      delivery_window: deliveryWindow,
      total_usd: q.total,
      status: "new",
      payment_status: "pending",
      customer_name: (b.name ?? "").slice(0, 200) || null,
      customer_email: user.email ?? ((b.email ?? "").slice(0, 200) || null),
      customer_phone: (b.phone ?? "").slice(0, 60) || null,
      target_role: (b.target_role ?? "").slice(0, 200) || null,
      target_country: (b.target_country ?? "").slice(0, 120) || null,
      deadline: (b.deadline ?? "").slice(0, 200) || null,
      brief_notes: (b.notes ?? "").slice(0, 4000) || null,
    })
    .select("id, ref")
    .single();

  if (error || !data) {
    return NextResponse.json({ ok: false, reason: error?.message ?? "insert_failed" }, { status: 500 });
  }

  // Keep the customer's profile name/phone current.
  await db.from("profiles").upsert(
    { user_id: user.id, full_name: (b.name ?? "").slice(0, 200) || null, phone: (b.phone ?? "").slice(0, 60) || null },
    { onConflict: "user_id" },
  );

  return NextResponse.json({ ok: true, id: data.id, ref: data.ref });
}
