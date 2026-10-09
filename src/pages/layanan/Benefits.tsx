import { MessagesSquare, Wallet, Hammer, Headset } from "lucide-react";
import Reveal from "../../components/Reveal";

const benefits = [
  {
    title: "Ngomong langsung sama yang ngoding",
    desc: "Nggak ada CS, nggak ada admin. Kamu chat, gw yang jawab, dan gw juga yang ngerjain. Miskomunikasi hampir mustahil.",
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
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-start">
          <Reveal className="md:sticky md:top-24">
            <p className="t-mono-label mb-3">Kenapa Dikacode</p>
            <h2 className="t-h2 text-fog">Kenapa gw, bukan yang lain?</h2>
            <p className="t-lead mt-3 !text-lg">
              Empat alasan yang bisa kamu cek sendiri, bukan janji manis.
            </p>
          </Reveal>

          <ul className="divide-y" style={{ borderColor: "var(--c-line)" }}>
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 60}>
                  <li className="flex items-start gap-4 py-6 first:pt-0 last:pb-0">
                    <span className="grid place-items-center shrink-0 w-10 h-10 rounded-md bg-panel-2 text-fog">
                      <Icon size={20} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-base text-fog leading-snug mb-1.5">
                        {b.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-mute">
                        {b.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
