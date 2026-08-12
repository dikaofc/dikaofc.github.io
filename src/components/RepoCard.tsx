import { BookOpen, Star, GitFork } from "lucide-react";
import type { GhRepo } from "../lib/github";

type Props = {
  repo: GhRepo;
  index: number;
  pinned?: boolean;
};

export default function RepoCard({ repo, pinned }: Props) {
  const isLowStar = repo.stargazers_count < 5;
  const hasDesc = !!repo.description;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group nb-border-thick bg-cream rounded-2xl p-5 md:p-6 nb-shadow-lg hover:shadow-[8px_8px_0_#0a0a0a] hover:scale-105 transition-all duration-300 overflow-hidden relative block"
    >
      {/* Animated bg gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange/0 via-transparent to-blue/0 group-hover:from-orange/10 group-hover:to-blue/10 transition-all duration-300" />

      <div className="relative">
        {/* Badge */}
        {pinned && (
          <div className="inline-block nb-border bg-orange text-white font-mono text-xs font-bold px-2.5 py-1 rounded-md mb-3 group-hover:scale-110 transition-transform">
            📌 PINNED
          </div>
        )}

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl leading-tight mb-2 flex items-start gap-2 group-hover:translate-x-1 transition-transform">
          <BookOpen
            size={24}
            strokeWidth={2.5}
            className="shrink-0 mt-1 group-hover:rotate-12 transition-transform"
            aria-hidden="true"
          />
          <span className="flex-1 break-words">{repo.name}</span>
        </h3>

        {/* Description */}
        {hasDesc && (
          <p className="font-body font-semibold text-sm md:text-base opacity-80 mb-4 line-clamp-2 group-hover:opacity-100 transition-opacity">
            {repo.description}
          </p>
        )}

        {/* Topics */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.topics.slice(0, 3).map((topic) => (
              <span
                key={topic}
                className="font-mono text-[10px] md:text-xs bg-paper nb-border rounded px-2 py-1 text-ink font-bold group-hover:bg-orange group-hover:text-white transition-colors"
              >
                #{topic}
              </span>
            ))}
            {repo.topics.length > 3 && (
              <span className="font-mono text-[10px] md:text-xs opacity-60">+{repo.topics.length - 3}</span>
            )}
          </div>
        )}

        {/* Meta */}
        <div className="flex items-center gap-3 pt-3 border-t-[3px] border-ink">
          {repo.language && (
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold bg-paper nb-border rounded px-2 py-1 group-hover:scale-110 transition-transform">
              <span className="w-2 h-2 rounded-full bg-blue" />
              {repo.language}
            </div>
          )}

          <div className="flex items-center gap-4 ml-auto text-xs font-mono font-bold">
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
