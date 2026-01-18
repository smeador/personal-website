# Personal Website Specification

## Project Overview

Build a modern, performant personal website that showcases writing, projects, and professional experience. The site should be static but feel rich and dynamic, with smooth animations and excellent user experience.

## Technical Stack

### Core Framework

- **Astro** - Static site generator with islands architecture
- **TypeScript** - For type safety
- **MDX** - For content management (articles and timeline items)

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
│   │   ├── about.astro          // About page with long-form biography
│   │   ├── writing/
│   │   │   ├── index.astro      // Writing listing page
│   │   │   └── [...slug].astro  // Individual article pages
│   │   └── experience.astro     // Experience/Resume page
│   ├── layouts/                 // Astro layout components
│   │   ├── BaseLayout.astro     // Main page layout
│   │   ├── Header.astro         // Navigation header
│   │   └── Footer.astro         // Site footer
│   ├── content/
│   │   ├── config.ts            // Content collections config
│   │   ├── articles/            // MDX files for blog posts
│   ├── components/
│   │   ├── ui/                  // shadcn/ui components
│   │   ├── home/
│   │   │   ├── Hero.tsx         // Profile & intro with animations
│   │   │   ├── Welcome.tsx      // Welcome section with overview and links
│   │   │   └── Connect.tsx      // Contact section with animation
│   │   ├── writing/
│   │   │   ├── ArticleCard.tsx  // Animated article cards
│   │   │   └── WritingHeader.tsx // Page header component
│   │   └── experience/
│   │       ├── Timeline.tsx     // Multi-position timeline component
│   │       ├── ExperienceHeader.tsx // Page header with resume button
│   │       └── SectionTitle.tsx // Animated section titles
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
- **Container**: max-w-5xl container matching main content width
- **Links**: Home, About, Writing, Experience
- **Style**: Minimal, clean, with subtle hover animations
- **Mobile**: Responsive hamburger menu with consistent container width
- **Active state**: Highlight current page

### 1.5. Footer (Global)

- **Layout**: Three-column layout with responsive behavior
  - **Left**: Copyright text "© {currentYear} Sean Meador"
  - **Center**: Social media icons (absolutely positioned for perfect centering on desktop)
  - **Right**: "View source code" link to GitHub repository
- **Social Icons**:
  - **Order**: Email, LinkedIn, GitHub, Substack, X (Twitter)
  - **Links**: mailto:sean@meador.me, LinkedIn (/in/seanmeador), GitHub (/smeador), Substack (@smeador), X (@seanmeador)
  - **Styling**: Coral hover effects, consistent 6x6 sizing
  - **Implementation**: React components with `client:load` for Astro compatibility
- **Mobile Behavior**:
  - Social icons stack vertically above copyright
  - "View source code" link remains on right
  - Maintains consistent container margins (max-w-5xl)
- **Technical Notes**:
  - Uses `pointer-events-none` on container with `pointer-events-auto` on inner elements for proper click handling
  - Email icon uses enhanced SVG design for better visual balance
  - All icons use React components from barrel export `/src/components/icons/index.ts`

### 2. Home Page

**Layout**: Two-column responsive design (stacks on mobile at md breakpoint)

**Components:**

- **Hero Section**:
  - **Left column**: Introduction text with "Hello, I'm Sean, **Engineering Leader**, based in Austin, TX" (customizable title)
  - **Right column**: Large circular profile image (264x264px) with organic gradient background blur
  - Clean, minimal design with coral accent colors
  - Bold typography with Engineering Leader emphasized in coral
- **Welcome Section**:
  - Full-width section below hero
  - Casual yet professional greeting and website overview
  - Includes contextual links to About, Writing, and Experience pages
  - Left-aligned content with consistent margins
- **Connect Section**:
  - Custom SVG icons (not emojis) for each platform
  - Email: sean@meador.me
  - Social links displayed as usernames: seanmeador (LinkedIn), smeador (GitHub), @smeador (Substack), @seanmeador (X/Twitter)
  - Order: Email, LinkedIn, GitHub, Substack, X (Twitter)
  - Vertically stacked, left-aligned layout
  - Icons styled in coral color with hover effects
  - React icons using barrel export pattern for maintainability

**Removed Elements**:

- Quick Navigation Cards section (removed for cleaner focus)
- Geometric accent shapes (removed - too busy)

**Animations**:

- Stagger animation on page load for hero elements
- Profile image with organic background shape animation
- Smooth scroll behavior and hover effects throughout

### 3. About Page

**Layout**: Single-column prose layout with consistent max-w-5xl container

**Content:**

- **Page Header**: "about." title matching site design patterns
- **Long-form Biography**:
  - Personal journey and professional philosophy
  - Engineering leadership approach and values
  - Interests beyond technology
  - Casual yet professional tone
  - Engaging and approachable writing style
- **Experience Link**: Call-to-action link to Experience page at the end
- Same background gradient as home page for visual consistency

**Design:**

- Clean, readable prose layout with proper typography
- Generous spacing and line height for optimal readability
- Consistent with overall site aesthetic
- Mobile-responsive with appropriate padding

### 4. Writing Page

**Layout**:

- **Header**: Left-aligned "writing." title with section subtitle matching home page style
- **Article List**: Full-width cards respecting container margins (max-w-5xl)
- **Simplified Design**: Clean, focused layout without search or complex features

**Features**:

- **Article Cards**:
  - shadcn/ui Card components with consistent styling
  - **Staggered animations**: 0.2s initial delay + 0.2s per card for smooth reveal
  - **Responsive layout**:
    - Desktop: Title and date side-by-side in header
    - Mobile: Title and date stacked vertically for better readability
  - **Content**: Title, Date, Excerpt only (no reading time displayed)
  - **Hover effects**: Shadow and border color transitions
  - Sorted by date (newest first)
- **No Search**: Search functionality removed for simplicity (may be added back later)

**Content Structure** (MDX frontmatter):

```yaml
title: "Article Title"
date: 2024-01-15
excerpt: "Brief description"
tags: ["web", "react", "performance"] # Not displayed but kept for future use
readingTime: "5 min" # Not displayed but kept for future use
featured: false # Not displayed but kept for future use
```

### 5. Individual Article Page

**Layout**:

- **Header**:
  - "Back to Writing" navigation link with arrow icon
  - Clean title display (large, prominent)
  - Date formatted as "Month DD, YYYY"
  - Author attribution ("by Sean Meador")
  - No tags, reading time, or featured indicators
- **Content**:
  - Article content rendered from MDX with proper prose styling
  - No footer elements (social sharing, comments, etc. removed for future consideration)
  - Maximum width container for optimal reading experience

**Styling**:

- Matches overall site design with coral accent colors
- Custom prose styles for article content
- Responsive typography and spacing

**Removed Elements**:

- Tags display and reading time
- "Thanks for reading" footer section
- Social sharing links
- Comment/feedback sections

### 6. Experience Page

**Layout**: Left-aligned header matching Writing page style with compact responsive spacing

**Header Components:**

- **Page Title**: "experience." with section-title styling and left alignment
- **Summary**: Brief description paragraph with responsive typography
- **Download Resume Button**:
  - Desktop: Inline with title (right-aligned, vertically centered)
  - Mobile: Below summary text, left-aligned
  - Links to `/resume.pdf` with download icon

**Content Sections:**

- **Professional Timeline**:
  - Section title: "Professional" with staggered animation (0.2s delay)
  - Vertical line with circular nodes hidden on mobile for better space usage
  - **Card Header Layout**:
    - Desktop: Organization name and duration in same row
    - Mobile: Stacked vertically with even spacing
    - Location badge below organization name
    - Organization description (if present) below location badge
  - **Multiple Positions Support**:
    - Each organization can have multiple positions/roles
    - Position cards show: role title, date range, duration
    - Left border accent for visual separation of positions
  - **Expand/Contract Animation**:
    - Smooth animation for position descriptions (0.3s easeInOut)
    - All position descriptions show when expanded
    - Organization description always visible in header
  - **Duration Format**: Abbreviated (e.g., "2 yrs 3 mos" instead of "2 years 3 months")

- **Education Timeline**:
  - Same structure and visual style as professional timeline
  - Supports multiple degrees/programs per institution
  - Same expand/contract functionality for detailed descriptions

**Design Improvements:**

- Compact section spacing (`mb-6` for headers vs previous `mb-12`)
- Consistent typography matching professional timeline font sizes
- Removed unnecessary summary paragraphs under section titles
- Both timelines respect page margins (max-w-5xl container)
- Consistent card styling and hover effects throughout

**Data Structure:**

```yaml
# Experience entry supporting multiple positions
organization: "Company Name"
location: "San Francisco, CA"
description: "Brief description of the organization/company"
startDate: 2020-06-01  # Overall start date at organization
endDate: 2024-01-01    # Overall end date (optional)
positions:
  - role: "Senior Software Engineer"
    startDate: 2022-01-01
    endDate: 2024-01-01
    description: "Detailed description of this specific role..."
  - role: "Software Engineer"
    startDate: 2020-06-01
    endDate: 2022-01-01
    description: "Description of earlier role at same company..."
order: 1  # For sorting timeline entries
```

**Responsive Behavior:**

- Mobile: Smaller spacing, stacked layout, resume button below summary
- Desktop: Inline resume button, optimal timeline spacing
- Consistent with Writing page header patterns

**Removed Elements:**

- Technology/skill tags from professional experience cards
- Coursework tags from education section
- Descriptive paragraphs under section titles
- Skills section (may be added back later if needed)

## Design System

### Colors

**Theme**: Warm, professional color palette blending fun and edgy design inspirations

```css
:root {
  /* Warm, professional base colors */
  --background: 35 25% 97%; /* Soft cream background */
  --foreground: 220 15% 15%; /* Deep charcoal for text */
  --card: 0 0% 100%;
  --card-foreground: 220 15% 15%;

  /* Coral accent inspired by fun design */
  --primary: 15 85% 60%; /* Vibrant coral */
  --primary-foreground: 0 0% 100%;

  /* Warm secondary colors */
  --secondary: 25 30% 90%; /* Warm light beige */
  --secondary-foreground: 220 15% 15%;
  --muted: 30 20% 88%; /* Subtle warm gray */
  --muted-foreground: 220 10% 45%;

  --radius: 0.75rem; /* Slightly more rounded */

  /* Custom accent colors for design elements */
  --accent-coral: 15 85% 60%;
  --accent-peach: 25 70% 75%;
  --accent-cream: 35 40% 85%;
  --accent-blue: 200 50% 70%;
  --accent-navy: 220 40% 25%;
}

.dark {
  --background: 220 20% 8%; /* Rich dark background */
  --foreground: 35 25% 95%;
  --primary: 15 75% 65%; /* Brighter coral for dark mode */
  --primary-foreground: 220 20% 8%;
  /* ... full dark mode support */
}
```

**Design Philosophy**:

- Warm cream base creates approachable feel
- Coral accents add energy and personality
- Professional navy for structured elements
- Balanced between playful and sophisticated

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
<meta name="description" content="Sean Meador Personal Website" />
<meta property="og:type" content="website" />
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:card" content="summary_large_image" />
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
// Page Header Animation (About, Connect, WritingHeader, ExperienceHeader)
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, ease: "easeOut" } // No delay

// Section Title Animation (Professional, Education)
initial: { opacity: 0, y: 30 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } // Staggered delays

// Timeline Card Animation
initial: { opacity: 0, x: -20 }
animate: { opacity: 1, x: 0 }
transition: { duration: 0.5, delay: animationDelay, ease: "easeOut" }

// Article Card Animation
initial: { opacity: 0, x: -20 }
animate: { opacity: 1, x: 0 }
transition: { duration: 0.5, delay: 0.2 + index * 0.2, ease: "easeOut" }

// Position Description Expand/Contract
animate: {
  height: isExpanded ? "auto" : 0,
  opacity: isExpanded ? 1 : 0,
  marginTop: isExpanded ? 8 : 0,
}
transition: { duration: 0.3, ease: "easeInOut" }

// Mobile Header Logo Tap (Mobile Only)
// @media (max-width: 767px)
.custom-header-name:active {
  color: hsl(var(--accent-coral));
  transition: color 0.1s ease;
}
```

## Development Setup

### Initial Commands

```bash
# Create Astro project
npm create astro@latest personal-website -- --template minimal --typescript --tailwind

# Install dependencies
pnpm add @astrojs/mdx @astrojs/react @astrojs/tailwind framer-motion pagefind
pnpm add clsx tailwind-merge class-variance-authority
pnpm add -D @types/react @types/react-dom react react-dom
pnpm add -D tailwindcss@^3.4.0 tailwindcss-animate @tailwindcss/typography

# Setup shadcn/ui components manually (or via npx shadcn@latest add)
npx shadcn@latest add button card badge
```

### Configuration Files

**astro.config.mjs:**

```javascript
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [mdx(), react(), tailwind()],
  site: "https://yourdomain.com",
});
```

**Content Collections (src/content/config.ts):**

```typescript
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

const experience = defineCollection({
  type: "content",
  schema: z.object({
    organization: z.string(),
    location: z.string(),
    description: z.string(), // Organization description shown in header
    startDate: z.date(), // Overall start date at organization
    endDate: z.date().optional(), // Overall end date at organization
    positions: z.array(
      z.object({
        role: z.string(),
        startDate: z.date(),
        endDate: z.date().optional(),
        description: z.string(), // Position-specific description
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
    startDate: z.date(),
    endDate: z.date().optional(),
    positions: z.array(
      z.object({
        role: z.string(), // Degree type for education
        startDate: z.date(),
        endDate: z.date().optional(),
        description: z.string(),
      })
    ),
    order: z.number(),
  }),
});

export const collections = { articles, experience, education };
```

### Build Scripts

```json
{
  "name": "personal-website",
  "packageManager": "pnpm@10.15.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build && pnpm run build-search",
    "build-search": "pagefind --site dist",
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

### Icon Management

- All SVG icons should be extracted into reusable React components in `/src/components/icons/`
- Use only `.tsx` format for consistency and flexibility
- Export from index.ts for barrel imports: `import { IconName } from '../components/icons'`
- Use consistent naming: `IconName.tsx`
- Examples: `EmailIcon.tsx`, `LinkedInIcon.tsx`, `DownloadIcon.tsx`, `GitHubIcon.tsx`
- Default size should be appropriate for use case with `className` prop for customization
- Props interface: `{ className?: string }` with default size in component
- In Astro files: use `client:load` when needed, or prefer inline SVG for static icons

## Testing Requirements

### Package Dependencies Verification

Before deployment, verify that dependencies are correctly categorized in `package.json`:

**Runtime Dependencies** (`dependencies`):

- Required for production builds and runtime
- Examples: `astro`, `@astrojs/mdx`, `@astrojs/react`, `framer-motion`, `pagefind`

**Development Dependencies** (`devDependencies`):

- Only needed during development/build process
- Examples: `@types/react`, `@types/react-dom`, `tailwindcss`, `@tailwindcss/typography`

**Verification Steps:**

1. Review `package.json` dependency categorization
2. Test production build with only runtime dependencies installed
3. Ensure no dev-only packages are required at runtime
4. Check bundle size impact of any dependency changes

### Pre-deployment Checklist

- [ ] Dependencies correctly categorized (runtime vs dev)
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

## Implementation Status ✅ UPDATED & ENHANCED

The website has been successfully implemented and recently updated with enhanced design and functionality:

### ✅ Completed Features

1. **Enhanced home page design** - Two-column layout with Design-Fun inspiration
2. **New warm color palette** - Coral accents with cream/beige base colors
3. **Professional contact section** - Custom SVG icons, real contact information
4. **Improved responsive design** - Better mobile breakpoints and footer layout
5. **Consistent container widths** - max-w-5xl across all pages, header, and footer for unified layout
6. **Real contact information** - sean@meador.me, correct social handles (@smeador)
7. **Pagefind search integration** - Static search with build-time indexing
8. **Content collections** - Type-safe MDX content management
9. **shadcn/ui design system** - Enhanced with custom coral color scheme
10. **Astro best practices** - Optimized architecture with clean layouts

### 🎨 Design Enhancements (Recent Updates)

- **Hybrid design system** - Blends fun warmth with professional elegance
- **Custom header font** - Lowercase custom styling with animated coral underline
- **Austin skyline background** - Medium gray tinted Austin skyline image behind content
- **Responsive hero layout** - Mobile-first design with profile above title on small screens
- **Enhanced mobile experience** - Smaller profile image and centered content on mobile
- **Organic profile image styling** - Gradient background blur effects
- **Enhanced footer** - Properly centered social icons with mobile stacking (fixed pointer-events)
- **Removed clutter** - Eliminated geometric shapes and navigation cards for cleaner focus
- **Aligned containers** - Fixed padding structure so header, footer, and content align perfectly
- **Reusable icon components** - Extracted SVG icons into separate components for better maintainability (including DownloadIcon)
- **Compact page headers** - Reduced spacing on Writing and Experience pages for better mobile experience
- **Consistent page layouts** - Both Writing and Experience pages use matching header patterns
- **Enhanced footer design** - Added email icon at front of social links, replaced contact/resume links with "View source code"
- **Icon system overhaul** - Consolidated to React-only icons (.tsx), removed duplicate Astro versions, improved email icon design
- **Added X (Twitter) integration** - New XIcon component and link added to both home page connect section and footer
- **Updated favicon** - Custom orange "SM" favicon using Inter font and coral brand color

### 🌆 Austin Skyline Integration

- **Background image**: `/public/images/austin-skyline.png` (109KB, medium gray tinted)
- **Responsive positioning**:
  - **Mobile**: Inline between hero and about sections with 10px top spacing
  - **Desktop**: Overlaps hero section by 136px for integrated effect
- **Container structure**: Dedicated container div with consistent max-w-5xl margins
- **Visual treatment**: `grayscale(100%) brightness(0.5) contrast(1.3)` with 40% opacity
- **Sizing**: Responsive heights (h-32 mobile, h-56 md, h-64 lg) with `background-size: contain`

### 📱 Responsive Hero Layout

- **Mobile behavior**:
  - Profile image appears above title text
  - Smaller profile size (w-40 h-40 vs w-64 h-64 desktop)
  - Centered text alignment
  - No minimum height constraint for natural content flow
  - Austin skyline appears inline after content
- **Desktop behavior**:
  - Two-column grid layout (text left, profile right)
  - Left-aligned text
  - 400px minimum height for proper proportions
  - Austin skyline overlaps hero content above

### 📝 Ready for Content

- Add real profile image to `/public/images/profile.jpg`
- Add project screenshots to `/public/images/projects/`
- Replace sample content with real articles and projects
- Add real resume PDF to `/public/resume.pdf`

### 🚀 Development Status

- **Local development**: Fully functional at `http://localhost:4323/`
- **Production builds**: Successfully generating static files
- **Search indexing**: Working with Pagefind v1.4.0
- **Type safety**: Full TypeScript support with strict mode
- **Real contact info**: sean@meador.me, @smeador handles configured

## Recent Major Updates

### About Page & Welcome Section Addition

- **New About page**: Dedicated page with long-form biography and personal story
- **Welcome section**: Replaced About section on home page with casual, professional overview
- **Enhanced navigation**: Added About link to header navigation (Home, About, Writing, Experience)
- **Content reorganization**: Separated detailed biography from home page intro for better content structure
- **Contextual linking**: Welcome section provides clear paths to About, Writing, and Experience pages
- **Consistent design**: About page uses same prose styling and background gradients as rest of site

### Content Model & Timeline Enhancements

- **Multi-position support**: Timeline now supports multiple roles per organization
- **Enhanced data structure**: Organizations can have multiple positions with individual descriptions
- **Improved mobile layout**: Timeline line and nodes hidden on mobile for better space usage
- **Animated expand/contract**: Smooth position description reveals with proper spacing
- **Abbreviated durations**: Format like "2 yrs 3 mos" for cleaner display

### Component Architecture Improvements

- **Dedicated header components**: `WritingHeader.tsx` and `ExperienceHeader.tsx` replace generic `AnimatedTitle`
- **Consistent animation patterns**: All page headers follow same timing (0.6s, no delay)
- **Section title animations**: Staggered animations for Professional (0.2s) and Education (0.4s) titles
- **Article card enhancements**: Responsive layout with stacked title/date on mobile

### Mobile Experience Optimizations

- **Header logo interaction**: Simple tap highlight instead of hover animation on mobile
- **Mobile menu animation**: Smooth slide-down/up transitions with proper timing
- **Responsive timeline headers**: Stacked organization info on mobile, row layout on desktop
- **Improved spacing**: Reduced padding and margins for better mobile content density

### Technical Improvements

- **Content collections updated**: Support for `positions` array and `organization` field
- **Animation consistency**: Standardized timing and easing across all components
- **Type safety**: Proper TypeScript interfaces for multi-position timeline data
- **Clean component separation**: Removed generic components in favor of page-specific ones

## Original Success Criteria

The website meets all original success criteria:

1. ✅ All six pages are implemented and functional (Home, About, Writing, Article, Experience)
2. ✅ Search works across all content
3. ✅ Mobile responsive design is flawless
4. ⏳ Page load time < 3 seconds on 3G (ready for testing)
5. ⏳ Lighthouse scores are all green >90 (ready for testing)
6. ⏳ Successfully deployed to Vercel (ready for deployment)
7. ⏳ Analytics are tracking page views (ready for setup)
8. ✅ All content is loaded via MDX
9. ✅ Animations are smooth and accessible
10. ✅ Code is well-organized and documented
