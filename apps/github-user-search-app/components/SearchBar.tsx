"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (username: string) => void;
}) {
  const [input, setInput] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  // ⚠️ Évite le rendu avant montage pour éviter l'erreur de Next.js
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
      setInput(""); // Réinitialise l'input après la recherche
    }
  };

  // 🚀 Solution anti-hydratation : attendre que le composant soit monté
  if (!isMounted) return null;

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      {/* Ajout d'un fallback si l'icône ne se charge pas immédiatement */}
      {isMounted && (
        <Image
          src="/icon-search.svg"
          alt="Search Icon"
          width={24}
          height={24}
          className="search-icon"
        />
      )}

      <input
        type="text"
        placeholder="Search GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
      />

      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
