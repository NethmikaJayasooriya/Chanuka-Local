import { LkGuideView } from "@/components/LkGuideView";
import { foreignJobCv } from "@/lib/content/lk/foreign-job-cv";
import { lkGuideMetadata } from "@/lib/content/lk/meta";

export const metadata = lkGuideMetadata(foreignJobCv);

export default function Page() {
  return <LkGuideView guide={foreignJobCv} />;
}
