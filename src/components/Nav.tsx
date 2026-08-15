import { useState, useEffect } from "react";
import { Monitor } from "lucide-react";

export type NavLink = { href: string; label: string };

type ThemeChoice = "system" | "light" | "dark";

type Props = {
  theme: "dark" | "light";
  choice: ThemeChoice;
  onToggle: () => void;
  /** links shown in the bar — defaults to the home page sections */
  links?: NavLink[];
  /** where the logo points (home page defaults to the #home anchor) */
  logoHref?: string;
};

const DEFAULT_LINKS: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#repos", label: "Repos" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Kontak" },
  { href: "/layanan", label: "Layanan" },
];

export default function Nav({ theme, choice, onToggle, links = DEFAULT_LINKS, logoHref = "#home" }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const autoMode = choice === "system";

  /*
   * Custom morph icon: one SVG containing both shapes. The sun and moon
   * cross-morph in place (fade + rotate + scale together) so switching
   * feels like the shape itself transforms, not just a spin.
   */
  function MorphIcon({ mode }: { mode: "sun" | "moon" }) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <g className="morph-sun" data-active={mode === "sun"}>
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
        </g>
        <path
          className="morph-moon"
          data-active={mode === "moon"}
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
        />
      </svg>
    );
  }

  // What the visitor will switch to when clicking: system → light → dark → system
  const nextLabel =
    choice === "system"
      ? "Ganti ke mode terang"
      : choice === "light"
        ? "Ganti ke mode gelap"
        : "Ganti ke otomatis (ikut sistem)";
  const currentTitle = autoMode
    ? "Mode otomatis (ikut sistem)"
    : choice === "dark"
      ? "Mode gelap"
      : "Mode terang";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b-[3px] border-fog transition-colors duration-200 ${scrolled ? "bg-panel/95 backdrop-blur-sm" : "bg-panel"}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <a href={logoHref} className="flex items-center gap-2 group">
          <span className="nb-border-thick nb-shadow-sm bg-paper text-ink w-9 h-9 md:w-10 md:h-10 rounded-md grid place-items-center font-display text-lg md:text-xl group-hover:-rotate-6 transition-transform">
            D
          </span>
          <span className="font-display text-lg md:text-xl text-fog">dikaofc</span>
          <span className="hidden md:inline-block ml-1 w-2 h-4 bg-neon blink" aria-hidden />
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body font-bold text-fog px-3 py-2 rounded-md nb-border bg-card nb-shadow-sm nb-press hover:text-paper"
            >
              {l.label}
            </a>
          ))}

          {/* Theme toggle (desktop) — system → light → dark → system */}
          <button
            type="button"
            onClick={onToggle}
            aria-label={nextLabel}
            title={`${currentTitle} — klik untuk ${nextLabel.toLowerCase()}`}
            className="w-10 h-10 rounded-md nb-border bg-card nb-shadow-sm nb-press grid place-items-center text-fog hover:text-paper"
          >
            {autoMode ? (
              /* Monitor spins in/out when entering/leaving Auto mode */
              <span key="auto" className="theme-icon-anim">
                <Monitor size={19} strokeWidth={2.5} aria-hidden="true" />
              </span>
            ) : (
              /* sun ↔ moon morph */
              <span className="flex h-[19px] w-[19px]">
                <MorphIcon mode={theme === "dark" ? "moon" : "sun"} />
              </span>
            )}
          </button>

          <a
            href="https://github.com/dikaofc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-bold px-4 py-2 rounded-md nb-border bg-paper text-ink nb-shadow-sm nb-press ml-2"
          >
            GitHub ↗
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          {/* Theme toggle (mobile) — system → light → dark → system */}
          <button
            type="button"
            onClick={onToggle}
            aria-label={nextLabel}
            title={`${currentTitle} — klik untuk ${nextLabel.toLowerCase()}`}
            className="w-11 h-11 rounded-md nb-border bg-card nb-shadow-sm nb-press grid place-items-center text-fog hover:text-paper"
          >
            {autoMode ? (
              /* Monitor spins in/out when entering/leaving Auto mode */
              <span key="auto" className="theme-icon-anim">
                <Monitor size={20} strokeWidth={2.5} aria-hidden="true" />
              </span>
            ) : (
              /* sun ↔ moon morph */
              <span className="flex h-[20px] w-[20px]">
                <MorphIcon mode={theme === "dark" ? "moon" : "sun"} />
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="w-11 h-11 rounded-md nb-border bg-card nb-shadow-sm grid place-items-center nb-press"
          >
            <div className="space-y-[5px]">
              <span className={`block w-6 h-[3px] bg-fog transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block w-6 h-[3px] bg-fog transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[3px] bg-fog transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t-[3px] border-fog ${open ? "max-h-96" : "max-h-0 border-t-0"}`}
      >
        <div className="px-4 py-4 grid gap-2 bg-card">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body font-bold text-fog px-4 py-3 rounded-md nb-border bg-panel nb-shadow-sm nb-press hover:text-paper"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/dikaofc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-body font-bold px-4 py-3 rounded-md nb-border bg-paper text-ink nb-shadow-sm nb-press text-center"
          >
            Buka GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}
