import type { ReactNode } from "react";
import Nav, { type NavLink } from "./Nav";
import Footer, { type FooterLink } from "./Footer";
import Watermark from "./Watermark";
import SecurityShield from "./SecurityShield";
import { useTheme } from "../hooks/useTheme";

type Props = {
  /** links shown in the navbar of this page */
  navLinks: NavLink[];
  /** links shown in the footer of this page */
  footerLinks: FooterLink[];
  /** id used for the back-to-top anchor (put on <main>) */
  topId?: string;
  children: ReactNode;
};

/**
 * Shared layout for every subpage (tentang, layanan, proyek, harga, …):
 * Watermark + Nav + <main> + Footer + back-to-top, with the theme state
 * wired exactly like the home page.
 */
export default function PageShell({ navLinks, footerLinks, topId = "page-top", children }: Props) {
  const { theme, choice, cycleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-panel text-fog font-body transition-colors duration-300">
      <Watermark />
      <SecurityShield />
      <Nav theme={theme} choice={choice} onToggle={cycleTheme} links={navLinks} logoHref="/" />

      <main id={topId}>{children}</main>

      <Footer links={footerLinks} />

      {/* Back to top */}
      <a
        href={`#${topId}`}
        aria-label="Kembali ke atas"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 nb-border-thick bg-orange text-white w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center shadow-[calc(var(--c-shadow-offset)_/_2)_calc(var(--c-shadow-offset)_/_2)_0_var(--c-shadow)] nb-press font-display text-xl pointer-fine:hover:scale-110 active:scale-95 transition-transform"
      >
        ↑
      </a>
    </div>
  );
}
