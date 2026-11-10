import { homeCluster, pageMetadata } from "@/lib/seo";
import { Configurator } from "@/components/Configurator";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";


export const metadata = pageMetadata({
  title: "Professional CV Writing for International Careers | Chanuka Jeewantha",
  absoluteTitle: true,
  description:
    "Founder-written, ATS-optimised CVs, resumes, cover letters and LinkedIn profiles for professionals applying in the UK, USA, Australia, Canada, NZ, UAE and Singapore.",
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
      <Faq />
      <CtaBand />
    </>
  );
}
