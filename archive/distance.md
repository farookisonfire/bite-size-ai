# Distance

**Published:** Tue, 03 Feb 2026 22:14:06 GMT
**URL:** https://bitesizeaihq.substack.com/p/distance
**Subtitle:** Measuring Similarity In Space

---

[![](https://substackcdn.com/image/fetch/$s_!mT-I!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34098822-deeb-4253-9a31-84a2263b5102_1536x1024.png)](https://substackcdn.com/image/fetch/$s%5F!mT-I!,f%5Fauto,q%5Fauto:good,fl%5Fprogressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F34098822-deeb-4253-9a31-84a2263b5102%5F1536x1024.png)

In my previous post on **[Vectors](https://bitesizeaihq.substack.com/p/vectors)**, we established that a vector represents the precise location of a data point in space. You can think of it as that data point’s address. The vector tells us where a given data point _lives_ within the space.

Once our space is populated with many data points, each with its own distinct location, some natural questions arise. How similar are the data points? Are there patterns in the data? Are there outliers?

To answer these questions, we need a way to reason about data points and draw comparisons between them. In a spatial setting, similarity is answered by a simple idea: **distance**.

### Distance as similarity

Consider two points in a room.

If they are close together, they are similar in location.  
If they are far apart, they are different.

The same intuition applies in abstract space.

When two vectors are close to one another, the data points they represent are similar with respect to the features that define the space. When they are far apart, they differ along one or more dimensions.

Distance turns similarity into something measurable.

Let’s return to our dataset of patient health information. The data includes three features:

* age
* weight
* height

These features define the axes of the space within which our data is embedded.

Now imagine three patients.

**Patient A**

* Age: 42
* Weight: 180
* Height: 72

**Patient B**

* Age: 46
* Weight: 190
* Height: 70

**Patient C**

* Age: 26
* Weight: 145
* Height: 65

We can represent these patients as vectors:

* Patient A → `[42, 180, 72]`
* Patient B → `[46, 190, 70]`
* Patient C → `[26, 145, 65]`

Just looking at these numbers, it seems pretty intuitive that Patient A and Patient B are more similar to each other across the features that define this space than either is to Patient C.

### Distance is a number

Given two vectors, we can compute a single number that represents how far apart they are in space. Smaller numbers indicate greater similarity, while larger numbers indicate greater difference.

Once similarity is expressed as a number, it can be compared.

### Not all distance is the same

There are many ways to measure distance. Different distance measures emphasize different aspects of similarity. This is something we’ll explore in the next post.

For now, the key idea is this: much of machine learning rests on this simple geometric idea. By understanding distance, we can move from raw data to meaningful relationships.

---

Thanks for reading BiteSizeAI! Subscribe for free to receive new posts and support my work.