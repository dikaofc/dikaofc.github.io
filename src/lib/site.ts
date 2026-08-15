import type { NavLink } from "../components/Nav";
import type { FooterLink } from "../components/Footer";

/** Shared brand constants for DIKACODE */
export const SITE = {
  telegram: "https://t.me/dikaacode",
  telegramHandle: "@dikaacode",
  github: "https://github.com/dikaofc",
  website: "https://obitoglory.tech",
  email: "dikasukasukaa@gmail.com",
} as const;

/** Nav links shared by every subpage (home keeps its section anchors) */
export const SUBPAGE_NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/proyek", label: "Proyek" },
  { href: "/harga", label: "Harga" },
  { href: "/kontak", label: "Kontak" },
];

/** Full footer navigation (home + all pages) */
export const SUBPAGE_FOOTER_LINKS: FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/proyek", label: "Proyek" },
  { href: "/harga", label: "Harga" },
  { href: "/testimoni", label: "Testimoni" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Kontak" },
];
