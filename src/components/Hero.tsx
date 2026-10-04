"use client";

import Image from "next/image";
import Link from "next/link";
import { ReviewsPill } from "./ReviewsPill";
import { GoogleBadge } from "./GoogleBadge";
import { TrustRibbon, ProofTiles } from "./TrustRibbon";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <>
      {/* ========================================================================= */}
      {/* MOBILE HERO (Marcus Lorenzet High-End Editorial Dark Layout)               */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden bg-[#efe4d9] text-ink lg:hidden border-b border-line -mt-16 pt-16">
        {/* Maximized background portrait spanning top with smooth warm blend */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[540px] sm:h-[600px] overflow-hidden -z-10 bg-[#cab29d]">
          <Image
            src="/images/chanuka-hero-hq.png"
            alt="Chanuka Jeewantha"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75.3%_0%] scale-[1.15] origin-[75.3%_0%] sm:scale-[1.1] sm:object-[85%_0%] sm:origin-[85%_0%]"
            quality={95}
          />
          {/* Smooth warm transition from below the collar into the section background */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-[230px] sm:top-[280px] bottom-0 bg-gradient-to-b from-transparent via-[#efe4d9]/90 via-35% to-[#efe4d9]"
          />
        </div>

        <div className="container-page relative pt-[240px] sm:pt-[260px] pb-10 sm:pb-12">
          <div className="max-w-[540px]">
            {/* Intro text */}
            <p className="max-w-[340px] sm:max-w-[380px] text-[15px] sm:text-[16px] leading-[1.65] text-ink font-medium tracking-normal">
              Hey, I&apos;m Chanuka, a CPRW certified CV writer in Sri Lanka. I write ATS-optimised CVs that land interviews at home and abroad.
            </p>

            {/* Stylized Signature Headline */}
            <div className="mt-2.5 sm:mt-3">
              <h1 className="font-extrabold uppercase tracking-[-0.035em] text-ink">
                {/* Top line: LAND INTERVIEWS & */}
                <span className="block whitespace-nowrap text-[clamp(1.65rem,8.2vw,3.5rem)] font-black tracking-[-0.035em] leading-[0.92] text-ink">
                  Land Interviews &amp;
                </span>

                {/* Lower asymmetric section: Stats on left, GLOBAL MARKETS on right */}
                <div className="mt-2.5 grid grid-cols-[auto_1fr] items-start gap-3 sm:gap-4">
                  {/* Left Column: Proof stats */}
                  <div className="pt-1 sm:pt-1.5 text-left space-y-1 self-start">
                    <p className="text-[10.5px] sm:text-[11.5px] font-bold tracking-wider text-muted uppercase leading-tight whitespace-nowrap">
                      {site.rating.count} Google Reviews
                    </p>
                    <p className="text-[10.5px] sm:text-[11.5px] font-bold tracking-wider text-muted uppercase leading-tight whitespace-nowrap">
                      {site.yearsExperience} Years Experience
                    </p>
                  </div>

                  {/* Right Column: GLOBAL MARKETS ↓ */}
                  <div className="text-right leading-[0.88]">
                    <span className="block -translate-x-3 sm:-translate-x-6 whitespace-nowrap text-[clamp(1.65rem,8.2vw,3.5rem)] font-black text-ink">
                      Sri Lanka
                    </span>
                    <span className="flex items-center justify-end gap-2 mt-2 sm:mt-2.5 text-[clamp(1.65rem,8.2vw,3.5rem)] font-black text-ink">
                      <span>&amp; Abroad</span>
                      <span className="inline-flex items-center justify-center text-accent">
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

            {/* Action Buttons: Stacked on phone, side-by-side on tablet */}
            <div className="mt-6 sm:mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#build"
                className="group flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full bg-brand px-7 py-3.5 text-center text-[15px] font-bold text-paper shadow-[0_12px_28px_-10px_rgba(23,53,92,0.45)] transition-all hover:bg-brand-deep active:scale-[0.99]"
              >
                <span>Build your package</span>
              </a>
              <Link
                href="/packages"
                className="flex min-h-12 w-full sm:w-auto items-center justify-center rounded-full border border-line-strong bg-white/90 px-6 py-3.5 text-center text-[15px] font-semibold text-ink shadow-2xs backdrop-blur-md transition-all hover:border-brand hover:text-brand"
              >
                See packages &amp; prices →
              </Link>
            </div>
          </div>

          {/* Phone layout (< 640px): Centered Google review badge + ProofTiles card */}
          <div className="sm:hidden mt-6 space-y-5">
            <div className="flex flex-col items-center justify-center">
              <GoogleBadge />
            </div>
            <div className="rounded-[24px] border border-white/80 bg-white/60 p-4 backdrop-blur-md shadow-lg">
              <ProofTiles />
            </div>
          </div>

          {/* Tablet layout (640px to 1023px): Unified horizontal TrustRibbon */}
          <div className="hidden sm:block mt-8">
            <TrustRibbon />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DESKTOP HERO (Original warm editorial layout preserved)                  */}
      {/* ========================================================================= */}
      <section className="relative isolate overflow-hidden border-b border-line bg-[#efe4d9] hidden lg:block -mt-16 pt-16">
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#cab29d]">
          <Image
            src="/images/chanuka-hero-hq.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[right_top]"
            quality={95}
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,#efe4d9_0%,#efe4d9_26%,rgba(239,228,217,0.85)_36%,rgba(239,228,217,0.15)_46%,transparent_54%)]"
        />

        <div className="container-page relative pb-8 pt-12 xl:pt-16 2xl:pt-20 xl:pb-10">
          <div className="max-w-[460px] xl:max-w-[580px] 2xl:max-w-[700px]">
            <ReviewsPill className="rise mb-5" />
            <div className="mb-5 h-1 w-14 rounded-full bg-accent sm:mb-6" aria-hidden />

            <p className="rise mb-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-accent-deep">
              CPRW &amp; CPCC certified CV writer · Sri Lanka
            </p>
            <h1 className="display rise max-w-[14ch] xl:max-w-[15ch] 2xl:max-w-[16ch] text-[clamp(2.15rem,3.4vw,4.25rem)] font-bold leading-[1.08] tracking-tight text-ink">
              Land interviews in Sri Lanka and abroad.
            </h1>

            <p className="rise d1 mt-5 max-w-[420px] xl:max-w-[520px] 2xl:max-w-[640px] text-[16px] leading-[1.75] text-muted sm:mt-6 sm:text-[17px]">
              CV writing in Sri Lanka for private sector, banking, IT, government and
              foreign jobs, written personally by Chanuka. {site.cvsWritten} CVs over {site.yearsExperience} years.
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

          <TrustRibbon className="rise d3 mt-7 xl:mt-11 2xl:mt-14" />
        </div>
      </section>
    </>
  );
}
