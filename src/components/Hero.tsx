import { useEffect, useMemo, useState } from "react";
import type { GhUser } from "../lib/github";
import Typewriter from "./Typewriter";

type Props = {
  user: GhUser | null;
  loading: boolean;
};

const CATBOX_AVATAR_URL = "https://files.catbox.moe/4qmqef.jpg";

export default function Hero({ user, loading }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bio =
    user?.bio ??
    "Developer indie yang bikin AI gateway, bot pentesting, dan aplikasi remote universal buat Android.";

  const typedPhrases = useMemo(
    () => [bio, "fullstack developer", "ai gateway dan automation", "dkv student", "bug hunter"],
    [bio],
  );

  return (
    <section id="home" className="relative overflow-hidden bg-panel transition-colors duration-200" style={{ borderBottom: "1px solid var(--c-line)" }}>
      <div className={`relative max-w-6xl mx-auto px-4 md:px-8 pt-16 pb-12 md:pt-28 md:pb-20 grid md:grid-cols-[1fr_auto] gap-10 md:gap-12 items-center transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="space-y-6">
          <p className="t-mono-label">Portfolio, Dikaofc</p>

          <h1 className="t-display text-fog">
            Halo, gw Dika
          </h1>

          <p className="t-lead max-w-2xl">
            {loading ? (
              "Memuat bio dari GitHub..."
            ) : (
              <>
                <span className="sr-only">{bio}</span>
                <span aria-hidden="true">
                  <Typewriter phrases={typedPhrases} />
                </span>
              </>
            )}
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a href="/proyek" className="btn btn-primary">
              Lihat proyek
            </a>
            <a
              href="https://github.com/dikaofc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Follow GitHub
            </a>
          </div>

          <dl className="grid grid-cols-3 gap-3 max-w-md pt-2">
            <div className="v-card px-4 py-3">
              <dt className="t-mono-label">Repos</dt>
              <dd className="font-display text-2xl leading-none mt-1 text-fog">{user?.public_repos ?? 4}</dd>
            </div>
            <div className="v-card px-4 py-3">
              <dt className="t-mono-label">Followers</dt>
              <dd className="font-display text-2xl leading-none mt-1 text-fog">{user?.followers ?? 0}</dd>
            </div>
            <div className="v-card px-4 py-3">
              <dt className="t-mono-label">Following</dt>
              <dd className="font-display text-2xl leading-none mt-1 text-fog">{user?.following ?? 0}</dd>
            </div>
          </dl>
        </div>

        <div className="justify-self-center md:justify-self-end">
          <div className="v-card p-3 md:p-4 max-w-[240px] md:max-w-[300px]">
            <img
              src={user?.avatar_url ?? CATBOX_AVATAR_URL}
              alt="dikaofc avatar"
              width={280}
              height={280}
              loading="eager"
              className="w-full aspect-square object-cover rounded-md bg-panel-2"
            />
            <div className="mt-3 flex items-center justify-between px-1 pb-1">
              <div>
                <div className="font-display text-lg leading-none text-fog">
                  @{user?.login ?? "dikaofc"}
                </div>
                <div className="font-mono text-xs text-mute mt-1">
                  {user?.location ?? "Indonesia"} · dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
