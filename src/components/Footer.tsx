import VisitorStats from "./VisitorStats";

export type FooterLink = { href: string; label: string };

const DEFAULT_LINKS: FooterLink[] = [
  { href: "#home", label: "Home" },
  { href: "/proyek", label: "Proyek" },
  { href: "#stack", label: "Tech Stack" },
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/harga", label: "Harga" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/faq", label: "FAQ" },
  { href: "#contact", label: "Kontak" },
];

export default function Footer({ links = DEFAULT_LINKS }: { links?: FooterLink[] }) {
  return (
    <footer className="bg-panel text-fog transition-colors duration-200" style={{ borderTop: "1px solid var(--c-line)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-cta text-cta-text font-display text-base">D</span>
            <span className="font-display text-xl">dikacode</span>
          </div>
          <p className="text-sm leading-relaxed text-mute max-w-xs">
            Developer muda dari Indonesia. Fokus di AI, security automation,
            bug hunting, dan tidur.
          </p>
          <ul className="mt-4 grid gap-1.5 font-mono text-xs text-mute">
            <li>
              Telegram:{" "}
              <a href="https://t.me/dikaacode" target="_blank" rel="noopener noreferrer" className="text-fog hover:opacity-75">
                @dikaacode
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:dikasukasukaa@gmail.com" className="text-fog hover:opacity-75">
                dikasukasukaa@gmail.com
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a href="https://github.com/dikaofc" target="_blank" rel="noopener noreferrer" className="text-fog hover:opacity-75">
                github.com/dikaofc
              </a>
            </li>
            <li>Lokasi: Kendal, Jawa Tengah, ID</li>
          </ul>
        </div>

        <nav aria-label="Navigasi footer">
          <div className="t-mono-label mb-4">Navigasi</div>
          <ul className="grid gap-2 text-sm font-medium text-fog">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-mute transition-colors hover:text-fog">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <div className="t-mono-label mb-4">Layanan</div>
          <ul className="grid gap-2 text-sm font-medium text-fog">
            <li>
              <a href="/layanan/website" className="text-mute transition-colors hover:text-fog">
                Website
              </a>
            </li>
            <li>
              <a href="/layanan/bot" className="text-mute transition-colors hover:text-fog">
                Bot
              </a>
            </li>
            <li>
              <a href="/layanan/tools" className="text-mute transition-colors hover:text-fog">
                Tools
              </a>
            </li>
            <li>
              <a href="/layanan/perbaikan" className="text-mute transition-colors hover:text-fog">
                Perbaikan
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--c-line)" }}>
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-xs md:text-sm font-mono text-mute">
          <div>© {new Date().getFullYear()} DikaCode (DikaOfc / ObitoGlory), Kendal, ID</div>
          <VisitorStats />
        </div>
      </div>
    </footer>
  );
}
