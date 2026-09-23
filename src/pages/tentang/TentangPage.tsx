import { Bot, Code2, Shield, Terminal, Wrench, Sparkles, Send } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";

const facts = [
  { label: "Nama", value: "DIKACODE" },
  { label: "Status", value: "SMK Bhinneka, DKV" },
  { label: "Kelas", value: "XI" },
  { label: "Domisili", value: "Kendal, ID" },
  { label: "Fokus", value: "AI, Security, Automation" },
];

const journey = [
  {
    num: "01",
    title: "Mulai ngoding",
    desc: "Belajar coding secara otodidak, dari web sampai automation.",
  },
  {
    num: "02",
    title: "Bot dan automation",
    desc: "Bikin bot Telegram, tools CLI, dan sistem otomatisasi.",
  },
  {
    num: "03",
    title: "AI dan open source",
    desc: "AI gateway, eksperimen AI, dan proyek open source.",
  },
  {
    num: "04",
    title: "Digital solution",
    desc: "Buka jasa pembuatan website, bot, tools dan maintenance.",
  },
];

const skills = [
  { icon: Bot, title: "Bot dan automation", desc: "Bot Telegram, WhatsApp, Discord, dan workflow otomatis." },
  { icon: Code2, title: "Web development", desc: "Website modern dengan React, Vite, dan Tailwind." },
  { icon: Shield, title: "Bug hunting dan security", desc: "Recon, pentesting, dan analisis keamanan sistem." },
  { icon: Terminal, title: "Tools dan CLI", desc: "Custom tools, utility software, dan CLI automation." },
  { icon: Sparkles, title: "AI integration", desc: "AI gateway, LLM orchestration, dan API optimization." },
  { icon: Wrench, title: "Maintenance dan fix", desc: "Perbaikan bug, optimasi, dan pengembangan fitur." },
];

export default function TentangPage() {
  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="Tentang Dikacode"
        title="Tentang Dikacode"
        desc="Developer muda dari Indonesia yang fokus di AI, security automation, bug hunting, dan digital solution. Build, break, improve, dan bikin hal berguna dari nol."
        ctas={[
          { label: "Konsultasi sekarang", href: SITE.telegram, external: true, primary: true },
          { label: "Lihat layanan", href: "/layanan" },
        ]}
      />

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 items-start">
            <Reveal>
              <div className="v-card p-6 md:p-8 h-full">
                <p className="t-mono-label mb-3">Siapa Dikacode?</p>
                <h2 className="t-h2 text-fog mb-4">
                  Orang biasa yang suka ngoding
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed text-mute mb-4">
                  DIKACODE itu bukan perusahaan besar, ini orang biasa yang serius bikin kode.
                  Dari bot Telegram, AI gateway, sampai tools pentesting, semua dikerjain manual,
                  diuji, dan dipoles sampai benar-benar jalan.
                </p>
                <p className="text-[15px] md:text-base leading-relaxed text-mute">
                  Prinsipnya sederhana:{" "}
                  <span className="text-fog font-medium">paham dulu sistemnya, baru diperbaiki.</span>{" "}
                  Karena itu setiap project dikerjain dengan teliti dan didukung penuh sampai jadi.
                </p>
              </div>
            </Reveal>

            <dl className="grid gap-2.5">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={i * 40}>
                  <div className="flex items-center justify-between gap-4 v-card px-4 py-3">
                    <dt className="t-mono-label">
                      {f.label}
                    </dt>
                    <dd className="font-display font-semibold text-sm text-fog text-right">
                      {f.value}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-8">
            <p className="t-mono-label mb-2">Perjalanan</p>
            <h2 className="t-h2 text-fog">Dari nol sampai open jasa</h2>
          </Reveal>

          <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {journey.map((s, i) => (
              <Reveal key={s.num} delay={i * 60} className="h-full">
                <li className="h-full v-card p-6">
                  <p className="font-mono text-sm font-medium text-accent mb-2">{s.num}</p>
                  <h3 className="font-display font-semibold text-base text-fog mb-1.5">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-mute">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal className="mb-8">
            <p className="t-mono-label mb-2">Keahlian</p>
            <h2 className="t-h2 text-fog">Yang gw kuasai</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 40} className="h-full">
                  <div className="h-full v-card p-5">
                    <span className="grid place-items-center w-10 h-10 rounded-md bg-panel-2 text-fog mb-4">
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <h3 className="font-display font-semibold text-[15px] text-fog mb-1.5">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-mute">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-panel transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <Reveal>
            <blockquote className="font-display font-semibold text-2xl md:text-3xl leading-snug text-fog max-w-3xl mx-auto" style={{ letterSpacing: "-0.02em" }}>
              "Understand the system, then improve it."
            </blockquote>
            <p className="font-mono text-xs text-faint mt-4">
              DIKACODE, DIGITAL SOLUTION DAN CODE
            </p>
            <a
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-8"
            >
              <Send size={16} strokeWidth={2} aria-hidden="true" />
              Konsultasi sekarang
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
