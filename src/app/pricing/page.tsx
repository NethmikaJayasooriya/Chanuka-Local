import Link from "next/link";
import { PRICING_TIERS, ADD_ONS, formatLKR } from "@/lib/pricing";
import { PricingCalculator } from "@/components/PricingCalculator";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Transparent Rates & Pricing in Sri Lanka | Chanuka Jeewantha",
  description:
    "View clear, honest CV writing and LinkedIn optimization pricing in Sri Lankan Rupees. Fresh Graduate packages from LKR 3,950 to Executive suites.",
};

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Pricing & Packages</span>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#17355c] to-[#0f2440] text-white p-5 sm:p-10 lg:p-12 mb-10 sm:mb-14 shadow-xl text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[#fbf3e3]">
            Transparent Sri Lankan Rupees (LKR)
          </span>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-3 leading-tight break-words">
            An Investment That Pays Back in Your First Paycheck.
          </h1>
          <p className="text-xs sm:text-base text-white/80 mt-3 leading-relaxed max-w-2xl mx-auto">
            A single higher salary offer or promotion easily returns 10x to 50x of your package investment. Every document is personally crafted by dual CPRW &amp; CPCC certified specialist Chanuka Jeewantha.
          </p>
        </div>

        {/* All 4 Main Package Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? "bg-white border-2 border-[#17355c] shadow-[0_20px_45px_-15px_rgba(23,53,92,0.16)] -translate-y-2"
                  : "bg-white border border-[#e2e8f0] hover:border-[#cbd5e1] shadow-2xs"
              }`}
            >
              <div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#fbf3e3] text-[#8f6419] text-[10px] font-bold border border-[#b9862f]/30">
                  {tier.badge}
                </span>

                <h3 className="font-heading text-lg font-bold text-[#0e1a2b] mt-3">
                  {tier.title}
                </h3>
                <p className="text-xs text-[#52637a] mt-1">{tier.experience}</p>

                <div className="my-5">
                  <span className="font-heading text-2xl sm:text-3xl font-black text-[#17355c] block">
                    {formatLKR(tier.priceLKR)}
                  </span>
                  <span className="text-xs line-through text-[#94a3b8]">
                    {formatLKR(tier.originalPriceLKR)}
                  </span>
                </div>

                <div className="space-y-2 mb-6 text-xs text-[#233348]">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#1ea952] font-bold">✓</span>
                      <span className={feat.highlight ? "font-bold text-[#0e1a2b]" : ""}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#e2e8f0]">
                <a
                  href={whatsappUrl(tier.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                    tier.popular
                      ? "btn-primary hover:scale-105"
                      : "btn-whatsapp hover:scale-105"
                  }`}
                >
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Customizer Tool */}
        <PricingCalculator />

        {/* Payment Methods & Reassurance */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#e2e8f0] p-8 mt-14 shadow-xs">
          <h3 className="font-heading text-base font-bold text-[#0e1a2b] mb-4 text-center">
            Convenient Payment Methods in Sri Lanka 💳
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#233348] text-center">
            <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0]">
              <span className="text-xl block mb-1">🏦</span>
              <strong className="text-[#0e1a2b] block">Direct Bank Transfer</strong>
              <p className="text-[11px] text-[#52637a] mt-1">Commercial Bank, Sampath Bank, HNB, Seylan</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0]">
              <span className="text-xl block mb-1">📱</span>
              <strong className="text-[#0e1a2b] block">FriMi & Digital Wallets</strong>
              <p className="text-[11px] text-[#52637a] mt-1">Instant QR / mobile transfer with zero fee</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0]">
              <span className="text-xl block mb-1">✨</span>
              <strong className="text-[#0e1a2b] block">Koko Pay (3 Installments)</strong>
              <p className="text-[11px] text-[#52637a] mt-1">Split package cost in 3 monthly installments with debit card</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
