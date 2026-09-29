"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BoltIcon } from "./CountryFlags";

export function StickyBar() {
  const pathname = usePathname() ?? "/";
  if (pathname.startsWith("/admin")) return null;

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleMenuState(e: Event) {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      setMenuOpen(Boolean(customEvent.detail?.open));
    }
    window.addEventListener("mobile-menu-state", handleMenuState);
    return () => window.removeEventListener("mobile-menu-state", handleMenuState);
  }, []);

  // Suppress sticky bar on order funnel pages or when the mobile navigation drawer is active
  if (
    menuOpen ||
    pathname.startsWith("/order") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/intake")
  ) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] backdrop-blur-md lg:hidden shadow-lg">
      <div className="max-w-md mx-auto">
        <a
          href="/#build"
          className="flex w-full items-center justify-center gap-1.5 rounded-full bg-brand py-2.5 px-4 text-center text-[13px] font-semibold text-paper hover:bg-brand-deep transition-colors shadow-xs"
        >
          <BoltIcon className="h-3.5 w-3.5 text-accent" />
          <span>Build Package</span>
        </a>
      </div>
    </div>
  );
}
