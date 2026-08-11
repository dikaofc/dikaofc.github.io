const links = [
  {
    label: "GitHub",
    handle: "@dikaofc",
    url: "https://github.com/dikaofc",
    tone: "bg-ink text-paper",
    shadow: "nb-press",
  },
  {
    label: "Website",
    handle: "dikaofc.github.io",
    url: "https://dikaofc.github.io",
    tone: "bg-orange text-white",
    shadow: "nb-press-orange",
  },
  {
    label: "Telegram",
    handle: "@dikaofc",
    url: "https://t.me/dikaofc",
    tone: "bg-blue text-white",
    shadow: "nb-press-blue",
  },
  {
    label: "Email",
    handle: "dikaofc@proton.me",
    url: "mailto:dikaofc@proton.me",
    tone: "bg-pink text-white",
    shadow: "nb-press-pink",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b-[4px] border-ink bg-paper">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <div className="inline-block nb-border bg-ink text-paper px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
              // KONTAK
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-none mb-4">
              MAU <span className="bg-pink text-white nb-border-thick px-3 inline-block -rotate-2">NGOBROL?</span>
            </h2>
            <p className="font-body font-semibold text-base md:text-lg max-w-md">
              Open for collab, project custom, atau sekadar diskusi soal AI, security, atau Android.
              Pilih channel di bawah — semua real, langsung ke gw.
            </p>

            <a
              href="mailto:dika@obitoglory.tech"
              className="mt-6 inline-flex nb-border-thick bg-ink text-paper font-display text-base md:text-lg px-5 py-3 md:px-6 md:py-4 rounded-lg nb-shadow-lg nb-press"
            >
              KIRIM EMAIL →
            </a>
          </div>

          <div className="grid gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target={l.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`nb-border-thick ${l.tone} ${l.shadow} rounded-xl px-5 py-4 md:px-6 md:py-5 nb-shadow-lg nb-press flex items-center justify-between gap-4`}
              >
                <div>
                  <div className="font-mono text-xs md:text-sm font-bold uppercase opacity-80">{l.label}</div>
                  <div className="font-display text-xl md:text-2xl leading-tight">{l.handle}</div>
                </div>
                <div className="font-display text-2xl md:text-3xl shrink-0">↗</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
