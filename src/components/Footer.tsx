export default function Footer() {
  return (
    <footer className="bg-panel text-fog foot-glow transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="nb-border-thick bg-paper text-ink w-10 h-10 rounded-md grid place-items-center font-display text-xl">D</span>
            <span className="font-display text-2xl">dikacode</span>
          </div>
          <p className="font-body font-medium text-sm text-mute max-w-xs">
            developer muda dari Indonesia. fokus di ai, security automation, bug hunter, dan lain nya
          </p>
        </div>

        <div>
          <div className="font-display text-lg mb-3">NAVIGASI</div>
          <ul className="grid gap-2 font-body font-semibold text-fog">
            <li><a href="#home" className="hover:text-paper transition-colors">→ Home</a></li>
            <li><a href="#repos" className="hover:text-paper transition-colors">→ Repositories</a></li>
            <li><a href="#stack" className="hover:text-paper transition-colors">→ Tech Stack</a></li>
            <li><a href="#contact" className="hover:text-paper transition-colors">→ Kontak</a></li>
            <li>
              <a href="/portofolio.html" className="hover:text-paper transition-colors">
                → 3D Version <span className="font-mono text-xs text-neon">✦</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-display text-lg mb-3">INFO</div>
          <ul className="grid gap-2 font-mono text-sm text-fog">
            <li className="flex items-center gap-2">
              <img
                src="/LOGO-SMK-BHINNEKA-remove-bg-io.png"
                alt="Logo SMK Bhinneka"
                width={28}
                height={28}
                loading="lazy"
                className="w-7 h-7 object-contain"
              />
              <span>
                SMK: <span className="text-orange">BHINNEKA</span>
              </span>
            </li>
            <li>CLASS: <span className="text-orange">XI</span></li>
            <li>JURUSAN: <span className="text-orange">DKV</span></li>
            <li>HOBY: <span className="text-orange">TIDUR</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t-4 border-line">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm font-mono text-mute">
          <div>© {new Date().getFullYear()} dikaofc — DKV STUDENT</div>
          <div>dibuat dengan cinta dan kasih sayang</div>
        </div>
      </div>
    </footer>
  );
}
