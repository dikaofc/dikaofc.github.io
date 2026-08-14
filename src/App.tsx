import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Repos from "./components/Repos";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Watermark from "./components/Watermark";
import {
  getUser,
  getRepos,
  FALLBACK_USER,
  FALLBACK_REPOS,
  type GhUser,
  type GhRepo,
} from "./lib/github";

const THEME_KEY = "dika-theme";
const THEME_COLORS = { dark: "#0a0c11", light: "#ffffff" } as const;

/** visitor's choice — "system" follows the OS preference */
type ThemeChoice = "system" | "light" | "dark";
type ResolvedTheme = "light" | "dark";

function systemPrefersLight(): boolean {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
}

function getInitialChoice(): ThemeChoice {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return "system";
}

export default function App() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [choice, setChoice] = useState<ThemeChoice>(getInitialChoice);
  const [systemPref, setSystemPref] = useState(systemPrefersLight);

  // keep the resolved theme in sync with the OS while in "system" mode
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => setSystemPref(systemPrefersLight());
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // cross-tab sync: when another tab changes the theme, follow it
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== THEME_KEY) return;
      const next = e.newValue;
      if (next === "light" || next === "dark" || next === "system") {
        setChoice(next);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // live: while in "system" mode, re-resolve whenever the OS preference changes
  const theme: ResolvedTheme =
    choice === "system" ? (systemPref ? "light" : "dark") : choice;

  // apply + persist
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, choice);
    } catch {
      // ignore storage errors (private mode etc.)
    }
  }, [choice]);

  // cycle: system → light → dark → system
  const cycleTheme = () => {
    setChoice((c) => (c === "system" ? "light" : c === "light" ? "dark" : "system"));
  };

  // invisible-style copy watermark: appended when visitors copy text
  useEffect(() => {
    const onCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection()?.toString() ?? "";
      if (!selection || selection.length < 30) return;
      e.clipboardData?.setData("text/plain", `${selection}\n\n— dikacode`);
      e.preventDefault();
    };
    document.addEventListener("copy", onCopy);
    return () => document.removeEventListener("copy", onCopy);
  }, []);

  useEffect(() => {
    let alive = true;

    // start with fallback for instant paint
    setUser(FALLBACK_USER);
    setRepos(FALLBACK_REPOS);

    (async () => {
      try {
        const [u, r] = await Promise.all([getUser(), getRepos()]);
        if (!alive) return;
        setUser(u);
        setRepos(r);
      } catch {
        // keep fallback silently
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-panel text-fog font-body transition-colors duration-300">
      {/* invisible tiled watermark (captured in screenshots) */}
      <Watermark />
      <Nav theme={theme} choice={choice} onToggle={cycleTheme} />
      <Hero user={user} loading={loading && !user} />
      <Repos repos={repos} loading={loading && repos.length === 0} />
      <Stack />
      <Contact />
      <Footer />

      {/* Back to top */}
      <a
        href="#home"
        aria-label="Kembali ke atas"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 nb-border-thick bg-orange text-white w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center shadow-[calc(var(--c-shadow-offset)_/_2)_calc(var(--c-shadow-offset)_/_2)_0_var(--c-shadow)] nb-press font-display text-xl pointer-fine:hover:scale-110 active:scale-95 transition-transform"
      >
        ↑
      </a>
    </div>
  );
}
