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
        chip="// KONTAK DIKACODE"
        title={
          <>
            HUBUNGI{" "}
            <span className="inline-block text-neon text-glow-cyan">KAMI</span>
          </>
        }
        desc="Open untuk collab, project custom, atau sekadar diskusi. Pilih channel yang paling cocok — respons cepat."
        ctas={[
          { label: "CHAT DI TELEGRAM", href: SITE.telegram, external: true, primary: true },
          { label: "Lihat Layanan", href: "/layanan" },
        ]}
      />

      {/* Reuse the existing contact section */}
      <Contact />

      {/* Telegram highlight */}
      <section className="relative overflow-hidden bg-panel-2 transition-colors duration-300">
        <div className="absolute inset-0 dots-bg opacity-25 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <div className="cta-panel relative mx-auto max-w-2xl rounded-3xl border border-neon/30 bg-card/70 backdrop-blur-xl px-6 py-10 md:py-14">
              <div className="relative space-y-5">
                <div className="font-mono text-[11px] md:text-xs font-bold text-neon border border-neon/40 bg-neon/10 rounded-md px-3 py-1.5 inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon blink" aria-hidden />
                  COMMAND_PANEL // ONLINE
                </div>
                <h2 className="font-display text-2xl md:text-4xl text-fog">
                  RESPON CEPAT VIA{" "}
                  <span className="text-neon text-glow-cyan">TELEGRAM</span>
                </h2>
                <p className="font-body font-medium text-sm md:text-base text-mute">
                  Balas pertanyaan, diskusi kebutuhan, sampai detail project — semua bisa lewat
                  satu chat.
                </p>
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 nb-border-thick bg-neon text-ink font-display text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-lg nb-shadow-lg nb-press pointer-fine:hover:scale-110 active:scale-95 transition-transform"
                >
                  <Send size={18} strokeWidth={2.5} aria-hidden="true" />
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
