# Post Plan: Semantic Search

## Topic
Semantic search

## Working Title
Semantic Search: Finding What You Mean, Not What You Typed

## Audience
Software engineers and curious builders who've used keyword search their whole careers and are encountering AI-powered search for the first time. They know search, but don't know why the "new" kind works so differently.

## Post Angle
Contrast keyword search with semantic search to reveal the insight: the shift is from matching words to matching meaning.

## Core Question
Why does searching "cheap flights" sometimes miss a result that says "affordable airfare" — and how does semantic search fix that?

## Thesis
Semantic search works by converting queries and documents into vectors (points in space), then finding the closest matches by meaning rather than by exact words. Once you see it as a geometry problem, it clicks.

## Hook
You search for "how to fix a broken pipe." You get results about tobacco pipes. Classic keyword search doesn't know what you mean — it only knows what you typed.

## Outline
1. The problem with keyword search — it matches tokens, not intent
2. The intuition shift — meaning as location in space
3. How it works — embed the query and documents, then measure distance
4. A concrete example — "affordable airfare" vs "cheap flights" resolve to the same neighborhood
5. Where semantic search shows up in real systems
6. Why it matters and when to use it

## Analogy
Think of a library where every book is placed not alphabetically, but by how similar it feels to every other book. Books about heartbreak, longing, and loss all end up in the same corner — even if they never share a single word. Semantic search works the same way: your query gets placed in the same space as all the documents, and you find what's nearby.

## Suggested Visuals
- A 2D scatter plot showing query vector and document vectors as points, with a circle indicating the "nearest neighbors"
- A side-by-side comparison: keyword search returns nothing for "affordable airfare" when the doc says "cheap flights"; semantic search finds it
- A simple pipeline diagram: Query → Embedding Model → Vector → Distance Search → Results

## Notes For Draft Writer
- Lead with the frustration of keyword search — readers will immediately recognize the experience
- Don't over-explain embeddings (that's its own post); just enough to make the geometry intuition land
- The library analogy is the emotional center of the post — give it room
- Avoid the word "semantic" in the first paragraph; earn it by the time you introduce it
- Keep the mechanism section light — no math, just the idea that queries and docs live in the same space
- End on a practical note: this is already in tools they use (Notion AI, GitHub Copilot, Perplexity)
