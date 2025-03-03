import { Article } from "../types/articles";

export async function fetchArticles(): Promise<Article[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/articles/article.json`, {
    cache: "no-store", // ou "force-cache" selon tes besoins
  });

  if (!res.ok) {
    throw new Error("Erreur lors du chargement des articles");
  }

  return res.json();
}
