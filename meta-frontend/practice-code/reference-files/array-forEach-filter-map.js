/*
 Some array functions exercises. Generated practice
 questions using Chat GPT
 */

//  For Each   /////////////////////////////////////////////////////
// iterates through each element of an array
//  Here, I create a new array resulting from a squaring function
function squareNumbers(arr){
    const squaredArray = [];
    arr.forEach(num =>{
        squaredNum = num ** 2;
        squaredArray.push(squaredNum);
    })
    return squaredArray;
};
const myArray1 = [12, 36, 48, 50, 60, 82];

console.log (squareNumbers(myArray1)); // Returns [ 144, 1296, 2304, 2500, 3600, 6724 ]


/* 
After writing the above code I found out that creating an array from
forEach is pointless because array.map is much easier, whoops.
*/



// the Filter method  ///////////////////////////////////////////
const myArray2 = [3, 6, 17, 24, 45]
function filterEvenNumber(a){
    if (a % 2 === 0){
        return a;
    }
}
const filteredArray= myArray2.filter(filterEvenNumber);
console.log(filteredArray); // returns [ 6, 24 ]

console.log(myArray2); // original array unaffected
                       // Returns [ 3, 6, 17, 24, 45 ]




//  The map method //////////////////////////////////////////////
const coolArray = [17, 91, 53, 7, 1733];
const mapSubtractSeventeen = coolArray.map(arr => arr - 17);
console.log(mapSubtractSeventeen); // Returns [ 0, 74, 36, -10, 1716 ]


const coolerArray = [10, 20, 50, 75, 100];
const mapDivideFive = coolerArray.map(arr => arr / 5);
console.log(mapDivideFive); //Returns [ 2, 4, 10, 15, 20 ]
