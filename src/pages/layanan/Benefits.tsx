import { MessagesSquare, Wallet, Hammer, Headset } from "lucide-react";
import Reveal from "../../components/Reveal";

const benefits = [
  {
    title: "Ngomong langsung sama yang ngoding",
    desc: "Nggak ada CS, nggak ada admin. Kamu chat, gw yang jawab — dan gw juga yang ngerjain. Miskomunikasi hampir mustahil.",
    icon: MessagesSquare,
  },
  {
    title: "Harga ditulis di web",
    desc: "Patokannya ada di halaman /harga, nego di depan. Nggak ada biaya siluman yang tiba-tiba muncul di tengah jalan.",
    icon: Wallet,
  },
  {
    title: "Dikerjain dari nol",
    desc: "Bukan template nulled, bukan theme bajakan. Kode ditulis buat project kamu, jadi gampang dirawat dan dikembangkan.",
    icon: Hammer,
  },
  {
    title: "Garansi beneran",
    desc: "Habis serah terima terus ada yang error? Benerinnya gratis dalam masa garansi. Nama gw yang jadi taruhan.",
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
          <h2 className="t-h2 text-fog">Kenapa gw, bukan yang lain?</h2>
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
