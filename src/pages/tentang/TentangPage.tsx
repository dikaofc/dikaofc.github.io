import { Bot, Code2, Shield, Terminal, Wrench, Sparkles, Send } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";

const facts = [
  { label: "NAMA", value: "DIKACODE" },
  { label: "STATUS", value: "SMK BHINNEKA — DKV" },
  { label: "KELAS", value: "XI" },
  { label: "DOMISILI", value: "KENDAL, ID" },
  { label: "FOKUS", value: "AI · SECURITY · AUTOMATION" },
];

const journey = [
  {
    num: "01",
    title: "MULAI NGODING",
    desc: "Belajar coding secara otodidak, dari web sampai automation.",
  },
  {
    num: "02",
    title: "BOT & AUTOMATION",
    desc: "Bikin bot Telegram, tools CLI, dan sistem otomatisasi.",
  },
  {
    num: "03",
    title: "AI & OPEN SOURCE",
    desc: "AI gateway, eksperimen AI, dan proyek open source.",
  },
  {
    num: "04",
    title: "DIGITAL SOLUTION",
    desc: "Buka jasa pembuatan website, bot, tools & maintenance.",
  },
];

const skills = [
  { icon: Bot, title: "BOT & AUTOMATION", desc: "Bot Telegram, WhatsApp, Discord, dan workflow otomatis." },
  { icon: Code2, title: "WEB DEVELOPMENT", desc: "Website modern dengan React, Vite, dan Tailwind." },
  { icon: Shield, title: "BUG HUNTING & SECURITY", desc: "Recon, pentesting, dan analisis keamanan sistem." },
  { icon: Terminal, title: "TOOLS & CLI", desc: "Custom tools, utility software, dan CLI automation." },
  { icon: Sparkles, title: "AI INTEGRATION", desc: "AI gateway, LLM orchestration, dan API optimization." },
  { icon: Wrench, title: "MAINTENANCE & FIX", desc: "Perbaikan bug, optimasi, dan pengembangan fitur." },
];

export default function TentangPage() {
  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="// TENTANG DIKACODE"
        title={
          <>
            TENTANG{" "}
            <span className="inline-block text-neon text-glow-cyan">DIKACODE</span>
          </>
        }
        desc="Developer muda dari Indonesia yang fokus di AI, security automation, bug hunting, dan digital solution. Build, break, improve — dan bikin hal berguna dari nol."
        ctas={[
          { label: "KONSULTASI SEKARANG", href: SITE.telegram, external: true, primary: true },
          { label: "Lihat Layanan", href: "/layanan" },
        ]}
      />

      {/* Profil */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 md:gap-10 items-start">
            <Reveal>
              <div className="rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 md:p-8 h-full">
                <div className="font-mono text-xs font-bold text-neon mb-3">// SIAPA DIKACODE?</div>
                <h2 className="font-display text-3xl md:text-4xl text-fog mb-4">
                  ORANG BIASA YANG{" "}
                  <span className="text-paper">SUKA NGODING</span>
                </h2>
                <p className="font-body font-medium text-sm md:text-base text-mute leading-relaxed mb-4">
                  DIKACODE itu bukan perusahaan besar — ini orang biasa yang serius bikin kode.
                  Dari bot Telegram, AI gateway, sampai tools pentesting, semua dikerjain manual,
                  diuji, dan dipoles sampai benar-benar jalan.
                </p>
                <p className="font-body font-medium text-sm md:text-base text-mute leading-relaxed">
                  Prinsipnya sederhana:{" "}
                  <span className="text-fog font-bold">paham dulu sistemnya, baru diperbaiki.</span>{" "}
                  Karena itu setiap project dikerjain dengan teliti dan didukung penuh sampai jadi.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-3">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={i * 70}>
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-line bg-card/60 backdrop-blur-md px-4 py-3 transition-colors duration-200 pointer-fine:hover:border-neon/50">
                    <span className="font-mono text-[10px] md:text-xs font-bold text-mute tracking-widest">
                      {f.label}
                    </span>
                    <span className="font-display text-sm md:text-base text-fog text-right">
                      {f.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel transition-colors duration-300">
        <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <Reveal className="mb-10 md:mb-14">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // PERJALANAN
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-fog">
              DARI NOL SAMPAI{" "}
              <span className="text-neon text-glow-cyan">OPEN JASA</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-5 md:gap-6">
            {journey.map((s, i) => (
              <Reveal key={s.num} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 transition-all duration-300 pointer-fine:hover:-translate-y-1 pointer-fine:hover:border-neon/50">
                  <div className="font-mono text-sm font-bold text-neon text-glow-cyan mb-3">
                    {s.num}
                  </div>
                  <h3 className="font-display text-base md:text-lg text-fog mb-2">{s.title}</h3>
                  <p className="font-body font-medium text-xs md:text-sm text-mute leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <Reveal className="mb-10 md:mb-14">
            <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // KEAHLIAN
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-fog">
              YANG GW{" "}
              <span className="text-paper">KUASAI</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 70} className="h-full">
                  <div className="group h-full rounded-2xl border border-line bg-card/60 backdrop-blur-md p-5 md:p-6 transition-all duration-300 pointer-fine:hover:-translate-y-1 pointer-fine:hover:border-neon/50">
                    <div className="w-11 h-11 rounded-xl border border-neon/40 bg-neon/10 text-neon grid place-items-center mb-4 shadow-[0_0_18px_rgba(34,211,238,0.15)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon size={22} strokeWidth={2} aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-sm md:text-base text-fog mb-2">{s.title}</h3>
                    <p className="font-body font-medium text-xs md:text-sm text-mute leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Motto + CTA */}
      <section className="relative overflow-hidden border-b-4 border-fog bg-panel transition-colors duration-300">
        <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <blockquote className="font-display text-2xl md:text-4xl leading-snug text-fog max-w-3xl mx-auto">
              "Understand the system,{" "}
              <span className="text-neon text-glow-cyan">then improve it.</span>"
            </blockquote>
            <p className="font-mono text-xs md:text-sm text-mute mt-4">
              — DIKACODE · DIGITAL SOLUTION &amp; CODE
            </p>
            <a
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
            >
              <Send size={18} strokeWidth={2.5} aria-hidden="true" />
              KONSULTASI SEKARANG
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
