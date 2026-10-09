import { Check } from "lucide-react";
import Reveal from "../../components/Reveal";
import { SERVICES } from "../../lib/services";

export default function Services() {
  return (
    <section
      id="layanan"
      className="relative overflow-hidden bg-panel-2 transition-colors duration-200"
      style={{ borderBottom: "1px solid var(--c-line)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 section">
        <Reveal className="mb-8 max-w-xl">
          <p className="t-mono-label mb-3">Yang gw kerjain</p>
          <h2 className="t-h2 text-fog">Layanan Dikacode</h2>
          <p className="t-lead mt-3 !text-lg">
            Empat hal yang gw kerjain tiap hari. Di luar ini? Tanya aja dulu, siapa tau bisa.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;

            return (
              <Reveal key={s.num} delay={i * 60} className="h-full">
                <article className="group relative h-full v-card p-6 md:p-7 transition-transform duration-150 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="grid place-items-center w-10 h-10 rounded-md bg-panel-2 text-fog">
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="t-mono-label">
                      Service {s.num}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-fog leading-snug mb-2">
                    {s.title.charAt(0) + s.title.slice(1).toLowerCase()}
                  </h3>

                  <p className="text-[15px] leading-relaxed text-mute mb-4">
                    {s.short}
                  </p>

                  {s.platforms && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {s.platforms.map((p) => (
                        <span key={p} className="v-pill">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-[13px] font-medium text-fog"
                      >
                        <Check size={14} strokeWidth={2.5} aria-hidden="true" className="shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`/${s.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:opacity-75"
                  >
                    Pelajari layanan
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
