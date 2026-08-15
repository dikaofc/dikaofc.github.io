import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Cta = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

type Props = {
  /** mono chip above the title, e.g. "// TENTANG DIKACODE" */
  chip: string;
  title: ReactNode;
  desc?: string;
  ctas?: Cta[];
  /** optional extra content below the CTAs (e.g. platform chips) */
  children?: ReactNode;
};

/**
 * Futuristic page header used at the top of every subpage:
 * glass panel, cyan glow, chip, big display title, optional CTAs.
 */
export default function PageHero({ chip, title, desc, ctas, children }: Props) {
  return (
    <section className="relative overflow-hidden border-b-4 border-fog bg-panel hero-glow transition-colors duration-300">
      <div className="absolute inset-0 dots-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div
        className="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-neon/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl space-y-6">
          <Reveal>
            <div className="inline-flex items-center gap-2 nb-border bg-paper text-ink px-3 py-1.5 rounded-md font-mono text-xs md:text-sm font-bold nb-shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green blink pulse-glow" />
              {chip}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-fog">
              {title}
            </h1>
          </Reveal>

          {desc && (
            <Reveal delay={160}>
              <p className="font-body font-medium text-base md:text-lg text-mute leading-relaxed max-w-xl">
                {desc}
              </p>
            </Reveal>
          )}

          {ctas && ctas.length > 0 && (
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3 md:gap-4 pt-1">
                {ctas.map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target={cta.external ? "_blank" : undefined}
                    rel={cta.external ? "noopener noreferrer" : undefined}
                    className={
                      cta.primary
                        ? "nb-border-thick bg-neon text-ink font-display text-sm md:text-base px-5 py-3 md:px-6 md:py-3.5 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
                        : "nb-border-thick bg-card text-fog font-display text-sm md:text-base px-5 py-3 md:px-6 md:py-3.5 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
                    }
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </Reveal>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
