import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { PricingCalculator } from "@/components/PricingCalculator";
import { formatLKR } from "@/lib/pricing";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Career Services & Pricing in Sri Lanka | Chanuka Jeewantha",
  description:
    "Explore our complete suite of ATS CV writing, LinkedIn optimization, cover letter tailoring, and overseas relocation packages in Sri Lanka.",
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Services & Solutions</span>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#17355c] to-[#0f2440] text-white p-8 sm:p-12 mb-14 shadow-xl">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#fbf3e3]">
              Modern Recruitment Solutions
            </span>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold mt-3 leading-tight">
              Career Development Services Built for Modern Hiring Systems.
            </h1>
            <p className="text-sm sm:text-base text-white/80 mt-3 leading-relaxed">
              Whether you are applying for your first corporate job in Colombo, eyeing an executive promotion, or preparing to relocate to Dubai, Australia, or the UK — every document is engineered to pass algorithmic filters and captivate hiring executives.
            </p>
          </div>
        </div>

        {/* Services Deep Dive */}
        <div className="space-y-12 mb-20 max-w-5xl mx-auto">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              id={srv.slug}
              className="rounded-3xl bg-white border border-[#e2e8f0] hover:border-[#17355c]/30 p-6 sm:p-10 shadow-[0_20px_50px_-20px_rgba(23,53,92,0.08)] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#e2e8f0] gap-4 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#b9862f]">
                    Service 0{idx + 1} • Starting From {formatLKR(srv.startingPriceLKR)}
                  </span>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0e1a2b] mt-1">
                    {srv.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#17355c] mt-1 font-semibold">
                    {srv.subtitle}
                  </p>
                </div>

                <a
                  href={whatsappUrl(`Hi Chanuka, I would like to order your ${srv.title} service.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full btn-whatsapp font-bold text-xs whitespace-nowrap self-start sm:self-auto shadow-md"
                >
                  Order on WhatsApp
                </a>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#52637a] leading-relaxed mb-7">
                <p>{srv.overview}</p>
                <p className="text-[#0e1a2b] font-medium">{srv.whyItMatters}</p>
              </div>

              {/* Deliverables Grid */}
              <div className="mb-7 p-5 rounded-2xl bg-[#f8fafd] border border-[#e2e8f0]">
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[#17355c] mb-3">
                  What You Receive (Deliverables):
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {srv.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#233348]">
                      <span className="text-[#1ea952] font-bold">✓</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div>
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[#0e1a2b] mb-3">
                  How the Process Works:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {srv.processSteps.map((step, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-[#f8fafd] border border-[#e2e8f0]">
                      <p className="font-heading text-xs font-bold text-[#17355c] mb-1">{step.title}</p>
                      <p className="text-[11.5px] text-[#52637a] leading-snug">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Calculator Component */}
        <PricingCalculator />

      </div>
    </div>
  );
}
