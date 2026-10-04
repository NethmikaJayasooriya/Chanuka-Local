import { LkGuideView } from "@/components/LkGuideView";
import { cvFormatSriLanka } from "@/lib/content/lk/cv-format-sri-lanka";
import { lkGuideMetadata } from "@/lib/content/lk/meta";

export const metadata = lkGuideMetadata(cvFormatSriLanka);

export default function Page() {
  return <LkGuideView guide={cvFormatSriLanka} />;
}
