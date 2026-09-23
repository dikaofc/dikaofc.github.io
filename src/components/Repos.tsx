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
    <section id="repos" className="bg-panel relative overflow-hidden transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 section">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="t-mono-label mb-3">Repositories</p>
            <h2 className="t-h2 text-fog">Proyek gw</h2>
          </div>
          <p className="text-base max-w-md text-mute">
            Proyek iseng yang dikerjain serius, dari AI gateway sampai aplikasi Android.
          </p>
        </Reveal>

        <Reveal className="mb-12">
          <h3 className="t-h3 text-fog mb-5">Pinned</h3>
          {loading && pinned.length === 0 ? (
            <SkeletonGrid />
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="v-card p-4 mb-8 flex flex-col md:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 rounded-md px-3 py-2" style={{ boxShadow: "0px 0px 0px 1px var(--c-line)" }}>
            <span className="font-mono font-bold text-lg text-faint" aria-hidden="true">⌕</span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari proyek..."
              className="w-full bg-transparent outline-none text-[15px] text-fog placeholder:text-faint"
              aria-label="Cari proyek"
            />
            {q && (
              <button onClick={() => setQ("")} aria-label="Hapus pencarian" className="font-mono text-xs font-medium text-mute px-2 py-1 rounded hover:text-fog">
                Hapus
              </button>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto md:overflow-visible" role="group" aria-label="Filter bahasa">
            {langs.slice(0, 8).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`shrink-0 text-[13px] font-medium px-3 py-2 rounded-md transition-colors min-h-[44px] ${
                  lang === l ? "bg-cta text-cta-text" : "text-mute hover:text-fog hover:bg-panel-2"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <Reveal delay={80}>
          <h3 className="t-h3 text-fog mb-5">
            Semua repository{" "}
            <span className="font-mono text-sm font-normal text-faint">({all.length})</span>
          </h3>

          {loading ? (
            <SkeletonGrid />
          ) : all.length === 0 ? (
            <div className="v-card p-8 text-center">
              <div className="t-h3 text-fog mb-2">Nggak ada repo yang cocok</div>
              <p className="text-sm text-mute">Coba ganti filter atau reset pencarian.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="v-card p-6 h-52 animate-pulse">
          <div className="h-6 w-1/2 rounded bg-panel-2 mb-3" />
          <div className="h-4 w-full rounded bg-panel-2 mb-2" />
          <div className="h-4 w-3/4 rounded bg-panel-2 mb-6" />
          <div className="h-4 w-1/3 rounded bg-panel-2" />
        </div>
      ))}
    </div>
  );
}
