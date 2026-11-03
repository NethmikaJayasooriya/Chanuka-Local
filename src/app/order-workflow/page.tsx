import { Metadata } from "next";
import { FiverrOrderWorkflow } from "@/components/fiverr-order/FiverrOrderWorkflow";
import { getOrderWorkflowData } from "@/lib/order-workflow-actions";
import { createAdminClient } from "@/lib/supabase/admin";
import { getSessionUser, supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Order Fulfillment & Revision Workflow | Chanuka Jeewantha",
  description:
    "Interactive order management workflow including activity stream, questionnaire requirements, delivery milestones, revision cycles, and reviews.",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function OrderWorkflowPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; role?: "seller" | "buyer" }>;
}) {
  const { id, role } = await searchParams;

  let isAdmin = false;
  if (supabaseConfigured()) {
    try {
      const user = await getSessionUser();
      if (user) {
        const db = createAdminClient();
        const { data: adminRow } = await db
          .from("admins")
          .select("user_id")
          .eq("user_id", user.id)
          .maybeSingle();
        isAdmin = !!adminRow;
      }
    } catch {
      isAdmin = false;
    }
  }

  // If role is explicitly in query string (?role=buyer or ?role=seller), respect it.
  // Otherwise, default to "seller" only for admins, and "buyer" for customers.
  const resolvedRole: "seller" | "buyer" = role || (isAdmin ? "seller" : "buyer");

  const [activeOrder, availableOrders] = await Promise.all([
    getOrderWorkflowData(id),
    isAdmin ? getRecentOrdersList() : Promise.resolve([]),
  ]);

  return (
    <FiverrOrderWorkflow
      initialOrder={activeOrder}
      availableOrders={availableOrders}
      initialRole={resolvedRole}
      isAdmin={isAdmin}
    />
  );
}

async function getRecentOrdersList(): Promise<Array<{ id: string; ref: string; customer_name: string; status: string }>> {
  if (!supabaseConfigured()) return [];
  try {
    const db = createAdminClient();
    const { data } = await db
      .from("orders")
      .select("id, ref, customer_name, status")
      .order("created_at", { ascending: false })
      .limit(10);
    return (data || []).map((o) => ({
      id: o.id,
      ref: o.ref,
      customer_name: o.customer_name || "Customer",
      status: o.status,
    }));
  } catch {
    return [];
  }
}
