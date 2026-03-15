# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BiteSizeAI is an editorial content platform for making AI concepts accessible. It uses a three-stage skill-based workflow to produce short, clear posts (300–500 words) on modern AI topics.

## Editorial Workflow

Content moves through three stages via Claude Code skills:

```
/plan-post [topic]   → posts/plans/plan-<slug>.md
/draft-post [topic]  → posts/drafts/draft-<slug>.md
/edit-post [topic]   → posts/final/final-<slug>.md
```

File naming: `<stage>-<lowercase-hyphenated-slug>.md`

## Skills

- **`/plan-post`** — Identifies the angle, audience, core question, analogy, outline, and 1–3 visual suggestions for a given topic.
- **`/draft-post`** — Reads the plan and writes a full 300–500 word first draft following the style guide.
- **`/edit-post`** — Reads the draft and polishes for clarity, hook, flow, title, subtitle, and ending.

Skill definitions live in `.claude/skills/`. The shared style guide is at `.claude/skills/references/style-guide.md`.

## Voice & Style (from style-guide.md)

**Preferred post structure:** Hook → Question → Intuition → Analogy → Mechanism → Example → Why It Matters → Closing

**Always:**
- Lead with intuition before mechanics
- Use short paragraphs and plain language
- Ground abstractions in real-world analogies and concrete examples

**Never:**
- AI hype phrases: "revolutionary", "unlock", "transform", "game-changer"
- Em dashes, contrastive negation ("not only...but also")
- Academic or startup marketing tone
- LLM writing patterns (e.g., "Based on...", "In conclusion...")
