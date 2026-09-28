import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Chanuka Jeewantha",
  description: "Privacy policy regarding client resume data and personal information confidentiality.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd] min-h-screen">
      <div className="container-custom max-w-4xl">
        <div className="flex items-center gap-2 text-xs text-[#64748b] mb-6 font-medium">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#b9862f] font-semibold">Privacy Policy</span>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[#17355c] text-xs font-semibold">
            Confidentiality Guarantee
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#17355c]">
            Client Confidentiality &amp; Privacy Policy
          </h1>
          <p className="text-xs text-[#64748b]">Last updated: 2026 • Chanuka Jeewantha Career Advisory</p>

          <section className="space-y-3 pt-2">
            <h2 className="text-base font-bold text-[#17355c] font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b9862f]"></span>
              1. 100% Confidentiality Guarantee
            </h2>
            <p>
              Your current employment details, compensation numbers, resume documents, and contact information are treated with absolute discretion. We never share client documents with third parties, employers, or recruiters without explicit written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#17355c] font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b9862f]"></span>
              2. Account Credentials Security
            </h2>
            <p>
              We NEVER request or store your LinkedIn, email, or job portal account passwords. All LinkedIn optimizations are delivered in formatted master files for you to apply safely.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#17355c] font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b9862f]"></span>
              3. Data Retention &amp; Right to Erasure
            </h2>
            <p>
              Your working files are stored securely during your revision period so we can perform future updates if requested. You may request permanent deletion of your files from our storage at any time.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
