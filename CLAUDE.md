# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Vision & Working Style

This is a personal portfolio website that represents professional brand and expertise. The goal is to create something elegant, performant, and purposeful - not flashy or over-engineered.

**Quality expectations:**
- Performance is non-negotiable (Core Web Vitals targets in spec must be met)
- Accessibility compliance (WCAG 2.1 AA) is required, not optional
- Animations should enhance UX, not distract - subtle and purposeful only
- Every design decision should have clear rationale

**Working approach:**
- Follow the detailed spec in `personal-website-claude.spec.md` as primary guidance
- **Provide feedback** if aspects of the spec don't make sense or could be improved
- **Keep the spec updated** as we make decisions and changes during implementation
- Focus on getting the site working locally first - ignore deployment and publishing concerns initially
- **Ignore "Future Enhancements"** section entirely for now - focus on MVP only

**Technical priorities:**
1. Static-first approach with minimal JavaScript
2. Performance optimization built-in from the start
3. Clean, maintainable code that follows existing patterns
4. TypeScript strict mode compliance

## Development Workflow

**Initial setup priority:**
1. Get basic Astro project running locally
2. Implement core navigation and layout structure
3. Set up content collections with proper schemas
4. Build pages iteratively: Home → Writing → Portfolio → Experience

**Commands (once project is set up):**
```bash
pnpm dev                  # Development server
pnpm build                # Build for production + search index
pnpm preview              # Preview built site locally
```

**Content workflow:**
- Articles and projects are managed as MDX files in content collections
- Content collections have strict Zod schemas - validate frontmatter carefully
- Images should be optimized and placed in `/public/images/` with descriptive names

**Key implementation notes:**
- Pagefind search requires post-build step: `pnpm build && pagefind --source dist`
- shadcn/ui components should be installed as needed: `npx shadcn-ui@latest add [component]`
- Framer Motion animations must respect `prefers-reduced-motion`
- All external links should open in new tabs
- Use semantic HTML and proper heading hierarchy

**Testing approach:**
- Test responsive design at 320px, 768px, 1024px+ viewports
- Verify search functionality works after build
- Check that all animations respect accessibility preferences
- Ensure no JavaScript errors in console
- Use Lighthouse to validate performance targets

**Common gotchas:**
- Astro components vs React components - use .astro for static content, .tsx for interactive elements
- Content collection schemas must match frontmatter exactly
- Images in MDX need to be properly imported or referenced from public directory
- Search index only builds after production build, not during development