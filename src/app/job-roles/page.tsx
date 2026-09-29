import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { DirectoryHub } from "@/components/DirectoryHub";
import { jobRoles } from "@/lib/job-roles";

export const metadata: Metadata = pageMetadata({
  title: "Job roles",
  description: "CV guidance by profession: what employers screen for, achievement examples, ATS keywords and the mistakes that cost interviews in each role.",
  path: "/job-roles",
});

export default function JobRolesHub() {
  return (
    <DirectoryHub
      eyebrow="Job roles"
      title="CV guidance written for your profession."
      lead="A generic CV guide cannot tell a Software Engineer what a hiring engineer looks for, or an Accountant which three things get checked first. These pages can."
      crumbs={[{ label: "Job roles" }]}
      grouped
      items={jobRoles.map((r) => ({
        href: `/job-roles/${r.slug}`,
        name: r.name,
        blurb: r.lead,
        group: r.category,
      }))}
      note="More professions are added as there is genuinely role-specific guidance to publish. A page that only swaps the job title into a generic sentence helps nobody, so it does not go up."
      related={[
        { href: "/industries", label: "Industries" },
        { href: "/career-levels", label: "Career levels" },
        { href: "/career-situations", label: "Career situations" },
        { href: "/cv-writing", label: "CV writing service" },
      ]}
    />
  );
}
