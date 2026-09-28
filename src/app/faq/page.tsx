import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata = {
  title: "Frequently Asked Questions & Help Center | Chanuka Jeewantha",
  description:
    "Find answers to common questions about ATS resume parsing, pricing in LKR, delivery turnaround, payment options, and revisions in Sri Lanka.",
};

export default function FaqPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Help Center & FAQs</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Help & Process Details
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0e1a2b] mt-3 leading-tight">
            Frequently Asked <span className="text-[#17355c]">Questions</span>.
          </h1>
          <p className="text-sm sm:text-base text-[#52637a] mt-3 leading-relaxed">
            Clear, straightforward answers about how ATS systems work, our CPRW methodology, delivery times, and payment methods in Sri Lanka.
          </p>
        </div>

        {/* Accordion Component */}
        <FaqAccordion />

      </div>
    </div>
  );
}
