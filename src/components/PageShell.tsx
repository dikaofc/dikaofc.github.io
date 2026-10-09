import type { ReactNode } from "react";
import Nav, { type NavLink } from "./Nav";
import Footer, { type FooterLink } from "./Footer";
import Watermark from "./Watermark";
import SecurityShield from "./SecurityShield";
import { useTheme } from "../hooks/useTheme";

type Props = {
  navLinks: NavLink[];
  footerLinks: FooterLink[];
  topId?: string;
  children: ReactNode;
};

export default function PageShell({ navLinks, footerLinks, topId = "page-top", children }: Props) {
  const { theme, choice, cycleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-panel text-fog font-body transition-colors duration-200">
      <Watermark />
      <SecurityShield />
      <Nav theme={theme} choice={choice} onToggle={cycleTheme} links={navLinks} logoHref="/" />

      <main id={topId}>{children}</main>

      <Footer links={footerLinks} />

      <a
        href={`#${topId}`}
        aria-label="Kembali ke atas"
        className="fixed back-top z-40 grid place-items-center w-11 h-11 rounded-full bg-cta text-cta-text text-lg transition-opacity hover:opacity-85"
      >
        ↑
      </a>
    </div>
  );
}
