import {
  Route,
  Shield,
  MonitorSmartphone,
  Globe,
  Terminal,
  Smartphone,
  MessageCircle,
  Layout,
  BookOpen,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ProjectDetail = {
  /** page slug, e.g. "dikaroute" → /proyek/dikaroute */
  slug: string;
  /** display name */
  name: string;
  /** GitHub repo URL */
  repo: string;
  icon: LucideIcon;
  tagline: string;
  long: string[];
  topics: string[];
  highlights: string[];
  tech: string[];
  links: { label: string; href: string; external?: boolean }[];
};

/** Single source of truth for DIKACODE's featured projects */
export const PROJECTS: ProjectDetail[] = [
  {
    slug: "dikaroute",
    name: "DikaRoute",
    repo: "https://github.com/dikaofc/DikaRoute",
    icon: Route,
    tagline:
      "AI gateway ringan dan cepat — multi-provider routing, fallback otomatis, kompresi, dan caching.",
    long: [
      "DikaRoute adalah AI gateway berarsitektur performa yang kompatibel dengan OpenAI. Satu endpoint, banyak provider — request otomatis dirouting ke provider yang tersedia, dan kalau satu provider mati atau rate-limited, sistem langsung fallback ke provider lain tanpa kamu sadari.",
      "Dibangun dengan fokus performa: respons dikompresi dan di-cache untuk memangkas latensi dan biaya. Cocok dipakai sebagai lapisan di depan berbagai API AI untuk aplikasi, bot, maupun tools internal.",
    ],
    topics: ["ai", "gateway", "openai", "typescript"],
    highlights: [
      "Multi-provider routing",
      "Auto-fallback saat provider down",
      "OpenAI-compatible endpoint",
      "Kompresi respons",
      "Caching cerdas",
      "Arsitektur fokus performa",
    ],
    tech: ["TypeScript", "Node.js", "OpenAI API"],
    links: [{ label: "GitHub Repo", href: "https://github.com/dikaofc/DikaRoute", external: true }],
  },
  {
    slug: "pentesterbot",
    name: "PentesterBotTelegram",
    repo: "https://github.com/dikaofc/PentesterBotTelegram",
    icon: Shield,
    tagline:
      "Bot Telegram untuk automation pentesting — recon, perintah, dan workflow vulnerability scanning.",
    long: [
      "PentesterBotTelegram membungkus tools pentesting ke dalam satu bot Telegram yang bisa dijalankan langsung dari chat: perintah recon otomatis, eksekusi tools, sampai workflow vulnerability scanning yang terstruktur.",
      "Dibuat untuk mempercepat pekerjaan security: alih-alih membuka terminal dan menjalankan banyak perintah manual, semua bisa di-trigger lewat bot — dengan output yang dikirim balik ke chat.",
    ],
    topics: ["telegram", "pentesting", "bot", "security"],
    highlights: [
      "Perintah recon otomatis",
      "Wrapper tools pentesting",
      "Workflow vulnerability scanning",
      "Output langsung ke chat",
      "Ekstensi perintah mudah",
    ],
    tech: ["JavaScript", "Node.js", "Telegram Bot API"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/dikaofc/PentesterBotTelegram", external: true },
    ],
  },
  {
    slug: "remoteuniversal",
    name: "RemoteUniversalDevice",
    repo: "https://github.com/dikaofc/RemoteUniversalDevice",
    icon: MonitorSmartphone,
    tagline:
      "Aplikasi Android universal remote untuk mengontrol smart TV dan perangkat pintar lainnya.",
    long: [
      "RemoteUniversalDevice adalah aplikasi Android native yang mengubah HP menjadi remote universal: kontrol smart TV, perangkat pintar, dan perangkat lain yang kompatibel — tanpa perlu remote fisik tambahan.",
      "Dibangun dengan Kotlin untuk pengalaman native yang ringan dan responsif, dengan antarmuka yang simpel biar gampang dipakai siapa saja.",
    ],
    topics: ["android", "remote", "smart-tv", "kotlin"],
    highlights: [
      "Kontrol smart TV",
      "Dukungan perangkat pintar",
      "Native Android (Kotlin)",
      "Antarmuka simpel",
      "Ringan & responsif",
    ],
    tech: ["Kotlin", "Android"],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/dikaofc/RemoteUniversalDevice",
        external: true,
      },
    ],
  },
  {
    slug: "website",
    name: "dikaofc.github.io",
    repo: "https://github.com/dikaofc/dikaofc.github.io",
    icon: Globe,
    tagline:
      "Website portfolio ini sendiri — Vite + React + Tailwind, single-file build, dan multi-page.",
    long: [
      "Website yang sedang kamu buka ini adalah proyek open source: portfolio DIKACODE dengan visual neo-brutalist × cyberpunk, lengkap dengan halaman layanan, proyek, harga, FAQ, dan halaman 3D.",
      "Dibangun dengan Vite + React 19 + TypeScript + Tailwind CSS v4 + Three.js. Tiap halaman di-build sebagai satu file HTML single-file, dengan clean URL tanpa ekstensi — semua berjalan di GitHub Pages.",
    ],
    topics: ["portfolio", "react", "vite", "tailwind"],
    highlights: [
      "Multi-page (23 halaman)",
      "3D hero dengan Three.js",
      "Theme system (auto/light/dark)",
      "Clean URLs tanpa .html",
      "Deploy otomatis via GitHub Actions",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Three.js"],
    links: [
      { label: "Live Website", href: "https://dikaofc.github.io", external: true },
      { label: "GitHub Repo", href: "https://github.com/dikaofc/dikaofc.github.io", external: true },
    ],
  },
  {
    slug: "obitobuff",
    name: "ObitoBuff CLI",
    repo: "https://github.com/dikaofc/ObitoBuffCLI",
    icon: Terminal,
    tagline:
      "AI coding agent CLI yang jalan 100% di model kamu sendiri — sub-agents, file finding, editing, bash, research, dan code review.",
    long: [
      "Obitobuff adalah AI coding agent terminal yang powerful: TypeScript monorepo (dibangun dengan Bun) yang punya sub-agents khusus untuk file finding, editing, bash, research, dan code review.",
      "Fokusnya local-only — seluruhnya berjalan di endpoint OpenAI-compatible milikmu sendiri (Ollama, OmniRoute, 9Route, OpenRouter, LM Studio, vLLM, dan lainnya) lewat obitobuff.config.json. Tanpa backend Obitobuff, tanpa login, tanpa sessions, tanpa iklan.",
    ],
    topics: ["ai", "cli", "agent", "typescript", "bun"],
    highlights: [
      "Sub-agents khusus (finding, editing, bash, research, review)",
      "File finding & editing",
      "Eksekusi bash",
      "Riset web",
      "Code review",
      "100% local — tanpa backend",
      "Install & auto-update dari GitHub",
    ],
    tech: ["TypeScript", "Bun", "OpenAI-compatible API", "Ollama", "OpenRouter", "vLLM"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/dikaofc/ObitoBuffCLI", external: true },
    ],
  },
  {
    slug: "agentbuff",
    name: "AgentBuff",
    repo: "https://github.com/dikaofc/AgentBuffAndroid",
    icon: Smartphone,
    tagline:
      "DikaBuff Agent CLI v0.5.0 — AI coding agent untuk Android yang jalan langsung di Termux.",
    long: [
      "AgentBuff (DikaBuff Agent CLI) adalah AI coding agent versi Android — dioptimalkan untuk jalan langsung di Termux, dengan command yang ringkas dan hemat resource.",
      "Bagian dari ekosistem coding agent DikaCode, AgentBuff membawa kekuatan AI coding agent ke perangkat Android tanpa perlu PC.",
    ],
    topics: ["android", "termux", "ai", "cli"],
    highlights: [
      "Jalan langsung di Termux",
      "CLI ringan & hemat resource",
      "AI coding agent full",
      "Gratis dipakai",
    ],
    tech: ["TypeScript", "Termux", "Node.js"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/dikaofc/AgentBuffAndroid", external: true },
    ],
  },
  {
    slug: "telegrambot-ai",
    name: "TelegramBot AI",
    repo: "https://github.com/dikaofc/telegrambot-ai",
    icon: MessageCircle,
    tagline:
      "Userbot Telegram yang membalas chat otomatis pakai AI — belajar gaya bahasa kamu, punya memori, dan agent tools.",
    long: [
      "telegrambot-ai adalah userbot Telegram (Telethon) yang membalas chat otomatis pakai AI. Ia belajar gaya bahasa kamu — makin sering dipakai makin natural — punya memori jangka panjang, dan bisa transkripsi voice note lalu membalas pakai suara.",
      "Multi-provider OpenAI-compatible dengan fallback berurutan + Ollama lokal. Dilengkapi agent tools gratis tanpa API key: waktu WIB, kalkulator aman, pencarian web (DuckDuckGo), cuaca (open-meteo), dan kurs (frankfurter).",
    ],
    topics: ["telegram", "ai", "userbot", "telethon", "python"],
    highlights: [
      "Auto-reply AI multi-provider",
      "Belajar gaya bahasa (gaul/dry/multibahasa)",
      "Memori jangka panjang via tool-calling",
      "Agent tools gratis tanpa key",
      "Transkripsi voice note → balas suara",
      "Fallback berurutan + Ollama lokal",
    ],
    tech: ["Python", "Telethon", "OpenAI-compatible API", "Ollama"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/dikaofc/telegrambot-ai", external: true },
    ],
  },
  {
    slug: "pentesterbot-website",
    name: "PentesterBot Website",
    repo: "https://github.com/dikaofc/PentesterBotTelegramWebsite",
    icon: Layout,
    tagline:
      "Website resmi PentesterBot v2 — UI Fluid Glass ala iOS dengan data nyata dari source project bot.",
    long: [
      "PentesterBot v2 — Website adalah website resmi untuk agent pentest & bug bounty di Telegram. Dibangun dengan UI Fluid Glass iOS-inspired (React + Vite + TypeScript) plus server Express yang menyajikan data nyata dari source project bot — bukan konten hardcoded.",
      "Live di pentesterbot.vercel.app dengan CI + deploy GitHub Pages otomatis.",
    ],
    topics: ["website", "react", "vite", "express", "pentesting"],
    highlights: [
      "UI Fluid Glass iOS-inspired",
      "Data nyata dari source bot",
      "React + Vite + TypeScript",
      "Server Express",
      "Deploy otomatis (CI + Pages)",
      "Live di Vercel",
    ],
    tech: ["React", "Vite", "TypeScript", "Express"],
    links: [
      { label: "Live Website", href: "https://pentesterbot.vercel.app", external: true },
      {
        label: "GitHub Repo",
        href: "https://github.com/dikaofc/PentesterBotTelegramWebsite",
        external: true,
      },
    ],
  },
  {
    slug: "dikaroute-website",
    name: "DikaRoute Website",
    repo: "https://github.com/dikaofc/WebsiteDikaRoute",
    icon: BookOpen,
    tagline:
      "Website resmi + dokumentasi lengkap untuk DikaRoute — Unified AI Gateway & Intelligent Model Router.",
    long: [
      "DikaRoute — Website adalah website lengkap untuk DikaRoute (Unified AI Gateway & Intelligent Model Router), dibangun dengan React + TypeScript + Tailwind CSS v4 + Framer Motion di frontend dan Express di backend.",
      "Beranda berisi hero animasi + terminal live, marquee 290+ provider, fitur, pipeline routing, statistik, keamanan, CLI, FAQ, dan CTA. Dokumentasi punya 8 halaman (Quickstart, Arsitektur, API, Konfigurasi, Keamanan, CLI, Docker, Termux) dengan sidebar & TOC.",
    ],
    topics: ["website", "react", "tailwind", "framer-motion", "docs"],
    highlights: [
      "Hero animasi + terminal live",
      "Marquee 290+ provider",
      "8 halaman dokumentasi + TOC",
      "Framer Motion",
      "Backend Express",
      "Live di Vercel",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Express"],
    links: [
      { label: "Live Website", href: "https://dikaroute.vercel.app", external: true },
      { label: "GitHub Repo", href: "https://github.com/dikaofc/WebsiteDikaRoute", external: true },
    ],
  },
  {
    slug: "freebuff-patch",
    name: "Freebuff Patch",
    repo: "https://github.com/dikaofc/freebuffPatchAndroid",
    icon: Wrench,
    tagline:
      "Patch & toolkit biar Freebuff (AI coding agent gratis) jalan di Android/Termux — glibc no-proot, hemat context, anti-limit.",
    long: [
      "Freebuff rilis sebagai ELF GNU/glibc. Di Termux tanpa proot, binary-nya gak bisa jalan langsung: interpreter /lib/ld-linux-aarch64.so.1 gak ada, /tmp gak writable, terminal broker gagal, dan TUI rusak.",
      "freebuffPatchAndroid berisi satu perintah untuk memperbaiki semuanya — glibc no-proot, hemat context, anti-limit — dan menjaganya tetap hidup setelah npm update.",
    ],
    topics: ["android", "termux", "patch", "shell", "toolkit"],
    highlights: [
      "No-proot (glibc asli)",
      "Satu perintah setup",
      "Hemat context",
      "Anti-limit",
      "Tetap hidup setelah npm update",
    ],
    tech: ["Shell", "Termux", "glibc", "Node.js"],
    links: [
      { label: "GitHub Repo", href: "https://github.com/dikaofc/freebuffPatchAndroid", external: true },
    ],
  },
];

const REPO_TO_SLUG: Record<string, string> = {
  DikaRoute: "dikaroute",
  PentesterBotTelegram: "pentesterbot",
  RemoteUniversalDevice: "remoteuniversal",
  "dikaofc.github.io": "website",
  ObitoBuffCLI: "obitobuff",
  AgentBuffAndroid: "agentbuff",
  "telegrambot-ai": "telegrambot-ai",
  PentesterBotTelegramWebsite: "pentesterbot-website",
  WebsiteDikaRoute: "dikaroute-website",
  freebuffPatchAndroid: "freebuff-patch",
};

/** Map a GitHub repo name to its detail-page slug (or null). */
export function projectSlug(repoName: string): string | null {
  return REPO_TO_SLUG[repoName] ?? null;
}
