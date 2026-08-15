import { Send } from "lucide-react";
import Reveal from "../../components/Reveal";

const TELEGRAM = "https://t.me/dikaacode";

export default function LayananCta() {
  return (
    <section
      id="konsultasi"
      className="relative overflow-hidden border-b-4 border-fog bg-panel transition-colors duration-300"
    >
      <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <Reveal>
          <div className="cta-panel relative overflow-hidden rounded-3xl border border-neon/30 bg-card/70 backdrop-blur-xl px-6 py-12 md:py-20 text-center">
            {/* corner HUD accents */}
            <span
              className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-neon/60 rounded-tl-lg"
              aria-hidden
            />
            <span
              className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-neon/60 rounded-tr-lg"
              aria-hidden
            />
            <span
              className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-neon/60 rounded-bl-lg"
              aria-hidden
            />
            <span
              className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-neon/60 rounded-br-lg"
              aria-hidden
            />

            <div className="relative max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] md:text-xs font-bold text-neon border border-neon/40 bg-neon/10 rounded-md px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-neon blink" aria-hidden />
                COMMAND_PANEL // ONLINE
              </div>

              <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-fog">
                SIAP MEMBANGUN{" "}
                <span className="text-neon text-glow-cyan">SOLUSI DIGITALMU?</span>
              </h2>

              <p className="font-body font-medium text-sm md:text-lg text-mute leading-relaxed">
                Diskusikan ide, kebutuhan, atau project kamu bersama DIKACODE.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
                >
                  <Send size={18} strokeWidth={2.5} aria-hidden="true" />
                  CHAT DI TELEGRAM
                </a>
                <span className="font-mono text-sm md:text-base text-fog border border-line bg-panel/80 rounded-lg px-4 py-3">
                  @<span className="font-bold text-paper">dikaacode</span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
