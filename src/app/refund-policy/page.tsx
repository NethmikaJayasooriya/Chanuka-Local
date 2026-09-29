import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/LegalPageView";
import { getLegalDoc } from "@/lib/legal";

const doc = getLegalDoc("refund-policy");

export const metadata: Metadata = pageMetadata({
  title: doc?.title ?? "",
  description: "Refund, revision and cancellation terms for CV, resume, LinkedIn and cover letter writing orders with Chanuka Jeewantha. Clear, fair and published in full.",
  path: "/refund-policy",
});

export default function Page() {
  if (!doc) notFound();
  return <LegalPageView doc={doc} />;
}
