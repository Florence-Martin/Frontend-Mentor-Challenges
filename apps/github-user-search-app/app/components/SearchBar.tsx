"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SearchBar({
  onSearch,
}: {
  onSearch: (username: string) => void;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // ⚠️ Évite le rendu avant montage pour éviter l'erreur de Next.js
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      if (input.trim().toLowerCase() !== "octocat") {
        setError(true);
      } else {
        setError(false);
        onSearch(input.trim());
        setInput("");
      }
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
        onChange={(e) => {
          setInput(e.target.value);
          setError(false); // Supprime l'erreur lors d'une nouvelle saisie
        }}
        className="search-input"
      />

      {/* Affichage de "No results" en rouge si la recherche est invalide */}
      {error && <span className="error-message">No results</span>}

      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
