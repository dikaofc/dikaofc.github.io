import { SiGmail } from "react-icons/si";
import { Globe2, ArrowUpRight } from "lucide-react";
import { PiGithubLogo, PiTelegramLogo } from "react-icons/pi";
import Reveal from "./Reveal";
import Mascot from "./Mascot";

const links = [
  {
    label: "GitHub",
    handle: "@dikaofc",
    url: "https://github.com/dikaofc",
    tone: "bg-card text-fog",
    shadow: "nb-press-neon",
    icon: PiGithubLogo,
    number: "01",
  },
  {
    label: "Website",
    handle: "obitoglory.tech",
    url: "https://obitoglory.tech",
    tone: "bg-orange text-white",
    shadow: "nb-press-orange",
    icon: Globe2,
    number: "02",
  },
  {
    label: "Telegram",
    handle: "@dikaacode",
    url: "https://t.me/dikaacode",
    tone: "bg-blue text-white",
    shadow: "nb-press-blue",
    icon: PiTelegramLogo,
    number: "03",
  },
  {
    label: "Email",
    handle: "dikasukasukaa@gmail.com",
    url: "mailto:dikasukasukaa@gmail.com",
    tone: "bg-pink text-white",
    shadow: "nb-press-pink",
    icon: SiGmail,
    number: "04",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300"
    >
      {/* Decorative background */}
      <div
        className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange nb-border-thick rounded-full opacity-15 pointer-events-none hover:opacity-30 transition-opacity"
        aria-hidden="true"
      />

      <div
        className="absolute top-10 right-10 w-20 h-20 border-4 border-fog rotate-12 opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Contact intro */}
          <Reveal>
            <div className="inline-flex items-center gap-2 nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-4 nb-shadow-sm">
              <span
                className="w-2 h-2 rounded-full bg-green blink pulse-glow"
                aria-hidden="true"
              />
              // KONTAK
            </div>

            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 text-fog pointer-fine:hover:scale-105 transition-transform">
              MAU
              <br />
              <span className="inline-block bg-pink text-white nb-border-thick px-3 md:px-4 -rotate-2 pointer-fine:hover:rotate-0 transition-transform">
                CHAT?
              </span>
            </h2>

            <p className="font-body font-semibold text-base md:text-lg max-w-md leading-snug text-mute">
              open for collab, project custom, atau sekadar diskusi soal ai,
              bug, atau projek iseng. pilih channel yang paling cocok.
            </p>

            {/* Availability */}
            <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs md:text-sm font-bold">
              <span className="flex items-center gap-2 nb-border bg-card text-fog px-3 py-2 rounded-lg pointer-fine:hover:scale-110 active:scale-95 transition-transform">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-green blink pulse-glow"
                  aria-hidden="true"
                />
                TERSEDIA
              </span>

              <span className="text-mute">
                ON 24 JAM
              </span>
            </div>

            {/* Primary email */}
            <a
              href="mailto:dikasukasukaa@gmail.com"
              className="glitch mt-6 inline-flex items-center gap-3 nb-border-thick bg-paper text-ink font-display text-base md:text-lg px-5 py-3 md:px-6 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
            >
              <SiGmail
                className="shrink-0"
                size={20}
                aria-hidden="true"
              />

              <span>KIRIM EMAIL</span>

              <ArrowUpRight
                size={21}
                strokeWidth={2.5}
                aria-hidden="true"
                className="hover:rotate-45 transition-transform"
              />
            </a>
          </Reveal>

          {/* Contact links */}
          <Reveal delay={120} className="grid gap-4">
            {links.map((link) => {
              const Icon = link.icon;
              const isExternal = link.url.startsWith("http");

              return (
                <a
                  key={link.label}
                  href={link.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`group relative overflow-hidden nb-border-thick ${link.tone} ${link.shadow} rounded-xl px-4 py-4 md:px-5 md:py-5 nb-shadow-lg flex items-center gap-4 transition-all duration-300 pointer-fine:hover:scale-[1.03] active:scale-[0.98]`}
                >
                  {/* Number */}
                  <div className="shrink-0">
                    <div className="w-11 h-11 md:w-12 md:h-12 nb-border bg-paper text-ink rounded-lg grid place-items-center font-mono font-bold text-xs md:text-sm pointer-fine:group-hover:scale-125 transition-transform">
                      {link.number}
                    </div>
                  </div>

                  {/* Brand logo */}
                  <div className="shrink-0">
                    <div className="w-11 h-11 md:w-12 md:h-12 nb-border rounded-full grid place-items-center group-hover:rotate-12 transition-transform">
                      <Icon
                        size={22}
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] md:text-xs font-bold uppercase text-mute tracking-wider">
                      {link.label}
                    </div>

                    <div className="font-display text-lg md:text-2xl leading-tight truncate group-hover:translate-x-1 transition-transform text-fog">
                      {link.handle}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="shrink-0 w-9 h-9 md:w-11 md:h-11 nb-border rounded-full grid place-items-center transition-transform duration-150 group-hover:rotate-[-8deg] group-hover:translate-x-1">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Decorative corner */}
                  <div
                    className="absolute -right-8 -top-8 w-20 h-20 rounded-full border-4 border-current opacity-10 pointer-events-none group-hover:opacity-30 transition-opacity"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </Reveal>
        </div>

        {/* Bottom strip */}
        <div className="relative mt-14 md:mt-20 pt-5 border-t-4 border-line flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-xs md:text-sm font-bold pointer-fine:hover:opacity-80 transition-opacity">
          {/* Cat peeking above the strip */}
          <Mascot variant="cat" className="-top-12 right-0 md:right-4" />
          <span className="text-mute">
            LET&apos;S BUILD SOMETHING USEFUL.
          </span>

          <span className="nb-border bg-orange text-white px-3 py-1 rounded pointer-fine:hover:scale-110 active:scale-95 transition-transform">
            DikaCode | Kendal
          </span>
        </div>
      </div>
    </section>
  );
}
