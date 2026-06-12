# Content Plan

A running list of post ideas. Reorder freely. Move to `src/content/blog/` when ready to write.

Format: **Title** — angle / thesis / why it's worth writing.

---

## AI / agents / skills (the differentiator)

1. **Skills are not prompts** — opener. What I learned from using, borrowing, and curating agent skills. The `description` field matters more than the body. Workflows > checklists. Curation matters more than folder size. **Published 2026-06-02.**

2. **The triggering problem** — why most skills never load when they should. Anatomy of a `description` that the model can actually match against. Worked examples of bad vs. good.

3. **Orchestrating agents without losing your mind** — sub-agents, tracer-bullet plans, when to spawn a fresh context vs. when to grind it out in the main one. The cost of context bloat.

4. **From PRD to merged PR with a single command** — walking through the `write-a-prd` → `prd-to-plan` → `prd-to-issues` chain. The lesson: agents are good at refining structured artifacts, bad at inventing them.

5. **Tool design vs. skill design** — when to write a tool, when to write a skill, and the rare cases when you want both. Spoiler: tools for verbs, skills for workflows.

6. **The harness is the product** — opencode, Claude Code, Cursor, etc. are not LLM frontends; they're constraint engines. What this means for how you build on top of them.

7. **What a UX-focused skill library looks like** — teardown of `arrange`, `colorize`, `typeset`, `polish`. Why design feedback is one of the highest-ROI applications of skills today.

8. **Things I deleted from my skills folder** — the failures. What I thought would work and didn't. (Honest post-mortem builds more credibility than victory laps.)

## Clojure / large systems (the day job)

9. **A year of Clojure at scale** — what surprised me, what didn't. (Vague enough to write whenever something concrete clicks.)

10. **Datafy/nav for incident debugging** — practical pattern that doesn't get enough airtime.

11. **The cost of dynamic typing on a 200-person codebase** — not a hot take, an actual reckoning. malli, schemas, what discipline replaces the compiler.

## Personal tools / fintech

12. **I built my own fatura reader because banks won't ship APIs** — story of `fatura-reader`. Tesseract vs. LLM OCR. What broke. What I'd do differently.

13. **A finance dashboard for one user (me)** — `home-control-backend` + Flutter. Why building software for an audience of one is the best way to learn product taste.

14. **Capital gains in Brazil, automated** — the `capital-gain` project. Tax code as a programming exercise.

## Flutter / mobile

15. **Flutter for tools nobody else will use** — why the framework wins for solo, internal apps even though it loses for app-store consumer apps.

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

## Sim racing (the wildcard)

16. **iRacing telemetry into a SimHub dashboard** — `iracing-simhub-dashboard` writeup. C# DLL compilation pain. The joy of a niche audience that actually reads.

17. **What sim racing taught me about UI density** — surprising design lessons from glance-and-go dashboards that you can apply to dev tools.

## Meta / workflow

18. **Why I'm finally writing publicly** — a *very* short post (300–500 words) to set the tone, link from the about page, and stop the "should I have an intro post" question from blocking the others.

19. **My opencode setup** — `~/.config/opencode/`, `~/.agents/skills/`, conventions, plugins. Useful for anyone setting up their own.

---

## Cadence

Targeting **one post every 2 weeks** for the first 3 months. Better to publish 6 honest posts than 0 perfect ones.

## Order to write in

1. _Skills are not prompts_ (already drafted)
2. _Why I'm finally writing publicly_ (short, easy second post — momentum)
3. _The triggering problem_ (extends the first, builds a series)
4. _What I deleted from my skills folder_ (vulnerability builds trust)
5. _I built my own fatura reader_ (proves the blog isn't just AI takes)
