"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Empêche l'hydration error

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/newsletter", label: "Newsletter" },
  ];

  return (
    <nav className="relative bg-[var(--background)] text-[var(--foreground)] transition-colors px-2 mt-4 rounded-xl shadow-md w-[347px] h-[52px] md:w-[640px] mx-auto z-50">
      <div className="flex items-center justify-between py-2">
        {/* Avatar */}
        <Image
          src="/assets/image-avatar.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-8"
        />

        {/* Desktop Links + Menu + ThemeToggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 font-sans">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative pb-1 ${
                  pathname === href
                    ? "font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-500"
                    : "hover:underline hover:underline-offset-4 hover:decoration-blue-500"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Menu Burger Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-10 h-10 flex items-center justify-center rounded-8 transition-colors
              ${isOpen ? "shadow-md" : ""}
              ${isOpen ? (theme === "dark" ? "bg-neutral-0" : "bg-neutral-900") : ""}
              md:hidden
            `}
          >
            <Image
              src={
                isOpen ? "/assets/icon-menu-close.svg" : "/assets/icon-menu.svg"
              }
              alt="Menu"
              width={24}
              height={24}
              className={`transition ${
                isOpen
                  ? theme === "dark"
                    ? "invert"
                    : "" // croix : si dark theme => icône inversée
                  : theme === "dark"
                    ? "invert"
                    : ""
              }`}
            />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Menu Mobile qui pousse la page */}
      {isOpen && (
        <div className="mt-2 bg-[var(--background)] border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700 px-4">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-4 px-6 transition-colors ${
                    pathname === href
                      ? "font-bold text-[var(--foreground)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
