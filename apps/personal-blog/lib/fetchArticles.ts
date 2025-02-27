export async function fetchArticles() {
  const res = await fetch("/articles/article.json");
  if (!res.ok) {
    throw new Error("Erreur lors du chargement des articles");
  }
  return res.json();
}
