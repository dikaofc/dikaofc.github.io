// scripts/seo-pages.mjs
// Inject SEO meta + JSON-LD + static fallback content into every subpage index.html.
// Idempotent, safe to re-run. Run: node scripts/seo-pages.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://obitoglory.tech";
const OG_IMAGE = `${SITE}/dikacode.svg`;
const ORG_ID = `${SITE}/#organization`;
const DATE_PUBLISHED = "2026-01-15";
const DATE_MODIFIED = "2026-10-09";

const SKIP = new Set(["public", "dist", "node_modules", ".git", ".github", "docs", "src", "scripts", ".vercel"]);

function decode(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'");
}

const NAV_HTML = [
  ["/", "Home"],
  ["/tentang", "Tentang"],
  ["/layanan", "Layanan"],
  ["/proyek", "Proyek"],
  ["/harga", "Harga"],
  ["/kontak", "Kontak"],
  ["/faq", "FAQ"],
]
  .map(([h, l]) => `<a href="${h}">${l}</a>`)
  .join(" · ");

const FOOTER_HTML = `<p>DikaCode, Digital Solution &amp; Code. Developer muda dari Indonesia yang fokus di AI, security automation, dan bug hunting.</p><p>Telegram <a href="https://t.me/dikaacode">@dikaacode</a> · Email <a href="mailto:dikasukasukaa@gmail.com">dikasukasukaa@gmail.com</a> · GitHub <a href="https://github.com/dikaofc">dikaofc</a></p><p>© 2026 DikaOfc. Lokasi: Kendal, Jawa Tengah, Indonesia.</p>`;

const FALLBACK_CSS = `<style>.static-fallback{font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;max-width:56rem;margin:0 auto;padding:2.5rem 1.25rem;line-height:1.75;background:var(--c-panel,#fff);color:var(--c-fog,#171717)}.static-fallback h1{font-size:2rem;line-height:1.2;margin:.5rem 0 1rem;letter-spacing:-.02em}.static-fallback h2{font-size:1.35rem;margin:2rem 0 .75rem}.static-fallback h3{font-size:1.05rem;margin:1.25rem 0 .35rem}.static-fallback p{margin:.6rem 0;color:var(--c-mute,#4d4d4d)}.static-fallback a{color:inherit;text-decoration:underline;text-underline-offset:3px}.static-fallback ul,.static-fallback dl,.static-fallback ol{margin:.6rem 0;padding-left:1.1rem}.static-fallback li{margin:.35rem 0}.static-fallback nav{margin-bottom:1.5rem;font-size:.85rem}.static-fallback footer{margin-top:2.5rem;padding-top:1.25rem;border-top:1px solid var(--c-line,#ebebeb);font-size:.85rem}</style>`;

// Shared content data

const SERVICES = [
  {
    href: "/layanan/website",
    name: "Jasa Pembuatan Website",
    short: "Landing page, company profile, portfolio, dan website custom yang responsif dan cepat.",
    para: "Website adalah wajah digital pertama yang dilihat orang tentang kamu atau bisnismu. DIKACODE bikin website dari nol, bukan template tempelan, dengan struktur yang rapi, tampilan modern, dan performa yang beneran cepat.",
    features: ["Landing Page", "Company Profile", "Portfolio", "Custom Website", "Responsive Design", "Performance Optimization"],
  },
  {
    href: "/layanan/bot",
    name: "Jasa Pembuatan Bot",
    short: "Bot custom untuk Telegram, WhatsApp, dan Discord, automation, komunitas, dan bisnis.",
    para: "Bot adalah asisten digital yang kerja terus tanpa capek: balas pesan otomatis, kelola komunitas, jalankan perintah, sampai integrasi dengan API dan database. DIKACODE bikin bot custom sesuai kebutuhanmu, bukan sekadar bot template.",
    features: ["Custom Commands", "Automation", "API Integration", "Database", "Admin System"],
    platforms: ["Telegram", "WhatsApp", "Discord"],
  },
  {
    href: "/layanan/tools",
    name: "Jasa Pembuatan Tools",
    short: "Tools custom untuk mempermudah pekerjaan, automation, dan produktivitas.",
    para: "Punya pekerjaan yang berulang-ulang dan manual? Tools custom bisa memangkasnya jadi satu perintah. DIKACODE bikin tools sesuai alur kerjamu: script CLI, utility software, sampai workflow automation.",
    features: ["Custom Tools", "Automation", "API Integration", "CLI Tools", "Utility Software", "Workflow Automation"],
  },
  {
    href: "/layanan/perbaikan",
    name: "Perbaikan & Pengembangan",
    short: "Bug fix, error fix, maintenance, optimasi, dan penambahan fitur untuk sistem yang sudah ada.",
    para: "Website error, bot nggak jalan, sistem lemot, atau butuh fitur baru? DIKACODE bisa masuk ke project yang sudah ada, dari project lama yang ditinggal, sampai sistem produksi yang butuh perbaikan.",
    features: ["Bug Fix", "Error Fix", "Maintenance", "Feature Development", "Optimization", "Refactoring"],
  },
];

const PROJECTS = [
  { slug: "dikaroute", name: "DikaRoute", tag: "AI gateway ringan dan cepat, multi-provider routing, fallback otomatis, kompresi, dan caching.", tech: ["TypeScript", "Node.js", "OpenAI API"], para: "DikaRoute adalah AI gateway berarsitektur performa yang kompatibel dengan OpenAI. Satu endpoint, banyak provider, request otomatis dirouting ke provider yang tersedia, dan kalau satu provider mati atau rate-limited, sistem langsung fallback ke provider lain." },
  { slug: "pentesterbot", name: "PentesterBot", tag: "Bot Telegram untuk automation pentesting, recon, perintah, dan workflow vulnerability scanning.", tech: ["JavaScript", "Node.js", "Telegram Bot API"], para: "PentesterBotTelegram membungkus tools pentesting ke dalam satu bot Telegram yang bisa dijalankan langsung dari chat: perintah recon otomatis, eksekusi tools, sampai workflow vulnerability scanning yang terstruktur." },
  { slug: "remoteuniversal", name: "RemoteUniversalDevice", tag: "Aplikasi Android universal remote untuk mengontrol smart TV dan perangkat pintar lainnya.", tech: ["Kotlin", "Android"], para: "RemoteUniversalDevice adalah aplikasi Android native yang mengubah HP menjadi remote universal: kontrol smart TV dan perangkat pintar yang kompatibel, tanpa perlu remote fisik tambahan." },
  { slug: "website", name: "dikaofc.github.io", tag: "Website portfolio ini sendiri, Vite + React + Tailwind, single-file build, dan multi-page.", tech: ["React", "TypeScript", "Vite", "Tailwind CSS"], para: "Website yang sedang kamu buka ini adalah proyek open source: portfolio DIKACODE dengan tiap halaman di-build sebagai satu file HTML single-file, dengan clean URL tanpa ekstensi." },
  { slug: "obitobuff", name: "ObitoBuff CLI", tag: "AI coding agent CLI yang jalan 100% di model kamu sendiri, sub-agents, file finding, bash, dan code review.", tech: ["TypeScript", "Bun", "OpenAI-compatible API"], para: "Obitobuff adalah AI coding agent terminal: TypeScript monorepo dengan sub-agents khusus untuk file finding, editing, bash, research, dan code review, 100% local, tanpa backend." },
  { slug: "agentbuff", name: "AgentBuff", tag: "AI coding agent untuk Android yang jalan langsung di Termux.", tech: ["TypeScript", "Termux", "Node.js"], para: "AgentBuff (DikaBuff Agent CLI) adalah AI coding agent versi Android, dioptimalkan untuk jalan langsung di Termux, dengan command yang ringkas dan hemat resource." },
  { slug: "telegrambot-ai", name: "TelegramBot AI", tag: "Userbot Telegram yang membalas chat otomatis pakai AI, belajar gaya bahasa, punya memori, dan agent tools.", tech: ["Python", "Telethon", "OpenAI-compatible API"], para: "telegrambot-ai adalah userbot Telegram (Telethon) yang membalas chat otomatis pakai AI. Ia belajar gaya bahasa kamu, punya memori jangka panjang, dan bisa transkripsi voice note lalu membalas pakai suara." },
  { slug: "pentesterbot-website", name: "PentesterBot Website", tag: "Website resmi PentesterBot v2, UI Fluid Glass ala iOS dengan data nyata dari source project bot.", tech: ["React", "Vite", "TypeScript", "Express"], para: "Website resmi untuk agent pentest & bug bounty di Telegram, UI Fluid Glass iOS-inspired dengan server Express yang menyajikan data nyata dari source project bot." },
  { slug: "dikaroute-website", name: "DikaRoute Website", tag: "Website resmi + dokumentasi lengkap untuk DikaRoute, Unified AI Gateway & Intelligent Model Router.", tech: ["React", "TypeScript", "Tailwind CSS v4", "Framer Motion"], para: "Website lengkap untuk DikaRoute dengan hero animasi + terminal live, marquee provider, fitur, pipeline routing, dan 8 halaman dokumentasi dengan sidebar & TOC." },
  { slug: "freebuff-patch", name: "Freebuff Patch", tag: "Patch & toolkit biar Freebuff jalan di Android/Termux, glibc no-proot, hemat context, anti-limit.", tech: ["Shell", "Termux", "glibc", "Node.js"], para: "Freebuff rilis sebagai ELF GNU/glibc yang tidak bisa jalan langsung di Termux tanpa proot. freebuffPatchAndroid berisi satu perintah untuk memperbaiki semuanya, glibc no-proot, hemat context, anti-limit." },
];

const FAQS = [
  ["Gimana cara order jasa di DIKACODE?", "Chat langsung ke Telegram @dikaacode. Ceritakan kebutuhanmu, nanti didiskusikan detailnya (fitur, platform, estimasi waktu), lalu dapat penawaran. Kalau cocok, project mulai dikerjakan."],
  ["Sistem pembayarannya gimana?", "Umumnya DP di awal sekitar 50% untuk mulai pengerjaan, lalu pelunasan setelah project selesai dan disetujui. Skema lain bisa didiskusikan sesuai kesepakatan."],
  ["Berapa lama proses pengerjaannya?", "Tergantung scope project. Landing page atau company profile sekitar 3 sampai 7 hari, bot atau tools custom sekitar 1 sampai 2 minggu, dan maintenance berjalan sesuai kontrak. Estimasi pasti diberikan sebelum mulai."],
  ["Bisa minta revisi?", "Bisa. Revisi wajar yang sudah disepakati di awal termasuk dalam pengerjaan. Jumlah dan cakupannya dijelaskan sebelum project dimulai biar tidak ada kejutan."],
  ["Teknologi apa yang biasanya dipakai?", "TypeScript, Node.js, React, Python, Kotlin, dan tools lain yang paling cocok untuk kebutuhan project. Teknologi finalnya didiskusikan di tahap perencanaan."],
  ["Ada garansi atau maintenance?", "Ada. Bug fix dalam masa garansi singkat setelah delivery termasuk. Untuk dukungan berkelanjutan, ada paket maintenance bulanan yang bisa dipilih."],
  ["Bisa custom di luar layanan yang ditampilkan?", "Bisa. Kebutuhan khusus di luar paket (sistem kompleks, fitur unik, integrasi tertentu) bisa didiskusikan langsung, selama masuk akal, pasti dicariin solusinya."],
  ["Gimana kalau butuh fitur tambahan setelah project jadi?", "Fitur tambahan di luar scope awal dihitung terpisah dan disepakati dulu sebelum dikerjakan, biar transparan dari sisi biaya dan waktu."],
];

const PACKAGES = [
  ["Paket website, mulai Rp150rb", "Landing Page dan Company Profile, Portfolio dan Personal Website, Custom Website, Responsive dan Fast, Revisi sampai sesuai."],
  ["Paket bot, mulai Rp100rb", "Untuk Telegram, WhatsApp, atau Discord. Custom Commands, Automation Workflow, API Integration, Database dan Admin System."],
  ["Paket tools, mulai Rp150rb", "Tools custom sesuai kebutuhan kamu. Custom Tools dan Scripts, CLI Tools, Utility Software, Workflow Automation."],
  ["Maintenance, mulai Rp50rb/bulan", "Untuk sistem atau bot yang sudah jalan. Bug dan Error Fix, Maintenance Rutin, Optimasi Performa, Penambahan Fitur."],
];

// Builders

function orgSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "DikaCode",
    alternateName: ["DikaOfc", "DIKACODE", "ObitoGlory"],
    url: SITE,
    logo: OG_IMAGE,
    email: "dikasukasukaa@gmail.com",
    address: { "@type": "PostalAddress", addressLocality: "Kendal", addressRegion: "Jawa Tengah", addressCountry: "ID" },
    areaServed: "ID",
    contactPoint: { "@type": "ContactPoint", contactType: "customer service", url: "https://t.me/dikaacode", availableLanguage: ["id", "en"] },
    sameAs: ["https://github.com/dikaofc", "https://t.me/dikaacode", "https://www.npmjs.com/~dikaofc"],
  };
}

function breadcrumb(urlPath, trail) {
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" }];
  trail.forEach(([name, href], i) => {
    items.push({ "@type": "ListItem", position: i + 2, name, item: SITE + href });
  });
  return { "@type": "BreadcrumbList", itemListElement: items };
}

function headBlock({ url, title, desc, schema }) {
  const lines = [
    "<!--seo-->",
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="DikaCode" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${desc}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="id_ID" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:alt" content="${title}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${desc}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">`,
    JSON.stringify(schema, null, 2),
    "</script>",
    FALLBACK_CSS,
    "<!--/seo-->",
  ];
  return lines.join("\n    ");
}

function wrapBody(crumb, h1, desc, extra) {
  return `<div class="static-fallback"><header><nav aria-label="Navigasi utama">${NAV_HTML}</nav></header><main><p>DikaCode · ${crumb}</p><h1>${h1}</h1><p>${desc}</p>${extra}</main><footer>${FOOTER_HTML}</footer></div>`;
}

// Per-page extras: {crumb, trail, schemaExtra(url,h1,descDesc), body}
function extrasFor(urlPath, h1, desc) {
  const li = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul>`;

  if (urlPath === "layanan") {
    return {
      crumb: "Layanan",
      trail: [["Layanan", "/layanan"]],
      schemaExtra: [],
      body: `<h2>4 Layanan DIKACODE</h2>${li(SERVICES.map((s) => `<h3>${s.name}</h3><p>${s.short}</p><a href="${s.href}">Pelajari layanan</a>`))}<h2>Kenapa DIKACODE?</h2><p>Satu orang ngerjain dari awal sampai beres, harga ditulis di halaman harga, dan garansi bug fix beneran jalan. Konsultasi gratis via <a href="https://t.me/dikaacode">@dikaacode</a>.</p>`,
    };
  }
  const svc = SERVICES.find((s) => urlPath === s.href.slice(1));
  if (svc) {
    return {
      crumb: "Layanan",
      trail: [["Layanan", "/layanan"], [h1, `/${urlPath}`]],
      schemaExtra: [{ "@type": "Service", name: decode(h1), description: decode(desc), url: `${SITE}/${urlPath}`, provider: { "@id": ORG_ID }, areaServed: "ID" }],
      body: `<p>${svc.para}</p><h2>Yang termasuk</h2>${li(svc.features)}${svc.platforms ? `<h2>Platform</h2><p>${svc.platforms.join(", ")}</p>` : ""}<p>Konsultasi gratis, tanpa paksaan: <a href="https://t.me/dikaacode">@dikaacode</a>. <a href="/layanan">Lihat semua layanan</a> · <a href="/harga">Lihat harga</a></p>`,
    };
  }
  if (urlPath === "tentang") {
    return {
      crumb: "Tentang",
      trail: [["Tentang", "/tentang"]],
      schemaExtra: [{ "@type": "Person", "@id": `${SITE}/#person`, name: "DikaOfc", alternateName: "DikaCode", jobTitle: "Full-stack Developer & AI Engineer", url: `${SITE}/tentang`, email: "dikasukasukaa@gmail.com", worksFor: { "@id": ORG_ID }, sameAs: ["https://github.com/dikaofc", "https://t.me/dikaacode"] }],
      body: `<h2>Siapa DIKACODE?</h2><p>DIKACODE itu bukan perusahaan besar, ini orang biasa yang serius bikin kode. Dari bot Telegram, AI gateway, sampai tools pentesting, semua dikerjain manual, diuji, dan dipoles sampai benar-benar jalan. Prinsipnya: paham dulu sistemnya, baru diperbaiki.</p><h2>Fakta singkat</h2>${li(["Nama: DIKACODE (DikaOfc)", "Status: SMK Bhinneka, jurusan DKV, kelas XI", "Domisili: Kendal, Jawa Tengah, Indonesia", "Fokus: AI, security automation, bug hunting, digital solution"])}<h2>Keahlian</h2><p>Bot dan automation, web development (React, Vite, Tailwind), bug hunting dan security, tools dan CLI, AI integration, maintenance dan fix.</p>`,
    };
  }
  if (urlPath === "proyek") {
    return {
      crumb: "Proyek",
      trail: [["Proyek", "/proyek"]],
      schemaExtra: [],
      body: `<h2>Proyek unggulan</h2>${li(PROJECTS.map((p) => `<h3>${p.name}</h3><p>${p.tag}</p><a href="/proyek/${p.slug}">Detail ${p.name}</a>`))}<p><a href="https://github.com/dikaofc">Lihat semua repository di GitHub</a></p>`,
    };
  }
  const proj = PROJECTS.find((p) => urlPath === `proyek/${p.slug}`);
  if (proj) {
    return {
      crumb: "Proyek",
      trail: [["Proyek", "/proyek"], [h1, `/${urlPath}`]],
      schemaExtra: [{ "@type": "SoftwareApplication", name: decode(h1), description: decode(desc), url: `${SITE}/${urlPath}`, applicationCategory: "DeveloperApplication", operatingSystem: "Any", author: { "@id": ORG_ID }, offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" } }],
      body: `<p>${proj.para}</p><h2>Dibangun dengan</h2><p>${proj.tech.join(", ")}</p><p><a href="/proyek">Semua proyek</a> · <a href="/layanan">Butuh proyek serupa? Lihat layanan</a></p>`,
    };
  }
  if (urlPath === "harga") {
    return {
      crumb: "Harga",
      trail: [["Harga", "/harga"]],
      schemaExtra: [],
      body: `<h2>Paket open jasa</h2>${li(PACKAGES.map(([t, d]) => `<h3>${t}</h3><p>${d}</p>`))}<p>Harga di atas patokan awal dan bisa didiskusikan. <a href="https://t.me/dikaacode">Nego via Telegram @dikaacode</a></p>`,
    };
  }
  if (urlPath === "kontak") {
    return {
      crumb: "Kontak",
      trail: [["Kontak", "/kontak"]],
      schemaExtra: [],
      body: `<h2>Semua channel</h2><ul><li>GitHub: <a href="https://github.com/dikaofc">@dikaofc</a></li><li>Website: <a href="https://obitoglory.tech">obitoglory.tech</a></li><li>Telegram: <a href="https://t.me/dikaacode">@dikaacode</a></li><li>Email: <a href="mailto:dikasukasukaa@gmail.com">dikasukasukaa@gmail.com</a></li><li>Layanan: <a href="/layanan">Open Jasa, Digital Solution</a></li></ul><p>Respons cepat via Telegram, balas pertanyaan, diskusi kebutuhan, sampai detail project, semua bisa lewat satu chat.</p>`,
    };
  }
  if (urlPath === "testimoni") {
    return {
      crumb: "Testimoni",
      trail: [["Testimoni", "/testimoni"]],
      schemaExtra: [],
      body: `<h2>Belum ada testimoni, jadilah yang pertama</h2><p>DIKACODE baru aja buka jasa digital solution. Semua project dikerjain dengan teliti dan didukung sampai beres. <a href="https://t.me/dikaacode">Mulai project via Telegram</a></p>`,
    };
  }
  if (urlPath === "faq") {
    return {
      crumb: "FAQ",
      trail: [["FAQ", "/faq"]],
      schemaExtra: [{ "@type": "FAQPage", mainEntity: FAQS.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }],
      body: `<h2>Pertanyaan umum</h2><dl>${FAQS.map(([q, a]) => `<dt>${q}</dt><dd>${a}</dd>`).join("")}</dl><p>Pertanyaanmu belum ada? <a href="https://t.me/dikaacode">Tanya langsung via Telegram</a></p>`,
    };
  }
  return { crumb: "Halaman", trail: [[h1, `/${urlPath}`]], schemaExtra: [], body: `<p><a href="/">Kembali ke home</a></p>` };
}

function findPages() {
  const out = [];
  for (const entry of fs.readdirSync(ROOT, { withFileTypes: true })) {
    if (!entry.isDirectory() || SKIP.has(entry.name)) continue;
    const idx = path.join(ROOT, entry.name, "index.html");
    if (fs.existsSync(idx)) out.push({ file: idx, urlPath: entry.name });
    for (const sub of fs.readdirSync(path.join(ROOT, entry.name), { withFileTypes: true })) {
      if (!sub.isDirectory()) continue;
      const sidx = path.join(ROOT, entry.name, sub.name, "index.html");
      if (fs.existsSync(sidx)) out.push({ file: sidx, urlPath: `${entry.name}/${sub.name}` });
    }
  }
  return out;
}

function process(file, urlPath) {
  let html = fs.readFileSync(file, "utf8");
  const titleM = html.match(/<title>([^<]*)<\/title>/);
  const descM = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  if (!titleM || !descM) {
    console.log(`SKIP ${urlPath}: no title/description`);
    return;
  }
  const rawTitle = titleM[1];
  const rawDesc = descM[1];
  const h1 = decode(rawTitle).split(/[,·|\-]/)[0].trim();
  const url = `${SITE}/${urlPath}`;
  const ex = extrasFor(urlPath, rawTitle, rawDesc);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      orgSchema(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: decode(rawTitle),
        description: decode(rawDesc),
        inLanguage: "id-ID",
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": ORG_ID },
        datePublished: DATE_PUBLISHED,
        dateModified: DATE_MODIFIED,
      },
      breadcrumb(urlPath, ex.trail),
      ...ex.schemaExtra,
    ],
  };

  // refresh head block (idempotent)
  html = html.replace(/<!--seo-->[\s\S]*?<!--\/seo-->\n?/, "");
  html = html.replace(/^\s*<link rel="canonical"[^>]*>\n?/m, "");
  html = html.replace(/^\s*<meta property="og:[^>]*>\n?/gm, "");
  html = html.replace(/^\s*<meta name="twitter:[^>]*>\n?/gm, "");
  const block = headBlock({ url, title: rawTitle, desc: rawDesc, schema });
  html = html.replace("</head>", `    ${block}\n  </head>`);

  // inject static body once (React replaces #root on load)
  if (html.includes('<div id="root"></div>')) {
    html = html.replace('<div id="root"></div>', `<div id="root">${wrapBody(ex.crumb, h1, rawDesc, ex.body)}</div>`);
  }

  fs.writeFileSync(file, html);
  console.log(`OK ${urlPath}`);
}

const pages = findPages();
for (const p of pages) process(p.file, p.urlPath);
console.log(`\nDone: ${pages.length} pages.`);
