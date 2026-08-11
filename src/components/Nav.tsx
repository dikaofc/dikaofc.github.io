import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#repos", label: "Repos" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Kontak" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b-[3px] border-ink transition-colors duration-200 ${scrolled ? "bg-paper/95 backdrop-blur-sm" : "bg-paper"}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="nb-border-thick nb-shadow-sm bg-ink text-paper w-9 h-9 md:w-10 md:h-10 rounded-md grid place-items-center font-display text-lg md:text-xl">
            D
          </span>
          <span className="font-display text-lg md:text-xl">dikaofc</span>
          <span className="hidden md:inline-block ml-1 w-2 h-4 bg-ink blink" aria-hidden />
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body font-bold px-3 py-2 rounded-md nb-border bg-cream nb-shadow-sm nb-press"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/dikaofc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-bold px-4 py-2 rounded-md nb-border bg-ink text-paper nb-shadow-sm nb-press ml-2"
          >
            GitHub ↗
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-11 h-11 rounded-md nb-border bg-cream nb-shadow-sm grid place-items-center nb-press"
        >
          <div className="space-y-[5px]">
            <span className={`block w-6 h-[3px] bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block w-6 h-[3px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[3px] bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t-[3px] border-ink ${open ? "max-h-96" : "max-h-0 border-t-0"}`}
      >
        <div className="px-4 py-4 grid gap-2 bg-cream">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body font-bold px-4 py-3 rounded-md nb-border bg-paper nb-shadow-sm nb-press"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/dikaofc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="font-body font-bold px-4 py-3 rounded-md nb-border bg-ink text-paper nb-shadow-sm nb-press text-center"
          >
            Buka GitHub ↗
          </a>
        </div>
      </div>
    </header>
  );
}
