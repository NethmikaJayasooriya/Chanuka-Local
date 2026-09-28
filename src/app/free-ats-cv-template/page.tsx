import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Free ATS-Friendly CV Template (.docx) Sri Lanka | Chanuka Jeewantha",
  description:
    "Download Chanuka Jeewantha's free ATS-compliant CV Word template engineered for Sri Lankan corporates, banks, and multinational companies.",
};

export default function FreeAtsCvTemplatePage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <Link href="/resources" className="hover:text-[#17355c]">Resources</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Free ATS CV Template</span>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#e2e8f0] p-8 sm:p-12 shadow-[0_20px_50px_-20px_rgba(23,53,92,0.1)]">
          <span className="px-3.5 py-1 rounded-full bg-[#e8f9ef] text-[#1ea952] text-xs font-bold border border-[#25d366]/30">
            100% Free Download
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0e1a2b] mt-3.5 mb-3 leading-tight">
            Download Your Free <span className="text-[#17355c]">ATS-Friendly CV Template</span>
          </h1>
          <p className="text-sm sm:text-base text-[#52637a] leading-relaxed mb-8">
            Engineered by CPRW-certified specialist Chanuka Jeewantha to guarantee 100% parsing accuracy across Taleo, Workday, Greenhouse, and Lever. Fully editable in Microsoft Word (.docx) and Google Docs.
          </p>

          <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 bg-[#f8fafd] p-3 border border-[#e2e8f0]">
            <img
              src="/images/cv-after-ats-template.svg"
              alt="Free ATS CV Template Preview"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0]">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#17355c] mb-1">
                ✓ 100% Algorithmic Compliance
              </h4>
              <p className="text-xs text-[#52637a] leading-relaxed">
                Single-column hierarchy eliminates text scrambling and missing skill sections in HR databases.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0]">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#17355c] mb-1">
                ✓ Pre-Built Action Verb Formulas
              </h4>
              <p className="text-xs text-[#52637a] leading-relaxed">
                Includes sample accomplishment bullet points based on the Google X-Y-Z method.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#e2e8f0]">
            <a
              href="/downloads/ATS-Friendly-CV-Template-Chanuka-Jeewantha.doc"
              download="ATS-Friendly-CV-Template-Chanuka-Jeewantha.doc"
              className="flex-1 py-3.5 rounded-full btn-primary text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] transition-transform text-center"
            >
              <span>📥 Download Word Template (.doc)</span>
            </a>
            <a
              href={whatsappUrl("Hi Chanuka, please send me the Free ATS CV Word Template (.docx) directly on WhatsApp.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full btn-whatsapp text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <span>Send to My WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
