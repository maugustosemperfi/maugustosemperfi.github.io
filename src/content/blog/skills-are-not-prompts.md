---
title: 'Skills are not prompts'
description: 'A note on what I learned from using, borrowing, and curating agent skills: the useful part is not the prose, it is the operational boundary.'
pubDate: '2026-06-01'
---

I have a `~/.agents/skills/` folder with a bunch of skills in it.

That sentence sounds more impressive than it should. Most of those skills are not sacred artifacts I hand-carved from first principles. Some are mine, some are adapted, some came from other agents, some are installed helpers, and some are probably still sitting there because the experiment moved faster than the cleanup.

This is worth saying out loud because it is very easy, when writing about agent workflows, to accidentally turn a folder listing into a personality test. "I have 24 skills" is not the interesting part. The interesting part is what happens after you stop treating skills as clever prompts and start treating them as operational boundaries.

That is the useful lesson so far:

**A skill is not a better paragraph. It is a small contract for when and how an agent should change behavior.**

## The description is the front door

The first thing a skill has to do is get selected.

Before the body matters, before the workflow matters, before the lovingly written examples matter, the harness has to decide whether this skill belongs in the current task. In most setups, that decision is made from a small surface area: the skill name and description.

That makes the description less like marketing copy and more like an API boundary.

Bad descriptions say what the skill hopes to produce:

> Improves designs and makes them better.

Useful descriptions say when the skill should be used:

> Use when the user mentions spacing, hierarchy, alignment, crowded UI, or layout feeling off.

That difference sounds tiny until you have several skills that all vaguely promise to improve a frontend. Then the model is choosing between mushy overlapping vibes. A trigger list gives it something concrete to match against.

This is one of the reasons I no longer judge a skill by how impressive its body looks. A beautiful body behind a vague description is a locked room.

## The body should be procedure, not vibes

The second failure mode is writing a skill like a motivational poster:

> Be thoughtful. Consider tradeoffs. Produce high-quality work. Pay attention to details.

None of that is wrong, exactly. It is just not very operational.

The skills that help me most tend to say things in the shape of a workflow:

1. Inspect the existing project.
2. Identify the highest-risk mismatch.
3. Make the smallest useful change.
4. Verify it in the relevant environment.
5. Report what changed and what remains uncertain.

That is less glamorous than a wall of taste words, but it gives the agent rails. The point is not to make the model smarter. The point is to remove ambiguity around what "do the work" means in this particular context.

## Curation matters more than authorship

The embarrassing part of this post is also the point of it: a skills folder can become messy fast.

If you install skills, copy skills, ask agents to write skills, and keep experimenting, the folder stops representing "things I authored" and starts representing "things currently available to the agent." Those are different claims.

That distinction matters.

When I use a skill for real work, I care about a few practical questions:

- Does it trigger only when it should?
- Does it push the agent toward a repeatable workflow?
- Does it make verification more likely?
- Does it preserve my taste and intent, or does it replace them with generic confidence?
- Can I explain why it exists in one sentence?

If the answer is no, I do not need to pretend the skill is part of my grand system. It can be deleted, renamed, rewritten, or left as a borrowed utility with no mythology attached.

## Skills are closer to tools than takes

The temptation is to make skills sound like opinions:

> Here is my philosophy of frontend polish.

But the useful version is closer to a tool:

> When polishing a UI, inspect spacing, alignment, responsive behavior, text fit, and interaction feedback. Make concrete edits. Verify with screenshots.

That is why "skills are not prompts" still feels like the right title to me. A prompt asks for an answer. A skill changes the working procedure.

The difference shows up in the output. Prompt-shaped skills produce essays. Procedure-shaped skills produce work you can inspect.

## What I am trying to get better at

I am still figuring out the line between a good skill library and a junk drawer with YAML frontmatter.

Right now my bias is:

- Keep fewer skills.
- Make each one easier to trigger correctly.
- Prefer explicit workflows over taste soup.
- Treat borrowed or generated skills as dependencies, not identity.
- Delete anything that only says "think harder."

That last one is the big lesson. The model does not need a skill that gives it permission to be intelligent. It needs context, constraints, checks, and a clear next move.

The craft is not collecting skills. The craft is making the agent easier to steer.
