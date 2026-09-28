"use client";

import { useState } from "react";
import { TESTIMONIALS, Testimonial } from "@/lib/testimonials";
import { site, whatsappUrl } from "@/lib/site";

export function ReviewsSection() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === filter);

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-[#e2e8f0]" id="reviews">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Verified Sri Lankan Client Feedback
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1a2b] mt-3">
            Real Outcomes. <span className="text-[#17355c]">Measurable Results.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52637a] mt-3 leading-relaxed">
            Read verified testimonials from software engineers, commercial bankers, executives, and fresh graduates across Sri Lanka and worldwide.
          </p>

          {/* Google Review Trust Badge */}
          <div className="inline-flex items-center gap-3.5 px-5 py-2.5 rounded-full bg-[#f8fafd] border border-[#e2e8f0] mt-6 shadow-xs">
            <div className="flex items-center gap-0.5 text-[#b9862f]">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-sm">★</span>
              ))}
            </div>
            <div className="text-left text-xs">
              <span className="font-bold text-[#0e1a2b] block">4.9 / 5.0 on Google Reviews</span>
              <span className="text-[#52637a]">450+ Verified Client Endorsements</span>
            </div>
            <a
              href={site.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-[#17355c] hover:underline ml-1"
            >
              Verify →
            </a>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {[
              { id: "all", label: "All Reviews" },
              { id: "overseas", label: "Overseas Relocation (UAE, Aus, UK)" },
              { id: "tech", label: "Tech & Software" },
              { id: "banking", label: "Banking & Corporate" },
              { id: "grad", label: "Fresh Graduates" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  filter === tab.id
                    ? "bg-[#17355c] text-white shadow-xs font-bold"
                    : "bg-[#f8fafd] text-[#52637a] hover:text-[#0e1a2b] border border-[#e2e8f0]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl bg-[#f8fafd] border border-[#e2e8f0] hover:border-[#17355c]/30 p-6 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_-15px_rgba(23,53,92,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex text-[#b9862f] text-xs">
                    {"★★★★★".split("").map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#e8f9ef] text-[#1ea952] text-[10px] font-bold border border-[#25d366]/30">
                    Verified
                  </span>
                </div>

                <h4 className="font-heading text-sm font-bold text-[#0e1a2b] mb-2 leading-snug">
                  "{item.highlight}"
                </h4>

                <p className="text-xs text-[#52637a] leading-relaxed line-clamp-5 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#e2e8f0] mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-xs font-bold text-[#0e1a2b]">{item.name}</p>
                    <p className="text-[11px] text-[#b9862f] font-semibold">{item.role}</p>
                    <p className="text-[10px] text-[#52637a]">{item.companyOrLocation}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#17355c] border border-[#e2e8f0]">
                      {item.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof WhatsApp CTA */}
        <div className="text-center">
          <a
            href={whatsappUrl("Hi Chanuka, I read your reviews and want to discuss updating my CV.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-whatsapp text-xs font-bold shadow-md hover:scale-105"
          >
            <span>Start Your Career Transformation on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
