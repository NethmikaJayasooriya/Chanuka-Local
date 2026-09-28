"use client";

import { whatsappUrl } from "@/lib/site";

export function MotionBanner() {
  const tickerItems = [
    "🔥 LIMITED INTAKES: Only 4 Priority Review Slots Left for This Week",
    "⚡ 24-Hour VIP Express Delivery Available",
    "⭐ 450+ 5-Star Google Reviews (4.9 / 5.0 Rating)",
    "🎯 Dual CPRW & CPCC Certified Specialist - No Outsourcing",
    "🇱🇰 Sri Lanka & Overseas Migration ATS CV Writing",
    "💬 Direct WhatsApp Consultation (+94 77 390 2230)",
    "🏆 100% Satisfaction & 14-45 Day Revision Window",
  ];

  return (
    <div className="bg-[#0f2440] text-white py-1.5 overflow-hidden relative select-none border-b border-[#17355c] z-50 text-[11px] font-medium tracking-wide">
      {/* Ambient gradient fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0f2440] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0f2440] to-transparent z-10" />

      <a
        href={whatsappUrl("Hi Chanuka, I saw your live priority banner and would like to claim an intake slot.")}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-90 transition-opacity"
      >
        <div className="animate-marquee flex gap-8 whitespace-nowrap items-center">
          {tickerItems.concat(tickerItems).map((text, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-white/90">{text}</span>
              <span className="text-[#b9862f] text-xs">◆</span>
            </div>
          ))}
        </div>
      </a>
    </div>
  );
}
