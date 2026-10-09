import { Quote, Send, Star } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";

export default function TestimoniPage() {
  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="Testimoni"
        title="Kata mereka"
        desc="Pengalaman orang-orang yang sudah bekerja sama dengan DIKACODE."
        ctas={[{ label: "Jadi klien pertama", href: SITE.telegram, external: true, primary: true }]}
      />

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="v-card px-6 py-12 md:py-16 text-center">
              <span className="grid place-items-center w-12 h-12 mx-auto rounded-md bg-panel-2 text-fog mb-6">
                <Quote size={24} strokeWidth={2} aria-hidden="true" />
              </span>

              <h2 className="t-h2 text-fog mb-3">
                Testimoni masih nol — dan itu jujur
              </h2>
              <p className="text-[15px] md:text-base leading-relaxed text-mute max-w-lg mx-auto">
                Web ini baru, jasa ini baru. Nol testimoni artinya belum ada
                yang kecewa, tapi juga belum ada yang puas. Project kamu bisa
                jadi cerita pertama di halaman ini.
              </p>

              <div className="mt-8">
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Send size={16} strokeWidth={2} aria-hidden="true" />
                  Mulai project
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {[0, 1].map((i) => (
              <Reveal key={i} delay={i * 60} className="h-full">
                <div className="h-full v-card p-6 opacity-70" aria-hidden="true">
                  <div className="flex items-center gap-1 mb-4 text-faint">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} strokeWidth={2} fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-[15px] leading-relaxed text-mute italic mb-5">
                    "Testimoni klien akan tampil di sini setelah project pertama selesai. Cerita
                    kamu berikutnya."
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-panel-2 font-display text-sm text-faint">
                      ?
                    </span>
                    <div>
                      <div className="font-display font-semibold text-sm text-fog">Nama Klien</div>
                      <div className="font-mono text-[11px] text-faint">PROJECT, DIKACODE</div>
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
