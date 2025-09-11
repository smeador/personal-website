import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string(),
    featured: z.boolean().optional(),
  }),
});

const professional = defineCollection({
  type: "content",
  schema: z.object({
    organization: z.string(),
    location: z.string(),
    description: z.string(),
    startDate: z.date(), // Overall start date at company
    endDate: z.date().optional(), // Overall end date at company
    positions: z.array(
      z.object({
        role: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        description: z.string(),
      })
    ),
    order: z.number(), // For sorting
  }),
});

const education = defineCollection({
  type: "content",
  schema: z.object({
    organization: z.string(),
    location: z.string(),
    description: z.string(),
    startDate: z.date(), // Overall start date at company
    endDate: z.date().optional(), // Overall end date at company
    positions: z.array(
      z.object({
        role: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        description: z.string(),
      })
    ),
    order: z.number(), // For sorting
  }),
});

export const collections = { articles, professional, education };
