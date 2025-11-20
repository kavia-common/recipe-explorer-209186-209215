# Recipe Explorer (Astro Frontend)

Modern Astro frontend for browsing, searching, and viewing recipes.

- Theme: Ocean Professional (Primary #2563EB, Secondary #F59E0B)
- Runs on port 3000 out of the box
- No external services required; uses local mock data

## Quick start

1) Install dependencies
   npm install

2) Run in dev mode (http://localhost:3000)
   npm run dev

3) Build / Preview
   npm run build
   npm run preview

## Features

- Header with branding and dark/light toggle
- Home page with search bar
- Responsive recipe grid loaded from mock data
- Client-side search/filtering (no server calls)
- Recipe detail page at /recipe/[id]
- Environment variables respected but optional:
  - PUBLIC_API_BASE
  - PUBLIC_BACKEND_URL

## Structure

- src/layouts/Layout.astro: Base layout, theme tokens, header, env wiring
- src/pages/index.astro: Home/search + grid
- src/pages/recipe/[id].astro: Recipe detail
- src/components/: UI components (Header, SearchBar, RecipeCard, Badge, ThemeToggle)
- src/data/recipes.ts: Mock recipe data
- public/assets: Sample images

## Notes

- If the sample images do not render in your environment (e.g., binary files stripped), replace the placeholders under public/assets with any images using the same file names.
- The UI falls back gracefully when PUBLIC_* envs are not set.
