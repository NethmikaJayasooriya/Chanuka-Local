import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IjsHubView } from "@/components/CountryViews";
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
  return pageMetadata({
    title: b.ijsHub.metaTitle,
    description: b.ijsHub.metaDescription,
    path: `/${country}/international-job-seekers`,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { country } = await params;
  const b = getBundle(country);
  if (!b) notFound();
  return <IjsHubView bundle={b} hub={b.ijsHub} />;
}
