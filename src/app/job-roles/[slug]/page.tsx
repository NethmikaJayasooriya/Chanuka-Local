import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingOverride } from "@/components/LandingOverride";
import { getPublishedLanding } from "@/lib/landing";
import { JobRolePageView } from "@/components/JobRolePageView";
import { getJobRole, jobRoles } from "@/lib/job-roles";

export function generateStaticParams() {
  return jobRoles.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const _ov = await getPublishedLanding("job-role", slug);
  if (_ov) {
    return pageMetadata({ title: _ov.meta_title || _ov.title, description: _ov.meta_description || _ov.title, noindex: !!_ov.noindex, path: `/job-roles/${slug}` });
  }
  const role = getJobRole(slug);
  if (!role) return {};
  return pageMetadata({ title: role.metaTitle, description: role.metaDescription, path: `/job-roles/${role.slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const _ovp = await getPublishedLanding("job-role", slug);
  if (_ovp) return <LandingOverride page={_ovp} />;
  const role = getJobRole(slug);
  if (!role) notFound();
  return <JobRolePageView role={role} />;
}
