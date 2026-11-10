import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OriginView } from "@/components/CountryViews";
import { COUNTRY_BUNDLES, getBundle, getOrigin } from "@/lib/country-content";
import { pageMetadata } from "@/lib/seo";

type Params = { country: string; origin: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return COUNTRY_BUNDLES.flatMap((b) => b.origins.map((o) => ({ country: b.country, origin: `from-${o.origin}` })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { country, origin } = await params;
  const o = getOrigin(country, origin);
  if (!o) return {};
  return pageMetadata({
    title: o.metaTitle,
    description: o.metaDescription,
    path: `/${country}/international-job-seekers/${origin}`,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { country, origin } = await params;
  const b = getBundle(country);
  const o = getOrigin(country, origin);
  if (!b || !o) notFound();
  return <OriginView bundle={b} o={o} />;
}
