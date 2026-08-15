import { Send, ChevronRight, Sparkles } from "lucide-react";
import DigitalCore from "./DigitalCore";
import Reveal from "../../components/Reveal";

const TELEGRAM = "https://t.me/dikaacode";

const HUD_CHIPS = ["WEB", "BOT", "TOOLS", "AUTOMATION", "MAINTENANCE"];

export default function LayananHero() {
  return (
    <section
      id="open-jasa"
      className="relative overflow-hidden border-b-4 border-fog bg-panel hero-glow transition-colors duration-300"
    >
      <div className="absolute inset-0 dots-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      {/* holographic digital globe — centerpiece on desktop, faint backdrop on mobile */}
      <DigitalCore className="absolute inset-y-0 right-0 w-full md:w-[58%] opacity-20 md:opacity-90 pointer-events-none" />

      {/* soft cyan halo behind the content column */}
      <div
        className="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-neon/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-xl space-y-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 nb-border bg-paper text-ink px-3 py-1.5 rounded-md font-mono text-xs md:text-sm font-bold nb-shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green blink pulse-glow" />
              DIKACODE — DIGITAL SOLUTION &amp; CODE
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.92] text-fog">
              OPEN{" "}
              <span className="inline-block bg-paper text-ink px-3 md:px-5 -rotate-2 nb-shadow-lg transition-transform duration-300 pointer-fine:hover:rotate-0 text-glow-yellow">
                JASA
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-display text-xl md:text-2xl text-neon text-glow-cyan tracking-wide">
              Solusi Digital Terbaik Untuk Kebutuhanmu
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="font-body font-medium text-base md:text-lg text-mute max-w-md leading-relaxed">
              Bangun, kembangkan, dan optimalkan solusi digital sesuai kebutuhanmu — website, bot,
              tools, hingga perbaikan sistem.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap gap-3 md:gap-4 pt-1">
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-base md:text-lg px-5 py-3 md:px-6 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
              >
                <Send size={18} strokeWidth={2.5} aria-hidden="true" />
                KONSULTASI SEKARANG
              </a>
              <a
                href="#layanan"
                className="inline-flex items-center gap-2 nb-border-thick bg-card text-fog font-display text-base md:text-lg px-5 py-3 md:px-6 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
              >
                Lihat Layanan
                <ChevronRight size={18} strokeWidth={2.5} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-2 pt-2">
              {HUD_CHIPS.map((chip, i) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 border border-line bg-card/60 backdrop-blur-sm rounded-md px-2.5 py-1 font-mono text-[10px] md:text-xs font-bold text-mute transition-colors duration-200 pointer-fine:hover:border-neon/50 pointer-fine:hover:text-neon"
                  style={{ animation: `hudIn 0.5s ease-out ${0.45 + i * 0.08}s both` }}
                >
                  <Sparkles size={10} strokeWidth={2.5} className="text-paper" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={480}>
            <p className="font-mono text-xs md:text-sm text-mute pt-2">
              Telegram: <span className="text-fog font-bold">@dikaacode</span>
            </p>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes hudIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
