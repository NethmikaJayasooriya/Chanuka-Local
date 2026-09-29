import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { DirectoryHub } from "@/components/DirectoryHub";
import { careerLevels } from "@/lib/career-stages";

export const metadata: Metadata = pageMetadata({
  title: "Career levels",
  description: "CV guidance by seniority: graduate, professional, senior professional and executive. What each level has to prove and what stops working.",
  path: "/career-levels",
});

export default function CareerLevelsHub() {
  return (
    <DirectoryHub
      eyebrow="Career levels"
      title="What your CV has to prove changes with seniority."
      lead="A graduate CV argues potential. An executive CV argues judgement and results. Using the same structure for both is the most common reason a CV stops working after a promotion."
      crumbs={[{ label: "Career levels" }]}
      items={careerLevels.map((l) => ({
        href: `/career-levels/${l.slug}`,
        name: l.name,
        blurb: l.lead,
        meta: l.years,
      }))}
      related={[
        { href: "/job-roles", label: "Job roles" },
        { href: "/career-situations", label: "Career situations" },
        { href: "/packages", label: "Packages and pricing" },
      ]}
    />
  );
}
