import type { Metadata } from "next";
import { LegalPageView } from "@/components/LegalPageView";
import { editorialPolicy } from "@/lib/content/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: editorialPolicy.title,
  description: editorialPolicy.lead,
  path: "/editorial-policy",
});

export default function Page() {
  return <LegalPageView doc={editorialPolicy} />;
}
