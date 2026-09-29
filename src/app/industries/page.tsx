import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { DirectoryHub } from "@/components/DirectoryHub";
import { industries } from "@/lib/industries";

export const metadata: Metadata = pageMetadata({
  title: "Industries",
  description: "CV guidance by industry: what hiring managers in each sector screen for, the conventions that differ, and the mistakes that weaken applications.",
  path: "/industries",
});

export default function IndustriesHub() {
  return (
    <DirectoryHub
      eyebrow="Industries"
      title="Every industry reads a CV differently."
      lead="Banking screens for regulatory exposure. Engineering screens for codes and project values. Healthcare screens for registration. Writing one CV for all of them is why strong candidates get no reply."
      crumbs={[{ label: "Industries" }]}
      items={industries.map((i) => ({
        href: `/industries/${i.slug}`,
        name: i.name,
        blurb: i.lead,
      }))}
      related={[
        { href: "/job-roles", label: "Job roles" },
        { href: "/career-levels", label: "Career levels" },
        { href: "/cv-writing", label: "CV writing service" },
      ]}
    />
  );
}
