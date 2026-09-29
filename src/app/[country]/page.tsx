import { homeCluster, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingOverride } from "@/components/LandingOverride";
import { getPublishedLanding } from "@/lib/landing";
import { CountryPageView } from "@/components/CountryPageView";
import { getAllCountrySlugs, getCountry } from "@/lib/countries";

export function generateStaticParams() {
  return getAllCountrySlugs().map((slug) => ({ country: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string }>;
}): Promise<Metadata> {
  const { country: slug } = await params;
  const _ov = await getPublishedLanding("country", slug);
  if (_ov) {
    return pageMetadata({ title: _ov.meta_title || _ov.title, description: _ov.meta_description || _ov.title, noindex: !!_ov.noindex, path: `/${slug}` });
  }
  const country = getCountry(slug);
  if (!country) return {};
  return pageMetadata({
    title: country.metaTitle,
    description: country.metaDescription,
    path: `/${country.slug}`,
    languages: homeCluster(),
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const _ovp = await getPublishedLanding("country", slug);
  if (_ovp) return <LandingOverride page={_ovp} />;
  const country = getCountry(slug);
  if (!country) notFound();
  return <CountryPageView country={country} />;
}
