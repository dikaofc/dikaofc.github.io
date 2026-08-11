export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="nb-border-thick bg-paper text-ink w-10 h-10 rounded-md grid place-items-center font-display text-xl">D</span>
            <span className="font-display text-2xl">dikacode</span>
          </div>
          <p className="font-body font-medium text-sm opacity-80 max-w-xs">
            developer muda dari Indonesia. fokus di ai, security automation, bug hunter, dan lain nya
          </p>
        </div>

        <div>
          <div className="font-display text-lg mb-3">NAVIGASI</div>
          <ul className="grid gap-2 font-body font-semibold">
            <li><a href="#home" className="hover:text-orange">→ Home</a></li>
            <li><a href="#repos" className="hover:text-orange">→ Repositories</a></li>
            <li><a href="#stack" className="hover:text-orange">→ Tech Stack</a></li>
            <li><a href="#contact" className="hover:text-orange">→ Kontak</a></li>
          </ul>
        </div>

        <div>
          <div className="font-display text-lg mb-3">INFO</div>
          <ul className="grid gap-2 font-mono text-sm">
            <li>SMK: <span className="text-orange">BHINNEKA</span></li>
            <li>CLASS: <span className="text-orange">XI</span></li>
            <li>JURUSAN: <span className="text-orange">DKV</span></li>
            <li>HOBY: <span className="text-orange">TIDUR</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t-[3px] border-paper/20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm font-mono">
          <div>© {new Date().getFullYear()} dikaofc — DKV STUDENT</div>
          <div className="opacity-70">dibuat dengan cinta dan kasih sayang</div>
        </div>
      </div>
    </footer>
  );
}
