# maugustosemperfi.github.io

Personal site and blog at [maugustosemperfi.github.io](https://maugustosemperfi.github.io). Built with [Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

## Local dev

```sh
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Writing a post

1. Create `src/content/blog/<slug>.md` (or `.mdx`).
2. Frontmatter:
   ```yaml
   ---
   title: 'Post title'
   description: 'One-sentence summary used in lists, RSS, and social cards.'
   pubDate: 'YYYY-MM-DD'
   # updatedDate: 'YYYY-MM-DD'   # optional
   # heroImage: '../../assets/foo.jpg'   # optional, relative to the file
   ---
   ```
3. Write. Commit. Push. The workflow at `.github/workflows/deploy.yml` builds and ships it.

## Where things live

- `src/pages/index.astro` — landing page
- `src/pages/about.astro` — about
- `src/pages/blog/` — blog index + dynamic post pages
- `src/content/blog/` — markdown posts
- `src/content.config.ts` — frontmatter schema
- `src/components/` — Header, Footer, BaseHead, FormattedDate, HeaderLink
- `src/layouts/BlogPost.astro` — per-post layout
- `src/consts.ts` — site title, description, social links
- `CONTENT_PLAN.md` — running list of post ideas

## Moving to Vercel later

The site is plain Astro static output. To migrate:

1. Import the repo on Vercel — auto-detects Astro, no config needed.
2. Disable or delete `.github/workflows/deploy.yml`.
3. Drop `site` from `astro.config.mjs` (or update it to the new domain).
4. If/when you need SSR or API routes, add `@astrojs/vercel`.
