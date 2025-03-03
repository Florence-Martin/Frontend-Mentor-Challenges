"use client";

import React from "react";
import NewsletterForm from "../components/ui/NewsletterForm";

export default function AboutPage() {
  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto ">
      <div className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto px-10 py-8 transition-colors">
        <h1 className="relative text-preset-2 font-sans font-bold mb-6 text-left text-[var(--heading-color)]">
          <span className="relative z-10">Newslettre</span>
        </h1>
        <p className="text-preset-7 font-sans  text-left m">
          Want to stay updated on my latest articles, coding tutorials, and
          personal adventures? Sign up for my newsletter! It&apos;s a simple way
          to keep track of new posts and occasional coding tips I discover. Just
          drop your email in the sign-up box, and I&apos;ll send you updates
          whenever there&apos;s something new to share.
        </p>
        <br />
        <p className="text-preset-5 font-sans text-left">
          I&apos;d love to have you along for the ride and also hear about your
          own journey!
        </p>
      </div>

      <NewsletterForm />
    </section>
  );
}
