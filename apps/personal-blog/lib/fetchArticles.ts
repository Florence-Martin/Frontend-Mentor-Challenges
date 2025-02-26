export async function fetchArticles() {
  const response = await fetch("/articles/article.json");
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  return response.json();
}
