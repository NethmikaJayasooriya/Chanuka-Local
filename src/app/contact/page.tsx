import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";

export const metadata = {
  title: "Contact Chanuka Jeewantha | WhatsApp & Inquiries Sri Lanka",
  description:
    "Get in touch directly with CPRW-certified CV writer Chanuka Jeewantha. Connect via WhatsApp (+94 77 390 2230) or send your CV for an express review.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Contact & Consultations</span>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="px-3.5 py-1 rounded-full bg-[#fbf3e3] border border-[#b9862f]/30 text-xs font-bold text-[#8f6419]">
            Direct 1-on-1 Communication
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#0e1a2b] mt-3 leading-tight">
            Let's Discuss Your <span className="text-[#17355c]">Next Career Move</span>.
          </h1>
          <p className="text-xs sm:text-sm text-[#52637a] mt-2.5 leading-relaxed">
            Have an urgent application deadline? Send a WhatsApp message with your current CV for an immediate consultation.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Direct WhatsApp & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Priority Card */}
            <div className="rounded-3xl bg-white border border-[#25d366]/40 p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(37,211,102,0.15)]">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e8f9ef] flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#1ea952] tracking-wider block">
                    Fastest Response Channel
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#0e1a2b]">
                    WhatsApp Orders & Inquiries
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#52637a] mb-6 leading-relaxed">
                Connect directly with Chanuka. You can attach your existing CV or document drafts directly in chat for an initial review.
              </p>

              <a
                href={whatsappUrl("Hi Chanuka, I would like to get my CV reviewed and ask about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full btn-whatsapp font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-105"
              >
                <span>Chat on WhatsApp (+94 77 390 2230)</span>
              </a>
              <span className="text-[11px] text-center text-[#52637a] block mt-2">
                Typical reply time: Under 15-30 minutes during business hours
              </span>
            </div>

            {/* Direct Details Box */}
            <div className="p-6 rounded-3xl bg-white border border-[#e2e8f0] space-y-4 text-xs text-[#233348] shadow-2xs">
              <div className="flex items-start gap-3">
                <span className="text-base text-[#17355c]">📍</span>
                <div>
                  <strong className="text-[#0e1a2b] block">Location:</strong>
                  <span>Colombo, Sri Lanka (Available Islandwide & Overseas)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-base text-[#17355c]">✉️</span>
                <div>
                  <strong className="text-[#0e1a2b] block">Official Email:</strong>
                  <a href={`mailto:${site.email}`} className="text-[#17355c] hover:underline font-semibold">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-base text-[#17355c]">⏰</span>
                <div>
                  <strong className="text-[#0e1a2b] block">Working Hours:</strong>
                  <span>Monday - Saturday: 8:30 AM - 8:30 PM (SLST)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Intake Message Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#e2e8f0] p-6 sm:p-10 shadow-[0_20px_50px_-20px_rgba(23,53,92,0.08)]">
            <h3 className="font-heading text-xl font-bold text-[#0e1a2b] mb-1.5">
              Send a Quick Career Inquiry
            </h3>
            <p className="text-xs text-[#52637a] mb-6">
              Fill in your details and click send. It will open WhatsApp with your pre-formatted inquiry ready to send!
            </p>

            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
