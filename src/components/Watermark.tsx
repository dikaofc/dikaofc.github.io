// Full-page tile of "dikacode" at ~3% opacity, above every section (z-[70])
// without blocking interaction, so it lands in screenshots.
export default function Watermark() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] h-full w-full text-fog opacity-[0.03]"
    >
      <defs>
        <pattern
          id="dika-watermark"
          width="300"
          height="300"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(-14)"
        >
          <text
            x="18"
            y="175"
            fontSize="30"
            fontWeight="700"
            fontFamily="'Geist Mono', ui-monospace, monospace"
            fill="currentColor"
          >
            dikacode
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dika-watermark)" />
    </svg>
  );
}
