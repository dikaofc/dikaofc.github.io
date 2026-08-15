import { Check, ChevronLeft, Send, ArrowUpRight } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";
import { SERVICES, type ServiceDetail } from "../../lib/services";

type Props = {
  service: ServiceDetail;
};

/**
 * Shared detail layout for every service page. Renders the full service
 * breakdown: overview, features, process, use cases, deliverables,
 * related services, and a CTA panel.
 */
export default function ServiceDetailPage({ service }: Props) {
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip={`// LAYANAN ${service.num}`}
        title={
          <>
            <span className="inline-flex items-center gap-3 text-neon text-glow-cyan">
              <Icon size={34} strokeWidth={2.2} aria-hidden="true" />
              {service.title}
            </span>
          </>
        }
        desc={service.short}
        ctas={[
          { label: "KONSULTASI SEKARANG", href: SITE.telegram, external: true, primary: true },
          { label: "← Kembali ke Layanan", href: "/layanan" },
        ]}
      >
        <Reveal delay={280}>
          {service.platforms && (
            <div className="flex flex-wrap gap-2">
              {service.platforms.map((p) => (
                <span
                  key={p}
                  className="border border-neon/40 bg-neon/10 rounded-md px-3 py-1.5 font-mono text-xs font-bold text-neon"
                >
                  {p}
                </span>
              ))}
            </div>
          )}
        </Reveal>
      </PageHero>

      {/* Overview */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-6 md:gap-10 items-start">
            <Reveal>
              <div className="rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 md:p-8">
                <div className="font-mono text-xs font-bold text-neon mb-3">
                  // OVERVIEW
                </div>
                <div className="space-y-4">
                  {service.long.map((p, i) => (
                    <p
                      key={i}
                      className="font-body font-medium text-sm md:text-base text-mute leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="rounded-2xl border border-neon/40 bg-card/60 backdrop-blur-md p-6">
                <div className="font-mono text-xs font-bold text-neon mb-4">
                  // YANG KAMU DAPAT
                </div>
                <ul className="grid gap-2.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 font-body text-xs md:text-sm font-semibold text-fog/85"
                    >
                      <span className="shrink-0 grid place-items-center w-4 h-4 rounded-full bg-neon/15 text-neon">
                        <Check size={10} strokeWidth={3.5} aria-hidden="true" />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel transition-colors duration-300">
        <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal className="mb-8 md:mb-10">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // FITUR
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-fog">
              YANG <span className="text-neon text-glow-cyan">TERMASUK</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {service.features.map((f, i) => (
              <Reveal key={f} delay={i * 60} className="h-full">
                <div className="flex items-center gap-3 h-full rounded-xl border border-line bg-card/60 backdrop-blur-md px-4 py-3.5 transition-colors duration-200 pointer-fine:hover:border-neon/50">
                  <span className="shrink-0 grid place-items-center w-5 h-5 rounded-full bg-neon/15 text-neon">
                    <Check size={11} strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  <span className="font-body text-xs md:text-sm font-semibold text-fog">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal className="mb-8 md:mb-12">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // ALUR PENGERJAAN
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-fog">
              CARA <span className="text-neon text-glow-cyan">KERJANYA</span>
            </h2>
          </Reveal>

          <div className="relative">
            <div
              className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-neon/10 via-neon/40 to-neon/10"
              aria-hidden
            />
            <div className="grid md:grid-cols-4 gap-5 md:gap-6">
              {service.process.map((s, i) => (
                <Reveal key={s.num} delay={i * 90} className="h-full">
                  <div className="group relative h-full rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 text-center transition-all duration-300 pointer-fine:hover:-translate-y-1 pointer-fine:hover:border-neon/50">
                    <div
                      className="hidden md:grid absolute -top-[9px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-neon/60 bg-panel-2 place-items-center"
                      aria-hidden
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                    </div>
                    <div className="font-mono text-sm font-bold text-neon text-glow-cyan mb-3 group-hover:text-paper transition-colors duration-300">
                      {s.num}
                    </div>
                    <h3 className="font-display text-base md:text-lg text-fog mb-2">{s.title}</h3>
                    <p className="font-body font-medium text-xs md:text-sm text-mute leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel transition-colors duration-300">
        <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal className="mb-8 md:mb-10">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // COCOK UNTUK
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-fog">
              BUAT <span className="text-neon text-glow-cyan">SIAPA?</span>
            </h2>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            {service.uses.map((u, i) => (
              <Reveal key={u} delay={i * 60}>
                <span className="inline-block border border-line bg-card/60 backdrop-blur-md rounded-lg px-4 py-2.5 font-display text-xs md:text-sm text-fog transition-all duration-200 pointer-fine:hover:border-neon/50 pointer-fine:hover:text-neon pointer-fine:hover:-translate-y-0.5">
                  {u}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal className="mb-8 md:mb-10">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // LAYANAN LAINNYA
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-fog">
              MASIH <span className="text-neon text-glow-cyan">BUTUH YANG LAIN?</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {related.map((s, i) => {
              const RIcon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 70} className="h-full">
                  <a
                    href={`/${s.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-card/60 backdrop-blur-md p-5 transition-all duration-300 pointer-fine:hover:-translate-y-1 pointer-fine:hover:border-neon/50"
                  >
                    <span className="shrink-0 grid place-items-center w-11 h-11 rounded-xl border border-neon/40 bg-neon/10 text-neon shadow-[0_0_18px_rgba(34,211,238,0.15)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <RIcon size={22} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm md:text-base text-fog leading-tight group-hover:text-neon transition-colors duration-300">
                        {s.title}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] font-bold text-mute">
                        SERVICE_{s.num}
                        <ArrowUpRight size={12} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-panel transition-colors duration-300">
        <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="cta-panel relative mx-auto max-w-2xl rounded-3xl border border-neon/30 bg-card/70 backdrop-blur-xl px-6 py-10 md:py-14 text-center">
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
              <div className="relative space-y-5">
                <div className="font-mono text-[11px] md:text-xs font-bold text-neon border border-neon/40 bg-neon/10 rounded-md px-3 py-1.5 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon blink" aria-hidden />
                  COMMAND_PANEL // ONLINE
                </div>
                <h2 className="font-display text-2xl md:text-4xl text-fog">
                  SIAP MULAI{" "}
                  <span className="text-neon text-glow-cyan">{service.title}?</span>
                </h2>
                <p className="font-body font-medium text-sm md:text-base text-mute">
                  Diskusikan kebutuhanmu langsung — konsultasi gratis, tanpa paksaan.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={SITE.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
                  >
                    <Send size={18} strokeWidth={2.5} aria-hidden="true" />
                    CHAT DI TELEGRAM
                  </a>
                  <a
                    href="/layanan"
                    className="inline-flex items-center gap-2 nb-border-thick bg-card text-fog font-display text-sm md:text-base px-5 py-3 md:px-6 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
                  >
                    <ChevronLeft size={18} strokeWidth={2.5} aria-hidden="true" />
                    SEMUA LAYANAN
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
