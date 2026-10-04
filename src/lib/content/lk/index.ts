import { chooseCvWriter } from "./choose-cv-writer";
import { cvFormatSinhala } from "./cv-format-sinhala";
import { cvFormatSriLanka } from "./cv-format-sri-lanka";
import { foreignJobCv } from "./foreign-job-cv";
import type { LkGuide } from "./types";

export type { LkGuide } from "./types";

/** Sri Lanka pillar guides, in the order they are linked across the site. */
export const lkGuides: LkGuide[] = [cvFormatSriLanka, cvFormatSinhala, foreignJobCv, chooseCvWriter];

export function getLkGuide(slug: string): LkGuide | undefined {
  return lkGuides.find((g) => g.slug === slug);
}
