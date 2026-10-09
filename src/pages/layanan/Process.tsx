import Reveal from "../../components/Reveal";

const steps = [
  {
    num: "01",
    title: "Chat dulu",
    desc: "Ceritain maumu via Telegram. Gratis, nggak wajib jadi. Kalau gw rasa nggak bisa, gw bilang langsung.",
  },
  {
    num: "02",
    title: "Deal & DP 50%",
    desc: "Sepakat scope, harga, dan deadline di awal. DP masuk, baru gw mulai ngoding.",
  },
  {
    num: "03",
    title: "Dikerjain + kabar",
    desc: "Progress gw kabarin berkala. Revisi di tengah jalan boleh, selama masih masuk akal.",
  },
  {
    num: "04",
    title: "Lunas & serah terima",
    desc: "Testing bareng, pelunasan, terus source code + panduan diserahin. Garansi bug fix mulai jalan.",
  },
];

export default function Process() {
  return (
    <section
      id="alur-kerja"
      className="relative overflow-hidden bg-panel-2 transition-colors duration-200"
      style={{ borderBottom: "1px solid var(--c-line)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 section">
        <Reveal className="mb-8 max-w-xl">
          <p className="t-mono-label mb-3">Alur kerja</p>
          <h2 className="t-h2 text-fog">Alur kerja</h2>
        </Reveal>

        <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
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
  );
}
