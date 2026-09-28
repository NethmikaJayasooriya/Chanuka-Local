import Link from "next/link";
import { ReviewsSection } from "@/components/ReviewsSection";

export const metadata = {
  title: "450+ Verified Google Reviews & Client Outcomes | Chanuka Jeewantha",
  description:
    "Explore 458+ verified 5-star Google Business reviews from Sri Lankan professionals and expatriates who transformed their careers with CPRW specialist Chanuka Jeewantha.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6 font-medium">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#b9862f] font-semibold">Google Reviews &amp; Client Proof</span>
        </div>

        {/* Hero Header with Google Verification Badge */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-bold text-[#17355c] mb-3">
            <span className="flex h-2 w-2 rounded-full bg-[#1ea952] animate-pulse" />
            <span>Official Google Business Profile Reviews</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e1a2b] tracking-tight leading-tight break-words">
            Sri Lanka&apos;s Highest Rated <span className="text-[#17355c]">Career Strategist</span>.
          </h1>
          <p className="text-sm sm:text-base text-[#52637a] mt-3 leading-relaxed">
            Over 450+ verified 5-star Google endorsements across Sri Lanka&apos;s leading conglomerates and global destinations (Australia, UAE, UK, Canada).
          </p>
        </div>

        {/* Google Reviews Interactive Showcase */}
        <ReviewsSection hideHeader={true} />

      </div>
    </div>
  );
}
