import { Check, ChevronLeft, Send, ExternalLink } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";
import { PROJECTS, type ProjectDetail } from "../../lib/projects";

type Props = {
  project: ProjectDetail;
};

export default function ProjectDetailPage({ project }: Props) {
  const Icon = project.icon;
  const related = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="Proyek"
        title={
          <span className="inline-flex items-center gap-3">
            <Icon size={32} strokeWidth={2} aria-hidden="true" className="text-faint" />
            {project.name}
          </span>
        }
        desc={project.tagline}
        ctas={[
          {
            label: "Kunjungi GitHub",
            href: project.repo,
            external: true,
            primary: true,
          },
          { label: "Semua proyek", href: "/proyek" },
        ]}
      >
        <Reveal delay={280}>
          <div className="flex flex-wrap gap-1.5">
            {project.topics.map((t) => (
              <span key={t} className="v-pill">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </PageHero>

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-4 items-start">
            <Reveal>
              <div className="v-card p-6 md:p-8">
                <p className="t-mono-label mb-3">Tentang proyek</p>
                <div className="space-y-4">
                  {project.long.map((p, i) => (
                    <p key={i} className="text-[15px] md:text-base leading-relaxed text-mute">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="v-card p-6">
                <p className="t-mono-label mb-4">Link</p>
                <ul className="grid gap-2.5">
                  {project.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium text-fog bg-panel-2 transition-colors hover:text-accent min-h-[44px]"
                      >
                        {l.label}
                        <ExternalLink
                          size={14}
                          strokeWidth={2}
                          className="shrink-0 text-faint"
                          aria-hidden="true"
                        />
                      </a>
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
            <p className="t-mono-label mb-2">Fitur utama</p>
            <h2 className="t-h2 text-fog">Yang bikin keren</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {project.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 40} className="h-full">
                <div className="flex items-center gap-3 h-full v-card px-4 py-3.5">
                  <Check size={15} strokeWidth={2.5} aria-hidden="true" className="shrink-0 text-accent" />
                  <span className="text-sm font-medium text-fog">{h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-6">
            <p className="t-mono-label mb-2">Tech stack</p>
            <h2 className="t-h2 text-fog">Dibangun dengan</h2>
          </Reveal>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <Reveal key={t} delay={i * 40}>
                <span className="inline-block rounded-md px-4 py-2.5 text-sm font-medium text-fog bg-panel min-h-[44px]" style={{ boxShadow: "0px 0px 0px 1px var(--c-line)" }}>
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-6">
            <p className="t-mono-label mb-2">Proyek lainnya</p>
            <h2 className="t-h2 text-fog">Masih penasaran?</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((p, i) => {
              const RIcon = p.icon;
              return (
                <Reveal key={p.slug} delay={i * 40} className="h-full">
                  <a
                    href={`/proyek/${p.slug}`}
                    className="group flex h-full items-center gap-4 v-card p-5 transition-transform duration-150 hover:-translate-y-0.5"
                  >
                    <span className="grid place-items-center shrink-0 w-10 h-10 rounded-md bg-panel-2 text-fog">
                      <RIcon size={20} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display font-semibold text-[15px] text-fog leading-snug">
                        {p.name}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] text-faint line-clamp-2">
                        {p.tagline}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200">
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="v-card relative mx-auto max-w-2xl px-6 py-10 md:py-14 text-center">
              <div className="space-y-4">
                <p className="t-mono-label">Suka proyek ini?</p>
                <h2 className="t-h2 text-fog">
                  Butuh proyek serupa dikerjain?
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed text-mute">
                  Diskusikan kebutuhanmu, dari AI gateway sampai bot automation.
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
                    Lihat layanan
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
