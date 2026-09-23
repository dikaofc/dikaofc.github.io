import { useEffect, useRef, useState } from "react";
import { ShieldAlert, ShieldCheck, X } from "lucide-react";

export default function SecurityShield() {
  const [blocked, setBlocked] = useState<{
    kind: "devtools" | "bot" | "vpn";
    detail: string;
  } | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number>(0);

  useEffect(() => {
    if (!toast) return;
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(toastTimer.current);
  }, [toast]);

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
        detail: "DevTools dan inspect dinonaktifkan di halaman ini.",
      });
    };

    const onContext = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("canvas, a, button, input, textarea")) return;
      e.preventDefault();
      setToast("Konten dilindungi, klik kanan dinonaktifkan.");
    };

    window.addEventListener("keydown", onKey, { capture: true });
    document.addEventListener("contextmenu", onContext);
    return () => {
      window.removeEventListener("keydown", onKey, { capture: true });
      document.removeEventListener("contextmenu", onContext);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let devtoolsOpen = false;

    const sizeCheck = () => {
      const w = window.outerWidth - window.innerWidth;
      const h = window.outerHeight - window.innerHeight;
      return w > 160 || h > 160;
    };

    const interval = window.setInterval(() => {
      if (devtoolsOpen) return;

      if (sizeCheck()) {
        devtoolsOpen = true;
        setBlocked({ kind: "devtools", detail: "DevTools terdeteksi terbuka." });
        return;
      }

      const start = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      const elapsed = performance.now() - start;
      if (elapsed > 100) {
        devtoolsOpen = true;
        setBlocked({ kind: "devtools", detail: "Debugger terdeteksi, evaluasi kode dinonaktifkan." });
      }
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

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
        detail: "",
      });
    }
  }, []);

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
        if (diff >= 2) {
          setBlocked({
            kind: "vpn",
            detail: `Koneksi terdeteksi melalui VPN atau proxy (IP UTC ${d.utc} vs browser UTC ${browserOffset >= 0 ? "+" : ""}${browserOffset}).`,
          });
        }
      })
      .catch(() => {
        // lookup gagal, jangan ganggu pengunjung
      });

    return () => {
      alive = false;
    };
  }, []);

  return (
    <>
      {blocked?.kind === "bot" && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed inset-0 z-[90] overflow-y-auto bg-black p-4 md:p-8 font-mono"
        >
          <div className="mx-auto max-w-2xl">
            <div className="text-xs md:text-sm text-fog whitespace-pre-wrap leading-relaxed">
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
              <span className="inline-block bg-cta text-cta-text font-medium px-1">DIKACODE&#123;ini_bukan_flag_asli_goblok&#125;</span>
              {`

root@prank-server:~# whoami
root

root@prank-server:~# echo "kamu kira dapet shell ya?"
kamu kira dapet shell ya?

root@prank-server:~# clear

KENA PRANK

Yang kamu baca ini BUKAN terminal asli.
Website ini React statis, nggak ada server, nggak ada shell,
nggak ada database, nggak ada flag. Semua di atas bohong.

Kalau kamu bot scraper: request-mu sukses (HTTP 200) tapi
konten yang kamu ekstrak cuma lelucon ini.

salam, dikacode
`}
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setBlocked(null)}
                className="btn btn-primary"
              >
                <ShieldCheck size={16} strokeWidth={2} aria-hidden="true" />
                Lihat website asli
              </button>
            </div>
          </div>
        </div>
      )}

      {blocked && blocked.kind !== "bot" && (
        <div
          role="alert"
          aria-live="assertive"
          className="fixed inset-0 z-[90] grid place-items-center bg-black/60 p-4"
        >
          <div className="relative w-full max-w-md rounded-lg v-card p-6 md:p-8 text-center">
            <div className="mx-auto mb-4 grid place-items-center w-12 h-12 rounded-md bg-panel-2 text-fog">
              <ShieldAlert size={26} strokeWidth={2} aria-hidden="true" />
            </div>
            <p className="t-mono-label mb-2">
              Peringatan keamanan
            </p>
            <h2 className="font-display font-semibold text-2xl text-fog mb-3" style={{ letterSpacing: "-0.02em" }}>
              Akses dibatasi
            </h2>
            <p className="text-sm md:text-[15px] leading-relaxed text-mute mb-6">
              {blocked.detail}
            </p>
            <button
              onClick={() => setBlocked(null)}
              className="btn btn-primary"
            >
              <ShieldCheck size={16} strokeWidth={2} aria-hidden="true" />
              Lanjutkan
            </button>
            <button
              onClick={() => setBlocked(null)}
              aria-label="Tutup peringatan"
              className="absolute top-3 right-3 grid place-items-center w-9 h-9 rounded-md text-mute hover:text-fog hover:bg-panel-2"
            >
              <X size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {toast && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[95] rounded-md v-card px-4 py-2.5 font-mono text-xs font-medium text-fog pointer-events-none"
        >
          {toast}
        </div>
      )}
    </>
  );
}
