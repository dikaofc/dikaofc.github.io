import {
  Code2,
  Braces,
  Hexagon,
  Smartphone,
  Atom,
  Waves,
  Bot,
  Send,
  Container,
  GitBranch,
  Terminal,
  Sparkles,
} from "lucide-react";

const stacks = [
  {
    name: "TypeScript",
    color: "bg-blue text-white",
    icon: Code2,
  },
  {
    name: "JavaScript",
    color: "bg-paper text-ink",
    icon: Braces,
  },
  {
    name: "Node.js",
    color: "bg-green text-white",
    icon: Hexagon,
  },
  {
    name: "Kotlin",
    color: "bg-violet text-white",
    icon: Code2,
  },
  {
    name: "Android",
    color: "bg-green text-white",
    icon: Smartphone,
  },
  {
    name: "React",
    color: "bg-[#d4ecff] text-ink",
    icon: Atom,
  },
  {
    name: "Tailwind",
    color: "bg-[#d4ecff] text-ink",
    icon: Waves,
  },
  {
    name: "OpenAI API",
    color: "bg-cream text-ink",
    icon: Bot,
  },
  {
    name: "Telegram Bot",
    color: "bg-[#d4ecff] text-ink",
    icon: Send,
  },
  {
    name: "Docker",
    color: "bg-blue text-white",
    icon: Container,
  },
  {
    name: "Git",
    color: "bg-orange text-white",
    icon: GitBranch,
  },
  {
    name: "Linux",
    color: "bg-ink text-paper",
    icon: Terminal,
  },
];

const services = [
  {
    title: "AI Gateway & Routing",
    desc: "Bikin gateway multi-provider OpenAI-compatible dengan fallback, caching, dan kompresi.",
    tag: "DikaRoute",
    tone: "bg-orange text-white",
  },
  {
    title: "Automation Bot",
    desc: "Bot Telegram/CLI untuk pentesting, recon, dan workflow automation.",
    tag: "PentesterBot",
    tone: "bg-pink text-white",
  },
  {
    title: "Android Apps",
    desc: "Aplikasi Android native (Kotlin) — remote universal, tools, dan utility.",
    tag: "RemoteUniversal",
    tone: "bg-violet text-white",
  },
  {
    title: "Web & Portfolio",
    desc: "Website statis performa tinggi dengan React/Vite, deploy ke GitHub Pages.",
    tag: "dikaofc.github.io",
    tone: "bg-blue text-white",
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-b-[4px] border-ink bg-cream relative overflow-hidden">
      {/* Animated blob */}
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-orange opacity-10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
        style={{ animation: 'float 6s ease-in-out infinite' }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-14 md:py-24 relative">
        <div className="mb-8 md:mb-12">
          <div className="inline-block nb-border bg-ink text-paper px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
            // TECH STACK
          </div>

          <h2 className="font-display text-5xl md:text-7xl leading-none hover:scale-105 transition-transform">
            YANG GW{" "}
            <span className="inline-block bg-blue text-white nb-border-thick px-3 rotate-1 hover:rotate-0 transition-transform">
              PAKAI
            </span>
          </h2>
        </div>

        {/* Stack chips with stagger animation */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-14">
          {stacks.map((s, idx) => {
            const Icon = s.icon;

            return (
              <div
                key={s.name}
                className={`nb-border-thick ${s.color} rounded-lg px-4 py-3 nb-shadow-sm nb-press flex items-center gap-2 font-display text-sm md:text-base cursor-default hover:scale-110 transition-all duration-200`}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 50}ms both`,
                }}
              >
                <Icon
                  size={20}
                  strokeWidth={2.5}
                  aria-hidden="true"
                  className="group-hover:rotate-12 transition-transform"
                />

                <span>{s.name}</span>
              </div>
            );
          })}
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="nb-border-thick bg-paper rounded-2xl p-5 md:p-7 nb-shadow-lg nb-press relative overflow-hidden group hover:shadow-[10px_10px_0_#0a0a0a] hover:scale-105 transition-all duration-300"
              style={{
                animation: `slideInUp 0.6s ease-out ${i * 100}ms both`,
              }}
            >
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 nb-border-thick ${s.tone} rounded-full group-hover:scale-125 transition-transform`}
                aria-hidden="true"
              />

              <div className="font-mono text-xs font-bold nb-border bg-ink text-paper inline-block px-2 py-1 rounded mb-3 relative group-hover:rotate-12 transition-transform">
                <Sparkles size={12} className="inline mr-1" />
                0{i + 1}
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-2 relative group-hover:translate-x-1 transition-transform">
                {s.title}
              </h3>

              <p className="font-body font-semibold text-sm md:text-base mb-4 leading-snug group-hover:opacity-100 opacity-90 transition-opacity">
                {s.desc}
              </p>

              <span
                className={`inline-block nb-border ${s.tone} font-mono text-xs font-bold px-2 py-1 rounded group-hover:scale-110 transition-transform`}
              >
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
