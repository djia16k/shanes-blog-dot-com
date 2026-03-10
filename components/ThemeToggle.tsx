"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-full border border-[var(--border)]" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-lg transition-all duration-200 hover:border-[var(--accent)] hover:scale-110 cursor-pointer bg-[var(--surface)]"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
