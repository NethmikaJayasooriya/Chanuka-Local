"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AccountLink } from "@/components/account/AccountLink";

const servicesList = [
  { label: "ATS Friendly CV", href: "/cv-writing", desc: "Built to beat parsers and grab hiring managers" },
  { label: "LinkedIn Optimization", href: "/linkedin-optimisation", desc: "Profile rewritten so recruiters find you" },
  { label: "Cover Letter Writing", href: "/cover-letter-writing", desc: "Targeted to specific roles and companies" },
  { label: "CV Review & Audit", href: "/cv-review", desc: "1:1 review and ATS compliance audit" },
  { label: "Career Strategy", href: "/career-strategy", desc: "Senior and executive positioning strategy" },
];

export function Header() {
  const pathname = usePathname() ?? "/";
  if (pathname.startsWith("/admin")) return null;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrollState, setScrollState] = useState<"top" | "hero" | "page">("top");
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY;
      if (y <= 20) {
        setScrollState("top");
      } else if (y <= 750) {
        setScrollState("hero");
      } else {
        setScrollState("page");
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change or outside click
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  // Notify sticky bar when mobile menu opens/closes
  useEffect(() => {
    window.dispatchEvent(new CustomEvent("mobile-menu-state", { detail: { open: mobileOpen } }));
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active-tab detection for the desktop nav
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");
  const servicesActive = servicesList.some((s) => isActive(s.href)) || isActive("/services");
  const navCls = (active: boolean) =>
    `text-[14px] font-medium transition-colors py-2 ${active ? "text-brand" : "text-ink-soft hover:text-brand"}`;
  const labelCls = (active: boolean) =>
    `border-b-2 pb-0.5 ${active ? "border-brand font-semibold" : "border-transparent"}`;

  const isHome = pathname === "/";
  const isMobileDarkHero = isHome && scrollState !== "page" && !mobileOpen;

  // Header background classes on mobile vs desktop
  let headerMobileCls = "max-lg:bg-transparent max-lg:border-transparent max-lg:backdrop-blur-none";
  if (mobileOpen) {
    headerMobileCls = "bg-paper border-b border-line";
  } else if (isHome) {
    if (scrollState === "hero") {
      headerMobileCls = "max-lg:bg-black/90 max-lg:backdrop-blur-md max-lg:border-b max-lg:border-white/10 max-lg:shadow-lg";
    } else if (scrollState === "page") {
      headerMobileCls = "max-lg:bg-paper/95 max-lg:backdrop-blur-md max-lg:border-b max-lg:border-line max-lg:shadow-2xs";
    }
  } else if (scrollState !== "top") {
    headerMobileCls = "max-lg:bg-paper/95 max-lg:backdrop-blur-md max-lg:border-b max-lg:border-line max-lg:shadow-2xs";
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${headerMobileCls} lg:border-b lg:border-line lg:bg-paper/95 lg:backdrop-blur-md`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-2 sm:gap-4">
        {/* Logo with distinctive accent dot */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <Link
            href="/"
            aria-label="Chanuka Jeewantha home"
            className={`group flex items-center gap-2 sm:gap-2.5 tracking-tight font-display text-[17px] sm:text-[23px] font-bold transition-colors shrink-0 ${
              isMobileDarkHero ? "text-[#f0ece1]" : "text-ink"
            }`}
          >
            <img
              src="/logo-mark.png"
              alt=""
              width={476}
              height={310}
              className={`brand-mark shrink-0 transition-all ${
                isMobileDarkHero ? "brightness-[2.2] contrast-125" : ""
              }`}
            />
            <span className="flex items-baseline">
              <span className="tracking-[-0.03em] font-extrabold">Chanuka Jeewantha</span>
              <span className="text-accent text-[22px] sm:text-[26px] leading-none ml-0.5 font-bold">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {/* Services Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              className={`flex items-center gap-1 ${navCls(servicesActive)}`}
            >
              <span className={labelCls(servicesActive)}>Services</span>
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5 text-muted group-hover:text-brand">
                <path d="M4.5 6l3.5 3.5L11.5 6" />
              </svg>
            </button>

            <div className="absolute left-0 top-full hidden group-hover:block w-72 rounded-2xl border border-line bg-paper p-3 shadow-xl z-50">
              <div className="space-y-1">
                {servicesList.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-xl p-2.5 hover:bg-surface transition-colors"
                  >
                    <p className="text-[13.5px] font-semibold text-ink">{s.label}</p>
                    <p className="text-[11.5px] text-muted leading-tight mt-0.5">{s.desc}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-2 border-t border-line pt-2 px-2.5">
                <Link href="/packages" className="text-[12.5px] font-semibold text-brand hover:underline">
                  Compare all packages & prices →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/packages" className={navCls(isActive("/packages"))}>
            <span className={labelCls(isActive("/packages"))}>Packages</span>
          </Link>
          <Link href="/how-it-works" className={navCls(isActive("/how-it-works"))}>
            <span className={labelCls(isActive("/how-it-works"))}>How it works</span>
          </Link>
          <Link href="/reviews" className={navCls(isActive("/reviews"))}>
            <span className={labelCls(isActive("/reviews"))}>Reviews</span>
          </Link>
          <Link href="/about" className={navCls(isActive("/about"))}>
            <span className={labelCls(isActive("/about"))}>About</span>
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <AccountLink className="hidden lg:inline-flex text-[13px] font-semibold text-ink-soft hover:text-brand transition-colors" />
          <Link
            href="/order"
            className="hidden lg:inline-flex rounded-full bg-brand px-3.5 py-2 sm:px-5 sm:py-2.5 text-[12.5px] sm:text-[13.5px] font-semibold text-paper shadow-xs hover:bg-brand-deep transition-colors whitespace-nowrap"
          >
            <span>Start order</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-xl border transition-colors shadow-2xs ${
              isMobileDarkHero
                ? "border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                : "border-ink/15 bg-white/75 text-ink backdrop-blur-md hover:text-brand hover:border-brand/40"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-ink/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-50 border-t border-line bg-paper px-5 py-6 space-y-5 animate-fade-in max-h-[calc(100svh-64px)] overflow-y-auto shadow-2xl lg:hidden">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Explore & Guidance</p>
              <div className="grid grid-cols-2 gap-1.5 text-[13.5px] font-medium text-ink-soft">
                <Link href="/packages" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">Packages & Pricing</Link>
                <Link href="/services" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">All Services</Link>
                <Link href="/how-it-works" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">How It Works</Link>
                <Link href="/reviews" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">Client Reviews</Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">About Chanuka</Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">Contact Directly</Link>
                <Link href="/job-roles" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">Job Roles Hub</Link>
                <Link href="/cv-samples" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">CV Samples</Link>
                <Link href="/resources" onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-surface hover:text-brand transition-colors">Free Checklists</Link>
              </div>
            </div>

            <div className="border-t border-line pt-4 space-y-2.5 pb-safe">
              <AccountLink
                mobile
                className="block w-full rounded-full border border-line-strong bg-surface py-3 text-center text-[14px] font-semibold text-ink hover:border-brand hover:text-brand transition-colors"
              />
              <Link
                href="/order"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-full bg-brand py-3 text-center text-[14px] font-semibold text-paper shadow-xs hover:bg-brand-deep transition-colors"
              >
                Start Your Order
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
