# Recipe Explorer Workspace

This workspace contains the Recipe Explorer Astro frontend.

- Container: recipe_app_frontend
- Framework: Astro 5
- Port: 3000

## Run locally (in this workspace)

From the workspace root:

1) Install dependencies
   cd recipe_app_frontend
   npm install

2) Start the dev server
   npm run dev

The app is served at http://localhost:3000 (or via the provided container URL).

## Build and Preview

- Build: npm run build
- Preview: npm run preview

## Environment variables

The app reads these PUBLIC_ env variables but will run without them:
- PUBLIC_API_BASE
- PUBLIC_BACKEND_URL

If not set, the UI gracefully defaults to "n/a" for display and uses local mock data.

## What’s included

- Ocean Professional theme (Primary #2563EB, Secondary #F59E0B)
- Header with branding
- Home page with search and responsive recipe grid
- Client-side search/filtering against mock data
- Dynamic recipe detail route /recipe/[id]
- Mock data source: src/data/recipes.ts
- Sample assets under public/assets