import Link from "next/link";
import { HeadlineGenerator } from "@/components/HeadlineGenerator";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Free Career Resources & ATS CV Templates | Chanuka Jeewantha",
  description:
    "Download free ATS-compliant CV templates, verify your resume with our 20-point checklist, and generate high-impact LinkedIn headlines.",
};

export default function ResourcesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Free Career Resources</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            100% Free Career Toolkit
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0e1a2b] mt-3 leading-tight">
            Career <span className="text-[#17355c]">Resources</span> for Cleaner Applications.
          </h1>
          <p className="text-xs sm:text-sm text-[#52637a] mt-2.5 leading-relaxed">
            Download our free ATS CV template, test your resume against our checklist, and generate high-converting LinkedIn headlines.
          </p>
        </div>

        {/* Grid: Downloadable Template + Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          
          {/* Card 1: Free ATS Template */}
          <div className="rounded-3xl bg-white border border-[#e2e8f0] p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_-20px_rgba(23,53,92,0.08)]">
            <div>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#f8fafd] p-2 border border-[#e2e8f0]">
                <img
                  src="/images/cv-after-ats-template.svg"
                  alt="Free ATS Friendly CV Template"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <span className="px-2.5 py-0.5 rounded-full bg-[#e8f9ef] text-[#1ea952] text-[10.5px] font-bold">
                Free Downloadable Resource
              </span>
              <h3 className="font-heading text-lg font-bold text-[#0e1a2b] mt-2">
                ATS-Friendly CV Template (Word .docx & Google Docs)
              </h3>
              <p className="text-xs text-[#52637a] mt-2 leading-relaxed">
                A clean, single-column Microsoft Word template built to ensure 100% readability across Taleo, Workday, and Greenhouse. No fancy tables, no unparseable shapes.
              </p>

              <ul className="my-4 space-y-1.5 text-xs text-[#233348]">
                <li className="flex items-center gap-2">
                  <span className="text-[#1ea952] font-bold">✓</span> Built for 100% ATS parser compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1ea952] font-bold">✓</span> Pre-formatted standard section headers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1ea952] font-bold">✓</span> Compatible with MS Word, Google Docs & Pages
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row gap-2.5">
              <a
                href="/downloads/ATS-Friendly-CV-Template-Chanuka-Jeewantha.doc"
                download="ATS-Friendly-CV-Template-Chanuka-Jeewantha.doc"
                className="flex-1 py-3 rounded-full btn-primary text-xs font-bold flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.02] transition-transform text-center"
              >
                <span>📥 Direct Download (.doc)</span>
              </a>
              <a
                href={whatsappUrl("Hi Chanuka, please send me the Free ATS CV Word Template (.docx) via WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full btn-whatsapp text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: 20-Point Checklist */}
          <div className="rounded-3xl bg-white border border-[#e2e8f0] p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_-20px_rgba(23,53,92,0.08)]">
            <div>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-[#f0f5fc] p-6 border border-[#d8e5f5] flex flex-col justify-center">
                <span className="text-3xl mb-2">📋</span>
                <h4 className="font-heading text-base font-bold text-[#17355c]">The 20-Point ATS Checklist</h4>
                <p className="text-xs text-[#52637a] mt-1.5">
                  1. No graphics or skill bars<br />
                  2. Standard font hierarchy<br />
                  3. Quantified metrics in bullet points<br />
                  4. Exact keyword matches from job ads
                </p>
              </div>

              <span className="px-2.5 py-0.5 rounded-full bg-[#fbf3e3] text-[#8f6419] text-[10.5px] font-bold border border-[#b9862f]/30">
                Self-Audit Checklist
              </span>
              <h3 className="font-heading text-lg font-bold text-[#0e1a2b] mt-2">
                The 20-Point ATS CV Audit Checklist
              </h3>
              <p className="text-xs text-[#52637a] mt-2 leading-relaxed">
                Never submit an application without checking these 20 critical criteria. This checklist walks you through formatting, keywords, and recruiter psychology.
              </p>

              <ul className="my-4 space-y-1.5 text-xs text-[#233348]">
                <li className="flex items-center gap-2">
                  <span className="text-[#1ea952] font-bold">✓</span> 20 essential pre-submission checkpoints
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1ea952] font-bold">✓</span> Identifies high-risk formatting mistakes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#1ea952] font-bold">✓</span> Includes sample metric formulas (X-Y-Z method)
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#e2e8f0] flex flex-col sm:flex-row gap-2.5">
              <a
                href="/downloads/20-Point-ATS-CV-Checklist-Chanuka-Jeewantha.txt"
                download="20-Point-ATS-CV-Checklist-Chanuka-Jeewantha.txt"
                className="flex-1 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0e1a2b] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#cbd5e1] transition-all text-center"
              >
                <span>📥 Direct Download (.txt)</span>
              </a>
              <a
                href={whatsappUrl("Hi Chanuka, please send me your Free 20-Point ATS Checklist via WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full btn-whatsapp text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Interactive LinkedIn Headline Generator Tool */}
        <div className="max-w-4xl mx-auto">
          <HeadlineGenerator />
        </div>

      </div>
    </div>
  );
}
