# Personal Website Specification

## Project Overview

A modern, performant personal website showcasing writing, professional experience, and bio. Static-first with minimal JavaScript, smooth animations, and excellent user experience.

## Technical Stack

- **Astro 5** - Static site generator with islands architecture
- **TypeScript** - Strict mode enabled
- **MDX** - Content management for articles and timeline items
- **React 19** - Interactive component islands
- **Tailwind CSS v4** - Utility-first styling with custom theme
- **shadcn/ui** - Component library built on Radix UI
- **Framer Motion** - Subtle, accessible animations
- **Pagefind** - Static search (build-time indexing)
- **Vercel Analytics** - Page view tracking
- **pnpm** - Package manager

## Site Architecture

```
src/
├── pages/
│   ├── index.astro              # Home page
│   ├── about.astro              # About page
│   ├── experience.astro         # Experience page
│   └── writing/
│       ├── index.astro          # Writing listing
│       └── [...slug].astro      # Individual articles
├── layouts/
│   ├── BaseLayout.astro         # Main HTML template
│   ├── Header.astro             # Fixed navigation
│   └── Footer.astro             # Site footer
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── icons/                   # SVG icon React components
│   ├── home/                    # Hero, Welcome, Connect
│   ├── about/                   # AboutSection
│   ├── writing/                 # ArticleCard, WritingHeader, SearchBar
│   └── experience/              # Timeline, ExperienceHeader, SectionTitle, OtherExperiences
├── content/
│   ├── config.ts                # Collection schemas
│   ├── articles/                # MDX blog posts
│   ├── professional/            # MDX professional experience entries
│   └── education/               # MDX education entries
├── lib/
│   ├── utils.ts                 # cn() utility
│   └── useIsMobile.ts           # Responsive animation hook
└── styles/
    └── global.css               # Global styles and Tailwind theme
public/
├── images/
│   ├── profile.jpg
│   └── austin-skyline.png
└── resume.pdf
```

## Responsive Behavior

The `md` breakpoint (768px) is used consistently throughout for all layout switches — header, hero, timeline, article cards, footer, and resume button. Mobile-first styles apply below `md`; desktop layouts apply at `md` and above.

## Pages Specification

### Navigation Header (Global)

- Fixed at top with backdrop blur on scroll
- `max-w-5xl` container matching main content width
- Links: Home, About, Writing, Experience
- Active state highlights current page
- Mobile: hamburger menu with smooth slide-down animation
- Mobile tap highlight on logo name (coral color on active)

### Footer (Global)

- Three-column layout: copyright left, social icons center (absolute positioned for true centering on desktop), "View source code" link right
- Social icon order: Email, LinkedIn, GitHub, Substack, X (Twitter)
- Coral hover effects on icons, consistent sizing
- Mobile: social icons stack above copyright, "View source code" remains right
- `max-w-5xl` container with consistent margins

### 1. Home Page

**Layout**: Two-column responsive grid (stacks on mobile, profile above title)

**Hero Section**:
- Desktop: text left, circular profile image (264×264px) right with organic gradient background blur
- Mobile: profile (160×160px) centered above title text
- Introduction: "Hello, I'm Sean, **Engineering Leader**, based in Austin, TX" with "Engineering Leader" in coral
- Austin skyline background image (medium gray tint):
  - Mobile: inline below hero content
  - Desktop: overlaps hero section above

**Welcome Section**:
- Full-width below hero
- Casual professional greeting with overview of site
- Contextual links to About, Writing, and Experience pages

**Connect Section**:
- Custom SVG icons for each platform (not emoji)
- Vertically stacked, left-aligned
- Order and handles: `sean@meador.me`, `seanmeador` (LinkedIn), `smeador` (GitHub), `@smeador` (Substack), `@seanmeador` (X/Twitter)
- Coral icons with hover effects

### 2. About Page

- Single-column prose layout, `max-w-5xl` container
- Long-form biography: personal journey, engineering philosophy, interests
- Casual yet professional tone
- Link to Experience page at end
- Same background gradient as home page

### 3. Writing Page

- Left-aligned "writing." header with subtitle, matching Experience page style
- Article list with full-width cards respecting container margins
- Pagefind-powered search bar
- Article cards (shadcn/ui Card):
  - Desktop: title and date side-by-side
  - Mobile: title and date stacked
  - Content: title, date, excerpt (no reading time or tags displayed)
  - Staggered entrance animations (0.2s initial + 0.2s per card)
  - Shadow and border hover transitions
- Articles sorted newest first

### 4. Individual Article Page

- "Back to Writing" navigation link
- Large title, date formatted "Month DD, YYYY", author attribution
- MDX content with prose styling
- No tags, reading time, social sharing, or comments

### 5. Experience Page

- Left-aligned "experience." header with summary and download resume button
  - Desktop: button inline with title (right-aligned, vertically centered)
  - Mobile: button below summary, left-aligned
- **Professional Timeline** section with staggered animation
- **Education Timeline** section with staggered animation
- **Notable Experiences & Achievements** card — a hardcoded card at the bottom of the experience page listing advisory roles, speaking appearances, publications, and other career highlights that don't fit the main timeline. Same visual style as timeline cards.
- Timeline visual: vertical line with circular nodes (hidden on mobile)

**Timeline Card Layout**:
- Desktop: organization name and total duration in same row
- Mobile: stacked vertically
- Location badge below organization name
- Organization description always visible
- Multiple positions per organization, each showing: role title, date range, duration
- Left border accent separates positions visually
- Expand/contract animation reveals position descriptions

**Duration format**: Abbreviated — "2 yrs 3 mos"

## Content Collections

### Articles (`src/content/articles/`)

```typescript
{
  title: z.string(),
  date: z.date(),
  excerpt: z.string(),
  tags: z.array(z.string()),      // stored but not displayed
  readingTime: z.string(),         // stored but not displayed
  featured: z.boolean().optional() // stored but not displayed
}
```

### Professional (`src/content/professional/`)

```typescript
{
  organization: z.string(),
  organizationUrl: z.string().url().optional(),
  location: z.string(),
  description: z.string(),         // shown in card header
  startDate: z.date(),
  endDate: z.date().optional(),
  positions: z.array(z.object({
    role: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string(),
  })),
  order: z.number(),               // sort order
}
```

### Education (`src/content/education/`)

Same schema as Professional. `role` field holds the degree/program name.

### Existing Content

The repository already contains real content that should be preserved:
- **Professional**: 3 entries (Afresh, Rakuten, Mozign)
- **Education**: 1 entry (Stanford University)
- **Articles**: sample article(s) — replace or supplement with real posts

## Design System

### Colors

Warm, professional palette: soft cream background, deep charcoal text, vibrant coral as the primary accent. Supporting tones include warm beige, peach, and professional navy. No dark mode — light mode only.

Page heading titles use a lowercase style with a trailing period (e.g. "writing." "experience.") as a deliberate brand convention applied consistently across all pages.

### Typography

- System font stack with Inter as primary
- Bold heading hierarchy
- Optimal reading line length: 65–75 characters
- Monospace for inline code

### Icons

All SVG icons are React components in `src/components/icons/`, exported from an `index.ts` barrel file. Use `client:load` in Astro files when needed.

Current icons: EmailIcon, LinkedInIcon, GitHubIcon, SubstackIcon, XIcon, MenuIcon, ToggleIcon, DownloadIcon

## Animation Guidelines

- **Subtle and purposeful** — enhance UX, never distract
- **Performant** — use `transform` and `opacity` only
- **Accessible** — respect `prefers-reduced-motion` via Framer Motion
- **Responsive direction**: desktop animations slide in from the left, mobile animations fade up
- **No re-animation on resize** — entrance animations fire once on page load based on the viewport at that moment; resizing the window must not re-trigger them

## Performance Requirements

### Core Web Vitals Targets

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse**: > 90 all metrics

### Optimization Approach

- Minimal JavaScript — Astro islands only where interaction is needed
- WebP images with lazy loading below fold
- System font stack avoids font download overhead
- Pagefind assets loaded only when search is initiated
- Code splitting per route via Astro defaults

## SEO & Metadata

- Unique title and description per page
- Open Graph tags for social sharing
- JSON-LD structured data for articles
- Sitemap and RSS feed are **not yet implemented** and are out of scope for now

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Semantic HTML with proper heading hierarchy
- Alt text for all images
- Keyboard navigation and visible focus indicators
- ARIA labels where needed
- `prefers-reduced-motion` respected

## Development Commands

```bash
pnpm dev          # Development server
pnpm build        # Production build + Pagefind search index
pnpm preview      # Preview built site
```

## Deployment

- **Host**: Vercel
- **Adapter**: `@astrojs/vercel`
- **Site URL**: https://meador.me
- **Analytics**: `@vercel/analytics` (production only)

## Success Criteria

1. All five pages functional: Home, About, Writing (list + article), Experience
2. Search works across all content (requires production build)
3. Mobile responsive at 320px, 768px, 1024px+
4. Page load < 3s on 3G; Lighthouse scores > 90
5. All content loaded via MDX collections
6. Animations smooth and respect reduced-motion preference
7. Resume downloads correctly from `/resume.pdf`
8. All external links open in new tabs
9. No console errors in production build
