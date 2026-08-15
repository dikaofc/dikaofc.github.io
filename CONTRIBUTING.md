# Contributing to dikaofc.github.io

Terima kasih sudah mau berkontribusi! 🎉 Repo ini adalah portfolio website pribadi, tapi semua bentuk kontribusi — mulai dari laporan bug, saran desain, sampai pull request — sangat dihargai.

---

## 📋 Daftar Isi

- [Cara Berkontribusi](#cara-berkontribusi)
- [Setup Development](#setup-development)
- [Struktur Project](#struktur-project)
- [Konvensi Commit](#konvensi-commit)
- [Code Style & Aturan](#code-style--aturan)
- [Design Tokens & Shadow](#design-tokens--shadow)
- [Proses Pull Request](#proses-pull-request)
- [Checklist Sebelum Submit](#checklist-sebelum-submit)

---

## Cara Berkontribusi

| Jenis | Cara |
|-------|------|
| 🐛 **Lapor bug** | Buka [Issues](https://github.com/dikaofc/dikaofc.github.io/issues) — jelaskan device/browser, langkah reproduksi, dan screenshot jika ada |
| 💡 **Saran fitur/desain** | Buka Issue dengan label `enhancement` — deskripsikan masalah & solusi yang diusulkan |
| 🛠️ **Pull request** | Fork repo → buat branch → commit → push → buat PR (detail di bawah) |

> **Penting:** bug mobile & aksesibilitas adalah prioritas utama — jangan ragu lapor walau kecil.

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

npm run dev        # dev server → http://localhost:5173 (HMR aktif)
npm run build      # production build → dist/
npm run preview    # preview hasil build
```

### Typecheck
```bash
npx tsc --noEmit
```

> Sebelum submit PR, pastikan typecheck bersih dan `npm run build` sukses.

---

## Struktur Project

```
├── index.html                 # HTML entry + inline theme script (anti-flash)
├── public/
│   ├── portofolio.html        # Halaman 3D kedua (logo SMK 3D + theme toggle)
│   └── LOGO-SMK-BHINNEKA-*.png
├── src/
│   ├── main.tsx               # React entry
│   ├── App.tsx                # Root: theme state, GitHub data, copy-watermark
│   ├── index.css              # Design tokens, utilities, keyframes
│   ├── lib/github.ts          # GitHub API client + FALLBACK data
│   ├── utils/cn.ts            # clsx + tailwind-merge helper
│   └── components/            # Nav, Hero, Hero3D, Typewriter, Mascot,
│                              # Repos, RepoCard, Stack, Contact, Footer,
│                              # Watermark, Reveal
└── .github/workflows/deploy.yml  # CI/CD → GitHub Pages
```

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
| `perf` | `perf: pause render Hero3D saat off-screen` |
| `docs` | `docs: update README knob shadow` |
| `refactor` | `refactor: pisahkan Mascot jadi komponen reusable` |
| `chore` | `chore: update dependency` |

Contoh lengkap:
```
feat(mascot): tambah varian spark di section Stack

- Tambah animasi twinkle
- Stagger delay biar nggak serempak
```

> Hindari commit besar yang campur banyak hal — pecah jadi beberapa commit kecil.

---

## Code Style & Aturan

### React & TypeScript
- **TypeScript strict** — selalu beri tipe pada props & state (`type Props = {...}`)
- Komponen **default export**, satu komponen per file
- Reuse komponen existing (`Reveal`, `Mascot`, `cn()`) — jangan re-implement
- Jangan pakai `any` tanpa alasan kuat

### Tailwind & CSS
- **Jangan hardcode warna** — selalu pakai token (`bg-panel`, `text-fog`, `bg-paper`, `nb-border-thick`, dll)
- Tambah utility CSS di `src/index.css`, bukan inline style
- Pakai kelas `nb-shadow-*` / `nb-press` untuk elemen neobrutal

### 🚨 Mobile & Hover (aturan paling penting)
- **Semua efek hover yang mengubah layout** (scale, translate, shadow) harus di-scope:
  ```tsx
  // ✅ BENER — hover hanya aktif di device bermouse
  className="pointer-fine:hover:scale-105 active:scale-95"
  ```
  ```tsx
  // ❌ SALAH — hover menyangkut di Android & bisa nembus layar
  className="hover:scale-105"
  ```
- CSS-level hover (`.nb-press:hover`, `.card-glow:hover`) **harus dibungkus** `@media (hover: hover)`
- `:active` (press feedback) **tetap jalan di semua device** — jangan dibungkus media query
- Section harus punya `overflow-hidden` untuk elemen absolut/dekoratif
- Test di viewport mobile (320px–430px) — pastikan tidak ada horizontal overflow

### Aksesibilitas
- Elemen interaktif harus punya `aria-label` jika tidak ada teks visual
- Jangan hapus ring `:focus-visible` global — itu untuk keyboard navigation
- Kontras teks sekunder min. WCAG AA (`--c-mute` sudah diset sesuai)
- Hormati `prefers-reduced-motion` — animasi harus mati otomatis

### Performance
- Animasi pakai **transform/opacity** (GPU-friendly), hindari `width/height/top/left`
- Jangan tambah dependency berat untuk animasi sederhana yang bisa CSS
- Hero3D (Three.js): jangan naikkan DPR > 2, jangan tambah geometri berat

---

## Design Tokens & Shadow

Semua warna & shadow diatur via CSS custom properties di `src/index.css`.

### Token utama
| Token | Fungsi |
|-------|--------|
| `--c-panel` / `--c-panel-2` | Background section |
| `--c-card` | Surface kartu |
| `--c-fog` | Teks utama + border tebal |
| `--c-mute` | Teks sekunder |
| `--c-ink` | Teks di atas chip kuning |
| `--color-paper` | Kuning signature |
| `--c-shadow` | Warna shadow (kuning dark / hitam light) |

### Knob `--c-shadow-offset`
Semua shadow neobrutal diturunkan dari **satu variabel**:

```css
--c-shadow-offset: 6px;   /* base — ubah ke 4/6/8 untuk menebal/menipis */
```

| Turunan | Kalkulasi |
|---------|-----------|
| `sm` | `× 2/3` |
| `lg` | `× 4/3` |
| `hover` | `× 5/3` |
| `press` | `÷ 3` |

> Kalau menambah shadow baru di JSX, **gunakan var turunan** (`var(--c-shadow-offset-lg)`, dst) — bukan angka hardcode. Knob yang sama ada di `public/portofolio.html` — jika mengubah di satu file, sesuaikan yang lain.

---

## Proses Pull Request

1. **Fork** repo → clone → buat branch:
   ```bash
   git checkout -b feat/nama-fitur
   ```
2. **Kerjakan perubahan** — ikuti aturan di atas
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
- Jangan squash commit sendiri — maintainer yang mengurus merge

---

## Checklist Sebelum Submit

- [ ] Typecheck bersih (`npx tsc --noEmit`)
- [ ] Build sukses (`npm run build`)
- [ ] Tidak ada `console.log` debug yang tertinggal
- [ ] Tidak ada warna hardcode (pakai token)
- [ ] Hover di-scope `pointer-fine` / `@media (hover: hover)`
- [ ] Tidak ada overflow horizontal di mobile (320px–430px)
- [ ] `prefers-reduced-motion` tetap berfungsi
- [ ] Ring `:focus-visible` tidak dihapus
- [ ] Versi dependency baru (jika ada) dicatat di PR

---

Terima kasih sudah berkontribusi! 💛 — **dikaofc**
