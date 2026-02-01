# Victor Sesma — Portfolio & Blog

This repository powers my personal portfolio and blog. It is a static site built with Astro and tailored from the AstroPaper theme, featuring essays, case studies, and notes on backend systems, architecture, and AI‑augmented engineering.

## Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Useful Docs

- Astro documentation: https://docs.astro.build/
- Astro project structure: https://docs.astro.build/en/core-concepts/project-structure/
- Content collections (Markdown schema and frontmatter): https://docs.astro.build/en/guides/content-collections/
- Markdown in Astro: https://docs.astro.build/en/guides/markdown-content/
- Astro RSS: https://docs.astro.build/en/guides/rss/

## Writing Posts

Blog posts are Markdown files in `src/data/blog`. Use the frontmatter schema defined in `src/content.config.ts`.

### Post Assets

Store images and other assets in `public/assets/` (or a subfolder like `public/assets/posts/<slug>/`) and reference them from Markdown with `/assets/...` paths. The Markdown files themselves live in `src/data/blog/`.

Example:

```md
![Architecture diagram](/assets/posts/grounded-rag-chatbot-wordpress-real-mvp/architecture.png)
```

## Deployment

Published with Netlify: https://www.netlify.com/
