import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPageView } from "@/components/LegalPageView";
import { getLegalDoc } from "@/lib/legal";

const doc = getLegalDoc("privacy-policy");

export const metadata: Metadata = pageMetadata({
  title: doc?.title ?? "",
  description: "How Chanuka Jeewantha collects, uses and protects your personal data and CV when you order CV, resume, LinkedIn or cover letter writing services.",
  path: "/privacy-policy",
});

export default function Page() {
  if (!doc) notFound();
  return <LegalPageView doc={doc} />;
}
