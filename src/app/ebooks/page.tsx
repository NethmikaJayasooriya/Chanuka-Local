import Link from "next/link";
import { EbookShowcase } from "@/components/EbookShowcase";
import { whatsappUrl } from "@/lib/site";

export const metadata = {
  title: "Books & Literature by Chanuka Jeewantha | Career & Financial Mastery in Sinhala",
  description:
    "Explore bestselling career, productivity, and personal finance books translated and authored by Chanuka Jeewantha with islandwide Sri Lanka courier delivery.",
};

export default function EbooksPage() {
  return (
    <div className="pt-28 pb-20 bg-[#f8fafd]">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#52637a] mb-6">
          <Link href="/" className="hover:text-[#17355c]">Home</Link>
          <span>/</span>
          <span className="text-[#17355c] font-semibold">Books & Publications</span>
        </div>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-[#17355c] to-[#0f2440] text-white p-5 sm:p-10 lg:p-12 mb-10 sm:mb-14 shadow-xl break-words">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#fbf3e3]">
              Literature & Self-Mastery
            </span>
            <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold mt-3 leading-tight break-words">
              Mindset, Wealth & Productivity Literature.
            </h1>
            <p className="text-xs sm:text-base text-white/80 mt-3 leading-relaxed">
              Empowering the next generation of Sri Lankan professionals and corporate leaders through world-renowned career strategies and financial literacy concepts translated and adapted into Sinhala.
            </p>
          </div>
        </div>

        {/* Showcase Component */}
        <EbookShowcase />

        {/* Islandwide Courier Delivery Info Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-[#e2e8f0] p-6 sm:p-8 mt-14 text-center shadow-xs">
          <h3 className="font-heading text-lg font-bold text-[#0e1a2b] mb-2">
            Islandwide Fast Delivery via Registered Courier 🚚
          </h3>
          <p className="text-xs text-[#52637a] max-w-xl mx-auto mb-5 leading-relaxed">
            All printed physical books are dispatched within 24 hours of payment confirmation to any address across Sri Lanka. Bank deposit & online card options available.
          </p>
          <a
            href={whatsappUrl("Hi Chanuka, I would like to order your books with courier delivery to my home.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full btn-whatsapp text-white text-xs font-bold shadow-md hover:scale-105"
          >
            <span>Order Multiple Books on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
