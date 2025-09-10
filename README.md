## Sean Meador — Personal Website

A fast, content-focused personal site built with Astro, React, and Tailwind CSS. It showcases writing, projects, and professional experience, with MDX-powered content and built-in search. Deployed to Vercel.

### Features

- Content collections for articles and projects (MDX)
- Clean, responsive UI with Tailwind and custom design tokens
- Client-side search via Pagefind
- React components for interactive sections
- Deployed as a static site with `@astrojs/vercel`

### Tech Stack

- Astro 5
- React 19
- Tailwind CSS 3 (via `@astrojs/tailwind`)
- MDX (`@astrojs/mdx`)
- Pagefind search
- Vercel deployment

### Getting Started

```bash
pnpm i           # install dependencies
pnpm dev         # start dev server (http://localhost:4321)
pnpm build       # build to dist/ (includes search indexing)
pnpm preview     # preview the production build
```

### Project Structure (high level)

```
public/           # static assets (favicons, images, resume)
src/
  components/     # React and UI components
  content/        # MDX content (articles, projects)
  layouts/        # shared Astro layouts
  pages/          # route pages (Astro)
  styles/         # global Tailwind styles & tokens
```

### Deployment

This project uses the Vercel adapter. Build and deploy via Vercel; the site URL is configured in `astro.config.mjs` (`site: "https://meador.me"`).
