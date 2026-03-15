# Vectors

**Published:** Mon, 02 Feb 2026 04:24:24 GMT
**URL:** https://bitesizeaihq.substack.com/p/vectors
**Subtitle:** How data points become coordinates

---

[![](https://substackcdn.com/image/fetch/$s_!RiVF!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd32c3d19-aa88-44f9-8974-b6e71ee7c53f_1536x1024.png)](https://substackcdn.com/image/fetch/$s%5F!RiVF!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd32c3d19-aa88-44f9-8974-b6e71ee7c53f%5F1536x1024.png)

In my previous post, **“Data Lives in Space,”** we imagined data living inside a three dimensional space. The precise location of each data point in that space is captured by a list of numbers. That list is called a **vector**.

A vector is a series of numbers that describes a data point’s location in space.

Each individual value in the series represents the data point’s position along a particular dimension. Taken together, the full vector specifies the exact coordinates of a data point in an N-dimensional space.

Let’s return to our simple patient health example.

Suppose a patient has the following values:

* age: 42
* weight: 180
* height: 72

We can represent this patient as a vector:

\[42, 180, 72\]

To locate this patient in our abstract space, we move along the “age” axis by 42, the “weight” axis by 180, and the “height” axis by 72.

The vector _is_ the coordinate. It answers a simple but fundamental question:

**Where is this data point located?**

In our health data example, each vector has three dimensions, which allows us to visualize the space. But vectors can have many more dimensions. A vector with ten values describes a point in a ten-dimensional space. A vector with one thousand values describes a point in a thousand-dimensional space.

The number of values in a vector is called its **dimensionality**, and it tells us how many dimensions the space has.

So why does this matter?

Why does it matter that data points are represented as vectors in a space?

It matters because once data is represented as vectors, we can begin to compare them. We can ask whether two data points are close together or far apart. This idea of distance between datapoints is a powerful concept in machine learning, unlocking methods like:

* clustering - which points are close enough to form a group?
* classification - which group is a point closest to?
* recommendation - which items are most similar to?
* anomaly detection - which points are unusually far from all other points?

---

Thanks for reading BiteSizeAI! Subscribe for free to receive new posts and support my work.