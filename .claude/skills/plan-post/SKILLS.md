---
name: plan-post
description: Turns a BiteSizeAI topic into a clear post architecture with angle, audience, outline, analogy, and suggested visuals, then writes it to a markdown file.
disable-model-invocation: false
allowed-tools: Write
argument-hint: [topic]
---

Create a structured BiteSizeAI post plan for the user's topic.

The user will provide a topic such as:
- embeddings
- vector similarity
- RAG
- tokenization
- transformers
- tool calling

Your task is to think like a strong editorial architect, not a full draft writer.

## Goal

Turn the topic into a markdown file named:

`posts/plans/plan-<slug>.md`

The markdown file must follow this exact structure:

# Post Plan: <Topic>

## Topic
<topic>

## Working Title
<working title>

## Audience
<audience>

## Post Angle
<single strongest angle>

## Core Question
<central question>

## Thesis
<main takeaway>

## Hook
<opening hook idea>

## Outline
1. ...
2. ...
3. ...

## Analogy
<best analogy>

## Suggested Visuals
- ...
- ...
- ...

## Notes For Draft Writer
<guidance for the next stage>

## Style Guide
Before writing, review the style guide: `./references/style-guide.md`
Follow the editorial voice and writing philosophy described there.

## Instructions

1. Identify the strongest single angle for the topic.
2. Frame the audience clearly.
3. State the core question and thesis.
4. Create a concise but strong outline.
5. Include one strong analogy.
6. Suggest 1-3 visuals that would help the reader understand the concept.
7. Add a short notes section for the draft writer.
8. Save the result to `posts/architectures/post-architecture-<slug>.md`.

The slug should be lowercase and hyphenated.
