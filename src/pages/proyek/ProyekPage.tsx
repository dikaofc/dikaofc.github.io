import { useEffect, useState } from "react";
import { BookOpen, Star, GitFork, ArrowUpRight, ExternalLink } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";
import { getRepos, FALLBACK_REPOS, langColor, type GhRepo } from "../../lib/github";
import { projectSlug } from "../../lib/projects";

const PINNED = [
  "DikaRoute",
  "ObitoBuffCLI",
  "PentesterBotTelegram",
  "RemoteUniversalDevice",
  "telegrambot-ai",
  "dikaofc.github.io",
  "PentesterBotTelegramWebsite",
  "WebsiteDikaRoute",
  "freebuffPatchAndroid",
  "AgentBuffAndroid",
];

export default function ProyekPage() {
  const [repos, setRepos] = useState<GhRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    getRepos()
      .then((r) => alive && setRepos(r))
      .catch(() => {})
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const featured = PINNED.map((n) => repos.find((r) => r.name.toLowerCase() === n.toLowerCase()))
    .filter(Boolean)
    .filter((r): r is GhRepo => Boolean(r));

  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="// PROYEK DIKACODE"
        title={
          <>
            PROYEK{" "}
            <span className="inline-block text-neon text-glow-cyan">UNGGULAN</span>
          </>
        }
        desc="Kumpulan proyek yang dikerjain dengan serius: AI gateway, bot automation, aplikasi Android, sampai portfolio ini sendiri."
        ctas={[
          { label: "FOLLOW GITHUB ★", href: SITE.github, external: true, primary: true },
          { label: "Lihat Layanan", href: "/layanan" },
        ]}
      />

      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <Reveal className="mb-10 md:mb-14">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // FEATURED
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-fog">
              YANG GW{" "}
              <span className="text-orange">BUAT</span>
            </h2>
            {loading && (
              <p className="font-mono text-xs md:text-sm text-mute mt-3">
                // menyinkronkan data dari GitHub API…
              </p>
            )}
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {featured.map((r, i) => {
              const slug = projectSlug(r.name);
              return (
              <Reveal key={r.id} delay={i * 80} className="h-full">
                <a
                  href={slug ? `/proyek/${slug}` : r.html_url}
                  {...(slug
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 md:p-7 transition-all duration-300 pointer-fine:hover:-translate-y-1 pointer-fine:hover:border-neon/50"
                >
                  <span
                    className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/0 to-transparent transition-colors duration-300 group-hover:via-neon/80"
                    aria-hidden
                  />

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl border border-neon/40 bg-neon/10 text-neon grid place-items-center shadow-[0_0_18px_rgba(34,211,238,0.15)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        <BookOpen size={22} strokeWidth={2} aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-lg md:text-xl text-fog leading-tight break-words">
                        {r.name}
                      </h3>
                    </div>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2.5}
                      className="shrink-0 text-mute transition-all duration-200 group-hover:text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  <p className="font-body font-medium text-sm md:text-base text-mute leading-relaxed mb-4">
                    {r.description}
                  </p>

                  {r.topics && r.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {r.topics.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] md:text-xs border border-line bg-panel/80 rounded-md px-2 py-1 text-fog transition-colors duration-200 group-hover:border-neon/40"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-3 border-t border-line">
                    {r.language && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-fog">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: langColor(r.language) }}
                        />
                        {r.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-mute">
                      <Star size={14} strokeWidth={2.5} aria-hidden="true" />
                      {r.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-mute">
                      <GitFork size={14} strokeWidth={2.5} aria-hidden="true" />
                      {r.forks_count}
                    </span>
                    {slug && (
                      <span className="ml-auto inline-flex items-center gap-1 font-mono text-[11px] font-bold text-neon transition-colors duration-200 group-hover:text-paper">
                        DETAIL <ArrowUpRight size={12} strokeWidth={2.5} aria-hidden="true" />
                      </span>
                    )}
                  </div>
                </a>
              </Reveal>
              );
            })}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 text-center">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-sm font-bold text-neon transition-colors duration-200 pointer-fine:hover:text-paper"
              >
                <ExternalLink size={15} strokeWidth={2.5} aria-hidden="true" />
                Lihat semua repository di GitHub →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
