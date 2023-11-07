# What is Recursion + Call stack Example

**Recursion** is when a function calls itself until a certain condition is met. programming technique where the solution to one big problem is dependent on each of the solutions of the sub-problems inside of it.

Its good of thinking of recursion with an example: a Russian nesting doll, or Matryoshka doll. You keep opening the dolls until a piece of chocolate is found, or if there are no more dolls to open and there's no chocolate, return that there is none. 

Pseudo code to illustrate the idea:

```javascript
function processDoll(doll){
	  if(/*chocolate found*/){
		  return "yum";
	  } else if (/*no more dolls*/){
		  return "no chocolate"
	  } else {
		 processDoll(doll)
	}
}
```

Here is another example using a factorial function

```javascript
function factorial(n){
	 if(n == 1 || n == 0){
		 return 1
	}else{
		return n * factorial(n-1);
	}
}

// Call stack process

factorial(4)
	4 * factorial(3)
		3 * factorial(2)
			2 * factorial(1)
// info is requested in this call stack and then ascends the stack as it solves		
factorial(4)
	4 * factorial(3)
		3 * factorial(2)
			2^
factorial(4)
	4 * factorial(3)
		6^
factorial(4)
	4 * factorial(6)
factorial(4)
	24
```