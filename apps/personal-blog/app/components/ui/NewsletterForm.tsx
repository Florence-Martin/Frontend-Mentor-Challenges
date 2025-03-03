"use client";

import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("Thanks for subscribing!");
      setEmail("");
    }
  };

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-col px-10 pb-8 transition-colors gap-4 bg-[var(--background)] text-[var(--foreground)]"
    >
      <label
        htmlFor="email"
        className="text-preset-6 font-sans font-semibold text-left"
      >
        Email Address
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email@example.com"
        className="w-full px-4 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md bg-transparent text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <PrimaryButton type="submit">Stay updated</PrimaryButton>
      {message && (
        <p className="text-sm mt-2 text-[var(--foreground)]">{message}</p>
      )}
      <p className="text-preset-8 text-left">
        Unsubscribe anytime. No spam, I promise{" "}
        <span role="img" aria-label="smile">
          🙂
        </span>
      </p>
    </form>
  );
}
