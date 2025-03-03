import { Article } from "../types/articles";

export async function fetchArticles(): Promise<Article[]> {
  const res = await fetch("/articles/article.json", {
    cache: "no-store", // ou "force-cache" selon tes besoins
  });

  if (!res.ok) {
    throw new Error("Erreur lors du chargement des articles");
  }

  return res.json();
}
