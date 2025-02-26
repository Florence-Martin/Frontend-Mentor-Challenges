"use client";

export default function Hero() {
  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto ">
      {/* Titre */}
      <h1 className="relative text-preset-2 font-sans font-bold mb-6 text-left text-[var(--heading-color)]">
        <span className="relative z-10">Hi, I&apos;m Paulina 👋</span>
        <span className="absolute left-0 bottom-1 w-64 h-[10px] bg-blue-500"></span>
      </h1>

      {/* Description */}
      <p className="text-preset-7 font-sans font-normal text-left mb-6">
        I&apos;m on a journey to become a front-end web developer. I love
        building little projects, trying out new coding techniques, and sharing
        what I learn along the way. When I&apos;m not at my desk, you&apos;ll
        find me reading, hiking through the mountains, or challenging myself on
        rock-climbing walls. <br /> <br /> I started this blog to document my
        progress, keep myself accountable, and hopefully inspire anyone else
        who&apos;s learning to code. Welcome to my corner of the internet, and
        thanks for stopping by!
      </p>
    </section>
  );
}
