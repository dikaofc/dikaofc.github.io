import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Repos from "./components/Repos";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
    <div className="min-h-screen bg-paper text-ink font-body">
      <Nav />
      <Hero user={user} loading={loading && !user} />
      <Repos repos={repos} loading={loading && repos.length === 0} />
      <Stack />
      <Contact />
      <Footer />

      {/* Back to top */}
      <a
        href="#home"
        aria-label="Kembali ke atas"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 nb-border-thick bg-orange text-ink w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center shadow-[3px_3px_0_#000] nb-press font-display text-xl"
      >
        ↑
      </a>
    </div>
  );
}
