/**
 * "Diko" — tiny neobrutal robot mascot.
 * Blinking eyes, glowing antenna, waving arm, gentle bobbing.
 * Decorative only (aria-hidden, pointer-events-none).
 */
export default function Mascot() {
  return (
    <div
      className="pointer-events-none absolute -top-10 -right-3 md:-right-6 z-10"
      aria-hidden="true"
    >
      <div
        className="relative"
        style={{ animation: "mascot-float 3.6s ease-in-out infinite" }}
      >
        {/* antenna */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-1 bg-ink" />
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-pink"
          style={{ animation: "blink 1.5s steps(2) infinite" }}
        />

        {/* head */}
        <div className="nb-border-thick nb-shadow-sm relative grid h-16 w-16 place-items-center rounded-2xl bg-paper md:h-20 md:w-20">
          {/* eyes */}
          <div className="flex gap-2.5">
            <span
              className="h-3 w-3 rounded-sm bg-ink"
              style={{ animation: "mascot-blink 3.4s ease-in-out infinite" }}
            />
            <span
              className="h-3 w-3 rounded-sm bg-ink"
              style={{ animation: "mascot-blink 3.4s ease-in-out infinite 0.08s" }}
            />
          </div>

          {/* mouth */}
          <div className="absolute bottom-3 left-1/2 h-2 w-5 -translate-x-1/2 rounded-sm bg-ink" />

          {/* cheeks */}
          <span className="absolute bottom-4 left-2.5 h-2 w-2 rounded-full bg-pink opacity-70" />
          <span className="absolute bottom-4 right-2.5 h-2 w-2 rounded-full bg-pink opacity-70" />
        </div>

        {/* waving arm */}
        <div
          className="absolute -left-4 bottom-2 h-5 w-2 rounded-sm bg-orange nb-border"
          style={{
            animation: "mascot-wave 1.8s ease-in-out infinite",
            transformOrigin: "top center",
          }}
        />
      </div>
    </div>
  );
}
