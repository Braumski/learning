/* 
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?
*/

// Built in JS method
function numToString1(num){
    return num.toString();
}
console.log(numToString1(5));


// String template literal
function numToString2(num){
    const result = `${num}`;
    return result;
}
console.log(numToString2(3));


// Old school
function numToString3(num){
    const result = '' + num + '';
    return result;
}
console.log(numToString3(45));  

