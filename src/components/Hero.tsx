"use client";

import Image from "next/image";
import Link from "next/link";
import { ReviewsPill } from "./ReviewsPill";
import { TrustRibbon } from "./TrustRibbon";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-[#efe4d9]">
      {/* Desktop uses the photograph at its natural wide composition. */}
      <div className="pointer-events-none absolute inset-0 -z-20 hidden overflow-hidden bg-[#d7bfa9] lg:block">
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
        className="pointer-events-none absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(249,250,252,0.99)_0%,rgba(249,250,252,0.97)_34%,rgba(249,250,252,0.58)_48%,rgba(249,250,252,0.05)_62%,transparent_72%)] lg:block"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(145deg,#f9fafc_0%,#ffffff_58%,#f3e7dc_100%)] lg:hidden" />

      <div className="container-page relative py-10 sm:py-14 lg:pb-10 lg:pt-16 xl:pt-20">
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

          <div className="rise d2 mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#build"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-brand px-8 py-3.5 text-center text-[15px] font-semibold text-paper shadow-[0_16px_34px_-16px_rgb(23_53_92/0.95)] transition-all hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-[0_20px_38px_-15px_rgb(23_53_92/0.9)] sm:w-auto"
            >
              Build your package
            </a>
            <Link
              href="/packages"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-line-strong bg-white/90 px-6 py-3.5 text-[15px] font-semibold text-ink shadow-2xs backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand sm:w-auto"
            >
              See packages &amp; prices →
            </Link>
          </div>
        </div>

        {/* A tighter editorial crop gives the portrait presence on narrow screens. */}
        <div className="rise d2 relative mx-auto mt-10 max-w-[350px] lg:hidden">
          <div
            aria-hidden
            className="absolute -inset-x-2 -inset-y-2 rounded-[30px] bg-[linear-gradient(145deg,rgba(185,134,47,0.25),rgba(255,255,255,0.9)_48%,rgba(23,53,92,0.14))] shadow-[0_28px_65px_-36px_rgb(14_26_43/0.7)]"
          />
          <div aria-hidden className="absolute -right-3 -top-4 h-20 w-20 rounded-full border border-accent/25 bg-accent-soft/60 blur-[1px]" />
          <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] bg-[#d7bfa9] ring-1 ring-ink/10 sm:aspect-[16/10] sm:rounded-[26px]">
            <Image
              src="/images/chanuka-hero-hq.png"
              alt="Chanuka Jeewantha, career branding and CV specialist"
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 0px"
              className="object-cover object-[82%_center] sm:object-[72%_center]"
              quality={95}
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_48%,rgba(15,36,64,0.14))]" />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-deep/16 to-transparent" />
          </div>
        </div>

        {/* All original trust details stay together in one calm glass ribbon. */}
        <TrustRibbon className="rise d3 mt-9 sm:mt-11 lg:mt-14" />
      </div>
    </section>
  );
}
