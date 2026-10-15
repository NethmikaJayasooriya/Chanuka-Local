import { site } from "@/lib/site";

export class InputError extends Error {
  constructor(public reason: string, public status = 400) { super(reason); }
}

/** Browser writes must originate on this site. Missing Origin supports direct API clients. */
export function assertSameOrigin(request: Request) {
  const fetchSite = request.headers.get("sec-fetch-site");
  const origin = request.headers.get("origin");
  if ((fetchSite && fetchSite !== "same-origin") ||
      (origin && ![new URL(request.url).origin, site.url].includes(origin))) {
    throw new InputError("invalid_origin", 403);
  }
}

export async function readLimitedBody(request: Request, maxBytes: number) {
  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > maxBytes) throw new InputError("payload_too_large", 413);
  const chunks: Uint8Array[] = [];
  let total = 0;
  const reader = request.body?.getReader();
  if (reader) {
    try {
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > maxBytes) {
          await reader.cancel();
          throw new InputError("payload_too_large", 413);
        }
        chunks.push(value);
      }
    } finally { reader.releaseLock(); }
  }
  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return bytes;
}

export async function readJsonBody(request: Request, maxBytes = 16_384): Promise<Record<string, unknown>> {
  assertSameOrigin(request);
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") {
    throw new InputError("unsupported_media_type", 415);
  }
  const bytes = await readLimitedBody(request, maxBytes);
  let body;
  try { body = JSON.parse(new TextDecoder().decode(bytes)); }
  catch { throw new InputError("bad_request"); }
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new InputError("bad_request");
  return body;
}

export function inputText(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
