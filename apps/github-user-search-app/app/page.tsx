"use client";

import SearchBar from "components/SearchBar";
import ThemeToggle from "components/ThemeToggle";
import UserCard from "components/UserCard";
import { useState } from "react";
import { fetchGitHubUser } from "services/githubApi";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (username: string) => {
    setError(null);
    setLoading(true);
    const userData = await fetchGitHubUser(username);
    console.log("User data:", userData);

    if (userData) {
      setUser(userData);
      setError(null);
    } else {
      setUser(null);
      setError("No results found");
    }

    setLoading(false);
  };

  return (
    <main>
      {/* Header */}
      <section className="hero">
        <h1>devfinder</h1>
        <ThemeToggle />
      </section>

      {/* Search Bar */}
      <div className="tooltip">
        <SearchBar onSearch={handleSearch} />
        <span className="tooltip-text">Try typing "octocat" 👀</span>
      </div>

      {/* Gestion des états */}
      {loading && <p className="loading">Searching...</p>}
      {error && <p className="error">{error}</p>}

      {/* Affichage de la carte utilisateur SEULEMENT si `user` est défini */}
      {user && <UserCard {...user} />}
    </main>
  );
}
