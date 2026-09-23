import { Send, ArrowRight } from "lucide-react";
import Reveal from "../../components/Reveal";

const TELEGRAM = "https://t.me/dikaacode";

const HUD_CHIPS = ["WEB", "BOT", "TOOLS", "AUTOMATION", "MAINTENANCE"];

export default function LayananHero() {
  return (
    <section
      id="open-jasa"
      className="relative overflow-hidden bg-panel transition-colors duration-200"
      style={{ borderBottom: "1px solid var(--c-line)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-2xl space-y-5">
          <Reveal>
            <p className="t-mono-label">Dikacode, Digital Solution dan Code</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="t-display text-fog">Open jasa</h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="t-lead">
              Solusi digital terbaik untuk kebutuhanmu. Bangun, kembangkan, dan
              optimalkan, dari website, bot, tools, hingga perbaikan sistem.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={TELEGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Send size={16} strokeWidth={2} aria-hidden="true" />
                Konsultasi sekarang
              </a>
              <a href="#layanan" className="btn btn-secondary">
                Lihat layanan
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {HUD_CHIPS.map((chip) => (
                <span key={chip} className="v-pill">
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="font-mono text-sm text-mute">
              Telegram: <span className="text-fog font-medium">@dikaacode</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
