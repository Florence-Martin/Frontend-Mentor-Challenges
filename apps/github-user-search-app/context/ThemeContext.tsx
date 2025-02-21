"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Evite les problèmes d'hydratation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
