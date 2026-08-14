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
import Reveal from "./Reveal";

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
    color: "bg-green text-ink",
    icon: Hexagon,
  },
  {
    name: "Kotlin",
    color: "bg-violet text-white",
    icon: Code2,
  },
  {
    name: "Android",
    color: "bg-green text-ink",
    icon: Smartphone,
  },
  {
    name: "React",
    color: "bg-neon text-ink",
    icon: Atom,
  },
  {
    name: "Tailwind",
    color: "bg-neon text-ink",
    icon: Waves,
  },
  {
    name: "OpenAI API",
    color: "bg-card text-fog",
    icon: Bot,
  },
  {
    name: "Telegram Bot",
    color: "bg-card text-fog",
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
    color: "bg-paper text-ink",
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
    tone: "bg-neon text-ink",
  },
];

export default function Stack() {
  return (
    <section id="stack" className="border-b-4 border-fog bg-panel relative overflow-hidden transition-colors duration-300">
      {/* Animated blob */}
      <div
        className="absolute top-20 right-10 w-96 h-96 bg-orange opacity-10 rounded-full blur-3xl pointer-events-none"
        aria-hidden
        style={{ animation: 'float 6s ease-in-out infinite' }}
      />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <Reveal className="mb-10 md:mb-14">
          <div className="inline-block nb-border bg-paper text-ink px-3 py-1 rounded-md font-mono text-xs md:text-sm font-bold mb-3 nb-shadow-sm">
            // TECH STACK
          </div>

          <h2 className="font-display text-5xl md:text-7xl leading-none text-fog pointer-fine:hover:scale-105 transition-transform">
            YANG GW{" "}
            <span className="inline-block bg-blue text-white nb-border-thick px-3 rotate-1 hover:rotate-0 transition-transform">
              PAKAI
            </span>
          </h2>
        </Reveal>

        {/* Stack chips with stagger animation */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-16">
          {stacks.map((s, idx) => {
            const Icon = s.icon;

            return (
              <div
                key={s.name}
                className={`nb-border-thick ${s.color} rounded-lg px-4 py-3 nb-shadow-sm nb-press flex items-center gap-2 font-display text-sm md:text-base cursor-default pointer-fine:hover:scale-110 active:scale-95 transition-all duration-200`}
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
        <Reveal>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="nb-border-thick bg-card rounded-2xl p-5 md:p-7 nb-shadow-lg nb-press relative overflow-hidden group h-full pointer-fine:hover:shadow-[var(--c-shadow-offset-hover)_var(--c-shadow-offset-hover)_0_var(--c-shadow)] pointer-fine:hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              style={{
                animation: `slideInUp 0.6s ease-out ${i * 100}ms both`,
              }}
            >
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 nb-border-thick ${s.tone} rounded-full pointer-fine:group-hover:scale-125 transition-transform`}
                aria-hidden="true"
              />

              <div className="font-mono text-xs font-bold nb-border bg-paper text-ink inline-block px-2 py-1 rounded mb-3 relative group-hover:rotate-12 transition-transform">
                <Sparkles size={12} className="inline mr-1" />
                0{i + 1}
              </div>

              <h3 className="font-display text-2xl md:text-3xl mb-2 text-fog relative group-hover:translate-x-1 transition-transform">
                {s.title}
              </h3>

              <p className="font-body font-semibold text-sm md:text-base mb-4 leading-snug text-mute group-hover:text-fog transition-colors">
                {s.desc}
              </p>

              <span
                className={`inline-block nb-border ${s.tone} font-mono text-xs font-bold px-2 py-1 rounded pointer-fine:group-hover:scale-110 transition-transform`}
              >
                {s.tag}
              </span>
            </div>
          ))}
        </div>
        </Reveal>
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
