/**
 * Invisible-style watermark: a full-page tile of "dikacode ✦" at ~3%
 * opacity. Imperceptible while browsing, but present in screenshots.
 * Color follows the theme (text-fog + currentColor) and the layer
 * sits above every section (z-[70]) without blocking interaction.
 */
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
            fontFamily="'JetBrains Mono', monospace"
            fill="currentColor"
          >
            dikacode ✦
          </text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dika-watermark)" />
    </svg>
  );
}
