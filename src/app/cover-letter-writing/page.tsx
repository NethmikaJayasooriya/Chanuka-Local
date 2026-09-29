import { pageMetadata, serviceCluster } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageView } from "@/components/ServicePageView";
import { getService } from "@/lib/services";

const service = getService("cover-letter-writing");

export const metadata: Metadata = pageMetadata({
  title: service?.metaTitle ?? "",
  description: service?.metaDescription ?? "",
  path: "/cover-letter-writing",
  languages: serviceCluster("cover-letter-writing"),
});

export default function Page() {
  if (!service) notFound();
  return <ServicePageView service={service} />;
}
