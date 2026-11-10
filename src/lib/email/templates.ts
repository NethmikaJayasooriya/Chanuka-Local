import { site } from "@/lib/site";

export type OrderEmailData = {
  id: string;
  ref: string;
  customerName: string;
  customerEmail: string;
  packageName: string;
  levelName: string;
  deliveryWindow: string;
  totalUsd: number;
  targetRole?: string | null;
  targetCountry?: string | null;
};

export type BriefEmailData = {
  id: string;
  orderId?: string | null;
  orderRef?: string | null;
  customerName: string;
  customerEmail: string;
  targetRole?: string | null;
  cvFilename?: string | null;
};

function esc(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function row(label: string, value: unknown) {
  return `<tr><td style="padding:9px 0;color:#66758d;font-size:13px;vertical-align:top">${esc(label)}</td><td style="padding:9px 0 9px 18px;color:#0d1b2d;font-size:13px;font-weight:600;text-align:right;vertical-align:top">${esc(value)}</td></tr>`;
}

function button(label: string, href: string) {
  return `<a href="${esc(href)}" style="display:inline-block;background:#173d6b;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:13px 22px;border-radius:999px">${esc(label)}</a>`;
}

function layout(preheader: string, title: string, intro: string, content: string, action?: string) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#0d1b2d"><div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(preheader)}</div><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f6f9"><tr><td align="center" style="padding:28px 14px"><table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid #dde3eb;border-radius:18px;overflow:hidden"><tr><td style="height:5px;background:#c99738"></td></tr><tr><td style="padding:28px 30px 10px"><div style="font-family:Georgia,serif;font-size:20px;font-weight:700;color:#0d1b2d">Chanuka Jeewantha<span style="color:#c99738">.</span></div></td></tr><tr><td style="padding:12px 30px 30px"><h1 style="margin:0 0 14px;font-family:Georgia,serif;font-size:30px;line-height:1.15;color:#0d1b2d">${esc(title)}</h1><p style="margin:0 0 22px;color:#5e6f88;font-size:15px;line-height:1.7">${esc(intro)}</p>${content}${action ? `<div style="margin-top:26px">${action}</div>` : ""}</td></tr><tr><td style="padding:20px 30px;background:#f8f4ed;border-top:1px solid #ede5d8;color:#718096;font-size:12px;line-height:1.6">Questions? Reply to this email or contact <a href="mailto:${esc(site.email)}" style="color:#173d6b">${esc(site.email)}</a>.<br>© ${new Date().getFullYear()} Chanuka Jeewantha · International CV & career branding.</td></tr></table></td></tr></table></body></html>`;
}

function orderTable(order: OrderEmailData) {
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e4e9ef;border-bottom:1px solid #e4e9ef">${row("Order reference", order.ref)}${row("Package", order.packageName)}${row("Career level", order.levelName)}${row("Delivery", order.deliveryWindow)}${row("Total", money(order.totalUsd))}</table>`;
}

export function customerOrderCreated(order: OrderEmailData) {
  return {
    subject: `Order received — ${order.ref}`,
    html: layout(
      `Your order ${order.ref} has been saved.`,
      "Your order is saved.",
      `Hi ${order.customerName || "there"}, thank you for choosing Chanuka. Your order is ready for secure payment and your career brief.`,
      orderTable(order),
      button("Continue to secure checkout", `${site.url}/checkout?order=${encodeURIComponent(order.id)}`),
    ),
  };
}

export function adminOrderCreated(order: OrderEmailData) {
  return {
    subject: `New order ${order.ref} — ${order.packageName}`,
    html: layout(
      `A new order has arrived from ${order.customerName}.`,
      "A new order has arrived.",
      `${order.customerName || "A customer"} created an order and should now continue to payment.`,
      `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e4e9ef;border-bottom:1px solid #e4e9ef">${row("Customer", order.customerName)}${row("Email", order.customerEmail)}${row("Order", order.ref)}${row("Package", order.packageName)}${row("Target", [order.targetRole, order.targetCountry].filter(Boolean).join(" · ") || "Not supplied")}${row("Total", money(order.totalUsd))}</table>`,
      button("Open order in admin", `${site.url}/admin/orders/${encodeURIComponent(order.id)}`),
    ),
  };
}

export function customerPaymentConfirmed(order: OrderEmailData) {
  return {
    subject: `Payment confirmed — ${order.ref}`,
    html: layout(
      `Payment for ${order.ref} has been confirmed.`,
      "Payment confirmed.",
      `Hi ${order.customerName || "there"}, your payment has been securely verified. Complete your career brief and upload your current CV so work can begin.`,
      orderTable(order),
      button("Complete my brief", `${site.url}/intake?order=${encodeURIComponent(order.id)}`),
    ),
  };
}

export function adminPaymentConfirmed(order: OrderEmailData) {
  return {
    subject: `Paid order ${order.ref} — ${money(order.totalUsd)}`,
    html: layout(
      `Payment received for ${order.ref}.`,
      "Payment received.",
      `${order.customerName || "The customer"}'s PayHere payment has been verified and the order is ready for fulfilment.`,
      orderTable(order),
      button("Open paid order", `${site.url}/admin/orders/${encodeURIComponent(order.id)}`),
    ),
  };
}

export function customerBriefReceived(brief: BriefEmailData) {
  return {
    subject: `Brief received${brief.orderRef ? ` — ${brief.orderRef}` : ""}`,
    html: layout(
      "Your career brief and CV upload have been received.",
      "Your brief is safely with me.",
      `Hi ${brief.customerName || "there"}, your information${brief.cvFilename ? ` and ${brief.cvFilename}` : ""} arrived successfully. I will review everything and contact you if I need clarification.`,
      `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e4e9ef;border-bottom:1px solid #e4e9ef">${row("Order", brief.orderRef || "Not linked")}${row("Target role", brief.targetRole || "Not supplied")}${row("CV file", brief.cvFilename || "No file uploaded")}</table>`,
      brief.orderId ? button("View my dashboard", `${site.url}/dashboard`) : undefined,
    ),
  };
}

export function adminBriefReceived(brief: BriefEmailData) {
  return {
    subject: `New client brief${brief.orderRef ? ` — ${brief.orderRef}` : ""}`,
    html: layout(
      `A new brief has arrived from ${brief.customerName}.`,
      "A new client brief has arrived.",
      "The submission is saved in the admin panel, including the private CV upload when supplied.",
      `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #e4e9ef;border-bottom:1px solid #e4e9ef">${row("Customer", brief.customerName)}${row("Email", brief.customerEmail)}${row("Order", brief.orderRef || "Not linked")}${row("Target role", brief.targetRole || "Not supplied")}${row("CV file", brief.cvFilename || "No file uploaded")}</table>`,
      button("Open submission", `${site.url}/admin/submissions/${encodeURIComponent(brief.id)}`),
    ),
  };
}
