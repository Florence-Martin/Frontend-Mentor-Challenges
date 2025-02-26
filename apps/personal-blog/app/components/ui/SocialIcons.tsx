"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://twitter.com/", src: "/assets/logo-x.svg", alt: "X" },
  {
    href: "https://github.com/",
    src: "/assets/logo-github.svg",
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/",
    src: "/assets/logo-linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://www.frontendmentor.io/",
    src: "/assets/logo-frontend-mentor.svg",
    alt: "Frontend Mentor",
  },
];

export default function SocialIcons() {
  const { theme } = useTheme();

  return (
    <section className="flex flex-row gap-3 justify-start">
      {socialLinks.map(({ href, src, alt }) => (
        <Link
          key={alt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-10 shadow-md transition hover:scale-105 "
        >
          <Image
            src={src}
            alt={alt}
            width={16}
            height={16}
            className={`transition ${theme === "dark" ? "invert" : ""}`}
          />
        </Link>
      ))}
    </section>
  );
}
