"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import SocialIcons from "../components/ui/SocialIcons";

export default function AboutPage() {
  const [menuHeight, setMenuHeight] = useState(0);

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto ">
      <Navbar setMenuHeight={setMenuHeight} />
      <div
        className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto px-10 py-8 transition-colors"
        style={{ marginTop: `${menuHeight}px` }}
      >
        <h1 className="relative text-preset-2 font-sans font-bold mb-6 text-left text-[var(--heading-color)]">
          <span className="relative z-10">About me</span>
          <span className="absolute left-0 bottom-1 w-40 h-[10px] bg-blue-500"></span>
        </h1>
        <p className="text-preset-7 font-sans font-normal text-left">
          Hi, I&apos;m Paulina! Ever since I can remember, I&apos;ve had a
          passion for creativity and problem-solving. That&apos;s what led me to
          the world of front-end web development. There&apos;s something magical
          about seeing an idea come to life in the browser—whether it&apos;s a
          simple layout experiment or a complex interface for a bigger project.
          <br /> <br />
          When I&apos;m not coding, I love getting lost in a good book. My taste
          is pretty eclectic: I&apos;ll happily read everything from fantasy
          novels to biographies of tech pioneers. Reading helps me unwind and
          often sparks new ideas for my coding projects.
          <br /> <br /> Another big passion of mine is the great outdoors.
          Hiking allows me to disconnect from the digital world and reconnect
          with nature. I love challenging hikes with rewarding views at the top.
          And if I&apos;m not on the trails, you might catch me rock climbing.
          The combination of mental focus and physical endurance is a perfect
          parallel to tackling tough coding challenges!
          <br /> <br /> Some of my favorite books:
        </p>
        <br /> <br />
        <ul className="list-disc list-inside">
          <li>
            <strong>“The Pragmatic Programmer” </strong>by Andrew Hunt and David
            Thomas (for helpful insights into software development)
          </li>
          <li>
            <strong>“Ready Player One”</strong> by Ernest Cline (for some
            futuristic escapism)
          </li>
          <li>
            <strong>“The Hobbit”</strong> by J.R.R. Tolkien (for a bit of
            fantasy fun)
          </li>
          <li>“Educated” by Tara Westover (for incredible inspiration)</li>
        </ul>
        <br />
        <p className="text-preset-7 font-sans font-normal text-left">
          I absolutely love my workspace as a place that inspires me to do my
          best work, so I thought I&apos;d share it with you:
        </p>
        <br />
        <Image
          src="/assets/image-workspace-small.jpg"
          alt="A view of my workspace"
          layout="responsive"
          width={500}
          height={300}
          className="rounded-lg"
        />
        <br />
        <p className="text-preset-7 font-sans font-normal text-left">
          I hope this blog not only documents my growth but also helps others
          see that coding can be for everyone. Thanks for joining me on this
          journey!
        </p>
        <br />
        <p className="text-preset-4 font-sans text-left">Follow me</p>{" "}
        <SocialIcons />
      </div>
    </section>
  );
}
