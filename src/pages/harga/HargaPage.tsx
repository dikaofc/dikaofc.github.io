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
    title: "Paket website",
    price: "Mulai Rp150rb",
    note: "Harga menyesuaikan jumlah halaman dan fitur",
    features: [
      "Landing Page dan Company Profile",
      "Portfolio dan Personal Website",
      "Custom Website",
      "Responsive dan Fast",
      "Revisi sampai sesuai",
    ],
    popular: true,
  },
  {
    num: "02",
    icon: Bot,
    title: "Paket bot",
    price: "Mulai Rp100rb",
    note: "Untuk Telegram, WhatsApp, atau Discord",
    features: [
      "Custom Commands",
      "Automation Workflow",
      "API Integration",
      "Database dan Admin System",
      "Deploy dan Testing",
    ],
  },
  {
    num: "03",
    icon: Wrench,
    title: "Paket tools",
    price: "Mulai Rp150rb",
    note: "Tools custom sesuai kebutuhan kamu",
    features: [
      "Custom Tools dan Scripts",
      "CLI Tools",
      "Utility Software",
      "Workflow Automation",
      "Dokumentasi singkat",
    ],
  },
  {
    num: "04",
    icon: FileCode2,
    title: "Maintenance",
    price: "Mulai Rp50rb/bln",
    note: "Untuk sistem atau bot yang sudah jalan",
    features: [
      "Bug dan Error Fix",
      "Maintenance Rutin",
      "Optimasi Performa",
      "Penambahan Fitur",
      "Support Responsif",
    ],
  },
];

function titleCase(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function HargaPage() {
  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="Harga dan paket"
        title="Paket harga"
        desc="Angka di bawah ini patokan, bukan harga mati. Nego boleh banget — gw lebih suka project jalan daripada gagal gara-gara harga."
        ctas={[
          { label: "Tanya harga", href: SITE.telegram, external: true, primary: true },
          { label: "Lihat layanan", href: "/layanan" },
        ]}
      />

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-4">
            {pakets.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.num} delay={i * 50} className="h-full">
                  <div className="relative h-full v-card p-6 md:p-7">
                    {p.popular && (
                      <span className="absolute top-4 right-4 v-pill">
                        Paling dicari
                      </span>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <span className="grid place-items-center w-10 h-10 rounded-md bg-panel-2 text-fog">
                        <Icon size={20} strokeWidth={2} aria-hidden="true" />
                      </span>
                      <h2 className="font-display font-semibold text-lg text-fog">{titleCase(p.title)}</h2>
                    </div>

                    <p className="font-display font-semibold text-2xl text-fog mb-1" style={{ letterSpacing: "-0.02em" }}>
                      {p.price}
                    </p>
                    <p className="font-mono text-xs text-faint mb-5">{p.note}</p>

                    <ul className="grid gap-2 mb-6">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm font-medium text-fog">
                          <Check size={15} strokeWidth={2.5} aria-hidden="true" className="shrink-0 text-accent" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={SITE.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary w-full"
                    >
                      <Send size={15} strokeWidth={2} aria-hidden="true" />
                      Nego dan detail
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={60}>
            <div className="mt-4 v-card p-6 md:p-8 text-center">
              <h2 className="font-display font-semibold text-xl md:text-2xl text-fog mb-2" style={{ letterSpacing: "-0.02em" }}>
                Butuh yang custom?
              </h2>
              <p className="text-[15px] md:text-base leading-relaxed text-mute max-w-xl mx-auto">
                Ceritain budget kamu, nanti gw bilang dapat apa aja dengan
                budget segitu. Kalau nggak masuk, gw bilang langsung — nggak
                bakal gw akalin biar jadi.
              </p>
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-5"
              >
                <Send size={16} strokeWidth={2} aria-hidden="true" />
                Diskusikan sekarang
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
