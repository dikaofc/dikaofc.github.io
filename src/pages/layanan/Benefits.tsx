import { Shield, Zap, BadgeCheck, Headset } from "lucide-react";
import Reveal from "../../components/Reveal";

const benefits = [
  {
    title: "Aman terpercaya",
    desc: "Pengerjaan aman dan profesional, hasil kerja bisa dipercaya.",
    icon: Shield,
  },
  {
    title: "Cepat dan efisien",
    desc: "Pengerjaan cepat tanpa mengorbankan kualitas hasil akhir.",
    icon: Zap,
  },
  {
    title: "Kualitas terjamin",
    desc: "Kode rapi, diuji, dan dioptimalkan sebelum diserahkan.",
    icon: BadgeCheck,
  },
  {
    title: "Support responsif",
    desc: "Komunikasi cepat dan tanggap sebelum, saat, dan sesudah project.",
    icon: Headset,
  },
];

export default function Benefits() {
  return (
    <section
      id="kenapa"
      className="relative overflow-hidden bg-panel transition-colors duration-200"
      style={{ borderBottom: "1px solid var(--c-line)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 section">
        <Reveal className="mb-8 max-w-xl">
          <p className="t-mono-label mb-3">Kenapa Dikacode</p>
          <h2 className="t-h2 text-fog">Kenapa Dikacode?</h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;

            return (
              <Reveal key={b.title} delay={i * 60} className="h-full">
                <div className="h-full v-card p-5">
                  <span className="grid place-items-center w-10 h-10 rounded-md bg-panel-2 text-fog mb-4">
                    <Icon size={20} strokeWidth={2} aria-hidden="true" />
                  </span>
                  <h3 className="font-display font-semibold text-base text-fog leading-snug mb-1.5">
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mute">
                    {b.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
