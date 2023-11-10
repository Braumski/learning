

![[Screenshot 2023-11-05 114646.png]]
## Algorithms

**Algorithms are step-by-step sets of instructions for solving a specific problem or performing a specific task.** In JavaScript, you can implement algorithms to manipulate data, make decisions, and automate various processes. 

##### Many ways to solve a problem

The flexibility of computer programming allows many different solutions to any particular problem, but not all solutions are created equal. A *deep understanding* of how a program runs its operations and procedures is required to **write programs that are efficient**.
## Measuring time
![[Screenshot 2023-11-05 121550.png]]

>[!note]
>Measuring complexity is not about the computed time, since this relies on external factors such computer performance. It's about the *graph trend* or the **relationship between an algorithms input size vs its change in performance**

Measuring time using inbuilt stopwatches is not a sufficient way to measure the speed of a given operation in a program. Why is this? Because there are many factors that change the speed of an algorithm that has *nothing* to do with your algorithm, an example of this is PC specifications.

**Big O Notation** is a quick way for developers to communicate the efficiency of an algorithm. It quantifies **the amount of time an algorithm or function takes to run in relation to the size of its input.** In Big O notation, we express this relationship using mathematical notation that simplifies the behavior of the algorithm as the input size becomes very large.


![[Pasted image 20231105122817.png]]
Above is an example of a *linear time complexity* or O(n) (refer to earlier graph)


![[Screenshot 2023-11-05 123849.png]]
Above is an example of *constant time complexity* or O(1) (refer to earlier graph)

Both of these solutions output the same information, with a vastly different performance. You will not be able to achieve constant time complexity (the most performant complexity) in every algorithm.

```javascript
arr1 = [1,3,6,9]

function add(arr){
    let result = 0 // runs 1 time
    for(let i = 0; i < arr.length ; i++){ //// runs 1 time
        result += arr[i]; // runs array.length time, or n
    }
    return result; // runs 1 time
}

// T = 1 + 1 + n + 1
// T = 3 + n
// T = n => 0(n) => Linear Time Complexity

console.log(add(arr1));
```

Time complexity is O(n), the above outcome has a **linear** relationship with the size of the input because the for **loop must run one more time for each number added to the array.** If the length of the array was known, you could reduce the time complexity of the function by writing the following...

```javascript
function sumNumbers(numbers){
    return numbers[0] + numbers[1] + numbers[2];
}
```


Since the above code executes in a **single expression** and does
not use a loop, **its time complexity is reduced to 0(1)**. But you will not always know the length of an argument array, so the use case of this function is limited.


