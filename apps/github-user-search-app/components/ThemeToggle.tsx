"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Évite les erreurs d'hydratation

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="theme-label">{theme === "dark" ? "LIGHT" : "DARK"}</span>
      {theme === "dark" ? (
        <img src="/icon-sun.svg" alt="Sun Icon" width={20} height={20} />
      ) : (
        <img src="/icon-moon.svg" alt="Moon Icon" width={20} height={20} />
      )}
    </button>
  );
}
