"use client";

import { useState } from "react";
import { PRICING_TIERS, ADD_ONS, formatLKR, CareerLevel } from "@/lib/pricing";
import { whatsappUrl } from "@/lib/site";

export function PricingCalculator() {
  const [activeTab, setActiveTab] = useState<CareerLevel>("mid");
  const [includeExpress, setIncludeExpress] = useState(false);
  const [includeInterview, setIncludeInterview] = useState(false);

  const currentTier = PRICING_TIERS.find((t) => t.id === activeTab) || PRICING_TIERS[1];

  let totalPrice = currentTier.priceLKR;
  if (includeExpress) totalPrice += 3500;
  if (includeInterview) totalPrice += 7500;

  const buildWhatsAppMessage = () => {
    let msg = `Hi Chanuka! I am interested in ordering the ${currentTier.title} (${formatLKR(currentTier.priceLKR)}).`;
    if (includeExpress) msg += ` + VIP 24-Hour Express (+LKR 3,500).`;
    if (includeInterview) msg += ` + 1-on-1 Mock Interview Session (+LKR 7,500).`;
    msg += ` Total: ${formatLKR(totalPrice)}. How do we get started?`;
    return msg;
  };

  return (
    <section className="py-20 bg-[#f8fafd] relative border-t border-[#e2e8f0]" id="pricing">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Transparent Sri Lankan Investment
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1a2b] mt-3">
            Choose the Service Your <span className="text-[#17355c]">Career Needs</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52637a] mt-3 leading-relaxed">
            Clear, honest pricing in Sri Lankan Rupees. No hidden fees. Every package is written by CPRW-certified specialist Chanuka Jeewantha.
          </p>

          {/* Career Stage Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7 p-1.5 rounded-full bg-white border border-[#e2e8f0] max-w-2xl mx-auto shadow-xs">
            {PRICING_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTab(tier.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                  activeTab === tier.id
                    ? "bg-[#17355c] text-white shadow-sm"
                    : "text-[#52637a] hover:text-[#0e1a2b] hover:bg-slate-50"
                }`}
              >
                {tier.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Tier Spotlight Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#e2e8f0] shadow-[0_20px_50px_-20px_rgba(23,53,92,0.12)] p-6 sm:p-10 mb-10">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-7 border-b border-[#e2e8f0] gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf3e3] text-[#8f6419] text-xs font-bold mb-2">
                {currentTier.badge}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0e1a2b]">
                {currentTier.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#b9862f] mt-1 font-bold">
                {currentTier.experience}
              </p>
              <p className="text-xs text-[#52637a] mt-1">
                Targeting: {currentTier.targetRole}
              </p>
            </div>

            <div className="text-left lg:text-right">
              <span className="text-xs text-[#52637a] block">All-Inclusive Complete Bundle:</span>
              <div className="flex items-baseline lg:justify-end gap-3 mt-1">
                <span className="font-heading text-3xl sm:text-4xl font-black text-[#17355c]">
                  {formatLKR(currentTier.priceLKR)}
                </span>
                <span className="text-sm line-through text-[#94a3b8]">
                  {formatLKR(currentTier.originalPriceLKR)}
                </span>
              </div>
              <span className="text-[11.5px] font-bold text-[#1ea952] mt-1 block">
                Turnaround: {currentTier.turnaround}
              </span>
            </div>
          </div>

          {/* Individual Service Sub-Prices Breakdown */}
          <div className="my-6 p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0]">
            <p className="text-xs uppercase font-bold text-[#17355c] tracking-wider mb-2">
              Individual A La Carte Rates:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-[#e2e8f0] flex justify-between items-center shadow-2xs">
                <span className="text-[#52637a]">ATS CV Only:</span>
                <span className="font-bold text-[#0e1a2b]">{formatLKR(currentTier.individualServices.cvPrice)}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e2e8f0] flex justify-between items-center shadow-2xs">
                <span className="text-[#52637a]">LinkedIn Overhaul:</span>
                <span className="font-bold text-[#0e1a2b]">{formatLKR(currentTier.individualServices.linkedinPrice)}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-[#e2e8f0] flex justify-between items-center shadow-2xs">
                <span className="text-[#52637a]">Cover Letter:</span>
                <span className="font-bold text-[#0e1a2b]">{formatLKR(currentTier.individualServices.coverLetterPrice)}</span>
              </div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="mb-7">
            <p className="text-xs uppercase font-bold text-[#17355c] tracking-wider mb-3">
              Included In The Complete Suite:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentTier.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#233348]">
                  <span className="text-[#1ea952] font-bold">✓</span>
                  <span className={feat.highlight ? "font-bold text-[#0e1a2b]" : ""}>
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Add-Ons Toggles */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0] mb-7 space-y-3">
            <span className="text-xs uppercase font-bold text-[#17355c] tracking-wider block">
              Customize Your Order with Add-Ons:
            </span>

            <label className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#e2e8f0] cursor-pointer hover:border-[#17355c]/40 transition-colors shadow-2xs">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={includeExpress}
                  onChange={(e) => setIncludeExpress(e.target.checked)}
                  className="w-4 h-4 rounded text-[#17355c] focus:ring-[#17355c]"
                />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#0e1a2b] block">
                    VIP 24-Hour Express Delivery ⚡
                  </span>
                  <span className="text-[11px] text-[#52637a]">
                    Jump to the priority queue and receive all documents within 24 hours.
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#b9862f] whitespace-nowrap ml-2">
                +LKR 3,500
              </span>
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#e2e8f0] cursor-pointer hover:border-[#17355c]/40 transition-colors shadow-2xs">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={includeInterview}
                  onChange={(e) => setIncludeInterview(e.target.checked)}
                  className="w-4 h-4 rounded text-[#17355c] focus:ring-[#17355c]"
                />
                <div>
                  <span className="text-xs sm:text-sm font-bold text-[#0e1a2b] block">
                    1-on-1 Mock Interview & Salary Coaching (45 Mins) 🎙️
                  </span>
                  <span className="text-[11px] text-[#52637a]">
                    Live coaching call with Chanuka covering behavioral questions and negotiation tactics.
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#b9862f] whitespace-nowrap ml-2">
                +LKR 7,500
              </span>
            </label>
          </div>

          {/* Final Live Total & WhatsApp Order CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-6 border-t border-[#e2e8f0]">
            <div>
              <span className="text-xs text-[#52637a] block">Your Total Investment:</span>
              <span className="font-heading text-2xl sm:text-4xl font-black text-[#17355c]">
                {formatLKR(totalPrice)}
              </span>
            </div>

            <a
              href={whatsappUrl(buildWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-whatsapp font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-105"
            >
              <span>Book via WhatsApp (+94 77 390 2230)</span>
            </a>
          </div>

        </div>

        {/* Entry Level CV Audit Callout Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-[#e2e8f0] p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#e8eff9] flex items-center justify-center text-xl shrink-0">
              🔍
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-[#0e1a2b]">
                Just want your current CV checked? Try our 20-Point ATS Audit
              </h4>
              <p className="text-xs text-[#52637a] mt-0.5">
                Detailed written & voice feedback highlighting ATS flaws, keyword omissions, and quick fixes within 24 hours.
              </p>
            </div>
          </div>
          <a
            href={whatsappUrl("Hi Chanuka, I would like to order the 20-Point CV Review & ATS Audit (LKR 1,490).")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-[#17355c] text-[#17355c] hover:bg-[#17355c] hover:text-white font-bold text-xs whitespace-nowrap transition-colors"
          >
            Order Audit for LKR 1,490
          </a>
        </div>

      </div>
    </section>
  );
}
