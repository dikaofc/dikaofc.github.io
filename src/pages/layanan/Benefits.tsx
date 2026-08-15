import { Shield, Zap, BadgeCheck, Headset } from "lucide-react";
import Reveal from "../../components/Reveal";

const benefits = [
  {
    title: "AMAN TERPERCAYA",
    desc: "Pengerjaan aman dan profesional, hasil kerja bisa dipercaya.",
    icon: Shield,
  },
  {
    title: "CEPAT & EFISIEN",
    desc: "Pengerjaan cepat tanpa mengorbankan kualitas hasil akhir.",
    icon: Zap,
  },
  {
    title: "KUALITAS TERJAMIN",
    desc: "Kode rapi, diuji, dan dioptimalkan sebelum diserahkan.",
    icon: BadgeCheck,
  },
  {
    title: "SUPPORT RESPONSIF",
    desc: "Komunikasi cepat dan tanggap sebelum, saat, dan sesudah project.",
    icon: Headset,
  },
];

export default function Benefits() {
  return (
    <section
      id="kenapa"
      className="relative overflow-hidden border-b-4 border-fog bg-panel transition-colors duration-300"
    >
      <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <Reveal className="mb-10 md:mb-14 text-center">
          <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
            // KENAPA DIKACODE?
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-none text-fog">
            KENAPA{" "}
            <span className="inline-block text-neon text-glow-cyan">DIKACODE?</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;

            return (
              <Reveal key={b.title} delay={i * 80} className="h-full">
                <div className="group h-full flex items-start gap-4 rounded-2xl border border-line bg-card/60 backdrop-blur-md p-5 md:p-6 transition-all duration-300 pointer-fine:hover:-translate-y-1 pointer-fine:hover:border-neon/50">
                  <div className="shrink-0 w-11 h-11 rounded-xl border border-paper/50 bg-paper/10 text-paper grid place-items-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon size={22} strokeWidth={2.2} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm md:text-base text-fog leading-tight mb-1.5 group-hover:text-paper transition-colors duration-300">
                      {b.title}
                    </h3>
                    <p className="font-body font-medium text-xs md:text-sm text-mute leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
