import Link from "next/link";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Satisfaction Guarantee & Revision Policy | Chanuka Jeewantha",
  description: "Our commitment to 100% satisfaction, free revisions, and refund policies.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd] min-h-screen">
      <div className="container-custom max-w-4xl">
        <div className="flex items-center gap-2 text-xs text-[#64748b] mb-6 font-medium">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#b9862f] font-semibold">Satisfaction &amp; Revisions</span>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm space-y-6 text-xs sm:text-sm text-[#334155] leading-relaxed">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
            100% Satisfaction Guarantee
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#17355c]">
            Satisfaction Guarantee &amp; Revision Policy
          </h1>
          <p className="text-xs text-[#64748b]">Last updated: 2026 • Chanuka Jeewantha Career Advisory</p>

          <section className="space-y-3 pt-2">
            <h2 className="text-base font-bold text-[#17355c] font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b9862f]"></span>
              1. 100% Revision Guarantee
            </h2>
            <p>
              Your complete satisfaction is our highest priority. If you feel any section of your draft requires adjustment in tone, emphasis, or phrasing, we will revise and refine it at zero additional cost throughout your package's revision window (14 to 45 days).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#17355c] font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b9862f]"></span>
              2. Cancellation Prior to Writing
            </h2>
            <p>
              If you cancel your order before writing work commences, a full refund less minor banking processing fees will be issued immediately.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-[#17355c] font-heading flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b9862f]"></span>
              3. Personalized Advisory Support
            </h2>
            <p>
              Because each document is custom-crafted to your unique career trajectory by a human specialist, we work collaboratively with you until you are confident sending your CV to recruiters.
            </p>
          </section>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold text-[#17355c]">Have questions before ordering?</p>
              <p className="text-xs text-[#64748b]">Talk directly with Chanuka on WhatsApp.</p>
            </div>
            <a
              href={whatsappUrl("Hi Chanuka, I have a question about revisions and your satisfaction guarantee.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25d366] text-white font-bold text-xs shadow-md hover:bg-[#20ba59] transition-all transform hover:-translate-y-0.5"
            >
              <span>Speak with Chanuka on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
