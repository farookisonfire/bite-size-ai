# How Semantic Search Actually Works

**Published:** Sat, 14 Mar 2026 22:48:43 GMT
**URL:** https://bitesizeaihq.substack.com/p/how-semantic-search-actually-works
**Subtitle:** Why modern search engines compare meaning instead of words.

---

[![](https://substackcdn.com/image/fetch/$s_!D_As!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F60f64866-ab6a-46ba-8fc6-2b23406c2d50_1536x1024.png)](https://substackcdn.com/image/fetch/$s%5F!D%5FAs!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F60f64866-ab6a-46ba-8fc6-2b23406c2d50%5F1536x1024.png)

Let’s say you search for “how to fix a broken pipe.” You get results about tobacco pipes.

Keyword search is doing exactly what it was built to do: find documents containing your words. It has no idea what you _meant_. It only knows what you typed.

This is the problem that semantic search solves.

\## The Limits of Matching Words

Keyword search is basically a counting exercise. It scans for your terms, ranks by frequency and placement, and returns the closest matches. Fast and predictable, but blind to meaning.

“Cheap flights” and “affordable airfare” are the same idea to any reader. But to a keyword engine, they’re unrelated. If you search for one, you might miss the other.

\## Meaning as a Place in Space

Semantic search works differently: instead of comparing words, it compares meaning by placing everything in the same space.

Every piece of text, your query, your documents, individual sentences, gets converted into a vector, which is a point in a high-dimensional space. Text that carries similar meaning ends up near each other. “Cheap flights” and “affordable airfare” land in almost the same spot.

Think of a library where books aren’t shelved alphabetically, but by how similar they feel. Books about grief, longing, and loss cluster in the same corner, even if they share no words. Semantic search works the same way. Your query gets placed in that space, and the results are whatever is nearby.

\## How It Actually Works

1\. Your query goes through an embedding model, which converts it into a vector.

2\. Every document in the index has already been embedded the same way.

3\. The engine finds documents whose vectors are closest to yours, measured by distance.

The embedding model is the key piece. Trained on vast amounts of text, it learns that “fix” and “repair” are neighbors, that “dog” is close to “puppy,” and that “broken pipe” in a plumbing context is far from tobacco.

Keyword search asks: does this document contain these words?

Semantic search asks: does this document mean something similar to what I’m asking?