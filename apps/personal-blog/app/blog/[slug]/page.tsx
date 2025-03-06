"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Article } from "../../../types/articles";
import { fetchArticles } from "../../../lib/fetchArticles";
import ReactMarkdown from "react-markdown";
import PageWrapper from "../../components/PageWrapper";

// Typage local
type Params = {
  slug: string;
};

export default function ArticleDetailPage() {
  const { slug } = useParams() as Params;
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const articles = await fetchArticles();
        const foundArticle = articles.find((a) => a.slug === slug);
        setArticle(foundArticle || null);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'article :", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) return <p>Loading article...</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <PageWrapper>
      <article className="bg-[var(--background)] text-[var(--foreground)] max-w-2xl mx-auto px-10 py-8 transition-colors">
        <h1 className="text-preset-1 font-bold text-[var(--heading-color)]">
          {article.title}
        </h1>
        <p className="text-preset-8-italic mt-2 mb-6 text-[var(--date-color)]">
          Published{" "}
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <ReactMarkdown
          components={{
            h2: ({ children }) => (
              <h2 className="text-preset-3 font-bold mt-6 text-[var(--heading-color)]">
                {children}
              </h2>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
                {children}
              </blockquote>
            ),
            ul: ({ children }) => (
              <ul className="list-disc ml-5 space-y-2">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal ml-5 space-y-2">{children}</ol>
            ),
            li: ({ children }) => (
              <li className=" ml-5 my-3 text-preset-7">{children}</li>
            ),
            p: ({ children }) => (
              <p className="text-preset-7 leading-6 mb-4">{children}</p>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-preset-7">
                {children}
              </strong>
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>
    </PageWrapper>
  );
}
