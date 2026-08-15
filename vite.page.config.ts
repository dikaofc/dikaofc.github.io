import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generic subpage build: run with PAGE=<name> to build <name>/index.html
// (e.g. `PAGE=layanan vite build --config vite.page.config.ts`).
// Output is dist/<name>/index.html so the clean URL /<name> works on
// any static host (GitHub Pages, Vercel, dev server) without rewrites.
// It ADDS to dist without wiping the rest (emptyOutDir: false).
// Single entry + singlefile plugin keeps one-file-per-page output.
const page = process.env.PAGE ?? "layanan";

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: false,
    rollupOptions: {
      input: {
        [page]: path.resolve(__dirname, `${page}/index.html`),
      },
      maxParallelFileOps: 4,
    },
  },
});
