# Big-O for Objects and Arrays in JavaScript
## Objects
- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search - O(n)
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)

Because searches perform an action one item at a time, they have a linear complexity.

## Arrays
- Insert / remove at the end - O(1)
- Insert / remove from beginning - O(n)
- Access (array [i] ) - O(1)
- Search - O(n)
- Push / pop - O(1)
- Shift / unshift / concat / splice / slice - O(n)
- forEach / map / filter / reduce - O(n)


>[!important]
>Notice that pop and push have a constant time complexity, while shift and unshift have a linear complexity

When you use `shift` to remove the first element or `unshift` to add an element at the beginning of an array, all the remaining elements in the array need to be shifted one position to the left or right, which requires moving every element by one index. 

This operation takes linear time in the worst case because it involves copying and shifting all the elements in the array.