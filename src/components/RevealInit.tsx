"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One IntersectionObserver for the whole site.
 *
 * Any element, in a server component or not, can opt into the scroll
 * reveal by adding `className="reveal"` (plus an optional d1..d5 for
 * stagger). This mounts once in the layout and re-scans on navigation.
 *
 * The hidden state lives behind html[data-js="1"], set before paint in
 * the layout, so nothing is ever hidden without JS.
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Hydration happened, so the layout's "never hydrated" fallback is not needed.
    const w = window as Window & { __revealFallback?: ReturnType<typeof setTimeout> };
    if (w.__revealFallback) {
      clearTimeout(w.__revealFallback);
      w.__revealFallback = undefined;
      document.documentElement.setAttribute("data-js", "1");
    }

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
