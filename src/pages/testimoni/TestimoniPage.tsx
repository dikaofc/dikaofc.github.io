import { Quote, Send, Star } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";

export default function TestimoniPage() {
  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="// TESTIMONI"
        title={
          <>
            KATA{" "}
            <span className="inline-block text-neon text-glow-cyan">MEREKA</span>
          </>
        }
        desc="Pengalaman orang-orang yang sudah bekerja sama dengan DIKACODE."
        ctas={[{ label: "JADI KLIEN PERTAMA", href: SITE.telegram, external: true, primary: true }]}
      />

      <section className="relative overflow-hidden border-b-4 border-fog bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
          {/* Honest empty state — DIKACODE invites its first clients */}
          <Reveal>
            <div className="rounded-3xl border border-dashed border-neon/40 bg-card/50 backdrop-blur-md px-6 py-14 md:py-20 text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl border border-neon/40 bg-neon/10 text-neon grid place-items-center mb-6">
                <Quote size={30} strokeWidth={2} aria-hidden="true" />
              </div>

              <h2 className="font-display text-2xl md:text-4xl text-fog mb-3">
                BELUM ADA TESTIMONI —{" "}
                <span className="text-paper">JADILAH YANG PERTAMA!</span>
              </h2>
              <p className="font-body font-medium text-sm md:text-base text-mute max-w-lg mx-auto leading-relaxed">
                DIKACODE baru aja buka jasa digital solution. Semua project dikerjain dengan
                teliti dan didukung sampai beres — biar pengalaman kamu jadi cerita yang bisa
                ditampilkan di halaman ini.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
                >
                  <Send size={18} strokeWidth={2.5} aria-hidden="true" />
                  MULAI PROJECT
                </a>
              </div>
            </div>
          </Reveal>

          {/* Preview of the testimonial format */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-8">
            {[0, 1].map((i) => (
              <Reveal key={i} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-card/60 backdrop-blur-md p-6 opacity-60">
                  <div className="flex items-center gap-1 mb-4 text-paper">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} strokeWidth={2} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="font-body font-medium text-sm md:text-base text-mute italic leading-relaxed mb-5">
                    "Testimoni klien akan tampil di sini setelah project pertama selesai. Cerita
                    kamu berikutnya."
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full border-2 border-line bg-panel grid place-items-center font-display text-sm text-mute">
                      ?
                    </span>
                    <div>
                      <div className="font-display text-sm text-fog">Nama Klien</div>
                      <div className="font-mono text-[10px] text-mute">PROJECT — DIKACODE</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
