---
author: Victor Sesma
pubDatetime: 2026-01-11T01:00:00Z
title: Designing a grounded RAG chatbot for a content-heavy WordPress site
slug: grounded-rag-chatbot-wordpress-real-mvp
featured: true
draft: false
tags:
  - backend-architecture
  - ai-systems
  - rag
  - case-studies
description: Lessons learned while building a production-oriented, grounded RAG chatbot for a real content-heavy WordPress site.
---

As a software engineer, it is important to have side hassles that lead you to experiment and learn new stuff. So I tried to join one of my passions that is to travel to my home city Alicante with a business.

## What is AlicanteAbout.com?

I created AlicanteAbout.com thinking that it would be a website that would win SEO positions in Google and generates traffic that would create ads revenue.

For years I have been creating new content, making photos, handwriting all my posts... until getting into a position where alicanteabout.com has a lot of content.

But in the era of AI, a content website is not enough. People are using less and less Google search, it will just trust AI to get what they are looking for.

I wanted to create a solution for that. I wanted to have a website where people could just access top information about Alicante without having to trust random AIs or specialized chat GPTs.

That's how this project is born having a RAG chatbot it's the perfect solution for keeping people in my website and offering the best experience on answering all their questions about Alicante in a modern way.

## Design Goals and Constraints

AI can be tricky to deploy consciously.So there are several decent GOLA constraints that I wanted to achieve.

- All answers must be grounded on the website content, not model training.
- The model should not hallucinate. Zero tolerance to hallucinations.
- In every answer I should add the source linking to my blog posts.
- Whatever I build, it must be compatible with WordPress as Alicantabot.com backend is a WordPress.
- I wanted to have a small corpus and avoid extra complexity for this chatbot.
- Of course, the chat needs to be fast, efficient and keep cost down.
- The website should be GDPR-complianced.

## What I didn't Want to Build

It was also important to have in mind what not to build. It's very easy to lose focus on larger projects so this list is as important.

- A generic chatbot with generic answers.
- A heavy plugin from WordPress having the responsibility of everything.
- I didn't want to add extra complexity like having a vector database for now, as the project is not big enough for that.
- a system that will sound confident but is impossible to verify therefore adding the sources in each answer

## So What's The High Level Architecture?

So for this MVP I wanted to have an easy manual pipeline. No overengineering and get the feel of the process before any larger automatization.

So the offline architecture to create the corpus is based on:

### Export the data from WordPress

We needed offline access to the data, so the best way to achieve that was to export all the articles and all the websites with the URLs from the WordPress website, so offline we could take care of curating the data.

This process was quite simple. A simple Go script will use the WordPress API (`/wp-json/wp/v2/posts` and `/wp-json/wp/v2/pages`) and export all the articles and pages. This generates a json with information such as the url, title, and content.


### Clean the data

The previous script would download all the data in HTML format, but we don't want to serve any HTML on the chat, so this raw data needs cleaning up.

So in the above script, before saving to the JSON, we have a cleaning function that delets things like `<divs>`, `<style>`, etc. leaving a clean text without any HTML tags.

### Starting the AI Magic ✨

