"use client";

import React, { useEffect, useState } from "react";
import ArticleCard from "../components/section/ArticleCard";
import { Article } from "../../types/articles";
import { fetchArticles } from "../../lib/fetchArticles";

export default function BlogPage() {
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
      <div className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto px-10 py-8 transition-colors">
        <h1 className="relative text-preset-2 font-sans font-bold mb-6 text-left text-[var(--heading-color)]">
          <span className="relative z-10">Latest Articles</span>
          <span className="absolute bottom-1 ml-4 w-10 h-[3px] bg-blue-500"></span>
        </h1>
        <p className="text-preset-7 font-sans mb-5 ">
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>

        <ul className="space-y-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              showDescription={true}
              showContentPreview={false}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
