import { motion } from "framer-motion";
import type { CollectionEntry } from "astro:content";

interface ArticleCardProps {
  article: CollectionEntry<"articles">;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const { title, date, excerpt, readingTime } = article.data;
  const readTime = readingTime || "5 min";

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.2, ease: "easeOut" }}
      className="group"
    >
      <a
        href={`/writing/${article.slug}`}
        className="block w-full p-6 bg-card border border-border rounded-lg hover:shadow-lg hover:border-coral/20 transition-all duration-300"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
            {title}
          </h2>
          <div className="text-sm text-muted-foreground shrink-0 flex items-center gap-2">
            <span>
              {date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
      </a>
    </motion.article>
  );
}
