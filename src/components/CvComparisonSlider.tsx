"use client";

import { useState, useRef, useCallback, MouseEvent, TouchEvent } from "react";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export function CvComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-[#e2e8f0]" id="cv-difference">
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419] mb-3">
            Interactive Visual Proof
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#0e1a2b] tracking-tight mb-3">
            See the <span className="text-[#17355c]">CV Difference</span>
          </h2>
          <p className="text-sm sm:text-base text-[#52637a] leading-relaxed">
            Drag the interactive slider to compare a typical rejected graphic CV against the ATS-optimized, high-impact version created through Chanuka's CPRW methodology.
          </p>

          {/* Preset Buttons */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <button
              onClick={() => setSliderPosition(15)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                sliderPosition <= 25
                  ? "bg-red-100 text-red-700 border border-red-300 font-bold"
                  : "bg-[#f1f5fa] text-[#52637a] hover:text-[#0e1a2b] border border-[#e2e8f0]"
              }`}
            >
              Inspect Rejected Format
            </button>
            <button
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                sliderPosition > 35 && sliderPosition < 65
                  ? "bg-[#e8eff9] text-[#17355c] border border-[#17355c]/30 font-bold"
                  : "bg-[#f1f5fa] text-[#52637a] hover:text-[#0e1a2b] border border-[#e2e8f0]"
              }`}
            >
              50 / 50 Comparison
            </button>
            <button
              onClick={() => setSliderPosition(85)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                sliderPosition >= 75
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold"
                  : "bg-[#f1f5fa] text-[#52637a] hover:text-[#0e1a2b] border border-[#e2e8f0]"
              }`}
            >
              Inspect Winning ATS CV
            </button>
          </div>
        </div>

        {/* Comparison Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Feature Bullet Cards: Red Flags */}
          <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
            <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200 shadow-xs">
              <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider mb-2">
                <span>✕ Typical Rejected CV</span>
              </div>
              <ul className="text-xs text-[#334155] space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span><strong>Graphic skill bars</strong> that algorithms can't parse or rank.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span><strong>Multi-column tables</strong> that scramble your reading order.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-0.5">•</span>
                  <span><strong>Passive duties</strong> like "responsible for filing documents" instead of revenue impact.</span>
                </li>
              </ul>
            </div>
            <p className="text-[11px] text-[#52637a] text-center">
              Failed by 75%+ of screening tools like Workday & Taleo
            </p>
          </div>

          {/* Center: Draggable Interactive Comparison Window */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center">
            
            <div
              ref={containerRef}
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
              onMouseMove={onMouseMove}
              onTouchMove={onTouchMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              className="relative w-full max-w-[480px] aspect-[3/4.2] rounded-2xl overflow-hidden shadow-[0_20px_45px_-15px_rgba(23,53,92,0.18)] border-2 border-[#17355c]/30 bg-white select-none cursor-ew-resize touch-none"
            >
              {/* Layer 1 (Full): Winning ATS CV */}
              <div className="absolute inset-0 w-full h-full bg-white p-3">
                <div className="w-full h-full relative overflow-hidden rounded-lg border border-slate-200">
                  <img
                    src="/images/cv-after-ats-template.svg"
                    alt="Winning ATS Optimized CV"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Winning Badge */}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold shadow-md">
                    ✓ ATS Winner (98% Callback)
                  </span>
                </div>
              </div>

              {/* Layer 2 (Clipped): Rejected Old CV */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-slate-100 border-r-2 border-[#17355c] p-3"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="w-[480px] max-w-none h-full relative overflow-hidden rounded-lg border border-red-300">
                  <img
                    src="/images/cv-before-graphic.svg"
                    alt="Typical Rejected Graphic CV"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Rejected Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold shadow-md">
                    ✕ 75% ATS Rejection
                  </span>
                </div>
              </div>

              {/* Slider Handle Divider */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-[#17355c] shadow-[0_0_12px_rgba(23,53,92,0.5)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[#17355c] text-[#17355c] flex items-center justify-center text-xs font-bold shadow-md">
                  ↔
                </div>
              </div>

            </div>

            {/* Instruction caption */}
            <p className="text-xs text-[#52637a] mt-3 flex items-center gap-1.5 font-medium">
              <span>👆</span>
              <span>Drag the slider left or right to inspect layout and structure differences</span>
            </p>
          </div>

          {/* Right Feature Bullet Cards: Advantages of Chanuka's CV */}
          <div className="lg:col-span-3 space-y-4 order-3">
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 shadow-xs">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                <span>✓ Chanuka's ATS Masterpiece</span>
              </div>
              <ul className="text-xs text-[#334155] space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span><strong>Clean Single-Column Hierarchy</strong> indexed 100% error-free by software.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span><strong>Metric-Driven Results</strong> (e.g. "Reduced overhead by 22%").</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">•</span>
                  <span><strong>Editable Word & Recruiter PDF</strong> for hassle-free customization.</span>
                </li>
              </ul>
            </div>
            
            <a
              href={whatsappUrl("Hi Chanuka, I saw the before/after CV comparison on your site and want to upgrade my CV.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 text-center text-xs font-bold rounded-full btn-whatsapp shadow-md"
            >
              Get Your CV Transformed →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
