import Reveal from "../../components/Reveal";

const steps = [
  {
    num: "01",
    title: "KONSULTASI",
    desc: "Diskusikan kebutuhan dan konsep project.",
  },
  {
    num: "02",
    title: "PERENCANAAN",
    desc: "Tentukan fitur, teknologi, dan struktur project.",
  },
  {
    num: "03",
    title: "DEVELOPMENT",
    desc: "Project mulai dibuat dan dikembangkan.",
  },
  {
    num: "04",
    title: "DELIVERY",
    desc: "Project diselesaikan, diuji, dan diserahkan.",
  },
];

export default function Process() {
  return (
    <section
      id="alur-kerja"
      className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div
        className="absolute -bottom-20 left-1/4 w-80 h-80 bg-paper/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <Reveal className="mb-12 md:mb-16">
          <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
            // ALUR KERJA
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-none text-fog">
            ALUR{" "}
            <span className="inline-block text-neon text-glow-cyan">KERJA</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-neon/10 via-neon/40 to-neon/10"
            aria-hidden
          />

          <div className="grid md:grid-cols-4 gap-5 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 100} className="h-full">
                <div className="group relative h-full rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 text-center transition-all duration-300 pointer-fine:hover:-translate-y-1 pointer-fine:hover:border-neon/50">
                  {/* glowing node on the timeline */}
                  <div
                    className="hidden md:grid absolute -top-[9px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full border-2 border-neon/60 bg-panel place-items-center"
                    aria-hidden
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_rgba(34,211,238,0.9)]" />
                  </div>

                  <div className="font-mono text-sm font-bold text-neon text-glow-cyan mb-3 group-hover:text-paper transition-colors duration-300">
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
      </div>
    </section>
  );
}
