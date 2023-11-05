function areaOfACircle(radius){
    console.log(Math.round(Math.PI * Math.pow(radius, 2)))
};
areaOfACircle(40); //5027
areaOfACircle(100); //31416

// String functions

let greet = "Hello, "
let place = "World";
console.log(greet.length); // 7

greet.charAt()

function logLetters(string){
    for(let i = 0; i < string.length; i++)
    console.log(string[i]);
};

logLetters(place); // World
logLetters(greet); //  Hello


console.log("Where are these people going".split(" ")); //[ 'Where', 'are', 'these', 'people', 'going' ]
