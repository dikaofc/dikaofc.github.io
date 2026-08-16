import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OpenJasaBanner from "./components/OpenJasaBanner";
import Repos from "./components/Repos";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Watermark from "./components/Watermark";
import SecurityShield from "./components/SecurityShield";
import { useTheme } from "./hooks/useTheme";
import {
  getUser,
  getRepos,
  FALLBACK_USER,
  FALLBACK_REPOS,
  type GhUser,
  type GhRepo,
} from "./lib/github";

export default function App() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [repos, setRepos] = useState<GhRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme, choice, cycleTheme } = useTheme();

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
      <SecurityShield />
      <Nav theme={theme} choice={choice} onToggle={cycleTheme} />
      <Hero user={user} loading={loading && !user} />
      <OpenJasaBanner />
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
