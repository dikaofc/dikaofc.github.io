import { useMemo, useState } from "react";
import type { GhRepo } from "../lib/github";
import RepoCard from "./RepoCard";
import Reveal from "./Reveal";

const PINNED_NAMES = ["DikaRoute", "dikaofc.github.io", "PentesterBotTelegram", "RemoteUniversalDevice"];
const FLAGSHIP_NAME = "DikaRoute";

type Props = { repos: GhRepo[]; loading: boolean };

export default function Repos({ repos, loading }: Props) {
  const [q, setQ] = useState("");
  const [lang, setLang] = useState<string>("All");

  const { pinned, all, langs } = useMemo(() => {
    const pinned = PINNED_NAMES
      .map((n) => repos.find((r) => r.name.toLowerCase() === n.toLowerCase()))
      .filter(Boolean) as GhRepo[];

    const langSet = new Set<string>();
    repos.forEach((r) => r.language && langSet.add(r.language));

    const filtered = repos
      .filter((r) => !r.fork)
      .filter((r) => (lang === "All" ? true : r.language === lang))
      .filter((r) => {
        if (!q) return true;
        const s = q.toLowerCase();
        return (
          r.name.toLowerCase().includes(s) ||
          (r.description ?? "").toLowerCase().includes(s) ||
          (r.topics ?? []).some((t) => t.toLowerCase().includes(s))
        );
      })
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

    return { pinned, all: filtered, langs: ["All", ...Array.from(langSet).sort()] };
  }, [repos, q, lang]);

  return (
    <section id="repos" className="border-b-4 border-fog bg-panel-2 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28">
        {/* Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // REPOSITORIES
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-none text-fog pointer-fine:hover:scale-105 transition-transform">
              PROYEK<br />
              <span className="bg-orange text-white nb-border-thick px-3 inline-block -rotate-1 hover:rotate-0 transition-transform">
                GW
              </span>
            </h2>
          </div>
          <p className="font-body font-semibold text-base md:text-lg max-w-md text-mute">
            just proyek <span className="bg-paper text-ink px-1.5">iseng</span> ya bang awokawok
          </p>
        </Reveal>

        {/* Pinned — asymmetric: flagship DikaRoute gets 2x width + glow */}
        <Reveal className="mb-14">
          <h3 className="font-display text-2xl md:text-3xl mb-6 flex items-center gap-3 text-fog hover:translate-x-2 transition-transform duration-300">
            <span className="w-4 h-4 bg-paper nb-border rotate-45" />
            Pinned Repositories
          </h3>
          {loading && pinned.length === 0 ? (
            <SkeletonGrid />
          ) : (
            <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pinned.map((r, i) => (
                <RepoCard
                  key={r.id}
                  repo={r}
                  index={i}
                  pinned
                  featured={r.name.toLowerCase() === FLAGSHIP_NAME.toLowerCase()}
                />
              ))}
            </div>
          )}
        </Reveal>

        {/* Filters */}
        <div className="nb-border-thick bg-card rounded-xl p-4 md:p-5 nb-shadow-lg mb-10 flex flex-col md:flex-row gap-3 md:gap-4 hover:shadow-[8px_8px_0_#ffe600] transition-all">
          <div className="flex-1 flex items-center gap-2 nb-border bg-panel rounded-md px-3 py-2 hover:bg-card transition-colors">
            <span className="font-mono font-bold text-3xl text-fog">⌕</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="search"
              className="w-full bg-transparent outline-none font-body font-semibold text-fog placeholder:text-mute focus:bg-neon/5 transition-colors"
              aria-label="search project"
            />
            {q && (
              <button onClick={() => setQ("")} className="font-mono text-xs font-bold nb-border bg-card text-fog px-2 py-0.5 rounded hover:bg-orange hover:text-white transition-colors">
                ✕
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto -mx-1 px-1 md:overflow-visible">
            {langs.slice(0, 8).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`shrink-0 nb-border font-mono text-xs md:text-sm font-bold px-3 py-2 rounded-md nb-shadow-sm nb-press transition-all ${
                  lang === l ? "bg-paper text-ink scale-105" : "bg-panel text-fog hover:bg-card"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* All repos */}
        <Reveal delay={80}>
          <h3 className="font-display text-2xl md:text-3xl mb-6 flex items-center gap-3 text-fog hover:translate-x-2 transition-transform duration-300">
            <span className="w-4 h-4 bg-neon nb-border" />
            All Repositories{" "}
            <span className="font-mono text-base text-mute">({all.length})</span>
          </h3>

          {loading ? (
            <SkeletonGrid />
          ) : all.length === 0 ? (
            <div className="nb-border-thick bg-card rounded-xl p-8 text-center nb-shadow-lg pointer-fine:hover:scale-105 active:scale-[0.98] transition-transform">
              <div className="font-display text-2xl mb-2 text-fog">Nggak ada repo yang cocok</div>
              <p className="font-body font-medium text-mute">Coba ganti filter atau reset pencarian.</p>
            </div>
          ) : (
            <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {all.map((r, i) => (
                <RepoCard
                  key={r.id}
                  repo={r}
                  index={i}
                  featured={r.name.toLowerCase() === FLAGSHIP_NAME.toLowerCase()}
                />
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="nb-border-thick bg-card rounded-2xl p-6 nb-shadow-lg h-52 animate-pulse">
          <div className="h-6 w-1/2 bg-fog/10 rounded mb-3" />
          <div className="h-4 w-full bg-fog/10 rounded mb-2" />
          <div className="h-4 w-3/4 bg-fog/10 rounded mb-6" />
          <div className="h-4 w-1/3 bg-fog/10 rounded" />
        </div>
      ))}
    </div>
  );
}
