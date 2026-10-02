"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BoltIcon } from "./CountryFlags";

export function StickyBar() {
  const pathname = usePathname() ?? "/";
  if (pathname.startsWith("/admin")) return null;

  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const [inHero, setInHero] = useState(isHome);

  useEffect(() => {
    function handleMenuState(e: Event) {
      const customEvent = e as CustomEvent<{ open: boolean }>;
      setMenuOpen(Boolean(customEvent.detail?.open));
    }
    window.addEventListener("mobile-menu-state", handleMenuState);
    return () => window.removeEventListener("mobile-menu-state", handleMenuState);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setInHero(false);
      return;
    }

    function checkPosition() {
      const trustBar = document.getElementById("trust-bar");
      if (trustBar) {
        const rect = trustBar.getBoundingClientRect();
        // Transition when the trustBar section reaches the sticky bar at the bottom of the viewport
        setInHero(rect.top > window.innerHeight - 30);
      } else {
        setInHero(window.scrollY < 750);
      }
    }

    checkPosition();
    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("resize", checkPosition, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, [isHome]);

  // Suppress sticky bar on order funnel pages or when the mobile navigation drawer is active
  if (
    menuOpen ||
    pathname.startsWith("/order") ||
    pathname.startsWith("/checkout") ||
    pathname.startsWith("/intake")
  ) {
    return null;
  }

  const barThemeCls = "border-t border-line bg-paper/95 shadow-lg";

  return (
    <div
      className={`fixed inset-x-0 bottom-[-2px] z-40 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px)+2px)] backdrop-blur-md lg:hidden transition-colors duration-300 ${barThemeCls}`}
    >
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
