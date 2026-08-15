import { Code2, Bot, Wrench, FileCode2, Send, ArrowRight } from "lucide-react";
import { SITE } from "../lib/site";

const chips = [
  { label: "WEBSITE", icon: Code2 },
  { label: "BOT", icon: Bot },
  { label: "TOOLS", icon: Wrench },
  { label: "MAINTENANCE", icon: FileCode2 },
];

/**
 * "OPEN JASA" CTA banner on the home page — directs visitors to the
 * /layanan page. Futuristic glass panel with neon glow.
 */
export default function OpenJasaBanner() {
  return (
    <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute -left-24 top-0 w-64 h-64 rounded-full bg-neon/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="relative overflow-hidden rounded-3xl border border-neon/30 bg-card/70 backdrop-blur-xl px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <span
            className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-neon/50 rounded-tl-lg"
            aria-hidden
          />
          <span
            className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-neon/50 rounded-br-lg"
            aria-hidden
          />

          <div className="relative flex-1">
            <div className="font-mono text-xs font-bold text-neon mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green blink pulse-glow" aria-hidden />
              // OPEN JASA
            </div>
            <h2 className="font-display text-2xl md:text-4xl leading-tight text-fog">
              BUTUH <span className="text-neon text-glow-cyan">SOLUSI DIGITAL?</span>
            </h2>
            <p className="font-body font-medium text-sm md:text-base text-mute mt-2 max-w-xl">
              Bangun, kembangkan, dan optimalkan — dari website, bot, tools, sampai perbaikan
              sistem yang sudah ada.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {chips.map((c) => {
                const Icon = c.icon;
                return (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 border border-line bg-panel/80 rounded-md px-2.5 py-1 font-mono text-[10px] md:text-xs font-bold text-mute transition-colors duration-200 pointer-fine:hover:border-neon/50 pointer-fine:hover:text-neon"
                  >
                    <Icon size={12} strokeWidth={2.5} className="text-neon" aria-hidden="true" />
                    {c.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="relative flex flex-col sm:flex-row lg:flex-col gap-3 sm:items-center lg:items-end shrink-0">
            <a
              href="/layanan"
              className="inline-flex items-center justify-center gap-2 nb-border-thick bg-neon text-ink font-display text-sm md:text-base px-5 py-3 md:px-7 md:py-3.5 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
            >
              LIHAT LAYANAN
              <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
            </a>
            <a
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs md:text-sm font-bold text-neon transition-colors duration-200 pointer-fine:hover:text-paper"
            >
              <Send size={14} strokeWidth={2.5} aria-hidden="true" />
              @dikaacode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
