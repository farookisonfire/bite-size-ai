# BiteSizeAI Writing System

This repository contains the tools and workflows used to generate articles for the **BiteSizeAI Substack** using Claude **Skills** and **MCP tools**.

The architecture follows a simple principle:

> **MCP tools interact with external systems.**
> **Skills perform reasoning and orchestrate the editorial workflow.**

This separation keeps the system modular, reliable, and easy to evolve.

---

## Core Design Principle

### MCP Tools → External Systems

MCP tools are used when the AI needs to interact with **external systems** or perform **operational tasks**.

Typical responsibilities:

- Fetching posts from Substack
- Syncing the local post archive
- Calling external APIs
- Ingesting and saving data locally

MCP tools should be deterministic, small and focused, and operational rather than interpretive.

Examples:

```
refresh_article_archive
```

### Skills → Reasoning & Workflow

Skills define how the system thinks and performs tasks. They encode editorial workflows, reasoning steps, sequencing of operations, and writing style rules.

Skills operate primarily on local files and context, not external APIs.

Examples:

```
/archive-context
/plan-post
/draft-post
/edit-post
```

---

## Editorial Pipeline

A new article moves through four stages:

```
/archive-context [topic] → posts/context/context-<slug>.md
/plan-post [topic]       → posts/plans/plan-<slug>.md
/draft-post [topic]      → posts/drafts/draft-<slug>.md
/edit-post [topic]       → posts/final/final-<slug>.md
```

`/archive-context` reads the local Substack archive and produces a context brief — noting covered ground, used analogies, established terminology, and gaps. `/plan-post` reads this brief before planning so each new post builds on rather than repeats what's already been published.

---

## Local Archive Strategy

Published Substack posts are stored locally in markdown form:

```
archive/
  how-semantic-search-actually-works.md
  vectors.md
  ...
```

The local archive enables:

- Referencing previous posts
- Avoiding repeated explanations
- Maintaining consistent voice and analogies
- Building context for new articles

The archive is refreshed via the `refresh_article_archive` MCP tool.

---

## Repository Structure

```
.claude/
  skills/
    archive-context/
    plan-post/
    draft-post/
    edit-post/
    references/
      style-guide.md

archive/          ← synced from Substack via MCP

posts/
  context/        ← archive context briefs
  plans/
  drafts/
  final/

mcp/
  server.js
  tools/
    refresh-archive.js
  utils/
    rss.js
```

---

## Design Philosophy

| Responsibility         | Layer       |
|------------------------|-------------|
| External data access   | MCP tools   |
| Reasoning & workflow   | Skills      |
| Content storage        | Local files |

This keeps the system simple, predictable, modular, and easy to extend.

---

## Future Extensions

Potential MCP tools:

- `publish_to_substack`
- `fetch_ai_research`
- `generate_diagram`

Potential skills:

- `/social-post`
- `/newsletter-package`

Because the architecture separates tools from reasoning, these additions can be made without redesigning the system.
