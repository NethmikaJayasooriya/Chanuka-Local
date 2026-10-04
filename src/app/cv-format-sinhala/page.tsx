import { Noto_Sans_Sinhala } from "next/font/google";
import { LkGuideView } from "@/components/LkGuideView";
import { cvFormatSinhala } from "@/lib/content/lk/cv-format-sinhala";
import { lkGuideMetadata } from "@/lib/content/lk/meta";

/** Sinhala glyphs; Latin text keeps the site font through the fallback stack in globals.css. */
const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = lkGuideMetadata(cvFormatSinhala);

export default function Page() {
  return (
    <div className={sinhala.variable}>
      <LkGuideView guide={cvFormatSinhala} />
    </div>
  );
}
