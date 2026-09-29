import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { DirectoryHub } from "@/components/DirectoryHub";
import { cvSamples } from "@/lib/cv-samples";

export const metadata: Metadata = pageMetadata({
  title: "CV samples and structures",
  description: "Annotated CV structures by type and career stage: graduate, professional, executive, career change, international and ATS-friendly. The sections, the order, and why each one works.",
  path: "/cv-samples",
});

export default function CvSamplesHub() {
  return (
    <DirectoryHub
      eyebrow="CV samples"
      title="What a strong CV is actually built from."
      lead="These are not template files to copy. They are annotated structures: the sections each kind of CV should carry, in what order, and why. See the anatomy, then apply it to your own material."
      crumbs={[{ label: "CV samples" }]}
      items={cvSamples.map((s) => ({
        href: `/cv-samples/${s.slug}`,
        name: s.name,
        blurb: s.lead,
        meta: undefined,
      }))}
      note="We show structures rather than downloadable templates on purpose. A generic template with your details dropped in is exactly the CV that gets filtered. The structure is the useful part; the content has to be yours."
      related={[
        { href: "/job-roles", label: "Guidance by role" },
        { href: "/career-levels", label: "Career levels" },
        { href: "/international-job-seekers", label: "Applying abroad" },
        { href: "/cv-writing", label: "CV writing service" },
      ]}
      ctaHeading="Want yours built like this, properly?"
    />
  );
}
