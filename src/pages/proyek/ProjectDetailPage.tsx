import { Check, ChevronLeft, Send, ArrowUpRight, ExternalLink } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";
import { PROJECTS, type ProjectDetail } from "../../lib/projects";

type Props = {
  project: ProjectDetail;
};

/** Shared detail layout for every project page. */
export default function ProjectDetailPage({ project }: Props) {
  const Icon = project.icon;
  const related = PROJECTS.filter((p) => p.slug !== project.slug);

  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="// PROYEK"
        title={
          <>
            <span className="inline-flex items-center gap-3 text-neon text-glow-cyan">
              <Icon size={34} strokeWidth={2.2} aria-hidden="true" />
              {project.name}
            </span>
          </>
        }
        desc={project.tagline}
        ctas={[
          {
            label: "KUNJUNGI GITHUB",
            href: project.repo,
            external: true,
            primary: true,
          },
          { label: "← Semua Proyek", href: "/proyek" },
        ]}
      >
        <Reveal delay={280}>
          <div className="flex flex-wrap gap-2">
            {project.topics.map((t) => (
              <span
                key={t}
                className="border border-neon/40 bg-neon/10 rounded-md px-3 py-1.5 font-mono text-xs font-bold text-neon"
              >
                #{t}
              </span>
            ))}
          </div>
        </Reveal>
      </PageHero>

      {/* Overview */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[1.4fr_0.6fr] gap-6 md:gap-10 items-start">
            <Reveal>
              <div className="rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 md:p-8">
                <div className="font-mono text-xs font-bold text-neon mb-3">// TENTANG PROYEK</div>
                <div className="space-y-4">
                  {project.long.map((p, i) => (
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
                <div className="font-mono text-xs font-bold text-neon mb-4">// LINK</div>
                <ul className="grid gap-2.5">
                  {project.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between gap-2 rounded-lg border border-line bg-panel/80 px-3.5 py-2.5 font-body text-xs md:text-sm font-semibold text-fog transition-colors duration-200 pointer-fine:hover:border-neon/50 pointer-fine:hover:text-neon"
                      >
                        {l.label}
                        <ExternalLink
                          size={13}
                          strokeWidth={2.5}
                          className="shrink-0 text-mute transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neon"
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

      {/* Highlights */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel transition-colors duration-300">
        <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal className="mb-8 md:mb-10">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // FITUR UTAMA
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-fog">
              YANG BIKIN{" "}
              <span className="text-neon text-glow-cyan">KEREN</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {project.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 60} className="h-full">
                <div className="flex items-center gap-3 h-full rounded-xl border border-line bg-card/60 backdrop-blur-md px-4 py-3.5 transition-colors duration-200 pointer-fine:hover:border-neon/50">
                  <span className="shrink-0 grid place-items-center w-5 h-5 rounded-full bg-neon/15 text-neon">
                    <Check size={11} strokeWidth={3.5} aria-hidden="true" />
                  </span>
                  <span className="font-body text-xs md:text-sm font-semibold text-fog">{h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal className="mb-8 md:mb-10">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // TECH STACK
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-fog">
              DIBANGUN{" "}
              <span className="text-neon text-glow-cyan">DENGAN</span>
            </h2>
          </Reveal>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => (
              <Reveal key={t} delay={i * 60}>
                <span className="inline-block border border-line bg-card/60 backdrop-blur-md rounded-lg px-4 py-2.5 font-display text-xs md:text-sm text-fog transition-all duration-200 pointer-fine:hover:border-neon/50 pointer-fine:hover:text-neon pointer-fine:hover:-translate-y-0.5">
                  {t}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related projects */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel transition-colors duration-300">
        <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal className="mb-8 md:mb-10">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // PROYEK LAINNYA
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-fog">
              MASIH{" "}
              <span className="text-neon text-glow-cyan">PENASARAN?</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {related.map((p, i) => {
              const RIcon = p.icon;
              return (
                <Reveal key={p.slug} delay={i * 70} className="h-full">
                  <a
                    href={`/proyek/${p.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-card/60 backdrop-blur-md p-5 transition-all duration-300 pointer-fine:hover:-translate-y-1 pointer-fine:hover:border-neon/50"
                  >
                    <span className="shrink-0 grid place-items-center w-11 h-11 rounded-xl border border-neon/40 bg-neon/10 text-neon shadow-[0_0_18px_rgba(34,211,238,0.15)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <RIcon size={22} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-sm md:text-base text-fog leading-tight group-hover:text-neon transition-colors duration-300">
                        {p.name}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] font-bold text-mute">
                        {p.tagline}
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
      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="cta-panel relative mx-auto max-w-2xl rounded-3xl border border-neon/30 bg-card/70 backdrop-blur-xl px-6 py-10 md:py-14 text-center">
              <div className="relative space-y-5">
                <div className="font-mono text-[11px] md:text-xs font-bold text-neon border border-neon/40 bg-neon/10 rounded-md px-3 py-1.5 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green blink" aria-hidden />
                  SUKA PROYEK INI?
                </div>
                <h2 className="font-display text-2xl md:text-4xl text-fog">
                  BUTUH PROYEK SERUPA{" "}
                  <span className="text-neon text-glow-cyan">DIKERJAIN?</span>
                </h2>
                <p className="font-body font-medium text-sm md:text-base text-mute">
                  Diskusikan kebutuhanmu — dari AI gateway sampai bot automation.
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
                    LIHAT LAYANAN
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
