import Link from "next/link";
import { ReviewsSection } from "@/components/ReviewsSection";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "450+ Verified Google Reviews & Client Outcomes | Chanuka Jeewantha",
  description:
    "See what Sri Lankan professionals, managers, and overseas job seekers say about working with CPRW-certified CV writer Chanuka Jeewantha.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Client Reviews & Proof</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Verified Career Results
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0e1a2b] mt-3 leading-tight">
            The Highest Rated Career Strategist in <span className="text-[#17355c]">Sri Lanka</span>.
          </h1>
          <p className="text-sm sm:text-base text-[#52637a] mt-3 leading-relaxed">
            With over 450+ 5-star Google reviews and 10,000+ candidates positioned, here are real success stories from Sri Lankan corporate professionals and global expatriates.
          </p>
        </div>

        {/* Reviews Grid */}
        <ReviewsSection />

        {/* Verification Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#e2e8f0] p-8 mt-14 text-center shadow-xs">
          <h3 className="font-heading text-base font-bold text-[#0e1a2b] mb-2">
            Are You Ready for Your Own Career Success Story?
          </h3>
          <p className="text-xs text-[#52637a] max-w-xl mx-auto mb-5 leading-relaxed">
            Stop letting outdated formatting or unoptimized keywords hold you back. Send your current CV today for a confidential review.
          </p>
          <a
            href={whatsappUrl("Hi Chanuka, I read your client reviews and would like to get my CV transformed.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-whatsapp text-white text-xs font-bold shadow-md hover:scale-105"
          >
            <span>Start on WhatsApp (+94 77 390 2230)</span>
          </a>
        </div>

      </div>
    </div>
  );
}
