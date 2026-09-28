import Link from "next/link";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { CvComparisonSlider } from "@/components/CvComparisonSlider";
import { PackageMatcherQuiz } from "@/components/PackageMatcherQuiz";
import { AtsHealthChecker } from "@/components/AtsHealthChecker";
import { PricingCalculator } from "@/components/PricingCalculator";
import { EbookShowcase } from "@/components/EbookShowcase";
import { ReviewsSection } from "@/components/ReviewsSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SERVICES } from "@/lib/services";
import { formatLKR } from "@/lib/pricing";
import { site, whatsappUrl } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#f8fafd]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Bar & Marquee */}
      <TrustBar />

      {/* 3. Core Services Grid */}
      <section className="py-20 bg-white relative border-b border-[#e2e8f0]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
                Engineered for Modern Hiring Algorithms
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1a2b] mt-3">
                Career Services <span className="text-[#17355c]">That Deliver Results</span>
              </h2>
              <p className="text-sm sm:text-base text-[#52637a] mt-3 leading-relaxed">
                Every service is customized for your target industry, career level, and whether you are targeting Sri Lanka or foreign markets.
              </p>
            </div>
            <Link
              href="/services"
              className="px-6 py-2.5 rounded-full border border-[#17355c] text-[#17355c] hover:bg-[#17355c] hover:text-white text-xs font-bold transition-all whitespace-nowrap self-start md:self-end shadow-xs"
            >
              View Full Services Catalogue →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group flex flex-col justify-between rounded-3xl bg-[#f8fafd] border border-[#e2e8f0] hover:border-[#17355c]/40 p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_-15px_rgba(23,53,92,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(23,53,92,0.12)]"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#e8eff9] flex items-center justify-center text-xl mb-4 group-hover:bg-[#17355c] group-hover:text-white transition-colors">
                    {srv.id === "ats-cv" && "📄"}
                    {srv.id === "linkedin" && "💼"}
                    {srv.id === "cover-letter" && "✉️"}
                    {srv.id === "international" && "🌍"}
                  </div>

                  <span className="text-[11px] uppercase font-bold tracking-wider text-[#b9862f] block mb-1">
                    From {formatLKR(srv.startingPriceLKR)}
                  </span>

                  <h3 className="font-heading text-base font-bold text-[#0e1a2b] group-hover:text-[#17355c] transition-colors mb-2 leading-snug">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-[#52637a] leading-relaxed line-clamp-3 mb-4">
                    {srv.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e2e8f0] mt-auto">
                  <a
                    href={whatsappUrl(`Hi Chanuka, I would like to inquire about your ${srv.title} service.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#17355c] group-hover:text-[#b9862f] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inquire via WhatsApp</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Interactive Before & After CV Difference Slider */}
      <CvComparisonSlider />

      {/* 5. Interactive Package Matcher Quiz Embedded on Home */}
      <section className="py-20 bg-[#f1f5fa] relative border-t border-[#e2e8f0]" id="catalogue-quiz">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
              Interactive Diagnostic Tool
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1a2b] mt-3">
              Find the Right Package in <span className="text-[#17355c]">60 Seconds</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#52637a] mt-2 leading-relaxed">
              Answer 5 quick questions about your career goals and timeline to receive an instant tailored recommendation with discounted bundle pricing.
            </p>
          </div>

          <PackageMatcherQuiz />
        </div>
      </section>

      {/* 6. Pricing Calculator & Comparison */}
      <PricingCalculator />

      {/* 7. ATS Health Checker Simulator */}
      <AtsHealthChecker />

      {/* 8. Authority Bio & Story of Chanuka */}
      <section className="py-20 bg-[#f8fafd] relative overflow-hidden border-t border-[#e2e8f0]" id="about">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Authentic Photo */}
            <div className="lg:col-span-5 relative">
              <div className="w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-[#e2e8f0] shadow-[0_20px_50px_-20px_rgba(23,53,92,0.18)] relative mx-auto bg-white p-2">
                <div className="w-full h-full rounded-[20px] overflow-hidden relative">
                  <img
                    src="/images/about-chanuka.jpg"
                    alt="Chanuka Jeewantha Career Specialist"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a2b]/70 via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 border border-[#e2e8f0] shadow-sm backdrop-blur-md">
                    <p className="font-heading text-xs font-bold text-[#0e1a2b]">Chanuka Jeewantha</p>
                    <p className="text-[11px] text-[#b9862f] font-semibold">CPRW & CPCC Dual Certified</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative & Authority Story */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-widest text-[#b9862f] mb-2">
                MY STORY & PHILOSOPHY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0e1a2b] mb-5 leading-tight">
                Career growth is not guesswork, it is <span className="text-[#17355c]">strategy and proof</span>.
              </h2>

              <p className="text-sm text-[#52637a] leading-relaxed mb-4">
                I am Chanuka Jeewantha, a Certified Professional Resume Writer (CPRW) and Career Development Specialist. Over the last 8+ years, I have seen brilliant, highly capable Sri Lankan professionals miss out on life-changing opportunities simply because their CVs did not reflect their actual commercial value.
              </p>

              <p className="text-sm text-[#52637a] leading-relaxed mb-6">
                Most resumes in Sri Lanka read like passive job descriptions filled with generic adjectives and unparseable Canva graphics. When you partner with me, we don't just polish words; we reconstruct your entire career narrative around measurable metrics, industry-specific keywords, and the psychological cues that make hiring directors say <em>"We need to interview this person."</em>
              </p>

              {/* 4 Credentials Grid */}
              <div className="grid grid-cols-2 gap-3.5 w-full mb-7 pt-4 border-t border-[#e2e8f0]">
                <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs">
                  <span className="font-heading text-xl font-bold text-[#17355c] block">8+ Years</span>
                  <span className="text-xs text-[#52637a]">Specialized Resume Engineering</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs">
                  <span className="font-heading text-xl font-bold text-[#17355c] block">450+ 5-Star</span>
                  <span className="text-xs text-[#52637a]">Verified Google Reviews</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs">
                  <span className="font-heading text-xl font-bold text-[#17355c] block">10,000+</span>
                  <span className="text-xs text-[#52637a]">Candidates Positioned</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#e2e8f0] shadow-2xs">
                  <span className="font-heading text-xl font-bold text-[#17355c] block">CPRW & CPCC</span>
                  <span className="text-xs text-[#52637a]">Dual Global Certifications</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-full border border-[#17355c] text-[#17355c] hover:bg-[#17355c] hover:text-white text-xs font-bold transition-all shadow-xs"
                >
                  Read Full Background & Credentials →
                </Link>
                <a
                  href={whatsappUrl("Hi Chanuka, I would like to schedule a 1-on-1 career consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full btn-whatsapp text-white text-xs font-bold flex items-center gap-1.5 shadow-md"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Ebooks & Published Books Showcase */}
      <EbookShowcase />

      {/* 10. Verified Reviews & Client Outcomes */}
      <ReviewsSection />

      {/* 11. Frequently Asked Questions */}
      <FaqAccordion />

      {/* 12. Final High-Impact Booking CTA Band */}
      <section className="py-20 bg-gradient-to-br from-[#17355c] to-[#0f2440] text-white text-center relative overflow-hidden">
        <div className="container-custom max-w-3xl mx-auto relative z-10">
          <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#fbf3e3] text-xs font-bold border border-white/20">
            ⚡ START TODAY • 24H TO 48H DELIVERY
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-4">
            Your Next Career Leap Starts With A Single Winning CV.
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
            Stop losing job opportunities to automated screening filters. Send your current CV today, get matched with the right package, and start securing the interviews you deserve.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={whatsappUrl("Hi Chanuka, I am ready to order a professional ATS CV package.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full btn-whatsapp font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-105"
            >
              <span>Order via WhatsApp (+94 77 390 2230)</span>
            </a>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              Compare All Pricing Tiers
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="text-[#25d366]">✓</span> 100% ATS Compliant Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#25d366]">✓</span> Free 14 - 30 Day Revisions
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#25d366]">✓</span> Commercial Bank / FriMi / Koko Pay Accepted
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
