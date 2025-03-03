"use client";

import { useRouter } from "next/navigation";

export default function ViewAllArticles() {
  const router = useRouter();

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto mt-8">
      {/* Titre */}
      <h1
        className="relative text-preset-6 font-sans text-[var(--heading-color)] font-bold mb-6 text-left underline underline-offset-2 decoration-blue-500 cursor-pointer"
        onClick={() => router.push("/blog/")}
      >
        View all articles
      </h1>
    </section>
  );
}
