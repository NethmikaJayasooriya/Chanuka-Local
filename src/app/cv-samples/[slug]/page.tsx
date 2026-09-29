import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingOverride } from "@/components/LandingOverride";
import { getPublishedLanding } from "@/lib/landing";
import { CvSamplePageView } from "@/components/CvSamplePageView";
import { cvSamples, getCvSample } from "@/lib/cv-samples";

export function generateStaticParams() {
  return cvSamples.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const _ov = await getPublishedLanding("cv-sample", slug);
  if (_ov) {
    return pageMetadata({ title: _ov.meta_title || _ov.title, description: _ov.meta_description || _ov.title, noindex: !!_ov.noindex, path: `/cv-samples/${slug}` });
  }
  const sample = getCvSample(slug);
  if (!sample) return {};
  return pageMetadata({ title: sample.metaTitle, description: sample.metaDescription, path: `/cv-samples/${sample.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const _ovp = await getPublishedLanding("cv-sample", slug);
  if (_ovp) return <LandingOverride page={_ovp} />;
  const sample = getCvSample(slug);
  if (!sample) notFound();
  return <CvSamplePageView sample={sample} />;
}
