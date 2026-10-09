# 🚀 dikaofc.github.io — Portfolio & Jasa DIKACODE

[![Deploy Status](https://github.com/dikaofc/dikaofc.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/dikaofc/dikaofc.github.io/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/github/deployments/dikaofc/dikaofc.github.io/github-pages?label=Pages&logo=github&labelColor=%23000)](https://github.com/dikaofc/dikaofc.github.io/deployments)
[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.3.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/github/license/dikaofc/dikaofc.github.io?color=%23000)](https://github.com/dikaofc/dikaofc.github.io/blob/main/LICENSE)

Website portfolio + jasa pribadi **DikaCode (DikaOfc / ObitoGlory)** — dibangun dengan **Vite + React 19 + TypeScript + Tailwind CSS v4**, memakai **visual language ala Vercel** (kanvas bersih, border tipis sebagai "shadow", tipografi Geist yang rapat).

> **Live:** [obitoglory.tech](https://obitoglory.tech) · [Layanan](https://obitoglory.tech/layanan) · [Halaman 3D](https://obitoglory.tech/portofolio)

---

## 📑 Daftar Isi

- [✨ Fitur](#-fitur)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Cara Menjalankan](#-cara-menjalankan)
- [🧩 Arsitektur Multi-Page](#-arsitektur-multi-page)
- [📄 Halaman](#-halaman)
- [🎨 Design Tokens & Styling](#-design-tokens--styling)
- [🌓 Theme System](#-theme-system)
- [🛡️ Fitur "Keamanan" & Anti-Scraper](#️-fitur-keamanan--anti-scraper)
- [📁 Struktur Project](#-struktur-project)
- [📸 Screenshot](#-screenshot)
- [🚢 Deployment](#-deployment)
- [🌐 Connect](#-connect)

---

## ✨ Fitur

| | Fitur | Detail |
|---|-------|--------|
| 🖥️ | **Hero + Typewriter** | Bio hero diketik gaya terminal (`Typewriter`), plus kartu statistik (repos/followers/following) dari GitHub |
| 🎛️ | **Theme System** | Auto / Light / Dark — tersimpan di `localStorage`, sinkron antar-tab (event `storage`), menghormati `prefers-color-scheme`, anti-flash (script inline sebelum first paint) |
| 🔍 | **Live GitHub Data** | Stats (hero) & daftar repo (`/proyek`) di-fetch realtime dari GitHub API dengan cache localStorage (stale-while-revalidate) + `FALLBACK_*` saat offline/rate-limited |
| 📄 | **Multi-Page (22 halaman)** | MPA single-file — tiap halaman di-build sendiri via `scripts/build-pages.mjs` + `vite.page.config.ts` (tanpa router library) |
| 🧭 | **Clean URLs** | Tiap halaman jadi `<nama>/index.html` → URL `/<nama>` tanpa `.html`, jalan native di GitHub Pages, Vercel, dan dev server |
| 🛠️ | **Halaman Layanan** | 4 layanan + halaman detail per-layanan (`/layanan/{website,bot,tools,perbaikan}`) |
| 💰 | **Halaman Harga** | Paket open jasa (website/bot/tools/maintenance) + opsi nego custom |
| 📝 | **Halaman FAQ** | Accordion aksesibel (`aria-expanded` / `aria-controls`) — 8 pertanyaan umum |
| 🗂️ | **Detail Per-Proyek** | `/proyek/<slug>` — 10 halaman detail dari satu sumber data (`src/lib/projects.ts`) |
| 🧊 | **Halaman 3D** | `/portofolio` — halaman statis (Three.js dari CDN) dengan logo SMK drag-to-rotate, theme sinkron dengan main site |
| 💧 | **Watermark Tak Terlihat** | Tile SVG "dikacode" ~3% opacity (masuk screenshot) + teks yang di-copy disisipi `— dikacode` |
| 🛡️ | **SecurityShield** | Prank DevTools/bot/VPN — lihat [bagian khusus](#️-fitur-keamanan--anti-scraper) |
| 📱 | **Mobile-First & A11y** | Ring `:focus-visible`, hover di-scope `@media (hover: hover)`, dukungan `prefers-reduced-motion`, target sentuh ≥44px |

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | [React 19](https://react.dev) + [Vite 7](https://vitejs.dev) |
| Language | TypeScript 5.9 (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + CSS custom properties (design tokens) |
| Fonts | Geist + Geist Mono (Google Fonts) |
| Icons | lucide-react + react-icons |
| Utilities | clsx + tailwind-merge (`cn()`) |
| Build | `vite-plugin-singlefile` **multi-page** → satu file HTML per halaman (`npm run build` = home + `scripts/build-pages.mjs`) |
| 3D | Three.js **hanya** di `/portofolio` (statis, dari CDN) |
| Deploy | GitHub Actions → GitHub Pages (juga siap Vercel) |

---

## 🚀 Cara Menjalankan

### Prasyarat
```bash
Node.js 18+ (disarankan 20+)
npm
```

### Jalankan Lokal
```bash
git clone https://github.com/dikaofc/dikaofc.github.io.git
cd dikaofc.github.io
npm install

npm run dev          # dev server → http://localhost:5173 (termasuk /layanan, /tentang, dst.)
npm run build        # production build → dist/ (home + SEMUA subhalaman)
npm run build:pages  # build ulang subhalaman saja (tanpa home)
npm run preview      # preview hasil build (server clean-URL aware)
```

> Typecheck manual: `npx tsc --noEmit`

---

## 🧩 Arsitektur Multi-Page

Site ini **bukan SPA**. Setiap halaman adalah entry React sendiri yang di-build menjadi **satu file HTML mandiri** (React + CSS ter-inline), lalu diletakkan di `<nama>/index.html` sehingga URL-nya bersih (`/layanan`, bukan `/layanan.html`).

| Bagian | Peran |
|--------|-------|
| `index.html` + `src/main.tsx` + `src/App.tsx` | Home |
| `<nama>/index.html` + `src/main-<nama>.tsx` | Entry tiap subhalaman |
| `src/pages/<nama>/…` | Komponen halaman |
| `vite.config.ts` | Build home (singlefile) + plugin dev `cleanUrls()` (`appType: "mpa"`) |
| `vite.page.config.ts` | Build generik subhalaman via env `PAGE=<nama>` (`emptyOutDir: false` agar tidak menghapus hasil home) |
| `scripts/build-pages.mjs` | Loop `PAGES` → build tiap subhalaman |
| `scripts/preview.mjs` | Server preview yang sadar clean URL (karena `vite preview` biasa fallback ke `index.html` root) |

**Menambah halaman baru:** buat `<nama>/index.html` + `src/main-<nama>.tsx` + `src/pages/<nama>/`, lalu tambahkan `"<nama>"` ke array `PAGES` di `scripts/build-pages.mjs` dan daftarkan link di `src/lib/site.ts`.

---

## 📄 Halaman

Website ini **multi-page (22 halaman)** — tiap halaman di-build menjadi satu file HTML single-file yang mandiri. Tidak ada router library; navigasi antar-halaman memakai link biasa.

| Path | Halaman | Isi |
|------|---------|-----|
| `/` | Home | Landing: hero + typewriter, banner open jasa, stack, kontak (daftar repo pindah ke `/proyek`) |
| `/tentang` | Tentang | Profil, fakta, perjalanan, keahlian, motto |
| `/layanan` | Layanan | 4 layanan, benefits, alur kerja, CTA |
| `/layanan/website` | Detail: Website | Overview, fitur, alur, deliverables, layanan terkait |
| `/layanan/bot` | Detail: Bot | + platform Telegram / WhatsApp / Discord |
| `/layanan/tools` | Detail: Tools | |
| `/layanan/perbaikan` | Detail: Perbaikan | Bug fix, maintenance, optimasi |
| `/proyek` | Proyek | Showcase proyek unggulan — data live dari GitHub API |
| `/proyek/dikaroute` | Detail: DikaRoute | AI gateway multi-provider — routing, fallback, kompresi, caching |
| `/proyek/pentesterbot` | Detail: PentesterBot | Bot Telegram automation pentesting |
| `/proyek/remoteuniversal` | Detail: RemoteUniversal | Aplikasi Android universal remote untuk smart TV |
| `/proyek/website` | Detail: dikaofc.github.io | Portfolio ini sendiri |
| `/proyek/obitobuff` | Detail: ObitoBuff CLI | AI coding agent CLI local-only |
| `/proyek/agentbuff` | Detail: AgentBuff | AI coding agent untuk Android (Termux) |
| `/proyek/telegrambot-ai` | Detail: TelegramBot AI | Userbot Telegram auto-reply AI |
| `/proyek/pentesterbot-website` | Detail: PentesterBot Website | Website resmi PentesterBot v2 |
| `/proyek/dikaroute-website` | Detail: DikaRoute Website | Website resmi + docs DikaRoute |
| `/proyek/freebuff-patch` | Detail: Freebuff Patch | Patch & toolkit Freebuff di Android/Termux |
| `/harga` | Harga | Paket open jasa + nego custom |
| `/kontak` | Kontak | Semua channel kontak + panel Telegram |
| `/testimoni` | Testimoni | Empty state "jadilah yang pertama" |
| `/faq` | FAQ | Accordion pertanyaan umum |
| `/portofolio` | 3D Version | Halaman 3D statis (logo SMK drag-to-rotate) |

> Semua URL **tanpa ekstensi** — tiap halaman di-build sebagai `<nama>/index.html`, jadi `/layanan` jalan natively di GitHub Pages, Vercel, dan dev server tanpa rewrite.

### Halaman Layanan

Data 4 layanan bersumber dari satu file: **`src/lib/services.ts`**. Alur section `/layanan`:

| # | Section | Konten |
|---|---------|--------|
| 1 | **Hero** | `Open jasa` + tagline + CTA *Konsultasi sekarang* / *Lihat layanan* + chip HUD |
| 2 | **Layanan DIKACODE** | 4 kartu (`v-card`) — icon, nomor, fitur, platform chips, CTA *Pelajari layanan →* |
| 3 | **Kenapa DIKACODE?** | 4 benefit: Aman terpercaya 🛡️, Cepat & efisien ⚡, Kualitas terjamin ✔️, Support responsif 🎧 |
| 4 | **Alur Kerja** | Timeline 4 langkah: Konsultasi → Perencanaan → Development → Delivery |
| 5 | **CTA** | Panel `v-card` → **@dikaacode** |

| Layanan | Halaman | Fitur utama |
|---------|---------|-------------|
| Jasa Pembuatan Website | `/layanan/website` | Landing page, company profile, portfolio, custom, responsive, performance |
| Jasa Pembuatan Bot | `/layanan/bot` | Telegram / WhatsApp / Discord, custom commands, automation, API, database, admin |
| Jasa Pembuatan Tools | `/layanan/tools` | Custom tools, CLI, utility software, workflow automation |
| Perbaikan & Pengembangan | `/layanan/perbaikan` | Bug fix, error fix, maintenance, optimasi, refactoring |

Tiap halaman detail (`/layanan/<nama>`) berisi **Overview**, **Fitur**, **Alur Pengerjaan**, **Cocok Untuk**, **Yang Kamu Dapat**, **Layanan Terkait**, dan **CTA Telegram** — di-render oleh satu komponen bersama `src/pages/service/ServiceDetailPage.tsx`. Halaman detail proyek memakai pola serupa via `src/pages/proyek/ProjectDetailPage.tsx`.

---

## 🎨 Design Tokens & Styling

Semua warna diatur via CSS custom properties di `src/index.css` (`:root` untuk light, `[data-theme="dark"]` untuk dark). **Jangan hardcode warna di komponen — selalu pakai token.**

### Token Utama

| Token | Light | Dark | Fungsi |
|-------|-------|------|--------|
| `--c-panel` | `#ffffff` | `#000000` | Background utama |
| `--c-panel-2` | `#fafafa` | `#0a0a0a` | Section alternatif (ritme) |
| `--c-card` | `#ffffff` | `#0a0a0a` | Surface kartu |
| `--c-line` | `#ebebeb` | `#262626` | Border tipis / divider |
| `--c-fog` | `#171717` | `#ededed` | Teks utama |
| `--c-mute` | `#4d4d4d` | `#a1a1a1` | Teks sekunder |
| `--c-faint` | `#666666` | `#888888` | Teks tersier / label mono |
| `--c-accent` | `#0070f3` | `#3291ff` | Aksen / link |
| `--c-cta` | `#171717` | `#ededed` | Tombol primer |
| `--c-cta-text` | `#ffffff` | `#000000` | Teks tombol primer |

### Utility Class (di `src/index.css`)

| Class | Fungsi |
|-------|--------|
| `v-border` | Ring 1px sebagai "border" (shadow layer) |
| `v-card` | Surface kartu (ring + whisper elevation) |
| `v-pill` | Chip/pill aksen (bg accent-soft, teks accent) |
| `btn` / `btn-primary` / `btn-secondary` | Tombol dasar / primer / sekunder |
| `section` / `section-divide` | Padding section + divider atas |
| `t-display` / `t-h2` / `t-h3` / `t-lead` / `t-mono-label` | Skala tipografi display |
| `font-display` / `font-body` / `font-mono` | Font Geist / Geist Mono |
| `marquee` | Animasi marquee (dipakai bila perlu) |

> Ada beberapa class "warisan" (`.nb-shadow*`, `.scanlines`, `.glow-*`, `.cta-panel`, dll) yang sengaja dipertahankan sebagai **no-op** agar markup lama tetap valid — tapi **jangan dipakai untuk komponen baru**.

---

## 🌓 Theme System

- **Pilihan pengguna:** `system` → `light` → `dark` (cycle), disimpan di `localStorage["dika-theme"]`
- **Default:** `system` — mengikuti OS (`prefers-color-scheme`); fallback CSS `:root` adalah light
- **Anti-flash:** script inline di tiap `<nama>/index.html` menerapkan tema sebelum first paint
- **Sinkron antar-tab:** listener event `storage` — ganti tema di satu tab, tab lain ikut
- **Meta theme-color:** ikut tema (`#000000` dark / `#ffffff` light)
- **Ikon:** SVG sun / moon / monitor yang morph, menandakan mode aktif
- Halaman `/portofolio` memakai key `localStorage` yang **sama**, jadi tema tetap konsisten

---

## 🛡️ Fitur "Keamanan" & Anti-Scraper

Semua ini **bagian dari desain (edukasi + anti-bot)**, bukan celah asli. Komponen `src/components/SecurityShield.tsx`:

| Deteksi | Perilaku |
|---------|----------|
| **DevTools** | Blokir F12 / Ctrl+Shift+I/J/C / Ctrl+U, deteksi selisih ukuran window, dan timing `debugger` → tampilkan modal "Akses dibatasi" |
| **Bot / scraper** | Deteksi `navigator.webdriver`, pola UA headless (HeadlessChrome, Puppeteer, curl, dll) → tampilkan **halaman prank terminal palsu** (HTTP 200, isi lelucon) |
| **VPN / proxy** | Bandingkan offset UTC dari `ipwho.is` dengan timezone browser; selisih ≥2 jam → peringatan |

Selain itu:

- **Decoy / honeypot** di `public/`: `.env`, `config.php`, `database.sql`, `wp-login.php`, `phpinfo.php`, `shell.php`, `admin/`, `prank.html` — semuanya pura-pura "bocor", isinya lelucon.
- `vercel.json` me-rewrite path sensitif (`/admin`, `/\.env`, `/wp-login\.php`, dst.) ke `prank.html` dengan status **200**.
- **Security headers** di `vercel.json`: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, dan `Content-Security-Policy`.
- **Watermark** tak terlihat (`Watermark.tsx`) + sisipan `— dikacode` saat teks di-copy (`App.tsx`).
- `public/robots.txt` (Disallow honeypot) + `public/sitemap.xml` (25 URL).

---

## 📁 Struktur Project

```
├── index.html                        # Entry home + inline theme script (anti-flash)
├── tentang/  layanan/  proyek/  harga/  kontak/  testimoni/  faq/
│   └── index.html                    # tiap folder = 1 halaman → URL /<nama>
├── layanan/{website,bot,tools,perbaikan}/index.html   # → URL /layanan/<nama>
├── proyek/<slug>/index.html          # 10 detail proyek → URL /proyek/<slug>
├── public/
│   ├── portofolio/index.html         # Halaman 3D kedua (logo SMK 3D) → /portofolio
│   ├── 404.html  prank.html          # Halaman 404 & prank
│   ├── .env  config.php  database.sql  wp-login.php  phpinfo.php  shell.php  admin/
│   │                                 # Decoy / honeypot (isi lelucon)
│   ├── robots.txt  sitemap.xml
│   └── LOGO-SMK-BHINNEKA-remove-bg-io.png
├── scripts/
│   ├── build-pages.mjs               # Build semua subhalaman (loop PAGES)
│   └── preview.mjs                   # Preview server clean-URL aware
├── vite.config.ts                    # Build home (singlefile) + dev cleanUrls()
├── vite.page.config.ts               # Build generik subhalaman (env PAGE=<nama>)
├── vercel.json                       # Routes + security headers (Vercel)
├── src/
│   ├── main.tsx                      # React entry home
│   ├── main-<nama>.tsx               # React entry tiap subhalaman (21 file)
│   ├── App.tsx                       # Root home: theme, GitHub user, copy-watermark
│   ├── index.css                     # Design tokens, utilities, keyframes
│   ├── hooks/useTheme.ts             # Theme state bersama (system/light/dark)
│   ├── lib/
│   │   ├── github.ts                 # GitHub API client + FALLBACK data
│   │   ├── site.ts                   # SITE constants + nav/footer links
│   │   ├── services.ts               # Single source of truth: data 4 layanan
│   │   └── projects.ts               # Single source of truth: 10 proyek + slug map
│   ├── utils/cn.ts                   # clsx + tailwind-merge helper
│   ├── components/                   # Komponen bersama (dipakai semua halaman)
│   └── pages/<nama>/                 # Komponen spesifik per halaman
└── .github/workflows/deploy.yml      # CI/CD → GitHub Pages
```

### Komponen Bersama (`src/components/`)

| Komponen | Peran |
|----------|-------|
| `PageShell.tsx` | Layout bersama subhalaman: Watermark + SecurityShield + Nav + main + Footer + back-to-top |
| `Nav.tsx` | Navbar sticky + theme toggle (links configurable per halaman) |
| `Footer.tsx` | Footer (nav links configurable) + link halaman 3D |
| `PageHero.tsx` | Header halaman (chip, title display, desc, CTA) + `Reveal` |
| `Hero.tsx` · `Typewriter.tsx` | Hero home + efek ketik terminal |
| `Stack.tsx` · `Contact.tsx` | Section tech stack & kontak (Contact di-reuse halaman `/kontak`) |
| `OpenJasaBanner.tsx` | Banner CTA "Open Jasa" di home |
| `Reveal.tsx` | Scroll-reveal (IntersectionObserver) |
| `Watermark.tsx` | Watermark tile transparan |
| `SecurityShield.tsx` | Prank DevTools / bot / VPN |

### Struktur per Halaman (`src/pages/`)

| Halaman | Komponen |
|---------|----------|
| `layanan/` | `LayananPage` → `LayananHero`, `Services`, `Benefits`, `Process`, `LayananCta` |
| `service/` | `ServiceDetailPage` (layout detail bersama) + `WebsitePage`, `BotPage`, `ToolsPage`, `PerbaikanPage` |
| `tentang/` | `TentangPage` (profil, journey, keahlian, motto) |
| `proyek/` | `ProyekPage` (fetch `getRepos` live) + `ProjectDetailPage` (layout detail bersama) + 10 wrapper halaman detail |
| `harga/` | `HargaPage` (4 paket + CTA nego) |
| `kontak/` | `KontakPage` (hero + reuse `Contact`) |
| `testimoni/` | `TestimoniPage` (empty state) |
| `faq/` | `FaqPage` (accordion aksesibel) |

### Cara Menambah Halaman Baru

1. Buat folder `<nama>/index.html` (salin dari halaman lain, ganti `<title>` + path entry)
2. Buat `src/main-<nama>.tsx` + `src/pages/<nama>/<Nama>Page.tsx`
3. Tambahkan `"<nama>"` ke array `PAGES` di `scripts/build-pages.mjs`
4. Tambahkan link di `src/lib/site.ts` (nav/footer)
5. Jalankan `npm run build` → URL `/nama` langsung tersedia

---

## 📸 Screenshot

Screenshot halaman diambil dari browser lalu disimpan di `docs/screenshots/`.

![Halaman Layanan — DIKACODE](/docs/screenshots/layanan.png)

*`/layanan` — kartu layanan, benefit, alur kerja, CTA.*

![Halaman Detail Bot — DIKACODE](/docs/screenshots/layanan-bot.png)

*`/layanan/bot` — detail per-layanan: overview, fitur, alur pengerjaan, deliverables.*

> **Cara menambah screenshot:** buka halaman di browser (dev atau live) → screenshot penuh halaman → simpan sebagai `docs/screenshots/<nama>.png` (mis. `layanan.png`). File yang belum ada akan tampil sebagai gambar kosong sampai diisi. Lihat `docs/screenshots/README.md`.

---

## 🚢 Deployment

### GitHub Pages
Push ke `main` memicu `.github/workflows/deploy.yml`:

1. `npm ci` → `npm run build` (produksi `dist/`)
2. Upload artifact Pages
3. `actions/deploy-pages` → deploy ke GitHub Pages

**Setup sekali saja** di repo (Settings → Pages → **Build and deployment → Source → GitHub Actions**), setelah itu setiap push otomatis live.

### Vercel
`vercel.json` sudah disiapkan (static build + clean-URL routes + security headers + rewrite honeypot).

> `dist/` dan `node_modules/` di-gitignore — jangan pernah commit hasil build.

---

## 🌐 Connect

| Platform | Link |
|----------|------|
| GitHub | [github.com/dikaofc](https://github.com/dikaofc) |
| npm | [npmjs.com/~dikaofc](https://www.npmjs.com/~dikaofc) |
| Telegram | [t.me/dikaacode](https://t.me/dikaacode) |
| Website | [obitoglory.tech](https://obitoglory.tech) |
| Donate | [Saweria](https://saweria.co/dikatech) |

---

**Last Updated:** 2026 · **License:** MIT & Open Source · **[Cara Berkontribusi](CONTRIBUTING.md)**

⭐ Star repo ini kalau bermanfaat!
