import { homeCluster, pageMetadata } from "@/lib/seo";
import { Configurator } from "@/components/Configurator";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { SriLankaGuides } from "@/components/SriLankaGuides";
import { TrustBar } from "@/components/TrustBar";


export const metadata = pageMetadata({
  title: "CV Writing Service in Sri Lanka | Chanuka Jeewantha, CPRW",
  absoluteTitle: true,
  description:
    "CPRW & CPCC certified CV writer in Sri Lanka. ATS CVs from LKR 3,950, foreign job CVs and LinkedIn, written personally by Chanuka. 4.9 from 107 Google reviews.",
  path: "/",
  languages: homeCluster(),
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Configurator />
      <Services />
      <Process />
      <Reviews />
      <SriLankaGuides />
      <Faq />
      <CtaBand />
    </>
  );
}
