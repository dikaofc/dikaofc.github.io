import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import OpenJasaBanner from "./components/OpenJasaBanner";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Watermark from "./components/Watermark";
import SecurityShield from "./components/SecurityShield";
import { useTheme } from "./hooks/useTheme";
import { getUser, FALLBACK_USER, type GhUser } from "./lib/github";

export default function App() {
  const [user, setUser] = useState<GhUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme, choice, cycleTheme } = useTheme();

  useEffect(() => {
    const onCopy = (e: ClipboardEvent) => {
      const selection = window.getSelection()?.toString() ?? "";
      if (!selection || selection.length < 30) return;
      e.clipboardData?.setData("text/plain", `${selection}\n\n- dikacode`);
      e.preventDefault();
    };
    document.addEventListener("copy", onCopy);
    return () => document.removeEventListener("copy", onCopy);
  }, []);

  useEffect(() => {
    let alive = true;

    setUser(FALLBACK_USER);

    (async () => {
      try {
        const u = await getUser();
        if (!alive) return;
        setUser(u);
      } catch {
        // GitHub unavailable: keep the honest fallback profile shown
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-panel text-fog font-body transition-colors duration-200">
      <Watermark />
      <SecurityShield />
      <Nav theme={theme} choice={choice} onToggle={cycleTheme} />
      <Hero user={user} loading={loading && !user} />
      <OpenJasaBanner />
      <Stack />
      <Contact />
      <Footer />

      <a
        href="#home"
        aria-label="Kembali ke atas"
        className="fixed back-top z-40 grid place-items-center w-11 h-11 rounded-full bg-cta text-cta-text text-lg transition-opacity hover:opacity-85"
      >
        ↑
      </a>
    </div>
  );
}
