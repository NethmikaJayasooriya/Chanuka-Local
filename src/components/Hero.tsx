import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f8fafd] via-[#ffffff] to-[#f1f5fa]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-[#e8eff9] blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 right-10 w-80 h-80 bg-[#fbf3e3] blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Sales Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Certification Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#cbd5e1] shadow-xs mb-5">
              <span className="flex h-2 w-2 rounded-full bg-[#b9862f] animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-[#17355c]">
                CPRW & CPCC Dual Certified
              </span>
              <span className="text-[#cbd5e1] text-xs">•</span>
              <span className="text-xs text-[#52637a] font-medium">
                Sri Lanka's No. 1 Career Strategist
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0e1a2b] leading-[1.12] mb-5">
              Land 3x More Interviews With <span className="text-[#17355c] underline decoration-[#b9862f]/40 decoration-wavy decoration-2">Sri Lanka's No.1</span> Professional CV Writer.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#52637a] max-w-2xl leading-relaxed mb-7">
              Over 75% of CVs are rejected by automated recruitment algorithms (ATS) before a human reads a single word. We engineer certified ATS-compliant CVs, recruiter-magnet LinkedIn profiles, and international job packages that put your career at the top of the stack.
            </p>

            {/* High-Converting Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full btn-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
              >
                <span>View Packages & Rates</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 font-mono">From LKR 3,950</span>
              </Link>

              <a
                href={whatsappUrl("Hi Chanuka, I would like to get my CV reviewed and order a professional package.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full btn-whatsapp font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.203c.043.071.043.418-.101.823z" />
                </svg>
                <span>WhatsApp Fast Intake</span>
              </a>
            </div>

            {/* Diagnostic Pill */}
            <div className="flex items-center gap-2.5 text-xs text-[#52637a]">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#fbf3e3] text-[#8f6419] font-bold text-xs">
                ⚡
              </span>
              <span>Not sure which package fits your career stage?</span>
              <Link
                href="/catalogue"
                className="text-[#17355c] hover:text-[#b9862f] font-bold underline underline-offset-4 transition-colors"
              >
                Take the 60-Second Quiz →
              </Link>
            </div>

            {/* Verified Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-[#e2e8f0] w-full">
              {site.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#17355c] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs font-bold text-[#b9862f] mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-[#52637a] mt-0.5 line-clamp-1">
                    {stat.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Res Executive Portrait with Floating Trust Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-2 bg-white border border-[#e2e8f0] shadow-[0_20px_50px_-15px_rgba(23,53,92,0.18)]">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#edf2f8]">
                <img
                  src="/images/hero-chanuka.jpg"
                  alt="Chanuka Jeewantha - Professional CV Writer Sri Lanka"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle gradient at bottom for text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1a2b]/80 via-transparent to-transparent opacity-80" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#e2e8f0] shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-xs font-bold text-[#0e1a2b]">Chanuka Jeewantha</h3>
                      <p className="text-[11px] text-[#b9862f] font-semibold">CPRW & CPCC Dual Certified</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-[#e8f9ef] text-[#1ea952] text-[10px] font-bold border border-[#25d366]/30">
                      Active Intakes
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Card 1: 4.9★ Google Reviews */}
              <div className="absolute -top-3 -left-3 sm:-left-5 px-4 py-2 rounded-2xl bg-white border border-[#e2e8f0] shadow-lg flex items-center gap-2.5 animate-float-gentle">
                <span className="text-base">⭐</span>
                <div>
                  <p className="text-xs font-bold text-[#0e1a2b]">4.9 / 5.0 Rating</p>
                  <p className="text-[10px] text-[#52637a]">450+ Google Reviews</p>
                </div>
              </div>

              {/* Floating Card 2: 98% Interview Callbacks */}
              <div className="absolute -bottom-3 -right-3 sm:-right-5 px-4 py-2 rounded-2xl bg-white border border-[#e2e8f0] shadow-lg flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#e8f9ef] flex items-center justify-center text-[#1ea952] font-bold text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0e1a2b]">98% Callbacks</p>
                  <p className="text-[10px] text-[#52637a]">Within 30-45 Days</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
