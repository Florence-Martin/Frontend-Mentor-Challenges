"use client";

import React from "react";
import SocialIcons from "./components/ui/SocialIcons";
import Hero from "./components/section/Hero";
import LatestArticles from "./components/section/LatestArticles";
import ViewAllArticles from "./components/section/ViewAllArticles";

export default function Home() {
  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto ">
      <div className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto px-10 py-8 transition-colors">
        <Hero />
        <SocialIcons />
        <div className="border-b border-neutral-200 my-8"></div>
        <LatestArticles />
        <ViewAllArticles />
        <div className="border-b border-neutral-200 mt-8"></div>
      </div>
    </section>
  );
}
