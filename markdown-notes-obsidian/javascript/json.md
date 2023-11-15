# JSON
JSON stands for *JavaScript Object Notation* because it is a syntax that looks very similar to a JavaScript object.
### JSON is a:
	- Data representation format
	- Commonly used for apis and configs
	- Lightweight and easy to read/write
	- Integrates easily with most languages

## JSON types
	- Strings
	- Numbers
	- Booleans
	- null
	- Arrays
	- Objects

The main difference in syntax between a JavaScript object and JSON is that JSON requires the key to be enclosed in quotations.
## JSON syntax
```JSON
[
	{
	"name": "Big Corporation",
	"numberOfEmployees": 10000,
	"ceo": "Mary",
	"rating": 3.6
	},
	{
	"name": "Big Corporation",
	"numberOfEmployees": 10000,
	"ceo": "Mary",
	"rating": 3.6
	}
]
```

JSON usually comes in from an API as a string, so it needs to be parsed to a JavaScript object to be use in actual code. To do this, you use JSON.parse()

## JSON.parse in JavaScript
```js
let companies = 
'[
	{
	"name": "Big Corporation",
	"numberOfEmployees": 10000,
	"ceo": "Mary",
	"rating": 3.6
	},
	{
	"name": "Big Corporation",
	"numberOfEmployees": 10000,
	"ceo": "Mary",
	"rating": 4.8
	}
]'

console.log(JSON.parse(companies)); /* An actual object now
[
	{
	"name": "Big Corporation",
	"numberOfEmployees": 10000,
	"ceo": "Mary",
	"rating": 3.6
	},
	{
	"name": "Big Corporation",
	"numberOfEmployees": 10000,
	"ceo": "Mary",
	"rating": 4.8
	}
] */

// Retreiving data
console.log(JSON.parse(companies)[0].name); // Big Corporation
console.log(JSON.parse(companies)[1].rating); // 4.8
```