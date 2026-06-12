# Site Revamp Spec — maugustosemperfi.github.io

**Role of this file:** implementation spec for a coding agent. The planning was done in a
separate session with Marcos; every decision below is final unless marked `[TODO-MARCOS]`.
Do not re-litigate decisions. Do not invent facts about Marcos.

**How to execute:** phases are ordered and independently shippable. Run one phase per
session if context gets tight. Tick the checkboxes as you complete tasks. Each phase ends
with the verification steps in §10. Commit per phase (conventional, descriptive messages).

---

## 0. Ground rules (hard constraints — read first)

1. **Never edit blog post content.** `src/content/blog/skills-are-not-prompts.md` body and
   frontmatter prose must not change — not even typos. Marcos writes all blog posts and TIL
   entries himself. You may add *new frontmatter fields* to the schema, but do not add them
   to this existing post.
2. **No internal Nubank codenames or details anywhere** (no internal repo names, project
   codenames, team names, colleague names, internal metrics). Public-safe framing only:
   "design system", "i18n pipeline", "release tooling", "mobile platform" are fine.
3. **No invented personal facts.** Where a fact is unknown, use the literal marker
   `[TODO-MARCOS: …]` in the source so he can grep for it. Never replace a marker with a guess.
4. **Marcos is not an "ex-frontend" developer.** He is a mobile engineer who still actively
   loves and does web work. Copy must never frame frontend as past-only.
5. **Preserve the design language:** Fraunces + Instrument Sans + JetBrains Mono, the warm
   paper OKLCH palette, big editorial headlines, restrained motion, `--ease-out-quint`.
   This is a refinement, not a redesign.
6. **Accessibility bar stays:** `prefers-reduced-motion` honored for every new animation,
   `:focus-visible` styles, semantic HTML, 44px touch targets, proper ARIA only where needed.
7. **No new runtime frameworks.** Vanilla TS/JS in Astro components only. Build-time
   dependencies (fontsource, astro-og-canvas, pagefind) are allowed and specified below.
8. **No AI attribution anywhere** — no `Co-Authored-By: Claude`, no "Generated with" in
   commits, code comments, or page footers.
9. **URLs must not break:** `/`, `/blog/`, `/blog/skills-are-not-prompts/`, `/about/`,
   `/rss.xml` keep working.
10. After each phase: `npm run build` must pass with zero errors.

---

## 1. Decisions already made (do not re-open)

| Topic | Decision |
|---|---|
| Identity | Mobile engineer at Nubank (Flutter). Frontend is a continuing love, not a past. Clojure years are history → live in About/timeline only. |
| Hero H1 | Keep the current headline text. Only eyebrow, lede, and signal list change. |
| Primary CTA | "Read the notes" → `/blog`. GitHub secondary, Email ghost. Remove "See the work". |
| "Selected work" | Stays, reframed as "things that are live" — NOT a portfolio. Cards: Fatura Reader, Acordo, cli-dm, Agent notebook. **Remove the Portfolio tracker card.** |
| Fatura Reader truth | The web app is live and public; the source code is private. Copy must say exactly this. |
| Work-modes tabs | Killed. All three threads visible at once (3-col grid desktop, stacked mobile). Tab JS removed. |
| Three threads | Mobile (day work), Web (first love, still home), Agents (current obsession). |
| Accent semantics | Teal `--color-accent` = everything interactive. Rust `--color-rust` = editorial labels only (eyebrows, type labels, badges). Homepage post-link hover switches rust → accent. |
| Status dot | Removed entirely (element, CSS, keyframes). |
| "37 public repos" | Number dropped (the whole signal list is rewritten anyway). |
| Container | One container system site-wide: `1180px` max + `var(--space-4)` side padding, shared by header, footer, and all pages. Prose pages center a `68ch` column inside it. |
| Dark mode | Yes — warm dark variant, `data-theme` attribute, toggle in header, no-FOUC inline script, OS preference default. |
| Analytics | GoatCounter, gated behind a const; renders nothing until configured. |
| /now page | Dropped. Currency lives in the hero signal list + About. |
| Timeline | On the About page. Plain version in Phase 1, animated upgrade in Phase 5. |
| LinkedIn | Placeholder const, empty by default; rendered in JSON-LD `sameAs` + About contact only when filled. |
| Fonts | Self-hosted via Fontsource. Google Fonts `<link>`s removed. Unused Atkinson woffs deleted. |
| OG images | Build-time generated (astro-og-canvas): branded default card + per-post cards. Placeholder JPGs deleted. |
| i18n | EN default at root, PT-BR under `/pt/`. UI chrome translated by agent; posts only ever translated by Marcos. Last phase, own session. |
| New pages | `/craft`, `/colophon`, `/til`, `404`. Header nav: Home, Writing, Craft, About. Footer picks up Colophon, TIL, RSS. |

---

## 2. Phase 1 — Repositioning & copy (P0)

The site currently describes a Clojure backend engineer. Marcos is a mobile engineer.
This phase fixes every surface that states identity. Copy below is final draft — apply it
verbatim except where `[TODO-MARCOS]` markers appear (leave those markers in the source).

### 2.1 Hero (`src/pages/index.astro`)

- [ ] Eyebrow: `Marcos Augusto / Brazil / Mobile engineer at Nubank`
- [ ] H1: unchanged.
- [ ] Lede: `Flutter in production by day, web and TypeScript whenever I can, and a growing lab of agent skills, harnesses, and orchestration patterns.`
- [ ] Buttons: primary `Read the notes` → `/blog`; secondary `GitHub` (unchanged URL); ghost `Email` (unchanged). Remove `See the work`.
- [ ] Signal list (`<dl>`) becomes:
  - `Current` → `Nubank — mobile engineering, Flutter at scale`
  - `Always` → `The web: UI craft, motion, interfaces that feel right`
  - `Exploring` → `Agent infrastructure and eval harnesses`
- [ ] Remove the status dot (`.status-dot`, `@keyframes pulse`, related markup).

### 2.2 Work modes → three visible threads (`src/pages/index.astro`)

- [ ] Replace the tabs with a static 3-column grid (desktop ≥900px), stacked cards below.
      Delete the tab markup, tab CSS, and the tab-switching `<script>` block (keep the
      IntersectionObserver reveal script).
- [ ] Each thread card keeps the existing visual language (eyebrow, Fraunces title, copy,
      tag list) but smaller title size than the old single panel (`clamp(1.8rem, 3vw, 2.6rem)` range —
      three must fit side by side).
- [ ] Section kicker stays: eyebrow `What you get here`, title `Three threads, one engineer.`
- [ ] Thread content:
  1. **Mobile** — eyebrow `Day work` — title `Mobile foundations that other engineers build on.` —
     copy `At Nubank I work on the mobile platform: the design system, internationalization pipeline, and release tooling behind an app used by tens of millions of people. [TODO-MARCOS: verify/tighten this sentence]` —
     tags `Flutter`, `Design systems`, `Mobile platform`
  2. **Web** — eyebrow `First love, still home` — title `The web is where I learned to care about interfaces.` —
     copy `Years of frontend before mobile, and it never left. I still build for the web, obsess over motion and clean UI, and treat every page as a chance to make something feel right.` —
     tags `TypeScript`, `React`, `Next.js`, `Motion`
  3. **Agents** — eyebrow `Current obsession` — title and copy unchanged from the current
     "Agents" tab — tags unchanged.

### 2.3 Selected work (`src/pages/index.astro`)

- [ ] Remove the `Portfolio tracker` card from the `projects` array.
- [ ] Replace the section note with: `Not a portfolio — just the things I've shipped that are live right now, plus the notebook where I write about the rest. Some source is private; the products speak for themselves.`
- [ ] Card type labels change to: Fatura reader → `Live product`; Acordo → `Live product`;
      cli-dm → `Open source`; Agent notebook → `Writing`.
- [ ] Fatura reader copy: `A client-side app for parsing Brazilian credit card PDFs, comparing months, and detecting recurring charges — financial data never leaves the browser. The app is live and free; the source stays private.`
- [ ] Other card copy unchanged.

### 2.4 About rewrite (`src/pages/about.astro`)

Replace the article body with the structure below (keep the page shell, prose styling approach):

- [ ] Lead: `I'm Marcos Augusto, a software engineer based in Brazil. I work at Nubank as a mobile engineer, building in Flutter on the platform layer of an app that serves tens of millions of customers. Before mobile I spent years in frontend — and a stretch in Clojure on large backend systems [TODO-MARCOS: verify order and rough years] — which is why I care equally about how things look and whether they survive production.`
- [ ] Second paragraph (nights/weekends) — keep current spirit, updated: `By night and weekend I build small things — finance trackers, expense readers, sim-racing telemetry dashboards, home tooling — and increasingly, agent infrastructure on top of opencode and Claude Code, including cli-dm, a public tracker that turns Claude Code sessions into a map of agents, tasks, and milestones.` (keep existing links for opencode, cli-dm, Nubank)
- [ ] Private-work paragraph — rewrite, removing ALL codenames (`home-controle`, `fechar-negocio`, `capital-gain` must disappear): `Not all meaningful work fits a public GitHub profile. Some products are live while their source stays private — Fatura Reader is one — and my day job ships inside a private monorepo. I write about the problems, product decisions, and engineering tradeoffs instead of linking to code.`
- [ ] New section `## The story so far` — a simple vertical list (this becomes the animated
      timeline in Phase 5). Era entries (use semantic `<ol>`, each with period, heading, one
      sentence):
  1. `[TODO-MARCOS: years]` — **Frontend years.** `Building for the web at [TODO-MARCOS: companies/context]. Where the UI taste comes from.`
  2. `[TODO-MARCOS: years]` — **Nubank, large systems.** `Clojure in production for tens of millions of customers. [TODO-MARCOS: verify]`
  3. `[TODO-MARCOS: years]` — **Nubank, mobile.** `Flutter, the design system, internationalization, releases — the platform layer other engineers build on.`
  4. `2025 →` — **The agents thread.** `Skills, harnesses, orchestration — running alongside everything else. [TODO-MARCOS: verify start year]`
- [ ] `## What this blog is` — keep intro sentence. Bullets become:
  - **Mobile and design systems.** `Flutter at scale, design tokens, i18n, release engineering — written generically, no employer internals.`
  - **Agent skills, harnesses, orchestration.** (keep current copy)
  - **Personal tools.** (keep current copy, minus any codenames)
  - **Sim racing.** (keep current copy)
  - (Clojure bullet: fold into a closing line `Plus the occasional war story from the Clojure years.`)
- [ ] `## Stack I reach for` — `Flutter / Dart, TypeScript, React, Next.js, Clojure, Python, Postgres. Whatever the problem actually wants.`
- [ ] `## Get in touch` — keep; add LinkedIn link rendered only if `SOCIAL.linkedin` is non-empty.

### 2.5 Site description (`src/consts.ts`, blog index header)

- [ ] `SITE_DESCRIPTION` → `Notes on mobile engineering, design systems, agent skills and harnesses, and the small tools I build to make my own life easier.`
- [ ] Blog index `page-description` and the homepage writing section keep using this string or
      matching copy — update `src/pages/blog/index.astro` description text to the same sentence.
- [ ] Add to `src/consts.ts`: `linkedin: ''` inside `SOCIAL` with a `[TODO-MARCOS: add LinkedIn URL]` comment.

### 2.6 CONTENT_PLAN.md update

- [ ] Mark idea #1 (`Skills are not prompts`) as **published 2026-06-02**.
- [ ] Append a new section after the Flutter section (keep everything else intact):

```markdown
## Mobile / design systems (the day job, written safely)

All of these are written generically — patterns and tradeoffs, no employer internals,
no codenames, no team or colleague names.

20. **Design tokens at scale** — what it takes for a design system to serve hundreds of
    engineers: token versioning, breaking changes, and who pays for migration.
21. **i18n is not a string file** — validating translations in CI, copy/image consistency,
    and what breaks when dozens of teams localize at once.
22. **Backend-driven UI on mobile** — the real tradeoffs of server-driven components:
    contracts, versioning, testing, and when it's worth it.
23. **Upgrading Flutter when the blast radius is huge** — how to validate a framework bump
    across a monorepo with hundreds of packages.
24. **From frontend to mobile** — what transfers (taste, layout instincts, state thinking)
    and what doesn't (lifecycles, threading, release trains).
25. **The release train** — why mobile ships on rails, and the discipline it forces that
    web deploys never did.
26. **What makes an app feel fast** — startup time, time-to-interactive, and the metrics
    nobody agrees on.
```

---

## 3. Phase 2 — Layout & UI fixes (P0)

### 3.1 Unified container

- [ ] Add to `:root` in `src/styles/global.css`: `--container-max: 1180px;`
- [ ] Header nav (`Header.astro`), footer content (`Footer.astro`), homepage `main`, blog
      index `main`, blog post layout, about page, and all new pages use
      `max-width: var(--container-max)` with the same `var(--space-4)` side padding, so the
      logo and content edges align on every page.
- [ ] Prose pages (about, blog posts): the container is full-width; the prose column inside
      is `max-width: 68ch; margin-inline: auto;`.
- [ ] Remove the global `main { max-width: 720px }` rule in favor of the container system
      (adjust pages that relied on it).

### 3.2 Blog post layout redesign (`src/layouts/BlogPost.astro`)

This is the most-shared page; bring it up to the homepage's standard.

- [ ] `heroImage` block renders **only when the image exists** (no empty div, no dead gap).
- [ ] New article header, inside the prose column: rust eyebrow line with
      `<FormattedDate>` + ` · ` + reading time (`Math.max(1, Math.round(words/220))` computed
      from `post.body` — pass it in from the page, or compute from the slot-less body via the
      rendering page `src/pages/blog/[...slug].astro`) + maturity badge when present (Phase 5
      adds the field; render conditionally now) — then the `<h1>` in Fraunces at
      `clamp(2.5rem, 5vw, 4rem)`, line-height 1.02 — then the post `description` as a lede
      paragraph in `--color-text-secondary` — then a border-bottom divider.
- [ ] `updatedDate` renders as `Last tended <date>` in the eyebrow line when present.
- [ ] Post footer after the content: divider, then a row with `← All notes` (to `/blog`) and
      an RSS link; then a compact author card (avatar, one-liner
      `Mobile engineer at Nubank. I write about mobile, the web, and agent infrastructure.`,
      links to About / GitHub / X) using the same border/elevated-bg card language as the site.
- [ ] Width/spacing: use the unified container + 68ch prose column. Delete the starter-era
      `main { width: calc(100% - 2em) }` styling.

### 3.3 Writing index (`src/pages/blog/index.astro`)

- [ ] Replace the image-dependent featured-card layout with a clean uniform list matching the
      homepage post-list language: title (Fraunces), date (tabular-nums), description capped
      at 62ch, border-top dividers. No images until posts actually have heroes.
- [ ] Hover state uses `--color-accent` (not rust). Keep the subtle translateX.

### 3.4 Hero type scale (`src/pages/index.astro`)

- [ ] H1 `font-size: 7.2rem` → `clamp(3.25rem, 9vw, 7.2rem)`; remove the now-redundant
      fixed-size overrides in the 900px/560px media queries (keep `max-width: 11ch`).
- [ ] Section kicker `h2` (`4rem`) → `clamp(2.35rem, 5vw, 4rem)`; remove matching overrides.

### 3.5 Accent semantics

- [ ] Homepage `.post-link:hover` color: `var(--color-rust)` → `var(--color-accent)`.
- [ ] Audit: rust appears only on eyebrows/labels/badges; teal on all links, hovers, focus
      rings. Fix any other stragglers found.

---

## 4. Phase 3 — Brand, meta & platform plumbing (P1)

### 4.1 Self-hosted fonts

- [ ] Add `@fontsource-variable/fraunces`, `@fontsource/instrument-sans` (400/500/600),
      `@fontsource/jetbrains-mono` (400/500). Import in `global.css` (or BaseHead).
- [ ] Remove the three Google Fonts `<link>` tags from `BaseHead.astro` (keep nothing
      pointing at fonts.googleapis.com / fonts.gstatic.com).
- [ ] Delete `src/assets/fonts/atkinson-bold.woff` and `atkinson-regular.woff`.
- [ ] Verify italic Fraunces still renders (the variable package includes ital axis — if not,
      add the italic variant package).

### 4.2 Self-hosted avatar

- [ ] Download the current GitHub avatar (`https://avatars.githubusercontent.com/u/26628274?v=4`)
      to `src/assets/marcos.jpg` (one-time `curl` during implementation is fine).
- [ ] Hero portrait and the new post-footer author card use Astro `<Image>` with that asset.
      No remaining hotlinks to githubusercontent.

### 4.3 Favicon

- [ ] Replace the Astro template favicon with a simple monogram SVG: `MA` set in a serif
      (system serif is fine inside SVG, or outlined paths), dark text `oklch(20% 0.01 60)` on
      warm paper `oklch(98% 0.005 60)`, rounded-square background. Provide light/dark-aware
      version via `prefers-color-scheme` inside the SVG. Regenerate `favicon.ico` if practical;
      otherwise keep `.ico` as-is and ensure the SVG takes precedence.

### 4.4 OG images (build-time)

- [ ] Add `astro-og-canvas`. Generate:
      - Default site card: name `Marcos Augusto`, line `Mobile engineer · web · agents`,
        warm paper bg, dark Fraunces-style serif title, rust accent rule.
      - Per-post cards at `/og/blog/<slug>.png`: post title (max ~3 lines), site name footer.
- [ ] `BaseHead.astro`: replace the `blog-placeholder-1.jpg` default with the generated
      default card; post pages pass their generated card. The `image` prop should accept a
      URL path (adjust the current `ImageMetadata`-typed prop accordingly).
- [ ] Delete `src/assets/blog-placeholder-*.jpg` (all five) and `blog-placeholder-about.jpg`.
- [ ] Verify with `npm run build` that OG URLs resolve in `dist/`.

### 4.5 Structured data & meta

- [ ] `BaseHead.astro` gains an optional `type` prop (`'website' | 'article'`, default
      website) → `og:type`; article pages also emit `article:published_time` (and
      `article:modified_time` when `updatedDate` exists).
- [ ] JSON-LD `Person` on `/` and `/about/`: name, `jobTitle: 'Mobile Engineer'`
      `[TODO-MARCOS: confirm exact title]`, `worksFor: Nubank`, `url`, `sameAs` built from
      `SOCIAL` (github, twitter, linkedin-if-set).
- [ ] JSON-LD `BlogPosting` on post pages: headline, description, datePublished,
      dateModified, author Person, image (OG card URL).

### 4.6 DRY socials

- [ ] `Header.astro` and `Footer.astro` read URLs from `SOCIAL` in `consts.ts` instead of
      hardcoding.

### 4.7 Analytics (GoatCounter)

- [ ] Add `ANALYTICS = { goatcounterCode: '' }` to `consts.ts` with
      `[TODO-MARCOS: create GoatCounter account, set code]` comment.
- [ ] `BaseHead.astro`: when `goatcounterCode` is non-empty, render the GoatCounter script
      (`data-goatcounter="https://<code>.goatcounter.com/count" src="//gc.zgo.at/count.js" async`).
      Renders nothing when empty.

### 4.8 Custom 404

- [ ] `src/pages/404.astro`: site shell (Header/Footer), huge Fraunces `404`, line
      `This page doesn't exist — but the notes do.`, links to Home and Writing. Subtle reveal
      animation consistent with the site; reduced-motion safe.

---

## 5. Phase 4 — Dark mode (P1)

Prerequisite: tokenization. Several components hardcode OKLCH literals.

- [ ] Sweep `index.astro` (profile panel gradient/grid, tag-list bg, mode-card borders,
      shadows, post-link colors), `Header.astro` (header bg `oklch(98% … / 0.85)`, hover bg),
      `Footer.astro`, `global.css` (`::selection`) — move every hardcoded oklch literal into
      named tokens in `:root` (e.g. `--color-panel-grad-a/b`, `--color-chip-bg`,
      `--color-header-bg`, `--shadow-card`, `--color-selection`).
- [ ] Define the dark palette under `[data-theme='dark']` — a **warm dark**, not neutral
      gray: bg ≈ `oklch(16% 0.012 60)`, elevated ≈ `oklch(20% 0.012 60)`, text ≈
      `oklch(92% 0.008 60)`, secondary/tertiary stepped down, borders ≈ `oklch(32% 0.012 60)`,
      accent teal lightened for contrast (≥4.5:1 on bg), rust lightened similarly, leaf kept.
      Panel gradient and chips get dark equivalents. Tune until AA contrast holds for body,
      secondary text, and links.
- [ ] Default follows OS (`prefers-color-scheme`) when no stored choice; explicit choice
      stored in `localStorage('theme')`.
- [ ] Inline pre-paint script in `<head>` (BaseHead) sets `data-theme` before first render —
      no flash.
- [ ] Header toggle button: sun/moon SVG, `aria-label`, sits with the social icons; visible
      on mobile too (don't hide it with the socials).
- [ ] Smooth transition: brief `background-color/color` transition on the root during toggle
      (skip under reduced motion). If trivially available in this Astro version, wrap the
      toggle in a View Transition; otherwise the CSS transition is enough — don't overbuild.
- [ ] Code blocks: configure Shiki dual themes in `astro.config.mjs`
      (`markdown.shikiConfig.themes = { light: 'vitesse-light', dark: 'vitesse-dark' }` or
      similar warm pairing) and the corresponding CSS so blocks follow the theme.
- [ ] OG cards stay light (no change).

---

## 6. Phase 5 — New pages & features (P2)

### 6.1 `/craft` — interaction studies

The site claims taste; this page proves it. Studies are code artifacts (agent-built is fine).

- [ ] New page `src/pages/craft.astro`: kicker eyebrow `Craft`, title
      `Small interactions, taken seriously.`, intro line
      `Studies in motion and UI feel — the kind of details I care about in real products. Dependency-free, view-source friendly.`
- [ ] Grid of study cards; each study is a self-contained Astro component in
      `src/components/craft/` with scoped CSS + vanilla JS, dark-mode aware via tokens,
      reduced-motion safe (must degrade to a static but usable state).
- [ ] Ship three studies:
      1. **Segmented control** — iOS-style sliding indicator with spring easing (a nod to
         mobile work). Keyboard accessible (arrow keys), `role="radiogroup"` semantics.
      2. **Magnetic button** — cursor-proximity attraction + press states; on touch devices
         falls back to a satisfying press animation.
      3. **Card stack** — swipeable/droppable stack with physics-feel transforms; pointer
         events, works with mouse drag and touch.
- [ ] Each card shows: study title, one-line note on what it demonstrates, and a
      `View source` link to the component file on GitHub
      (`https://github.com/maugustosemperfi/maugustosemperfi.github.io/blob/main/...`).
- [ ] Add `Craft` to header nav (Home, Writing, Craft, About).

### 6.2 About timeline upgrade

- [ ] Promote the Phase-1 "story so far" list into a designed vertical timeline: era markers
      on a connecting line, period label in mono, Fraunces era titles, one-sentence copy,
      staggered scroll-reveal per era (reuse the IntersectionObserver pattern). Keep the
      `[TODO-MARCOS]` markers in the copy untouched.
- [ ] Reduced motion: all eras visible, no transforms.

### 6.3 `/colophon`

- [ ] New page `src/pages/colophon.astro` describing how the site is built and maintained.
      Draft copy (Marcos reviews before it's linked prominently — still ship the page):
      - Stack: Astro, content collections, GitHub Pages, no client framework.
      - Type: Fraunces, Instrument Sans, JetBrains Mono (self-hosted).
      - Workflow: `This site is planned in working sessions with coding agents: a planning pass produces a spec, an implementation agent executes it phase by phase, and I review everything that ships. The blog posts are different — those are written entirely by me. [TODO-MARCOS: review this page's copy]`
      - Link to `SPEC.md` on GitHub as the artifact of that workflow.
- [ ] Link `Colophon` in the footer (not the header). Footer also gains `TIL` and keeps RSS.

### 6.4 `/til` — stream

- [ ] New content collection `til` in `src/content.config.ts`: schema
      `{ title: string, pubDate: coerce.date, tags: string[].optional() }`, loader over
      `src/content/til/*.md`.
- [ ] Page `src/pages/til.astro`: kicker `TIL`, title `Today I learned.`, entries rendered
      full-body inline (they're a paragraph each), grouped by month, newest first.
- [ ] Empty state (there will be zero entries): `Nothing here yet — the first TIL lands when it lands.`
- [ ] **Write no TIL content.** Create the directory with a `.gitkeep` or a commented
      example file showing frontmatter format only (clearly marked as a template, excluded
      from the glob via leading underscore, e.g. `_template.md`, and pattern updated to
      ignore underscore files).

### 6.5 Garden maturity badges

- [ ] Blog schema: add `maturity: z.enum(['seedling', 'budding', 'evergreen']).optional()`.
- [ ] Badge component: small pill (rust-bordered, editorial — not interactive-colored) with
      the maturity word; tooltip/title text: seedling `rough, fresh thinking`, budding
      `taking shape`, evergreen `stable, kept current`.
- [ ] Rendered in the post header eyebrow line and next to titles on `/blog` and the
      homepage post list — only when the field exists. Do **not** add the field to the
      existing post.

### 6.6 Command palette + search

- [ ] Add Pagefind indexing (`astro-pagefind` integration or a postbuild `pagefind --site dist` step wired into `npm run build`).
- [ ] Command palette component (vanilla TS, `<dialog>`-based) available on every page:
      - Open: `⌘K` / `Ctrl+K`, and a small `⌘K`-hinted search button in the header.
      - Sections: **Pages** (Home, Writing, Craft, About, Colophon, TIL), **Actions**
        (Toggle theme, Copy email — with a copied confirmation, Open GitHub, Open X),
        **Search** (Pagefind results as you type, posts and pages, with excerpts).
      - Keyboard: arrows to move, Enter to commit, Esc to close; focus trapped; focus
        returns to trigger on close; `aria` per the combobox/listbox pattern, kept simple.
      - Styling: tokens, elevated card, works in both themes. In dev mode (no Pagefind
        index) the search section degrades gracefully with a note; pages/actions still work.

---

## 7. Phase 6 — i18n PT-BR (P3 — run as its own session)

Bounded scope; do not let this phase sprawl.

- [ ] `astro.config.mjs`: `i18n: { defaultLocale: 'en', locales: ['en', 'pt'], routing: { prefixDefaultLocale: false } }`.
- [ ] `src/i18n/ui.ts`: typed string dictionary for ALL chrome (nav labels, section kickers,
      footer, 404, palette labels, empty states, badge words, date locale). EN strings are
      the current copy; agent drafts the PT-BR translations of **chrome only** (this is UI
      copy, allowed). Natural Brazilian Portuguese, not literal translation.
- [ ] PT page shells under `src/pages/pt/` mirroring: home, blog index, about, craft, til,
      colophon, 404. Shared layout components take a `locale` prop (default `'en'`) and read
      strings from the dictionary — no duplicated component logic.
- [ ] Blog content: posts gain optional `lang: z.enum(['en','pt']).default('en')` and
      optional `translationOf: z.string().optional()` (slug of the counterpart).
      EN list shows `lang === 'en'`; `/pt/blog/` shows `lang === 'pt'` with an empty state
      (`Ainda nada por aqui — os posts em português estão a caminho.`) since none exist yet.
      **Never translate or write posts.**
- [ ] Language switcher in the header (`EN / PT`): links to the same page in the other
      locale; for a post with `translationOf`, links to the counterpart; otherwise to the
      other locale's nearest hub (home or blog index).
- [ ] `hreflang` alternate tags in BaseHead for pages that exist in both locales;
      `<html lang>` correct per locale.
- [ ] Homepage hero/threads/projects copy for PT: translate the chrome and section titles;
      for body copy paragraphs, translate faithfully (site copy, not blog content).
- [ ] RSS remains EN-only at `/rss.xml` (add nothing else for now).
- [ ] Existing EN URLs unchanged.

---

## 8. Out of scope (explicitly)

- `/now` page — decided against.
- Webmentions / comments.
- Newsletter.
- Backlinks between posts (only one post exists).
- Editing any blog post content, including grammar (Marcos-only).
- Exposing Obsidian notes or any personal vault content.
- Any internal Nubank references.

## 9. Items only Marcos can resolve (leave the markers in source)

Grep target: `TODO-MARCOS`

1. LinkedIn URL (`consts.ts`).
2. Exact job title for JSON-LD.
3. Timeline eras: years, companies, ordering of frontend/Clojure phases.
4. Mobile thread copy verification (2.2).
5. GoatCounter account + site code (`consts.ts`).
6. Colophon copy review (6.3).
7. (Writing, separately: the next blog posts — agent never does this.)

## 10. Verification (run at the end of every phase)

1. `npm run build` — zero errors, zero warnings introduced by your changes.
2. `npx astro preview` (or check `dist/`) and confirm:
   - `/`, `/blog/`, `/blog/skills-are-not-prompts/`, `/about/`, `/rss.xml` all render.
   - Header logo and content left edges align on every page (Phase 2+).
   - No remaining requests to `fonts.googleapis.com`, `fonts.gstatic.com`, or
     `avatars.githubusercontent.com` (Phase 3+): `grep -ri "googleapis\|gstatic\|avatars.github" src/ dist/ --include='*.html' | head`.
   - No blog-placeholder assets referenced (Phase 3+).
   - OG meta points at generated images (Phase 3+): check `dist/blog/skills-are-not-prompts/index.html`.
   - Theme toggle: no FOUC on hard reload in both themes (Phase 4+).
   - `prefers-reduced-motion`: emulate and confirm craft studies/timeline/palette stay usable (Phase 5+).
   - `git grep -n "TODO-MARCOS"` — markers still present (none silently resolved).
3. `git grep -ni "co-authored-by\|generated with" -- ':!SPEC.md'` returns nothing.
4. Commit with a descriptive conventional message; one commit (or a few logical ones) per phase.
