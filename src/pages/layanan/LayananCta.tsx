import { Send } from "lucide-react";
import Reveal from "../../components/Reveal";

const TELEGRAM = "https://t.me/dikaacode";

export default function LayananCta() {
  return (
    <section
      id="konsultasi"
      className="relative overflow-hidden bg-panel transition-colors duration-200"
      style={{ borderBottom: "1px solid var(--c-line)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 section">
        <Reveal>
          <div className="v-card relative mx-auto max-w-2xl px-6 py-12 md:py-16 text-center">
            <div className="max-w-xl mx-auto space-y-5">
              <p className="t-mono-label">Siap mulai?</p>
              <h2 className="t-h2 text-fog">
                Punya project? Ceritain aja dulu.
              </h2>
              <p className="t-lead !text-lg">
                Chat gratis, nggak wajib order. Paling banter gw jawab "nggak bisa" — jujur itu gratis.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
                <a
                  href={TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Send size={16} strokeWidth={2} aria-hidden="true" />
                  Chat di Telegram
                </a>
                <span className="font-mono text-sm text-fog rounded-md px-4 py-2.5 bg-panel-2">
                  @dikaacode
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
