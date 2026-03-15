# Archive Context: Retrieval Augmented Generation

## Covered Ground

- **Vectors** — explained what a vector is (a list of numbers representing a data point's location in space), introduced dimensionality, and established why vector representation enables comparison
- **Data Lives In Space** — introduced the foundational idea of abstract space, embedding data into it, and how spatial proximity carries meaning
- **Distance** — explained distance as a measure of similarity between vectors; used a patient health dataset to make it concrete; noted that different distance measures exist
- **Similarity Search** — explained how distance enables search; introduced nearest neighbors; noted that similarity depends on how it's measured; listed applications including document retrieval
- **How Semantic Search Actually Works** — explained how text is embedded into vectors, how queries and documents share the same space, and how semantic search finds meaning-based matches rather than keyword matches; introduced the embedding model as the key piece

## Analogies Already Used

- **Library where books are shelved by feel** (semantic search post) — books about grief, longing, and loss cluster together even without shared words
- **Address in space** (vectors, distance posts) — a vector is a data point's address; neighbors are other data points close by
- **Empty room with coordinates** (data lives in space) — three-dimensional room to build intuition for abstract space
- **Patients in a health dataset** (vectors, distance posts) — recurring example used across multiple posts to illustrate embedding and distance

## Established Terminology

- **Vector** — a list of numbers representing a data point's coordinates in space
- **Dimensionality** — the number of values in a vector; how many dimensions the space has
- **Embedding** — placing data into abstract space; also used as a verb ("gets embedded")
- **Distance** — a number expressing how far apart two vectors are; proxy for similarity
- **Similarity search** — finding the nearest data points to a query point
- **Nearest neighbors** — the closest data points in the space
- **Semantic search** — similarity search applied to meaning; uses an embedding model to convert text to vectors
- **Embedding model** — the model that converts text into vectors, trained to place similar meanings nearby

## Relevant Connections

- **How Semantic Search Actually Works** — directly relevant; RAG relies on semantic search to retrieve documents. The post explains the retrieval half of RAG in detail. The new post can reference this and build on it.
- **Similarity Search** — RAG's retrieval step is a similarity search. Can be referenced as the mechanism underneath.
- **Vectors** — RAG stores documents as vectors in a vector database. Already fully explained; can be assumed knowledge.

## Assumed Knowledge

The reader can be assumed to understand:
- What a vector is and how data is embedded into space
- That distance measures similarity
- How similarity search finds nearby points
- How semantic search works at a high level (query → embedding → nearest match)

The post does **not** need to re-explain any of these. It can use the terms freely and briefly gesture at the earlier posts if helpful.

## Gaps & Opportunities

- **What happens after retrieval** — no post has addressed what an LLM does with retrieved documents. This is the "augmented generation" half of RAG and is completely open ground.
- **Why LLMs need external memory** — the context window limitation and why models don't "know" recent or private information hasn't been covered.
- **The pipeline as a whole** — query → retrieve → inject into prompt → generate. The full loop hasn't been shown anywhere.
- **Vector databases** — mentioned implicitly in semantic search but never named or explained as a component.
- **The grounding problem** — why LLMs hallucinate without retrieval, and how RAG addresses it, is untouched.

## Notes For Planner

The heavy lifting — vectors, embeddings, similarity search, semantic search — is already done. The reader arriving at a RAG post has strong foundations to build on.

The opportunity is to focus on what's new: the idea that retrieval can act as a memory system for an LLM, and how connecting search to generation produces something more reliable than a model alone. The analogy space around "open book exam" or "giving the model a cheat sheet" is unused and fits well. Avoid re-explaining semantic search in detail — a single sentence reference is enough.
