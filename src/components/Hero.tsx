"use client";

import Image from "next/image";
import Link from "next/link";
import { ReviewsPill } from "./ReviewsPill";
import { GoogleBadge } from "./GoogleBadge";
import { TrustRibbon, ProofTiles } from "./TrustRibbon";

export function Hero() {
  return (
    <>
      {/* ========================================================================= */}
      {/* MOBILE HERO (Marcus Lorenzet High-End Editorial Dark Layout)               */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-black text-[#f0ece1] -mt-16 pt-16 lg:hidden border-b border-white/10">
        {/* Maximized background portrait spanning full top to eliminate any header seams */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px] sm:h-[680px] overflow-hidden -z-10 bg-black">
          <Image
            src="/images/chanuka-portrait.jpg"
            alt="Chanuka Jeewantha"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_32px] sm:object-[center_40px] scale-[1.26] sm:scale-120"
            quality={95}
          />
          {/* Subtle top vignette for header legibility */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/40 via-black/10 to-transparent"
          />
          {/* Soft chest contrast so white shirt doesn't wash out text while portrait remains vibrant */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-[260px] bottom-0 bg-gradient-to-b from-transparent via-black/35 to-black/80"
          />
          {/* Gentle bottom transition into the action buttons */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"
          />
        </div>

        <div className="container-page relative pt-[245px] pb-12 sm:pt-[285px]">
          <div className="max-w-[540px]">
            {/* Intro text (matches "Hey, I'm Marcus...") */}
            <p className="max-w-[340px] text-[15px] sm:text-[16px] leading-[1.65] text-[#b8b2a5] font-normal tracking-normal [text-shadow:_0_1px_8px_rgba(0,0,0,0.95)]">
              Hey, I&apos;m Chanuka. I write ATS-optimised CVs and career branding to land interviews in the markets you are applying to.
            </p>

            {/* Stylized Signature Headline (matches "WEBSITES & DIGITAL PRODUCTS ↓") */}
            <div className="mt-2.5 sm:mt-3">
              <h1 className="font-extrabold uppercase tracking-[-0.035em] text-[#e8dfd1] [text-shadow:_0_2px_14px_rgba(0,0,0,0.95)]">
                {/* Top line: LAND INTERVIEWS & (same size as Global Markets) */}
                <span className="block text-[clamp(2.1rem,9.2vw,3.5rem)] font-black tracking-[-0.035em] leading-[0.92]">
                  Land Interviews &amp;
                </span>

                {/* Lower asymmetric section: Stats on left, GLOBAL MARKETS on right */}
                <div className="mt-2.5 grid grid-cols-[auto_1fr] items-start gap-3 sm:gap-4">
                  {/* Left Column: Proof stats */}
                  <div className="pt-1 sm:pt-1.5 text-left space-y-1 self-start">
                    <p className="text-[10.5px] sm:text-[11.5px] font-bold tracking-wider text-[#9f988a] uppercase leading-tight whitespace-nowrap">
                      450+ 5-Star Reviews
                    </p>
                    <p className="text-[10.5px] sm:text-[11.5px] font-bold tracking-wider text-[#9f988a] uppercase leading-tight whitespace-nowrap">
                      10+ Years Experience
                    </p>
                  </div>

                  {/* Right Column: GLOBAL MARKETS ↓ */}
                  <div className="text-right leading-[0.88]">
                    <span className="block -translate-x-5 sm:-translate-x-6 whitespace-nowrap text-[clamp(2.1rem,9.2vw,3.5rem)] font-black">
                      Global
                    </span>
                    <span className="flex items-center justify-end gap-2 mt-2 sm:mt-2.5 text-[clamp(2.1rem,9.2vw,3.5rem)] font-black">
                      <span>Markets</span>
                      <span className="inline-flex items-center justify-center text-[#c5b59a]">
                        <svg
                          className="w-[0.76em] h-[0.76em] translate-y-[-0.02em]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="12" y1="2.5" x2="12" y2="21.5" />
                          <polyline points="19.5 14 12 21.5 4.5 14" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
              </h1>
            </div>

            {/* Two Action Buttons (placed right after the text) */}
            <div className="mt-7 flex flex-col gap-3">
              <a
                href="#build"
                className="group flex min-h-12 w-full items-center justify-center rounded-full bg-[#c5b59a] px-6 py-3.5 text-center text-[15px] font-bold text-[#090a0d] shadow-[0_12px_28px_-10px_rgba(197,181,154,0.45)] transition-all hover:bg-[#d8cbbb] active:scale-[0.99]"
              >
                <span>Build your package</span>
              </a>
              <Link
                href="/packages"
                className="flex min-h-12 w-full items-center justify-center rounded-full border border-[#c5b59a]/35 bg-white/[0.04] px-6 py-3.5 text-center text-[15px] font-semibold text-[#e8dfd1] backdrop-blur-md transition-all hover:border-[#c5b59a] hover:bg-white/[0.08]"
              >
                See packages &amp; prices →
              </Link>
            </div>
          </div>

          {/* Section 1: Google Reviews Section (Borderless & Transparent) */}
          <div className="mt-4 sm:mt-5 flex flex-col items-center justify-center">
            <GoogleBadge dark />
          </div>

          {/* Section 2: ATS-Tested Formatting & Guarantees Card */}
          <div className="mt-4 rounded-[24px] border border-white/12 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-md shadow-2xl">
            <ProofTiles dark />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DESKTOP HERO (Original warm editorial layout preserved)                  */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden border-b border-line bg-[#efe4d9] hidden lg:block">
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#d7bfa9]">
          <Image
            src="/images/chanuka-hero-hq.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-contain object-right"
            quality={95}
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(249,250,252,0.99)_0%,rgba(249,250,252,0.97)_34%,rgba(249,250,252,0.58)_48%,rgba(249,250,252,0.05)_62%,transparent_72%)]"
        />

        <div className="container-page relative pb-10 pt-16 xl:pt-20">
          <div className="max-w-[720px]">
            <ReviewsPill className="rise mb-5" />
            <div className="mb-5 h-1 w-14 rounded-full bg-accent sm:mb-6" aria-hidden />

            <h1 className="display rise max-w-[16ch] text-[clamp(2.15rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-ink">
              Land interviews in the markets you are applying to.
            </h1>

            <p className="rise d1 mt-5 max-w-[640px] text-[16px] leading-[1.75] text-muted sm:mt-6 sm:text-[17px]">
              ATS-optimised CVs, cover letters and LinkedIn profiles for professionals
              competing internationally, written for the market you are applying into.
              Choose your package, your experience level and how fast you need it.
            </p>

            <div className="rise d2 mt-7 flex flex-row flex-wrap items-center gap-3 sm:mt-8">
              <a
                href="#build"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-8 py-3.5 text-center text-[15px] font-semibold text-paper shadow-[0_16px_34px_-16px_rgb(23_53_92/0.95)] transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-[0_20px_38px_-15px_rgb(23_53_92/0.9)]"
              >
                Build your package
              </a>
              <Link
                href="/packages"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-line-strong bg-white/90 px-6 py-3.5 text-[15px] font-semibold text-ink shadow-2xs backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand"
              >
                See packages &amp; prices →
              </Link>
            </div>
          </div>

          <TrustRibbon className="rise d3 mt-14" />
        </div>
      </section>
    </>
  );
}
