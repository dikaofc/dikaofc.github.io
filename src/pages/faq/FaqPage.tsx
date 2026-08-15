import { useState } from "react";
import { ChevronDown, Send } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";
import { cn } from "../../utils/cn";

const faqs = [
  {
    q: "Gimana cara order jasa di DIKACODE?",
    a: "Chat langsung ke Telegram @dikaacode. Ceritakan kebutuhanmu, nanti didiskusikan detailnya (fitur, platform, estimasi waktu), lalu dapat penawaran. Kalau cocok, project mulai dikerjakan.",
  },
  {
    q: "Sistem pembayarannya gimana?",
    a: "Umumnya DP di awal sekitar 50% untuk mulai pengerjaan, lalu pelunasan setelah project selesai dan disetujui. Skema lain bisa didiskusikan sesuai kesepakatan.",
  },
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Tergantung scope project. Landing page / company profile sekitar 3–7 hari, bot atau tools custom sekitar 1–2 minggu, dan maintenance berjalan sesuai kontrak. Estimasi pasti diberikan sebelum mulai.",
  },
  {
    q: "Bisa minta revisi?",
    a: "Bisa. Revisi wajar yang sudah disepakati di awal termasuk dalam pengerjaan. Jumlah dan cakupannya dijelaskan sebelum project dimulai biar tidak ada kejutan.",
  },
  {
    q: "Teknologi apa yang biasanya dipakai?",
    a: "TypeScript, Node.js, React, Python, Kotlin, dan tools lain yang paling cocok untuk kebutuhan project. Teknologi finalnya didiskusikan di tahap perencanaan.",
  },
  {
    q: "Ada garansi atau maintenance?",
    a: "Ada. Bug fix dalam masa garansi singkat setelah delivery termasuk. Untuk dukungan berkelanjutan, ada paket maintenance bulanan yang bisa dipilih.",
  },
  {
    q: "Bisa custom di luar layanan yang ditampilkan?",
    a: "Bisa. Kebutuhan khusus di luar paket (sistem kompleks, fitur unik, integrasi tertentu) bisa didiskusikan langsung — selama masuk akal, pasti dicariin solusinya.",
  },
  {
    q: "Gimana kalau butuh fitur tambahan setelah project jadi?",
    a: "Fitur tambahan di luar scope awal dihitung terpisah dan disepakati dulu sebelum dikerjakan, biar transparan dari sisi biaya dan waktu.",
  },
];

function FaqItem({
  faq,
  open,
  onToggle,
  index,
}: {
  faq: { q: string; a: string };
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-card/60 backdrop-blur-md transition-colors duration-300",
        open ? "border-neon/50" : "border-line"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
        className="flex w-full items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left"
      >
        <span className="flex items-center gap-3">
          <span
            className={cn(
              "font-mono text-xs font-bold transition-colors duration-300",
              open ? "text-neon" : "text-mute"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-sm md:text-base text-fog">{faq.q}</span>
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2.5}
          aria-hidden="true"
          className={cn(
            "shrink-0 text-neon transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="font-body font-medium text-xs md:text-sm text-mute leading-relaxed px-5 md:px-6 pb-5">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="// FAQ"
        title={
          <>
            PERTANYAAN{" "}
            <span className="inline-block text-neon text-glow-cyan">UMUM</span>
          </>
        }
        desc="Jawaban singkat untuk pertanyaan yang paling sering ditanyakan seputar jasa DIKACODE."
        ctas={[{ label: "MASIH BINGUNG? TANYA LANGSUNG", href: SITE.telegram, external: true, primary: true }]}
      />

      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <div className="grid gap-3 md:gap-4">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 50}>
                <FaqItem
                  faq={faq}
                  index={i}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div className="mt-10 rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 md:p-8 text-center">
              <p className="font-display text-lg md:text-xl text-fog mb-2">
                PERTANYAANMU <span className="text-paper">BELUM ADA?</span>
              </p>
              <p className="font-body font-medium text-sm md:text-base text-mute mb-5">
                Langsung tanya aja — jawabannya lebih akurat dari tebakan.
              </p>
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
              >
                <Send size={18} strokeWidth={2.5} aria-hidden="true" />
                CHAT DI TELEGRAM
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
