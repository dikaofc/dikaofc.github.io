import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  /** ms per character while typing */
  typeSpeed?: number;
  /** ms per character while deleting */
  deleteSpeed?: number;
  /** ms to hold the completed phrase before deleting */
  holdDelay?: number;
};

/**
 * Terminal-style typewriter: types each phrase char-by-char, holds,
 * deletes, then moves to the next phrase in an endless loop.
 * - resets from the top when phrases[0] changes (e.g. bio loads from API)
 * - renders the full first phrase instantly when prefers-reduced-motion
 */
export default function Typewriter({
  phrases,
  typeSpeed = 45,
  deleteSpeed = 22,
  holdDelay = 1700,
}: Props) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("typing");
  const [idx, setIdx] = useState(0);

  // Restart from the top when the primary phrase (bio) changes
  const bioKey = phrases[0] ?? "";
  useEffect(() => {
    setText("");
    setIdx(0);
    setPhase("typing");
  }, [bioKey]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || phrases.length === 0) {
      setText(phrases[0] ?? "");
      return;
    }

    let alive = true;
    let timer: ReturnType<typeof setTimeout>;
    const full = phrases[idx] ?? "";

    if (phase === "typing") {
      if (text.length < full.length) {
        timer = setTimeout(
          () => alive && setText(full.slice(0, text.length + 1)),
          typeSpeed,
        );
      } else {
        timer = setTimeout(() => alive && setPhase("holding"), holdDelay);
      }
    } else if (phase === "holding") {
      timer = setTimeout(() => alive && setPhase("deleting"), holdDelay);
    } else {
      if (text.length > 0) {
        timer = setTimeout(
          () => alive && setText(full.slice(0, text.length - 1)),
          deleteSpeed,
        );
      } else {
        timer = setTimeout(() => {
          if (!alive) return;
          setIdx((i) => (i + 1) % phrases.length);
          setPhase("typing");
        }, 350);
      }
    }

    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, [text, phase, idx, phrases, typeSpeed, deleteSpeed, holdDelay]);

  return <>{text}</>;
}
