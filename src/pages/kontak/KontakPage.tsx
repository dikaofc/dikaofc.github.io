import { Send } from "lucide-react";
import PageShell from "../../components/PageShell";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import Contact from "../../components/Contact";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS, SITE } from "../../lib/site";

export default function KontakPage() {
  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <PageHero
        chip="Kontak Dikacode"
        title="Hubungi kami"
        desc="Open untuk collab, project custom, atau sekadar diskusi. Pilih channel yang paling cocok, respons cepat."
        ctas={[
          { label: "Chat di Telegram", href: SITE.telegram, external: true, primary: true },
          { label: "Lihat layanan", href: "/layanan" },
        ]}
      />

      <Contact />

      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-200">
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center">
          <Reveal>
            <div className="v-card relative mx-auto max-w-2xl px-6 py-10 md:py-14">
              <div className="space-y-4">
                <p className="t-mono-label">Respons cepat</p>
                <h2 className="t-h2 text-fog">
                  Respons cepat via Telegram
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed text-mute">
                  Balas pertanyaan, diskusi kebutuhan, sampai detail project, semua bisa lewat
                  satu chat.
                </p>
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Send size={16} strokeWidth={2} aria-hidden="true" />
                  @dikaacode
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
