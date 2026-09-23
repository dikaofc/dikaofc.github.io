// Preview server yang sadar clean URL: /layanan -> dist/layanan/index.html.
// "vite preview" biasa (SPA single) fallback ke dist/index.html untuk semua
// path yang tidak ada file-nya, jadi subpage tidak pernah keserve.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist");
const PORT = Number(process.env.PORT ?? 4173);

const MIME = {
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

function send(res, file) {
  const ext = path.extname(file).toLowerCase();
  res.statusCode = 200;
  res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  const url = (req.url ?? "/").split("?")[0].split("#")[0];
  const decoded = decodeURIComponent(url);

  // cegah path traversal
  const safe = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const direct = path.join(DIST, safe);

  // 1) file persis (/, /robots.txt, /x/index.html)
  if (safe.endsWith("/")) {
    const index = path.join(direct, "index.html");
    if (fs.existsSync(index)) return send(res, index);
  } else if (fs.existsSync(direct) && fs.statSync(direct).isFile()) {
    return send(res, direct);
  }

  // 2) clean URL: /layanan -> dist/layanan/index.html
  const clean = safe.endsWith("/") ? safe : `${safe}/`;
  const index = path.join(DIST, clean, "index.html");
  if (fs.existsSync(index)) return send(res, index);

  // 3) fallback 404
  const notFound = path.join(DIST, "404.html");
  res.statusCode = 404;
  res.setHeader("Content-Type", MIME[".html"]);
  if (fs.existsSync(notFound)) {
    fs.createReadStream(notFound).pipe(res);
    return;
  }
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`preview: http://localhost:${PORT}/ (dist, clean URLs)`);
});
