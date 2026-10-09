import { Send } from "lucide-react";
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
        desc="Halaman ini jujur kosong sampai project pertama selesai. Testimoni yang tampil nanti cuma yang asli, bukan karangan."
        ctas={[{ label: "Jadi klien pertama", href: SITE.telegram, external: true, primary: true }]}
      />

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="v-card px-6 py-12 md:py-16 text-center">
              <p className="t-mono-label mb-4">Status</p>

              <h2 className="t-h2 text-fog mb-3">
                Testimoni masih nol, dan itu jujur
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

          <Reveal delay={80}>
            <p className="mt-6 text-center font-mono text-xs text-faint">
              Slot testimoni pertama masih kosong.
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
