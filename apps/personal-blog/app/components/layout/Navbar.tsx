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
  const { theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Empêche l'erreur d'hydration

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/newsletter", label: "Newsletter" },
  ];

  return (
    <nav className="relative bg-[var(--background)] text-[var(--foreground)] transition-colors px-2 mt-4 rounded-xl shadow-md w-[347px] h-[52px] md:w-[640px] mx-auto z-50">
      <div className="flex items-center justify-between py-2">
        {/* Profil */}
        <Image
          src="/assets/image-avatar.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-8"
        />

        {/* Desktop Nav & Mobile Trigger */}
        <div className="flex items-center gap-4">
          {/* Desktop Links */}
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

          {/* Burger Menu Button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 md:hidden p-2 rounded-8"
          >
            <Image
              src={
                isOpen ? "/assets/icon-menu-close.svg" : "/assets/icon-menu.svg"
              }
              alt="Menu"
              width={24}
              height={24}
              className={`transition ${theme === "dark" ? "invert" : ""}`}
            />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[var(--background)] border-t border-neutral-300 dark:border-neutral-700 transition-transform duration-300 ease-in-out origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        } md:hidden`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col gap-4 p-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)} // Fermer au clic
              className={`py-2 px-4 rounded-lg transition-colors ${
                pathname === href
                  ? "font-semibold bg-blue-500 text-white"
                  : "hover:bg-neutral-200 dark:hover:bg-neutral-800"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
