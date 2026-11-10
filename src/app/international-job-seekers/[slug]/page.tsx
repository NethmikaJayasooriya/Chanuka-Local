import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingOverride } from "@/components/LandingOverride";
import { getPublishedLanding } from "@/lib/landing";
import { CorridorPageView } from "@/components/CorridorPageView";
import { corridors, getCorridor } from "@/lib/corridors";

export function generateStaticParams() {
  return corridors.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const _ov = await getPublishedLanding("corridor", slug);
  if (_ov) {
    return pageMetadata({ title: _ov.meta_title || _ov.title, description: _ov.meta_description || _ov.title, noindex: !!_ov.noindex, path: `/international-job-seekers/${slug}` });
  }
  const corridor = getCorridor(slug);
  if (!corridor) return {};
  return pageMetadata({ title: corridor.metaTitle, description: corridor.metaDescription, path: `/international-job-seekers/${corridor.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const _ovp = await getPublishedLanding("corridor", slug);
  if (_ovp) return <LandingOverride page={_ovp} />;
  const corridor = getCorridor(slug);
  if (!corridor) notFound();
  return <CorridorPageView corridor={corridor} />;
}
