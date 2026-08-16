import { useEffect, useRef, useState } from "react";
import { ShieldAlert, ShieldCheck, X } from "lucide-react";

/**
 * SecurityShield — client-side deterrent layer injected on every page.
 *
 * Detects and warns about:
 *  - DevTools / inspect (window-size trick + `debugger` timing trap)
 *  - F12 / Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U shortcuts
 *  - Right-click context menu (anti-scrape)
 *  - Headless / automated browsers (navigator.webdriver, UA patterns)
 *  - VPN / proxy / anonymous exit nodes (IP timezone vs browser timezone)
 *
 * Design note: this is a *deterrent*, not a hard security boundary —
 * everything here runs in the browser and can be bypassed. Genuine
 * DDoS/bot protection needs a CDN/WAF in front of the origin (see
 * README / deployment notes). Warnings are dismissible so real
 * visitors (including VPN users) are not locked out.
 *
 * Everything is aria-hidden and disabled under prefers-reduced-motion.
 */
export default function SecurityShield() {
  const [blocked, setBlocked] = useState<{
    kind: "devtools" | "bot" | "vpn";
    detail: string;
  } | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number>(0);

  // Auto-hide toast after a moment
  useEffect(() => {
    if (!toast) return;
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(toastTimer.current);
  }, [toast]);

  // Block F12 / devtools shortcuts + right-click
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const devtools =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(k)) ||
        (e.ctrlKey && k === "u");
      if (!devtools) return;
      e.preventDefault();
      setBlocked({
        kind: "devtools",
        detail: "DevTools & inspect dinonaktifkan di halaman ini.",
      });
    };

    const onContext = (e: MouseEvent) => {
      // Allow right-click on the 3D canvas & interactive controls, block elsewhere
      const target = e.target as HTMLElement | null;
      if (target?.closest("canvas, a, button, input, textarea")) return;
      e.preventDefault();
      setToast("Konten dilindungi — klik kanan dinonaktifkan.");
    };

    window.addEventListener("keydown", onKey, { capture: true });
    document.addEventListener("contextmenu", onContext);
    return () => {
      window.removeEventListener("keydown", onKey, { capture: true });
      document.removeEventListener("contextmenu", onContext);
    };
  }, []);

  // Detect DevTools via window-size trick (docked) + `debugger` timing trap
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let devtoolsOpen = false;

    const sizeCheck = () => {
      const w = window.outerWidth - window.innerWidth;
      const h = window.outerHeight - window.innerHeight;
      // Chrome/Firefox show a docked panel ≥ ~120px on the edge
      return w > 160 || h > 160;
    };

    const interval = window.setInterval(() => {
      if (devtoolsOpen) return;

      // 1) docked devtools changes window vs inner dimensions
      if (sizeCheck()) {
        devtoolsOpen = true;
        setBlocked({ kind: "devtools", detail: "DevTools terdeteksi terbuka." });
        return;
      }

      // 2) floating/undocked devtools: a `debugger` statement pauses only
      //    when a debugger is attached — the pause makes the tick slow.
      const start = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      const elapsed = performance.now() - start;
      if (elapsed > 100) {
        devtoolsOpen = true;
        setBlocked({ kind: "devtools", detail: "Debugger terdeteksi — evaluasi kode dinonaktifkan." });
      }
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  // Detect headless / automated browsers → prank them with a fake "breached" terminal
  useEffect(() => {
    const ua = navigator.userAgent || "";
    const botPatterns = /HeadlessChrome|PhantomJS|Puppeteer|Selenium|Playwright|curl|wget|python-requests|Go-http-client|Scrapy/i;
    const isBot =
      (navigator as Navigator & { webdriver?: boolean }).webdriver === true ||
      botPatterns.test(ua) ||
      !navigator.languages?.length;

    if (isBot) {
      setBlocked({
        kind: "bot",
        detail: "", // detail di-render khusus oleh overlay prank
      });
    }
  }, []);

  // Detect VPN / proxy / anonymous exit nodes:
  // compare the IP's timezone offset (free ipwho.is lookup, no key) with
  // the browser's own offset. A big mismatch ⇒ likely proxied traffic.
  useEffect(() => {
    let alive = true;

    const browserOffset = -new Date().getTimezoneOffset() / 60;

    fetch("https://ipwho.is/", { signal: AbortSignal.timeout(6000) })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { utc?: string; success?: boolean } | null) => {
        if (!alive || !d || d.success === false || typeof d.utc !== "string") return;
        const m = /^([+-])(\d{2}):(\d{2})$/.exec(d.utc);
        if (!m) return;
        const ipOffset = (m[1] === "-" ? -1 : 1) * (Number(m[2]) + Number(m[3]) / 60);
        const diff = Math.abs(ipOffset - browserOffset);
        // ≥ 2h mismatch ⇒ very likely a VPN/proxy/anonymizer exit node
        if (diff >= 2) {
          setBlocked({
            kind: "vpn",
            detail: `Koneksi terdeteksi melalui VPN/proxy (IP UTC ${d.utc} vs browser UTC ${browserOffset >= 0 ? "+" : ""}${browserOffset}).`,
          });
        }
      })
      .catch(() => {
        /* lookup gagal — jangan ganggu pengunjung */
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      {/* ── PRANK overlay for bots: fake "breached" terminal ── */}
      {blocked?.kind === "bot" && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed inset-0 z-[90] overflow-y-auto bg-[#05070a] p-4 md:p-8 font-mono"
        >
          <div className="mx-auto max-w-2xl">
            <div className="text-xs md:text-sm text-green-400 whitespace-pre-wrap leading-relaxed">
              {`root@dikaofc:~# nc -lvnp 1337
listening on [any] 1337 ...
connect to [203.0.113.66] from (UNKNOWN) [203.0.113.99] 55555
Linux prank-server 6.8.0 #1 SMP x86_64 GNU/Linux

root@prank-server:~# id
uid=0(root) gid=0(root) groups=0(root)

root@prank-server:~# ls -la /root/
total 42
drwx------  2 root root  4096 Aug 16 07:36 .
drwxr-xr-x 20 root root  4096 Aug 16 07:36 ..
-rw-r--r--  1 root root   1337 .bashrc
-rw-r--r--  1 root root   1337 flag.txt

root@prank-server:~# cat flag.txt
`}
              <span className="inline-block bg-paper text-ink font-bold px-1">DIKACODE&#123;ini_bukan_flag_asli_goblok&#125;</span>
              {`

root@prank-server:~# whoami
root

root@prank-server:~# echo "kamu kira dapet shell ya?"
kamu kira dapet shell ya?

root@prank-server:~# clear

==================== KENA PRANK 😹 ====================

Yang kamu baca ini BUKAN terminal asli.
Website ini React statis — nggak ada server, nggak ada shell,
nggak ada database, nggak ada flag. Semua di atas bohong.

Kalau kamu bot scraper: request-mu sukses (HTTP 200) tapi
konten yang kamu ekstrak cuma lelucon ini.

salam, dikacode
`}
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setBlocked(null)}
                className="inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-sm px-5 py-2.5 rounded-lg nb-shadow nb-press pointer-fine:hover:scale-105 active:scale-95 transition-transform"
              >
                <ShieldCheck size={16} strokeWidth={2.5} aria-hidden="true" />
                LIHAT WEBSITE ASLI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Warning overlay for humans (dismissible) ── */}
      {blocked && blocked.kind !== "bot" && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed inset-0 z-[90] grid place-items-center bg-panel/85 backdrop-blur-sm p-4"
        >
          <div className="relative w-full max-w-md rounded-2xl nb-border-thick bg-card p-6 md:p-8 text-center nb-shadow-lg">
            <div className="mx-auto mb-4 grid place-items-center w-16 h-16 rounded-full nb-border bg-orange/10 text-orange">
              <ShieldAlert size={34} strokeWidth={2.2} aria-hidden="true" />
            </div>
            <div className="font-mono text-xs font-bold text-orange mb-2 uppercase tracking-wider">
              // PERINGATAN KEAMANAN
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-fog mb-3">
              AKSES DIBATASI
            </h2>
            <p className="font-body font-medium text-sm md:text-base text-mute mb-6">
              {blocked.detail}
            </p>
            <button
              onClick={() => setBlocked(null)}
              className="inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-sm md:text-base px-6 py-3 rounded-lg nb-shadow nb-press pointer-fine:hover:scale-105 active:scale-95 transition-transform"
            >
              <ShieldCheck size={18} strokeWidth={2.5} aria-hidden="true" />
              LANJUTKAN
            </button>
            <button
              onClick={() => setBlocked(null)}
              aria-label="Tutup peringatan"
              className="absolute top-3 right-3 grid place-items-center w-8 h-8 rounded-md nb-border bg-panel text-mute pointer-fine:hover:text-fog pointer-fine:hover:bg-card transition-colors"
            >
              <X size={16} strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* ── Toast (right-click blocked) ── */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[95] rounded-lg nb-border-thick bg-card px-4 py-2.5 font-mono text-xs font-bold text-fog nb-shadow pointer-events-none"
        >
          {toast}
        </div>
      )}
    </>
  );
}
