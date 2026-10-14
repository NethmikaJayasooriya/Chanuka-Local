import { homeCluster, pageMetadata, webPageLd } from "@/lib/seo";
import { JsonLd } from "@/components/Seo";
import { LocalExpertise } from "@/components/LocalExpertise";
import { site } from "@/lib/site";
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
  title: "CV Writer & LinkedIn Optimization Sri Lanka | Chanuka Jeewantha",
  absoluteTitle: true,
  description:
    `CPRW & CPCC certified CV writing and LinkedIn optimization in Sri Lanka. Personally written by Chanuka. From LKR 3,950; ${site.rating.score}/5 from ${site.rating.count} Google reviews.`,
  path: "/",
  languages: homeCluster(),
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageLd({ name: "CV writing and LinkedIn optimization in Sri Lanka", description: site.tagline, path: "/" })} />
      <Hero />
      <TrustBar />
      <LocalExpertise />
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
