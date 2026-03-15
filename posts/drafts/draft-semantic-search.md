# Semantic Search: Finding What You Mean, Not What You Typed

*How AI-powered search understands intent instead of just scanning for keywords*

---

You search for "how to fix a broken pipe." You get results about tobacco pipes.

This is keyword search doing exactly what it was designed to do — find documents that contain your words. It has no idea what you meant. It only knows what you typed.

That mismatch has been a quiet frustration for decades. Semantic search is the fix.

## The Problem With Matching Words

Keyword search is fundamentally a counting exercise. It scans documents for your terms, ranks by frequency and placement, and returns the closest matches. It's fast and predictable.

But meaning doesn't follow that pattern. "Cheap flights" and "affordable airfare" mean the same thing to any reader, but a keyword engine treats them as completely different queries. If the document uses one phrase and you search for the other, you get nothing.

## Meaning as Location in Space

Here's the shift that makes semantic search click: instead of comparing words, it compares meaning by placing everything in the same space.

Every piece of text — your query, every document, every sentence — gets converted into a vector, which is just a point in a high-dimensional space. Words and phrases that carry similar meaning end up near each other. "Cheap flights" and "affordable airfare" resolve to almost the same location.

Think of a library where books aren't shelved alphabetically, but by how similar they feel. Books about grief, longing, and loss end up in the same corner, even if they share no words. Semantic search works that way. Your query gets placed in the same space as all the documents, and the results are whatever is nearby.

## How It Works

When you run a semantic search:

1. Your query is passed through an embedding model, which converts it into a vector.
2. Every document in the index has already been embedded the same way.
3. The search engine finds the documents whose vectors are closest to your query vector — a distance calculation, not a word count.

The embedding model is the key piece. It's trained on enormous amounts of text, so it learns that "fix" and "repair" are neighbors, that "dog" is close to "puppy," and that "broken pipe" in the context of plumbing is far from tobacco.

## Where You've Already Seen This

Semantic search is already built into tools you use. Notion AI, Perplexity, GitHub Copilot, and most modern document search features use some form of it. When you describe a function in natural language and Copilot finds the right one, that's semantic search at work. When Perplexity surfaces a relevant result that doesn't contain your exact words, same idea.

## The Simple Version

Keyword search asks: does this document contain these words?

Semantic search asks: does this document mean something similar to what I'm asking?

Once you see it as a geometry problem — queries and documents as points, relevance as distance — the rest follows naturally.
