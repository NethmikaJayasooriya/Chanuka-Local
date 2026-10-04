import type { Metadata } from "next";
import { abs, pageMetadata } from "@/lib/seo";
import type { LkGuide } from "./types";

/** Metadata for a Sri Lanka guide, with an en-LK / si-LK hreflang pair when a translation exists. */
export function lkGuideMetadata(guide: LkGuide): Metadata {
  const path = `/${guide.slug}`;
  let languages: Record<string, string> | undefined;
  if (guide.alternate) {
    const en = guide.lang === "en" ? path : `/${guide.alternate.slug}`;
    const si = guide.lang === "si" ? path : `/${guide.alternate.slug}`;
    languages = { "en-LK": abs(en), "si-LK": abs(si), "x-default": abs(en) };
  }
  return pageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path,
    languages,
    absoluteTitle: true,
    type: "article",
    publishedTime: guide.published,
    modifiedTime: guide.updated,
    locale: guide.lang === "si" ? "si_LK" : "en_LK",
  });
}
