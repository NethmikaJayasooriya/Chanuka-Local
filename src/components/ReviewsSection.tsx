"use client";

import { useState, useMemo } from "react";
import { GOOGLE_REVIEWS, GoogleReview } from "@/lib/testimonials";
import { site, whatsappUrl } from "@/lib/site";

export function ReviewsSection() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});
  const [votedIds, setVotedIds] = useState<string[]>([]);

  const handleVote = (id: string, initialCount: number) => {
    if (votedIds.includes(id)) return;
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: (prev[id] ?? initialCount) + 1,
    }));
    setVotedIds((prev) => [...prev, id]);
  };

  const filtered = useMemo(() => {
    return GOOGLE_REVIEWS.filter((item) => {
      const matchesCategory =
        filter === "all" || item.category === filter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.role.toLowerCase().includes(q) ||
        item.companyOrLocation.toLowerCase().includes(q) ||
        item.reviewText.toLowerCase().includes(q) ||
        item.highlight.toLowerCase().includes(q) ||
        item.outcome.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden border-t border-slate-200" id="reviews">
      <div className="container-custom relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419] mb-3">
            <span>⭐</span>
            <span>450+ Verified Google Business Endorsements</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1a2b] tracking-tight">
            Client Outcomes &amp; <span className="text-[#17355c]">Google Reviews</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52637a] mt-2.5 leading-relaxed">
            Authentic, verified reviews from corporate managers, software engineers, and overseas applicants who transformed their careers with Chanuka Jeewantha.
          </p>
        </div>

        {/* Google Business Profile Header Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#f8fafd] border border-slate-200/90 p-5 sm:p-8 shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left: Overall Google Rating Score */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-6">
              
              {/* Google Brand Mark */}
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-heading font-bold text-sm tracking-tight text-[#202124]">
                  Google Reviews
                </span>
                <span className="px-1.5 py-0.2 rounded bg-blue-50 text-[#1a73e8] text-[10px] font-bold border border-blue-200">
                  Verified
                </span>
              </div>

              <div className="flex items-baseline gap-3 my-1">
                <span className="font-heading text-5xl font-black text-[#202124]">4.9</span>
                <div className="flex flex-col">
                  <div className="flex text-[#fbbc04] text-lg leading-none">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <span className="text-[11px] text-[#5f6368] mt-1 font-medium">
                    Based on 458 reviews
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#5f6368] mt-1">
                Top rated CV writer &amp; career strategist in Colombo &amp; Western Province.
              </p>

              <a
                href={whatsappUrl("Hi Chanuka, I would like to consult with you based on your 5-star Google reviews.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
              >
                <span>Write a Review / Verify</span>
                <span>↗</span>
              </a>
            </div>

            {/* Center: Rating Distribution Progress Bars */}
            <div className="lg:col-span-5 space-y-1.5 text-xs text-[#5f6368]">
              {[
                { stars: "5 stars", pct: 97, width: "97%" },
                { stars: "4 stars", pct: 3, width: "3%" },
                { stars: "3 stars", pct: 0, width: "0%" },
                { stars: "2 stars", pct: 0, width: "0%" },
                { stars: "1 star", pct: 0, width: "0%" },
              ].map((row, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-14 text-right shrink-0 text-[11px] font-medium">{row.stars}</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div
                      className="h-full bg-[#fbbc04] rounded-full transition-all duration-700"
                      style={{ width: row.width }}
                    />
                  </div>
                  <span className="w-8 text-[11px] text-right font-mono font-medium">{row.pct}%</span>
                </div>
              ))}
            </div>

            {/* Right: Fast Search in Reviews */}
            <div className="lg:col-span-3 flex flex-col gap-2.5">
              <label htmlFor="review-search" className="text-xs font-bold text-[#202124]">
                Search inside 450+ reviews:
              </label>
              <div className="relative">
                <input
                  id="review-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Dubai, ATS, Bank, Tech..."
                  className="w-full px-3.5 py-2 pl-8 rounded-xl bg-white border border-slate-300 text-xs text-[#202124] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a73e8]"
                />
                <span className="absolute left-2.5 top-2.5 text-xs text-slate-400">🔍</span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-2 text-xs text-slate-400 hover:text-slate-700 p-0.5"
                  >
                    ✕
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-1 text-[10.5px] text-[#5f6368]">
                <span>Popular:</span>
                {["Dubai", "ATS", "Melbourne", "Banking", "Greenhouse"].map((word) => (
                  <button
                    key={word}
                    onClick={() => setSearchQuery(word)}
                    className="px-1.5 py-0.5 rounded bg-white hover:bg-slate-200 border border-slate-200 text-[#17355c] font-medium transition-colors"
                  >
                    #{word}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Category Filter Pills (Google style) */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-6 mt-6 border-t border-slate-200">
            {[
              { id: "all", label: "All Reviews (458)" },
              { id: "overseas", label: "Overseas Relocation (Aus, UAE, UK)" },
              { id: "banking", label: "Banking & Finance" },
              { id: "tech", label: "Tech, DevOps & Software" },
              { id: "executive", label: "Executive Leadership" },
              { id: "grad", label: "Fresh Graduates" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 sm:px-4 py-1.5 text-xs rounded-full transition-all duration-150 ${
                  filter === tab.id
                    ? "bg-[#1a73e8] text-white font-bold shadow-xs"
                    : "bg-white text-[#3c4043] hover:bg-slate-100 border border-slate-300 font-medium"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter if search is active */}
        {searchQuery && (
          <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between text-xs text-[#5f6368]">
            <span>Showing results for &ldquo;<strong>{searchQuery}</strong>&rdquo; ({filtered.length} found)</span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#1a73e8] font-bold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Google Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {filtered.map((item) => {
            const count = helpfulVotes[item.id] ?? item.helpfulCount;
            const hasVoted = votedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div>
                  
                  {/* Top Row: User Avatar, Name, Relative Date & Google G */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      
                      {/* Google Style Circular Initial Avatar */}
                      <div
                        className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-heading font-extrabold flex items-center justify-center text-sm shadow-xs shrink-0`}
                      >
                        {item.avatarLetter}
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-heading font-bold text-sm text-[#202124] leading-tight">
                            {item.name}
                          </h4>
                        </div>
                        {item.localGuide && (
                          <div className="flex items-center gap-1 text-[11px] text-[#e37400] font-semibold mt-0.5">
                            <span>★</span>
                            <span>{item.localGuide}</span>
                          </div>
                        )}
                        <p className="text-[11px] text-[#5f6368]">
                          {item.role} • {item.companyOrLocation}
                        </p>
                      </div>

                    </div>

                    {/* Google G watermark */}
                    <div className="flex items-center gap-1 text-slate-300">
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                    </div>
                  </div>

                  {/* Stars & Relative Timestamp Row */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="flex text-[#fbbc04] text-xs">
                      {"★★★★★".split("").map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <span className="text-[11px] text-[#5f6368] font-medium">{item.relativeTime}</span>
                    <span className="text-slate-300 text-xs">•</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200">
                      ✓ {item.outcome}
                    </span>
                  </div>

                  {/* Highlight sentence */}
                  <p className="text-xs font-bold text-[#202124] mb-1.5">
                    &ldquo;{item.highlight}&rdquo;
                  </p>

                  {/* Full review body */}
                  <p className="text-xs text-[#3c4043] leading-relaxed">
                    {item.reviewText}
                  </p>

                  {/* Owner Response Box (Iconic Google Business feature) */}
                  {item.ownerResponse && (
                    <div className="mt-3.5 p-3 rounded-xl bg-slate-50 border-l-3 border-[#1a73e8] text-xs space-y-1">
                      <div className="flex items-center justify-between text-[11px] text-[#5f6368] font-semibold">
                        <span className="text-[#1a73e8] font-bold">
                          Response from the owner • Chanuka Jeewantha (CPRW)
                        </span>
                        <span>{item.ownerResponse.date}</span>
                      </div>
                      <p className="text-[#3c4043] text-[11.5px] leading-relaxed italic">
                        &ldquo;{item.ownerResponse.text}&rdquo;
                      </p>
                    </div>
                  )}

                </div>

                {/* Bottom Row: Helpful Count & WhatsApp Verification */}
                <div className="flex items-center justify-between pt-3.5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleVote(item.id, item.helpfulCount)}
                    disabled={hasVoted}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      hasVoted
                        ? "bg-blue-50 text-[#1a73e8] font-bold border border-blue-200"
                        : "bg-slate-50 hover:bg-slate-100 text-[#5f6368] border border-slate-200"
                    }`}
                  >
                    <span>👍</span>
                    <span>Helpful ({count})</span>
                  </button>

                  <a
                    href={whatsappUrl(`Hi Chanuka, I read ${item.name}'s review on your site regarding ${item.outcome} and want to get started.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#17355c] hover:text-[#b9862f] flex items-center gap-1 transition-colors"
                  >
                    <span>Book Similar Package</span>
                    <span>→</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#17355c] to-[#0f2440] text-white p-6 sm:p-8 text-center shadow-lg">
          <div className="flex items-center justify-center gap-1 text-[#fbbc04] text-sm mb-2">
            ★★★★★
          </div>
          <h3 className="font-heading text-lg sm:text-2xl font-bold mb-2">
            Ready to Be Our Next 5-Star Success Story?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Every CV is personally crafted by dual-certified specialist Chanuka Jeewantha. Zero templates, zero automated outsourcing, 100% satisfaction guarantee.
          </p>
          <a
            href={whatsappUrl("Hi Chanuka, I would like to order my CV package and get started.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-whatsapp font-bold text-xs sm:text-sm shadow-xl hover:scale-105 transition-all"
          >
            <span>Start Consultation on WhatsApp (+94 77 390 2230)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
