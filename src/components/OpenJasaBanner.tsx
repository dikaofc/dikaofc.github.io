import { Code2, Bot, Wrench, FileCode2, Send, ArrowRight } from "lucide-react";
import { SITE } from "../lib/site";

const chips = [
  { label: "WEBSITE", icon: Code2 },
  { label: "BOT", icon: Bot },
  { label: "TOOLS", icon: Wrench },
  { label: "MAINTENANCE", icon: FileCode2 },
];

export default function OpenJasaBanner() {
  return (
    <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="v-card px-6 py-8 md:px-10 md:py-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
          <div className="flex-1">
            <p className="t-mono-label mb-2">Open jasa</p>
            <h2 className="t-h2 text-fog">
              Butuh solusi digital?
            </h2>
            <p className="text-base leading-relaxed text-mute mt-2 max-w-xl">
              Bangun, kembangkan, dan optimalkan, dari website, bot, tools, sampai perbaikan
              sistem yang sudah ada.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {chips.map((c) => {
                const Icon = c.icon;
                return (
                  <span
                    key={c.label}
                    className="v-pill"
                  >
                    <Icon size={12} strokeWidth={2.5} aria-hidden="true" />
                    {c.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:items-center lg:items-end shrink-0">
            <a href="/layanan" className="btn btn-primary">
              Lihat layanan
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
            <a
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-accent transition-opacity hover:opacity-75"
            >
              <Send size={14} strokeWidth={2} aria-hidden="true" />
              @dikaacode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
