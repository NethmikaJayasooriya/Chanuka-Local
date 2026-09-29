import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingOverride } from "@/components/LandingOverride";
import { getPublishedLanding } from "@/lib/landing";
import { CareerLevelPageView } from "@/components/CareerLevelPageView";
import { careerLevels, getCareerLevel } from "@/lib/career-stages";

export function generateStaticParams() {
  return careerLevels.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const _ov = await getPublishedLanding("career-level", slug);
  if (_ov) {
    return pageMetadata({ title: _ov.meta_title || _ov.title, description: _ov.meta_description || _ov.title, noindex: !!_ov.noindex, path: `/career-levels/${slug}` });
  }
  const level = getCareerLevel(slug);
  if (!level) return {};
  return pageMetadata({ title: level.metaTitle, description: level.metaDescription, path: `/career-levels/${level.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const _ovp = await getPublishedLanding("career-level", slug);
  if (_ovp) return <LandingOverride page={_ovp} />;
  const level = getCareerLevel(slug);
  if (!level) notFound();
  return <CareerLevelPageView level={level} />;
}
