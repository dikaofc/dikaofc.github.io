import { useEffect, useState } from "react";

export const THEME_KEY = "dika-theme";
export const THEME_COLORS = { dark: "#0a0c11", light: "#ffffff" } as const;

/** visitor's choice — "system" follows the OS preference */
export type ThemeChoice = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

function systemPrefersLight(): boolean {
  return window.matchMedia("(prefers-color-scheme: light)").matches;
}

function getInitialChoice(): ThemeChoice {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return "system";
}

/**
 * Shared theme state: resolves system/light/dark, syncs across tabs,
 * applies the `data-theme` attribute + meta theme-color, and persists
 * the visitor's choice. Used by both the home page and the /layanan page.
 */
export function useTheme() {
  const [choice, setChoice] = useState<ThemeChoice>(getInitialChoice);
  const [systemPref, setSystemPref] = useState(systemPrefersLight);

  // keep the resolved theme in sync with the OS while in "system" mode
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => setSystemPref(systemPrefersLight());
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  // cross-tab sync: when another tab changes the theme, follow it
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== THEME_KEY) return;
      const next = e.newValue;
      if (next === "light" || next === "dark" || next === "system") {
        setChoice(next);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // live: while in "system" mode, re-resolve whenever the OS preference changes
  const theme: ResolvedTheme =
    choice === "system" ? (systemPref ? "light" : "dark") : choice;

  // apply + persist
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, choice);
    } catch {
      // ignore storage errors (private mode etc.)
    }
  }, [choice]);

  // cycle: system → light → dark → system
  const cycleTheme = () => {
    setChoice((c) => (c === "system" ? "light" : c === "light" ? "dark" : "system"));
  };

  return { theme, choice, cycleTheme };
}
