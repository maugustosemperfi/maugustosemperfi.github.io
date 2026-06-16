---
title: 'The First MCP I Actually Needed'
description: 'We work with MCPs all day, but building one for myself was different because it came from a real need.'
pubDate: '2026-06-16'
---

We hear the word MCPs everywhere nowadays. Slack, Atlassian, Figma, Flutter, you name it. Sometimes an MCP is necessary. Sometimes it creates an unnecessary burden in the process.

A Model Context Protocol can be anything you want connected to anything you need to serve your agent. Sometimes the right MCP is just a glorified shell script with better manners.

However, most of the time I don't need an MCP to work. In fact, it can make my job harder. It can fill up context faster, take wrong turns, and become an unfortunate issue if you don't put enough care into it.

I don't think every workflow needs an MCP. Actually, I think most don't.

But this one did.

## How I convinced myself I needed my own MCP

I've already talked about the `/handoff` skill I've built to export notes based on important bits of the current agent iteration.

Those notes are stored into a vault and I use them every single day to get back context from an older iteration.

- That work that I did last week and now needs someone's attention? Search in the vault.
- That feature that was shipped and now needs a revert? Search in the vault.
- That bugfix I've applied and would be turned into a post in an engineering channel? Search in the vault.

All that work was already in the vault. Still, I was using the good and old `copy path` and `paste path` into the current agent's iteration so the agent could get context on the work without me having to explain everything.

It was manual. Almost dumb enough to be automated.

The notes are really powerful, they have graphs, links, references, open questions, etc.

I got back to work this week and was like: man, I need to make my agents smarter. A MCP was born right at that point.

The MCP does one thing: it lets the agent search and read my handoff notes without me becoming the clipboard between both systems.

### Building it

That was the easy part, to be honest. Creating and developing an MCP is as easy as creating a Node.js server that serves data from endpoints.

In a couple of hours I had this project already working and ready to be used by CC and Cursor.

### The outputs

The results are still coming in. This is the first week that I've been using the project, but I'm already impressed.

Before, I had to remember when I worked on something, search for the right note, copy the path, paste it into the agent, and then explain why that context mattered.

Now I can just type: read the note regarding the X issue.

### The future problems

I have no idea how to maintain an MCP, as this is my first one, but one thing I'm sure: I don't want it to be like Google's or Atlassian's, where they have 30+ tools consuming all of my context tokens just to hand me back a tiny piece of paper.

MCPs, as I understand them, should be boring, small, and critical. If they are not saving context, time, or thinking, they are probably just another thing to maintain.

Note: I'm not sure if I'll expose the project due to some PIIs, but I'll try.
