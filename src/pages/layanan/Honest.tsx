import { Ban } from "lucide-react";
import Reveal from "../../components/Reveal";

const noList = [
  {
    title: "Judi / slot / pinjol",
    desc: "Mau bayar berapapun, nggak gw kerjain. Titik.",
  },
  {
    title: "Phising & malware",
    desc: "Tools gw buat bantu orang, bukan buat nipu orang.",
  },
  {
    title: "Nugasin full biar nggak belajar",
    desc: "Dibantuin paham boleh. Dikerjain semua biar kamu santai — nggak.",
  },
];

export default function Honest() {
  return (
    <section
      id="jujur"
      className="relative overflow-hidden bg-panel transition-colors duration-200"
      style={{ borderBottom: "1px solid var(--c-line)" }}
    >
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 section">
        <Reveal className="mb-8 max-w-xl">
          <p className="t-mono-label mb-3">Catatan jujur</p>
          <h2 className="t-h2 text-fog">Yang nggak gw kerjain</h2>
          <p className="t-lead mt-3 !text-lg">
            Biar jelas dari awal — hal di bawah ini jangan ditawarin, hemat waktu kita berdua.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {noList.map((n, i) => (
            <Reveal key={n.title} delay={i * 60} className="h-full">
              <div className="h-full v-card p-5">
                <span className="grid place-items-center w-10 h-10 rounded-md bg-panel-2 text-fog mb-4">
                  <Ban size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="font-display font-semibold text-base text-fog leading-snug mb-1.5">
                  {n.title}
                </h3>
                <p className="text-sm leading-relaxed text-mute">
                  {n.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="font-mono text-sm text-mute mt-8">
            Di luar daftar itu? Gas, <a href="https://t.me/dikaacode" target="_blank" rel="noopener noreferrer" className="text-fog underline underline-offset-4 hover:opacity-75">ceritain aja</a>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
