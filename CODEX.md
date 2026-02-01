# CODEX

Quick guide for working in this repo.

## Project overview
- Astro-based static blog (AstroPaper theme) with TypeScript and Tailwind.
- Content is Markdown in `src/data/blog` and loaded via Astro content collections.
- Routes are file-based under `src/pages`.
- Layouts in `src/layouts`, shared UI in `src/components`, helpers in `src/utils`.

## Key files
- `astro.config.ts`: Astro config and integrations.
- `src/config.ts`: Site metadata and feature flags.
- `src/content.config.ts`: Blog collection schema and loader.
- `src/constants.ts`: Social and share links.
- `src/pages/rss.xml.ts`, `src/pages/robots.txt.ts`: Feed and robots routes.
- `src/pages/og.png.ts`: Dynamic OG image route.

## Content workflow
- Add posts in `src/data/blog/*.md` with frontmatter matching the schema in `src/content.config.ts`.
- Drafts can be hidden with `draft: true`.
- Tags are strings; tag pages are generated from content metadata.

## Build and dev
- Install deps: `pnpm install`
- Dev server: `pnpm run dev` (http://localhost:4321)
- Build: `pnpm run build` (runs `astro build`, then Pagefind indexing)
- Preview: `pnpm run preview`

## Search
- Pagefind runs during build and outputs to `dist/pagefind`.
- Build script copies `dist/pagefind` into `public/` for static serving.

## Common edits
- Site title/description/links: `src/config.ts` and `src/constants.ts`.
- Navigation or layout changes: `src/layouts/*` and `src/components/*`.
- Styles: `src/styles/*` and Tailwind utilities in component templates.
