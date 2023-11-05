/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20
*/

function addPositiveNums(arr){
    positiveNumArray = [];
    let result = 0;
    for( let i = 0; i < arr.length ; i++){
        if(arr[i] >= 0){
            result += arr[i];
        }
    }
    return result;
}

array1= [2,6,-30,5,-5,300]
console.log(addPositiveNums(array1));