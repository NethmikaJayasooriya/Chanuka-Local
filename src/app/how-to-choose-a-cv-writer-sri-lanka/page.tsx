import { LkGuideView } from "@/components/LkGuideView";
import { chooseCvWriter } from "@/lib/content/lk/choose-cv-writer";
import { lkGuideMetadata } from "@/lib/content/lk/meta";

export const metadata = lkGuideMetadata(chooseCvWriter);

export default function Page() {
  return <LkGuideView guide={chooseCvWriter} />;
}
