import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryAdviceHubView } from "@/components/CountryViews";
import { COUNTRY_BUNDLES, getBundle } from "@/lib/country-content";
import { pageMetadata } from "@/lib/seo";

type Params = { country: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return COUNTRY_BUNDLES.map((b) => ({ country: b.country }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { country } = await params;
  const b = getBundle(country);
  if (!b) return {};
  const doc = b.market.docType === "Resume" ? "Resume" : "CV";
  return pageMetadata({
    title: `${b.market.adjective} ${doc} and Career Advice`,
    description: b.adviceHubIntro.slice(0, 155).replace(/\s+\S*$/, "") + ".",
    path: `/${country}/career-advice`,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { country } = await params;
  const b = getBundle(country);
  if (!b) notFound();
  return <CountryAdviceHubView bundle={b} />;
}
