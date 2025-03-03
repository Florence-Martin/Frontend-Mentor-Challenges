"use client";

import { useEffect, useState } from "react";
import { fetchArticles } from "../../../lib/fetchArticles";
import { Article } from "../../../types/articles";
import ArticleCard from "./ArticleCard";

export default function LatestArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticles() {
      try {
        const data = await fetchArticles();
        // Trier les articles par date décroissante
        const sortedArticles = data.sort(
          (a: Article, b: Article) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
        );
        setArticles(sortedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    }
    getArticles();
  }, []);

  if (loading) return <p>Loading articles...</p>;

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto ">
      {/* Titre */}
      <h1 className="relative text-preset-2 font-sans font-bold mb-6 text-left text-[var(--heading-color)]">
        <span className="relative z-10">Latest Articles</span>
        <span className="absolute bottom-1 ml-4 w-10 h-[3px] bg-blue-500"></span>
      </h1>

      <ul className="space-y-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </ul>
    </section>
  );
}
