import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="w-full bg-[#0f2440] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#b9862f]/10 blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Big Conversion Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#17355c] via-[#1e4373] to-[#17355c] border border-white/15 p-8 md:p-12 mb-16 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-widest text-[#fbf3e3]">
              Direct 1-on-1 Career Strategy
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-white leading-tight">
              Ready to win more interviews and unlock higher compensation?
            </h2>
            <p className="text-sm md:text-base text-white/80 mt-2.5">
              Join 10,000+ Sri Lankan professionals and expatriates who transformed their career trajectories with CPRW-certified ATS resumes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={whatsappUrl("Hi Chanuka, I want to discuss creating a professional ATS CV.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1ea952] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 whitespace-nowrap"
            >
              <span>Order via WhatsApp</span>
            </a>
            <Link
              href="/catalogue"
              className="px-6 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm text-center transition-all whitespace-nowrap"
            >
              Find My Ideal Package
            </Link>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#b9862f] to-[#8f6419] p-0.5 flex items-center justify-center shadow">
                <span className="font-bold text-white text-xs font-serif">CJ</span>
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                Chanuka<span className="text-[#b9862f]">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Certified Professional Resume Writer (CPRW) & Career Coach (CPCC) with 8+ years of expertise crafting ATS-engineered CVs, LinkedIn profiles, and international career moves.
            </p>
            <div className="mt-2 text-xs text-white/85 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25d366]" />
                <span>Taking new client intakes (24h - 48h turnaround)</span>
              </div>
              <p className="text-white/60">Verified Google 4.9★ (450+ Sri Lankan reviews)</p>
            </div>
          </div>

          {/* Col 2: Services & Tools */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#fbf3e3] mb-4">
              Services & Tools
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  ATS Professional CV Writing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  LinkedIn Profile Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Tailored Cover Letters
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Foreign Job & Migration Packages
                </Link>
              </li>
              <li>
                <Link href="/catalogue" className="hover:text-[#fbf3e3] text-[#fbf3e3] font-semibold transition-colors">
                  ✦ Package Matcher (60s Quiz)
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#fbf3e3] text-[#fbf3e3] font-semibold transition-colors">
                  ✦ Free ATS CV Template (.docx)
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[#fbf3e3] text-[#fbf3e3] font-semibold transition-colors">
                  ✦ Free LinkedIn Headline Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Books & Information */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#fbf3e3] mb-4">
              Books & About
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/70">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Chanuka Jeewantha
                </Link>
              </li>
              <li>
                <Link href="/ebooks" className="hover:text-white transition-colors">
                  කෝටිපතියෙක් වීමේ වේගවත් මග
                </Link>
              </li>
              <li>
                <Link href="/ebooks" className="hover:text-white transition-colors">
                  ගැඹුරු කාර්යය (Deep Work)
                </Link>
              </li>
              <li>
                <Link href="/ebooks" className="hover:text-white transition-colors">
                  සාර්ථක වෘත්තීය ජීවිතයක නීති
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Transparent LKR Pricing
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Help Center & FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Payment */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#fbf3e3] mb-4">
              Direct Contact & Bank Info
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-white/70">
              <p className="flex items-start gap-2">
                <span className="text-[#b9862f]">📍</span>
                <span>Colombo, Sri Lanka (Remote Islandwide & Expat Services)</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#25d366]">💬</span>
                <a href={whatsappUrl()} className="hover:text-white transition-colors">
                  +94 77 390 2230 (WhatsApp Orders)
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#b9862f]">✉️</span>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </p>
              
              <div className="pt-3 border-t border-white/10 mt-1">
                <span className="text-xs uppercase font-bold text-[#fbf3e3] block mb-1.5">
                  Accepted Payments in Sri Lanka:
                </span>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Commercial Bank • Sampath Bank • HNB • FriMi • Koko Pay • Visa / MasterCard
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Socials & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60 text-center sm:text-left">
            © {new Date().getFullYear()} Chanuka Jeewantha. All rights reserved. Sri Lanka's Premier CPRW-Certified Career Partner.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-xs font-medium"
            >
              LinkedIn
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-xs font-medium"
            >
              Facebook
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-xs font-medium"
            >
              YouTube
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-xs font-medium"
            >
              Instagram
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors text-xs font-medium"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
