import Link from "next/link";
import { PackageMatcherQuiz } from "@/components/PackageMatcherQuiz";

export const metadata = {
  title: "Career Studio Catalogue | Find the Right Package in 60 Seconds",
  description:
    "Answer 5 simple questions to get paired with your ideal ATS CV, LinkedIn, or Relocation package with tailored Sri Lankan pricing.",
};

export default function CataloguePage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Career Studio Catalogue</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Interactive Diagnostic Wizard
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0e1a2b] mt-3 leading-tight">
            Find the Right Package in <span className="text-[#17355c]">60 Seconds</span>.
          </h1>
          <p className="text-xs sm:text-sm text-[#52637a] mt-2 leading-relaxed">
            Choose what you need and receive the matching package with exact discounted LKR pricing and direct 1-click WhatsApp order.
          </p>
        </div>

        {/* Matcher Quiz */}
        <PackageMatcherQuiz />
      </div>
    </div>
  );
}
