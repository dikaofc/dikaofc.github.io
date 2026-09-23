import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Cta = {
  label: string;
  href: string;
  external?: boolean;
  primary?: boolean;
};

type Props = {
  chip: string;
  title: ReactNode;
  desc?: string;
  ctas?: Cta[];
  children?: ReactNode;
};

export default function PageHero({ chip, title, desc, ctas, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-panel transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-2xl space-y-5">
          <Reveal>
            <p className="t-mono-label">{chip.replace(/^\/\/\s*/, "")}</p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="t-display text-fog">
              {title}
            </h1>
          </Reveal>

          {desc && (
            <Reveal delay={160}>
              <p className="t-lead max-w-xl">
                {desc}
              </p>
            </Reveal>
          )}

          {ctas && ctas.length > 0 && (
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3 pt-1">
                {ctas.map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    target={cta.external ? "_blank" : undefined}
                    rel={cta.external ? "noopener noreferrer" : undefined}
                    className={cta.primary ? "btn btn-primary" : "btn btn-secondary"}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </Reveal>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
