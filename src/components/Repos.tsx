import { useMemo, useState } from "react";
import type { GhRepo } from "../lib/github";
import RepoCard from "./RepoCard";

const PINNED_NAMES = ["DikaRoute", "dikaofc.github.io", "PentesterBotTelegram", "RemoteUniversalDevice"];

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
    <section id="repos" className="border-b-[4px] border-ink bg-paper">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <div className="inline-block nb-border bg-ink text-paper px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // REPOSITORIES
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-none">
              PROYEK<br /><span className="bg-orange nb-border-thick px-3 inline-block -rotate-1">GW</span>
            </h2>
          </div>
          <p className="font-body font-semibold text-base md:text-lg max-w-md">
            just proyek <span className="bg-ink text-paper px-1.5">iseng</span> ya bang awokawok
          </p>
        </div>

        {/* Pinned */}
        <div className="mb-12">
          <h3 className="font-display text-2xl md:text-3xl mb-5 flex items-center gap-3">
            <span className="w-4 h-4 bg-orange nb-border rotate-45" />
            Pinned Repositories
          </h3>
          {loading && pinned.length === 0 ? (
            <SkeletonGrid />
          ) : (
            <div className="grid gap-5 md:gap-6 sm:grid-cols-2">
              {pinned.map((r, i) => (
                <RepoCard key={r.id} repo={r} index={i} pinned />
              ))}
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="nb-border-thick bg-cream rounded-xl p-4 md:p-5 nb-shadow-lg mb-8 flex flex-col md:flex-row gap-3 md:gap-4">
          <div className="flex-1 flex items-center gap-2 nb-border bg-paper rounded-md px-3 py-2">
            <span className="font-mono font-bold text-3xl">⌕</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="search"
              className="w-full bg-transparent outline-none font-body font-semibold placeholder:text-ink/50"
              aria-label="search project"
            />
            {q && (
              <button onClick={() => setQ("")} className="font-mono text-xs font-bold nb-border bg-cream px-2 py-0.5 rounded">
                ✕
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto -mx-1 px-1 md:overflow-visible">
            {langs.slice(0, 8).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`shrink-0 nb-border font-mono text-xs md:text-sm font-bold px-3 py-2 rounded-md nb-shadow-sm nb-press ${
                  lang === l ? "bg-ink text-paper" : "bg-paper text-ink"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* All repos */}
        <h3 className="font-display text-2xl md:text-3xl mb-5 flex items-center gap-3">
          <span className="w-4 h-4 bg-blue nb-border" />
          All Repositories <span className="font-mono text-base opacity-60">({all.length})</span>
        </h3>

        {loading ? (
          <SkeletonGrid />
        ) : all.length === 0 ? (
          <div className="nb-border-thick bg-cream rounded-xl p-8 text-center nb-shadow-lg">
            <div className="font-display text-2xl mb-2">Nggak ada repo yang cocok</div>
            <p className="font-body font-medium">Coba ganti filter atau reset pencarian.</p>
          </div>
        ) : (
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((r, i) => (
              <RepoCard key={r.id} repo={r} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="nb-border-thick bg-cream rounded-2xl p-6 nb-shadow-lg h-52 animate-pulse">
          <div className="h-6 w-1/2 bg-ink/10 rounded mb-3" />
          <div className="h-4 w-full bg-ink/10 rounded mb-2" />
          <div className="h-4 w-3/4 bg-ink/10 rounded mb-6" />
          <div className="h-4 w-1/3 bg-ink/10 rounded" />
        </div>
      ))}
    </div>
  );
}
