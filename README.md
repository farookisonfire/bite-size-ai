# BiteSizeAI AI Writing System

This repository contains the tools and workflows used to generate articles for the **BiteSizeAI Substack** using Claude **Skills** and **MCP tools**.

The architecture follows a simple principle:

> **MCP tools interact with external systems. 
> Skills perform reasoning and orchestrate the editorial workflow.**

This separation keeps the system modular, reliable, and easy to evolve.

## Core Design Principle

### MCP Tools → External Systems

MCP tools are used when the AI needs to interact with **external systems** or perform **operational tasks**.

Typical responsibilities:

- fetching posts from Substack
- syncing the local post archive
- calling external APIs
- ingesting and saving data locally

MCP tools should be:

- deterministic
- small and focused
- operational rather than interpretive

Examples:

```text
refresh_post_archive
fetch_post
Skills → Reasoning & Workflow

Skills define how the system thinks and performs tasks.

They encode:

editorial workflows

reasoning steps

sequencing of operations

writing style rules

Skills operate primarily on local files and context, not external APIs.

Examples:

archive-context-builder
post-architect
draft-writer
post-editor
publish-bitesizeai-article
System Architecture

External systems are accessed through MCP tools, while Skills orchestrate the writing process.

Editorial Pipeline

A new article is generated through the following stages:

This pipeline is orchestrated by the meta skill:

publish-bitesizeai-article <topic>

Example:

publish-bitesizeai-article embeddings
Local Archive Strategy

Substack posts are stored locally in markdown form.

archive/
  substack/
    embeddings.md
    rag-basics.md
    vector-search.md

The local archive enables:

referencing previous posts

avoiding repeated explanations

maintaining consistent voice and analogies

building context for new articles

The archive is refreshed via MCP tools.

Repository Structure
skills/
  archive-context-builder/
  post-architect/
  draft-writer/
  post-editor/
  publish-bitesizeai-article/

docs/
  bitesizeai-style-guide.md

archive/
  substack/

context/

posts/
  architectures/
  drafts/
  finals/

mcp/
  server.py
Typical Workflow
1. Sync the Substack archive
refresh_post_archive

This updates:

archive/substack/
2. Generate a new article
publish-bitesizeai-article <topic>

Example:

publish-bitesizeai-article embeddings

Pipeline output:

posts/finals/<slug>.md
Design Philosophy

This system intentionally separates responsibilities:

Responsibility	Layer
External data access	MCP tools
Reasoning and orchestration	Skills
Content storage	Local files

This keeps the system:

simple

predictable

modular

easy to extend

Future Extensions

Potential MCP tools:

publish_to_substack
fetch_ai_research
generate_diagram

Potential skills:

visual-brief-generator
social-post-generator
newsletter-packager

Because the architecture separates tools from reasoning, these additions can be made without redesigning the system.

Summary

MCP tools handle external systems.

Skills handle reasoning and workflow orchestration.

This structure creates a reliable AI-assisted writing pipeline for BiteSizeAI.