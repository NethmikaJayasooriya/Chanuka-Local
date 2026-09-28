"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, whatsappUrl } from "@/lib/site";

interface DropdownItem {
  title: string;
  desc: string;
  href: string;
  badge?: string;
  icon: string;
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const servicesDropdown: DropdownItem[] = [
    {
      title: "All Packages & Services",
      desc: "ATS CV, LinkedIn overhaul, cover letters & overseas kits",
      href: "/services",
      icon: "⚡",
      badge: "Popular",
    },
    {
      title: "Pricing & Live Calculator",
      desc: "Transparent LKR pricing from LKR 8,950 with add-ons",
      href: "/pricing",
      icon: "💳",
      badge: "Transparent",
    },
    {
      title: "CV Before vs After ATS",
      desc: "Interactive visual slider comparing 75% rejected vs 98% callback CVs",
      href: "/#cv-difference",
      icon: "↔️",
    },
  ];

  const toolsDropdown: DropdownItem[] = [
    {
      title: "Free ATS CV Template",
      desc: "Clean Word (.doc) template tested against Taleo & Workday",
      href: "/free-ats-cv-template",
      icon: "📄",
      badge: "Free .DOC",
    },
    {
      title: "20-Point ATS CV Checklist",
      desc: "Self-audit checklist covering typography, keywords & layout",
      href: "/free-ats-cv-checklist",
      icon: "✅",
      badge: "Free TXT",
    },
    {
      title: "LinkedIn Headline Formula",
      desc: "Recruiter-magnet headline generator with 1-click copy",
      href: "/free-linkedin-headline-formula",
      icon: "🎯",
      badge: "Instant",
    },
    {
      title: "ATS Rejection Risk Simulator",
      desc: "60-second interactive test calculating your algorithmic risk",
      href: "/#ats-checker",
      icon: "🔬",
    },
  ];

  return (
    <>
      {/* Floating Modern Island Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 ${
          isScrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/92 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_35px_-10px_rgba(23,53,92,0.14)] py-2 sm:py-2.5 px-3.5 sm:px-6"
              : "bg-white/85 backdrop-blur-lg border border-slate-200/70 shadow-[0_8px_30px_-10px_rgba(23,53,92,0.08)] py-2.5 sm:py-3 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 shrink-0 select-none"
              aria-label="Chanuka Jeewantha Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#17355c] to-[#0f2440] p-0.5 flex items-center justify-center shadow-md shadow-[#17355c]/20 group-hover:scale-105 transition-transform duration-300">
                <span className="font-heading font-extrabold text-white text-xs sm:text-sm tracking-tight">
                  CJ
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#b9862f] border-2 border-white flex items-center justify-center text-[7px] text-white font-bold">
                  ★
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-[#0e1a2b] group-hover:text-[#17355c] transition-colors leading-tight">
                    Chanuka<span className="text-[#b9862f]">.</span>
                  </span>
                  <span className="hidden xl:inline-block px-1.5 py-0.2 rounded bg-amber-50 border border-amber-200/70 text-[9px] font-bold text-[#8f6419]">
                    CPRW
                  </span>
                </div>
                <span className="text-[10px] text-[#52637a] font-medium hidden md:inline leading-none">
                  Sri Lanka Career Specialist
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/60 p-1 rounded-full border border-slate-200/60">
              
              {/* Home */}
              <Link
                href="/"
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isRouteActive("/") && pathname === "/"
                    ? "bg-[#17355c] text-white shadow-xs"
                    : "text-[#334155] hover:text-[#17355c] hover:bg-white/80"
                }`}
              >
                <span>Home</span>
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isRouteActive("/services") || isRouteActive("/pricing")
                      ? "bg-[#17355c] text-white shadow-xs"
                      : "text-[#334155] hover:text-[#17355c] hover:bg-white/80"
                  }`}
                >
                  <span>Services</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown Menu Panel */}
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-white/98 backdrop-blur-2xl border border-slate-200 shadow-[0_20px_40px_-15px_rgba(23,53,92,0.18)] animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="space-y-1">
                      {servicesDropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-base shrink-0 p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#e8eff9] transition-colors">
                            {item.icon}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0e1a2b] group-hover:text-[#17355c] transition-colors">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#fbf3e3] text-[#8f6419] border border-[#b9862f]/30">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#52637a] mt-0.5 line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Package Matcher (Interactive Quiz) */}
              <Link
                href="/catalogue"
                className={`relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isRouteActive("/catalogue")
                    ? "bg-[#17355c] text-white shadow-xs"
                    : "text-[#334155] hover:text-[#17355c] hover:bg-white/80"
                }`}
              >
                <span>Find Package</span>
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500/20 text-[#8f6419] text-[9.5px] font-extrabold border border-amber-500/30">
                  Quiz
                </span>
              </Link>

              {/* Free Tools Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("tools")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/resources"
                  className={`flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                    isRouteActive("/resources") ||
                    isRouteActive("/free-ats-cv-template") ||
                    isRouteActive("/free-ats-cv-checklist") ||
                    isRouteActive("/free-linkedin-headline-formula")
                      ? "bg-[#17355c] text-white shadow-xs"
                      : "text-[#334155] hover:text-[#17355c] hover:bg-white/80"
                  }`}
                >
                  <span>Free Tools</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === "tools" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Dropdown Menu Panel */}
                {activeDropdown === "tools" && (
                  <div className="absolute top-full left-0 mt-2 w-80 p-2 rounded-2xl bg-white/98 backdrop-blur-2xl border border-slate-200 shadow-[0_20px_40px_-15px_rgba(23,53,92,0.18)] animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                    <div className="space-y-1">
                      {toolsDropdown.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <span className="text-base shrink-0 p-1.5 rounded-lg bg-slate-100 group-hover:bg-[#e8eff9] transition-colors">
                            {item.icon}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#0e1a2b] group-hover:text-[#17355c] transition-colors">
                                {item.title}
                              </span>
                              {item.badge && (
                                <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#e8f9ef] text-[#1ea952] border border-[#25d366]/30">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-[#52637a] mt-0.5 line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Books */}
              <Link
                href="/ebooks"
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isRouteActive("/ebooks")
                    ? "bg-[#17355c] text-white shadow-xs"
                    : "text-[#334155] hover:text-[#17355c] hover:bg-white/80"
                }`}
              >
                <span>Books</span>
              </Link>

              {/* Reviews */}
              <Link
                href="/reviews"
                className={`relative flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isRouteActive("/reviews")
                    ? "bg-[#17355c] text-white shadow-xs"
                    : "text-[#334155] hover:text-[#17355c] hover:bg-white/80"
                }`}
              >
                <span>Reviews</span>
                <span className="text-[10px] text-[#b9862f] font-bold">4.9★</span>
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isRouteActive("/about")
                    ? "bg-[#17355c] text-white shadow-xs"
                    : "text-[#334155] hover:text-[#17355c] hover:bg-white/80"
                }`}
              >
                <span>About</span>
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isRouteActive("/contact")
                    ? "bg-[#17355c] text-white shadow-xs"
                    : "text-[#334155] hover:text-[#17355c] hover:bg-white/80"
                }`}
              >
                <span>Contact</span>
              </Link>

            </nav>

            {/* Right Action Island: Live Pulse & WhatsApp Fast Intake */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Live Availability Status Indicator */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Active Intakes</span>
              </div>

              {/* Primary WhatsApp Action Button */}
              <a
                href={whatsappUrl("Hi Chanuka, I would like to consult you regarding my CV and career progression.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#25d366] hover:bg-[#1ea952] text-white font-bold text-xs sm:text-[13px] flex items-center gap-2 shadow-md shadow-[#25d366]/25 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.203c.043.071.043.418-.101.823z" />
                </svg>
                <span className="whitespace-nowrap">WhatsApp Fast Intake</span>
              </a>

              {/* Mobile Burger Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label="Toggle Mobile Menu"
                className="lg:hidden p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0e1a2b] transition-colors"
              >
                {isMobileOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden animate-in fade-in duration-200">
          {/* Backdrop Blur */}
          <div
            className="fixed inset-0 bg-[#0e1a2b]/40 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Drawer Card */}
          <div className="fixed top-20 left-4 right-4 max-h-[82vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-5 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#17355c] flex items-center justify-center text-white text-xs font-bold">
                  CJ
                </div>
                <div>
                  <h4 className="font-heading text-xs font-bold text-[#0e1a2b]">Chanuka Jeewantha</h4>
                  <p className="text-[10px] text-[#b9862f] font-semibold">CPRW & CPCC Dual Certified</p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                Online Now
              </span>
            </div>

            {/* Navigation Grid */}
            <div className="space-y-1">
              {[
                { label: "Home", href: "/", icon: "🏠" },
                { label: "Services & Rates", href: "/services", icon: "⚡", badge: "From LKR 8,950" },
                { label: "Live Pricing Calculator", href: "/pricing", icon: "💳" },
                { label: "Find My Package (Quiz)", href: "/catalogue", icon: "🎯", badge: "60-Second" },
                { label: "Free Tools & Resources", href: "/resources", icon: "🛠️" },
                { label: "Free ATS CV Template", href: "/free-ats-cv-template", icon: "📄", sub: true },
                { label: "20-Point ATS Checklist", href: "/free-ats-cv-checklist", icon: "✅", sub: true },
                { label: "LinkedIn Headline Generator", href: "/free-linkedin-headline-formula", icon: "💡", sub: true },
                { label: "Books & Sinhala Literature", href: "/ebooks", icon: "📚", badge: "5 Books" },
                { label: "Reviews & Testimonials", href: "/reviews", icon: "⭐", badge: "4.9 / 5.0" },
                { label: "About Chanuka", href: "/about", icon: "👤" },
                { label: "Contact & Fast Intake", href: "/contact", icon: "✉️" },
              ].map((item, idx) => {
                const active = isRouteActive(item.href) && (item.href === "/" ? pathname === "/" : true);
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${
                      item.sub ? "ml-4 text-xs" : "text-sm"
                    } ${
                      active
                        ? "bg-[#17355c] text-white font-bold shadow-xs"
                        : "text-[#334155] hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          active
                            ? "bg-white/20 text-white"
                            : "bg-[#fbf3e3] text-[#8f6419]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Direct Actions */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={whatsappUrl("Hi Chanuka, I would like to order a professional CV package.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-[#25d366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <span>Chat with Chanuka on WhatsApp</span>
              </a>
              <Link
                href="/catalogue"
                onClick={() => setIsMobileOpen(false)}
                className="w-full py-2.5 rounded-full bg-slate-100 text-[#17355c] font-bold text-xs text-center hover:bg-slate-200 transition-colors"
              >
                Take the 60-Second Matcher Quiz
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
