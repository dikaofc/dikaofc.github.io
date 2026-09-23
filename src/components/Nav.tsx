import { useState } from "react";

export type NavLink = { href: string; label: string };

type ThemeChoice = "system" | "light" | "dark";

type Props = {
  theme: "dark" | "light";
  choice: ThemeChoice;
  onToggle: () => void;
  links?: NavLink[];
  logoHref?: string;
};

const DEFAULT_LINKS: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#repos", label: "Repos" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Kontak" },
  { href: "/layanan", label: "Layanan" },
];

function ThemeGlyph({ theme, autoMode }: { theme: "dark" | "light"; autoMode: boolean }) {
  if (autoMode) {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    );
  }
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

export default function Nav({ theme, choice, onToggle, links = DEFAULT_LINKS, logoHref = "#home" }: Props) {
  const [open, setOpen] = useState(false);

  const autoMode = choice === "system";

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



  return (
    <header className="sticky top-0 z-50 bg-panel transition-colors duration-200" style={{ boxShadow: "0px 1px 0px var(--c-line)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <a href={logoHref} className="flex items-center gap-2">
          <span className="grid place-items-center w-8 h-8 rounded-md bg-cta text-cta-text font-display text-base">
            D
          </span>
          <span className="font-display text-lg text-fog">dikaofc</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mute transition-colors hover:text-fog"
            >
              {l.label}
            </a>
          ))}

          <button
            type="button"
            onClick={onToggle}
            aria-label={nextLabel}
            title={`${currentTitle}, klik untuk ${nextLabel.toLowerCase()}`}
            className="grid place-items-center w-9 h-9 rounded-md text-mute transition-colors hover:text-fog hover:bg-panel-2"
          >
            <ThemeGlyph theme={theme} autoMode={autoMode} />
          </button>

          <a
            href="https://github.com/dikaofc"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !min-h-0 !py-2 !px-4 text-sm"
          >
            GitHub
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-1">
          <button
            type="button"
            onClick={onToggle}
            aria-label={nextLabel}
            title={`${currentTitle}, klik untuk ${nextLabel.toLowerCase()}`}
            className="grid place-items-center w-11 h-11 rounded-md text-mute transition-colors hover:text-fog"
          >
            <ThemeGlyph theme={theme} autoMode={autoMode} />
          </button>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid place-items-center w-11 h-11 rounded-md text-fog"
          >
            <div className="space-y-[5px]">
              <span className={`block w-6 h-[2px] bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-6 h-[2px] bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-[2px] bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${open ? "max-h-96" : "max-h-0"}`}
        style={{ boxShadow: open ? "0px 1px 0px var(--c-line)" : "none" }}
      >
        <div className="px-4 py-3 grid gap-1 bg-panel">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-fog px-3 py-3 rounded-md transition-colors hover:bg-panel-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/dikaofc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-2 w-full"
          >
            Buka GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
