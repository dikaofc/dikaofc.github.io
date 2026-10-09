import { useEffect, useState } from "react";
import { BookOpen, Star, GitFork, ExternalLink } from "lucide-react";
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
        chip="Proyek Dikacode"
        title="Proyek unggulan"
        desc="Kumpulan project yang gw kerjain serius — dan semuanya open source. Gw pakai sendiri sebelum berani nawarin ke orang."
        ctas={[
          { label: "Follow GitHub", href: SITE.github, external: true, primary: true },
          { label: "Lihat layanan", href: "/layanan" },
        ]}
      />

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-8">
            <p className="t-mono-label mb-2">Featured</p>
            <h2 className="t-h2 text-fog">Yang gw buat</h2>
            {loading && (
              <p className="font-mono text-xs text-faint mt-3">
                Ngambil data terbaru dari GitHub...
              </p>
            )}
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {featured.map((r, i) => {
              const slug = projectSlug(r.name);
              return (
              <Reveal key={r.id} delay={i * 50} className="h-full">
                <a
                  href={slug ? `/proyek/${slug}` : r.html_url}
                  {...(slug
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group block h-full v-card p-6 transition-transform duration-150 hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="grid place-items-center w-10 h-10 shrink-0 rounded-md bg-panel-2 text-fog">
                        <BookOpen size={20} strokeWidth={2} aria-hidden="true" />
                      </span>
                      <h3 className="font-display font-semibold text-lg text-fog leading-snug break-words min-w-0">
                        {r.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[15px] leading-relaxed text-mute mb-4">
                    {r.description}
                  </p>

                  {r.topics && r.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {r.topics.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] rounded px-1.5 py-0.5 bg-panel-2 text-mute"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid var(--c-line)" }}>
                    {r.language && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-fog">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: langColor(r.language) }}
                        />
                        {r.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1.5 font-mono text-xs text-faint">
                      <Star size={14} strokeWidth={2} aria-hidden="true" />
                      {r.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-faint">
                      <GitFork size={14} strokeWidth={2} aria-hidden="true" />
                      {r.forks_count}
                    </span>
                    {slug && (
                      <span className="ml-auto font-mono text-[11px] font-medium text-accent">
                        Detail
                      </span>
                    )}
                  </div>
                </a>
              </Reveal>
              );
            })}
          </div>

          <Reveal delay={60}>
            <div className="mt-8 text-center">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:opacity-75"
              >
                <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
                Lihat semua repository di GitHub
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
