"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar({
  setMenuHeight,
}: {
  setMenuHeight: (height: number) => void;
}) {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  const [menuRef, setMenuRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
    if (menuRef) {
      setMenuHeight(isOpen ? menuRef.offsetHeight + 21 : 0);
    }
  }, [isOpen, menuRef, setMenuHeight]);

  if (!mounted) return null; // ⚠️ Empêche l'erreur d'hydration

  const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/newsletter", label: "Newsletter" },
  ];

  return (
    <nav className="bg-[var(--background)] text-[var(--foreground)] transition-colors px-2 mt-4 rounded-xl shadow-md w-[347px] h-[52px] md:w-[640px] mx-auto">
      <div className="flex items-center justify-between py-2">
        {/* Profil Image */}
        <Image
          src="/assets/image-avatar.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-8"
        />

        <div className=" inline-flex">
          {/* Desktop Links */}
          <div className="hidden items-center md:flex gap-6 font-sans">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:underline hover:underline-offset-4 hover:decoration-blue-500"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`relative transition-colors duration-300 md:hidden p-2 rounded-8 ${
              isOpen
                ? "bg-neutral-0 dark:bg-neutral-700 shadow-md"
                : "bg-transparent"
            }`}
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

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={setMenuRef}
          className={`md:hidden mt-4 rounded-12 shadow-lg p-4 transition-all ${
            theme === "dark"
              ? "bg-neutral-900 border border-neutral-700"
              : "bg-white border border-neutral-300"
          }`}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block py-3 px-4 rounded-8 transition-colors ${
                pathname.startsWith(href)
                  ? "text-preset-6 font-semibold border-b  border-neutral-200"
                  : "text-preset-7"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
