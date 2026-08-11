// Lightweight GitHub API client with in-memory + localStorage cache
// for smooth low-latency loads on repeat visits.

export type GhUser = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  location: string | null;
  blog: string | null;
  created_at: string;
};

export type GhRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  topics?: string[];
  archived: boolean;
  private: boolean;
};

const USERNAME = "dikaofc";
const CACHE_TTL = 1000 * 60 * 10; // 10 minutes

// Custom avatar hosted on Catbox
const CATBOX_AVATAR_URL = "https://files.catbox.moe/4qmqef.jpg";

type CacheEntry<T> = {
  t: number;
  data: T;
};

function readCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);

    if (!raw) return null;

    const parsed = JSON.parse(raw) as CacheEntry<T>;

    if (Date.now() - parsed.t > CACHE_TTL) {
      return null;
    }

    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache<T>(key: string, data: T) {
  try {
    localStorage.setItem(
      key,
      JSON.stringify({
        t: Date.now(),
        data,
      }),
    );
  } catch {
    // Ignore localStorage quota / unavailable storage errors
  }
}

async function ghFetch<T>(url: string, cacheKey: string): Promise<T> {
  const cached = readCache<T>(cacheKey);

  if (cached) {
    // Revalidate in background (stale-while-revalidate)
    fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (d) {
          writeCache(cacheKey, d);
        }
      })
      .catch(() => { });

    return cached;
  }

  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!res.ok) {
    throw new Error(`GitHub API ${res.status}`);
  }

  const data = (await res.json()) as T;

  writeCache(cacheKey, data);

  return data;
}

export async function getUser(): Promise<GhUser> {
  const user = await ghFetch<GhUser>(
    `https://api.github.com/users/${USERNAME}`,
    `gh:user:${USERNAME}`,
  );

  // Keep all GitHub profile data,
  // but replace the avatar with the Catbox-hosted image.
  return {
    ...user,
    avatar_url: CATBOX_AVATAR_URL,
  };
}

export function getRepos(): Promise<GhRepo[]> {
  return ghFetch<GhRepo[]>(
    `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
    `gh:repos:${USERNAME}`,
  );
}

// Fallback data (Pinned repos from user brief) — used if API fails / rate limited
export const FALLBACK_USER: GhUser = {
  login: "dikaofc",
  name: "DikaCode",
  avatar_url: CATBOX_AVATAR_URL,
  html_url: `https://github.com/${USERNAME}`,
  bio: "gatau ah gw mah cuma anak kecil",
  followers: 0,
  following: 0,
  public_repos: 4,
  location: "Indonesia",
  blog: "",
  created_at: "2020-01-01T00:00:00Z",
};

export const FALLBACK_REPOS: GhRepo[] = [
  {
    id: 1,
    name: "DikaRoute",
    full_name: "dikaofc/DikaRoute",
    html_url: "https://github.com/dikaofc/DikaRoute",
    description:
      "A lightweight OpenAI-compatible AI gateway with multi-provider routing, auto-fallback, compression, caching, and performance-focused architecture.",
    fork: false,
    language: "TypeScript",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    topics: ["ai", "gateway", "openai", "typescript"],
    archived: false,
    private: false,
  },
  {
    id: 2,
    name: "dikaofc.github.io",
    full_name: "dikaofc/dikaofc.github.io",
    html_url: "https://github.com/dikaofc/dikaofc.github.io",
    description: "official dikacode",
    fork: false,
    language: "HTML",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    topics: ["portfolio"],
    archived: false,
    private: false,
  },
  {
    id: 3,
    name: "PentesterBotTelegram",
    full_name: "dikaofc/PentesterBotTelegram",
    html_url: "https://github.com/dikaofc/PentesterBotTelegram",
    description:
      "An automated Telegram bot wrapper for pentesting tools, recon commands, and vulnerability scanning workflows.",
    fork: false,
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    topics: ["telegram", "pentesting", "bot", "security"],
    archived: false,
    private: false,
  },
  {
    id: 4,
    name: "RemoteUniversalDevice",
    full_name: "dikaofc/RemoteUniversalDevice",
    html_url: "https://github.com/dikaofc/RemoteUniversalDevice",
    description:
      "Universal remote apps for Android to control your device like smart TV or other smart devices.",
    fork: false,
    language: "Kotlin",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    pushed_at: new Date().toISOString(),
    topics: ["android", "remote", "smart-tv", "kotlin"],
    archived: false,
    private: false,
  },
];

// Colors per language (GitHub-ish, brutal palette)
export const LANG_COLORS: Record<string, string> = {
  TypeScript: "#2a7fff",
  JavaScript: "#ffd400",
  Kotlin: "#a855f7",
  HTML: "#ff5a1f",
  CSS: "#ff4d94",
  Python: "#22c55e",
  Java: "#ea580c",
  Go: "#22d3ee",
  Rust: "#f97316",
  Shell: "#94a3b8",
  Dart: "#0ea5e9",
  C: "#64748b",
  "C++": "#ef4444",
  Swift: "#f43f5e",
  Ruby: "#dc2626",
  PHP: "#7c3aed",
  Vue: "#22c55e",
  Svelte: "#f97316",
};

export function langColor(l?: string | null): string {
  if (!l) return "#0a0a0a";

  return LANG_COLORS[l] ?? "#0a0a0a";
}

export function timeAgo(iso: string): string {
  const d = new Date(iso).getTime();
  const diff = Date.now() - d;

  const s = Math.floor(diff / 1000);

  if (s < 60) return `${s}s lalu`;

  const m = Math.floor(s / 60);

  if (m < 60) return `${m}m lalu`;

  const h = Math.floor(m / 60);

  if (h < 24) return `${h}j lalu`;

  const days = Math.floor(h / 24);

  if (days < 30) return `${days}h lalu`;

  const months = Math.floor(days / 30);

  if (months < 12) return `${months}bln lalu`;

  return `${Math.floor(months / 12)}thn lalu`;
}
