import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CollectionEntry } from "astro:content";

interface ArticleCardProps {
  article: CollectionEntry<"articles">;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const { title, date, excerpt } = article.data;

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.2, ease: "easeOut" }}
      className="group"
    >
      <a href={`/writing/${article.slug}`} className="block">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
              <CardTitle className="text-xl font-semibold text-foreground transition-colors leading-tight">
                {title}
              </CardTitle>
              <div className="text-sm text-muted-foreground md:shrink-0">
                {date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
          </CardContent>
        </Card>
      </a>
    </motion.article>
  );
}
