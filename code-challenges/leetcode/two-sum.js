/*
 1. Two Sum
Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? 

*/


var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length ; i++){
        const element1 = nums[i]
        for(let j = 1; j < nums.length; j++){
            const element2= nums[j];
            if(element1 + element2 === target){
                const array = [i, j];
                return array;
            }
        }
    }
};

/* 
This one took a lot of thinking, but I finished it in about 10 min.
This is my first time doing a double loop. I need to remember this double loop
to compare 2 elements in the same array, really useful. I haven't learned about big O
notation yet so I'm going to skip that part for now.

// Well I just read that double nested loops are really bad... I'll figure out 
data structures before doing much more of these challenges and forming bad habits
*/