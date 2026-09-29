import { pageMetadata, serviceCluster } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/ServicePageView";
import { getService } from "@/lib/services";

const service = getService("cv-writing");

export const metadata: Metadata = pageMetadata({
  title: service?.metaTitle ?? "",
  description: service?.metaDescription ?? "",
  path: "/cv-writing",
  languages: serviceCluster("cv-writing"),
});

export default function Page() {
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
