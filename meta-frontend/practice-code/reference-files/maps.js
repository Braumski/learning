//  Javascript maps

/* 

Things to know about maps  
    - similar to objects
    - holds key-value pairs where the keys can be any datatype, as 
        opposed to objects, where keys can only be strings or variable names
    - remembers the original insertion order of the keys
    - A key in a Map may ONLY OCCUR ONCE
    - has a property that reperesents the size of the map
    - can feel very similar to an object, but a Map has NO INHERITANCE.
        meaning NO PROTOTYPES

*/

// Creating a new Map

/* 
 You can create a Javascript Map by: 
    - Passing an Array to new Map()
    - Create a Map and use Map.set()
 */

// Passing an array to create a map ////////////////////////////////////
const fruits1 = new Map([
    ["apples", 500],
    ["bananas", 100],
    ["oranges", 200]
]);


// Creating an array using map.set  ////////////////////////////////
const fruits2 = new Map();

// Set map values
fruits2.set("apples", 500);
fruits2.set("bananas", 100);
fruits2.set("oranges", 200);

// Map.get returns the value of a key  ////////////////////////////
fruits2.get("apples"); // Returns 500

fruits2.set("apples", 300); // you can use Map.set to change existing values

fruits2.get("apples") // Returns 300;

fruits2.size; // Returns 3 since there are 3 properties

fruits2.delete("apples");
fruits2; // Returns Map { 'bananas' => 100, 'oranges' => 200, [size]: 2 }

fruits2.clear(); // Map.clear removes all the elements from a Map
fruits2//Returns Map {};

fruits2.has("apples"); // Returns false

