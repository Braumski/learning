// Palindrome check

const string1 = "rick"
const string2 = "mom"
const string3 = "Was it a car, or a cat I saw?"
const string4 = "Hey there buddy"
const string5 = "Mr. Owl ate my metal worm"

function cleanupString(string){
    let cleanedString = string.replace(/[, !?.]/g, '') // I learned about regular expressions, but I have to watch more videos about this to get it
    cleanedString = cleanedString.toLowerCase();
    return cleanedString;
}


function palindromeCheck(string){

    cleanedString = cleanupString(string);
    
    let j = cleanedString.length - 1;

    for(let i = 0; i < cleanedString.length; i++){
        if(cleanedString[i] === cleanedString[j]){
            j--; // I feel like theres a better way to reverse search the string without using J like this, but I don't think this is too bad
        } else {
            return false;
        }
    }
    return true;
}

console.log(palindromeCheck(string5));

/* Watched a youtube video about a guy who understand time complexity
and this was his solution */

function isPalindrome(str){

    cleanStr = cleanupString(str);

    let left = 0;
    let right = cleanStr.length - 1;

    while(left < right){
        if(cleanStr[left] !== cleanStr[right]){
            return false;
        }
    left++;
    right--;
    }
    return true;
}

console.log(isPalindrome(string5));

// his palindrome checker is more efficient because it stops iterating when left < right, meaning
// it stops iterating when the search is met in the center of the word, since searching for more
//  is no longer necessary. I love his solution because its also very easy to read. Some online
//  solutions I find are very difficult to read even though they take up fewer lines of code.

/* 
Another thing  learned from him in the comments section was that any solution that transforms
a string into an array will hinder the time complexity. I will be reading about Big O notation
and time complexity soon! 👍
*/