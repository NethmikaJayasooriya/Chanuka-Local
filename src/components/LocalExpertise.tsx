import Link from "next/link";
import { BASE_PRICES, formatLKR } from "@/lib/pricing";
import { site, whatsappUrl } from "@/lib/site";

export function LocalExpertise() {
  return (
    <section className="border-b border-line bg-paper py-12 sm:py-16 lg:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="eyebrow">Your next career move</p>
          <h1 className="display mt-3 max-w-[24ch] text-[clamp(1.7rem,3.6vw,2.6rem)] text-ink">CV writing and LinkedIn optimization in Sri Lanka.</h1>
          <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{site.name} is a CPRW and CPCC certified CV writer and career coach. Work directly with him on an ATS-friendly CV, LinkedIn profile or cover letter for a Sri Lankan employer or an overseas application. The service is online, with Sinhala and English communication and transparent prices in Sri Lankan rupees.</p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">Looking for the best CV writer for your goals? Compare qualifications, samples, independent reviews and what the price includes. <Link href="/how-to-choose-a-cv-writer-sri-lanka" className="text-brand underline underline-offset-2">Use the Sri Lanka CV writer checklist</Link> before you decide.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/cv-writing" className="rounded-full bg-brand px-5 py-3 text-[14px] font-semibold text-paper">Explore CV writing</Link>
            <Link href="/linkedin-optimisation" className="rounded-full border border-line-strong px-5 py-3 text-[14px] font-semibold text-brand">Explore LinkedIn optimization</Link>
          </div>
          <p lang="si-LK" className="mt-7 text-[15px] leading-loose text-muted">ශ්‍රී ලංකාවේ හෝ විදේශ රැකියාවකට apply කරන්න CV එක සහ LinkedIn profile එක සකස් කරගන්න. සිංහලෙන් හෝ English වලින් ඔබේ අවශ්‍යතාව සාකච්ඡා කරන්න පුළුවන්.</p>
        </div>
        <aside className="rounded-[20px] border border-line bg-surface p-6 sm:p-8">
          <h2 className="display text-[23px] text-ink">Know what you are choosing.</h2>
          <dl className="mt-5 divide-y divide-line text-[14px]">
            {[
              ["Your writer", "Chanuka Jeewantha, CPRW, CPCC"],
              ["CV writing", `From ${formatLKR(BASE_PRICES.cv["under-2"])}`],
              ["LinkedIn optimization", `From ${formatLKR(BASE_PRICES.linkedin["under-2"])}`],
              ["Delivery", "Standard: 48 to 72 hours; express options available"],
              ["Coverage", "Online across Sri Lanka, including Colombo, Kandy and Galle"],
              ["Revisions", "One revision round included"],
            ].map(([label, value]) => <div key={label} className="py-3"><dt className="text-[12px] font-semibold uppercase tracking-wide text-muted">{label}</dt><dd className="mt-1 text-ink">{value}</dd></div>)}
          </dl>
          <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block text-[14px] font-semibold text-brand underline underline-offset-2">{site.rating.score}/5 from {site.rating.count} Google reviews</a>
          <p className="mt-2 text-[12px] text-muted">Checked 14 October 2026. Read the latest on Google.</p>
          <a href={whatsappUrl("Hi Chanuka, I would like advice on a CV or LinkedIn package for my target role.")} className="mt-5 inline-flex text-[14px] font-semibold text-brand">Ask Chanuka on WhatsApp →</a>
        </aside>
      </div>
    </section>
  );
}
