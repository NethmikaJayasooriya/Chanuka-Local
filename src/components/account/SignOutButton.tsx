"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signOutClient } from "@/lib/auth";

export function SignOutButton({ className }: { className?: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  return (
    <button
      type="button"
      disabled={busy}
      onClick={async () => {
        setBusy(true);
        await signOutClient();
        router.push("/");
        router.refresh();
      }}
      className={className ?? "text-[13.5px] font-semibold text-muted hover:text-ink disabled:opacity-60"}
    >
      {busy ? "Signing out..." : "Sign out"}
    </button>
  );
}
