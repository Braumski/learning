// Javascript Spread and Rest Operators ///////
//////////////////////////////////////////////
/////////////////////////////////////////////

/* 
Both Spread and Rest use "..."


Spread Operator 

    - pass all array elements into a function
    without having to type them all individually. 

    - add the elements of an existing array into a new array
    
    - copy arrays

    - concatenate arrays


Rest Operator

    - This is when dot notation is used in the arguments of 
    a function. When the rest operator is used in this way,
    it allows you to write an unlimited number of arguments
*/

// Rest Operator example
//////////////////////////////////////////////

    function multiply(multiplier, ...numbersToMultiply){
        return numbersToMultiply.map(element =>{
            return multiplier * element;
        });
    }
    const arr = multiply(12, 1, 2, 3);
    console.log(arr); // [ 12, 24, 36 ]





// Spread Operator examples
//////////////////////////////////////////////


// Merge 2 arrays function with incorrect usage example

const array1 = [82, 4, 918, 0];
const array2 = [7483, 75, 386, 4];
const incorrectMergeArrays = [array1, array2];
console.log(incorrectMergeArrays); // [ [ 82, 4, 918, 0 ], [ 7483, 75, 386, 4 ] ]

    /* 
    Notice how the variable is returning 2 arrays within an array. This is not the result
    we intend. We want to make a single new array, not 2 arrays
    within an array. the "..." syntax allows us to UNPACK an array.
    */

const correctMergeArrays = [...array1, ...array2];
console.log(correctMergeArrays); // [ 82, 4, 918, 0, 7483, 75, 386, 4 ]
                                 // This is the intended result

// you can also use the spread operator to join objects

const flying = { wings: 2 }
const car = { wheels: 2 }
const flyingCar = { ...flying, ...car };
console.log(flyingCar) // { wheels: 2, wings: 2 }


// Add new members to arrays without using the push method.

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);// [ 'onion', 'parsley', 'carrot', 'beetroot' ]


// Convert a string to an array

const food = "pizza";
const arrayOfChars = [...food];
console.log(arrayOfChars); // [ 'p', 'i', 'z', 'z', 'a' ]


// Copy either an object or an array into a seperate one.

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1} /*We quickly make car2 by duplicating car1 instead 
                        of recreating an entire new object */

car1.speed = 201; // We modify car1 speed

console.log(car1.speed, car2.speed);// 201  200


// The spread operator is a shallow copy

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)
/* 

Note that the spread operator only performs a shallow copy of the source array or object.
fruits1 was popped, but in the log that follows it, fruits2 is still referencing the version
of fruits1 before the pop. fruits1 was edited, but since fruits2 referenced fruits1 before
the pop, it uses the original values from fruits1

*/

