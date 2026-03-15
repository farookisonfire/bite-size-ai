# Semantic Search: Finding What You Mean, Not What You Typed

*Keyword search matches words. Semantic search matches meaning.*

---

You search for "how to fix a broken pipe." You get results about tobacco pipes.

Keyword search is doing exactly what it was built to do: find documents containing your words. It has no idea what you meant. It only knows what you typed.

That gap has been a quiet frustration for a long time. Semantic search closes it.

## The Limits of Matching Words

Keyword search is a counting exercise. It scans for your terms, ranks by frequency and placement, and returns the closest matches. Fast and predictable, but blind to meaning.

"Cheap flights" and "affordable airfare" are the same idea to any reader. To a keyword engine, they're unrelated. Search for one, miss the other.

## Meaning as a Place in Space

Semantic search works differently: instead of comparing words, it compares meaning by placing everything in the same space.

Every piece of text, your query, your documents, individual sentences, gets converted into a vector, which is a point in a high-dimensional space. Text that carries similar meaning ends up near each other. "Cheap flights" and "affordable airfare" land in almost the same spot.

Think of a library where books aren't shelved alphabetically, but by how similar they feel. Books about grief, longing, and loss cluster in the same corner, even if they share no words. Semantic search works the same way. Your query gets placed in that space, and the results are whatever is nearby.

## How It Actually Works

1. Your query goes through an embedding model, which converts it into a vector.
2. Every document in the index has already been embedded the same way.
3. The engine finds documents whose vectors are closest to yours, measured by distance.

The embedding model is the key piece. Trained on vast amounts of text, it learns that "fix" and "repair" are neighbors, that "dog" is close to "puppy," and that "broken pipe" in a plumbing context is far from tobacco.

## You've Already Used This

Semantic search is built into tools you already rely on. When you describe a function in plain language and GitHub Copilot finds the right one, that's semantic search at work. When Perplexity surfaces a relevant result that doesn't contain your exact words, same idea. Notion AI, most modern document search, many support tools — it's everywhere.

## The One-Line Version

Keyword search asks: does this document contain these words?

Semantic search asks: does this document mean something similar to what I'm asking?

Think of it as a geometry problem. Queries and documents are points. Relevance is distance. Once that picture is in your head, the rest falls into place.

---

## Edit Notes
- Removed all em dashes; replaced with colons, commas, or restructured sentences
- Removed contrastive negation ("a distance calculation, not a word count" rewritten as "measured by distance")
- Tightened subtitle
- Sharpened opening paragraph
