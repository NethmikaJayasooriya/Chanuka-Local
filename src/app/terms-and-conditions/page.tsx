import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/LegalPageView";
import { getLegalDoc } from "@/lib/legal";

const doc = getLegalDoc("terms-and-conditions");

export const metadata: Metadata = pageMetadata({
  title: doc?.title ?? "",
  description: doc?.lead ?? "",
  path: "/terms-and-conditions",
});

export default function Page() {
  if (!doc) notFound();
  return <LegalPageView doc={doc} />;
}
