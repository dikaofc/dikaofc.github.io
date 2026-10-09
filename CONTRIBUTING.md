# Contributing to dikaofc.github.io

Terima kasih sudah mau berkontribusi! Repo ini adalah website portfolio + jasa pribadi, tapi semua bentuk kontribusi, mulai dari laporan bug, saran desain, sampai pull request, sangat dihargai.

---

## Daftar Isi

- [Cara Berkontribusi](#cara-berkontribusi)
- [Setup Development](#setup-development)
- [Arsitektur & Struktur Project](#arsitektur--struktur-project)
- [Konvensi Commit](#konvensi-commit)
- [Code Style & Aturan](#code-style--aturan)
- [Design Tokens & Styling](#design-tokens--styling)
- [Proses Pull Request](#proses-pull-request)
- [Checklist Sebelum Submit](#checklist-sebelum-submit)

---

## Cara Berkontribusi

| Jenis | Cara |
|-------|------|
| **Lapor bug** | Buka [Issues](https://github.com/dikaofc/dikaofc.github.io/issues), jelaskan device/browser, langkah reproduksi, dan screenshot jika ada |
| **Saran fitur/desain** | Buka Issue dengan label `enhancement`, deskripsikan masalah & solusi yang diusulkan |
| **Pull request** | Fork repo → buat branch → commit → push → buat PR (detail di bawah) |

> **Penting:** bug mobile & aksesibilitas adalah prioritas utama, jangan ragu lapor walau kecil.

---

## Setup Development

### Prasyarat
```bash
Node.js 18+ (disarankan 20+)
npm
```

### Install & Jalankan
```bash
git clone https://github.com/dikaofc/dikaofc.github.io.git
cd dikaofc.github.io
npm install

npm run dev          # dev server → http://localhost:5173 (HMR aktif, termasuk /layanan dst.)
npm run build        # production build → dist/ (home + semua subhalaman)
npm run build:pages  # build ulang subhalaman saja
npm run preview      # preview hasil build (server clean-URL aware)
```

### Typecheck
```bash
npx tsc --noEmit
```

> Sebelum submit PR, pastikan typecheck bersih dan `npm run build` sukses.

---

## Arsitektur & Struktur Project

Site ini **multi-page (MPA)**, bukan SPA. Setiap halaman adalah entry React sendiri yang di-build menjadi **satu file HTML mandiri** (React + CSS ter-inline) lalu diletakkan di `<nama>/index.html` agar URL bersih (`/layanan`, tanpa `.html`). Tidak ada router library.

```
├── index.html                 # Entry home + inline theme script (anti-flash)
├── <nama>/index.html          # Entry tiap subhalaman (→ URL /<nama>)
├── scripts/
│   ├── build-pages.mjs        # Loop PAGES → build semua subhalaman
│   └── preview.mjs            # Preview server clean-URL aware
├── vite.config.ts             # Build home (singlefile) + plugin dev cleanUrls()
├── vite.page.config.ts        # Build generik subhalaman (env PAGE=<nama>)
├── public/
│   └── …                      # 404, prank, decoy/honeypot, robots, sitemap, brand SVG
├── src/
│   ├── main.tsx               # React entry home
│   ├── main-<nama>.tsx        # React entry tiap subhalaman
│   ├── App.tsx                # Root home: theme, GitHub data, copy-watermark
│   ├── index.css              # Design tokens, utilities, keyframes
│   ├── hooks/useTheme.ts      # Theme state bersama (system/light/dark)
│   ├── lib/
│   │   ├── github.ts          # GitHub API client + FALLBACK data
│   │   ├── site.ts            # SITE constants + nav/footer links
│   │   ├── services.ts        # Data 4 layanan (single source of truth)
│   │   └── projects.ts        # Data 10 proyek + slug map (single source of truth)
│   ├── utils/cn.ts            # clsx + tailwind-merge helper
│   ├── components/            # Komponen bersama semua halaman
│   └── pages/<nama>/          # Komponen spesifik per halaman
└── .github/workflows/deploy.yml   # CI/CD → GitHub Pages
```

### Menambah Halaman Baru

1. Buat `<nama>/index.html` (salin dari halaman lain, ganti `<title>`, `description`, dan path entry)
2. Buat `src/main-<nama>.tsx` + `src/pages/<nama>/<Nama>Page.tsx`
3. Tambahkan `"<nama>"` ke array `PAGES` di `scripts/build-pages.mjs`
4. Tambahkan link di `src/lib/site.ts` (`SUBPAGE_NAV_LINKS` / `SUBPAGE_FOOTER_LINKS`)
5. Jalankan `npm run build` → URL `/<nama>` langsung tersedia

> **Data konten:** jangan hardcode daftar layanan/proyek di komponen. Tambahkan ke `src/lib/services.ts` atau `src/lib/projects.ts` supaya halaman daftar & detail ikut sinkron otomatis.

---

## Konvensi Commit

Gunakan **Conventional Commits** singkat:

```
<type>(<scope>): <deskripsi>
```

| Type | Contoh |
|------|--------|
| `feat` | `feat: tambah theme toggle di mobile` |
| `fix` | `fix: perbaiki overflow kartu di Android` |
| `style` | `style: rapikan spacing heading` |
| `perf` | `perf: cache respons GitHub API di localStorage` |
| `docs` | `docs: update struktur halaman di README` |
| `refactor` | `refactor: pisahkan Services jadi komponen reusable` |
| `chore` | `chore: update dependency` |

Contoh lengkap:
```
feat(layanan): tambah kartu layanan tools

- Ambil data dari src/lib/services.ts
- Stagger delay biar nggak serempak
```

> Hindari commit besar yang campur banyak hal, pecah jadi beberapa commit kecil.

---

## Code Style & Aturan

### React & TypeScript
- **TypeScript strict**, selalu beri tipe pada props & state (`type Props = {...}`)
- Komponen **default export**, satu komponen per file
- Reuse komponen existing (`PageShell`, `PageHero`, `Reveal`, `cn()`), jangan re-implement
- Jangan pakai `any` tanpa alasan kuat
- Semua halaman harus dibungkus `PageShell` (kecuali home yang memakai `App.tsx`)

### Tailwind & CSS
- **Jangan hardcode warna**, selalu pakai token (`bg-panel`, `text-fog`, `text-mute`, `text-accent`, dst.)
- Prefer utility class yang sudah ada (`v-card`, `v-pill`, `v-border`, `btn btn-primary`, `t-h2`, `section`) daripada bikin style baru
- Tambah utility CSS di `src/index.css`, bukan inline style berulang
- Class warisan (`.nb-shadow*`, `.scanlines`, `.glow-*`, `.cta-panel`) dipertahankan sebagai **no-op** untuk markup lama, **jangan dipakai untuk komponen baru**

### Mobile & Hover (aturan paling penting)
- Semua efek hover yang mengubah layout (scale, translate, shadow) **harus aman di perangkat sentuh**. Di CSS, bungkus dengan media query:
  ```css
  @media (hover: hover) { .card:hover { /* … */ } }
  ```
- Untuk utility Tailwind, gunakan varian hover hanya pada elemen yang tidak mengganggu di sentuh; beri `:active` sebagai feedback tekan (tetap jalan di semua device)
- Section harus punya `overflow-hidden` untuk elemen absolut/dekoratif
- Test di viewport mobile (320px–430px), pastikan tidak ada horizontal overflow

### Aksesibilitas
- Elemen interaktif harus punya `aria-label` jika tidak ada teks visual
- Jangan hapus ring `:focus-visible` global, itu untuk keyboard navigation
- Kontras teks sekunder min. WCAG AA (`--c-mute` sudah diset sesuai)
- Hormati `prefers-reduced-motion`, animasi harus mati otomatis

### Performance
- Animasi pakai **transform/opacity** (GPU-friendly), hindari `width/height/top/left`
- Jangan tambah dependency berat untuk animasi sederhana yang bisa CSS
- Tiap halaman di-build single-file, jaga bundle tetap ringan

---

## Design Tokens & Styling

Semua warna diatur via CSS custom properties di `src/index.css` (`:root` untuk light, `[data-theme="dark"]` untuk dark).

### Token utama
| Token | Fungsi |
|-------|--------|
| `--c-panel` / `--c-panel-2` | Background utama / section alternatif |
| `--c-card` | Surface kartu |
| `--c-line` | Border tipis / divider |
| `--c-fog` | Teks utama |
| `--c-mute` / `--c-faint` | Teks sekunder / tersier |
| `--c-accent` | Aksen / link |
| `--c-cta` / `--c-cta-text` | Tombol primer + teksnya |

### Utility class
| Class | Fungsi |
|-------|--------|
| `v-border` | Ring 1px sebagai "border" (shadow layer) |
| `v-card` | Surface kartu (ring + whisper elevation) |
| `v-pill` | Chip/pill aksen |
| `btn` / `btn-primary` / `btn-secondary` | Tombol |
| `section` / `section-divide` | Padding section + divider |
| `t-display` / `t-h2` / `t-h3` / `t-lead` / `t-mono-label` | Skala tipografi |

> Kalau butuh elevasi/border baru, pakai pola `v-card` (ring 1px + shadow tipis), bukan shadow keras ala neo-brutalist.

---

## Proses Pull Request

1. **Fork** repo → clone → buat branch:
   ```bash
   git checkout -b feat/nama-fitur
   ```
2. **Kerjakan perubahan**, ikuti aturan di atas
3. **Validasi lokal:**
   ```bash
   npx tsc --noEmit
   npm run build
   ```
4. **Commit** dengan konvensi di atas → **push** ke branch fork
5. **Buat PR** ke `main` dengan deskripsi jelas:
   - Apa yang diubah & kenapa
   - Screenshot sebelum/sesudah (untuk perubahan visual)
   - Cara testing (device/browser yang sudah dicoba)

### Setelah PR dibuat
- Maintainer akan review dalam beberapa hari
- Beri komentar balasan / resolve review yang diminta
- Jangan squash commit sendiri, maintainer yang mengurus merge

---

## Checklist Sebelum Submit

- [ ] Typecheck bersih (`npx tsc --noEmit`)
- [ ] Build sukses (`npm run build`)
- [ ] Tidak ada `console.log` debug yang tertinggal
- [ ] Tidak ada warna hardcode (pakai token)
- [ ] Efek hover aman di perangkat sentuh
- [ ] Tidak ada overflow horizontal di mobile (320px–430px)
- [ ] `prefers-reduced-motion` tetap berfungsi
- [ ] Ring `:focus-visible` tidak dihapus
- [ ] Halaman baru sudah terdaftar di `PAGES` (`scripts/build-pages.mjs`) & `src/lib/site.ts`
- [ ] Versi dependency baru (jika ada) dicatat di PR

---

Terima kasih sudah berkontribusi! **dikaofc**
