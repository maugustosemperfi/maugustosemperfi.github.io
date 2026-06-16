---
title: 'Skills are not prompts'
description: 'A note on what I learned from using, borrowing, and curating agent skills: the useful part is not the prose, it is the operational boundary.'
pubDate: '2026-06-02'
---

Since the era of agentic development started, I've been really curious about what skills are capable of. 

At the start I was asking myself: Are they a workflow? Are they a repetitive task that can be summarized in a command?

Turns out that to me they can be anything I need them to. Anything!

Let me walk you through the ones that stuck, the ones I actually use, and what they taught me about what makes a skill worth keeping.

## The Handoff skill

At work, I've built a skill called handoff that, at the end of each interaction with an agent (or subagents), can generate a handoff note based on my preferences. This note is added to my vault, which I can see through obsidian. 

What I do with the notes and the information that is present there is my gold mine. My skill can track persons that were tagged in the session, tasks, projects, channels and tag each one of them in the note. The skill will also export only the important bits of the session and summarise them into the note.

This is highly helpful, it can track the work I've done, the work I'm doing and the work I'll do later.

- Have some unfinished work and want to punch the clock? Handoff and work the next day.
- Need to search for something you've done earlier? Search on the vault.
- Will build your brag document to show your manager you're working hard? Use the notes.

Honestly, it's a simple and one of the best skills I've been using so far.

## The simple ones

Skills can also be simple workflows that we've been doing on a daily basis and have to repeat our work over and over again.

### /create-pr

At Nu, we have more than thousands of repositories. Every time I finish work with an agent, I'll also ask it to create and push commits, and then create the pull request. However, it can get messy sometimes to create PRs. The agent very often doesn't follow a repo's template, or rules to not add a `Created with Claude Code` as a signature. A skill can solve that, by simply invoking /create-pr. It already saved me tons of typing the same thing over and over.

### /daily-brief

It's really easy to miss a message, a thread, a mention on our platform. My team is a decentralized team, taking care of one important service at Nubank. We're tagged everywhere.

I also have some issues on not answering some people, but just because I did lose the message. This was frustrating and was really bothering me.

Well, a /daily-brief can be used either at the start of the day or at the end of the day. Really simple skill, but useful.


## The automated ones

I think I could put these ones in the simple ones topic. At the end of the day, it's simple to run them in an automated workflow. Any agentic tool can do that for you, but I wanted a special topic for them.

### The Review skill

Our part of the project is critical and shouldn't ever be broken in any part at all. No system should, but you get the point.

We receive at maximum 3 reviews per day in our repos, including our own teammates. But they are usually very dense and contain too much information to be seen in a couple of minutes.

But then, I used the knowledge and crafted a /pr-review skill, spent some hours to figure out what would be the best practice for this one and... I've automated it to run at 10am every day and send messages to a channel that I'm part of. Every morning, the agent gives me a summary of what's happening in the repo. It was good. Actually good.

