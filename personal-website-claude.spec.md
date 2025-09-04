# Personal Portfolio Website Specification

## Project Overview

Build a modern, performant personal portfolio website that showcases writing, projects, and professional experience. The site should be static but feel rich and dynamic, with smooth animations and excellent user experience.

## Technical Stack

### Core Framework
- **Astro** - Static site generator with islands architecture
- **TypeScript** - For type safety
- **MDX** - For content management (articles and portfolio items)

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Copy-paste component library built on Radix UI
- **Framer Motion** - For smooth, subtle animations

### Features
- **Pagefind** - Static search functionality
- **Vercel Analytics** - Simple analytics integration

### Development & Deployment
- **Git/GitHub** - Version control
- **Vercel** - Deployment and hosting
- **pnpm** - Package manager (preferred for Astro)

## Site Architecture

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro          // Home page
│   │   ├── writing/
│   │   │   ├── index.astro      // Writing listing page
│   │   │   └── [...slug].astro  // Individual article pages
│   │   ├── portfolio/
│   │   │   └── index.astro      // Portfolio page
│   │   └── experience/
│   │       └── index.astro      // Experience/Resume page
│   ├── content/
│   │   ├── config.ts            // Content collections config
│   │   ├── articles/            // MDX files for blog posts
│   │   └── projects/            // MDX files for portfolio items
│   ├── components/
│   │   ├── ui/                  // shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.astro     // Navigation header
│   │   │   ├── Footer.astro
│   │   │   └── BaseLayout.astro
│   │   ├── home/
│   │   │   ├── Hero.tsx         // Profile & intro with animations
│   │   │   └── SocialLinks.tsx
│   │   ├── writing/
│   │   │   ├── ArticleCard.tsx
│   │   │   └── SearchBar.tsx
│   │   ├── portfolio/
│   │   │   └── ProjectCard.tsx
│   │   └── experience/
│   │       ├── Timeline.tsx
│   │       └── DownloadResume.tsx
│   ├── styles/
│   │   └── global.css           // Global styles & Tailwind directives
│   └── lib/
│       └── utils.ts             // Utility functions
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/           // Project screenshots
│   └── resume.pdf
└── package.json
```

## Pages Specification

### 1. Navigation Header (Global)
- **Position**: Fixed at top, with backdrop blur on scroll
- **Links**: Home, Writing, Portfolio, Experience
- **Style**: Minimal, clean, with subtle hover animations
- **Mobile**: Responsive hamburger menu
- **Active state**: Highlight current page

### 2. Home Page
**Components:**
- **Hero Section**:
  - Circular profile image (animated entrance - fade in + scale)
  - Name as H1
  - Title/tagline
  - Brief introduction paragraph (2-3 sentences)
  - Subtle gradient background or pattern
  
- **Social Links**:
  - Icons for: LinkedIn, Substack, X (Twitter), GitHub
  - Hover animations (scale + color change)
  - Open in new tabs
  
- **Quick Navigation Cards**:
  - Three cards linking to main sections
  - Brief description of each section
  - Hover effect with slight lift

**Animations**:
- Stagger animation on page load for elements
- Smooth scroll behavior
- Parallax effect on scroll (subtle)

### 3. Writing Page
**Features:**
- **Search Bar**:
  - Sticky below header
  - Pagefind integration
  - Search by title, content, tags
  - Show result count
  
- **Article List**:
  - Card layout (responsive grid)
  - Each card shows: Title, Date, Reading time, Excerpt, Tags
  - Hover effect: slight shadow increase
  - Sort by: Date (default), Reading time
  
- **Content Structure** (MDX frontmatter):
  ```yaml
  title: "Article Title"
  date: 2024-01-15
  excerpt: "Brief description"
  tags: ["web", "react", "performance"]
  readingTime: "5 min"
  featured: false
  ```

**Animations**:
- Cards fade in on scroll (intersection observer)
- Search results animate in/out

### 4. Portfolio Page
**Layout:**
- **Section-based** organization (e.g., "Web Applications", "Open Source", "Design")
- **Project Cards**:
  - Screenshot/thumbnail (lazy loaded)
  - Title and brief description
  - Technologies used (as badges)
  - Links: Live Demo, GitHub (where applicable)
  - Click to expand for more details (modal or accordion)

**Content Structure** (MDX):
```yaml
title: "Project Name"
category: "Web Application"
date: 2024-01-01
description: "Brief project description"
technologies: ["React", "Node.js", "PostgreSQL"]
image: "/images/projects/project1.png"
liveUrl: "https://example.com"
githubUrl: "https://github.com/..."
featured: true
```

**Animations**:
- Image zoom on hover
- Staggered fade-in for project cards
- Smooth accordion/modal transitions

### 5. Experience Page
**Components:**
- **Interactive Timeline**:
  - Vertical line with nodes for each position
  - Company, Role, Duration, Location
  - Click to expand for detailed description
  - Technologies/skills used
  
- **Resume Download**:
  - Prominent download button
  - PDF format
  - Optional: View inline with PDF.js
  
- **Skills Section**:
  - Grouped by category
  - Visual skill level indicators (optional)

**Data Structure:**
```yaml
company: "Company Name"
role: "Software Engineer"
startDate: 2022-01
endDate: 2024-01  # or "present"
location: "San Francisco, CA"
description: "Role description..."
technologies: ["Python", "AWS", "React"]
```

**Animations**:
- Timeline items animate in as user scrolls
- Smooth expand/collapse for details
- Download button pulse animation

## Design System

### Colors
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --muted: 210 40% 96.1%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... other dark mode colors */
}
```

### Typography
- **Font**: System font stack with Inter as primary
- **Headings**: Bold, clear hierarchy
- **Body**: Optimal reading line length (65-75 characters)
- **Code**: Monospace font for inline code

### Spacing
- Consistent spacing scale based on Tailwind defaults
- Generous whitespace for readability
- Responsive padding/margins

## Performance Requirements

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Optimization Strategies
1. **Images**:
   - WebP format with fallbacks
   - Lazy loading for below-fold images
   - Responsive sizes
   - Blur-up placeholders for hero images

2. **Fonts**:
   - Preload critical fonts
   - Font-display: swap
   - Subset fonts if using custom ones

3. **Code**:
   - Minimal JavaScript bundle
   - Code splitting per route
   - Prefetch links on hover

4. **Search**:
   - Load Pagefind assets only when search is initiated
   - Debounce search input

## SEO & Metadata

### Global Meta Tags
```html
<meta name="description" content="Personal portfolio...">
<meta property="og:type" content="website">
<meta property="og:image" content="/og-image.png">
<meta name="twitter:card" content="summary_large_image">
```

### Per-Page Requirements
- Unique title and description
- Open Graph tags for social sharing
- JSON-LD structured data for articles
- Sitemap generation
- RSS feed for blog posts

## Accessibility Requirements

- **WCAG 2.1 AA** compliance
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Focus indicators
- ARIA labels where needed
- Reduced motion options respected

## Animation Guidelines

### Principles
- **Subtle**: Enhance, don't distract
- **Purposeful**: Each animation should have a clear purpose
- **Performant**: Use transform and opacity for animations
- **Accessible**: Respect prefers-reduced-motion

### Standard Animations
```typescript
// Fade In Up
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: "easeOut" }

// Stagger Children
container: {
  animate: { transition: { staggerChildren: 0.1 } }
}

// Hover Scale
whileHover: { scale: 1.05 }
transition: { type: "spring", stiffness: 300 }
```

## Development Setup

### Initial Commands
```bash
# Create Astro project
npm create astro@latest portfolio -- --template minimal --typescript --tailwind

# Install dependencies
pnpm add @astrojs/mdx @astrojs/react framer-motion
pnpm add -D @types/react @types/react-dom

# Setup shadcn/ui
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge

# Install Pagefind (post-build)
pnpm add -D pagefind
```

### Configuration Files

**astro.config.mjs:**
```javascript
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [mdx(), react(), tailwind()],
  site: 'https://yourdomain.com',
});
```

**Content Collections (src/content/config.ts):**
```typescript
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
```

### Build Scripts
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build && npm run build-search",
    "build-search": "pagefind --source dist",
    "preview": "astro preview"
  }
}
```

## Vercel Deployment

### vercel.json
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install",
  "framework": "astro"
}
```

### Environment Variables
```env
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

### Analytics Integration
```astro
---
// In BaseLayout.astro
---
<head>
  <!-- Vercel Analytics -->
  {import.meta.env.PROD && (
    <script defer src="/_vercel/insights/script.js"></script>
  )}
</head>
```

## Content Guidelines

### Writing Style
- Clear, concise technical writing
- Code examples where relevant
- Proper syntax highlighting
- Consistent formatting

### Image Requirements
- Profile image: 400x400px minimum
- Project screenshots: 1200x630px (OG image ratio)
- Optimize all images before adding
- Include alt text

### File Naming
- Kebab-case for files: `my-first-article.mdx`
- Descriptive names for images: `project-dashboard-view.png`
- Date prefix for articles: `2024-01-15-article-title.mdx`

## Testing Requirements

### Pre-deployment Checklist
- [ ] All links work (internal and external)
- [ ] Images load and have alt text
- [ ] Search functionality works
- [ ] Mobile responsive (test at 320px, 768px, 1024px+)
- [ ] Dark mode toggle works (if implemented)
- [ ] Forms/interactions work without JavaScript
- [ ] Resume downloads correctly
- [ ] Social links open in new tabs
- [ ] No console errors
- [ ] Lighthouse score > 90 for all metrics

## Future Enhancements (Not in MVP)

- Dark mode toggle
- Blog post comments (Giscus)
- Newsletter signup
- Reading progress indicator
- Table of contents for articles
- Related posts suggestions
- RSS feed
- Sitemap
- View transitions API
- i18n support

## Success Criteria

The website is considered complete when:
1. All five pages are implemented and functional
2. Search works across all content
3. Mobile responsive design is flawless
4. Page load time < 3 seconds on 3G
5. Lighthouse scores are all green (>90)
6. Successfully deployed to Vercel
7. Analytics are tracking page views
8. All content is loaded via MDX
9. Animations are smooth and accessible
10. Code is well-organized and documented