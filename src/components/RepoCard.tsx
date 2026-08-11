import { memo } from "react";
import type { GhRepo } from "../lib/github";
import { langColor, timeAgo } from "../lib/github";

const CARD_TONES = [
  { bg: "bg-cream", shadow: "nb-press-orange" },
  { bg: "bg-[#d4ecff]", shadow: "nb-press-blue" },
  { bg: "bg-[#ffd6e7]", shadow: "nb-press-pink" },
  { bg: "bg-[#e2d6ff]", shadow: "nb-press" },
  { bg: "bg-[#d6ffe2]", shadow: "nb-press" },
  { bg: "bg-paper", shadow: "nb-press-orange" },
];

type Props = { repo: GhRepo; index: number; pinned?: boolean };

function RepoCardBase({ repo, index, pinned }: Props) {
  const tone = CARD_TONES[index % CARD_TONES.length];
  const color = langColor(repo.language);

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col nb-border-thick ${tone.bg} rounded-2xl p-5 md:p-6 nb-shadow-lg ${tone.shadow} nb-press`}
    >
      {pinned && (
        <span className="absolute -top-3 -right-3 nb-border bg-orange text-ink font-display text-xs px-2 py-1 rounded-md nb-shadow-sm rotate-6">
          📌 PINNED
        </span>
      )}

      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="nb-border bg-paper w-8 h-8 grid place-items-center rounded-md nb-shadow-sm shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
              <path fill="#0a0a0a" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75H4.5a1 1 0 0 0 0 2h8.75a.75.75 0 0 1 0 1.5H4.5A2.5 2.5 0 0 1 2 15V2.5Zm10.5-1H4.5A1 1 0 0 0 3.5 2.5v10.032c.309-.11.633-.166.968-.166H12.5V1.5Z" />
            </svg>
          </span>
          <h3 className="font-display text-lg md:text-xl leading-tight truncate">{repo.name}</h3>
        </div>
        <span className="nb-border bg-ink text-paper text-[10px] md:text-xs font-mono font-bold px-2 py-1 rounded shrink-0">
          {repo.private ? "PRIV" : "PUBLIC"}
        </span>
      </div>

      <p className="font-body font-medium text-sm md:text-base leading-snug flex-1 mb-4 line-clamp-3">
        {repo.description || "No description provided."}
      </p>

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 4).map((t) => (
            <span key={t} className="text-[10px] md:text-xs font-mono font-bold nb-border bg-paper px-2 py-0.5 rounded">
              #{t}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3 md:gap-4 font-mono text-xs md:text-sm font-bold pt-3 border-t-[3px] border-ink">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-3 h-3 rounded-sm nb-border"
              style={{ backgroundColor: color }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">★ {repo.stargazers_count}</span>
        <span className="flex items-center gap-1">⑂ {repo.forks_count}</span>
        <span className="ml-auto text-[10px] md:text-xs opacity-70 truncate">{timeAgo(repo.pushed_at)}</span>
      </div>
    </a>
  );
}

export default memo(RepoCardBase);
