import type { Metadata } from "next";
import { DirectoryHub } from "@/components/DirectoryHub";
import { corridors } from "@/lib/corridors";
import { COUNTRY_BUNDLES } from "@/lib/country-content";
import { pageMetadata } from "@/lib/seo";

const REGION: Record<string, string> = {
  uk: "Europe",
  usa: "North America",
  canada: "North America",
  australia: "Asia-Pacific",
  "new-zealand": "Asia-Pacific",
  singapore: "Asia-Pacific",
  uae: "Middle East",
};

export const metadata: Metadata = pageMetadata({
  title: "Applying for Jobs Abroad: CV Guidance by Country",
  description:
    "CV conventions by destination: UK, USA, Australia, Canada, NZ, UAE, Singapore and the Gulf. What changes when you apply abroad, including from Sri Lanka and India.",
  path: "/international-job-seekers",
});

export default function InternationalHub() {
  return (
    <DirectoryHub
      eyebrow="International job seekers"
      title="Your CV, written for the market you are applying into."
      lead="A CV that works in one country can quietly fail in another. Length, photo, personal details and tone all change across markets, and so does what employers screen for first. These pages set out what changes, by destination."
      crumbs={[{ label: "International job seekers" }]}
      grouped
      items={[
        ...COUNTRY_BUNDLES.flatMap((b) => [
          {
            href: `/${b.country}/international-job-seekers`,
            name: `Applying to ${b.market.name}`,
            blurb: b.ijsHub.lead,
            group: REGION[b.country] ?? "Other",
          },
          ...b.origins.map((o) => ({
            href: `/${b.country}/international-job-seekers/from-${o.origin}`,
            name: `${b.market.name} from ${o.originName}`,
            blurb: o.lead,
            group: REGION[b.country] ?? "Other",
          })),
        ]),
        ...corridors.map((c) => ({
          href: `/international-job-seekers/${c.slug}`,
          name: c.name,
          blurb: c.lead,
          group: c.region,
        })),
      ]}
      note="Every destination page is written to that market's real CV conventions, not a template with the country name swapped in. Visa notes are orientation only and never immigration advice. More corridors are added as there is genuinely market-specific guidance to publish."
      related={[
        { href: "/job-roles", label: "Job roles" },
        { href: "/industries", label: "Industries" },
        { href: "/career-situations", label: "Career situations" },
        { href: "/cv-writing", label: "CV writing service" },
      ]}
      ctaHeading="Applying abroad? Get the CV right for that market."
    />
  );
}
