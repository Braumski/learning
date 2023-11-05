/* 
Write a function that merges two sorted arrays into a single one.
The arrays only contain integers. Also, the final outcome must
be sorted and not have any duplicate.
*/

const array1 = [9, 3, 3, 3, 3, 3, 2, 5] ;
const array2 = [25, 32, 76, 76, 76, 3];


function mergeAndSort(arr1, arr2){
    const resultArr = [...arr1, ...arr2]
    resultArr.sort((a,b) => {
        return a - b;
    });
    resultArr.sort((a,b) =>{
        if(a === b){
            let arrElement = resultArr.indexOf(a);
            resultArr.splice(arrElement, 1);
            
        }
    });
    console.log(resultArr);
    for (let i = 0; i < resultArr.length; i++) {
        for (let j = i + 1; j < resultArr.length; j++) {
            for (let k = i - 1; k < resultArr.length; k++){
                if (resultArr[i] === resultArr[j]) {
                    let arrElement = resultArr.indexOf(resultArr[i]);
                    resultArr.splice(arrElement, 1);
                }else{break};
            }
        }
    }
    return resultArr;
    
};

console.log(mergeAndSort(array1,array2));

// It works but it doesn't look efficient, I'm going to look at other people's solutions

function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b); // I always see people using "sets" to get rid of duplicates
                                                       // sets must be really useful...
                                                       // even chat gpt says the same thing... well at least I tried to use my own solution
  }