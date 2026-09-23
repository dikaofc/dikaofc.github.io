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
    a: "Tergantung scope project. Landing page atau company profile sekitar 3 sampai 7 hari, bot atau tools custom sekitar 1 sampai 2 minggu, dan maintenance berjalan sesuai kontrak. Estimasi pasti diberikan sebelum mulai.",
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
    a: "Bisa. Kebutuhan khusus di luar paket (sistem kompleks, fitur unik, integrasi tertentu) bisa didiskusikan langsung, selama masuk akal, pasti dicariin solusinya.",
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
      className="v-card"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left min-h-[44px]"
      >
        <span className="flex items-center gap-3">
          <span
            className={cn(
              "font-mono text-xs",
              open ? "text-accent" : "text-faint"
            )}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display font-semibold text-[15px] text-fog">{faq.q}</span>
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2}
          aria-hidden="true"
          className={cn(
            "shrink-0 text-faint transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-mute px-5 pb-5">
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
        chip="FAQ"
        title="Pertanyaan umum"
        desc="Jawaban singkat untuk pertanyaan yang paling sering ditanyakan seputar jasa DIKACODE."
        ctas={[{ label: "Masih bingung? Tanya langsung", href: SITE.telegram, external: true, primary: true }]}
      />

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid gap-2.5">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 30}>
                <FaqItem
                  faq={faq}
                  index={i}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={60}>
            <div className="mt-4 v-card p-6 md:p-8 text-center">
              <h2 className="font-display font-semibold text-lg md:text-xl text-fog mb-2" style={{ letterSpacing: "-0.02em" }}>
                Pertanyaanmu belum ada?
              </h2>
              <p className="text-sm md:text-[15px] leading-relaxed text-mute mb-5">
                Langsung tanya aja, jawabannya lebih akurat dari tebakan.
              </p>
              <a
                href={SITE.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Send size={16} strokeWidth={2} aria-hidden="true" />
                Chat di Telegram
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
