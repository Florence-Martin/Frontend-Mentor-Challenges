"use client";

import Link from "next/link";
import { Article } from "../../../types/articles";

interface ArticleCardProps {
  article: Article;
  showDescription?: boolean;
  showContentPreview?: boolean;
}

export default function ArticleCard({
  article,
  showDescription = false,
  showContentPreview = false,
}: ArticleCardProps) {
  return (
    <li className="space-y-2 border-b border-neutral-200 pb-4">
      <h3 className="text-preset-5 font-sans text-[var(--heading-color)] font-semibold hover:underline">
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>

      <p className="text-preset-8-italic font-sans text-[var(--date-color)]">
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Description courte ou aperçu de contenu */}
      {showDescription && article.description && (
        <p className="text-[var(--foreground)]">{article.description}</p>
      )}

      {showContentPreview && !article.description && article.content && (
        <p className="text-[var(--foreground)]">
          {article.content.slice(0, 100)}...
        </p>
      )}
    </li>
  );
}
