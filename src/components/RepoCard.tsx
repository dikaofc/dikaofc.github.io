import { BookOpen, Star, GitFork } from "lucide-react";
import type { GhRepo } from "../lib/github";
import { langColor, timeAgo } from "../lib/github";
import { projectSlug } from "../lib/projects";
import { cn } from "../utils/cn";

type Props = {
  repo: GhRepo;
  index: number;
  pinned?: boolean;
  featured?: boolean;
};

export default function RepoCard({ repo, pinned, featured }: Props) {
  const hasDesc = !!repo.description;
  const slug = projectSlug(repo.name);

  return (
    <a
      href={slug ? `/proyek/${slug}` : repo.html_url}
      {...(slug ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group relative block w-full h-full v-card p-5 transition-transform duration-150 hover:-translate-y-0.5",
        featured && "sm:col-span-2 lg:col-span-2",
      )}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {pinned && (
          <span className="v-pill">Pinned</span>
        )}
        {featured && (
          <span className="v-pill">Flagship</span>
        )}
        {slug && (
          <span className="font-mono text-[11px] font-medium text-accent">
            Detail
          </span>
        )}
        <span className="ml-auto font-mono text-[11px] text-faint">
          {timeAgo(repo.pushed_at)}
        </span>
      </div>

      <h3 className="font-display font-semibold text-lg leading-snug mb-2 flex items-start gap-2 text-fog">
        <BookOpen
          size={20}
          strokeWidth={2}
          className="shrink-0 mt-0.5 text-faint"
          aria-hidden="true"
        />
        <span className="flex-1 break-words">{repo.name}</span>
      </h3>

      {hasDesc && (
        <p className="text-sm leading-relaxed text-mute mb-4 line-clamp-2">
          {repo.description}
        </p>
      )}

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="font-mono text-[11px] rounded px-1.5 py-0.5 bg-panel-2 text-mute"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 3 && (
            <span className="font-mono text-[11px] text-faint">+{repo.topics.length - 3}</span>
          )}
        </div>
      )}

      <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid var(--c-line)" }}>
        {repo.language && (
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-fog">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: langColor(repo.language) }}
            />
            {repo.language}
          </span>
        )}

        <div className="flex items-center gap-3 ml-auto text-xs font-mono text-faint">
          <span className="inline-flex items-center gap-1">
            <Star size={14} strokeWidth={2} aria-hidden="true" />
            {repo.stargazers_count}
          </span>
          {repo.forks_count > 0 && (
            <span className="inline-flex items-center gap-1">
              <GitFork size={14} strokeWidth={2} aria-hidden="true" />
              {repo.forks_count}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
