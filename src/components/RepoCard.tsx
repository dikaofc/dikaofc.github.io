import { BookOpen, Star, GitFork, Crown } from "lucide-react";
import type { GhRepo } from "../lib/github";
import { langColor, timeAgo } from "../lib/github";
import { cn } from "../utils/cn";

type Props = {
  repo: GhRepo;
  index: number;
  pinned?: boolean;
  featured?: boolean;
};

export default function RepoCard({ repo, pinned, featured }: Props) {
  const isLowStar = repo.stargazers_count < 5;
  const hasDesc = !!repo.description;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative block w-full min-w-0 max-w-full h-full overflow-hidden nb-border-thick bg-card rounded-2xl p-5 md:p-6 nb-shadow-lg active:scale-[0.98] pointer-fine:hover:scale-[1.03] transition-all duration-300",
        featured && "sm:col-span-2 lg:col-span-2 scanlines card-glow",
        !featured && "pointer-fine:hover:shadow-[var(--c-shadow-offset-hover)_var(--c-shadow-offset-hover)_0_var(--c-shadow)]"
      )}
    >
      {/* Animated bg gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon/0 via-transparent to-blue/0 group-hover:from-neon/15 group-hover:to-blue/15 transition-all duration-300" />

      <div className="relative z-[3]">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {pinned && (
            <span className="inline-block nb-border bg-orange text-white font-mono text-xs font-bold px-2.5 py-1 rounded-md pointer-fine:group-hover:scale-110 transition-transform">
              📌 PINNED
            </span>
          )}
          {featured && (
            <span className="inline-flex items-center gap-1 nb-border bg-paper text-ink font-mono text-xs font-bold px-2.5 py-1 rounded-md pointer-fine:group-hover:scale-110 transition-transform">
              <Crown size={13} strokeWidth={2.5} aria-hidden="true" />
              FLAGSHIP
            </span>
          )}
          <span className="ml-auto font-mono text-[11px] font-bold text-mute">
            {timeAgo(repo.pushed_at)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl leading-tight mb-2 flex items-start gap-2 group-hover:translate-x-1 transition-transform text-fog">
          <BookOpen
            size={24}
            strokeWidth={2.5}
            className={cn(
              "shrink-0 mt-1 group-hover:rotate-12 transition-transform",
              featured ? "text-neon" : "text-paper"
            )}
            aria-hidden="true"
          />
          <span className="flex-1 break-words">{repo.name}</span>
        </h3>

        {/* Description */}
        {hasDesc && (
          <p
            className={cn(
              "font-body font-semibold text-sm md:text-base text-mute mb-4 line-clamp-2 group-hover:text-fog transition-colors",
              featured && "text-base md:text-lg"
            )}
          >
            {repo.description}
          </p>
        )}

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="font-mono text-[10px] md:text-xs bg-paper nb-border rounded px-2 py-1 text-ink font-bold group-hover:bg-neon group-hover:text-ink transition-colors"
              >
                #{topic}
              </span>
            ))}
            {repo.topics.length > 3 && (
              <span className="font-mono text-[10px] md:text-xs text-mute">+{repo.topics.length - 3}</span>
            )}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 pt-3 border-t-[3px] border-line">
          {repo.language && (
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold bg-panel nb-border-soft rounded px-2 py-1 text-fog pointer-fine:group-hover:scale-110 transition-transform">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: langColor(repo.language) }}
              />
              {repo.language}
            </div>
          )}

          <div className="flex items-center gap-4 ml-auto text-xs font-mono font-bold text-mute">
            {!isLowStar && (
              <div className="inline-flex items-center gap-1 group-hover:text-orange transition-colors">
                <Star size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>{repo.stargazers_count}</span>
              </div>
            )}

            {repo.forks_count > 0 && (
              <div className="inline-flex items-center gap-1 group-hover:text-pink transition-colors">
                <GitFork size={16} strokeWidth={2.5} aria-hidden="true" />
                <span>{repo.forks_count}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}
