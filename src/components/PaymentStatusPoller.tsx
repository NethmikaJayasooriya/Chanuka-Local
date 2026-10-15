"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function PaymentStatusPoller({ active }: { active: boolean }) {
  const router = useRouter();
  useEffect(() => {
    if (!active) return;
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      router.refresh();
      if (attempts >= 15) window.clearInterval(timer);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [active, router]);
  return null;
}
