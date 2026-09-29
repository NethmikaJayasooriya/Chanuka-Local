import type { Metadata } from "next";
import { LegalPageView } from "@/components/LegalPageView";
import { cookiePolicy } from "@/lib/content/resources";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: cookiePolicy.title,
  description: "Which cookies chanukajeewantha.com sets: strictly necessary only, no advertising or analytics cookies. How cookies are used and how to control them.",
  path: "/cookie-policy",
});

export default function Page() {
  return <LegalPageView doc={cookiePolicy} />;
}
