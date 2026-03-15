# Data Lives In Space

**Published:** Sun, 01 Feb 2026 03:21:34 GMT
**URL:** https://bitesizeaihq.substack.com/p/data-lives-in-space
**Subtitle:** How machine learning organizes data

---

[![](https://substackcdn.com/image/fetch/$s_!B_JQ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69c5cb92-d466-463c-9d5e-acc104922c6b_1536x1024.png)](https://substackcdn.com/image/fetch/$s%5F!B%5FJQ!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69c5cb92-d466-463c-9d5e-acc104922c6b%5F1536x1024.png)

Let’s start at the foundation.  
The building blocks.  
**Data.**

One of the simplest and most intuitive ways to think about data is as rows in a spreadsheet.

Each row represents a data entry, and each column represents a property of that data.

In machine learning, however, it’s useful to think about data slightly differently.

Instead of rows in a table, data is organized into an **abstract space**, where each column of the spreadsheet becomes an axis of the space, and each row becomes a point within it.

To build intuition, it helps to imagine this abstract space as having three dimensions, because that’s something we can easily visualize.

So let’s imagine an empty room.

The room is filled with empty space, and any point inside it can be identified by a set of coordinates: (x, y, z).

Now imagine we have a dataset containing patient health information. We’ll focus on three features:

* age
* weight
* height

These three features define the axes of our space. Each patient in the dataset can now be represented as a single point in the room. Their exact location is determined by their age, weight, and height. In this way, each data entry is **embedded** into the space.

When data is organized this way, something significant emerges. Where a point appears, and how close it is to other points, carries meaning. In our simple example, patients with similar characteristics will tend to cluster together, while very different patients will appear farther apart.

With only three features per patient, the meaning inferred from these spatial relationships is trivial. But with dozens, hundreds, or even thousands of features, those relationships become far more meaningful. We can’t visualize such high-dimensional spaces, but the core idea remains the same.

In many ways, machine learning is the art of finding useful structure in the abstract space in which our data lives.

---

Thanks for reading BiteSizeAI! Subscribe for free to receive new posts and support my work.