import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "../../components/Reveal";
import { SERVICES } from "../../lib/services";

export default function Services() {
  return (
    <section
      id="layanan"
      className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute -top-24 right-10 w-80 h-80 bg-neon/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <Reveal className="mb-10 md:mb-16">
          <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
            // LAYANAN DIKACODE
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-none text-fog">
            LAYANAN{" "}
            <span className="inline-block text-neon text-glow-cyan">DIKACODE</span>
          </h2>
          <p className="font-body font-medium text-base md:text-lg text-mute mt-3 max-w-md">
            Solusi digital yang dibuat sesuai kebutuhan.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;

            return (
              <Reveal key={s.num} delay={i * 90} className="h-full">
                <article className="layanan-card group relative h-full overflow-hidden rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 md:p-8 transition-all duration-300 pointer-fine:hover:-translate-y-1.5">
                  {/* cyan light traveling along the top border on hover */}
                  <span
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/0 to-transparent transition-colors duration-300 group-hover:via-neon/80"
                    aria-hidden
                  />

                  {/* ghost number */}
                  <span
                    className="absolute -top-2 right-4 font-display text-6xl md:text-7xl leading-none text-fog/10 select-none transition-colors duration-300 group-hover:text-neon/15"
                    aria-hidden
                  >
                    {s.num}
                  </span>

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl border border-neon/40 bg-neon/10 text-neon grid place-items-center shadow-[0_0_22px_rgba(34,211,238,0.18)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        <Icon size={28} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-bold text-mute tracking-widest">
                        SERVICE_{s.num}
                      </span>
                    </div>

                    <h3 className="font-display text-lg md:text-xl text-fog leading-tight mb-3 group-hover:text-neon transition-colors duration-300">
                      {s.title}
                    </h3>

                    <p className="font-body font-medium text-sm md:text-base text-mute leading-relaxed mb-4">
                      {s.short}
                    </p>

                    {s.platforms && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {s.platforms.map((p) => (
                          <span
                            key={p}
                            className="border border-line bg-panel/80 rounded-md px-2.5 py-1 font-mono text-[11px] font-bold text-fog transition-colors duration-200 group-hover:border-neon/40"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-6">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 font-body text-xs md:text-sm font-semibold text-fog/85"
                        >
                          <span className="shrink-0 grid place-items-center w-4 h-4 rounded-full bg-neon/15 text-neon">
                            <Check size={10} strokeWidth={3.5} aria-hidden="true" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`/${s.slug}`}
                      className="mt-auto inline-flex items-center gap-1.5 font-mono text-sm font-bold text-neon transition-colors duration-200 group-hover:text-paper"
                    >
                      Pelajari Layanan
                      <ArrowUpRight
                        size={15}
                        strokeWidth={2.5}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        .layanan-card {
          box-shadow: 0 10px 40px -18px rgba(0, 0, 0, 0.6);
        }
        .layanan-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
          box-shadow: 0 18px 50px -16px rgba(34, 211, 238, 0.35);
        }
        @media (hover: hover) {
          .layanan-card:hover::before { opacity: 1; }
          .layanan-card:hover {
            border-color: rgba(34, 211, 238, 0.55);
            background: rgba(255, 255, 255, 0.04);
          }
          [data-theme="light"] .layanan-card:hover { background: rgba(34, 211, 238, 0.05); }
        }
      `}</style>
    </section>
  );
}
