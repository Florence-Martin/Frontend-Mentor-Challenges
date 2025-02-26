"use client";

import React, { useState } from "react";
import SocialIcons from "./components/ui/SocialIcons";
import Hero from "./components/section/Hero";
import LatestArticles from "./components/section/LatestArticles";
import ViewAllArticles from "./components/section/ViewAllArticles";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  const [menuHeight, setMenuHeight] = useState(0);

  return (
    <>
      <Navbar setMenuHeight={setMenuHeight} />
      <div
        className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto px-10 py-8 transition-colors"
        style={{ marginTop: `${menuHeight}px` }}
      >
        <Hero />
        <SocialIcons />
        <div className="border-b border-neutral-200 my-8"></div>
        <LatestArticles />
        <ViewAllArticles />
        <div className="border-b border-neutral-200 mt-8"></div>
      </div>
    </>
  );
}
