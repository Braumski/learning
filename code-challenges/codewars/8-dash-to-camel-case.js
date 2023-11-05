
/* 
Complete the method/function so that it converts dash/underscore
 delimited words into camel casing. The first word within the 
 output should be capitalized only if the original word was capitalized 
 (known as Upper Camel Case, also often referred to as Pascal case).
  The next words should be always capitalized.
*/


//pseudo code

/* 
split given "-" string into an array
loop array  and capitalize the first letter of every word
    if the first letter of the first word is lowercase, then edit the first word to be lowercase
combine the resulting string so that there are no spaces

*/

function toCamelCase(string){
    const capitalizedArray = []
    const stringArray = string.split("-");
    const firstWord = stringArray[0];

    for(let i = 0; i < stringArray.length; i++){
        const eachWord = stringArray[i];
        const eachWordFirstChar = eachWord.charAt(0);
        const capitalized = eachWordFirstChar.toUpperCase()
        const remainingLetters = eachWord.slice(1);
        const capitalizedWord = capitalized + remainingLetters;

        capitalizedArray.push(capitalizedWord);
        
        if(firstWord[0] !== firstWord[0].toUpperCase() ){
            firstWordLowerCase = firstWord.toLowerCase();
            capitalizedArray.shift();
            capitalizedArray.unshift(firstWordLowerCase);
        }
    }
    returnString = capitalizedArray.join('')
    return returnString;
    
    
}

console.log(toCamelCase("what-is-up"));

/*
This code looks a little verbose...
*/



