"use client";

import { useState } from "react";
import { EBOOKS, EbookItem } from "@/lib/ebooks";
import { formatLKR } from "@/lib/pricing";
import { whatsappUrl } from "@/lib/site";

export function EbookShowcase() {
  const [selectedBook, setSelectedBook] = useState<EbookItem | null>(null);

  return (
    <section className="py-20 bg-[#f8fafd] relative overflow-hidden border-t border-[#e2e8f0]" id="ebooks">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Published Literature & Guides
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1a2b] mt-3">
            Books & Career Guides by <span className="text-[#17355c]">Chanuka Jeewantha</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52637a] mt-3 leading-relaxed">
            Empowering thousands of Sri Lankan professionals and young leaders with world-class mindset, productivity, and financial literacy literature in Sinhala.
          </p>
        </div>

        {/* 5-Book Grid Showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {EBOOKS.map((book) => (
            <div
              key={book.id}
              className="group flex flex-col rounded-3xl bg-white border border-[#e2e8f0] hover:border-[#17355c]/30 p-4 transition-all duration-300 hover:-translate-y-2 shadow-[0_10px_30px_-15px_rgba(23,53,92,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(23,53,92,0.14)]"
            >
              {/* Book Cover Image */}
              <div className="relative aspect-[3/4.5] w-full rounded-2xl overflow-hidden mb-4 bg-[#edf2f8] shadow-md group-hover:scale-[1.03] transition-transform duration-500">
                <img
                  src={book.coverImage}
                  alt={book.titleEnglish}
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#8f6419] text-[10px] font-bold border border-[#b9862f]/30 shadow-xs">
                  {book.tag}
                </span>
              </div>

              {/* Title & Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#0e1a2b] leading-snug line-clamp-2">
                    {book.titleSinhala}
                  </h3>
                  <p className="text-[11px] text-[#b9862f] font-semibold mt-0.5 line-clamp-1">
                    {book.titleEnglish}
                  </p>
                  <p className="text-[11.5px] text-[#52637a] mt-2 line-clamp-3 leading-relaxed">
                    {book.summarySinhala}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e2e8f0] mt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11.5px] text-[#52637a]">{book.pages}</span>
                    <span className="font-heading text-xs font-bold text-[#17355c]">
                      {formatLKR(book.priceLKR)}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="py-2 text-[11px] font-semibold rounded-full bg-[#f1f5fa] hover:bg-[#e2e8f0] text-[#0e1a2b] border border-[#e2e8f0] text-center transition-colors"
                    >
                      Synopsis
                    </button>
                    <a
                      href={whatsappUrl(`Hi Chanuka, I would like to order the book '${book.titleSinhala}' (${book.titleEnglish}). Please send bank details for islandwide courier delivery.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 text-[11px] font-bold rounded-full btn-whatsapp text-center shadow-xs"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Details Modal */}
        {selectedBook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl rounded-3xl bg-white border border-[#cbd5e1] p-6 sm:p-8 shadow-2xl">
              <button
                onClick={() => setSelectedBook(null)}
                className="absolute top-4 right-4 text-[#52637a] hover:text-[#0e1a2b] text-base p-1.5 rounded-full hover:bg-slate-100"
                aria-label="Close synopsis"
              >
                ✕
              </button>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-32 aspect-[3/4.5] rounded-xl overflow-hidden shadow-lg shrink-0 mx-auto sm:mx-0 bg-slate-100">
                  <img
                    src={selectedBook.coverImage}
                    alt={selectedBook.titleEnglish}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#fbf3e3] text-[#8f6419] text-[10px] font-bold border border-[#b9862f]/30">
                    {selectedBook.tag} • {selectedBook.language}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0e1a2b] mt-2">
                    {selectedBook.titleSinhala}
                  </h3>
                  <p className="text-xs text-[#b9862f] font-semibold">{selectedBook.titleEnglish}</p>

                  <p className="text-xs text-[#52637a] mt-3 leading-relaxed">
                    {selectedBook.summarySinhala}
                  </p>

                  <div className="my-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#17355c] mb-1.5">
                      ප්‍රධාන කරුණු (Key Highlights):
                    </p>
                    <ul className="space-y-1 text-xs text-[#52637a]">
                      {selectedBook.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#b9862f] font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#e2e8f0]">
                    <span className="font-heading text-sm font-bold text-[#17355c]">
                      {formatLKR(selectedBook.priceLKR)} (Free Delivery)
                    </span>
                    <a
                      href={whatsappUrl(`Hi Chanuka, I want to order '${selectedBook.titleSinhala}'. Please send me details for islandwide delivery.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full btn-whatsapp text-xs font-bold shadow-md"
                    >
                      Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
