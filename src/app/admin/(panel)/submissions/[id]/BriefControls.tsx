"use client";

import { useTransition } from "react";
import { markBriefHandled } from "../../actions";
import { Card } from "@/components/admin/ui";

export function BriefControls({ id, handled, email }: { id: string; handled: boolean; email: string | null }) {
  const [pending, start] = useTransition();
  return (
    <Card className="h-fit">
      <h2 className="text-[14px] font-bold text-ink">Manage</h2>
      <button
        disabled={pending}
        onClick={() => start(() => markBriefHandled(id, !handled))}
        className={`mt-3 w-full rounded-full px-4 py-2.5 text-[13.5px] font-semibold disabled:opacity-60 ${
          handled ? "border border-line-strong bg-white text-ink hover:border-brand" : "bg-brand text-white hover:bg-brand-deep"
        }`}
      >
        {handled ? "Mark as not handled" : "Mark as handled"}
      </button>
      {email && (
        <a href={`mailto:${email}`} className="mt-2 block rounded-full border border-line-strong bg-white px-4 py-2.5 text-center text-[13.5px] font-semibold text-ink hover:border-brand">
          Email customer
        </a>
      )}
    </Card>
  );
}
