# Regular Expressions
## Common use cases:

1. Validate text for user input
2. Search through text

>[!warning]
>Notoriously difficult to read due to it sometimes looking like a pile of gibberish


![[Screenshot 2023-11-05 103104.png]]
## Syntax

```javascript
const regex = /   / //search pattern goes between brackets
```

By default regex stops after the first match, if you want to search for all matches, we use the *global* tag.

```javascript
const regex = /   /g //search pattern goes between brackets
```

## Modifiers

Regex can be modified with flags to control how the pattern is applied. Common flags include:

- `i`: Case-insensitive matching.
- `g`: Global matching (matches all occurrences, not just the first).
- `m`: Multiline matching.

Example: `/pattern/gi` matches 'pattern' in a case-insensitive manner globally.

### Basic Patterns

Regular expressions allow you to define patterns for matching characters or sequences of characters in strings. Some common basic patterns include:

- **Literal Characters:** To match a specific character, simply include it in the regex pattern.
    
    Example: `/a/` matches the letter 'a'.
    
- **Character Classes:** You can use square brackets to define a character class, which matches any one of the characters inside the brackets.
    
    Example: `/[aeiou]/` matches any vowel.
    
- **Metacharacters:** Some characters have special meanings in regex and are called metacharacters. To match them literally, you need to escape them with a backslash (e.g., `.` becomes `\.`).
    
    Example: `/9\+9/` matches '9+9' in a string.
    

## Common Regex Methods in JavaScript

#### 1. `test()`: Checks if a string matches a regex pattern.

``` javascript
const pattern = /hello/; const text = "Hello, World!"; const isMatch = pattern.test(text); // true
```

#### 2. `match()`: Returns an array of matches or `null`.


```javascript
const text = "Hello, World!"; const matches = text.match(/o/g); // ["o", "o"]
```

#### 3. `search()`: Returns the index of the first match or -1.


```javascript
const text = "Hello, World!"; const index = text.search(/o/); // 4
```

#### 4. `replace()`: Replaces matches with a specified value.

``` javascript
const text = "Hello, World!"; const newText = text.replace(/o/g, "0"); // "Hell0, W0rld!"
```
##  ![Web Dev Simplified Youtube guide](https://www.youtube.com/watch?v=rhzKDrUiJVk)
## [A website to help understand what your regex is doing](https://regexr.com)

### Practical Applications

Regular expressions are widely used in various applications, including:

- **Validation:** You can use regex to validate user input such as emails, phone numbers, and dates.
    
- **Data Extraction:** Extract specific information from text, like extracting URLs or phone numbers from a webpage.
    
- **Text Parsing:** Tokenizing or parsing text based on patterns, e.g., breaking a CSV file into fields.
    
- **Find and Replace:** Replacing specific text or characters in a string.
    
- **Search and Filter:** Searching and filtering data based on specific patterns.
    
- **Pattern Matching:** Recognizing and parsing programming languages or data formats.

Regex is a vast and powerful tool, and it may take some time to become proficient with it. You can experiment with regex patterns and test them using various online regex testing tools to see how they work in different scenarios.