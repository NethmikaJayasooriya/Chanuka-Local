"use client";

import Image from "next/image";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[max(620px,calc(100svh-90px))] flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
      {/* Background Image: Chanuka hero portrait seamlessly blended */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/chanuka new hero.jpeg"
          alt="Chanuka Jeewantha, professional CV writer and career coach"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[76%_14%] sm:object-[80%_12%] lg:object-[86%_8%]"
          quality={95}
        />

        {/* High-legibility ambient gradient overlay: Ensures text is crystal clear while Chanuka's portrait shines on the right */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#f8fafd]/98 via-[#f8fafd]/92 to-[#f8fafd]/98 md:bg-gradient-to-r md:from-[#f8fafd] md:via-[#f8fafd]/95 md:via-[55%] md:to-transparent md:to-[84%] lg:via-[48%] lg:to-[68%]"
        />
      </div>

      <div className="container-custom relative w-full">
        <div className="max-w-xl lg:max-w-[720px]">
          
          {/* Executive Trust Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs mb-5">
            <span className="flex h-2 w-2 rounded-full bg-[#b9862f] animate-pulse" />
            <span className="text-xs font-bold tracking-wide text-[#17355c]">
              CPRW & CPCC Dual Certified
            </span>
            <span className="text-slate-300 text-xs">•</span>
            <span className="text-xs text-[#52637a] font-medium">
              Sri Lanka's No. 1 Career Strategist
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0e1a2b] leading-[1.12] mb-5">
            Land 3x More Interviews With <span className="text-[#17355c] underline decoration-[#b9862f]/40 decoration-wavy decoration-2">Sri Lanka's No.1</span> Professional CV Writer.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#52637a] max-w-xl leading-relaxed mb-7">
            Over 75% of CVs are rejected by automated recruitment algorithms (ATS) before a human reads a single word. We engineer certified ATS-compliant CVs, recruiter-magnet LinkedIn profiles, and international job packages that put your career at the top of the stack.
          </p>

          {/* High-Converting Action Triggers */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
            <Link
              href="/services"
              className="px-7 py-3.5 rounded-full btn-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all"
            >
              <span>View Packages & Rates</span>
              <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 font-mono">From LKR 8,950</span>
            </Link>

            <a
              href={whatsappUrl("Hi Chanuka, I would like to get my CV reviewed and order a professional package.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full btn-whatsapp font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-all"
            >
              <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.203c.043.071.043.418-.101.823z" />
              </svg>
              <span>WhatsApp Fast Intake</span>
            </a>
          </div>

          {/* Diagnostic Quiz Hint */}
          <div className="flex items-center gap-2.5 text-xs text-[#52637a] mb-7">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#fbf3e3] text-[#8f6419] font-bold text-xs shrink-0">
              ⚡
            </span>
            <span>Not sure which package fits your career stage?</span>
            <Link
              href="/catalogue"
              className="text-[#17355c] hover:text-[#b9862f] font-bold underline underline-offset-4 transition-colors"
            >
              Take the 60-Second Quiz →
            </Link>
          </div>

          {/* Verified Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80">
            {site.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#17355c] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-[#b9862f] mt-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#52637a] mt-0.5 line-clamp-1">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Key Proof Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5 pt-4 border-t border-slate-200/60">
            <div className="flex items-center gap-2 text-xs text-[#233348] font-medium bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-slate-200/60">
              <span className="w-5 h-5 rounded-full bg-[#e8eff9] text-[#17355c] flex items-center justify-center text-xs font-bold shrink-0">✓</span>
              <span><strong>ATS-tested formatting</strong> (Passes Workday & Taleo)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#233348] font-medium bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-slate-200/60">
              <span className="w-5 h-5 rounded-full bg-[#fbf3e3] text-[#8f6419] flex items-center justify-center text-xs font-bold shrink-0">★</span>
              <span><strong>Written personally by Chanuka</strong> (CPRW & CPCC)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#233348] font-medium bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-slate-200/60">
              <span className="w-5 h-5 rounded-full bg-[#e8f9ef] text-[#1ea952] flex items-center justify-center text-xs font-bold shrink-0">⚡</span>
              <span><strong>VIP Express turnaround</strong> (Delivery from 24h)</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#233348] font-medium bg-white/80 backdrop-blur-sm p-2 rounded-xl border border-slate-200/60">
              <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0">💬</span>
              <span><strong>450+ 5-Star Reviews</strong> on Google (4.9 / 5.0)</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
