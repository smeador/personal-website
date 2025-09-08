import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string(),
    featured: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.date(),
    description: z.string(),
    technologies: z.array(z.string()),
    image: z.string(),
    liveUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = { articles, projects };