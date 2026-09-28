"use client";

import { useState } from "react";
import { FAQS, FaqItem } from "@/lib/faqs";
import { whatsappUrl } from "@/lib/site";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("what-is-ats");
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = searchQuery.trim()
    ? FAQS.filter(
        (f) =>
          f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          f.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : FAQS;

  return (
    <section className="py-20 bg-[#f8fafd] relative border-t border-[#e2e8f0]" id="faq">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Got Questions? We Have Answers
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1a2b] mt-3">
            Frequently Asked <span className="text-[#17355c]">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52637a] mt-3 leading-relaxed">
            Everything you need to know about ATS systems, process, delivery, payment options, and revisions in Sri Lanka.
          </p>

          {/* Quick Search Input */}
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. ATS, payment, delivery)..."
              className="w-full px-4 py-2.5 rounded-full bg-white border border-[#cbd5e1] text-[#0e1a2b] text-xs sm:text-sm focus:outline-none focus:border-[#17355c] shadow-xs"
            />
          </div>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-3 mb-10">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-[#e2e8f0] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-heading text-xs sm:text-sm font-bold text-[#0e1a2b]">
                    {faq.question}
                  </span>
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 transition-transform ${
                      isOpen
                        ? "bg-[#17355c] text-white rotate-180"
                        : "bg-[#edf2f8] text-[#52637a]"
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#52637a] leading-relaxed border-t border-[#f1f5fa] animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Inquiry Fallback */}
        <div className="text-center p-6 rounded-2xl bg-white border border-[#e2e8f0] max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm text-[#0e1a2b] font-bold mb-2.5">
            Have a specific career situation or need an emergency turnaround?
          </p>
          <a
            href={whatsappUrl("Hi Chanuka, I have a specific question about your career packages.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full btn-whatsapp text-xs font-bold shadow-md"
          >
            <span>Ask Chanuka on WhatsApp (+94 77 390 2230)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
