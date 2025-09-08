import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { CollectionEntry } from 'astro:content';

interface ProjectCardProps {
  project: CollectionEntry<'projects'>;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const { title, category, description, technologies, image, liveUrl, githubUrl, featured } = project.data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full overflow-hidden">
        {/* Project Image */}
        <div className="relative overflow-hidden bg-muted">
          {!imageError ? (
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-muted">
              <div className="text-center text-muted-foreground">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
                <p className="text-sm">Project Preview</p>
              </div>
            </div>
          )}
          
          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-3 left-3">
              <Badge variant="default" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
          
          {/* Links Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                View Live
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              <Badge variant="outline" className="mt-2 text-xs">
                {category}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <CardDescription className="text-muted-foreground leading-relaxed mb-4">
            {description}
          </CardDescription>
          
          {/* Technologies */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Technologies:</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge 
                  key={tech} 
                  variant="secondary" 
                  className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Expand for details button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-sm text-primary hover:underline focus:outline-none"
          >
            {isExpanded ? 'Show less' : 'Learn more'}
          </button>
          
          {/* Expanded content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border mt-4">
              <p className="text-sm text-muted-foreground">
                This project showcases modern development practices and demonstrates 
                proficiency with the listed technologies. Click the links above to 
                explore the live application or view the source code.
              </p>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}