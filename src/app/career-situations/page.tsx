import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { DirectoryHub } from "@/components/DirectoryHub";
import { careerSituations } from "@/lib/career-stages";

export const metadata: Metadata = pageMetadata({
  title: "Career situations",
  description: "CV guidance for a specific situation: changing career, returning after a break, first job, applying abroad, or after redundancy.",
  path: "/career-situations",
});

export default function CareerSituationsHub() {
  return (
    <DirectoryHub
      eyebrow="Career situations"
      title="Sometimes the problem is not the job. It is the situation."
      lead="A career change, a gap, a first job or a move abroad each raise a specific objection in the reader's mind. These pages deal with the objection rather than pretending it is not there."
      crumbs={[{ label: "Career situations" }]}
      items={careerSituations.map((s) => ({
        href: `/career-situations/${s.slug}`,
        name: s.name,
        blurb: s.lead,
      }))}
      related={[
        { href: "/career-levels", label: "Career levels" },
        { href: "/job-roles", label: "Job roles" },
      ]}
    />
  );
}
