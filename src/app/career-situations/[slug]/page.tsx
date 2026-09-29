import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingOverride } from "@/components/LandingOverride";
import { getPublishedLanding } from "@/lib/landing";
import { CareerSituationPageView } from "@/components/CareerSituationPageView";
import { careerSituations, getCareerSituation } from "@/lib/career-stages";

export function generateStaticParams() {
  return careerSituations.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const _ov = await getPublishedLanding("career-situation", slug);
  if (_ov) {
    return pageMetadata({ title: _ov.meta_title || _ov.title, description: _ov.meta_description || _ov.title, noindex: !!_ov.noindex, path: `/career-situations/${slug}` });
  }
  const situation = getCareerSituation(slug);
  if (!situation) return {};
  return pageMetadata({ title: situation.metaTitle, description: situation.metaDescription, path: `/career-situations/${situation.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const _ovp = await getPublishedLanding("career-situation", slug);
  if (_ovp) return <LandingOverride page={_ovp} />;
  const situation = getCareerSituation(slug);
  if (!situation) notFound();
  return <CareerSituationPageView situation={situation} />;
}
