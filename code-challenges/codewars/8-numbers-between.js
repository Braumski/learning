/* 
Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

For example:

a = 1
b = 4
--> [1, 2, 3, 4]
*/

function numbersBetween(minNum, maxNum){
    const newArray = []
    for(i = minNum; i <= maxNum; i++){
        newArray.push(i);
    }
    return newArray;
}

console.log(numbersBetween(-13, 3));