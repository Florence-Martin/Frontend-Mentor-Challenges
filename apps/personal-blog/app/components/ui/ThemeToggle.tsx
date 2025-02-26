"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ⚠️ Empêche l'erreur d'hydration

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 bg-[var(--background)] text-[var(--foreground)] ml-5 rounded-8 border-2 transition-colors ${
        theme === "dark" ? "border-neutral-700" : "border-neutral-200"
      }`}
    >
      {theme === "dark" ? (
        <Image
          src="/assets/icon-sun.svg"
          alt="Light Mode"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src="/assets/icon-moon.svg"
          alt="Dark Mode"
          width={20}
          height={20}
        />
      )}
    </button>
  );
}
