import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryServiceView } from "@/components/CountryViews";
import { COUNTRY_BUNDLES, getBundle, getCountryService } from "@/lib/country-content";
import { pageMetadata, serviceCluster } from "@/lib/seo";

type Params = { country: string; service: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return COUNTRY_BUNDLES.flatMap((b) => b.services.map((s) => ({ country: b.country, service: s.service })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { country, service } = await params;
  const svc = getCountryService(country, service);
  if (!svc) return {};
  return pageMetadata({
    title: svc.metaTitle,
    description: svc.metaDescription,
    path: `/${country}/${service}`,
    languages: serviceCluster(service),
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { country, service } = await params;
  const bundle = getBundle(country);
  const svc = getCountryService(country, service);
  if (!bundle || !svc) notFound();
  return <CountryServiceView bundle={bundle} svc={svc} />;
}
