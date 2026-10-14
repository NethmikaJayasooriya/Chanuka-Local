import { LinkedInChecklist } from "@/components/LinkedInChecklist";
import { LkGuideView } from "@/components/LkGuideView";
import { linkedinProfileGuide } from "@/lib/content/lk/linkedin-profile";
import { lkGuideMetadata } from "@/lib/content/lk/meta";

export const metadata = lkGuideMetadata(linkedinProfileGuide);

export default function Page() {
  return <LkGuideView guide={linkedinProfileGuide} worksheet={<LinkedInChecklist />} />;
}
