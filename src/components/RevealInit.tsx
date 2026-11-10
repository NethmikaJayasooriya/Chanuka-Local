"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Global Scroll Reveal & Motion Controller.
 *
 * Runs once in RootLayout and re-scans on page navigation.
 * Applies data-js="1" on client mount to activate progressive enhancement
 * animations without ever breaking non-JS or crawler visits.
 */
export function RevealInit() {
  const pathname = usePathname();

  // Suppress React 19 dev false-positive warning for script tags during client reconciliation
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
      const originalError = console.error;
      console.error = (...args: unknown[]) => {
        if (typeof args[0] === "string" && args[0].includes("Encountered a script tag")) {
          return;
        }
        originalError.apply(console, args);
      };
    }
  }, []);

  useEffect(() => {
    // Activate JS animations
    document.documentElement.setAttribute("data-js", "1");

    const show = (el: Element) => el.classList.add("is-visible");
    const collect = () =>
      Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)"));

    // No observer support, or the visitor asked for less motion: show everything.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      collect().forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const observeAll = () => collect().forEach((el) => io.observe(el));
    observeAll();

    // Sections rendered after mount (client components, suspense) get picked up too.
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
