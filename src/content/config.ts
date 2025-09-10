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

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    location: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).optional(),
    achievements: z.array(z.string()).optional(),
    order: z.number(), // For sorting
  }),
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    location: z.string().optional(),
    description: z.string(),
    gpa: z.string().optional(),
    honors: z.array(z.string()).optional(),
    order: z.number(), // For sorting
  }),
});

export const collections = { articles, projects, experience, education };