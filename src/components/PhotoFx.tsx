/**
 * Premium photo overlay. Dropped inside any image container (which must
 * be `relative overflow-hidden`), directly after the <Image>, to lift a
 * flat photo: a warm corner glow, a grounding vignette, a top sheen and
 * a glassy inset edge. Pure decoration, so it is aria-hidden and does
 * not intercept pointer events.
 */
export function PhotoFx({ warm = true }: { warm?: boolean }) {
  return (
    <>
      {/* warm brand-gold glow in a corner, so the photo is never flat */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: warm
            ? "radial-gradient(70% 55% at 84% 6%, rgba(185,134,47,0.20), transparent 58%)"
            : "radial-gradient(70% 55% at 84% 6%, rgba(23,53,92,0.22), transparent 58%)",
        }}
      />
      {/* grounding vignette at the base, adds depth and seats the image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(14,26,43,0.34), rgba(14,26,43,0) 46%)",
        }}
      />
      {/* soft sheen across the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)",
        }}
      />
      {/* glassy inset edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/12"
      />
    </>
  );
}
