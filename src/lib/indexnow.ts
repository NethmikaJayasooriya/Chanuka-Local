import { abs } from "@/lib/seo";

/**
 * IndexNow: tells Bing (and Yandex, Seznam, Naver, which share the
 * protocol) about new or changed URLs immediately instead of waiting to
 * be recrawled. Bing's index also feeds ChatGPT search and Copilot.
 * The key file lives at /public/88c9511b6c1b2ef4367246561ddee2c9.txt.
 */
export const INDEXNOW_KEY = "88c9511b6c1b2ef4367246561ddee2c9";

export async function submitToIndexNow(paths: string[]): Promise<void> {
  if (process.env.NODE_ENV !== "production" || paths.length === 0) return;
  const host = new URL(abs("/")).host;
  try {
    await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: abs(`/${INDEXNOW_KEY}.txt`),
        urlList: paths.map((p) => abs(p)).slice(0, 10000),
      }),
      signal: AbortSignal.timeout(5000),
    });
  } catch {
    // Never block a publish on the ping.
  }
}
