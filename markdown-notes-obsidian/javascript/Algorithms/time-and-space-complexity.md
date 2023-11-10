# Algorithm analysis
The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors:

1. Programming languages used to implement the algorithm
2. The computer the program runs on
3. Other programs running at the same time
4. Quality of the operating system

We evaluate the performance of an algorithm *in terms of its input size*. The evaluation of an algorithms performance is of two types:

1. **Time complexity** - Amount of time taken by an algorithm to run, as a function of input size
2. **Space complexity** - Amount of memory taken by an algorithm to run, as a function of input size

By evaluating against the input size, the analysis is not only machine independent, but the comparison is also more appropriate.

>[!tip]
>There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints.

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity. If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space.

## How to represent complexity?
#### Asymptotic notations

1. **Big-O Notation (O-notation)** - Worst case complexity
2. **Omega Notation (Ω-notation)** - Best case complexity
3. **Theta Notation (θ-notation)** - Average case complexity

>[!tip]
> When writing code, don't lose sight of the big picture, sometimes it is more appropriate to write code that is simple to read and maintain, rather than writing clever code.