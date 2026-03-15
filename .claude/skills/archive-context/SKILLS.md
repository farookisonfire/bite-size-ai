---
name: archive-context
description: Reads the local Substack archive and produces a context brief for a given topic, noting covered ground, used analogies, established terminology, and relevant connections to inform the plan stage.
disable-model-invocation: false
allowed-tools: Read, Write, Glob
argument-hint: [topic]
---

Read the local archive and produce a context brief for the given topic.

## Goal

Given a topic, read all posts in `archive/` and write a context brief to:

`posts/context/context-<slug>.md`

The brief should inform the `/plan-post` stage — helping it avoid repetition, build on prior posts, and stay consistent with established voice and terminology.

## Instructions

1. Use Glob to list all files in `archive/`.
2. Read each archived post.
3. Identify what is relevant to the given topic.
4. Write the context brief to `posts/context/context-<slug>.md`.

The slug should be lowercase and hyphenated, derived from the topic.

## Context Brief Structure

The output file must follow this exact structure:

# Archive Context: <Topic>

## Covered Ground
<Concepts and topics already explained in prior posts that overlap with this topic. Be specific — note which post covered what.>

## Analogies Already Used
<List analogies used in prior posts so the plan avoids repeating them.>

## Established Terminology
<Key terms defined in prior posts and how they were framed. New posts should stay consistent.>

## Relevant Connections
<Prior posts the new post could naturally reference or build on. Include the post title and a one-line note on the connection.>

## Assumed Knowledge
<What the reader likely already knows from prior posts. The new post can skip re-explaining these.>

## Gaps & Opportunities
<Angles or ideas that haven't been covered yet and could make this post distinctive.>

## Notes For Planner
<Short guidance for the /plan-post stage based on the above.>
