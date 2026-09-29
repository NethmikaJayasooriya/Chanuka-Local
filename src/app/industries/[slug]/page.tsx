import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingOverride } from "@/components/LandingOverride";
import { getPublishedLanding } from "@/lib/landing";
import { IndustryPageView } from "@/components/IndustryPageView";
import { getIndustry, industries } from "@/lib/industries";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const _ov = await getPublishedLanding("industry", slug);
  if (_ov) {
    return pageMetadata({ title: _ov.meta_title || _ov.title, description: _ov.meta_description || _ov.title, noindex: !!_ov.noindex, path: `/industries/${slug}` });
  }
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({ title: industry.metaTitle, description: industry.metaDescription, path: `/industries/${industry.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const _ovp = await getPublishedLanding("industry", slug);
  if (_ovp) return <LandingOverride page={_ovp} />;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  return <IndustryPageView industry={industry} />;
}
