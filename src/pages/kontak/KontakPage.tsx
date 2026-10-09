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
        title="Hubungi gw"
        desc="Nggak ada CS, nggak ada admin, semua channel di bawah langsung ke gw. Paling cepat via Telegram."
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
                <p className="t-mono-label">Telegram</p>
                <h2 className="t-h2 text-fog">
                  Respons cepat via Telegram
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed text-mute">
                  Biasanya gw bales di hari yang sama, kecuali ketiduran.
                  Semua omongan project tercatat rapi di satu chat.
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
