"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Package Finder", href: "/catalogue", badge: "60s Quiz" },
    { label: "Free Tools", href: "/resources" },
    { label: "Books", href: "/ebooks" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] shadow-[0_4px_20px_-5px_rgba(23,53,92,0.06)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#17355c] to-[#0f2440] p-0.5 flex items-center justify-center shadow-md shadow-[#17355c]/15 group-hover:scale-105 transition-transform">
            <span className="font-bold text-white text-base font-serif">CJ</span>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-xl tracking-tight text-[#0e1a2b] group-hover:text-[#17355c] transition-colors leading-tight">
              Chanuka<span className="text-[#b9862f]">.</span>
            </span>
            <span className="text-[10.5px] uppercase tracking-wider text-[#52637a] font-semibold hidden sm:inline">
              CPRW & CPCC Career Strategist
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-[#233348] hover:text-[#17355c] transition-colors relative py-1"
            >
              {link.label}
              {link.badge && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9.5px] font-bold rounded-full bg-[#fbf3e3] text-[#8f6419] border border-[#b9862f]/30">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/catalogue"
            className="px-4 py-2 text-xs font-semibold rounded-full border border-[#cbd5e1] text-[#17355c] bg-white hover:border-[#17355c] hover:bg-[#f0f5fc] transition-all shadow-xs"
          >
            Find My Package
          </Link>
          <a
            href={whatsappUrl("Hi Chanuka, I would like to inquire about your CV and Career Services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold rounded-full bg-[#25d366] hover:bg-[#1ea952] text-white flex items-center gap-1.5 shadow-md shadow-[#25d366]/20 transition-all hover:scale-105"
          >
            <svg
              className="w-3.5 h-3.5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.203c.043.071.043.418-.101.823z" />
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-lg bg-white border border-[#cbd5e1] text-[#0e1a2b] hover:text-[#17355c] shadow-xs"
        >
          {isMobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white/98 border-b border-[#e2e8f0] px-6 py-6 mt-2 backdrop-blur-2xl shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-sm font-semibold text-[#0e1a2b] hover:text-[#17355c] flex items-center justify-between py-1"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-[#fbf3e3] text-[#8f6419]">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-4 border-t border-[#e2e8f0] flex flex-col gap-2.5">
              <Link
                href="/catalogue"
                onClick={() => setIsMobileOpen(false)}
                className="w-full py-2.5 text-center text-xs font-bold rounded-full border border-[#17355c] text-[#17355c]"
              >
                Take the 60s Package Matcher Quiz
              </Link>
              <a
                href={whatsappUrl("Hi Chanuka, I would like to inquire about your CV services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold rounded-full bg-[#25d366] text-white flex items-center justify-center gap-1.5 shadow"
              >
                <span>Chat on WhatsApp (+94 77 390 2230)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
