---
author: Victor Sesma
pubDatetime: 2026-01-11T01:00:00Z
title: Why I’m writing about backend systems and applied AI
slug: why-i-write-about-backend-and-applied-ai
featured: true
draft: false
tags:
  - backend-architecture
  - ai-systems
  - case-studies
description: Notes on why this site exists, what I plan to write about, and how I think about backend systems and applied AI.
---

I’ve worked on backend systems long enough to notice a pattern:  
most of the interesting problems don’t live in frameworks or syntax. They live in **constraints**, **trade-offs**, and **failure modes**.

This site exists to document those parts.

## What I’m interested in

I care about backend systems that are:
- understandable in production
- observable when things go wrong
- owned by someone who can explain why decisions were made

Lately, this has led me to spend more time thinking about how AI changes backend architecture—not in abstract terms, but in very concrete ones: where it helps, where it breaks, and where it introduces new risks.

## Why applied AI is different from demos

There’s a big gap between an AI demo and an AI system you can trust.

In real systems:
- inputs are messy
- users ask the wrong questions
- data is incomplete
- and failures are rarely obvious at first

I’m interested in designs where AI is **constrained**, **auditable**, and often **kept in the loop with humans**.  
If a system can’t explain its behavior or fail safely, it doesn’t belong in production.

## What you’ll find here

This is not a tutorial blog and not a marketing site.

You’ll mostly find:
- short technical notes
- architecture write-ups
- case studies from real or realistic projects
- explicit discussion of limitations and mistakes

Some posts will be about backend fundamentals.  
Some will be about AI-assisted systems.  
Most will be about how those two worlds intersect.

## Why write at all

Writing forces clarity.

If I can’t explain a design decision clearly, I probably don’t understand it well enough. Publishing these notes helps me think better—and, hopefully, helps others facing similar problems.

If that sounds useful, you’re in the right place.