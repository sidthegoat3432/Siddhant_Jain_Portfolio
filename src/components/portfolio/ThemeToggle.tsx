import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const THEME_KEY = "siddhant-theme";

function getInitialDark(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored) return stored === "dark";
  } catch {
    /* localStorage unavailable — fall through to dark */
  }
  // Dark is the default; only an explicit "light" choice opts out.
  return true;
}

export function ThemeToggle() {
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      window.localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {
      /* localStorage unavailable — theme still applies for this session */
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((v) => !v)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-ink transition-colors hover:border-brand/50 hover:text-brand"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
