import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/ServicePageView";
import { getService } from "@/lib/services";

const service = getService("cv-review");

export const metadata: Metadata = pageMetadata({
  title: service?.metaTitle ?? "",
  description: service?.metaDescription ?? "",
  path: "/cv-review",
});

export default function Page() {
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
