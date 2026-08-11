import type { GhUser } from "../lib/github";

type Props = { user: GhUser | null; loading: boolean };

export default function Hero({ user, loading }: Props) {
  return (
    <section id="home" className="relative overflow-hidden border-b-[4px] border-ink">
      {/* dotted background */}
      <div className="absolute inset-0 dots-bg opacity-30 pointer-events-none" />
      {/* orange blob card */}
      <div className="absolute -top-12 -right-12 md:-right-24 w-56 h-56 md:w-80 md:h-80 bg-orange nb-border-thick rounded-full nb-shadow-lg float pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24 grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 nb-border bg-ink text-paper px-3 py-1.5 rounded-md font-mono text-xs md:text-sm font-bold nb-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green blink" />
            AVAILABLE FOR COLLAB
          </div>

          <h1 className="font-display text-[13vw] md:text-8xl lg:text-9xl leading-[0.9]">
            HALO,<br />
            GW <span className="inline-block bg-ink text-paper px-3 md:px-5 -rotate-2">DIKA</span>
          </h1>

          <p className="text-lg md:text-2xl font-body font-semibold max-w-2xl leading-snug">
            {loading
              ? "Memuat bio dari GitHub…"
              : user?.bio ?? "Developer indie yang bikin AI gateway, bot pentesting, dan aplikasi remote universal buat Android."}
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
            <a
              href="#repos"
              className="nb-border-thick bg-paper text-ink font-display text-base md:text-lg px-5 py-3 md:px-6 md:py-4 rounded-lg nb-shadow-lg nb-press"
            >
              LIHAT PROYEK →
            </a>
            <a
              href="https://github.com/dikaofc"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-border-thick bg-orange text-ink font-display text-base md:text-lg px-5 py-3 md:px-6 md:py-4 rounded-lg nb-shadow-lg nb-press"
            >
              FOLLOW GITHUB ★
            </a>
          </div>

          {/* Stats mini */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 pt-4 max-w-md">
            <StatBox label="Repos" value={user?.public_repos ?? 4} tone="bg-cream" />
            <StatBox label="Followers" value={user?.followers ?? 0} tone="bg-blue text-white" />
            <StatBox label="Following" value={user?.following ?? 0} tone="bg-pink text-white" />
          </div>
        </div>

        {/* Avatar card */}
        <div className="relative justify-self-center md:justify-self-end">
          <div className="nb-border-thick bg-cream rounded-2xl p-3 md:p-4 nb-shadow-lg rotate-2 max-w-[240px] md:max-w-[300px]">
            <img
              src={user?.avatar_url ?? "https://github.com/dikaofc.png"}
              alt="dikaofc avatar"
              width={280}
              height={280}
              loading="eager"
              className="w-full aspect-square object-cover nb-border-thick rounded-xl bg-paper"
            />
            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="font-display text-lg md:text-xl leading-none">@{user?.login ?? "dikaofc"}</div>
                <div className="font-mono text-[10px] md:text-xs opacity-70 mt-1">{user?.location ?? "Indonesia"} · dev</div>
              </div>
              <span className="nb-border bg-orange text-ink text-xs font-mono font-bold px-2 py-1 rounded">v1.0</span>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 nb-border-thick bg-pink text-white rounded-lg px-3 py-2 font-display text-sm md:text-base nb-shadow-sm -rotate-6">
            REAL DATA ✓
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="stripe border-t-[4px] border-ink text-paper py-2 overflow-hidden">
        <div className="marquee flex whitespace-nowrap font-display text-lg md:text-2xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-6 pr-6" aria-hidden={k === 1}>
              {["AI GATEWAY", "★", "PENTEST BOT", "★", "ANDROID REMOTE", "★", "OPEN SOURCE", "★", "INDIE HACKER", "★", "MADE IN ID", "★"].map((t, i) => (
                <span key={i} className="bg-paper text-ink px-3 py-0.5 nb-border rounded">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBox({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className={`nb-border-thick rounded-lg p-2 md:p-3 nb-shadow-sm ${tone}`}>
      <div className="font-display text-2xl md:text-3xl leading-none">{value}</div>
      <div className="font-mono text-[10px] md:text-xs uppercase font-bold mt-1 opacity-80">{label}</div>
    </div>
  );
}
