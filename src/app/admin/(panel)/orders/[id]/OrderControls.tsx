"use client";

import { useState, useTransition } from "react";
import { saveOrderNotes, setPaymentStatus, updateOrderStatus } from "../../actions";
import { Card } from "@/components/admin/ui";

const STATUSES = [
  ["new", "New"],
  ["in_progress", "In progress"],
  ["draft_delivered", "Draft delivered"],
  ["revision", "Revision"],
  ["completed", "Completed"],
  ["cancelled", "Cancelled"],
] as const;

export function OrderControls({ id, status, payment, notes }: { id: string; status: string; payment: string; notes: string }) {
  const [pending, start] = useTransition();
  const [note, setNote] = useState(notes);
  const [saved, setSaved] = useState(false);

  return (
    <Card className="h-fit">
      <h2 className="text-[14px] font-bold text-ink">Manage</h2>

      <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Status</label>
      <select
        defaultValue={status}
        disabled={pending}
        onChange={(e) => start(() => updateOrderStatus(id, e.target.value))}
        className="mt-1.5 w-full rounded-[10px] border border-line-strong bg-white px-3 py-2.5 text-[14px] text-ink outline-none focus:border-brand"
      >
        {STATUSES.map(([v, l]) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>

      <label className="mt-5 block text-[12px] font-semibold uppercase tracking-wide text-muted">Payment</label>
      <select
        defaultValue={payment}
        disabled={pending}
        onChange={(e) => start(() => setPaymentStatus(id, e.target.value))}
        className="mt-1.5 w-full rounded-[10px] border border-line-strong bg-white px-3 py-2.5 text-[14px] text-ink outline-none focus:border-brand"
      >
        <option value="pending">Pending</option>
        <option value="paid">Paid</option>
        <option value="refunded">Refunded</option>
        <option value="cancelled">Cancelled</option>
      </select>

      <label className="mt-5 block text-[12px] font-semibold uppercase tracking-wide text-muted">Internal notes</label>
      <textarea
        rows={5}
        value={note}
        onChange={(e) => { setNote(e.target.value); setSaved(false); }}
        className="mt-1.5 w-full resize-y rounded-[10px] border border-line-strong bg-white px-3 py-2.5 text-[13.5px] text-ink outline-none focus:border-brand"
      />
      <button
        disabled={pending}
        onClick={() => start(async () => { await saveOrderNotes(id, note); setSaved(true); })}
        className="mt-2 w-full rounded-full bg-brand px-4 py-2.5 text-[13.5px] font-semibold text-white hover:bg-brand-deep disabled:opacity-60"
      >
        {saved ? "Saved" : "Save notes"}
      </button>
    </Card>
  );
}
