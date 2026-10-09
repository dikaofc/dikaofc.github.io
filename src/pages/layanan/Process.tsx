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
        <Reveal className="mb-10 max-w-xl">
          <p className="t-mono-label mb-3">Empat langkah</p>
          <h2 className="t-h2 text-fog">Alur kerja</h2>
          <p className="t-lead mt-3 !text-lg">
            Dari chat pertama sampai source code di tanganmu.
          </p>
        </Reveal>

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 70} className="h-full">
              <li className="relative h-full pl-5" style={{ borderLeft: "1px solid var(--c-line)" }}>
                <span
                  className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
                  style={{ background: "var(--c-accent)" }}
                  aria-hidden="true"
                />
                <p className="font-mono text-sm font-medium text-accent-ink mb-1">{s.num}</p>
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
