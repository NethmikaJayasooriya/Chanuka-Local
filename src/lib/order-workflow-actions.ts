"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";
import { SITE_KEY } from "@/lib/site";
import {
  type FiverrOrderData,
  type DeliverableFile,
  type OrderStatus,
  type ExtensionRequest,
  type Role,
  type OrderChatMessage,
  INITIAL_FIVERR_ORDER,
} from "@/lib/fiverr-order-types";

// In-memory cache store as fallback if custom timeline table hasn't been migrated in Supabase
const memoryTimelineStore = globalThis as unknown as {
  __orderActivities?: Record<string, any[]>;
  __orderOverrides?: Record<string, Partial<FiverrOrderData>>;
};
if (!memoryTimelineStore.__orderActivities) {
  memoryTimelineStore.__orderActivities = {};
}
if (!memoryTimelineStore.__orderOverrides) {
  memoryTimelineStore.__orderOverrides = {};
}

/**
 * Calculates turnaround duration in days based on selected delivery speed and package
 */
function computeOrderTurnaroundDays(order: {
  delivery_id?: string | null;
  delivery_window?: string | null;
  package_id?: string | null;
}): number {
  const deliveryId = (order.delivery_id || "").toLowerCase();
  const deliveryWindow = (order.delivery_window || "").toLowerCase();
  const packageId = (order.package_id || "").toLowerCase();

  // 1. Explicit delivery speed selection
  if (deliveryId === "ultra" || deliveryWindow.includes("24 hour") || deliveryWindow.includes("within 24")) {
    return 1; // 24 hours (1 day)
  }
  if (
    deliveryId === "fast" ||
    deliveryWindow.includes("2 to 3") ||
    deliveryWindow.includes("48") ||
    deliveryWindow.includes("72")
  ) {
    return 3; // 2 to 3 days
  }
  if (deliveryId === "normal" || deliveryId === "standard" || deliveryWindow.includes("5 to 7")) {
    // If complete 3-service package, standard delivery is 7 days, else 5 days
    if (packageId.includes("complete") || packageId.includes("all")) {
      return 7;
    }
    return 5;
  }

  // 2. Package-based fallback if delivery was omitted
  if (packageId.includes("complete") || packageId.includes("all")) {
    return 7;
  }
  if (packageId.includes("linkedin") || packageId.includes("cover")) {
    return 5;
  }
  if (packageId.includes("cv") || packageId.includes("ats")) {
    return 3;
  }

  // 3. Global standard fallback: 3 days
  return 3;
}

/**
 * Resolves a reliable, non-NaN delivery deadline and formatted string for the workflow.
 * Uses order.deadline only if it contains an actual parseable future date;
 * otherwise defaults cleanly to the package and delivery tier turnaround.
 */
function resolveOrderDeadline(order: {
  created_at: string;
  delivery_id?: string | null;
  delivery_window?: string | null;
  package_id?: string | null;
  deadline?: string | null;
}): { dueTimestamp: number; deliveryDateFormatted: string; durationDays: number } {
  const rawCreatedAt = new Date(order.created_at).getTime();
  const orderCreatedAt = !isNaN(rawCreatedAt) && rawCreatedAt > 0 ? rawCreatedAt : Date.now();

  const durationDays = computeOrderTurnaroundDays(order);
  const defaultDeadlineMs = orderCreatedAt + durationDays * 86400000;

  let finalDeadlineMs = defaultDeadlineMs;

  // If customer provided a deadline, check if it's a valid parseable future date
  if (order.deadline && typeof order.deadline === "string") {
    const trimmed = order.deadline.trim();
    const parsed = Date.parse(trimmed);
    if (!isNaN(parsed) && parsed > orderCreatedAt) {
      finalDeadlineMs = parsed;
    }
  }

  // Strict safeguard against NaN or negative numbers
  if (isNaN(finalDeadlineMs) || finalDeadlineMs <= 0) {
    finalDeadlineMs = Date.now() + durationDays * 86400000;
  }

  const deliveryDateFormatted = new Date(finalDeadlineMs).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return {
    dueTimestamp: finalDeadlineMs,
    deliveryDateFormatted,
    durationDays,
  };
}

function isUuid(val?: string | null): boolean {
  if (!val || typeof val !== "string") return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(val);
}

async function resolveOrderRow(db: any, orderIdentifier: string) {
  if (!orderIdentifier) return null;
  if (isUuid(orderIdentifier)) {
    const { data } = await db.from("orders").select("*").eq("id", orderIdentifier).maybeSingle();
    if (data) return data;
  }
  const { data } = await db.from("orders").select("*").eq("ref", orderIdentifier).maybeSingle();
  return data;
}

/**
 * Loads order workflow data for both Seller (Chanuka) and Client.
 * Non-destructive: Joins existing 'orders', 'intake_submissions', 'deliverables',
 * and any new timeline events.
 */
export async function getOrderWorkflowData(orderId?: string): Promise<FiverrOrderData> {
  // If orderId was not provided, look up the latest order from the database
  if (!orderId && supabaseConfigured()) {
    try {
      const db = createAdminClient();
      const { data: latest } = await db
        .from("orders")
        .select("id")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      if (latest) {
        orderId = latest.id;
      }
    } catch {
      // Continue below
    }
  }

  // Explicit sample demo requested
  if (orderId === "sample" || orderId === "fiverr-cv-sample-1") {
    const overrides = memoryTimelineStore.__orderOverrides?.[INITIAL_FIVERR_ORDER.order_id] || {};
    return {
      ...INITIAL_FIVERR_ORDER,
      ...overrides,
    };
  }

  if (!supabaseConfigured() || !orderId) {
    const overrides = memoryTimelineStore.__orderOverrides?.[orderId || INITIAL_FIVERR_ORDER.order_id] || {};
    return {
      ...INITIAL_FIVERR_ORDER,
      order_id: orderId || INITIAL_FIVERR_ORDER.order_id,
      ...overrides,
    };
  }

  try {
    const db = createAdminClient();

    // 1. Fetch from existing untouched 'orders' table
    const o = await resolveOrderRow(db, orderId);

    if (!o) {
      console.warn("Order not found in DB, using fallback:", orderId);
      const overrides = memoryTimelineStore.__orderOverrides?.[orderId] || {};
      return { ...INITIAL_FIVERR_ORDER, order_id: orderId, ...overrides };
    }

    // 2. Fetch from existing untouched 'intake_submissions' (onboarding brief)
    const { data: brief } = await db
      .from("intake_submissions")
      .select("*")
      .eq("order_id", o.id)
      .maybeSingle();

    // 3. Fetch from existing untouched 'deliverables' table
    const { data: dbDeliverables } = await db
      .from("deliverables")
      .select("*")
      .eq("order_id", o.id)
      .order("created_at", { ascending: true });

    // 4. Fetch from new timeline events table (if exists)
    let timelineEvents: any[] = [];
    try {
      const { data: events, error: eventsErr } = await db
        .from("order_timeline_events")
        .select("*")
        .eq("order_id", o.id)
        .order("created_at", { ascending: true });

      if (!eventsErr && events) {
        timelineEvents = events;
      } else {
        timelineEvents = memoryTimelineStore.__orderActivities?.[o.id] || [];
      }
    } catch {
      timelineEvents = memoryTimelineStore.__orderActivities?.[o.id] || [];
    }

    // Filter document deliverables vs extension requests vs revision requests vs chat messages vs extra revisions
    const fileDeliverables = (dbDeliverables || []).filter(
      (d) =>
        d.kind !== "extension_request" &&
        d.kind !== "revision_request" &&
        d.kind !== "chat_message" &&
        d.kind !== "extra_revision"
    );
    const extRows = (dbDeliverables || []).filter((d) => d.kind === "extension_request");
    const revRows = (dbDeliverables || []).filter((d) => d.kind === "revision_request");
    const chatRows = (dbDeliverables || []).filter((d) => d.kind === "chat_message");
    const extraRevRows = (dbDeliverables || []).filter((d) => d.kind === "extra_revision");

    let totalExtraRevisions = 0;
    for (const er of extraRevRows) {
      try {
        const parsed = JSON.parse(er.file_name);
        totalExtraRevisions += Number(parsed?.extra_revisions) || 1;
      } catch {
        totalExtraRevisions += 1;
      }
    }

    let dbExtRequest: ExtensionRequest | undefined = undefined;
    if (extRows.length > 0) {
      try {
        dbExtRequest = JSON.parse(extRows[extRows.length - 1].file_name);
      } catch {}
    }

    // Map database revision requests
    const dbRevisions = revRows.map((r) => {
      let parsedMsg = r.label.replace(/^Revision Request:\s*/, "");
      let parsedTime = new Date(r.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      try {
        const parsed = JSON.parse(r.file_name);
        if (parsed?.message) parsedMsg = parsed.message;
      } catch {}
      return {
        id: r.id,
        requested_at: parsedTime,
        message: parsedMsg,
      };
    });

    // Map existing deliverables into timeline deliveries
    const mappedDeliverableFiles = await Promise.all(
      fileDeliverables.map(async (f) => {
        let downloadUrl = f.file_path;
        if (
          f.file_path &&
          !f.file_path.startsWith("http") &&
          !f.file_path.startsWith("chat:") &&
          !f.file_path.startsWith("extension:") &&
          !f.file_path.startsWith("revision:")
        ) {
          try {
            const { data: signed } = await db.storage
              .from("deliverables")
              .createSignedUrl(f.file_path, 60 * 60 * 24);
            if (signed?.signedUrl) {
              downloadUrl = signed.signedUrl;
            }
          } catch {}
        }
        return {
          id: f.id,
          name: f.file_name || f.label,
          size: f.size || "2.5 MB",
          type: (f.file_name?.toLowerCase().endsWith(".docx") ? "docx" : "pdf") as "pdf" | "docx",
          url: downloadUrl,
        };
      })
    );

    const mappedDeliveries = (mappedDeliverableFiles.length > 0)
      ? [
          {
            id: `del-db-1`,
            delivery_number: 1,
            delivered_at: new Date(fileDeliverables[0].created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            }),
            message: `Hi ${o.customer_name}! Here are your tailored career branding documents. Please check the deliverable files attached below.`,
            files: mappedDeliverableFiles,
          },
        ]
      : [];

    // Append any extra deliveries from timeline events
    const eventDeliveries = timelineEvents
      .filter((e) => e.event_type === "delivery")
      .map((e, idx) => ({
        id: e.id,
        delivery_number: mappedDeliveries.length + idx + 1,
        delivered_at: new Date(e.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        message: e.message || "Updated deliverables.",
        files: e.files || [],
      }));

    const allDeliveries = [...mappedDeliveries, ...eventDeliveries];

    // Revisions from database + timeline + memory store
    const eventRevisions = timelineEvents
      .filter((e) => e.event_type === "revision_requested")
      .map((e) => ({
        id: e.id,
        requested_at: new Date(e.created_at).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        message: e.message || "Please make the requested adjustments.",
      }));

    const memoryRevisions = memoryTimelineStore.__orderOverrides?.[o.id]?.revisions || [];
    const allRevisions = [...dbRevisions, ...eventRevisions];
    for (const mr of memoryRevisions) {
      if (
        !allRevisions.some(
          (ar) =>
            ar.id === mr.id ||
            (ar.message && mr.message && ar.message.trim() === mr.message.trim())
        )
      ) {
        allRevisions.push(mr);
      }
    }

    // Map chat messages from database deliverables + memory store
    const dbChatMessages: OrderChatMessage[] = chatRows.map((r) => {
      try {
        const parsed = JSON.parse(r.file_name);
        return {
          id: parsed.id || r.id,
          sender: parsed.sender || (r.file_path?.includes("seller") ? "Chanuka Jeewantha" : (o.customer_name || "Client")),
          role: (parsed.role || (r.file_path?.includes("seller") ? "seller" : "buyer")) as Role,
          text: parsed.text || r.label.replace(/^Chat (from [^:]+: )?/, ""),
          time: parsed.time || new Date(r.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true }),
          timestamp: parsed.timestamp || r.created_at,
        };
      } catch {
        return {
          id: r.id,
          sender: r.file_path?.includes("seller") ? "Chanuka Jeewantha" : (o.customer_name || "Client"),
          role: (r.file_path?.includes("seller") ? "seller" : "buyer") as Role,
          text: r.label.replace(/^Chat (from [^:]+: )?/, ""),
          time: new Date(r.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "numeric", hour12: true }),
          timestamp: r.created_at,
        };
      }
    });

    const defaultGreeting: OrderChatMessage = {
      id: "msg-welcome",
      sender: "Chanuka Jeewantha",
      role: "seller",
      text: `Hello ${o.customer_name || "there"}! Thank you for placing your order (#${o.ref}). I am ready to review your career background and craft your executive career documents. Feel free to send any questions or notes here!`,
      time: new Date(o.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      timestamp: o.created_at,
    };

    const memoryChat: OrderChatMessage[] =
      memoryTimelineStore.__orderOverrides?.[o.id]?.chat_messages ||
      memoryTimelineStore.__orderOverrides?.[o.ref]?.chat_messages ||
      [];

    const allChatMessages: OrderChatMessage[] = [
      defaultGreeting,
      ...dbChatMessages,
    ];
    for (const mc of memoryChat) {
      if (
        mc.id !== "msg-welcome" &&
        !allChatMessages.some(
          (ac) => ac.id === mc.id || (ac.text === mc.text && ac.timestamp === mc.timestamp)
        )
      ) {
        allChatMessages.push(mc);
      }
    }

    const timelineChatEvents = (timelineEvents || []).filter((e) => e.event_type === "chat_message");
    for (const te of timelineChatEvents) {
      const alreadyPresent = allChatMessages.some(
        (m) => m.id === te.id || (m.text === te.message && m.timestamp === te.created_at)
      );
      if (!alreadyPresent) {
        allChatMessages.push({
          id: te.id,
          sender: te.sender_name || (te.sender_role === "seller" ? "Chanuka Jeewantha" : (o.customer_name || "Client")),
          role: (te.sender_role || "seller") as Role,
          text: te.message || "",
          time: new Date(te.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          timestamp: te.created_at,
        });
      }
    }

    allChatMessages.sort((a, b) => {
      const ta = a.timestamp ? new Date(a.timestamp).getTime() : 0;
      const tb = b.timestamp ? new Date(b.timestamp).getTime() : 0;
      return ta - tb;
    });

    // Review from timeline
    const reviewEvent = timelineEvents.find((e) => e.event_type === "buyer_review");

    // Format questionnaire requirements from existing intake brief (if submitted)
    const requirements = brief
      ? [
          {
            question: "Target Role & Executive Direction",
            answer: brief.target_role || "(Not specified)",
          },
          {
            question: "Current CV or Resume",
            file: brief.cv_filename
              ? {
                  id: "brief-cv",
                  name: brief.cv_filename,
                  size: "Client CV File",
                  type: brief.cv_filename.endsWith(".docx") ? "docx" : "pdf",
                  url: brief.cv_path ? `/api/download?path=${encodeURIComponent(brief.cv_path)}` : undefined,
                }
              : undefined,
            answer: brief.cv_filename ? undefined : "(No initial CV attached)",
          },
          {
            question: "LinkedIn Profile",
            answer: brief.linkedin || "(Not provided)",
          },
          {
            question: "Career History & Experience",
            answer: brief.experience || "(Refer to attached CV)",
          },
          {
            question: "Education & Qualifications",
            answer: brief.education || "(Refer to attached CV)",
          },
          {
            question: "Key Achievements & Skills",
            answer: [brief.achievements, brief.skills].filter(Boolean).join("\n\n") || "(Provided in brief)",
          },
          {
            question: "Additional Notes & Target Market Instructions",
            answer: brief.additional || "(None)",
          },
        ]
      : [];

    // Current status mapping
    let computedStatus: OrderStatus = "in_progress";
    if (o.status === "completed") computedStatus = "completed";
    else if (o.status === "draft_delivered") computedStatus = "delivered";
    else if (o.status === "revision") computedStatus = "in_revision";
    else if (o.status === "new" && !brief) computedStatus = "pending_requirements";
    else if (o.status === "new" && brief) computedStatus = "in_progress";

    const overrides = memoryTimelineStore.__orderOverrides?.[o.id] || {};
    const memoryExt = memoryTimelineStore.__orderOverrides?.[o.id]?.extension_request;
    const activeExtension = overrides.extension_request || dbExtRequest || memoryExt;

    const deadlineInfo = resolveOrderDeadline({
      created_at: o.created_at,
      delivery_id: o.delivery_id,
      delivery_window: o.delivery_window,
      package_id: o.package_id,
      deadline: o.deadline,
    });

    // If extension was accepted, ensure deadline reflects extended date
    if (activeExtension?.status === "accepted" && activeExtension.new_due_timestamp) {
      if (activeExtension.new_due_timestamp > deadlineInfo.dueTimestamp) {
        deadlineInfo.dueTimestamp = activeExtension.new_due_timestamp;
        deadlineInfo.deliveryDateFormatted =
          activeExtension.new_delivery_date ||
          new Date(activeExtension.new_due_timestamp).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          });
      }
    }

    return {
      order_id: o.id,
      order_number: o.ref, // Live order reference (e.g. CJ-D39BA75A)
      gig_title: `${o.package_name || "Executive CV & Career Strategy"} for ${o.customer_name || "Client"}`,
      gig_image: "/images/chanuka-portrait.jpg",
      package_name: `${o.package_name || "Executive Package"} · ${o.level_name || "Professional"}`,
      buyer_name: o.customer_name || "Client",
      buyer_username: (o.customer_name || "client").toLowerCase().replace(/\s+/g, "_"),
      buyer_country: o.target_country || o.billing_country || "International",
      buyer_last_seen: "Online",
      seller_name: "Chanuka Jeewantha",
      seller_avatar: "/images/chanuka-portrait.jpg",
      seller_title: "Executive CV & Career Branding Specialist",
      status: overrides.status || computedStatus,
      order_date: new Date(o.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
      delivery_date: deadlineInfo.deliveryDateFormatted,
      due_timestamp: deadlineInfo.dueTimestamp,
      items: [
        {
          name: `${o.package_name || "Executive Package"} - ${o.level_name || "Career Strategy"}`,
          quantity: 1,
          duration_days: deadlineInfo.durationDays,
          price: o.total_usd || 15,
        },
      ],
      total_price: o.total_usd || 15,
      currency_symbol: o.site === "lk" ? "Rs " : "$",
      currency: o.site === "lk" ? "LKR" : "USD",
      revisions_included: Math.max(
        2 + totalExtraRevisions,
        overrides.revisions_included ?? (2 + totalExtraRevisions)
      ),
      revisions_used: allRevisions.length,
      private_notes: o.admin_notes || "",
      requirements,
      requirements_submitted: !!brief,
      requirements_submitted_at: brief?.created_at
        ? new Date(brief.created_at).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })
        : undefined,
      deliveries: allDeliveries, // REAL DELIVERIES ONLY!
      revisions: allRevisions,   // REAL REVISIONS ONLY!
      completion: (computedStatus === "completed" || overrides.status === "completed")
        ? { completed_at: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) }
        : undefined,
      buyer_review: reviewEvent
        ? {
            communication: reviewEvent.metadata?.communication || 5.0,
            quality: reviewEvent.metadata?.quality || 5.0,
            value: reviewEvent.metadata?.value || 5.0,
            average: reviewEvent.metadata?.average || 5.0,
            comment: reviewEvent.message || "Excellent service!",
            created_at: new Date(reviewEvent.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            seller_response: reviewEvent.metadata?.seller_response,
            seller_response_at: reviewEvent.metadata?.seller_response_at,
          }
        : undefined,
      seller_review: undefined,
      extension_request: activeExtension,
      ...overrides,
      chat_messages: allChatMessages,
    };
  } catch (e) {
    console.error("Failed to load order workflow data:", e);
    return INITIAL_FIVERR_ORDER;
  }
}

/**
 * Deliver completed work (Chanuka / Seller).
 * Non-destructive:
 * 1. Inserts event into 'order_timeline_events'
 * 2. Also adds file record to existing 'deliverables' table for backward compatibility
 * 3. Updates 'orders.status' to 'draft_delivered'
 */
export async function deliverOrderWork({
  orderId,
  message,
  files,
  isRevision = false,
}: {
  orderId: string;
  message: string;
  files: DeliverableFile[];
  isRevision?: boolean;
}) {
  const timestamp = new Date().toISOString();

  // Try saving to database
  let realOrderId = orderId;
  let orderRef = orderId;
  let exactRevCount: number | null = null;
  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      const ord = await resolveOrderRow(db, orderId);
      if (ord) {
        realOrderId = ord.id;
        orderRef = ord.ref || orderId;
      }

      // 1. Update existing untouched 'orders' table status
      await db
        .from("orders")
        .update({ status: "draft_delivered", updated_at: timestamp })
        .eq("id", realOrderId);

      // 2. Add to existing untouched 'deliverables' table for backward compatibility
      for (const f of files) {
        await db.from("deliverables").insert({
          order_id: realOrderId,
          label: f.name,
          file_name: f.name,
          file_path: f.url || `deliverables/${realOrderId}/${f.name}`,
          kind: isRevision ? "revision" : "final",
          site: SITE_KEY,
        });
      }

      // 3. Add to timeline events table (if exists)
      await db.from("order_timeline_events").insert({
        order_id: realOrderId,
        event_type: "delivery",
        sender_role: "seller",
        sender_name: "Chanuka Jeewantha",
        message,
        files,
        metadata: { is_revision: isRevision, version: isRevision ? 2 : 1 },
      });

      // 4. Send an in-app chat message notifying client that their CV is delivered
      try {
        const ordCustName = ord?.customer_name || "there";
        const deliveryChatMsg: OrderChatMessage = {
          id: `msg-delivery-${Date.now()}`,
          sender: "Chanuka Jeewantha",
          role: "seller",
          text: `📦 Hi ${ordCustName}! I have just prepared and delivered your customized career documents. Please download and inspect your files below. If you're satisfied, click Approve & Complete, or request a revision if you need any adjustments!`,
          time: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          timestamp,
        };
        await db.from("deliverables").insert({
          order_id: realOrderId,
          label: `Chat from Chanuka Jeewantha: Work delivered`,
          file_path: "chat:seller",
          file_name: JSON.stringify(deliveryChatMsg),
          kind: "chat_message",
          site: SITE_KEY,
        });
      } catch {}
    } catch (e) {
      console.warn("DB delivery save notice:", e);
    }
  }

  // Also update memory store
  const existingOverrides =
    memoryTimelineStore.__orderOverrides?.[realOrderId] ||
    memoryTimelineStore.__orderOverrides?.[orderRef] ||
    memoryTimelineStore.__orderOverrides?.[orderId] ||
    {};
  const currentDeliveries = existingOverrides.deliveries || [];
  const currentChat = existingOverrides.chat_messages || [];
  const autoChatMsg: OrderChatMessage = {
    id: `msg-delivery-${Date.now()}`,
    sender: "Chanuka Jeewantha",
    role: "seller",
    text: `📦 Hi! I have just prepared and delivered your customized career documents. Please download and inspect your files below. If you're satisfied, click Approve & Complete, or request a revision if you need any adjustments!`,
    time: "Just now",
    timestamp,
  };
  const newDelivery = {
    id: `del-${Date.now()}`,
    delivery_number: currentDeliveries.length + 1,
    delivered_at: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    message,
    files,
  };

  const updatedDeliveryOverrides = {
    ...existingOverrides,
    status: "delivered" as OrderStatus,
    deliveries: [...currentDeliveries, newDelivery],
    chat_messages: [...currentChat, autoChatMsg],
  };

  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [realOrderId]: updatedDeliveryOverrides,
    [orderRef]: updatedDeliveryOverrides,
    [orderId]: updatedDeliveryOverrides,
  };

  revalidatePath("/order-workflow");
  revalidatePath(`/admin/orders/${realOrderId}`);
  revalidatePath(`/admin/orders/${orderId}`);
  revalidatePath("/dashboard");
  return { success: true, delivery: newDelivery };
}

/**
 * Request a revision (Client / Buyer).
 * Non-destructive:
 * 1. Inserts 'revision_requested' event into 'order_timeline_events'
 * 2. Updates 'orders.status' to 'revision'
 */
export async function requestOrderRevision({
  orderId,
  message,
}: {
  orderId: string;
  message: string;
}) {
  const timestamp = new Date().toISOString();

  let realOrderId = orderId;
  let orderRef = orderId;
  let exactRevCount: number | null = null;
  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      const ord = await resolveOrderRow(db, orderId);
      if (ord) {
        realOrderId = ord.id;
        orderRef = ord.ref || orderId;
      }

      // 1. Update orders table status to 'revision'
      await db
        .from("orders")
        .update({ status: "revision", updated_at: timestamp })
        .eq("id", realOrderId);

      // 2. Persist revision into deliverables table with kind 'revision_request'
      await db.from("deliverables").insert({
        order_id: realOrderId,
        label: `Revision Request: ${message.slice(0, 100)}`,
        file_path: "revision:pending",
        file_name: JSON.stringify({ message, requested_at: timestamp }),
        kind: "revision_request",
        site: SITE_KEY,
      });

      const { count } = await db
        .from("deliverables")
        .select("*", { count: "exact", head: true })
        .eq("order_id", realOrderId)
        .eq("kind", "revision_request");
      if (typeof count === "number") {
        exactRevCount = count;
      }

      // 3. Persist automated chat message into deliverables table so it appears in the chat drawer
      try {
        const ordCustName = ord?.customer_name || "Client";
        const revChatMsg: OrderChatMessage = {
          id: `msg-rev-${Date.now()}`,
          sender: ordCustName,
          role: "buyer",
          text: `📝 Revision Request:\n\n"${message}"`,
          time: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          timestamp,
        };
        await db.from("deliverables").insert({
          order_id: realOrderId,
          label: `Chat from ${ordCustName}: Revision Request`,
          file_path: "chat:buyer",
          file_name: JSON.stringify(revChatMsg),
          kind: "chat_message",
          site: SITE_KEY,
        });
      } catch {}
    } catch (e) {
      console.warn("DB revision save notice:", e);
    }
  }

  const existingOverrides =
    memoryTimelineStore.__orderOverrides?.[realOrderId] ||
    memoryTimelineStore.__orderOverrides?.[orderRef] ||
    memoryTimelineStore.__orderOverrides?.[orderId] ||
    {};
  const currentRevisions = (existingOverrides.revisions || []).filter(
    (r: any) => r.message?.trim() !== message.trim()
  );
  const currentChat = existingOverrides.chat_messages || [];
  const newRevision = {
    id: `rev-${Date.now()}`,
    requested_at: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    message,
  };

  const nextRevisions = [...currentRevisions, newRevision];
  const finalUsedCount = exactRevCount ?? nextRevisions.length;

  const autoRevChatMsg: OrderChatMessage = {
    id: `msg-rev-${Date.now()}`,
    sender: "Client",
    role: "buyer",
    text: `📝 Revision Request (Round ${finalUsedCount}):\n\n"${message}"`,
    time: "Just now",
    timestamp,
  };

  const updatedOverride = {
    ...existingOverrides,
    status: "in_revision" as OrderStatus,
    revisions_used: finalUsedCount,
    revisions: nextRevisions,
    chat_messages: [...currentChat, autoRevChatMsg],
  };

  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [realOrderId]: updatedOverride,
    [orderRef]: updatedOverride,
    [orderId]: updatedOverride,
  };

  revalidatePath("/order-workflow");
  revalidatePath(`/admin/orders/${realOrderId}`);
  revalidatePath(`/admin/orders/${orderId}`);
  revalidatePath("/dashboard");
  return { success: true, revision: newRevision, revisions_used: finalUsedCount };
}

/**
 * Grant extra revision round(s) to the client (Chanuka / Seller / Admin).
 * Unlocks the revision limit when a client needs an additional review round.
 */
export async function grantOrderExtraRevision({
  orderId,
  count = 1,
  note = "",
}: {
  orderId: string;
  count?: number;
  note?: string;
}) {
  const timestamp = new Date().toISOString();
  let realOrderId = orderId;
  let orderRef = orderId;

  const grantChatMsg: OrderChatMessage = {
    id: `msg-grant-rev-${Date.now()}`,
    sender: "Chanuka Jeewantha",
    role: "seller",
    text: `✨ Extra Revision Granted (+${count} round${count > 1 ? "s" : ""}):\n\n${
      note.trim() ? `"${note.trim()}"\n\n` : ""
    }I have unlocked an additional revision round for your order. You can now submit your revision notes directly using the "Request Revision" button!`,
    time: "Just now",
    timestamp,
  };

  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      const ord = await resolveOrderRow(db, orderId);
      if (ord) {
        realOrderId = ord.id;
        orderRef = ord.ref || orderId;
      }

      // 1. Insert into deliverables table with kind 'extra_revision'
      await db.from("deliverables").insert({
        order_id: realOrderId,
        label: `Extra Revision Granted (+${count} round${count > 1 ? "s" : ""})`,
        file_path: "revision:extra",
        file_name: JSON.stringify({
          extra_revisions: count,
          granted_at: timestamp,
          note: note.trim() || undefined,
        }),
        kind: "extra_revision",
        site: SITE_KEY,
      });

      // 2. Post automated chat message from Chanuka into deliverables
      await db.from("deliverables").insert({
        order_id: realOrderId,
        label: "Chat from Chanuka Jeewantha: Extra Revision Granted",
        file_path: "chat:seller",
        file_name: JSON.stringify(grantChatMsg),
        kind: "chat_message",
        site: SITE_KEY,
      });
    } catch (e) {
      console.warn("DB grant extra revision notice:", e);
    }
  }

  const existingOverrides =
    memoryTimelineStore.__orderOverrides?.[realOrderId] ||
    memoryTimelineStore.__orderOverrides?.[orderRef] ||
    memoryTimelineStore.__orderOverrides?.[orderId] ||
    {};

  const currentRevisionsIncluded = existingOverrides.revisions_included ?? 2;
  const newRevisionsIncluded = currentRevisionsIncluded + count;
  const currentChat = existingOverrides.chat_messages || [];

  const updatedOverrides = {
    ...existingOverrides,
    revisions_included: newRevisionsIncluded,
    chat_messages: [...currentChat, grantChatMsg],
  };

  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [realOrderId]: updatedOverrides,
    [orderRef]: updatedOverrides,
    [orderId]: updatedOverrides,
  };

  revalidatePath("/order-workflow");
  revalidatePath(`/admin/orders/${realOrderId}`);
  revalidatePath(`/admin/orders/${orderId}`);
  revalidatePath("/dashboard");

  return {
    success: true,
    revisions_included: newRevisionsIncluded,
    message: grantChatMsg,
  };
}

/**
 * Accept delivery & complete order (Client / Buyer).
 */
export async function completeOrder({ orderId }: { orderId: string }) {
  const timestamp = new Date().toISOString();

  let realOrderId = orderId;
  let orderRef = orderId;
  let exactRevCount: number | null = null;
  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      const ord = await resolveOrderRow(db, orderId);
      if (ord) {
        realOrderId = ord.id;
        orderRef = ord.ref || orderId;
      }
      await db.from("orders").update({ status: "completed", updated_at: timestamp }).eq("id", realOrderId);
      await db.from("order_timeline_events").insert({
        order_id: realOrderId,
        event_type: "order_completed",
        sender_role: "buyer",
        message: "Order approved and completed by client.",
      });

      // Send an in-app chat message indicating client reviewed & approved their CV
      try {
        const buyerName = ord?.customer_name || "Client";
        const approvalChatMsg: OrderChatMessage = {
          id: `msg-completed-${Date.now()}`,
          sender: buyerName,
          role: "buyer",
          text: `🎉 I have reviewed and approved my documents! Thank you so much for the exceptional work.`,
          time: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
          timestamp,
        };
        await db.from("deliverables").insert({
          order_id: realOrderId,
          label: `Chat from ${buyerName}: Order approved`,
          file_path: "chat:buyer",
          file_name: JSON.stringify(approvalChatMsg),
          kind: "chat_message",
          site: SITE_KEY,
        });
      } catch {}
    } catch (e) {
      console.warn("DB completion save notice:", e);
    }
  }

  const existingOverrides =
    memoryTimelineStore.__orderOverrides?.[realOrderId] ||
    memoryTimelineStore.__orderOverrides?.[orderRef] ||
    memoryTimelineStore.__orderOverrides?.[orderId] ||
    {};
  const updatedComplOverrides = {
    ...existingOverrides,
    status: "completed" as OrderStatus,
    completion: {
      completed_at: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    },
  };
  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [realOrderId]: updatedComplOverrides,
    [orderRef]: updatedComplOverrides,
    [orderId]: updatedComplOverrides,
  };

  revalidatePath("/order-workflow");
  revalidatePath(`/admin/orders/${realOrderId}`);
  revalidatePath(`/admin/orders/${orderId}`);
  revalidatePath("/dashboard");
  return { success: true };
}

/**
 * Submit client review and 5-star rating.
 */
export async function submitOrderReview({
  orderId,
  rating,
  comment,
  dimensions = { communication: 5.0, quality: 5.0, value: 5.0 },
}: {
  orderId: string;
  rating: number;
  comment: string;
  dimensions?: { communication: number; quality: number; value: number };
}) {
  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      await db.from("order_timeline_events").insert({
        order_id: orderId,
        event_type: "buyer_review",
        sender_role: "buyer",
        message: comment,
        metadata: {
          average: rating,
          ...dimensions,
        },
      });
    } catch (e) {
      console.warn("DB review save notice:", e);
    }
  }

  const existingOverrides = memoryTimelineStore.__orderOverrides?.[orderId] || {};
  const review = {
    ...dimensions,
    average: rating,
    comment,
    created_at: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
  };

  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [orderId]: {
      ...existingOverrides,
      buyer_review: review,
    },
  };

  revalidatePath("/order-workflow");
  return { success: true, review };
}

/**
 * Reply publicly to client review (Chanuka / Seller).
 */
export async function replyToOrderReview({
  orderId,
  replyText,
}: {
  orderId: string;
  replyText: string;
}) {
  const existingOverrides = memoryTimelineStore.__orderOverrides?.[orderId] || {};
  const currentReview = existingOverrides.buyer_review || INITIAL_FIVERR_ORDER.buyer_review;

  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [orderId]: {
      ...existingOverrides,
      buyer_review: currentReview
        ? {
            ...currentReview,
            seller_response: replyText,
            seller_response_at: "Just now",
          }
        : undefined,
    },
  };

  revalidatePath("/order-workflow");
  return { success: true };
}

/**
 * Request delivery deadline extension (Seller / Chanuka).
 * 1. Computes new delivery deadline (+days)
 * 2. Persists extension request to Supabase 'deliverables' table with kind 'extension_request'
 * 3. Updates in-memory store and revalidates order-workflow
 */
export async function requestOrderDeadlineExtension({
  orderId,
  days,
  reason,
}: {
  orderId: string;
  days: number;
  reason: string;
}) {
  const currentData = await getOrderWorkflowData(orderId);
  const currentDue = currentData.due_timestamp || Date.now();
  const newDueTimestamp = currentDue + days * 86400000;
  const newDeliveryDate = new Date(newDueTimestamp).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const extRequest: ExtensionRequest = {
    id: `ext-${Date.now()}`,
    days,
    reason: reason.trim(),
    requested_at: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }),
    status: "pending",
    new_delivery_date: newDeliveryDate,
    new_due_timestamp: newDueTimestamp,
  };

  let realOrderId = orderId;
  let orderRef = orderId;
  let exactRevCount: number | null = null;
  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      const ord = await resolveOrderRow(db, orderId);
      if (ord) {
        realOrderId = ord.id;
        orderRef = ord.ref || orderId;
      }

      await db.from("deliverables").insert({
        order_id: realOrderId,
        label: `Extension Request (+${days} ${days === 1 ? "day" : "days"})`,
        file_path: "extension:pending",
        file_name: JSON.stringify(extRequest),
        kind: "extension_request",
        site: SITE_KEY,
      });
    } catch (e) {
      console.warn("DB save extension request error:", e);
    }
  }

  const existingOverrides =
    memoryTimelineStore.__orderOverrides?.[realOrderId] ||
    memoryTimelineStore.__orderOverrides?.[orderRef] ||
    memoryTimelineStore.__orderOverrides?.[orderId] ||
    {};
  const updatedExtOverrides = {
    ...existingOverrides,
    extension_request: extRequest,
  };
  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [realOrderId]: updatedExtOverrides,
    [orderRef]: updatedExtOverrides,
    [orderId]: updatedExtOverrides,
  };

  revalidatePath("/order-workflow");
  revalidatePath(`/admin/orders/${realOrderId}`);
  revalidatePath(`/admin/orders/${orderId}`);
  return { success: true, extension: extRequest };
}

/**
 * Respond to deadline extension (Client / Buyer).
 * If approved:
 * 1. Updates order deadline in Supabase 'orders.deadline'
 * 2. Updates extension status to 'accepted'
 * 3. Immediately shifts countdown timer to the new extended deadline
 * If declined:
 * 1. Keeps original deadline
 * 2. Updates extension status to 'rejected'
 */
export async function respondToOrderDeadlineExtension({
  orderId,
  approved,
}: {
  orderId: string;
  approved: boolean;
}) {
  const currentData = await getOrderWorkflowData(orderId);
  const ext = currentData.extension_request;
  if (!ext) {
    return { success: false, error: "No active extension request found" };
  }

  const updatedStatus = approved ? "accepted" : "rejected";
  const respondedAt = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const updatedExt: ExtensionRequest = {
    ...ext,
    status: updatedStatus,
    responded_at: respondedAt,
  };

  let realOrderId = orderId;
  let orderRef = orderId;
  let exactRevCount: number | null = null;
  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      const ord = await resolveOrderRow(db, orderId);
      if (ord) {
        realOrderId = ord.id;
        orderRef = ord.ref || orderId;
      }

      if (approved && ext.new_due_timestamp) {
        await db.from("orders").update({
          deadline: new Date(ext.new_due_timestamp).toISOString(),
          updated_at: new Date().toISOString(),
        }).eq("id", realOrderId);
      }

      await db.from("deliverables").insert({
        order_id: realOrderId,
        label: `Extension ${approved ? "Accepted" : "Declined"}`,
        file_path: `extension:${updatedStatus}`,
        file_name: JSON.stringify(updatedExt),
        kind: "extension_request",
        site: SITE_KEY,
      });
    } catch (e) {
      console.warn("DB respond extension error:", e);
    }
  }

  const existingOverrides =
    memoryTimelineStore.__orderOverrides?.[realOrderId] ||
    memoryTimelineStore.__orderOverrides?.[orderRef] ||
    memoryTimelineStore.__orderOverrides?.[orderId] ||
    {};
  const updatedRespOverrides = {
    ...existingOverrides,
    extension_request: updatedExt,
    ...(approved && ext.new_due_timestamp
      ? {
          due_timestamp: ext.new_due_timestamp,
          delivery_date: ext.new_delivery_date,
        }
      : {}),
  };
  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [realOrderId]: updatedRespOverrides,
    [orderRef]: updatedRespOverrides,
    [orderId]: updatedRespOverrides,
  };

  revalidatePath("/order-workflow");
  revalidatePath(`/admin/orders/${realOrderId}`);
  revalidatePath(`/admin/orders/${orderId}`);
  return { success: true, extension: updatedExt };
}

/**
 * Send an in-app chat message between Buyer and Seller.
 * Persists directly into 'deliverables' table with kind 'chat_message'
 * and syncs across real-time polling sessions.
 */
export async function sendOrderChatMessage({
  orderId,
  text,
  senderRole,
  senderName,
}: {
  orderId: string;
  text: string;
  senderRole: Role;
  senderName: string;
}) {
  const timestamp = new Date().toISOString();
  const formattedTime = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const newMsg: OrderChatMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    sender: senderName,
    role: senderRole,
    text: text.trim(),
    time: formattedTime,
    timestamp,
  };

  let realOrderId = orderId;
  let orderRef = orderId;
  if (supabaseConfigured()) {
    try {
      const db = createAdminClient();
      const ord = await resolveOrderRow(db, orderId);
      if (ord) {
        realOrderId = ord.id;
        orderRef = ord.ref || orderId;
      }

      const { error: delivErr } = await db.from("deliverables").insert({
        order_id: realOrderId,
        label: `Chat from ${senderName}: ${newMsg.text.slice(0, 80)}`,
        file_path: `chat:${senderRole}`,
        file_name: JSON.stringify(newMsg),
        kind: "chat_message",
        site: SITE_KEY,
      });
      if (delivErr) {
        console.warn("Deliverables chat insert error:", delivErr);
      }

      try {
        await db.from("order_timeline_events").insert({
          order_id: realOrderId,
          event_type: "chat_message",
          sender_role: senderRole,
          sender_name: senderName,
          message: newMsg.text,
          metadata: { id: newMsg.id, time: newMsg.time },
        });
      } catch {}
    } catch (e) {
      console.warn("DB chat message save notice:", e);
    }
  }

  const existingOverrides =
    memoryTimelineStore.__orderOverrides?.[realOrderId] ||
    memoryTimelineStore.__orderOverrides?.[orderRef] ||
    memoryTimelineStore.__orderOverrides?.[orderId] ||
    {};
  const currentMsgs = existingOverrides.chat_messages || [];
  const nextMsgs = [...currentMsgs, newMsg];

  const updatedOverride = {
    ...existingOverrides,
    chat_messages: nextMsgs,
  };
  memoryTimelineStore.__orderOverrides = {
    ...memoryTimelineStore.__orderOverrides,
    [realOrderId]: updatedOverride,
    [orderRef]: updatedOverride,
    [orderId]: updatedOverride,
  };

  revalidatePath("/order-workflow");
  revalidatePath(`/admin/orders/${realOrderId}`);
  revalidatePath(`/admin/orders/${orderId}`);
  return { success: true, message: newMsg };
}

