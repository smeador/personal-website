import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { CollectionEntry } from 'astro:content';

interface ArticleCardProps {
  article: CollectionEntry<'articles'>;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const { slug } = article;
  const { title, date, excerpt, tags, readingTime, featured } = article.data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
        <a href={`/writing/${slug}`} className="block h-full">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                  {title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                  <time dateTime={date.toISOString()}>
                    {date.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </time>
                  <span>•</span>
                  <span>{readingTime}</span>
                </div>
              </div>
              {featured && (
                <Badge variant="secondary" className="shrink-0">
                  Featured
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
              {excerpt}
            </CardDescription>
            
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </a>
      </Card>
    </motion.div>
  );
}