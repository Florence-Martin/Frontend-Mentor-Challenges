"use client";

import { Heart } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://twitter.com",
    src: "/assets/logo-x.svg",
    alt: "Twitter (X)",
  },
  {
    href: "https://github.com",
    src: "/assets/logo-github.svg",
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com",
    src: "/assets/logo-linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "/rss.xml",
    src: "/assets/logo-frontend-mentor.svg",
    alt: "Frontend-Mentor",
  },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="w-[317px] h-[38px] md:w-[640px] flex flex-row items-center justify-between mx-auto mb-4">
      <p className="text-preset-8 text-[var(--foreground)] flex items-center gap-2">
        Made with <Heart className="text-red-500 fill-current" /> and{" "}
        <span className="text-2xl">☕</span>
      </p>
      <div className="flex items-center gap-[12px] text-[var(--foreground)]  ">
        {socialLinks.map(({ href, src, alt }) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <Image
              src={src}
              alt={alt}
              width={16}
              height={16}
              className={`transition ${theme === "dark" ? "invert" : ""}`}
            />
          </a>
        ))}
      </div>
    </footer>
  );
}
