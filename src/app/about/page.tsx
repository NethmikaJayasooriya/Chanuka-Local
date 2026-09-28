import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "About Chanuka Jeewantha | CPRW & CPCC Certified Career Specialist",
  description:
    "Learn about Chanuka Jeewantha's 8+ year journey helping 10,000+ professionals build ATS-friendly CVs, command executive salaries, and relocate internationally.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">About Chanuka Jeewantha</span>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#17355c] to-[#0f2440] text-white p-5 sm:p-10 lg:p-12 mb-10 sm:mb-14 shadow-xl break-words">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#fbf3e3]">
              Certified Professional Resume Writer & Career Coach
            </span>
            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-3 leading-tight break-words">
              Career growth is not guesswork, it is strategy and proof.
            </h1>
            <p className="text-xs sm:text-base text-white/80 mt-3 leading-relaxed">
              With 8+ years of specialized experience in talent positioning, I help candidates align their CV, LinkedIn, and personal brand with modern recruitment algorithms and human decision-making psychology.
            </p>
          </div>
        </div>

        {/* Story & Biography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto mb-16">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-3xl overflow-hidden border border-[#e2e8f0] shadow-lg bg-white p-2">
              <div className="w-full rounded-2xl overflow-hidden">
                <img
                  src="/images/about-chanuka.jpg"
                  alt="Chanuka Jeewantha in camel blazer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs space-y-3">
              <h3 className="font-heading text-xs font-bold text-[#17355c] uppercase tracking-wider">
                Official Certifications:
              </h3>
              {site.certifications.map((cert, i) => (
                <div key={i} className="text-xs border-l-2 border-[#b9862f] pl-3 py-1">
                  <p className="font-bold text-[#0e1a2b]">{cert.short} - {cert.full}</p>
                  <p className="text-[#52637a] text-[11px]">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-5 text-sm text-[#52637a] leading-relaxed">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0e1a2b]">
              Why I Built Sri Lanka's Leading Career Branding Practice
            </h2>

            <p>
              I began this journey over 8 years ago when I noticed a glaring gap in the Sri Lankan job market. Remarkable professionals with master's degrees, international professional qualifications, and stellar work records were constantly being ghosted by corporate recruiters.
            </p>

            <p>
              The culprit wasn't their lack of competence; it was the outdated documents they were submitting. Most people in Sri Lanka were using 4-page resumes created from generic internet templates, packed with passive duty statements, decorative Canva graphics, and irrelevant personal details like marital status or religion.
            </p>

            <p>
              Meanwhile, corporate hiring evolved rapidly. Multinational companies, top Colombo conglomerates, and overseas recruitment agencies adopted Applicant Tracking Systems (ATS) like Workday, Taleo, and Lever. These bots scan resumes in milliseconds. If the formatting isn't compliant and the keywords aren't indexed, the candidate is discarded automatically.
            </p>

            <div className="p-6 rounded-2xl bg-[#f0f5fc] border border-[#d8e5f5] my-6">
              <h3 className="font-heading text-sm font-bold text-[#17355c] mb-2.5">
                My 4-Pillar Writing Methodology:
              </h3>
              <ul className="space-y-3 text-xs text-[#233348]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#17355c] font-bold">01.</span>
                  <span><strong>Market & Algorithmic Audit:</strong> Dissecting your target vacancies to extract the exact technical competencies and keyword hierarchies modern HR algorithms search for.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#17355c] font-bold">02.</span>
                  <span><strong>Metric-Driven Storytelling:</strong> Rewriting passive task lists into quantified accomplishments (Revenue, Cost Reductions, Efficiency Gains, Team Leadership).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#17355c] font-bold">03.</span>
                  <span><strong>Clean Linear Architecture:</strong> Ensuring 100% single-column readability that parses seamlessly through ATS bots without visual degradation.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#17355c] font-bold">04.</span>
                  <span><strong>The 6-Second Executive Hook:</strong> Designing a compelling executive summary that commands attention from human decision-makers during their initial scan.</span>
                </li>
              </ul>
            </div>

            <p>
              Today, I have helped over 10,000 professionals across Sri Lanka, the Middle East, the UK, Australia, and North America land coveted positions, negotiate higher compensation, and transition smoothly across international borders.
            </p>

            <div className="pt-3 flex flex-wrap gap-3.5">
              <a
                href={whatsappUrl("Hi Chanuka, I read your background and story and would like to work with you on my career documents.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full btn-whatsapp text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
              >
                <span>Chat with Chanuka on WhatsApp</span>
              </a>
              <Link
                href="/services"
                className="px-6 py-3 rounded-full border border-[#17355c] text-[#17355c] hover:bg-[#17355c] hover:text-white font-bold text-xs transition-colors shadow-xs"
              >
                Explore Services & Rates
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
