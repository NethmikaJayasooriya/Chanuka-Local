import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Chanuka Jeewantha",
  description: "Terms and conditions of service for Chanuka Jeewantha Career Development Services.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom max-w-4xl">
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Terms & Conditions</span>
        </div>

        <div className="rounded-3xl bg-white border border-[#e2e8f0] p-8 sm:p-12 shadow-[0_20px_50px_-20px_rgba(23,53,92,0.08)] space-y-6 text-xs sm:text-sm text-[#52637a] leading-relaxed">
          <h1 className="font-heading text-2xl sm:text-4xl font-bold text-[#0e1a2b]">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-[#94a3b8]">Last updated: 2026</p>

          <section className="space-y-2.5">
            <h2 className="font-heading text-base font-bold text-[#0e1a2b]">1. Scope of Career Services</h2>
            <p>
              Chanuka Jeewantha provides professional resume writing, LinkedIn profile optimization, cover letter creation, and career coaching consultations. All services are performed according to certified standards (CPRW and CPCC).
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-heading text-base font-bold text-[#0e1a2b]">2. Client Cooperation & Information Accuracy</h2>
            <p>
              The client is responsible for providing truthful, accurate, and complete information regarding their employment history, educational qualifications, and career accomplishments.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-heading text-base font-bold text-[#0e1a2b]">3. Turnaround Times & Delivery</h2>
            <p>
              Standard turnaround is 48 to 72 business hours from the time complete intake information is received. 24-hour VIP Express options are delivered within 24 business hours as agreed upon booking.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="font-heading text-base font-bold text-[#0e1a2b]">4. Revisions Support</h2>
            <p>
              Every package includes a complimentary revision period (14 days for Starter, 30 days for Mid-Level, and 45 days for Executives) to refine drafts until satisfaction is attained.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
