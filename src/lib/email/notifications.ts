import "server-only";

import { adminRecipient, sendEmail } from "./send";
import {
  adminBriefReceived,
  adminOrderCreated,
  adminPaymentConfirmed,
  customerBriefReceived,
  customerOrderCreated,
  customerPaymentConfirmed,
  type BriefEmailData,
  type OrderEmailData,
} from "./templates";

async function pair(
  event: string,
  orderId: string | null,
  customer: { email: string; subject: string; html: string },
  admin: { subject: string; html: string },
) {
  await Promise.allSettled([
    sendEmail({ eventKey: `${event}:customer:${orderId || customer.email}`, template: `${event}_customer`, to: customer.email, subject: customer.subject, html: customer.html, orderId }),
    sendEmail({ eventKey: `${event}:admin:${orderId || customer.email}`, template: `${event}_admin`, to: adminRecipient(), subject: admin.subject, html: admin.html, orderId }),
  ]);
}

export async function notifyOrderCreated(order: OrderEmailData) {
  await pair("order_created", order.id, { email: order.customerEmail, ...customerOrderCreated(order) }, adminOrderCreated(order));
}

export async function notifyPaymentConfirmed(order: OrderEmailData) {
  await pair("payment_confirmed", order.id, { email: order.customerEmail, ...customerPaymentConfirmed(order) }, adminPaymentConfirmed(order));
}

export async function notifyBriefReceived(brief: BriefEmailData) {
  await pair("brief_received", brief.orderId || brief.id, { email: brief.customerEmail, ...customerBriefReceived(brief) }, adminBriefReceived(brief));
}
