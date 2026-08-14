import { cn } from "../utils/cn";

/**
 * "Diko & friends" — the neobrutal mascot family.
 * Purely decorative: aria-hidden + pointer-events-none, never blocks clicks.
 * Every character is flat CSS shapes with a thick border + offset shadow and
 * its own gentle animation (bob / hop / blink / wiggle). All animations are
 * killed by the global prefers-reduced-motion rule.
 */
export type MascotVariant = "diko" | "cat" | "bug" | "spark";

type Props = {
  variant?: MascotVariant;
  /** positioning classes for the absolute wrapper (overrides the default peek) */
  className?: string;
};

/** default "peeking over the avatar card" position (hero) */
const DEFAULT_POS = "-top-10 -right-3 md:-right-6";

export default function Mascot({ variant = "diko", className }: Props) {
  return (
    <div
      className={cn("pointer-events-none absolute z-10", className ?? DEFAULT_POS)}
      aria-hidden="true"
    >
      {variant === "diko" && <Diko />}
      {variant === "cat" && <Cat />}
      {variant === "bug" && <Bug />}
      {variant === "spark" && <Spark />}
    </div>
  );
}

/* ── shared face bits ─────────────────────────────────────────── */

function Eyes({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="h-1.5 w-1.5 rounded-full bg-ink"
        style={{ animation: "mascot-blink 3.2s ease-in-out infinite", animationDelay: `${delay}s` }}
      />
      <span
        className="h-1.5 w-1.5 rounded-full bg-ink"
        style={{ animation: "mascot-blink 3.2s ease-in-out infinite", animationDelay: `${delay + 0.08}s` }}
      />
    </div>
  );
}

function Smile({ w = "w-3" }: { w?: string }) {
  return <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 h-1 ${w} rounded-full bg-ink`} />;
}

/* ── 🤖 Diko — the main robot (original) ──────────────────────── */

function Diko() {
  return (
    <div className="relative" style={{ animation: "mascot-float 3.6s ease-in-out infinite" }}>
      {/* antenna */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-1 bg-ink" />
      <div
        className="absolute -top-6 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-pink"
        style={{ animation: "blink 1.5s steps(2) infinite" }}
      />

      {/* head */}
      <div className="nb-border-thick nb-shadow-sm relative grid h-16 w-16 place-items-center rounded-2xl bg-paper md:h-20 md:w-20">
        <Eyes />
        <Smile w="w-4" />
        <span className="absolute bottom-3.5 left-2.5 h-2 w-2 rounded-full bg-pink opacity-70" />
        <span className="absolute bottom-3.5 right-2.5 h-2 w-2 rounded-full bg-pink opacity-70" />
      </div>

      {/* waving arm */}
      <div
        className="absolute -left-4 bottom-2 h-5 w-2 rounded-sm bg-orange nb-border"
        style={{ animation: "mascot-wave 1.8s ease-in-out infinite", transformOrigin: "top center" }}
      />
    </div>
  );
}

/* ── 🐱 Cat — pointy ears, whiskers, wagging tail ─────────────── */

function Cat() {
  return (
    <div className="relative" style={{ animation: "mascot-bob 4.2s ease-in-out infinite 0.6s" }}>
      {/* tail */}
      <div
        className="absolute -right-4 top-2 h-5 w-2 rounded-sm bg-ink nb-border"
        style={{ animation: "mascot-tail 2.6s ease-in-out infinite", transformOrigin: "bottom center" }}
      />

      {/* ears (rotated squares) + pink inner */}
      <div className="absolute -top-2.5 -left-0.5 h-3.5 w-3.5 rotate-45 rounded-sm bg-paper nb-border" />
      <div className="absolute -top-2.5 -right-0.5 h-3.5 w-3.5 rotate-45 rounded-sm bg-paper nb-border" />
      <div className="absolute -top-1.5 left-0.5 h-1.5 w-1.5 rotate-45 rounded-[2px] bg-pink" />
      <div className="absolute -top-1.5 right-0.5 h-1.5 w-1.5 rotate-45 rounded-[2px] bg-pink" />

      {/* head */}
      <div className="nb-border-thick nb-shadow-sm relative grid h-14 w-14 place-items-center rounded-xl bg-paper">
        <Eyes delay={0.4} />
        <Smile w="w-2.5" />
        <span className="absolute bottom-2.5 left-2 h-1.5 w-1.5 rounded-full bg-pink opacity-70" />
        <span className="absolute bottom-2.5 right-2 h-1.5 w-1.5 rounded-full bg-pink opacity-70" />
        {/* whiskers */}
        <div className="absolute -left-1.5 top-1/2 h-[2px] w-3 -translate-y-1/2 bg-ink" />
        <div className="absolute -right-1.5 top-1/2 h-[2px] w-3 -translate-y-1/2 bg-ink" />
      </div>
    </div>
  );
}

/* ── 🐛 Bug — bug hunter: antennae wiggle, hops, spots ────────── */

function Bug() {
  return (
    <div className="relative" style={{ animation: "mascot-hop 3s ease-in-out infinite 0.3s" }}>
      {/* antennae */}
      <div
        className="absolute -top-3 left-1 h-3 w-1 rounded-full bg-ink"
        style={{ animation: "mascot-antenna 2.2s ease-in-out infinite", transformOrigin: "bottom center" }}
      />
      <div
        className="absolute -top-3 right-1 h-3 w-1 rounded-full bg-ink"
        style={{ animation: "mascot-antenna 2.2s ease-in-out infinite 0.4s", transformOrigin: "bottom center" }}
      />
      <div className="absolute -top-5 left-0 h-2 w-2 rounded-full bg-orange nb-border-soft" />
      <div className="absolute -top-5 right-0 h-2 w-2 rounded-full bg-orange nb-border-soft" />

      {/* body */}
      <div className="nb-border-thick nb-shadow-sm relative grid h-12 w-14 place-items-center rounded-2xl bg-pink">
        <Eyes delay={0.2} />
        <Smile w="w-3" />
        <span className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-ink opacity-60" />
        <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-ink opacity-60" />
      </div>

      {/* little legs */}
      <div className="absolute -bottom-2 -left-1.5 h-3 w-1.5 rounded-sm bg-ink rotate-12" />
      <div className="absolute -bottom-2 -right-1.5 h-3 w-1.5 rounded-sm bg-ink -rotate-12" />
    </div>
  );
}

/* ── ✦ Spark — smiling diamond that twinkles ─────────────────── */

function Spark() {
  return (
    <div className="relative" style={{ animation: "mascot-twinkle 2.8s ease-in-out infinite" }}>
      <div className="nb-border-thick nb-shadow-sm relative grid h-12 w-12 rotate-45 place-items-center rounded-md bg-paper">
        <div className="-rotate-45 flex flex-col items-center gap-1">
          <Eyes delay={0.8} />
          <span className="h-1 w-3 rounded-full bg-ink" />
        </div>
      </div>
    </div>
  );
}
