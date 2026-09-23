import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

// Dev-only: serve clean URLs tanpa trailing slash (/layanan -> layanan/index.html).
// Tanpa ini, Vite SPA fallback balikin index.html root untuk semua path.
function cleanUrls(): Plugin {
  return {
    name: "dika-clean-urls",
    configureServer(server: ViteDevServer) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url ?? "/";
        const url = raw.split("?")[0].split("#")[0];
        if (url === "/" || url.endsWith(".html") || url.includes(".")) {
          next();
          return;
        }
        const clean = url.endsWith("/") ? url : `${url}/`;
        // 1) source page: <root>/<page>/index.html (dihandle vite transform)
        if (fs.existsSync(path.resolve(__dirname, `.${clean}index.html`))) {
          req.url = clean;
          next();
          return;
        }
        // 2) file statis di public/: serve langsung (sirv vite tidak
        //    resolve directory index di public saat appType mpa)
        const file = path.resolve(__dirname, `public${clean}index.html`);
        if (fs.existsSync(file)) {
          const html = fs.readFileSync(file);
          res.statusCode = 200;
          res.setHeader("Content-Type", MIME[".html"]);
          res.end(html);
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  appType: "mpa", // serve tiap <page>/index.html di path-nya (bukan fallback ke root)
  plugins: [cleanUrls(), react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      // Keep parallel fs operations low so builds succeed on
      // low-file-descriptor environments (e.g. Termux).
      maxParallelFileOps: 4,
    },
  },
});
