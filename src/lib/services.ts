import { Code2, Bot, Wrench, FileCode2, type LucideIcon } from "lucide-react";

export type ServiceDetail = {
  /** page slug, e.g. "layanan/website" → /layanan/website */
  slug: string;
  num: string;
  icon: LucideIcon;
  title: string;
  short: string;
  long: string[];
  features: string[];
  platforms?: string[];
  process: { num: string; title: string; desc: string }[];
  uses: string[];
  deliverables: string[];
};

/** Single source of truth for DIKACODE's services (cards + detail pages) */
export const SERVICES: ServiceDetail[] = [
  {
    slug: "layanan/website",
    num: "01",
    icon: Code2,
    title: "JASA PEMBUATAN WEBSITE",
    short: "Website profesional, responsif, cepat, modern, dan sesuai kebutuhan bisnis maupun personal.",
    long: [
      "Website adalah wajah digital pertama yang dilihat orang tentang kamu atau bisnismu. DIKACODE bikin website dari nol — bukan template tempelan — dengan struktur yang rapi, tampilan modern, dan performa yang beneran cepat.",
      "Setiap halaman dibangun custom sesuai kebutuhan: dari landing page satu halaman sampai company profile multi-halaman. Semua responsive di HP, tablet, dan desktop, plus dioptimalkan biar loading tetap ringan.",
    ],
    features: [
      "Landing Page",
      "Company Profile",
      "Portfolio",
      "Custom Website",
      "Responsive Design",
      "Performance Optimization",
    ],
    process: [
      { num: "01", title: "KONSULTASI & BRIEF", desc: "Diskusi kebutuhan, tujuan, dan referensi website." },
      { num: "02", title: "STRUKTUR & DESAIN", desc: "Susun halaman, konten, dan konsep tampilan." },
      { num: "03", title: "DEVELOPMENT", desc: "Website dibangun, diisi konten, dan dioptimalkan." },
      { num: "04", title: "TEST & LAUNCH", desc: "Diuji di semua perangkat lalu siap online." },
    ],
    uses: [
      "Bisnis & UMKM",
      "Personal Branding",
      "Portfolio & CV",
      "Landing Page Event",
      "Company Profile",
    ],
    deliverables: [
      "Source code lengkap",
      "Bantuan setup hosting & domain",
      "Desain responsive",
      "Revisi sampai sesuai",
      "Garansi bug fix",
    ],
  },
  {
    slug: "layanan/bot",
    num: "02",
    icon: Bot,
    title: "JASA PEMBUATAN BOT",
    short: "Bot custom untuk automation, komunitas, bisnis, dan berbagai kebutuhan digital.",
    long: [
      "Bot adalah asisten digital yang kerja terus tanpa capek: balas pesan otomatis, kelola komunitas, jalankan perintah, sampai integrasi dengan API dan database. DIKACODE bikin bot custom sesuai kebutuhanmu — bukan sekadar bot template.",
      "Dari bot Telegram untuk komunitas, bot WhatsApp untuk bisnis, sampai bot Discord untuk server — semuanya dibangun dengan sistem admin yang mudah diatur dan siap jalan 24/7.",
    ],
    features: [
      "Custom Commands",
      "Automation",
      "API Integration",
      "Database",
      "Admin System",
    ],
    platforms: ["Telegram", "WhatsApp", "Discord"],
    process: [
      { num: "01", title: "KONSULTASI", desc: "Tentukan platform, fitur, dan tujuan bot." },
      { num: "02", title: "PERANCANGAN", desc: "Susun alur perintah dan struktur database." },
      { num: "03", title: "DEVELOPMENT", desc: "Bot dibangun dan diuji dengan skenario nyata." },
      { num: "04", title: "DEPLOY & MAINTAIN", desc: "Bot online 24/7 dan didukung berjalan." },
    ],
    uses: [
      "Komunitas & Grup",
      "Customer Service",
      "Order & Reservasi",
      "Creator & Streaming",
      "Personal Automation",
    ],
    deliverables: [
      "Bot aktif 24/7",
      "Admin system",
      "Database terstruktur",
      "Dokumentasi perintah",
      "Garansi bug fix",
    ],
  },
  {
    slug: "layanan/tools",
    num: "03",
    icon: Wrench,
    title: "JASA PEMBUATAN TOOLS",
    short: "Tools custom untuk mempermudah pekerjaan, automation, produktivitas, dan kebutuhan khusus.",
    long: [
      "Punya pekerjaan yang berulang-ulang dan manual? Tools custom bisa memangkasnya jadi satu perintah. DIKACODE bikin tools sesuai alur kerjamu: script CLI, utility software, sampai workflow automation.",
      "Tidak perlu beli software mahal dengan fitur yang nggak kamu pakai. Tools dibangun khusus untuk kebutuhanmu — simpel, cepat, dan pas dengan cara kerjamu.",
    ],
    features: [
      "Custom Tools",
      "Automation",
      "API Integration",
      "CLI Tools",
      "Utility Software",
      "Workflow Automation",
    ],
    process: [
      { num: "01", title: "ANALISIS", desc: "Pahami pekerjaan dan titik yang bisa diotomasi." },
      { num: "02", title: "DESAIN TOOLS", desc: "Rancang alur, input, dan output yang diinginkan." },
      { num: "03", title: "DEVELOPMENT", desc: "Tools dibangun dan diuji dengan data asli." },
      { num: "04", title: "DOKUMENTASI", desc: "Serahkan tools lengkap dengan panduan pakai." },
    ],
    uses: [
      "Tim & Workflow Internal",
      "Developer (CLI)",
      "Content Creator",
      "Data & File Processing",
      "Otomasi Tugas Rutin",
    ],
    deliverables: [
      "Tools siap pakai",
      "Instruksi penggunaan",
      "Dokumentasi singkat",
      "Revisi",
      "Garansi bug fix",
    ],
  },
  {
    slug: "layanan/perbaikan",
    num: "04",
    icon: FileCode2,
    title: "PERBAIKAN & PENGEMBANGAN",
    short: "Perbaikan bug, error, maintenance, optimasi, dan penambahan fitur untuk sistem yang sudah ada.",
    long: [
      "Website error, bot nggak jalan, sistem lemot, atau butuh fitur baru? DIKACODE bisa masuk ke project yang sudah ada — dari project lama yang ditinggal, sampai sistem produksi yang butuh perbaikan.",
      "Setiap masalah didiagnosa dulu sampai ketemu akar penyebabnya, baru diperbaiki — bukan cuma ditambal. Setelah beres, sistem diuji dan dioptimasi biar nggak gampang rusak lagi.",
    ],
    features: [
      "Bug Fix",
      "Error Fix",
      "Maintenance",
      "Feature Development",
      "Optimization",
      "Refactoring",
    ],
    process: [
      { num: "01", title: "AUDIT", desc: "Periksa sistem dan temukan sumber masalah." },
      { num: "02", title: "DIAGNOSA", desc: "Analisis akar penyebab, bukan cuma gejalanya." },
      { num: "03", title: "PERBAIKAN", desc: "Perbaiki, rapikan, dan optimalkan kode." },
      { num: "04", title: "TEST & DELIVERY", desc: "Uji ulang dan serahkan sistem yang sehat." },
    ],
    uses: [
      "Website yang Error",
      "Bot Rusak / Tidak Jalan",
      "Butuh Fitur Baru",
      "Project yang Terbengkalai",
      "Optimasi Performa",
    ],
    deliverables: [
      "Laporan masalah & solusi",
      "Kode yang diperbaiki",
      "Optimasi performa",
      "Testing menyeluruh",
      "Support pasca-perbaikan",
    ],
  },
];
