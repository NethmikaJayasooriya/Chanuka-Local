import "server-only";

import { createAdminClient } from "@/lib/supabase/admin";
import { site } from "@/lib/site";

type SendEmailInput = {
  eventKey: string;
  template: string;
  to: string;
  subject: string;
  html: string;
  orderId?: string | null;
};

const EMAIL_ENDPOINT = "https://api.resend.com/emails";

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

export async function sendEmail(input: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const replyTo = process.env.EMAIL_REPLY_TO || site.email;
  if (!apiKey || !from || !validEmail(input.to)) return { ok: false, skipped: true } as const;

  const db = createAdminClient();
  const { data: eventId, error: claimError } = await db.rpc("claim_email_event", {
    p_event_key: input.eventKey,
    p_order_id: input.orderId || null,
    p_recipient: input.to.toLowerCase(),
    p_template: input.template,
  });
  if (claimError || !eventId) return { ok: false, skipped: true } as const;

  try {
    const result = await fetch(EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": input.eventKey.slice(0, 256),
      },
      body: JSON.stringify({
        from,
        to: [input.to],
        reply_to: replyTo,
        subject: input.subject,
        html: input.html,
      }),
    });
    const payload = (await result.json().catch(() => ({}))) as { id?: string; message?: string };
    if (!result.ok || !payload.id) throw new Error(payload.message || `Resend error ${result.status}`);

    await db.from("email_events").update({
      status: "sent",
      provider_id: payload.id,
      error_message: null,
      sent_at: new Date().toISOString(),
    }).eq("id", eventId);
    return { ok: true, id: payload.id } as const;
  } catch (error) {
    await db.from("email_events").update({
      status: "failed",
      error_message: error instanceof Error ? error.message.slice(0, 500) : "Unknown email error",
    }).eq("id", eventId);
    return { ok: false, skipped: false } as const;
  }
}

export function adminRecipient() {
  return process.env.EMAIL_ADMIN_TO || site.email;
}
