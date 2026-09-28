import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Free 20-Point ATS CV Audit Checklist | Chanuka Jeewantha",
  description:
    "Test your CV against 20 critical ATS compliance criteria before submitting your next job application in Sri Lanka or overseas.",
};

export default function FreeAtsCvChecklistPage() {
  const points = [
    "Single-column linear hierarchy without nested tables or sidebars",
    "Searchable text PDF or editable Word document (not scanned image)",
    "No graphical skill bars, progress bars, or star ratings",
    "System fonts used between 10pt and 12pt (Calibri, Arial, Helvetica, Georgia)",
    "Standard margins between 0.5 and 1.0 inch on all edges",
    "No contact details placed inside headers/footers (many parsers ignore headers)",
    "Full name clearly prominent at top (18-24pt)",
    "Clean custom LinkedIn URL included",
    "No outdated personal data (NIC number, civil status, religion, school sports)",
    "3-4 sentence Executive Summary with target job title declared",
    "Keywords extracted directly from 2-3 live target job postings",
    "Dedicated Core Competencies & Skills section near the top",
    "Strict reverse-chronological work experience order",
    "Every bullet point starts with a powerful action verb",
    "Quantified commercial impact (%, revenue numbers, cost savings)",
    "Google X-Y-Z formula applied to top accomplishments",
    "Clear degree and professional qualifications (CIMA, ACCA, CFA, PMP)",
    "Clean date formats (Month Year - Month Year)",
    "Zero grammatical, spelling, or punctuation errors",
    "Total document length capped at 1-2 pages",
  ];

  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-[#17355c]">Resources</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Free ATS Checklist</span>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#e2e8f0] p-8 sm:p-12 shadow-[0_20px_50px_-20px_rgba(23,53,92,0.1)]">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] text-[#8f6419] text-xs font-bold border border-[#b9862f]/30">
            Self-Audit Toolkit
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0e1a2b] mt-3.5 mb-3 leading-tight">
            The 20-Point <span className="text-[#17355c]">ATS CV Checklist</span>
          </h1>
          <p className="text-sm sm:text-base text-[#52637a] leading-relaxed mb-8">
            Never submit an application without running your resume through these 20 non-negotiable criteria used by certified resume writers and corporate recruiters.
          </p>

          {/* Checklist items */}
          <div className="space-y-2.5 mb-8">
            {points.map((pt, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0] flex items-start gap-3 text-xs sm:text-sm text-[#233348]"
              >
                <span className="text-[#17355c] font-bold mt-0.5 font-mono">[{i + 1}]</span>
                <span>{pt}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e2e8f0]">
            <a
              href="/downloads/20-Point-ATS-CV-Checklist-Chanuka-Jeewantha.txt"
              download="20-Point-ATS-CV-Checklist-Chanuka-Jeewantha.txt"
              className="flex-1 py-3.5 rounded-full btn-primary text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform text-center"
            >
              <span>📥 Download Printable Checklist (.txt)</span>
            </a>
            <a
              href={whatsappUrl("Hi Chanuka, I checked my CV with your 20-point checklist and need help fixing issues.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full btn-whatsapp text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <span>Audit My CV via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
