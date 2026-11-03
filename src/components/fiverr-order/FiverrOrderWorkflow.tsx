"use client";

import { useState, useEffect, useTransition, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  type FiverrOrderData,
  type OrderStatus,
  type Role,
  type OrderChatMessage,
  INITIAL_FIVERR_ORDER,
  type DeliverableFile,
} from "@/lib/fiverr-order-types";
import {
  deliverOrderWork,
  requestOrderRevision,
  completeOrder,
  replyToOrderReview,
  requestOrderDeadlineExtension,
  respondToOrderDeadlineExtension,
  getOrderWorkflowData,
  sendOrderChatMessage,
  grantOrderExtraRevision,
} from "@/lib/order-workflow-actions";

interface Props {
  initialOrder?: FiverrOrderData;
  availableOrders?: Array<{ id: string; ref: string; customer_name: string; status: string }>;
  initialRole?: Role;
  isAdmin?: boolean;
}

export function FiverrOrderWorkflow({
  initialOrder = INITIAL_FIVERR_ORDER,
  availableOrders = [],
  initialRole = "seller",
  isAdmin = false,
}: Props) {
  // Working order state
  const [order, setOrder] = useState<FiverrOrderData>(initialOrder);
  const [isPending, startTransition] = useTransition();

  const remainingRevisions = Math.max(0, order.revisions_included - order.revisions_used);

  // Active view tab: Activity | Details | Requirements
  const [activeTab, setActiveTab] = useState<"activity" | "details" | "requirements">("activity");

  // Role toggle: Seller View (Chanuka) vs Buyer View (Client)
  const [role, setRole] = useState<Role>(initialRole);

  // Simulation dock is ONLY rendered for admins or when explicitly testing seller mode
  const showAdminDock = isAdmin || (initialRole === "seller");

  // Order Details accordion in timeline
  const [detailsOpen, setDetailsOpen] = useState(true);

  // Delivery Modal State (Seller)
  const [deliverModalOpen, setDeliverModalOpen] = useState(false);
  const [deliveryMessage, setDeliveryMessage] = useState(
    `Hi ${order.buyer_name}! I have finalized your tailored documents. Please download and review the attached deliverables. Let me know if you would like any refinements!`
  );
  const [deliveryFiles, setDeliveryFiles] = useState<DeliverableFile[]>([
    {
      id: "del-new-1",
      name: `${order.buyer_name.replace(/\s+/g, "_")}_Executive_CV_v2.docx`,
      size: "94 KB",
      type: "docx",
    },
    {
      id: "del-new-2",
      name: `${order.buyer_name.replace(/\s+/g, "_")}_Executive_CV_v2.pdf`,
      size: "148 KB",
      type: "pdf",
    },
  ]);
  const [newFileCustomName, setNewFileCustomName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Revision Request Modal State (Buyer)
  const [revisionModalOpen, setRevisionModalOpen] = useState(false);
  const [revisionMessage, setRevisionMessage] = useState("");

  // Review Response State (Seller replying to review)
  const [sellerResponseText, setSellerResponseText] = useState(
    order.buyer_review?.seller_response || ""
  );
  const [responseSubmitted, setResponseSubmitted] = useState(
    !!order.buyer_review?.seller_response
  );

  // Private note state
  const [privateNote, setPrivateNote] = useState(order.private_notes || "");
  const [noteSaved, setNoteSaved] = useState(false);

  // One-time client delivery notice state
  const [deliveryNoticeOpen, setDeliveryNoticeOpen] = useState(false);

  // One-time seller revision notice state
  const [sellerRevisionNoticeOpen, setSellerRevisionNoticeOpen] = useState(false);

  // Grant Extra Revision Modal State (Seller)
  const [grantRevisionModalOpen, setGrantRevisionModalOpen] = useState(false);
  const [grantRevisionCount, setGrantRevisionCount] = useState<number>(1);
  const [grantRevisionNote, setGrantRevisionNote] = useState<string>("");
  const [grantSuccessNotice, setGrantSuccessNotice] = useState<string | null>(null);

  // Chat conversation state
  const [chatOpen, setChatOpen] = useState(false);
  const [readMessageCount, setReadMessageCount] = useState<number>(0);
  const [newChatInput, setNewChatInput] = useState("");
  const chatMessagesEndRef = useRef<HTMLDivElement>(null);

  const activeChatMessages: OrderChatMessage[] =
    order.chat_messages && order.chat_messages.length > 0
      ? order.chat_messages
      : [
          {
            id: "welcome-default",
            sender: "Chanuka Jeewantha",
            role: "seller",
            text: `Hello ${order.buyer_name}! Thank you for placing your order (#${order.order_number}). I am ready to review your career background and craft your executive career documents. Feel free to send any questions or notes here!`,
            time: order.order_date,
          },
        ];

  // Auto-mark read when chat drawer is open
  useEffect(() => {
    if (chatOpen) {
      setReadMessageCount(activeChatMessages.length);
    }
  }, [chatOpen, activeChatMessages.length]);

  const unreadCount = chatOpen
    ? 0
    : activeChatMessages
        .slice(readMessageCount)
        .filter(
          (m) =>
            m.role !== role &&
            m.id !== "msg-welcome" &&
            m.id !== "welcome-default"
        ).length;

  const handleSendMessage = () => {
    if (!newChatInput.trim()) return;
    const text = newChatInput.trim();
    const senderName =
      role === "seller" ? "Chanuka Jeewantha" : (order.buyer_name || order.buyer_username);
    const newMsg: OrderChatMessage = {
      id: `msg-${Date.now()}`,
      sender: senderName,
      role: role,
      text,
      time: "Just now",
      timestamp: new Date().toISOString(),
    };

    setOrder((prev) => ({
      ...prev,
      chat_messages: [...(prev.chat_messages || activeChatMessages), newMsg],
    }));
    setNewChatInput("");

    setTimeout(() => {
      chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    startTransition(async () => {
      const res = await sendOrderChatMessage({
        orderId: order.order_id,
        text,
        senderRole: role,
        senderName,
      });
      if (res && res.success && res.message) {
        setOrder((prev) => ({
          ...prev,
          chat_messages: (prev.chat_messages || []).map((m) =>
            m.id === newMsg.id ? res.message : m
          ),
        }));
      }
    });
  };

  useEffect(() => {
    if (chatOpen) {
      chatMessagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatOpen, order.chat_messages?.length]);

  // One-time delivery notice popup for the client when work is delivered
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (role !== "buyer") return;
    if (order.status !== "delivered") return;
    if (!order.deliveries || order.deliveries.length === 0) return;

    const latestDelivery = order.deliveries[order.deliveries.length - 1];
    const deliveryKey = `seen_delivery_notice_${order.order_id}_${latestDelivery.id || latestDelivery.delivery_number}`;
    const alreadySeen = localStorage.getItem(deliveryKey);

    if (!alreadySeen) {
      setDeliveryNoticeOpen(true);
    }
  }, [role, order.status, order.order_id, order.deliveries]);

  const handleDismissDeliveryNotice = (scrollToFiles = false) => {
    setDeliveryNoticeOpen(false);
    if (typeof window !== "undefined" && order.deliveries && order.deliveries.length > 0) {
      const latestDelivery = order.deliveries[order.deliveries.length - 1];
      const deliveryKey = `seen_delivery_notice_${order.order_id}_${latestDelivery.id || latestDelivery.delivery_number}`;
      try {
        localStorage.setItem(deliveryKey, "true");
      } catch {}
    }
    if (scrollToFiles) {
      setTimeout(() => {
        const el = document.getElementById("deliverables-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  };

  // One-time revision request notification popup for the seller/admin
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (role !== "seller") return;
    if (order.status !== "in_revision") return;
    if (!order.revisions || order.revisions.length === 0) return;

    const latestRevision = order.revisions[order.revisions.length - 1];
    const revisionKey = `seen_revision_notice_${order.order_id}_${latestRevision.id || order.revisions_used}`;
    const alreadySeen = localStorage.getItem(revisionKey);

    if (!alreadySeen) {
      setSellerRevisionNoticeOpen(true);
    }
  }, [role, order.status, order.order_id, order.revisions, order.revisions_used]);

  const handleDismissSellerRevisionNotice = (action?: "deliver" | "chat") => {
    setSellerRevisionNoticeOpen(false);
    if (typeof window !== "undefined" && order.revisions && order.revisions.length > 0) {
      const latestRevision = order.revisions[order.revisions.length - 1];
      const revisionKey = `seen_revision_notice_${order.order_id}_${latestRevision.id || order.revisions_used}`;
      try {
        localStorage.setItem(revisionKey, "true");
      } catch {}
    }
    if (action === "deliver") {
      setDeliverModalOpen(true);
    } else if (action === "chat") {
      setChatOpen(true);
    }
  };

  const handleGrantExtraRevision = () => {
    startTransition(async () => {
      const res = await grantOrderExtraRevision({
        orderId: order.order_id,
        count: grantRevisionCount,
        note: grantRevisionNote,
      });
      if (res && res.success) {
        setOrder((prev) => ({
          ...prev,
          revisions_included: res.revisions_included,
          chat_messages: res.message
            ? [...(prev.chat_messages || activeChatMessages), res.message]
            : prev.chat_messages,
        }));
        setGrantSuccessNotice(`Successfully granted +${grantRevisionCount} revision round!`);
        setTimeout(() => {
          setGrantRevisionModalOpen(false);
          setGrantSuccessNotice(null);
          setGrantRevisionNote("");
        }, 1400);
      }
    });
  };

  // Resolution & Extension modal
  const [resolutionOpen, setResolutionOpen] = useState(false);
  const [resolutionSuccess, setResolutionSuccess] = useState(false);
  const [extensionDays, setExtensionDays] = useState<number>(1);
  const [extensionReason, setExtensionReason] = useState<string>("");
  const [extensionStatusNotice, setExtensionStatusNotice] = useState<string | null>(null);

  const handleSendExtensionRequest = () => {
    if (!extensionReason.trim()) return;
    startTransition(async () => {
      const res = await requestOrderDeadlineExtension({
        orderId: order.order_id,
        days: extensionDays,
        reason: extensionReason,
      });
      if (res.success && res.extension) {
        setOrder((prev) => ({
          ...prev,
          extension_request: res.extension,
        }));
        setResolutionSuccess(true);
      }
    });
  };

  const handleRespondExtension = (approved: boolean) => {
    startTransition(async () => {
      const res = await respondToOrderDeadlineExtension({
        orderId: order.order_id,
        approved,
      });
      if (res.success && res.extension) {
        setOrder((prev) => ({
          ...prev,
          extension_request: res.extension,
          ...(approved && res.extension?.new_due_timestamp
            ? {
                due_timestamp: res.extension.new_due_timestamp,
                delivery_date: res.extension.new_delivery_date || prev.delivery_date,
              }
            : {}),
        }));
        setExtensionStatusNotice(
          approved
            ? `Extension approved (+${res.extension.days}d)! New delivery date: ${res.extension.new_delivery_date}`
            : "Original delivery deadline preserved."
        );
      }
    });
  };

  // Countdown timer calculations
  const calculateTimeLeft = (dueTimestamp?: number) => {
    if (!dueTimestamp || !Number.isFinite(dueTimestamp)) {
      return { days: 0, hours: 0, mins: 0, secs: 0 };
    }
    const diff = Math.max(0, dueTimestamp - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  };

  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; mins: number; secs: number }>(() =>
    calculateTimeLeft(order.due_timestamp)
  );

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(order.due_timestamp));
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(order.due_timestamp));
    }, 1000);
    return () => clearInterval(timer);
  }, [order.due_timestamp]);

  // Synchronize state when initialOrder prop updates from server revalidation
  useEffect(() => {
    if (initialOrder) {
      setOrder(initialOrder);
    }
  }, [initialOrder]);

  // Real-time periodic polling for live status, revision, and chat updates across client & admin sessions
  useEffect(() => {
    if (!order.order_id || order.order_id === "fiverr-cv-sample-1") return;

    let isMounted = true;

    const poll = async () => {
      if (typeof document !== "undefined" && document.visibilityState !== "visible") return;
      try {
        const fresh = await getOrderWorkflowData(order.order_id);
        if (!isMounted || !fresh) return;
        if (fresh.order_id === order.order_id || fresh.order_number === order.order_number) {
          setOrder((prev) => {
            const revDiff =
              prev.revisions_used !== fresh.revisions_used ||
              prev.revisions_included !== fresh.revisions_included ||
              prev.revisions.length !== fresh.revisions.length;
            const delDiff = prev.deliveries.length !== fresh.deliveries.length;
            const statusDiff = prev.status !== fresh.status;
            const dueDiff = prev.due_timestamp !== fresh.due_timestamp;
            const extDiff =
              JSON.stringify(prev.extension_request) !== JSON.stringify(fresh.extension_request);

            const prevChat = prev.chat_messages || [];
            const freshChat = fresh.chat_messages || [];
            const chatDiff =
              prevChat.length !== freshChat.length ||
              (freshChat.length > 0 &&
                prevChat.length > 0 &&
                freshChat[freshChat.length - 1]?.id !== prevChat[prevChat.length - 1]?.id) ||
              JSON.stringify(prevChat) !== JSON.stringify(freshChat);

            if (revDiff || delDiff || statusDiff || dueDiff || extDiff || chatDiff) {
              // Merge chat safely so any optimistic local messages aren't lost while DB writes
              const mergedChat = [...freshChat];
              for (const pm of prevChat) {
                const alreadyIncluded = mergedChat.some(
                  (fm) => fm.id === pm.id || (fm.text === pm.text && fm.role === pm.role)
                );
                if (!alreadyIncluded) {
                  mergedChat.push(pm);
                }
              }

              return {
                ...prev,
                ...fresh,
                chat_messages: mergedChat,
              };
            }
            return prev;
          });
        }
      } catch {}
    };

    // If chat drawer is opened, poll immediately to ensure fresh messages are displayed instantly
    if (chatOpen) {
      poll();
    }

    // Dynamic polling speed: 1200ms when chat is open for real-time responsiveness; 3500ms when closed
    const intervalTime = chatOpen ? 1200 : 3500;
    const interval = setInterval(poll, intervalTime);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [order.order_id, order.order_number, chatOpen]);

  // Stage simulation handler
  const handleStatusChange = (newStatus: OrderStatus) => {
    setOrder((prev) => ({
      ...prev,
      status: newStatus,
    }));
  };

  // Reset demo
  const handleResetDemo = () => {
    setOrder(INITIAL_FIVERR_ORDER);
    setActiveTab("activity");
    setRole("seller");
  };

  // Deliver work handler
  const handleDeliverWork = () => {
    if (!deliveryMessage.trim()) return;
    const isRevision = order.status === "in_revision";

    startTransition(async () => {
      await deliverOrderWork({
        orderId: order.order_id,
        message: deliveryMessage,
        files: deliveryFiles,
        isRevision,
      });
    });

    const newDelivery = {
      id: `del-${Date.now()}`,
      delivery_number: order.deliveries.length + 1,
      delivered_at: "Just now",
      message: deliveryMessage,
      files: deliveryFiles,
    };

    setOrder((prev) => ({
      ...prev,
      status: "delivered",
      deliveries: [...prev.deliveries, newDelivery],
    }));
    setDeliverModalOpen(false);
  };

  // Add custom file in deliver modal
  const handleAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ext = file.name.split(".").pop() || "pdf";
      const sizeKb = Math.round(file.size / 1024);
      setDeliveryFiles((prev) => [
        ...prev,
        {
          id: `f-${Date.now()}`,
          name: file.name,
          size: `${sizeKb} KB`,
          type: ext,
        },
      ]);
    }
  };

  const handleRemoveFile = (fileId: string) => {
    setDeliveryFiles((prev) => prev.filter((f) => f.id !== fileId));
  };

  // Request revision handler
  const handleRequestRevision = () => {
    if (!revisionMessage.trim()) return;

    const messageText = revisionMessage.trim();
    const newRev = {
      id: `rev-${Date.now()}`,
      requested_at: "Just now",
      message: messageText,
    };

    const buyerName = order.buyer_name || order.buyer_username || "Client";
    const revChatMsg: OrderChatMessage = {
      id: `msg-rev-${Date.now()}`,
      sender: buyerName,
      role: "buyer",
      text: `📝 Revision Request:\n\n"${messageText}"`,
      time: "Just now",
      timestamp: new Date().toISOString(),
    };

    // Immediate optimistic update so UI reacts without delay
    setOrder((prev) => {
      const nextCount = prev.revisions.length + 1;
      return {
        ...prev,
        status: "in_revision",
        revisions_used: nextCount,
        revisions: [...prev.revisions, newRev],
        chat_messages: [...(prev.chat_messages || []), revChatMsg],
      };
    });
    setRevisionModalOpen(false);
    setRevisionMessage("");

    startTransition(async () => {
      const res = await requestOrderRevision({
        orderId: order.order_id,
        message: messageText,
      });
      if (res && res.success && res.revision) {
        setOrder((prev) => ({
          ...prev,
          status: "in_revision",
          revisions_used: res.revisions_used ?? prev.revisions.length,
          revisions: prev.revisions.map((r) => (r.id === newRev.id ? res.revision : r)),
        }));
      }
    });
  };

  // Accept delivery handler
  const handleAcceptDelivery = () => {
    startTransition(async () => {
      await completeOrder({ orderId: order.order_id });
    });

    setOrder((prev) => ({
      ...prev,
      status: "completed",
      completion: {
        completed_at: "Just now",
      },
    }));
  };

  // Reply to review handler
  const handleSaveResponse = () => {
    if (!sellerResponseText.trim()) return;

    startTransition(async () => {
      await replyToOrderReview({
        orderId: order.order_id,
        replyText: sellerResponseText,
      });
    });

    setOrder((prev) => {
      if (!prev.buyer_review) return prev;
      return {
        ...prev,
        buyer_review: {
          ...prev.buyer_review,
          seller_response: sellerResponseText,
          seller_response_at: "Just now",
        },
      };
    });
    setResponseSubmitted(true);
  };

  // Stepper calculations
  const stepIndex = {
    pending_requirements: 1,
    in_progress: 3,
    delivered: 4,
    in_revision: 3,
    completed: 5,
    cancelled: 0,
  }[order.status];

  return (
    <div className="min-h-screen bg-[#f7f7f7] font-sans text-[#404145]">
      {/* =========================================================================
          ADMIN ACTION BAR: STRICTLY VISIBLE IN SELLER VIEW ONLY (NEVER TO BUYER)
      ========================================================================= */}
      {role === "seller" && showAdminDock && (
        <aside aria-label="Admin order controls" className="sticky top-0 z-50 border-b border-[#222325] bg-[#141517] px-4 py-2 text-white shadow-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-xs">
            {/* Order Ref & Admin Identifier */}
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 rounded-full bg-[#1dbf73]" />
              <span className="font-extrabold tracking-wider text-white uppercase">Seller Workspace</span>
              <span className="text-[#5f6368]">|</span>
              <span className="rounded bg-[#232529] px-2 py-0.5 text-[11px] font-mono text-[#c5c6c9]">
                Order #{order.order_number}
              </span>
              <span className="hidden sm:inline-block text-[#85878d]">
                Client: <strong className="text-white">{order.buyer_name}</strong>
              </span>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setGrantRevisionModalOpen(true)}
                className="inline-flex items-center gap-1 rounded-md border border-[#f59e0b]/40 bg-[#f59e0b]/10 px-2.5 py-1 text-[11px] font-semibold text-[#fbbf24] hover:bg-[#f59e0b]/20 hover:text-white transition cursor-pointer"
                title="Grant additional revision rounds to the client"
              >
                <span className="font-bold">+</span>
                <span>Grant Revision</span>
                <span className="rounded bg-[#000]/40 px-1 text-[10px] text-[#fbbf24]">
                  {order.revisions_used}/{order.revisions_included}
                </span>
              </button>

              <Link
                href={`/order-workflow?id=${order.order_id}&role=buyer`}
                className="inline-flex items-center gap-1.5 rounded-md border border-[#3e4045] bg-[#232529] px-2.5 py-1 text-[11px] font-semibold text-[#1dbf73] hover:border-[#1dbf73] hover:text-white transition"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Preview as Buyer
              </Link>

              <Link
                href="/admin/orders"
                className="rounded-md border border-[#3e4045] bg-[#232529] px-2.5 py-1 text-[11px] font-semibold text-[#c5c6c9] hover:bg-[#32353b] hover:text-white transition"
              >
                ← Back to Admin
              </Link>
            </div>
          </div>
        </aside>
      )}

      {/* =========================================================================
          ORDER CONTEXT BAR & SUBTABS (ACTIVITY, DETAILS, REQUIREMENTS)
      ========================================================================= */}
      <div className="border-b border-[#e4e5e7] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          {/* Left: Back Link & Active Order Reference */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <Link
              href={role === "seller" ? "/admin/orders" : "/dashboard"}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#62646a] hover:text-[#1dbf73] transition"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>{role === "seller" ? "All Orders" : "Back to Dashboard"}</span>
            </Link>

            <span className="h-3.5 w-px bg-[#e4e5e7]" />

            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#f4f5f7] px-2.5 py-0.5 text-[11.5px] font-mono font-semibold text-[#404145]">
                #{order.order_number}
              </span>
              <span className="hidden md:inline text-[13px] font-medium text-[#74767e]">
                {order.package_name}
              </span>
            </div>
          </div>

          {/* Right: Direct Chat Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setChatOpen(true)}
              className="relative flex items-center gap-2 rounded-full border border-[#e4e5e7] bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-[#404145] hover:border-[#1dbf73] hover:text-[#1dbf73] transition shadow-2xs cursor-pointer"
            >
              <svg className="h-4 w-4 text-[#1dbf73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{role === "seller" ? "Client Messages" : "Chat with Chanuka"}</span>
              {unreadCount > 0 && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1dbf73] text-[10px] font-bold text-white">
                  {unreadCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* The 3 Core Subtabs: Activity | Details | Requirements */}
        <div className="border-t border-[#e4e5e7] bg-[#fbfbfb]">
          <div className="mx-auto flex max-w-7xl items-center gap-8 px-4 sm:px-6">
            <button
              onClick={() => setActiveTab("activity")}
              className={`relative py-3.5 text-[14px] font-bold transition-all ${
                activeTab === "activity"
                  ? "text-[#222325] after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:bg-[#1dbf73]"
                  : "text-[#74767e] hover:text-[#222325]"
              }`}
            >
              Activity
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`relative py-3.5 text-[14px] font-bold transition-all ${
                activeTab === "details"
                  ? "text-[#222325] after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:bg-[#1dbf73]"
                  : "text-[#74767e] hover:text-[#222325]"
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab("requirements")}
              className={`relative py-3.5 text-[14px] font-bold transition-all ${
                activeTab === "requirements"
                  ? "text-[#222325] after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-full after:bg-[#1dbf73]"
                  : "text-[#74767e] hover:text-[#222325]"
              }`}
            >
              Requirements
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN LAYOUT: 2-COLUMN VIEW (TIMELINE / TABS + STICKY CONTEXT SIDEBAR)
      ========================================================================= */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          {/* ==================== LEFT / MAIN COLUMN ==================== */}
          <div className="space-y-6">
            {/* -------------------------------------------------------------
                PROMINENT STATUS & ACTION BANNER (TOP OF PAGE - ALWAYS VISIBLE)
            ------------------------------------------------------------- */}
            {order.status === "pending_requirements" && (
              <div className="rounded-xl border border-[#fed7aa] bg-[#fffaf5] p-5 shadow-xs">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f59e0b] text-white shadow-xs">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-[#9a3412]">
                        {role === "buyer" ? "Action Required: Complete Your Intake Brief" : "Awaiting Client Requirements Brief"}
                      </h3>
                      <p className="mt-0.5 text-[13px] text-[#c2410c]">
                        {role === "buyer"
                          ? "Please upload your current CV and describe your target roles so Chanuka can start writing."
                          : `${order.buyer_name} has placed this order. Delivery turnaround time starts once the client completes their brief.`}
                      </p>
                    </div>
                  </div>

                  {role === "buyer" ? (
                    <Link
                      href={`/intake?order=${order.order_id}`}
                      className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1dbf73] px-5 py-2.5 text-[13.5px] font-bold text-white shadow hover:bg-[#19a463] transition"
                    >
                      <span>Upload CV &amp; Complete Brief →</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => setChatOpen(true)}
                      className="shrink-0 rounded-lg border border-[#f59e0b] bg-white px-4 py-2 text-[13px] font-bold text-[#b45309] hover:bg-[#fff7ed] transition cursor-pointer"
                    >
                      Message Client
                    </button>
                  )}
                </div>
              </div>
            )}

            {(order.status === "in_progress" || order.status === "in_revision") && (
              <div className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-5 shadow-xs">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1dbf73] text-white shadow-xs">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-[#14532d]">
                        {order.status === "in_revision"
                          ? `Revision in Progress · Round ${order.revisions_used} of ${order.revisions_included}`
                          : "Order is In Progress"}
                      </h3>
                      <p className="mt-0.5 text-[13px] text-[#166534]">
                        {role === "seller"
                          ? "Review the brief and submit your finalized executive files using the delivery button."
                          : "Chanuka is actively preparing your executive career documents. You will be notified the moment they are delivered."}
                      </p>
                    </div>
                  </div>

                  {role === "seller" ? (
                    <button
                      onClick={() => setDeliverModalOpen(true)}
                      className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-[#1dbf73] px-5 py-2.5 text-[13.5px] font-bold text-white shadow hover:bg-[#19a463] transition"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12" />
                      </svg>
                      {order.status === "in_revision" ? "Deliver Revision" : "Deliver Work Now"}
                    </button>
                  ) : (
                    <button
                      onClick={() => setChatOpen(true)}
                      className="shrink-0 rounded-lg border border-[#86efac] bg-white px-4 py-2 text-[13px] font-bold text-[#15803d] hover:bg-[#f0fdf4] transition cursor-pointer"
                    >
                      Message Chanuka
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* When Delivered: Prominent Review & Acceptance Banner for the Buyer */}
            {order.status === "delivered" && (
              <div className="rounded-xl border border-[#fed7aa] bg-[#fffaf5] p-5 shadow-xs">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f59e0b] text-white shadow-xs">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-[#9a3412]">
                        Work Delivered! Please review your documents
                      </h3>
                      <p className="mt-0.5 text-[13px] text-[#c2410c]">
                        {role === "buyer"
                          ? "Download and inspect your deliverables below. If you are satisfied, click Approve. If you need any tweaks, request a revision."
                          : "You have delivered this order. The client has 3 days to approve or request revisions before auto-completion."}
                      </p>
                    </div>
                  </div>

                  {role === "buyer" && (
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        onClick={handleAcceptDelivery}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#1dbf73] px-4 py-2.5 text-[13px] font-bold text-white shadow hover:bg-[#19a463] transition"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Approve &amp; Complete
                      </button>
                      {remainingRevisions > 0 ? (
                        <button
                          onClick={() => setRevisionModalOpen(true)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[#f59e0b] bg-white px-3.5 py-2.5 text-[13px] font-bold text-[#b45309] hover:bg-[#fff7ed] transition"
                        >
                          Request Revision ({remainingRevisions} left)
                        </button>
                      ) : (
                        <div className="flex flex-wrap items-center gap-2">
                          <div className="inline-flex items-center gap-1.5 rounded-lg border border-[#fed7aa] bg-[#fffaf5] px-3.5 py-2.5 text-[12.5px] font-bold text-[#b45309]">
                            <svg className="h-4 w-4 shrink-0 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>All {order.revisions_included} revisions used</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setNewChatInput("Hi Chanuka, I would like to request an additional revision round for this order. Could you please grant another request?");
                              setChatOpen(true);
                            }}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#10b981] bg-white px-3 py-2 text-[12px] font-bold text-[#059669] shadow-2xs hover:bg-[#ecfdf5] transition cursor-pointer"
                          >
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span>Ask Chanuka for another revision</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {role === "seller" && (
                    <div className="shrink-0 flex items-center">
                      <button
                        type="button"
                        onClick={() => setGrantRevisionModalOpen(true)}
                        className="group inline-flex items-center gap-2.5 rounded-xl border border-[#f59e0b] bg-white px-4 py-2.5 text-[13px] font-bold text-[#b45309] shadow-2xs hover:bg-[#fffdf7] hover:border-[#d97706] hover:shadow-xs active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
                        title="Grant additional revision rounds to the client"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#fef3c7] text-[#b45309] text-[13px] font-extrabold group-hover:bg-[#fde68a] transition-colors">
                          +
                        </span>
                        <span>Grant Extra Revision</span>
                        <span className="rounded-full bg-[#fef3c7] px-2.5 py-0.5 text-[11px] font-bold text-[#92400e] border border-[#fde68a]">
                          {order.revisions_used}/{order.revisions_included} used
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ACTION BANNER: PENDING DEADLINE EXTENSION REQUEST */}
            {order.extension_request && (
              <div className="mb-6">
                {order.extension_request.status === "pending" ? (
                  <div className="rounded-2xl border-2 border-[#f59e0b] bg-[#fffdf5] p-5 shadow-xs">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      {/* Left Header & Details */}
                      <div className="flex items-start gap-3.5 min-w-0 flex-1">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fef3c7] text-[#d97706] shadow-2xs">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <h3 className="text-[15.5px] font-bold text-[#92400e] leading-snug">
                              {role === "buyer"
                                ? "Chanuka requested a delivery extension"
                                : "Delivery Extension Requested"}
                            </h3>
                            <span className="inline-flex shrink-0 items-center rounded-full bg-[#fde68a] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-[#b45309] whitespace-nowrap">
                              {role === "buyer" ? "Action Needed" : "Pending Client Approval"}
                            </span>
                          </div>

                          <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#78350f]">
                            {role === "buyer" ? (
                              <>
                                Chanuka requested <strong>+{order.extension_request.days} additional {order.extension_request.days === 1 ? "day" : "days"}</strong> to complete your career documents. Proposed new delivery date: <strong className="font-bold underline decoration-[#f59e0b] decoration-2 underline-offset-2">{order.extension_request.new_delivery_date}</strong>.
                              </>
                            ) : (
                              <>
                                You requested a <strong>+{order.extension_request.days} day</strong> extension. Proposed new delivery: <strong>{order.extension_request.new_delivery_date}</strong>.
                              </>
                            )}
                          </p>

                          {order.extension_request.reason && (
                            <div className="mt-2.5 rounded-lg border border-[#fde68a] bg-white/80 px-3.5 py-2.5 text-[12.5px] text-[#78350f]">
                              <span className="font-semibold text-[#92400e]">Reason: </span>
                              <span className="italic">&ldquo;{order.extension_request.reason}&rdquo;</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right: Accept Extension Button */}
                      {role === "buyer" && (
                        <div className="sm:self-center shrink-0">
                          <button
                            onClick={() => handleRespondExtension(true)}
                            disabled={isPending}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1dbf73] px-5 py-3 text-[13.5px] font-bold text-white shadow-xs hover:bg-[#19a463] hover:shadow transition disabled:opacity-50 whitespace-nowrap"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Accept Extension (+{order.extension_request.days}d)</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ) : extensionStatusNotice ? (
                  <div className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-4 text-[13px] font-semibold text-[#166534] shadow-2xs">
                    ✓ {extensionStatusNotice}
                  </div>
                ) : null}
              </div>
            )}

            {/* =============================================================
                TAB 1: ACTIVITY TIMELINE (DEFAULT)
            ============================================================= */}
            {activeTab === "activity" && (
              <>
                {/* Collapsible Order Summary Card */}
                <div className="overflow-hidden rounded-xl border border-[#e4e5e7] bg-white shadow-xs">
                  <button
                    onClick={() => setDetailsOpen(!detailsOpen)}
                    className="flex w-full items-center justify-between border-b border-[#e4e5e7] bg-white px-5 py-3.5 text-left transition hover:bg-[#fafafa]"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4f5f7] text-[#74767e]">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </span>
                      <span className="text-[14.5px] font-bold text-[#222325]">Order Details &amp; Scope</span>
                    </div>
                    <svg
                      className={`h-4 w-4 text-[#74767e] transition-transform ${detailsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {detailsOpen && (
                    <div className="p-5">
                      <p className="text-[13px] text-[#74767e]">
                        Ordered by <strong className="font-semibold text-[#222325]">{order.buyer_username}</strong> on {order.order_date}
                      </p>

                      <div className="mt-4 overflow-x-auto">
                        <table className="w-full text-left text-[13px]">
                          <thead>
                            <tr className="border-b border-[#e4e5e7] text-[11.5px] uppercase tracking-wider text-[#74767e]">
                              <th className="pb-2 font-semibold">Service</th>
                              <th className="pb-2 font-semibold">Qty</th>
                              <th className="pb-2 font-semibold">Duration</th>
                              <th className="pb-2 text-right font-semibold">Price</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#f4f5f7]">
                            {order.items.map((item, i) => (
                              <tr key={i} className="text-[#222325]">
                                <td className="py-3 font-medium">
                                  {item.name}
                                  <ul className="mt-1 list-inside list-disc text-[12px] font-normal text-[#74767e]">
                                    <li>Custom ATS Executive Narrative</li>
                                    <li>Targeted Cover Letter &amp; Recruiter Brief</li>
                                    <li>Global Market &amp; LinkedIn Alignment</li>
                                  </ul>
                                </td>
                                <td className="py-3 text-[#62646a]">{item.quantity}</td>
                                <td className="py-3 text-[#62646a]">{item.duration_days} Days</td>
                                <td className="py-3 text-right font-semibold">{order.currency_symbol}{item.price.toFixed(2)}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="border-t border-[#e4e5e7]">
                              <td colSpan={3} className="pt-3 font-bold text-[#222325]">Total Paid</td>
                              <td className="pt-3 text-right text-[15.5px] font-bold text-[#222325]">
                                {order.currency_symbol}{order.total_price.toFixed(2)}
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  )}
                </div>

                {/* Vertical Timeline Feed */}
                <div className="relative space-y-6 pl-8 before:absolute before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#e4e5e7]">
                  {/* Event 1: Order Placed */}
                  <div className="relative">
                    <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#74767e] text-white shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </span>
                    <p className="text-[13px] text-[#62646a]">
                      <strong className="font-semibold text-[#222325]">{order.buyer_username}</strong> placed the order · <span className="text-[#74767e]">{order.order_date}</span>
                    </p>
                  </div>

                  {/* Event 2: Requirements Brief */}
                  <div className="relative">
                    <span className={`absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-white shadow-xs ${
                      order.requirements.length > 0 ? "bg-[#1dbf73]" : "bg-[#f59e0b]"
                    }`}>
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <div>
                      {order.requirements.length > 0 ? (
                        <>
                          <p className="text-[13px] text-[#62646a]">
                            <strong className="font-semibold text-[#222325]">{order.buyer_name}</strong> submitted the requirements brief · <span className="text-[#74767e]">{order.requirements_submitted_at || order.order_date}</span>
                          </p>

                          {/* Requirements Snapshot Card */}
                          <div className="mt-3 overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
                            <div className="flex items-center justify-between border-b border-[#e4e5e7] pb-3">
                              <span className="text-[12px] font-bold uppercase tracking-wider text-[#74767e]">REQUIREMENTS BRIEF</span>
                              <span className="rounded bg-[#f4f5f7] px-2.5 py-0.5 text-[11.5px] font-semibold text-[#15803d]">✓ Provided</span>
                            </div>

                            <div className="mt-4 space-y-3.5 text-[13px]">
                              {order.requirements.map((req, i) => (
                                <div key={i} className="rounded-lg border border-[#f4f5f7] bg-[#fafbfc] p-3.5">
                                  <p className="whitespace-pre-line font-bold text-[#222325]">{req.question}</p>
                                  {req.file ? (
                                    <div className="mt-2.5 flex items-center justify-between rounded-lg border border-[#e4e5e7] bg-white p-3 shadow-2xs">
                                      <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fee2e2] text-[#ef4444]">
                                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                                          </svg>
                                        </div>
                                        <div>
                                          <p className="font-semibold text-[#222325]">{req.file.name}</p>
                                          <p className="text-[11.5px] text-[#74767e]">{req.file.size} · Uploaded Document</p>
                                        </div>
                                      </div>
                                      {req.file.url ? (
                                        <a
                                          href={req.file.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-1.5 rounded-md border border-[#c5c6c9] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#222325] hover:bg-[#f4f5f7]"
                                        >
                                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                          </svg>
                                          Download
                                        </a>
                                      ) : null}
                                    </div>
                                  ) : (
                                    <p className="mt-1.5 whitespace-pre-line text-[#404145] leading-relaxed">{req.answer}</p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div>
                          <p className="text-[13px] text-[#62646a]">
                            <strong className="font-semibold text-[#222325]">{order.buyer_name}</strong> has not submitted the requirements brief yet
                          </p>
                          <div className="mt-2.5 rounded-xl border border-dashed border-[#e4e5e7] bg-[#fafbfc] p-4 text-[13px]">
                            {role === "buyer" ? (
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                  <p className="font-semibold text-[#222325]">Submit your brief to get started</p>
                                  <p className="mt-0.5 text-[#74767e]">Upload your current CV and target role so Chanuka can start writing.</p>
                                </div>
                                <Link
                                  href={`/intake?order=${order.order_id}`}
                                  className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#1dbf73] px-4 py-2 font-bold text-white hover:bg-[#19a463] shadow-xs"
                                >
                                  Complete Brief Now →
                                </Link>
                              </div>
                            ) : (
                              <p className="text-[#74767e]">
                                Awaiting intake submission. The turnaround timer and delivery schedule will activate as soon as the client uploads their resume and answers the brief.
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Event 3: Order Started (only shown once brief is provided) */}
                  {order.requirements.length > 0 && (
                    <div className="relative">
                      <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1dbf73] text-white shadow-xs">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-[13px] text-[#62646a]">
                        The order started · <span className="text-[#74767e]">{order.requirements_submitted_at || order.order_date}</span>
                      </p>
                      <p className="text-[12px] text-[#74767e]">
                        Delivery due date locked to <strong className="font-semibold text-[#222325]">{order.delivery_date}</strong>
                      </p>
                    </div>
                  )}

                  {/* Event: Deadline Extension Request */}
                  {order.extension_request && (
                    <div className="relative">
                      <span className={`absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-white shadow-xs ${
                        order.extension_request.status === "accepted"
                          ? "bg-[#1dbf73]"
                          : order.extension_request.status === "rejected"
                          ? "bg-[#64748b]"
                          : "bg-[#f59e0b]"
                      }`}>
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-[13px] text-[#62646a]">
                            <strong className="font-semibold text-[#222325]">Chanuka</strong> requested a deadline extension ·{" "}
                            <span className="text-[#74767e]">{order.extension_request.requested_at}</span>
                          </p>
                          <span className={`rounded px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
                            order.extension_request.status === "accepted"
                              ? "bg-[#dcfce7] text-[#15803d]"
                              : order.extension_request.status === "rejected"
                              ? "bg-[#f1f5f9] text-[#64748b]"
                              : "bg-[#fef3c7] text-[#b45309]"
                          }`}>
                            {order.extension_request.status === "accepted"
                              ? "Extension Accepted"
                              : order.extension_request.status === "rejected"
                              ? "Extension Declined"
                              : "Pending Buyer Approval"}
                          </span>
                        </div>

                        {/* Extension Details Box */}
                        <div className="mt-3 overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
                          <div className="flex items-center justify-between border-b border-[#e4e5e7] pb-3">
                            <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#d97706]">
                              DEADLINE EXTENSION (+{order.extension_request.days} {order.extension_request.days === 1 ? "DAY" : "DAYS"})
                            </span>
                            <span className="text-[12px] font-medium text-[#74767e]">
                              New target: {order.extension_request.new_delivery_date}
                            </span>
                          </div>

                          <div className="mt-3">
                            <p className="text-[12.5px] font-bold text-[#222325]">Reason:</p>
                            <p className="mt-1 text-[13px] leading-relaxed text-[#404145] bg-[#fafbfc] p-3 rounded-lg border border-[#f4f5f7]">
                              {order.extension_request.reason || "Additional time requested to ensure the highest career document standards."}
                            </p>
                          </div>

                          {role === "buyer" && order.extension_request.status === "pending" && (
                            <div className="mt-4 flex items-center gap-3 border-t border-[#f4f5f7] pt-3">
                              <button
                                onClick={() => handleRespondExtension(true)}
                                disabled={isPending}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-[#1dbf73] px-4 py-2 text-[12.5px] font-bold text-white hover:bg-[#19a463] shadow-xs disabled:opacity-50"
                              >
                                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Accept Extension (+{order.extension_request.days}d)</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Event 4: First Delivery */}
                  {order.deliveries.length > 0 && (
                    <div id="deliverables-section" className="relative scroll-mt-24">
                      <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1dbf73] text-white shadow-xs">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[13px] text-[#62646a]">
                          <strong className="font-semibold text-[#222325]">Chanuka</strong> delivered the order · <span className="text-[#74767e]">{order.deliveries[0].delivered_at}</span>
                        </p>

                        {/* Delivery #1 Card */}
                        <div className="mt-3 overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
                          <div className="flex items-center justify-between border-b border-[#e4e5e7] pb-3">
                            <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#1dbf73]">
                              DELIVERY #1
                            </span>
                            <span className="text-[12px] text-[#74767e]">{order.deliveries[0].delivered_at}</span>
                          </div>

                          <div className="mt-3 flex items-start gap-3">
                            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#e4e5e7]">
                              <Image
                                src={order.seller_avatar || "/images/chanuka-portrait.jpg"}
                                alt={order.seller_name}
                                width={36}
                                height={36}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="text-[13px] font-bold text-[#222325]">{order.seller_name}</p>
                              <p className="mt-1 whitespace-pre-line text-[13px] leading-relaxed text-[#404145]">
                                {order.deliveries[0].message}
                              </p>
                            </div>
                          </div>

                          {/* Deliverable Attachments */}
                          <div className="mt-4 border-t border-[#f4f5f7] pt-3">
                            <p className="text-[11px] font-bold uppercase tracking-wider text-[#74767e]">DELIVERABLE ATTACHMENTS</p>
                            <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                              {order.deliveries[0].files.map((file) => (
                                <div key={file.id} className="flex items-center justify-between rounded-lg border border-[#e4e5e7] bg-[#fafbfc] p-3">
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#fee2e2] text-[11px] font-bold uppercase text-[#dc2626]">
                                      {file.type}
                                    </span>
                                    <div className="truncate">
                                      <p className="truncate text-[12.5px] font-semibold text-[#222325]">{file.name}</p>
                                      <p className="text-[11px] text-[#74767e]">{file.size}</p>
                                    </div>
                                  </div>
                                  <button
                                    onClick={() => alert(`Downloading: ${file.name}`)}
                                    className="shrink-0 p-1.5 text-[#74767e] hover:text-[#1dbf73]"
                                    title="Download File"
                                  >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Event 5: Revision Rounds & Subsequent Deliveries */}
                  {order.revisions.map((rev, revIdx) => {
                    const subsequentDelivery = order.deliveries[revIdx + 1];
                    return (
                      <div key={rev.id || `rev-round-${revIdx}`} className="space-y-6">
                        {/* Revision Request Card */}
                        <div className="relative">
                          <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#f59e0b] text-white shadow-xs">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </span>
                          <div>
                            <p className="text-[13px] text-[#62646a]">
                              <strong className="font-semibold text-[#222325]">{order.buyer_username}</strong> requested revision #{revIdx + 1} · <span className="text-[#74767e]">{rev.requested_at}</span>
                            </p>

                            <div className="mt-3 overflow-hidden rounded-xl border border-[#fed7aa] bg-[#fffaf5] p-5 shadow-xs">
                              <div className="flex items-center justify-between border-b border-[#fed7aa] pb-3">
                                <span className="flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wider text-[#d97706]">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                  </svg>
                                  REVISION REQUEST #{revIdx + 1}
                                </span>
                                <span className="text-[12px] font-medium text-[#b45309]">{rev.requested_at}</span>
                              </div>

                              <div className="mt-3 flex items-start gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fde68a] text-[13px] font-bold text-[#b45309]">
                                  {order.buyer_username.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex-1">
                                  <p className="text-[13px] font-bold text-[#222325]">{order.buyer_username}&apos;s feedback</p>
                                  <p className="mt-1 whitespace-pre-line text-[13.5px] leading-relaxed text-[#7c2d12]">
                                    {rev.message}
                                  </p>

                                  <div className="mt-3.5 flex items-center justify-end border-t border-[#fed7aa]/60 pt-2.5">
                                    <button
                                      onClick={() => setChatOpen(true)}
                                      className="inline-flex items-center gap-1.5 rounded-xl border border-[#10b981] bg-white px-3 py-1.5 text-[12px] font-bold text-[#059669] shadow-2xs hover:bg-[#10b981] hover:text-white hover:border-[#10b981] active:scale-[0.98] transition-all cursor-pointer"
                                    >
                                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                      </svg>
                                      <span>Reply in Chat</span>
                                      <span className="text-[13px] leading-none">→</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Subsequent Delivery for this round (if delivered) */}
                        {subsequentDelivery && (
                          <div className="relative">
                            <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1dbf73] text-white shadow-xs">
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <div>
                              <p className="text-[13px] text-[#62646a]">
                                <strong className="font-semibold text-[#222325]">Chanuka</strong> delivered updated files · <span className="text-[#74767e]">{subsequentDelivery.delivered_at}</span>
                              </p>

                              <div className="mt-3 overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
                                <div className="flex items-center justify-between border-b border-[#e4e5e7] pb-3">
                                  <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#1dbf73]">
                                    DELIVERY #{subsequentDelivery.delivery_number || (revIdx + 2)} (REVISED)
                                  </span>
                                  <span className="text-[12px] text-[#74767e]">{subsequentDelivery.delivered_at}</span>
                                </div>

                                <div className="mt-3 flex items-start gap-3">
                                  <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#e4e5e7]">
                                    <Image
                                      src={order.seller_avatar || "/images/chanuka-portrait.jpg"}
                                      alt={order.seller_name}
                                      width={36}
                                      height={36}
                                      className="h-full w-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-[13px] font-bold text-[#222325]">{order.seller_name}</p>
                                    <p className="mt-1 whitespace-pre-line text-[13px] leading-relaxed text-[#404145]">
                                      {subsequentDelivery.message}
                                    </p>
                                  </div>
                                </div>

                                <div className="mt-4 border-t border-[#f4f5f7] pt-3">
                                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#74767e]">UPDATED DELIVERABLES</p>
                                  <div className="mt-2 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                    {subsequentDelivery.files.map((file) => (
                                      <div key={file.id} className="flex items-center justify-between rounded-lg border border-[#e4e5e7] bg-[#fafbfc] p-3">
                                        <div className="flex items-center gap-2.5 min-w-0">
                                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded text-[11px] font-bold uppercase ${
                                            file.type === "pdf" ? "bg-[#fee2e2] text-[#dc2626]" : "bg-[#dbeafe] text-[#2563eb]"
                                          }`}>
                                            {file.type}
                                          </span>
                                          <div className="truncate">
                                            <p className="truncate text-[12.5px] font-semibold text-[#222325]">{file.name}</p>
                                            <p className="text-[11px] text-[#74767e]">{file.size}</p>
                                          </div>
                                        </div>
                                        <button
                                          onClick={() => alert(`Downloading: ${file.name}`)}
                                          className="shrink-0 p-1.5 text-[#74767e] hover:text-[#1dbf73]"
                                          title="Download File"
                                        >
                                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                          </svg>
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Event 7: Order Completed */}
                  {order.status === "completed" && (
                    <div className="relative">
                      <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1dbf73] text-white shadow-xs">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div className="rounded-xl border border-[#d1fae5] bg-[#ecfdf5] p-4">
                        <p className="text-[13.5px] font-bold text-[#065f46]">
                          ✓ The order was completed · {order.completion?.completed_at || "Apr 22, 2026, 1:39 AM"}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Event 8: Client Review */}
                  {order.status === "completed" && order.buyer_review && (
                    <div className="relative">
                      <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#ffb33e] text-white shadow-xs">
                        <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[13px] text-[#62646a]">
                          <strong className="font-semibold text-[#222325]">{order.buyer_username}</strong> left a 5-star review · <span className="text-[#74767e]">{order.buyer_review.created_at}</span>
                        </p>

                        {/* Buyer Review Box */}
                        <div className="mt-3 overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
                          <div className="flex items-center justify-between border-b border-[#e4e5e7] pb-3">
                            <span className="text-[12px] font-bold uppercase tracking-wider text-[#74767e]">
                              BUYER&apos;S PUBLIC REVIEW
                            </span>
                            <span className="flex items-center gap-1 text-[13.5px] font-bold text-[#ffb33e]">
                              ★★★★★ {order.buyer_review.average.toFixed(1)}
                            </span>
                          </div>

                          <div className="mt-3 flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fde68a] text-[13px] font-bold text-[#b45309]">
                              {order.buyer_username.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex-1">
                              <p className="text-[13px] font-bold text-[#222325]">{order.buyer_username}&apos;s feedback</p>
                              <p className="mt-1 text-[13.5px] leading-relaxed text-[#404145]">
                                &ldquo;{order.buyer_review.comment}&rdquo;
                              </p>

                              {/* 3-Dimension Rating */}
                              <div className="mt-3.5 max-w-sm rounded-lg border border-[#f4f5f7] bg-[#fafbfc] p-3 text-[12.5px]">
                                <div className="flex justify-between py-1">
                                  <span className="text-[#62646a]">Seller communication</span>
                                  <span className="font-bold text-[#ffb33e]">★★★★★ 5.0</span>
                                </div>
                                <div className="flex justify-between py-1">
                                  <span className="text-[#62646a]">Quality of delivery</span>
                                  <span className="font-bold text-[#ffb33e]">★★★★★ 5.0</span>
                                </div>
                                <div className="flex justify-between py-1">
                                  <span className="text-[#62646a]">Value for investment</span>
                                  <span className="font-bold text-[#ffb33e]">★★★★★ 5.0</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Public Reply Card / Form */}
                          <div className="mt-5 border-t border-[#f4f5f7] pt-4">
                            {order.buyer_review.seller_response ? (
                              <div className="rounded-lg border border-[#bbf7d0] bg-[#f0fdf4] p-3.5">
                                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#15803d]">YOUR PUBLIC RESPONSE</p>
                                <p className="mt-1 text-[13px] text-[#14532d]">{order.buyer_review.seller_response}</p>
                                <span className="mt-1 block text-[11px] text-[#16a34a]">{order.buyer_review.seller_response_at}</span>
                              </div>
                            ) : (
                              <div>
                                <label htmlFor="public-review-response" className="block text-[12.5px] font-bold text-[#222325]">
                                  Post a public response to this review
                                </label>
                                <textarea
                                  id="public-review-response"
                                  rows={3}
                                  value={sellerResponseText}
                                  onChange={(e) => setSellerResponseText(e.target.value)}
                                  placeholder="Thank the client for their trust and collaboration..."
                                  className="mt-2 w-full rounded-lg border border-[#c5c6c9] bg-white p-3 text-[13px] outline-none focus:border-[#1dbf73]"
                                />
                                <div className="mt-2 flex justify-end">
                                  <button
                                    onClick={handleSaveResponse}
                                    className="rounded-md bg-[#1dbf73] px-4 py-1.5 text-[12.5px] font-bold text-white hover:bg-[#19a463] transition"
                                  >
                                    Publish Response
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Event 9: Seller Review */}
                  {order.status === "completed" && order.seller_review && (
                    <div className="relative">
                      <span className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1dbf73] text-white shadow-xs">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[13px] text-[#62646a]">
                          You left <strong className="font-semibold text-[#222325]">{order.buyer_username}</strong> a 5-star review · <span className="text-[#74767e]">{order.seller_review.created_at}</span>
                        </p>
                        <div className="mt-2 rounded-xl border border-[#e4e5e7] bg-white p-4 shadow-2xs">
                          <p className="text-[13px] text-[#404145]">
                            <span className="font-bold text-[#ffb33e]">★★★★★ </span>
                            &ldquo;{order.seller_review.comment}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* =============================================================
                TAB 2: DETAILS TAB (CONTRACT & SERVICE BREAKDOWN)
            ============================================================= */}
            {activeTab === "details" && (
              <div className="space-y-6">
                <div className="rounded-xl border border-[#e4e5e7] bg-white p-6 shadow-xs">
                  <h3 className="text-[18px] font-bold text-[#222325]">Order Contract &amp; Scope</h3>
                  <p className="mt-1 text-[13px] text-[#74767e]">
                    Full breakdown of included executive services, revisions, deliverables, and commercial rights.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="rounded-lg border border-[#e4e5e7] p-4 bg-[#fafbfc]">
                      <p className="text-[11.5px] font-bold uppercase tracking-wider text-[#74767e]">PACKAGE</p>
                      <p className="mt-1 text-[16px] font-bold text-[#222325]">{order.package_name}</p>
                      <p className="mt-1 text-[12.5px] text-[#62646a]">Tier designed for VP, C-Suite, and International Candidates.</p>
                    </div>

                    <div className="rounded-lg border border-[#e4e5e7] p-4 bg-[#fafbfc]">
                      <div className="flex items-center justify-between">
                        <p className="text-[11.5px] font-bold uppercase tracking-wider text-[#74767e]">REVISIONS</p>
                        {role === "seller" && (
                          <button
                            type="button"
                            onClick={() => setGrantRevisionModalOpen(true)}
                            className="inline-flex items-center gap-1 rounded bg-[#fff7ed] border border-[#fed7aa] px-2 py-0.5 text-[11px] font-bold text-[#b45309] hover:bg-[#fef3c7] transition cursor-pointer"
                          >
                            + Grant Extra
                          </button>
                        )}
                      </div>
                      <p className="mt-1 text-[16px] font-bold text-[#222325]">{order.revisions_included} Rounds Included</p>
                      <p className="mt-1 text-[12.5px] text-[#62646a]">{order.revisions_used} used · {Math.max(0, order.revisions_included - order.revisions_used)} remaining</p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-[#f4f5f7] pt-5">
                    <h4 className="text-[14px] font-bold text-[#222325]">Included Deliverables</h4>
                    <ul className="mt-3 space-y-2.5 text-[13px] text-[#404145]">
                      <li className="flex items-center gap-2">
                        <span className="text-[#1dbf73] font-bold">✓</span>
                        <span>ATS-Optimized Executive CV (Editable Word DOCX + Print-Ready Vector PDF)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#1dbf73] font-bold">✓</span>
                        <span>Targeted Executive Cover Letter with value proposition positioning</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#1dbf73] font-bold">✓</span>
                        <span>LinkedIn Executive Profile Keyword Strategy &amp; Headline polish</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-[#1dbf73] font-bold">✓</span>
                        <span>Full Commercial Rights &amp; Lifetime Ownership of documents</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-[#f4f5f7] pt-5">
                    <h4 className="text-[14px] font-bold text-[#222325]">Payment Summary</h4>
                    <div className="mt-3 flex justify-between text-[13px] border-b border-[#f4f5f7] pb-2">
                      <span className="text-[#62646a]">Subtotal</span>
                      <span className="font-semibold text-[#222325]">{order.currency_symbol}{order.total_price.toFixed(2)}</span>
                    </div>
                    <div className="mt-2 flex justify-between text-[14.5px] font-bold">
                      <span className="text-[#222325]">Total Paid</span>
                      <span className="text-[#1dbf73]">{order.currency_symbol}{order.total_price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =============================================================
                TAB 3: REQUIREMENTS TAB (QUESTIONNAIRE & FILES)
            ============================================================= */}
            {activeTab === "requirements" && (
              <div className="space-y-6">
                <div className="rounded-xl border border-[#e4e5e7] bg-white p-6 shadow-xs">
                  <div className="flex items-center justify-between border-b border-[#e4e5e7] pb-4">
                    <div>
                      <h3 className="text-[18px] font-bold text-[#222325]">Onboarding Requirements Hub</h3>
                      <p className="mt-0.5 text-[13px] text-[#74767e]">
                        Order reference: <strong className="text-[#222325]">#{order.order_number}</strong> · {order.buyer_name}
                      </p>
                    </div>
                    {order.requirements.length > 0 ? (
                      <span className="rounded-md bg-[#eefaf4] px-3 py-1 text-[12px] font-bold text-[#15803d]">
                        ✓ Questionnaire Completed
                      </span>
                    ) : (
                      <span className="rounded-md bg-[#fef3c7] px-3 py-1 text-[12px] font-bold text-[#b45309]">
                        Awaiting Client Brief
                      </span>
                    )}
                  </div>

                  {order.requirements.length > 0 ? (
                    <div className="mt-6 space-y-5 text-[13.5px]">
                      {order.requirements.map((req, i) => (
                        <div key={i} className="rounded-xl border border-[#e4e5e7] bg-[#fafbfc] p-5 shadow-2xs">
                          <p className="whitespace-pre-line font-bold text-[#222325] text-[14px]">{req.question}</p>
                          
                          {req.file ? (
                            <div className="mt-3 flex items-center justify-between rounded-lg border border-[#e4e5e7] bg-white p-4 shadow-xs">
                              <div className="flex items-center gap-3.5">
                                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fee2e2] text-[#ef4444]">
                                  <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-bold text-[#222325]">{req.file.name}</p>
                                  <p className="text-[12px] text-[#74767e]">{req.file.size} · Uploaded Document</p>
                                </div>
                              </div>
                              {req.file.url ? (
                                <a
                                  href={req.file.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 rounded-lg bg-[#1dbf73] px-4 py-2 text-[12.5px] font-bold text-white hover:bg-[#19a463] shadow-xs"
                                >
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                  </svg>
                                  Download File
                                </a>
                              ) : null}
                            </div>
                          ) : (
                            <p className="mt-2 whitespace-pre-line text-[#404145] leading-relaxed bg-white rounded-lg border border-[#f0f2f5] p-3.5">
                              {req.answer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-xl border border-dashed border-[#e4e5e7] bg-[#fafbfc] p-8 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#fef3c7] text-[#b45309]">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="mt-3 text-[16px] font-bold text-[#222325]">
                        {role === "buyer" ? "You Haven't Submitted Your Brief Yet" : "Awaiting Client Questionnaire"}
                      </h4>
                      <p className="mx-auto mt-1 max-w-md text-[13.5px] text-[#74767e]">
                        {role === "buyer"
                          ? "Complete your onboarding questionnaire and upload your existing CV so Chanuka has all the details needed to build your executive narrative."
                          : `${order.buyer_name} has not submitted their brief yet. As soon as they complete the intake form, their uploaded CV and target industry responses will appear here.`}
                      </p>
                      {role === "buyer" && (
                        <Link
                          href={`/intake?order=${order.order_id}`}
                          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#1dbf73] px-6 py-2.5 text-[14px] font-bold text-white shadow hover:bg-[#19a463] transition"
                        >
                          Complete Brief Now →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ==================== RIGHT COLUMN: CONTEXT SIDEBAR ==================== */}
          <div className="space-y-6">
            {/* 1. GIG SNAPSHOT & BUYER CARD */}
            <div className="overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
              <div className="flex gap-3">
                <div className="relative h-14 w-18 shrink-0 overflow-hidden rounded-lg border border-[#e4e5e7] bg-[#f4f5f7]">
                  <Image
                    src={order.gig_image || "/images/chanuka-portrait.jpg"}
                    alt={order.gig_title}
                    width={72}
                    height={56}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="line-clamp-2 text-[13px] font-bold leading-tight text-[#222325] hover:text-[#1dbf73] cursor-pointer">
                    {order.gig_title}
                  </h4>
                  <p className="mt-1 text-[11.5px] font-semibold text-[#74767e]">
                    Package: {order.package_name}
                  </p>
                </div>
              </div>

              {/* Profile Card: Role-dependent (Seller sees Client; Buyer sees Chanuka) */}
              {role === "seller" ? (
                <div className="mt-4 flex items-center justify-between border-t border-[#f4f5f7] pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fde68a] text-[13px] font-bold text-[#b45309]">
                      {order.buyer_username.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#222325]">{order.buyer_username}</p>
                      <p className="text-[11.5px] text-[#74767e]">{order.buyer_country} · Online</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setChatOpen(true)}
                    className="rounded-lg border border-[#c5c6c9] bg-white px-2.5 py-1 text-[11.5px] font-bold text-[#404145] hover:bg-[#f4f5f7] transition cursor-pointer"
                  >
                    Message
                  </button>
                </div>
              ) : (
                <div className="mt-4 flex items-center justify-between border-t border-[#f4f5f7] pt-4">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-[#1dbf73]">
                      <Image
                        src={order.seller_avatar || "/images/chanuka-portrait.jpg"}
                        alt={order.seller_name}
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-[13px] font-bold text-[#222325]">{order.seller_name}</p>
                        <span className="text-[10px] font-extrabold text-[#1dbf73]">✓ Pro</span>
                      </div>
                      <p className="text-[11.5px] text-[#74767e]">Executive Career Consultant</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setChatOpen(true)}
                    className="rounded-lg bg-[#1dbf73] px-3 py-1.5 text-[12px] font-bold text-white hover:bg-[#19a463] shadow-xs transition cursor-pointer"
                  >
                    Chat
                  </button>
                </div>
              )}
            </div>

            {/* 2. ORDER STATUS & LIVE COUNTDOWN TIMER */}
            <div className="overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#f4f5f7] pb-3">
                <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#74767e]">ORDER STATUS</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase ${
                    order.status === "completed"
                      ? "bg-[#d1fae5] text-[#065f46]"
                      : order.status === "delivered"
                      ? "bg-[#dbeafe] text-[#1e40af]"
                      : order.status === "in_revision"
                      ? "bg-[#fef3c7] text-[#92400e]"
                      : "bg-[#e0e7ff] text-[#3730a3]"
                  }`}
                >
                  {order.status.replace("_", " ")}
                </span>
              </div>

              {/* Digital Countdown Clock (When order is active) */}
              {order.status !== "completed" && (
                <div className="my-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3.5 text-center">
                  <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#64748b]">
                    {order.status === "pending_requirements"
                      ? "TARGET DELIVERY WINDOW"
                      : order.due_timestamp && Date.now() >= order.due_timestamp
                      ? "DELIVERY DATE REACHED"
                      : "TIME REMAINING"}
                  </p>
                  <div className="mt-2 flex items-center justify-center gap-1.5 font-mono text-[17px] font-bold text-[#0f172a]">
                    <span className="rounded bg-white px-2 py-1 shadow-2xs border border-[#e2e8f0]">
                      {String(Number.isFinite(timeLeft.days) ? timeLeft.days : 0).padStart(2, "0")}d
                    </span>
                    <span>:</span>
                    <span className="rounded bg-white px-2 py-1 shadow-2xs border border-[#e2e8f0]">
                      {String(Number.isFinite(timeLeft.hours) ? timeLeft.hours : 0).padStart(2, "0")}h
                    </span>
                    <span>:</span>
                    <span className="rounded bg-white px-2 py-1 shadow-2xs border border-[#e2e8f0]">
                      {String(Number.isFinite(timeLeft.mins) ? timeLeft.mins : 0).padStart(2, "0")}m
                    </span>
                    <span>:</span>
                    <span className="rounded bg-white px-2 py-1 shadow-2xs border border-[#e2e8f0]">
                      {String(Number.isFinite(timeLeft.secs) ? timeLeft.secs : 0).padStart(2, "0")}s
                    </span>
                  </div>
                  {order.status === "pending_requirements" && (
                    <p className="mt-1.5 text-[10.5px] text-[#74767e]">
                      Turnaround begins once requirements are submitted
                    </p>
                  )}
                </div>
              )}

              <dl className="mt-3 space-y-2.5 text-[12.5px]">
                <div className="flex justify-between">
                  <dt className="text-[#74767e]">Ordered by</dt>
                  <dd className="font-semibold text-[#222325]">{order.buyer_username}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#74767e]">Delivery date</dt>
                  <dd className="font-semibold text-[#222325]">{order.delivery_date}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#74767e]">Total price</dt>
                  <dd className="font-bold text-[#222325]">{order.currency_symbol}{order.total_price.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#74767e]">Order reference</dt>
                  <dd className="font-mono text-[11px] text-[#74767e]">#{order.order_number}</dd>
                </div>
              </dl>
            </div>

            {/* 3. TRACK ORDER STEPPER (5 VISUAL STAGES) */}
            <div className="overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#f4f5f7] pb-3">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#222325]">Track Order</span>
                <span className="text-[12px] font-bold text-[#1dbf73]">{stepIndex}/5</span>
              </div>

              <div className="mt-4 space-y-3.5">
                {[
                  { step: 1, label: "Order placed" },
                  { step: 2, label: "Requirements submitted" },
                  { step: 3, label: "Order in progress" },
                  { step: 4, label: "Delivery" },
                  { step: 5, label: "Order Completed" },
                ].map((s) => {
                  const isDone = stepIndex >= s.step;
                  const isCurrent = stepIndex === s.step;
                  return (
                    <div key={s.step} className="flex items-center gap-3">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all ${
                          isDone
                            ? "bg-[#1dbf73] text-white"
                            : isCurrent
                            ? "border-2 border-[#1dbf73] bg-white text-[#1dbf73]"
                            : "border border-[#c5c6c9] bg-white text-[#95979d]"
                        }`}
                      >
                        {isDone ? "✓" : s.step}
                      </span>
                      <span
                        className={`text-[13px] ${
                          isDone ? "font-bold text-[#222325]" : isCurrent ? "font-semibold text-[#1dbf73]" : "text-[#74767e]"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. PRIVATE NOTES WIDGET (STRICTLY SELLER ONLY) */}
            {role === "seller" && (
              <div className="overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#f4f5f7] pb-2">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#222325]">Private note</span>
                  <span className="text-[11px] text-[#74767e]">Only visible to you (Seller)</span>
                </div>
                <textarea
                  aria-label="Private note"
                  rows={3}
                  value={privateNote}
                  onChange={(e) => {
                    setPrivateNote(e.target.value);
                    setNoteSaved(false);
                  }}
                  placeholder="Add private notes regarding this client or deliverables..."
                  className="mt-3 w-full rounded-lg border border-[#e4e5e7] bg-[#fafbfc] p-2.5 text-[12.5px] outline-none focus:border-[#1dbf73]"
                />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#1dbf73]">{noteSaved ? "Saved!" : ""}</span>
                  <button
                    onClick={() => setNoteSaved(true)}
                    className="rounded-md border border-[#c5c6c9] bg-white px-3 py-1 text-[11.5px] font-bold text-[#222325] hover:bg-[#f4f5f7]"
                  >
                    Save Note
                  </button>
                </div>
              </div>
            )}

            {/* 5. ORDER SUPPORT & NAVIGATION */}
            <div className="overflow-hidden rounded-xl border border-[#e4e5e7] bg-white p-5 shadow-xs">
              <span className="text-[12px] font-bold uppercase tracking-wider text-[#222325]">
                {role === "seller" ? "Order Actions" : "Order Support"}
              </span>
              <ul className="mt-3 divide-y divide-[#f4f5f7] text-[13px]">
                {role === "seller" ? (
                  <>
                    <li className="py-2.5">
                      <button
                        onClick={() => setResolutionOpen(true)}
                        className="flex w-full items-center justify-between text-[#62646a] hover:text-[#1dbf73] font-medium transition"
                      >
                        <span>Request Deadline Extension</span>
                        <span>›</span>
                      </button>
                    </li>
                    <li className="py-2.5">
                      <Link
                        href="/admin/orders"
                        className="flex w-full items-center justify-between text-[#62646a] hover:text-[#1dbf73] font-medium transition"
                      >
                        <span>Back to All Orders</span>
                        <span>›</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="py-2.5">
                      <button
                        onClick={() => setChatOpen(true)}
                        className="flex w-full items-center justify-between text-[#62646a] hover:text-[#1dbf73] font-medium transition"
                      >
                        <span>Chat with Chanuka</span>
                        <span>›</span>
                      </button>
                    </li>
                    <li className="py-2.5">
                      <Link
                        href="/dashboard"
                        className="flex w-full items-center justify-between text-[#62646a] hover:text-[#1dbf73] font-medium transition"
                      >
                        <span>Back to My Dashboard</span>
                        <span>›</span>
                      </Link>
                    </li>
                    <li className="py-2.5">
                      <Link
                        href="/contact"
                        className="flex w-full items-center justify-between text-[#62646a] hover:text-[#1dbf73] font-medium transition"
                      >
                        <span>Customer Help &amp; FAQ</span>
                        <span>›</span>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* =========================================================================
          MODAL: DELIVER COMPLETED WORK (SELLER DRAG & DROP + MESSAGES)
      ========================================================================= */}
      {deliverModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-2xs animate-fadeIn overflow-y-auto">
          <div className="relative flex max-h-[min(88vh,560px)] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl my-auto border border-[#e4e5e7]">
            {/* Header: Fixed */}
            <div className="flex shrink-0 items-center justify-between border-b border-[#e4e5e7] px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#eefaf4] text-[#1dbf73]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12" />
                  </svg>
                </span>
                <h3 className="text-[16px] font-bold text-[#222325]">Deliver Completed Work</h3>
              </div>
              <button onClick={() => setDeliverModalOpen(false)} className="text-[#74767e] hover:text-black font-bold p-1">✕</button>
            </div>

            {/* Body: Scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-3.5 sm:px-6 space-y-3.5 text-[13px]">
              <div>
                <label className="block text-[12px] font-bold text-[#222325]">Message to buyer</label>
                <textarea
                  rows={3}
                  value={deliveryMessage}
                  onChange={(e) => setDeliveryMessage(e.target.value)}
                  placeholder="Describe your delivery, explain the files attached, and offer further support..."
                  className="mt-1.5 w-full rounded-xl border border-[#c5c6c9] p-2.5 text-[12.5px] outline-none focus:border-[#1dbf73]"
                />
              </div>

              {/* Attached files container */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-[12px] font-bold text-[#222325]">Attached Deliverables</label>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[12px] font-bold text-[#1dbf73] hover:underline cursor-pointer"
                  >
                    + Add File
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleAddFile}
                    className="hidden"
                  />
                </div>

                <div className="mt-2 max-h-[140px] overflow-y-auto pr-1 space-y-1.5">
                  {deliveryFiles.map((f) => (
                    <div key={f.id} className="flex items-center justify-between rounded-lg border border-[#e4e5e7] bg-[#fafbfc] px-3 py-2 text-[12px]">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-[#fee2e2] text-[9.5px] font-bold uppercase text-[#dc2626]">
                          {f.type}
                        </span>
                        <span className="truncate font-semibold text-[#222325]">{f.name}</span>
                        <span className="text-[10.5px] text-[#74767e] shrink-0">({f.size})</span>
                      </div>
                      <button
                        onClick={() => handleRemoveFile(f.id)}
                        className="text-[#95979d] hover:text-[#ef4444] p-1 cursor-pointer shrink-0"
                        title="Remove file"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer: Fixed */}
            <div className="flex shrink-0 justify-end gap-2.5 border-t border-[#e4e5e7] bg-[#fcfdfe] px-5 py-3 sm:px-6">
              <button
                onClick={() => setDeliverModalOpen(false)}
                className="rounded-lg px-4 py-2 text-[12.5px] font-semibold text-[#74767e] hover:bg-[#f4f5f7] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleDeliverWork}
                className="rounded-lg bg-[#1dbf73] px-5 py-2 text-[12.5px] font-bold text-white hover:bg-[#19a463] shadow transition cursor-pointer"
              >
                Deliver Work Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: REQUEST REVISION (BUYER FEEDBACK & COUNT)
      ========================================================================= */}
      {revisionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-2xs animate-fadeIn overflow-y-auto">
          <div className="relative flex max-h-[min(88vh,540px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl my-auto border border-[#fed7aa]">
            {/* Header: Fixed */}
            <div className="flex shrink-0 items-center justify-between border-b border-[#fed7aa] px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#fef3c7] text-[#d97706]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </span>
                <h3 className="text-[16px] font-bold text-[#b45309]">Request a Revision</h3>
              </div>
              <button onClick={() => setRevisionModalOpen(false)} className="text-[#74767e] hover:text-black font-bold p-1">✕</button>
            </div>

            {/* Body: Scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-3.5 sm:px-6 space-y-3">
              <p className="text-[12.5px] text-[#62646a] leading-relaxed">
                Please specify the exact adjustments needed. Revisions remaining: <strong className="text-[#b45309]">{remainingRevisions}</strong>
              </p>

              <textarea
                rows={3}
                value={revisionMessage}
                onChange={(e) => setRevisionMessage(e.target.value)}
                placeholder="e.g. Please update the job title in section 2, highlight my $40M budget achievement, and refine the cover letter summary..."
                className="w-full rounded-xl border border-[#c5c6c9] p-3 text-[12.5px] outline-none focus:border-[#f59e0b]"
              />
            </div>

            {/* Footer: Fixed */}
            <div className="flex shrink-0 justify-end gap-2.5 border-t border-[#f4f5f7] bg-[#fcfdfe] px-5 py-3 sm:px-6">
              <button
                onClick={() => setRevisionModalOpen(false)}
                className="rounded-lg px-4 py-2 text-[12.5px] font-semibold text-[#74767e] hover:bg-[#f4f5f7] cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleRequestRevision}
                disabled={remainingRevisions <= 0}
                className="rounded-lg bg-[#f59e0b] px-5 py-2 text-[12.5px] font-bold text-white hover:bg-[#d97706] shadow transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                Submit Revision Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SLIDE-OVER / DRAWER: DIRECT CHAT CONVERSATION
      ========================================================================= */}
      {chatOpen && (
        <>
          <div
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-2xs transition-opacity"
            onClick={() => setChatOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-[101] flex w-full max-w-md flex-col bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#e4e5e7] bg-[#f9fafb] px-4 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#e4e5e7]">
                  <Image
                    src={role === "seller" ? (order.buyer_avatar || "/images/chanuka-portrait.jpg") : (order.seller_avatar || "/images/chanuka-portrait.jpg")}
                    alt="Chat recipient"
                    width={36}
                    height={36}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#1dbf73] ring-2 ring-white" />
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#222325]">
                    {role === "seller" ? order.buyer_username : order.seller_name}
                  </h4>
                  <p className="text-[11px] text-[#74767e]">
                    Order #{order.order_number} · Active
                  </p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="rounded-full p-1 text-[#74767e] hover:bg-[#e4e5e7] hover:text-black font-bold transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Quick direct contact links */}
            <div className="flex items-center justify-between border-b border-[#f0f2f5] bg-[#fafbfc] px-4 py-2 text-[11.5px]">
              <span className="text-[#64748b]">Direct channels:</span>
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/94770000000?text=${encodeURIComponent(
                    `Hi Chanuka, I'm messaging regarding my order #${order.order_number} (${order.package_name}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#25d366]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#15803d] hover:bg-[#25d366]/25 transition"
                >
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`mailto:hello@chanukajeewantha.com?subject=${encodeURIComponent(
                    `Order #${order.order_number} Inquiry - ${order.buyer_name}`
                  )}`}
                  className="inline-flex items-center gap-1 rounded-full bg-white border border-[#e2e8f0] px-2.5 py-0.5 text-[11px] font-medium text-[#475569] hover:bg-[#f1f5f9] transition"
                >
                  Email
                </a>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4 text-[13px]">
              {activeChatMessages.map((msg, i) => {
                const isMe =
                  (role === "seller" && msg.role === "seller") ||
                  (role === "buyer" && msg.role === "buyer");
                return (
                  <div
                    key={msg.id || i}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                  >
                    <div className="mb-0.5 text-[10.5px] font-medium text-[#64748b]">
                      {isMe ? "You" : msg.sender}
                    </div>
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 leading-relaxed ${
                        isMe
                          ? "bg-[#1dbf73] text-white rounded-br-xs"
                          : "bg-[#f4f5f7] text-[#222325] rounded-bl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-line text-[13px]">{msg.text}</p>
                    </div>
                    <span className="mt-1 text-[10px] text-[#95979d]">{msg.time}</span>
                  </div>
                );
              })}
              <div ref={chatMessagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="border-t border-[#e4e5e7] p-3 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={newChatInput}
                  onChange={(e) => setNewChatInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border border-[#c5c6c9] px-4 py-2 text-[13px] outline-none focus:border-[#1dbf73]"
                />
                <button
                  type="submit"
                  disabled={!newChatInput.trim()}
                  className="rounded-full bg-[#1dbf73] px-5 py-2 text-[13px] font-bold text-white hover:bg-[#19a463] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {/* =========================================================================
          ONE-TIME CLIENT DELIVERY NOTICE POPUP MODAL
      ========================================================================= */}
      {deliveryNoticeOpen && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-2xs animate-fadeIn overflow-y-auto">
          <div className="relative flex max-h-[min(88vh,540px)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-[#e4e5e7] bg-white shadow-2xl my-auto">
            {/* Header: Fixed */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#f4f5f7] px-5 py-3 sm:px-6 sm:py-3.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#1dbf73] shadow-xs">
                  <Image
                    src={order.seller_avatar || "/images/chanuka-portrait.jpg"}
                    alt={order.seller_name}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#1dbf73] ring-2 ring-white" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#e8faf0] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#15803d]">
                      ✓ Work Delivered
                    </span>
                    <span className="text-[11px] font-mono text-[#74767e]">#{order.order_number}</span>
                  </div>
                  <h3 className="truncate text-[16.5px] font-bold text-[#222325]">
                    Your Documents Are Ready!
                  </h3>
                </div>
              </div>
              <button
                onClick={() => handleDismissDeliveryNotice(false)}
                className="shrink-0 rounded-full p-1.5 text-[#74767e] hover:bg-[#f4f5f7] hover:text-black font-bold transition cursor-pointer"
                aria-label="Close delivery alert"
              >
                ✕
              </button>
            </div>

            {/* Message Body: Scrollable */}
            <div className="flex-1 overflow-y-auto px-5 py-3 sm:px-6 space-y-3">
              <p className="text-[12.5px] leading-relaxed text-[#55565b]">
                Chanuka has completed your executive career documents for{" "}
                <strong className="text-[#222325]">{order.package_name}</strong>.
                Download and review your files below:
              </p>

              {/* Delivered files card with ONE-CLICK direct download & bounded scroll */}
              {order.deliveries && order.deliveries.length > 0 && order.deliveries[order.deliveries.length - 1].files.length > 0 && (
                <div className="rounded-2xl border border-[#e4e5e7] bg-[#fbfcfd] p-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#f0f2f5]">
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#74767e]">
                      Delivered Documents ({order.deliveries[order.deliveries.length - 1].files.length})
                    </span>
                    <span className="text-[10.5px] font-medium text-[#1dbf73]">Ready to Download</span>
                  </div>

                  {/* Scrollable file list: strictly capped so 5+ files never blow up the modal */}
                  <div className="mt-2 max-h-[160px] overflow-y-auto pr-1 space-y-1.5">
                    {order.deliveries[order.deliveries.length - 1].files.map((file) => {
                      const isPdf = file.name.toLowerCase().endsWith(".pdf") || file.type === "pdf";
                      return (
                        <div
                          key={file.id}
                          className="flex items-center justify-between gap-2.5 rounded-xl border border-[#e4e5e7] bg-white p-2 hover:border-[#1dbf73] transition shadow-2xs"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[9.5px] font-bold uppercase shadow-2xs ${
                                isPdf
                                  ? "bg-[#fee2e2] text-[#dc2626]"
                                  : "bg-[#dbeafe] text-[#2563eb]"
                              }`}
                            >
                              {isPdf ? "PDF" : "DOC"}
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-[12px] font-semibold text-[#222325]">
                                {file.name}
                              </p>
                              <p className="text-[10px] text-[#74767e]">{file.size}</p>
                            </div>
                          </div>

                          {file.url && file.url.startsWith("http") ? (
                            <a
                              href={file.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              download={file.name}
                              className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-[#e8faf0] px-2.5 py-1 text-[11px] font-bold text-[#15803d] hover:bg-[#1dbf73] hover:text-white transition cursor-pointer"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              <span>Download</span>
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                handleDismissDeliveryNotice(true);
                              }}
                              className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-[#e8faf0] px-2.5 py-1 text-[11px] font-bold text-[#15803d] hover:bg-[#1dbf73] hover:text-white transition cursor-pointer"
                            >
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              <span>Download</span>
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Friendly Next Steps (Dual Options) */}
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-2">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#1dbf73] text-[9.5px] font-bold text-white">✓</span>
                    <h4 className="text-[11.5px] font-bold text-[#15803d]">Looks Great?</h4>
                  </div>
                  <p className="mt-1 text-[#166534] leading-snug">
                    Click <strong>Approve &amp; Complete</strong> on the page to finalize.
                  </p>
                </div>

                <div className="rounded-xl border border-[#fed7aa] bg-[#fffaf5] p-2">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-[9.5px] font-bold text-white">✎</span>
                    <h4 className="text-[11.5px] font-bold text-[#b45309]">Need Tweaks?</h4>
                  </div>
                  <p className="mt-1 text-[#c2410c] leading-snug">
                    Request a revision anytime with your specific notes.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Actions: Fixed Docked */}
            <div className="flex shrink-0 items-center justify-end gap-2 border-t border-[#f4f5f7] bg-[#fcfdfe] px-5 py-2.5 sm:px-6">
              <button
                onClick={() => handleDismissDeliveryNotice(false)}
                className="rounded-xl border border-[#c5c6c9] px-3.5 py-1.5 text-[12px] font-semibold text-[#62646a] hover:bg-[#f4f5f7] hover:text-[#222325] transition cursor-pointer"
              >
                I&apos;ll Review Later
              </button>
              <button
                onClick={() => handleDismissDeliveryNotice(true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#1dbf73] px-4 py-1.5 text-[12.5px] font-bold text-white hover:bg-[#19a463] shadow-md transition cursor-pointer"
              >
                <span>Review &amp; Approve</span>
                <span className="text-[13px]">→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SELLER / ADMIN: REVISION REQUEST NOTIFICATION POPUP MODAL
      ========================================================================= */}
      {sellerRevisionNoticeOpen && order.revisions && order.revisions.length > 0 && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-2xs animate-fadeIn overflow-y-auto">
          <div className="relative flex max-h-[min(90vh,620px)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-[#e4e5e7] bg-white shadow-2xl my-auto">
            {/* Header: Fixed */}
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-[#f4f5f7] p-5 sm:px-6 sm:py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fef3c7] text-[#d97706] shadow-xs">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-2.5 py-0.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#b45309]">
                      Revision Requested
                    </span>
                    <span className="text-[11.5px] font-mono text-[#74767e]">#{order.order_number}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-[#222325]">
                    Client Requested a Revision
                  </h3>
                </div>
              </div>
              <button
                onClick={() => handleDismissSellerRevisionNotice()}
                className="rounded-full p-1.5 text-[#74767e] hover:bg-[#f4f5f7] hover:text-black font-bold transition cursor-pointer"
                aria-label="Close revision notification"
              >
                ✕
              </button>
            </div>

            {/* Body: Scrollable */}
            <div className="flex-1 overflow-y-auto p-5 sm:px-6 space-y-3.5">
              <div className="flex items-center justify-between text-[12px] text-[#62646a]">
                <span>
                  From: <strong className="text-[#222325]">{order.buyer_name || order.buyer_username}</strong>
                </span>
                <span className="rounded-md bg-[#f4f5f7] px-2.5 py-0.5 text-[11px] font-semibold text-[#404145]">
                  Round {order.revisions_used} of {order.revisions_included}
                </span>
              </div>

              <div className="rounded-2xl border border-[#fed7aa] bg-[#fffaf5] p-3.5 text-[12.5px]">
                <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#b45309]">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>Client Feedback &amp; Adjustments:</span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-[#7c2d12] whitespace-pre-line font-medium italic">
                  &ldquo;{order.revisions[order.revisions.length - 1].message}&rdquo;
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2.5 border-t border-[#fed7aa]/70 pt-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#9a3412]">
                    <svg className="h-3.5 w-3.5 text-[#d97706]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Requested: {order.revisions[order.revisions.length - 1].requested_at}</span>
                  </div>
                  <button
                    onClick={() => handleDismissSellerRevisionNotice("chat")}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-[#10b981] bg-white px-3 py-1 text-[11.5px] font-bold text-[#059669] shadow-2xs hover:bg-[#10b981] hover:text-white hover:border-[#10b981] hover:shadow-xs active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Reply in Chat</span>
                    <span className="text-[12px] leading-none">→</span>
                  </button>
                </div>
              </div>

              <div className="rounded-xl border border-[#e4e5e7] bg-[#fbfcfd] p-2.5 text-[11.5px] text-[#62646a] leading-relaxed">
                <span className="font-bold text-[#222325]">Ready to update?</span> Make the requested adjustments in your document and deliver the new version using the <strong>Deliver Revision</strong> button.
              </div>
            </div>

            {/* Footer Actions: Fixed */}
            <div className="flex shrink-0 items-center justify-end gap-2 border-t border-[#f4f5f7] bg-[#fcfdfe] px-5 py-3 sm:px-6">
              <button
                onClick={() => handleDismissSellerRevisionNotice()}
                className="rounded-xl border border-[#c5c6c9] px-3.5 py-2 text-[12.5px] font-semibold text-[#62646a] hover:bg-[#f4f5f7] hover:text-[#222325] transition cursor-pointer"
              >
                Dismiss Notice
              </button>
              <button
                onClick={() => handleDismissSellerRevisionNotice("chat")}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#10b981] bg-[#ecfdf5] px-3.5 py-2 text-[12.5px] font-bold text-[#059669] hover:bg-[#10b981] hover:text-white transition cursor-pointer"
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Open Chat</span>
              </button>
              <button
                onClick={() => handleDismissSellerRevisionNotice("deliver")}
                className="inline-flex items-center justify-center gap-1 rounded-xl bg-[#1dbf73] px-4 py-2 text-[12.5px] font-bold text-white hover:bg-[#19a463] shadow-md transition cursor-pointer"
              >
                <span>Deliver Revision</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: REQUEST EXTENSION (RESOLUTION CENTER)
      ========================================================================= */}
      {resolutionOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-2xs animate-fadeIn overflow-y-auto">
          <div className="relative flex max-h-[min(88vh,540px)] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xl my-auto border border-[#e4e5e7]">
            <div className="flex shrink-0 items-center justify-between border-b border-[#e4e5e7] px-5 py-3.5">
              <h3 className="text-[15.5px] font-bold text-[#222325]">Request Delivery Extension</h3>
              <button onClick={() => { setResolutionOpen(false); setResolutionSuccess(false); }} className="text-[#74767e] hover:text-black font-bold p-1">✕</button>
            </div>

            {resolutionSuccess ? (
              <div className="flex-1 overflow-y-auto p-6 text-center my-auto">
                <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-[#eefaf4] text-[#1dbf73] text-[20px] font-bold">✓</span>
                <p className="mt-3 text-[14px] font-bold text-[#222325]">Extension Request Sent</p>
                <p className="mt-1 text-[12.5px] text-[#74767e]">
                  The client has been notified to approve your +{extensionDays}-day extension.
                </p>
                <button
                  onClick={() => { setResolutionOpen(false); setResolutionSuccess(false); }}
                  className="mt-4 rounded-lg bg-[#1dbf73] px-4 py-2 text-[12px] font-bold text-white hover:bg-[#19a463] cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-3.5 text-[13px]">
                  <p className="text-[#62646a]">How much additional time do you need to complete this executive order?</p>
                  <select
                    aria-label="Extension duration"
                    value={extensionDays}
                    onChange={(e) => setExtensionDays(Number(e.target.value))}
                    className="w-full rounded-lg border border-[#c5c6c9] p-2.5 text-[13px] font-medium text-[#222325]"
                  >
                    <option value={1}>Extend by 1 Day</option>
                    <option value={2}>Extend by 2 Days</option>
                    <option value={3}>Extend by 3 Days</option>
                    <option value={5}>Extend by 5 Days</option>
                  </select>
                  <div>
                    <label className="text-[11.5px] font-bold uppercase tracking-wider text-[#74767e]">Reason for Client</label>
                    <textarea
                      rows={3}
                      value={extensionReason}
                      onChange={(e) => setExtensionReason(e.target.value)}
                      placeholder="Explain why you need extra time (e.g. comprehensive industry keyword research and executive narrative refinement)..."
                      className="mt-1 w-full rounded-lg border border-[#c5c6c9] p-2.5 text-[12.5px] outline-none focus:border-[#1dbf73]"
                    />
                  </div>
                </div>

                <div className="flex shrink-0 justify-end gap-2.5 border-t border-[#f4f5f7] bg-[#fcfdfe] px-5 py-3">
                  <button
                    onClick={() => setResolutionOpen(false)}
                    className="rounded-lg px-3.5 py-1.5 font-semibold text-[#74767e] hover:bg-[#f4f5f7] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSendExtensionRequest}
                    disabled={isPending || !extensionReason.trim()}
                    className="rounded-lg bg-[#1dbf73] px-4 py-2 font-bold text-white hover:bg-[#19a463] disabled:opacity-50 cursor-pointer"
                  >
                    {isPending ? "Sending..." : "Send Request"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          SELLER / ADMIN: GRANT EXTRA REVISION ROUND MODAL
      ========================================================================= */}
      {grantRevisionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-2xs animate-fadeIn overflow-y-auto">
          <div className="relative flex max-h-[min(90vh,620px)] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-[#e4e5e7] bg-white shadow-2xl my-auto">
            {/* Fixed Header */}
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#f4f5f7] px-5 py-3.5 sm:px-6 sm:py-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fef3c7] text-[#d97706] shadow-xs">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-[#fef3c7] px-2 py-0.5 text-[10.5px] font-extrabold uppercase tracking-wider text-[#b45309]">
                      Admin Action
                    </span>
                    <span className="text-[11.5px] font-mono text-[#74767e]">#{order.order_number}</span>
                  </div>
                  <h3 className="truncate text-[17px] font-bold text-[#222325]">
                    Grant Extra Revision
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setGrantRevisionModalOpen(false);
                  setGrantSuccessNotice(null);
                }}
                className="shrink-0 rounded-full p-1.5 text-[#74767e] hover:bg-[#f4f5f7] hover:text-black font-bold transition cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {grantSuccessNotice ? (
              <div className="flex-1 overflow-y-auto p-6 text-center animate-fadeIn my-auto">
                <span className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-[#eefaf4] text-[#1dbf73] text-[24px] font-bold shadow-xs">
                  ✓
                </span>
                <p className="mt-4 text-[16px] font-bold text-[#222325]">{grantSuccessNotice}</p>
                <p className="mt-1.5 text-[13px] text-[#62646a] max-w-sm mx-auto">
                  The client has been notified in their chat drawer and their <strong>Request Revision</strong> button is now unlocked.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setGrantRevisionModalOpen(false);
                    setGrantSuccessNotice(null);
                  }}
                  className="mt-5 rounded-xl bg-[#1dbf73] px-6 py-2.5 text-[13px] font-bold text-white hover:bg-[#19a463] shadow-md transition cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                {/* Scrollable Body Content */}
                <div className="flex-1 overflow-y-auto px-5 py-3.5 sm:px-6 space-y-3 text-[13px]">
                  {/* Visual Status & Impact Card */}
                  <div className="rounded-2xl border border-[#fed7aa] bg-[#fffaf5] p-3 shadow-2xs">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#b45309]">
                      <span>Current Revision Status</span>
                      <span className="rounded-md bg-[#fef3c7] px-2 py-0.5 text-[10.5px] font-extrabold text-[#92400e]">
                        {order.buyer_name || order.buyer_username}
                      </span>
                    </div>

                    <div className="mt-2 grid grid-cols-3 gap-2 border-y border-[#fed7aa]/60 py-2 text-center">
                      <div>
                        <span className="block text-[10.5px] text-[#78716c] font-medium">Included</span>
                        <strong className="text-[13.5px] font-bold text-[#222325]">{order.revisions_included} rounds</strong>
                      </div>
                      <div>
                        <span className="block text-[10.5px] text-[#78716c] font-medium">Used</span>
                        <strong className="text-[13.5px] font-bold text-[#d97706]">{order.revisions_used}</strong>
                      </div>
                      <div>
                        <span className="block text-[10.5px] text-[#78716c] font-medium">Remaining</span>
                        <strong className={`text-[13.5px] font-bold ${remainingRevisions > 0 ? "text-[#15803d]" : "text-[#dc2626]"}`}>
                          {remainingRevisions} left
                        </strong>
                      </div>
                    </div>

                    {/* Impact preview */}
                    <div className="mt-2 flex items-center justify-between text-[11.5px] text-[#7c2d12]">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="text-[#10b981]">✨</span>
                        <span>After granting:</span>
                      </span>
                      <span className="font-bold text-[#15803d]">
                        {order.revisions_included + grantRevisionCount} total rounds ({remainingRevisions + grantRevisionCount} available)
                      </span>
                    </div>
                  </div>

                  {/* Interactive Pills Selector */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#404145]">
                      Select Revision Rounds to Grant
                    </label>
                    <div className="mt-1.5 grid grid-cols-3 gap-2">
                      {[
                        { count: 1, label: "+1 Round", badge: "Recommended" },
                        { count: 2, label: "+2 Rounds", badge: "Extended" },
                        { count: 3, label: "+3 Rounds", badge: "Full Polish" },
                      ].map((opt) => {
                        const isSelected = grantRevisionCount === opt.count;
                        return (
                          <button
                            key={opt.count}
                            type="button"
                            onClick={() => setGrantRevisionCount(opt.count)}
                            className={`relative flex flex-col items-center justify-center rounded-xl border py-2 px-2.5 text-center transition-all cursor-pointer ${
                              isSelected
                                ? "border-[#1dbf73] bg-[#ecfdf5] shadow-xs ring-2 ring-[#1dbf73]/20"
                                : "border-[#e4e5e7] bg-white hover:border-[#1dbf73]/60 hover:bg-[#fafbfc]"
                            }`}
                          >
                            {isSelected && (
                              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1dbf73] text-[9px] font-bold text-white shadow-2xs">
                                ✓
                              </span>
                            )}
                            <span className={`text-[13.5px] font-extrabold ${isSelected ? "text-[#15803d]" : "text-[#222325]"}`}>
                              {opt.label}
                            </span>
                            <span className={`mt-0.5 text-[9.5px] font-semibold uppercase tracking-wider ${
                              isSelected ? "text-[#16a34a]" : "text-[#74767e]"
                            }`}>
                              {opt.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Note Field with Quick Templates */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-[#404145]">
                        Note to Client (Sent in Chat)
                      </label>
                      <span className="text-[10.5px] text-[#74767e]">Optional</span>
                    </div>

                    {/* Quick Preset Chips */}
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {[
                        "I've unlocked an extra revision for you! Please submit your feedback.",
                        "Happy to adjust this for you! Please send through your notes.",
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setGrantRevisionNote(preset)}
                          className="rounded-lg border border-[#e4e5e7] bg-[#f8fafc] px-2.5 py-1 text-[10.5px] font-medium text-[#475569] hover:bg-[#eef2f6] hover:border-[#cbd5e1] hover:text-[#0f172a] transition cursor-pointer text-left truncate max-w-full"
                        >
                          💡 {preset}
                        </button>
                      ))}
                    </div>

                    <textarea
                      rows={2}
                      value={grantRevisionNote}
                      onChange={(e) => setGrantRevisionNote(e.target.value)}
                      placeholder="e.g. I've unlocked an extra revision round for your order. Please submit your feedback notes!"
                      className="mt-1.5 w-full rounded-xl border border-[#c5c6c9] p-2.5 text-[12.5px] text-[#222325] placeholder:text-[#94a3b8] outline-none focus:border-[#1dbf73] focus:ring-2 focus:ring-[#1dbf73]/15 transition resize-none"
                    />
                  </div>

                  {/* What Happens Next Guarantee */}
                  <div className="rounded-xl border border-[#bbf7d0] bg-[#f0fdf4] p-2.5 text-[11.5px] text-[#166534] leading-relaxed flex items-center gap-2">
                    <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#1dbf73] text-white text-[10px] font-bold">
                      ✓
                    </span>
                    <div>
                      <strong>Immediate Action:</strong> The client&apos;s <em>Request Revision</em> button will unlock instantly.
                    </div>
                  </div>
                </div>

                {/* Fixed Docked Footer */}
                <div className="flex shrink-0 items-center justify-end gap-2.5 border-t border-[#f4f5f7] bg-[#fcfdfe] px-5 py-3 sm:px-6">
                  <button
                    type="button"
                    onClick={() => setGrantRevisionModalOpen(false)}
                    className="rounded-xl border border-[#c5c6c9] px-4 py-2 text-[12.5px] font-semibold text-[#62646a] hover:bg-[#f4f5f7] hover:text-[#222325] transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleGrantExtraRevision}
                    disabled={isPending}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#1dbf73] px-5 py-2 text-[13px] font-bold text-white hover:bg-[#19a463] shadow-md hover:shadow-lg active:scale-[0.98] transition disabled:opacity-50 cursor-pointer"
                  >
                    <span>{isPending ? "Granting..." : `Grant +${grantRevisionCount} Revision Round${grantRevisionCount > 1 ? "s" : ""}`}</span>
                    <span className="text-[14px] leading-none">→</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
