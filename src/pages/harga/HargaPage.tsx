import { Code2, Bot, Wrench, FileCode2, Check, Send } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";

type Paket = {
  num: string;
  icon: typeof Code2;
  title: string;
  price: string;
  note: string;
  features: string[];
  popular?: boolean;
};

const pakets: Paket[] = [
  {
    num: "01",
    icon: Code2,
    title: "PAKET WEBSITE",
    price: "mulai Rp150rb",
    note: "harga menyesuaikan jumlah halaman & fitur",
    features: [
      "Landing Page / Company Profile",
      "Portfolio / Personal Website",
      "Custom Website",
      "Responsive & Fast",
      "Revisi sampai sesuai",
    ],
    popular: true,
  },
  {
    num: "02",
    icon: Bot,
    title: "PAKET BOT",
    price: "mulai Rp100rb",
    note: "untuk Telegram, WhatsApp, atau Discord",
    features: [
      "Custom Commands",
      "Automation Workflow",
      "API Integration",
      "Database & Admin System",
      "Deploy & Testing",
    ],
  },
  {
    num: "03",
    icon: Wrench,
    title: "PAKET TOOLS",
    price: "mulai Rp150rb",
    note: "tools custom sesuai kebutuhan kamu",
    features: [
      "Custom Tools & Scripts",
      "CLI Tools",
      "Utility Software",
      "Workflow Automation",
      "Dokumentasi singkat",
    ],
  },
  {
    num: "04",
    icon: FileCode2,
    title: "MAINTENANCE",
    price: "mulai Rp50rb/bln",
    note: "untuk sistem atau bot yang sudah jalan",
    features: [
      "Bug & Error Fix",
      "Maintenance Rutin",
      "Optimasi Performa",
      "Penambahan Fitur",
      "Support Responsif",
    ],
  },
];

export default function HargaPage() {
  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="// HARGA & PAKET"
        title={
          <>
            PAKET{" "}
            <span className="inline-block text-paper">HARGA</span>
          </>
        }
        desc="Harga transparan, bisa diskusi, dan menyesuaikan kebutuhan project. Konsultasi dulu gratis — tanpa paksaan."
        ctas={[
          { label: "TANYA HARGA", href: SITE.telegram, external: true, primary: true },
          { label: "Lihat Layanan", href: "/layanan" },
        ]}
      />

      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {pakets.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.num} delay={i * 80} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 md:p-8 transition-all duration-300 pointer-fine:hover:-translate-y-1">
                    {p.popular && (
                      <span className="absolute top-4 right-4 nb-border bg-paper text-ink font-mono text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-md">
                        ★ PALING DICARI
                      </span>
                    )}
                    <span
                      className="absolute -top-2 right-6 font-display text-6xl md:text-7xl leading-none text-fog/10 select-none"
                      aria-hidden
                    >
                      {p.num}
                    </span>

                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl border border-neon/40 bg-neon/10 text-neon grid place-items-center shadow-[0_0_18px_rgba(34,211,238,0.15)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                          <Icon size={24} strokeWidth={2} aria-hidden="true" />
                        </div>
                        <h2 className="font-display text-lg md:text-xl text-fog">{p.title}</h2>
                      </div>

                      <div className="font-display text-2xl md:text-3xl text-neon text-glow-cyan mb-1">
                        {p.price}
                      </div>
                      <p className="font-mono text-[11px] md:text-xs text-mute mb-5">{p.note}</p>

                      <ul className="grid gap-2 mb-6">
                        {p.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 font-body text-xs md:text-sm font-semibold text-fog/85"
                          >
                            <span className="shrink-0 grid place-items-center w-4 h-4 rounded-full bg-neon/15 text-neon">
                              <Check size={10} strokeWidth={3.5} aria-hidden="true" />
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={SITE.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 nb-border-thick bg-card text-fog font-display text-sm md:text-base px-5 py-2.5 md:py-3 rounded-lg nb-shadow-sm nb-press pointer-fine:hover:scale-105 active:scale-95 transition-transform group-hover:bg-neon group-hover:text-ink"
                      >
                        <Send size={15} strokeWidth={2.5} aria-hidden="true" />
                        NEGO / DETAIL
                      </a>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={100}>
            <div className="mt-10 rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 md:p-8 text-center">
              <p className="font-display text-lg md:text-2xl text-fog mb-2">
                BUTUH YANG <span className="text-paper">CUSTOM?</span>
              </p>
              <p className="font-body font-medium text-sm md:text-base text-mute max-w-xl mx-auto">
                Harga di atas patokan awal. Kebutuhan di luar paket (fitur khusus, sistem kompleks,
                project jangka panjang) bisa didiskusikan — hasil akhirnya tetap transparan.
              </p>
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 nb-border-thick bg-paper text-ink font-display text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
              >
                <Send size={18} strokeWidth={2.5} aria-hidden="true" />
                DISKUSIKAN SEKARANG
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
