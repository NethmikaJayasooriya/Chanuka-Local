"use client";

import Image from "next/image";
import Link from "next/link";
import { ReviewsPill } from "./ReviewsPill";
import { TrustRibbon } from "./TrustRibbon";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line/60 bg-[linear-gradient(180deg,#baa892_0%,#beac97_5%,#c4af9c_10%,#c8b5a2_15%,#cbb8a7_20%,#d0bfaf_30%,#d4c2b4_40%,#d6c6b7_50%,#d7c7b8_60%,#d7c7b7_70%,#d4c4b4_80%,#cbbaaa_90%,#c2ad9d_100%)] -mt-16 pt-16">
      {/* Desktop portrait: naturally feathered left edge that melts seamlessly into the studio background */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block">
        <Image
          src="/images/hero-photo-blended.webp"
          alt="Chanuka Jeewantha, CPRW & CPCC certified CV writer"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right"
          quality={95}
        />
      </div>

      <div className="container-page relative py-10 sm:py-14 lg:pb-10 lg:pt-16 xl:pt-20">
        <div className="max-w-[720px]">
          <ReviewsPill className="rise mb-5 shadow-sm" />
          <div className="mb-5 h-1 w-14 rounded-full bg-accent sm:mb-6" aria-hidden />

          <p className="rise mb-3 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#704b0c]">
            CPRW &amp; CPCC certified CV writer · Sri Lanka
          </p>

          <h1 className="display rise max-w-[16ch] text-[clamp(2.15rem,5vw,4.25rem)] font-bold leading-[1.05] tracking-tight text-ink">
            Land interviews in Sri Lanka and abroad.
          </h1>

          <p className="rise d1 mt-5 max-w-[640px] text-[16px] leading-[1.75] text-[#24334a] sm:mt-6 sm:text-[17px] font-medium">
            CV writing in Sri Lanka for private sector, banking, IT, government and
            foreign jobs. Choose supervised Essential or personally crafted Signature. {site.cvsWritten} CVs over {site.yearsExperience} years.
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
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-ink/15 bg-white/95 px-6 py-3.5 text-[15px] font-semibold text-ink shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand sm:w-auto"
            >
              See packages &amp; prices →
            </Link>
          </div>
        </div>

        {/* Mobile Editorial Portrait Card */}
        <div className="rise d2 relative mx-auto mt-10 max-w-[360px] lg:hidden">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] border border-white/70 bg-[#d6c6b7] shadow-[0_24px_50px_-20px_rgba(23,53,92,0.35)] sm:aspect-[4/5] sm:rounded-[26px]">
            <Image
              src="/images/hero-photo.jpg"
              alt="Chanuka Jeewantha, career branding and CV specialist"
              fill
              priority
              sizes="(max-width: 1023px) 92vw, 0px"
              className="object-cover object-top"
              quality={95}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),transparent_48%,rgba(15,36,64,0.14))]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-deep/16 to-transparent"
            />
          </div>
        </div>

        {/* The Trust Ribbon with the 4 interactive proof tiles + GoogleBadge */}
        <TrustRibbon className="rise d3 mt-9 sm:mt-11 lg:mt-14" />
      </div>
    </section>
  );
}
