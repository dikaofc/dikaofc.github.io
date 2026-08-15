# 🚀 dikaofc.github.io — Portfolio Neo-Brutalist

[![Deploy Status](https://github.com/dikaofc/dikaofc.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/dikaofc/dikaofc.github.io/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/github/deployments/dikaofc/dikaofc.github.io/github-pages?label=Pages&logo=github&color=%23ffe600&labelColor=%230a0c11)](https://github.com/dikaofc/dikaofc.github.io/deployments)
[![React](https://img.shields.io/badge/React-19.2.6-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-7.3.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.17-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-0.185.1-000000?logo=three.js&logoColor=white)](https://threejs.org)
[![License](https://img.shields.io/github/license/dikaofc/dikaofc.github.io?color=%23FFDE4D&labelColor=%230a0c11)](https://github.com/dikaofc/dikaofc.github.io/blob/main/LICENSE)

Portfolio website pribadi dengan visual **Cyberpunk × Neo-Brutalism** — dibangun dengan **Vite + React 19 + TypeScript + Tailwind CSS v4 + Three.js**.

> **Live:** [dikaofc.github.io](https://dikaofc.github.io) · [Layanan](https://dikaofc.github.io/layanan) · [Halaman 3D](https://dikaofc.github.io/portofolio)

---

## 📑 Daftar Isi

- [✨ Fitur](#-fitur)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Cara Menjalankan](#-cara-menjalankan)
- [🎛️ Cara Tuning `--c-shadow-offset`](#️-cara-tuning---c-shadow-offset)
- [📄 Halaman](#-halaman)
- [📸 Screenshot](#-screenshot)
- [📁 Struktur Project](#-struktur-project)
- [🌓 Theme System](#-theme-system)
- [🐾 Mascot Family](#-mascot-family)
- [🚢 Deployment](#-deployment)
- [🌐 Connect](#-connect)

---

## ✨ Fitur

| | Fitur | Detail |
|---|-------|--------|
| 🖥️ | **3D Hero** | Logo SMK 3D (Three.js) — mouse parallax, idle float, satellite cyan + partikel, pause render saat off-screen (IntersectionObserver), DPR clamp |
| 🎛️ | **Theme System** | Auto / Light / Dark — tersimpan di `localStorage`, sinkron antar-tab (event `storage`), ikon toggle sun↔moon morph, menghormati `prefers-color-scheme` |
| ⌨️ | **Typewriter** | Bio hero mengetik khas terminal dengan block cursor hijau |
| 🐾 | **Mascot Family** | "Diko & friends" (Robot, Cat, Bug, Spark) — 100% CSS shapes, `aria-hidden`, mati saat `prefers-reduced-motion` |
| 🎯 | **Featured Repo** | DikaRoute tampil menonjol dengan scanline sweep + neon glow |
| 🖼️ | **Halaman 3D Kedua** | `/portofolio` (3D logo SMK drag-to-rotate) — theme konsisten & sinkron dengan main site |
| 📄 | **Multi-Page (13 halaman)** | MPA single-file — setiap halaman di-build sendiri via `scripts/build-pages.mjs` + `vite.page.config.ts` (tanpa dependency router) |
| 🛠️ | **Halaman Layanan** | Glass cards + digital globe 3D (Three.js), benefits, alur kerja, CTA panel futuristic |
| 🔗 | **Detail Per-Layanan** | `/layanan/{website,bot,tools,perbaikan}` — overview, fitur, alur pengerjaan, deliverables, related services |
| 💰 | **Halaman Harga** | Paket open jasa (website/bot/tools/maintenance) + nego custom |
| 📝 | **Halaman FAQ** | Accordion aksesibel (`aria-expanded`) — 8 pertanyaan umum |
| 🔍 | **Live GitHub Data** | Stats & repos di-fetch realtime dari GitHub API, dengan fallback saat offline |
| 💧 | **Invisible Watermark** | Teks yang di-copy otomatis disisipkan `— dikacode` |
| 📱 | **Mobile-First** | Hover di-scope `pointer-fine` (anti sticky-hover Android), scrollbar disembunyikan, ring `:focus-visible` kuning, dukungan `prefers-reduced-motion` |

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | [React 19](https://react.dev) + [Vite 7](https://vitejs.dev) |
| Language | TypeScript 5.9 (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + CSS custom properties (design tokens) |
| 3D | [Three.js](https://threejs.org) (vanilla, tanpa react-three-fiber) |
| Icons | lucide-react + react-icons |
| Utilities | clsx + tailwind-merge (`cn()`) |
| Build | `vite-plugin-singlefile` **multi-page** → satu file HTML per halaman (`npm run build` = home + `scripts/build-pages.mjs`) |
| Deploy | GitHub Actions → GitHub Pages |

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
npm run preview      # preview hasil build
```

> Typecheck manual: `npx tsc --noEmit`
>
> Menambah halaman baru? Cukup buat `<nama>.html` + `src/main-<nama>.tsx` + `src/pages/<nama>/`, lalu tambahkan nama ke `PAGES` di `scripts/build-pages.mjs`.

---

## 🎛️ Cara Tuning `--c-shadow-offset`

Semua shadow neobrutal (kartu, chip, CTA, tombol) diturunkan dari **satu variabel knob**:

```css
/* di src/index.css — bagian :root */
--c-shadow-offset: 6px;   /* ← ganti ke 4 / 6 / 8 untuk menebal/menipis */
```

Ubah satu baris itu, **semua shadow di seluruh website ikut berubah**. Knob yang sama juga ada di `public/portofolio/index.html` untuk halaman 3D.

### Turunan Otomatis

| Shadow | Kalkulasi | @ 4px | @ 6px | @ 8px | Dipakai oleh |
|--------|-----------|-------|-------|-------|--------------|
| **base** | `--c-shadow-offset` | 4px | 6px | 8px | `.nb-shadow` (kartu, chip, CTA) |
| **sm** | `× 2/3` | ≈ 2.7px | 4px | ≈ 5.3px | `.nb-shadow-sm` (chip kecil, badge) |
| **lg** | `× 4/3` | ≈ 5.3px | 8px | ≈ 10.7px | `.nb-shadow-lg` (kartu besar) |
| **hover** | `× 5/3` | ≈ 6.7px | 10px | ≈ 13.3px | `.nb-press:hover` (grow saat hover) |
| **press** | `÷ 3` | ≈ 1.3px | 2px | ≈ 2.7px | `.nb-press:active` (saat ditekan) |

### Contoh CSS (sudah memakai var)

```css
.nb-shadow    { box-shadow: var(--c-shadow-offset) var(--c-shadow-offset) 0 0 var(--c-shadow); }
.nb-shadow-sm { box-shadow: var(--c-shadow-offset-sm) var(--c-shadow-offset-sm) 0 0 var(--c-shadow); }
.nb-shadow-lg { box-shadow: var(--c-shadow-offset-lg) var(--c-shadow-offset-lg) 0 0 var(--c-shadow); }

.nb-press:active {
  transform: translate(3px, 3px);
  box-shadow: var(--c-shadow-offset-press) var(--c-shadow-offset-press) 0 0 var(--c-shadow), 0 0 18px rgba(255, 230, 0, .45);
}
@media (hover: hover) {
  .nb-press:hover {
    transform: translate(-2px, -2px);
    box-shadow: var(--c-shadow-offset-hover) var(--c-shadow-offset-hover) 0 0 var(--c-shadow);
  }
}
```

### Warna Shadow

Ketebalan (`offset`) dan warna (`--c-shadow`) adalah token terpisah:

| Tema | `--c-shadow` |
|------|--------------|
| Dark (default) | `#ffe600` (kuning neon) |
| Light (original) | `#000000` (hitam keras) |

> Ada juga varian berwarna konstan `.nb-shadow-orange/pink/blue/neon` dan `.nb-press-{color}:hover` — di light mode semuanya override jadi hitam agar sesuai look original.

### Design Tokens Lainnya

| Token | Dark (default) | Light (original) | Fungsi |
|-------|----------------|------------------|--------|
| `--c-panel` | `#0a0c11` | `#ffffff` | Background section |
| `--c-panel-2` | `#0d1018` | `#f2f1ec` | Section alternatif (ritme) |
| `--c-card` | `#12151d` | `#ffffff` | Surface kartu |
| `--c-line` | `#222735` | `#d6d5de` | Border tipis / divider |
| `--c-fog` | `#eef0f6` | `#000000` | Teks utama + border tebal |
| `--c-mute` | `#a3a9b8` | `#4f4f5c` | Teks sekunder (WCAG AA) |
| `--c-ink` | `#0a0a0a` | `#0a0a0a` | Teks di atas chip kuning |
| `--color-paper` | `#ffe600` | `#FFDE4D` | Kuning signature |

Semua token didefinisikan di `src/index.css` (`:root` untuk dark, `[data-theme="light"]` untuk light). **Jangan hardcode warna di komponen — selalu pakai token.**

---

## 📄 Halaman

Website ini **multi-page (MPA)** — tiap halaman di-build menjadi satu file HTML single-file yang mandiri (React + CSS ter-inline). Tidak ada router library; navigasi antar-halaman memakai link biasa, jadi semua path jalan tanpa 404 di GitHub Pages.

| Path | Halaman | Isi |
|------|---------|-----|
| `/` | Home | Landing portfolio: 3D hero, repos live GitHub, stack, kontak |
| `/tentang` | Tentang | Profil, fakta, perjalanan, keahlian, motto |
| `/layanan` | Layanan | 4 layanan (glass cards) + digital globe 3D, benefits, alur kerja, CTA |
| `/layanan/website` | Detail: Website | Overview, fitur, alur, deliverables, layanan terkait |
| `/layanan/bot` | Detail: Bot | + platform Telegram / WhatsApp / Discord |
| `/layanan/tools` | Detail: Tools | |
| `/layanan/perbaikan` | Detail: Perbaikan | Bug fix, maintenance, optimasi |
| `/proyek` | Proyek | Showcase proyek unggulan — data live dari GitHub API |
| `/harga` | Harga | Paket open jasa + nego custom |
| `/kontak` | Kontak | Semua channel kontak + panel Telegram |
| `/testimoni` | Testimoni | Empty state "jadilah yang pertama" (siap diisi klien) |
| `/faq` | FAQ | Accordion pertanyaan umum |
| `/portofolio` | 3D Version | Halaman 3D statis (logo SMK drag-to-rotate) |

> Semua URL **tanpa ekstensi** — tiap halaman di-build sebagai `<nama>/index.html`, jadi `/layanan` jalan natively di GitHub Pages, Vercel, dan dev server tanpa rewrite.

---

## 📸 Screenshot

Screenshot halaman utama & layanan diambil dari browser lalu disimpan di `docs/screenshots/`.

![Halaman Layanan — DIKACODE](/docs/screenshots/layanan.png)

*`/layanan` — glass cards, digital globe 3D (Three.js), neon cyan, CTA command panel.*

![Halaman Detail Bot — DIKACODE](/docs/screenshots/layanan-bot.png)

*`/layanan/bot` — detail per-layanan: overview, fitur, alur pengerjaan, deliverables.*

> **Cara menambah screenshot:** buka halaman di browser (dev atau live) → screenshot penuh halaman → simpan sebagai `docs/screenshots/<nama>.png` (mis. `layanan.png`). File yang belum ada akan tampil sebagai gambar kosong sampai diisi.

---

## 📁 Struktur Project

```
├── index.html                    # Entry home + inline theme script (anti-flash)
├── tentang/ layanan/ proyek/ harga/ kontak/ testimoni/ faq/          # tiap folder berisi index.html → URL /<nama>
├── layanan/website/ layanan/bot/ layanan/tools/ layanan/perbaikan/   # detail layanan → URL /layanan/<nama>
├── public/
│   ├── portofolio/               # Halaman 3D kedua (logo SMK 3D + theme toggle) → /portofolio
│   ├── 404.html                  # Halaman 404 kustom
│   └── LOGO-SMK-BHINNEKA-remove-bg-io.png
├── scripts/
│   └── build-pages.mjs           # Build SEMUA subhalaman single-file
├── vite.config.ts                # Build home (singlefile)
├── vite.page.config.ts           # Build generik subhalaman (env PAGE=…)
├── src/
│   ├── main.tsx                  # React entry home
│   ├── main-<page>.tsx           # React entry tiap subhalaman (tentang, layanan, …)
│   ├── App.tsx                   # Root home: theme, GitHub data, copy-watermark
│   ├── index.css                 # Design tokens, utilities, keyframes, .cta-panel
│   ├── hooks/
│   │   └── useTheme.ts           # Theme state bersama (system/light/dark)
│   ├── lib/
│   │   ├── github.ts             # GitHub API client + FALLBACK data
│   │   ├── site.ts               # Konstanta kontak + nav/footer links semua halaman
│   │   └── services.ts           # Single source of truth data 4 layanan
│   ├── utils/
│   │   └── cn.ts                 # clsx + tailwind-merge helper
│   ├── components/
│   │   ├── Nav.tsx               # Navbar + theme toggle (links configurable)
│   │   ├── PageShell.tsx         # Layout bersama semua subhalaman
│   │   ├── PageHero.tsx          # Header futuristic bersama (chip + title + CTA)
│   │   ├── Hero.tsx / Hero3D.tsx / Typewriter.tsx / Mascot.tsx
│   │   ├── Repos.tsx / RepoCard.tsx / Stack.tsx / Contact.tsx
│   │   ├── Footer.tsx / Watermark.tsx / Reveal.tsx
│   └── pages/
│       ├── layanan/              # Hero, Services, Benefits, Process, CTA, DigitalCore
│       ├── service/              # ServiceDetailPage + wrapper per layanan
│       └── tentang/ proyek/ harga/ kontak/ testimoni/ faq/
└── .github/workflows/
    └── deploy.yml                # CI/CD → GitHub Pages
```

---

## 🌓 Theme System

- **Pilihan pengguna:** `system` → `light` → `dark` (cycle), disimpan di `localStorage["dika-theme"]`
- **Default:** `system` — mengikuti OS (`prefers-color-scheme`) dan **live-update** saat OS berubah
- **Anti-flash:** script inline di `index.html` menerapkan tema sebelum first paint
- **Sinkron antar-tab:** listener event `storage` — ganti tema di satu tab, tab lain ikut
- **Meta theme-color:** ikut tema (`#0a0c11` dark / `#ffffff` light)
- **Ikon:** SVG sun & moon yang **morph** (rotate + scale + fade), bukan sekadar rotate

---

## 🐾 Mascot Family

| Variant | Lokasi | Animasi |
|---------|--------|---------|
| `diko` (Robot 🤖) | Hero | float, blink, wave |
| `cat` (Kucing 🐱) | Hero + Contact | bob, tail-wag |
| `bug` (Serangga 🐛) | Repos | hop, antenna |
| `spark` (✦) | Stack | twinkle |

Semua mascot `aria-hidden` + `pointer-events-none`, dan mati otomatis saat `prefers-reduced-motion`.

---

## 🚢 Deployment

Push ke `main` memicu `.github/workflows/deploy.yml`:

1. `npm ci` → `npm run build` (produksi `dist/`)
2. Upload artifact Pages
3. `actions/deploy-pages` → deploy ke GitHub Pages

**Setup sekali saja** di repo (Settings → Pages → **Build and deployment → Source → GitHub Actions**), setelah itu setiap push otomatis live di `https://dikaofc.github.io`.

> `dist/` dan `node_modules/` di-gitignore — jangan pernah commit hasil build.

---

## 🌐 Connect

| Platform | Link |
|----------|------|
| GitHub | [github.com/dikaofc](https://github.com/dikaofc) |
| npm | [npmjs.com/~dikaofc](https://www.npmjs.com/~dikaofc) |
| Telegram | [t.me/dikaacode](https://t.me/dikaacode) |
| Website | [dikaofc.github.io](https://dikaofc.github.io) |
| Donate | [Saweria](https://saweria.co/dikatech) |

---

**Last Updated:** August 15, 2026 · **License:** MIT & Open Source · **[Cara Berkontribusi](CONTRIBUTING.md)**

⭐ Star repo ini kalau bermanfaat!
