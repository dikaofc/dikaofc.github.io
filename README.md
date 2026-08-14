# <div align="center"><img src="https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&size=35&duration=3000&pause=1000&color=000000&center=true&vCenter=true&width=600&height=60&lines=DIKACODE;Full+Stack+Developer;AI+Engineer;Open+Source+Builder" alt="DikaCode" /></div>

---

<div align="center">

## 🚀 Portfolio — Cyberpunk / Neo-Brutalist Web Experience

**Vite + React 19 + TypeScript + Tailwind CSS v4 + Three.js**

</div>

---

## ✨ About This Project

Ini adalah **portfolio website** `dikaofc.github.io` — dibangun ulang total dari HTML statis menjadi **Vite React SPA** modern dengan visual **Cyberpunk × Neo-Brutalism × Fluid Glass**:

- 🖥️ **3D Hero** — logo SMK 3D (Three.js) dengan **mouse parallax**, idle float, satellite cyan + partikel, dan pause render saat off-screen
- 🎛️ **Theme system** — Auto / Light / Dark, tersimpan di `localStorage`, **sinkron antar-tab** (event `storage`), ikon toggle sun↔moon yang **morph**, dan menghormati `prefers-color-scheme`
- ⌨️ **Typewriter effect** — bio hero mengetik khas terminal dengan block cursor hijau
- 🐾 **Mascot family** — "Diko & friends" (Robot, Cat, Bug, Spark) menghuni tiap section, 100% CSS shapes
- 🎯 **Featured repo** — DikaRoute tampil menonjol dengan efek **scanline sweep + neon glow**
- 🖼️ **Halaman 3D kedua** — `portofolio.html` (3D logo SMK, neo-brutalism) dengan theme yang konsisten & sinkron
- 🔍 **Live GitHub data** — user stats & repos di-fetch realtime dari API GitHub, dengan fallback saat offline
- 💧 **Invisible watermark** — teks yang di-copy otomatis disisipkan tanda `— dikacode`
- 📱 **Mobile-first** — hover di-scope `pointer-fine` (anti sticky-hover Android), scrollbar disembunyikan, ring `:focus-visible` kuning untuk keyboard navigation, dukungan `prefers-reduced-motion`

**Live:** [dikaofc.github.io](https://dikaofc.github.io) · [3D page](https://dikaofc.github.io/portofolio.html)

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Framework** | [React 19](https://react.dev) + [Vite 7](https://vitejs.dev) |
| **Language** | TypeScript 5.9 (strict) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + CSS custom properties (design tokens) |
| **3D** | [Three.js](https://threejs.org) (`@react-three/fiber`-free, vanilla via `Hero3D`) |
| **Icons** | lucide-react + react-icons |
| **Utilities** | clsx + tailwind-merge (`cn()`) |
| **Build** | `vite-plugin-singlefile` → satu file HTML untuk main site |
| **Deploy** | GitHub Actions → GitHub Pages |

---

## 📁 Project Structure

```
├── index.html                 # HTML entry + inline theme script (no-flash)
├── public/
│   ├── portofolio.html        # Halaman 3D kedua (logo SMK 3D + theme toggle)
│   └── LOGO-SMK-BHINNEKA-*.png
├── src/
│   ├── main.tsx               # React entry
│   ├── App.tsx                # Root: theme state, GitHub data, copy-watermark
│   ├── index.css              # Design tokens, utilities, keyframes
│   ├── lib/github.ts          # GitHub API client + FALLBACK data
│   ├── utils/cn.ts            # clsx + tailwind-merge helper
│   └── components/
│       ├── Nav.tsx            # Floating glass navbar + theme toggle
│       ├── Hero.tsx           # Hero (Hero3D, Typewriter, Mascot)
│       ├── Hero3D.tsx         # 3D logo SMK (Three.js, drag-to-rotate)
│       ├── Typewriter.tsx     # Terminal typing effect
│       ├── Mascot.tsx         # Diko & friends (variants: diko/cat/bug/spark)
│       ├── Repos.tsx          # All repositories + filter bahasa
│       ├── RepoCard.tsx       # Kartu repo (featured scanline/glow untuk DikaRoute)
│       ├── Stack.tsx          # Tech stack grid
│       ├── Contact.tsx        # Social links + CTA
│       ├── Footer.tsx
│       ├── Watermark.tsx      # Invisible tiled watermark
│       └── Reveal.tsx         # Scroll-reveal (IntersectionObserver)
└── .github/workflows/deploy.yml  # CI/CD → GitHub Pages
```

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js 18+ (disarankan 20+)
npm
```

### Run Locally
```bash
git clone https://github.com/dikaofc/dikaofc.github.io.git
cd dikaofc.github.io
npm install

npm run dev        # dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview hasil build
```

> Typecheck manual: `npx tsc --noEmit`

---

## 🎨 Design Tokens & Knob `--c-shadow-offset`

Semua warna & shadow diatur lewat **CSS custom properties** di `src/index.css` (`:root` untuk dark, `[data-theme="light"]` untuk light). Jangan hardcode warna di komponen — pakai token.

### Surface & Text Tokens

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

### 🎛️ Shadow System — satu knob, semua ikut

Semua shadow neobrutal diturunkan dari **satu variabel**: `--c-shadow-offset`.

Ubah satu baris ini (di `src/index.css` **dan** `public/portofolio.html` untuk halaman 3D):

```css
:root {
  --c-shadow-offset: 6px;   /* ← ganti ke 4 / 6 / 8 untuk menebal/menipis */
}
```

| Shadow | Kalkulasi | @ 4px | @ 6px | @ 8px | Dipakai oleh |
|--------|-----------|-------|-------|-------|--------------|
| **base** | `--c-shadow-offset` | 4px | 6px | 8px | `.nb-shadow` (kartu, chip, CTA) |
| **sm** | `× 2/3` | ≈ 2.7px | 4px | ≈ 5.3px | `.nb-shadow-sm` (chip kecil, badge) |
| **lg** | `× 4/3` | ≈ 5.3px | 8px | ≈ 10.7px | `.nb-shadow-lg` (kartu besar) |
| **hover** | `× 5/3` | ≈ 6.7px | 10px | ≈ 13.3px | `.nb-press:hover` (grow saat hover) |
| **press** | `÷ 3` | ≈ 1.3px | 2px | ≈ 2.7px | `.nb-press:active` (saat ditekan) |

```css
/* di src/index.css — semua utility shadow sudah memakai var turunan */
.nb-shadow    { box-shadow: var(--c-shadow-offset) var(--c-shadow-offset) 0 0 var(--c-shadow); }
.nb-shadow-sm { box-shadow: var(--c-shadow-offset-sm) var(--c-shadow-offset-sm) 0 0 var(--c-shadow); }
.nb-shadow-lg { box-shadow: var(--c-shadow-offset-lg) var(--c-shadow-offset-lg) 0 0 var(--c-shadow); }
.nb-press:active { transform: translate(3px, 3px); box-shadow: var(--c-shadow-offset-press) var(--c-shadow-offset-press) 0 0 var(--c-shadow), 0 0 18px rgba(255, 230, 0, .45); }
@media (hover: hover) {
  .nb-press:hover { transform: translate(-2px, -2px); box-shadow: var(--c-shadow-offset-hover) var(--c-shadow-offset-hover) 0 0 var(--c-shadow); }
}
```

**Warna shadow** diatur token `--c-shadow` (terpisah dari ketebalan):
- **Dark:** `#ffe600` (kuning neon)
- **Light:** `#000000` (hitam keras — look original neo-brutalist)

> Ada juga varian berwarna konstan: `.nb-shadow-orange/pink/blue/neon` (6px) dan hover `.nb-press-{color}:hover` — di light mode semuanya override menjadi hitam agar sesuai look original.

### Utility Lain

| Class | Fungsi |
|-------|--------|
| `.nb-border` / `.nb-border-thick` / `.nb-border-soft` | Border 3px / 4px / 2px theme-aware |
| `.dots-bg` / `.grid-bg` | Background dots / grid theme-aware |
| `.glow-neon` / `.glow-green` / `.glow-yellow` / `.card-glow` | Neon glow rings |
| `.glitch` | Efek glitch RGB saat hover |
| `.scanlines` | Overlay scanline + sweep (kartu featured) |
| `.marquee` | Running text stripe kuning |
| `.stripe` | Strip kuning diagonal |
| `.type-cursor` | Block cursor hijau terminal |
| `.float` / `.blink` / `.pulse-glow` | Animasi halus |

---

## 🌓 Theme System

- **Pilihan pengguna:** `system` → `light` → `dark` (cycle), disimpan di `localStorage["dika-theme"]`
- **Default:** `system` — mengikuti OS (`prefers-color-scheme`), dan **live-update** saat OS berubah
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

Semua `aria-hidden` + `pointer-events-none`, mati otomatis saat `prefers-reduced-motion`.

---

## 🚢 Deployment (GitHub Actions)

Push ke `main` memicu `.github/workflows/deploy.yml`:

1. `npm ci` → `npm run build` (produksi `dist/`)
2. Upload artifact Pages
3. `actions/deploy-pages` → deploy ke GitHub Pages

**Setup sekali saja** (Settings → Pages → **Build and deployment → Source → GitHub Actions**), setelah itu setiap push otomatis live di `https://dikaofc.github.io`.

> `dist/` dan `node_modules/` di-gitignore — jangan pernah commit hasil build.

---

## 📊 Featured Projects

### 1. **DikaRoute** — AI Gateway Router
> High-performance unified routing untuk multiple AI providers. OpenAI-compatible, auto-fallback, low-latency.

**[View Repository](https://github.com/dikaofc/DikaRoute)** · **[Live Demo](https://dikaroute.vercel.app)**

### 2. **PentesterBot** — Security Automation
> Telegram bot wrapper untuk pentesting & vulnerability scanning.

**[View Repository](https://github.com/dikaofc/PentesterBotTelegram)**

### 3. **RemoteUniversal** — Android Device Control
> Aplikasi remote control lintas perangkat (Android native, Kotlin, Smart TV support).

**[View Repository](https://github.com/dikaofc/RemoteUniversalDevice)**

---

## 🌐 Connect & Follow

<div align="center">

| Platform | Link |
|----------|------|
| **GitHub** | [github.com/dikaofc](https://github.com/dikaofc) |
| **npm** | [npmjs.com/~dikaofc](https://www.npmjs.com/~dikaofc) |
| **Telegram** | [t.me/dikaacode](https://t.me/dikaacode) |
| **Website** | [dikaofc.github.io](https://dikaofc.github.io) |

</div>

---

## 💰 Support & Donations

<div align="center">

### **[🔗 Donate via Saweria](https://saweria.co/dikatech)**

```
Donasi membantu:
• Pengembangan fitur baru
• Riset & testing tools
• Biaya infrastruktur
• Kontribusi open-source
```

</div>

---

## 🎨 Design Philosophy

- **Neo-Brutalism** — bold borders, hard offset shadows, high contrast, tactile press
- **Cyberpunk accents** — neon glows (cyan/violet/yellow) di dark mode
- **Fluid Glass** — backdrop blur hanya di tempat yang membantu hierarchy (navbar, chip)
- **Mobile-first** — hover hanya di device yang punya hover; interaksi touch tetap terasa "ngepress"
- **Performance** — animasi GPU-friendly (transform/opacity), scanline & marquee via CSS, Three.js pause render saat off-screen (IntersectionObserver) + DPR clamp
- **Accessibility** — kontras WCAG AA, ring `:focus-visible`, semantic HTML, dukungan `prefers-reduced-motion`

---

<div align="center">

### Let's Build Something Great Together

```
💻 Code | 🚀 Deploy | 🔄 Iterate | 📈 Scale
```

---

**Last Updated:** August 14, 2026 · **Status:** Actively Developing · **License:** MIT & Open Source

⭐ If you find value in these projects, please star them on GitHub!

</div>
