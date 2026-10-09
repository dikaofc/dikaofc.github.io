import { Check, ChevronLeft, Send } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";
import { SERVICES, type ServiceDetail } from "../../lib/services";

type Props = {
  service: ServiceDetail;
};

function titleCase(s: string) {
  return s.charAt(0) + s.slice(1).toLowerCase();
}

export default function ServiceDetailPage({ service }: Props) {
  const Icon = service.icon;
  const related = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip={`Layanan ${service.num}`}
        title={
          <span className="inline-flex items-center gap-3">
            <Icon size={32} strokeWidth={2} aria-hidden="true" className="text-faint" />
            {titleCase(service.title)}
          </span>
        }
        desc={service.short}
        ctas={[
          { label: "Konsultasi sekarang", href: SITE.telegram, external: true, primary: true },
          { label: "Kembali ke layanan", href: "/layanan" },
        ]}
      >
        {service.platforms && (
          <Reveal delay={280}>
            <div className="flex flex-wrap gap-1.5">
              {service.platforms.map((p) => (
                <span key={p} className="v-pill">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </PageHero>

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-4 items-start">
            <Reveal>
              <div className="v-card p-6 md:p-8">
                <p className="t-mono-label mb-3">Overview</p>
                <div className="space-y-4">
                  {service.long.map((p, i) => (
                    <p key={i} className="text-[15px] md:text-base leading-relaxed text-mute">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="v-card p-6">
                <p className="t-mono-label mb-4">Yang kamu dapat</p>
                <ul className="grid gap-2.5">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm font-medium text-fog">
                      <Check size={15} strokeWidth={2.5} aria-hidden="true" className="shrink-0 mt-0.5 text-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-6">
            <p className="t-mono-label mb-2">Fitur</p>
            <h2 className="t-h2 text-fog">Yang termasuk</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.features.map((f, i) => (
              <Reveal key={f} delay={i * 40} className="h-full">
                <div className="flex items-center gap-3 h-full v-card px-4 py-3.5">
                  <Check size={15} strokeWidth={2.5} aria-hidden="true" className="shrink-0 text-accent" />
                  <span className="text-sm font-medium text-fog">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-6">
            <p className="t-mono-label mb-2">Alur pengerjaan</p>
            <h2 className="t-h2 text-fog">Cara kerjanya</h2>
          </Reveal>

          <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {service.process.map((s, i) => (
              <Reveal key={s.num} delay={i * 60} className="h-full">
                <li className="h-full v-card p-6">
                  <p className="font-mono text-sm font-medium text-accent mb-2">{s.num}</p>
                  <h3 className="font-display font-semibold text-base text-fog mb-1.5">{titleCase(s.title)}</h3>
                  <p className="text-sm leading-relaxed text-mute">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-6">
            <p className="t-mono-label mb-2">Cocok untuk</p>
            <h2 className="t-h2 text-fog">Buat siapa?</h2>
          </Reveal>

          <div className="flex flex-wrap gap-2">
            {service.uses.map((u, i) => (
              <Reveal key={u} delay={i * 40}>
                <span className="inline-block rounded-md px-4 py-2.5 text-sm font-medium text-fog bg-panel min-h-[44px]" style={{ boxShadow: "0px 0px 0px 1px var(--c-line)" }}>
                  {u}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-6">
            <p className="t-mono-label mb-2">Layanan lainnya</p>
            <h2 className="t-h2 text-fog">Masih butuh yang lain?</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((s, i) => {
              const RIcon = s.icon;
              return (
                <Reveal key={s.slug} delay={i * 50} className="h-full">
                  <a
                    href={`/${s.slug}`}
                    className="group flex h-full items-center gap-4 v-card p-5 transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    <span className="grid place-items-center shrink-0 w-10 h-10 rounded-md bg-panel-2 text-fog">
                      <RIcon size={20} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display font-semibold text-[15px] text-fog leading-snug">
                        {titleCase(s.title)}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] text-faint">
                        SERVICE {s.num}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel transition-colors duration-200">
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="v-card relative mx-auto max-w-2xl px-6 py-10 md:py-14 text-center">
              <div className="space-y-4">
                <p className="t-mono-label">Siap mulai?</p>
                <h2 className="t-h2 text-fog">
                  Siap mulai {titleCase(service.title)}?
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed text-mute">
                  Chat gratis. Ceritain maumu, nanti gw jawab bisa atau nggak,
                  plus estimasi waktu dan biaya. Nggak jadi order pun nggak apa-apa.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={SITE.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Send size={16} strokeWidth={2} aria-hidden="true" />
                    Chat di Telegram
                  </a>
                  <a href="/layanan" className="btn btn-secondary">
                    <ChevronLeft size={16} strokeWidth={2} aria-hidden="true" />
                    Semua layanan
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
