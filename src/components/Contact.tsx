import { SiGmail } from "react-icons/si";
import { Globe2, ArrowUpRight, Wrench } from "lucide-react";
import { PiGithubLogo, PiTelegramLogo } from "react-icons/pi";
import Reveal from "./Reveal";

const links = [
  {
    label: "GitHub",
    handle: "@dikaofc",
    url: "https://github.com/dikaofc",
    icon: PiGithubLogo,
  },
  {
    label: "Website",
    handle: "obitoglory.tech",
    url: "https://obitoglory.tech",
    icon: Globe2,
  },
  {
    label: "Telegram",
    handle: "@dikaacode",
    url: "https://t.me/dikaacode",
    icon: PiTelegramLogo,
  },
  {
    label: "Email",
    handle: "dikasukasukaa@gmail.com",
    url: "mailto:dikasukasukaa@gmail.com",
    icon: SiGmail,
  },
  {
    label: "Layanan",
    handle: "Open Jasa, Digital Solution",
    url: "/layanan",
    icon: Wrench,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-panel transition-colors duration-200"
      style={{ borderBottom: "1px solid var(--c-line)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 section">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className="t-mono-label mb-3">Kontak</p>
            <h2 className="t-display text-fog mb-5">Mau chat?</h2>
            <p className="t-lead max-w-md">
              Mau order, mau collab, atau cuma mau nanya-nanya dulu, semuanya
              lewat channel di bawah. Yang bales gw langsung, bukan bot.
              (Ironis: gw bikin bot buat orang, tapi chat orderan tetap gw
              bales sendiri.) Butuh website, bot, atau tools?{" "}
              <a href="/layanan" className="text-accent underline underline-offset-4 hover:opacity-75">
                Cek halaman layanan
              </a>
              . Pilih channel yang paling cocok.
            </p>

            <a
              href="mailto:dikasukasukaa@gmail.com"
              className="btn btn-primary mt-6"
            >
              <SiGmail size={18} aria-hidden="true" />
              Kirim email
              <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
            </a>
          </Reveal>

          <Reveal delay={120} className="grid gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              const isExternal = link.url.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group v-card px-4 py-4 flex items-center gap-4 transition-transform duration-150 hover:-translate-y-0.5 min-h-[44px]"
                >
                  <span className="grid place-items-center shrink-0 w-10 h-10 rounded-md bg-panel-2 text-fog">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block t-mono-label">
                      {link.label}
                    </span>
                    <span className="block font-display font-semibold text-base leading-tight truncate text-fog mt-0.5">
                      {link.handle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="shrink-0 text-faint transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              );
            })}
          </Reveal>
        </div>

        <div className="mt-12 pt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 font-mono text-xs font-medium text-mute" style={{ borderTop: "1px solid var(--c-line)" }}>
          <span>CHAT DIBALES MANUSIA, BUKAN BOT.</span>
          <span className="v-pill">DikaCode, Kendal</span>
        </div>
      </div>
    </section>
  );
}
