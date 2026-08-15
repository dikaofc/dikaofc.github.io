// Build every subpage entry (layanan, tentang, …) into its own
// single-file dist/<page>/index.html so clean URLs (/layanan, …) work.
//
// Runs after the home page build (`vite build`), so `emptyOutDir: false`
// in vite.page.config.ts is what keeps the other pages intact.
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteBin = path.resolve(__dirname, "../node_modules/vite/bin/vite.js");

// (page) → <page>/index.html at project root → URL /<page>
const PAGES = [
  "layanan",
  "tentang",
  "proyek",
  "harga",
  "kontak",
  "testimoni",
  "faq",
  "layanan/website",
  "layanan/bot",
  "layanan/tools",
  "layanan/perbaikan",
];

for (const page of PAGES) {
  console.log(`\n═══ Building ${page}/index.html ═══`);
  execSync(`PAGE=${page} node ${viteBin} build --config vite.page.config.ts`, {
    stdio: "inherit",
    cwd: path.resolve(__dirname, ".."),
  });
}

console.log("\n✅ All subpages built.");
