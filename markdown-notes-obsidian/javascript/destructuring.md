# Array Destructuring
>[!example]
>Here is  how you would store array elements into a variable: *without* **destructuring**
>```javascript
const alphabet = ['A','B','C','D','E','F','G'];
>
> const a = alphabet[0];
> const b = alphabet[1];
> const c = alphabet[2];
> const d = alphabet[3];
>```

## A better way of assigning variables
Instead of assigning variables one by one like above, there is a concise syntax to assign multiple variables in *one line*.

```javascript
const alphabet = ['A','B','C','D','E','F','G'];

const [a, b, c, d] = alphabet;
```

The above syntax will store the values of the alphabet array in three separate variables *based on the position of the variable in the declaration*. The destructuring syntax above created One const variable named `a` with the value of `'A'`. Another separate const variable named `b` with the value of `'B'`, and so on.

## "What if I want do skip an element"
Very simple, leave a blank position in your declaration.
```javascript
const alphabet = ['A','B','C','D','E','F','G'];

const [a, , c, d] = alphabet;
console.log(b) // ReferenceError: b is not defined
```

## Rest operator in destructuring
Using the `...` operator will store the remaining elements in an array with a specified name, in this case `rest`.
```javascript
const alphabet = ['A','B','C','D','E','F','G'];

const [a, , c, d, ...rest] = alphabet;
console.log(rest); // ["D","E","F"]
```

# Object Destructuring
You can extract the value of properties from an object like so:
```javascript
const personTwo = {
	name: 'Sally',
	age: 34,
	address: {
	city: 'Somewhere',
	state: 'One of them'
	}
}

const personOne = {
	name: 'Kyle',
	age: 24,
	address: {
	city: 'Somewhere else',
	state: 'Another one of them'
	}
}

const {name, age} = personTwo // curly braces instead of brackets
console.log(name); // Sally
console.log(age); // 34
```
## Giving each property a  name
If you do not want your  variable name to the be the key name, you would set it with a colon like this.
```javascript
const {name: firstName, age} = personTwo 
console.log(firstName); // Sally
```
## Default values
You can also set default values for extracted values in case the extracted property is not present in the object.
``` javascript
const {name: firstName, age, favoriteFood = 'Rice'} = personTwo 
console.log(favoriteFood) // Rice
```
## Rest operator
Using the rest operator stores the remaining properties in a new object of the provided name.
```javascript
const personTwo = {
	name: 'Sally',
	age: 34,
	address: {
	city: 'Somewhere',
	state: 'One of them'
	}
}

const {name: firstName, ...newObject } = personTwo

console.log(firstName) // Sally
console.log(newObject) /** {age: 34, address: {city: 'Somewhere', state: 'One of them'}} */
```
## Destructuring nested objects
```javascript
const personTwo = {
	name: 'Sally',
	age: 34,
	address: {
	city: 'Somewhere',
	state: 'One of them'
	}
}

const {name: firstName, address: {city} } = personTwo

console.log(city) // Somewhere else
```
## Combining properties of objects

```javascript
const personOne = {
	name: 'Kyle',
	age: 24,
	address: {
	city: 'Somewhere',
	state: 'One of them'
	}
}

const personTwo = {
	age: 34,
	favoriteFood: 'Watermelon'
}

const personThree = {...personOne, ...personTwo}

console.log(personThree) /* 
	{ 
	name: 'Kyle',
	age: 34,
	favoriteFood: 'Watermelon'
	address: {
	city: 'Somewhere',
	state: 'One of them'
	}
	*/
```
If the objects have shared properties, the objects that come after take precedence. In this case, the `age` of `personTwo` replaces the `age` of `personOne` because it comes after. In addition to this, the `favoriteFood` property is added.
## Using object destructuring in function parameters
First this is how serving arguments could be done *without* destructuring
### Without destructuring
```javascript
const personOne = {
	name: 'Kyle',
	age: 24,
	address: {
	city: 'Somewhere',
	state: 'One of them'
	}
}

function printUser(user) {
	console.log(`Name is: ${user.name} Age is ${user.age}`)
}

printUser(personOne) // Name is: Kyle. Age is 24
```
### With destructuring
```javascript
const personOne = {
	name: 'Kyle',
	age: 24,
	address: {
	city: 'Somewhere',
	state: 'One of them'
	}
}

function printUser({name, age}) {
	console.log(`Name is: ${name} Age is ${age}`)
}

printUser(personOne) // Name is: Kyle. Age is 24
```
In the parameters, you use object destructuring syntax when an object is served to the function, making the string template literal  syntax more readable