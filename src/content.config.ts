import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string(),
    featured: z.boolean().optional(),
  }),
});

const experienceSchema = z.object({
  organization: z.string(),
  organizationUrl: z.string().url().optional(), // Optional URL for organization
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
});

const professional = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/professional" }),
  schema: experienceSchema,
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/education" }),
  schema: experienceSchema,
});

export const collections = { articles, professional, education };
