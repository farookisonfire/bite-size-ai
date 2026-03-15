---
name: draft-post
description: Reads a BiteSizeAI post plan markdown file and turns it into a full Substack draft in a clear, calm, intuitive voice.
disable-model-invocation: false
allowed-tools: Read, Write
argument-hint: [topic]
---

Read the provided BiteSizeAI plan file and write a full Substack draft based on it.

## Goal

Given a topic, find the associated post plan

`posts/plans/plan-<topic>.md`

write a draft to:

`posts/drafts/draft-<slug>.md`

## Style Guide
Before writing, review the style guide: `./references/style-guide.md`
The draft must follow the BiteSizeAI tone and writing principles defined in the guide.

## BiteSizeAI Voice

Write in a style that is:
- calm
- clear
- thoughtful
- educational
- accessible to curious technical readers

Always:
- explain intuition before formal mechanism
- keep paragraphs relatively short
- define technical language lightly when needed
- use analogies naturally
- make the reader feel that the idea is understandable

Avoid:
- hype
- buzzwords
- forced cleverness
- academic density
- overexplaining obvious points
- em dashes
- excessive negation

## Draft Requirements

The draft should include:
- title
- optional subtitle
- opening hook
- clear flow from confusion to understanding
- analogy integrated naturally
- practical example
- meaningful ending

Length target:
- 300 to 500 words unless the source notes strongly suggest otherwise

## Instructions

1. Read the post plan file carefully.
2. Preserve the post angle, audience, and thesis.
3. Use the outline as the main spine of the piece.
4. Incorporate the analogy and suggested visuals where appropriate.
5. Write a polished first draft suitable for Substack.
6. Save the output to:

`posts/drafts/draft-<slug>.md`

Use the same slug as the source architecture file.
