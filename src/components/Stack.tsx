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
} from "lucide-react";
import Reveal from "./Reveal";

const stacks = [
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Braces },
  { name: "Node.js", icon: Hexagon },
  { name: "Kotlin", icon: Code2 },
  { name: "Android", icon: Smartphone },
  { name: "React", icon: Atom },
  { name: "Tailwind", icon: Waves },
  { name: "OpenAI API", icon: Bot },
  { name: "Telegram Bot", icon: Send },
  { name: "Docker", icon: Container },
  { name: "Git", icon: GitBranch },
  { name: "Linux", icon: Terminal },
];

const services = [
  {
    title: "AI Gateway dan Routing",
    desc: "Gateway multi-provider OpenAI-compatible dengan fallback, caching, dan kompresi.",
    tag: "DikaRoute",
  },
  {
    title: "Automation Bot",
    desc: "Bot Telegram dan CLI untuk pentesting, recon, dan workflow automation.",
    tag: "PentesterBot",
  },
  {
    title: "Android Apps",
    desc: "Aplikasi Android native (Kotlin), remote universal, tools, dan utility.",
    tag: "RemoteUniversal",
  },
  {
    title: "Web dan Portfolio",
    desc: "Website statis performa tinggi dengan React dan Vite, deploy ke GitHub Pages.",
    tag: "dikaofc.github.io",
  },
];

export default function Stack() {
  return (
    <section id="stack" className="bg-panel-2 relative overflow-hidden transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 section">
        <Reveal className="mb-8">
          <p className="t-mono-label mb-3">Tech stack</p>
          <h2 className="t-h2 text-fog">Yang gw pakai</h2>
        </Reveal>

        <div className="flex flex-wrap gap-2 mb-12">
          {stacks.map((s) => {
            const Icon = s.icon;
            return (
              <span
                key={s.name}
                className="inline-flex items-center gap-2 text-sm font-medium rounded-md px-3 py-2 bg-panel text-fog min-h-[44px]"
                style={{ boxShadow: "0px 0px 0px 1px var(--c-line)" }}
              >
                <Icon size={16} strokeWidth={2} aria-hidden="true" className="text-faint" />
                {s.name}
              </span>
            );
          })}
        </div>

        <Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.title} className="v-card p-6">
                <p className="t-mono-label mb-2">{s.tag}</p>
                <h3 className="t-h3 text-fog mb-2">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-mute">{s.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
