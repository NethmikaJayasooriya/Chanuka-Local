import Link from "next/link";
import { HeadlineGenerator } from "@/components/HeadlineGenerator";

export const metadata = {
  title: "Free LinkedIn Headline Formula & Generator | Chanuka Jeewantha",
  description:
    "Generate high-CTR, keyword-rich LinkedIn headlines designed to maximize recruiter search appearances and profile views.",
};

export default function FreeLinkedinFormulaPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-[#17355c]">Resources</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">LinkedIn Headline Formula</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Recruiter Discovery Formula
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0e1a2b] mt-3 leading-tight">
            The High-Converting LinkedIn <span className="text-[#17355c]">Headline Formula</span>
          </h1>
          <p className="text-sm sm:text-base text-[#52637a] mt-2.5 leading-relaxed">
            Recruiters don't scroll past generic headlines like "Looking for new opportunities" or "Senior Officer at ABC Bank". Use our proven 3-pillar formula below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-3xl bg-white border border-[#e2e8f0] text-xs sm:text-sm text-[#233348] space-y-3 shadow-xs">
          <h3 className="font-heading text-xs font-bold text-[#17355c] uppercase tracking-wider">
            The 3-Pillar LinkedIn Headline Formula:
          </h3>
          <p className="p-3.5 rounded-xl bg-[#f0f5fc] border border-[#d8e5f5] font-mono text-[#17355c] text-xs sm:text-sm">
            [Target Role Title] | [Core Specialization & Keywords] | [Quantified Commercial Impact or Passion]
          </p>
          <p className="text-[#52637a] text-xs">
            Example: <em>Lead Cloud Architect | AWS & Kubernetes Specialist | Scaled FinTech Platforms to 2M+ Users with 99.9% Uptime</em>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <HeadlineGenerator />
        </div>
      </div>
    </div>
  );
}
