# What is JSX?
**JSX** (JavaScript XML) is a syntax extension that allows developers to write HTML-like code within a JavaScript file. It was developed by Meta.

For example, you might write the following JSX code to render a simple heading element:
```jsx
const heading = <h1>Hello, JSX!</h1>
```
this code looks like HTML, but it's JavaScript. The const keyword creates a new variable named heading, and the value of that variable is the result of the JSX expression.

# How does JSX Work?
JSX is transformed into regular JavaScript before being rendered in the browser. The most popular JSX transpiler is **Babel**.

For example the previous JSX code is transformed into the following JavaScript code:
```js
const element = React.createElement("h1", null, "Hello, JSX!");
```

# Important JSX Rules
When writing JSX code, there are certain rules you should follow to ensure it's valid and easy to read.

### 1. Always Return a Single Root Element
In JSX, you must always return a *single root element*. This means all of your JSX code needs to be wrapped in a single parent element. For example, this is valid JSX:
```jsx
return (
  <div>
    <h1>Hello World!</h1>
    <p>This is my first React component.</p>
  </div>
)
```

But this is not because it return two elements instead of one:
```jsx
return (
  <h1>Hello World!</h1>
  <p>This is my first React component.</p>
)
```

**React** allows an empty parent element, so you can avoid unnecessary div elements
```jsx
return (
  <>
    <h1>Hello World!</h1>
    <p>This is my first React component.</p>
  </>
)
```

### 2. Use className Instead Of class[](https://kinsta.com/knowledgebase/what-is-jsx/#2-use-classname-instead-of-class)

In HTML, you would use the `class` attribute to specify a CSS class for an element. However, in JSX, you need to use the `className` attribute instead. For example:

```jsx
// Good
<div className="my-class">This element has a CSS class.</div>

// Bad
<div class="my-class">This element has a CSS class.</div>
```

Using `className` instead of `class` is important and avoids naming conflicts because `class` is a reserved keyword in JavaScript.

### 3. Use Curly Braces for JavaScript Expressions[](https://kinsta.com/knowledgebase/what-is-jsx/#3-use-curly-braces-for-javascript-expressions)

When you need to include a JavaScript expression inside your JSX code, you need to wrap it in curly braces **{}**. This can be used for anything from displaying dynamic data to conditionally rendering components. Here’s an example:

```jsx
// Good
<div>{myVariable}</div>

// Bad
<div>myVariable</div>
```

You can also execute mathematical operations within the curly braces, such as:

```jsx
<p>The total cost is {25*10}</p>
```

Also, within your curly braces, you can set up conditional statements using ternary operators:

```jsx
<h1>{(x) < 15 ? "Welcome" : "Goodbye"}</h1>
```

Here is a better example with React component:

```jsx
function Greeting() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in.</h1>
      )}
    </div>
  );
}
```

In this example, we define a **Greeting** component. The component uses the ternary operator to conditionally render a greeting based on the value of `isLoggedIn`. If `isLoggedIn` is `true`, the component renders an `h1` element with the text “Welcome back!”. If `isLoggedIn` is `false`, the component renders an `h1` element with the text “Please log in.".
### 4. Use camelCase for Most Things In JSX[](https://kinsta.com/knowledgebase/what-is-jsx/#4-use-camelcase-for-most-things-in-jsx)

In JSX, use camelCase for most things, including attributes, event handlers, and variable names. This convention is consistent with JavaScript naming conventions and helps maintain readability.

For example, use `onClick` instead of `onclick`, and `className` instead of `class`.

```jsx
// Good
<button onClick={handleClick} className="btn">Click me!</button>

// Bad
<button onclick={handle_click} class="btn">Click me!</button>
```
### 5. Always Close Tags[](https://kinsta.com/knowledgebase/what-is-jsx/#5-always-close-tags)

In JSX, you need to always close your tags, even if they don’t have any content. For example:

```jsx
// Good
<div></div>

// Bad
<div/>
```
JSX requires tags to be explicitly closed: self-closing tags like `<img>` must become `<img />`, and wrapping tags like `<li>oranges` must be written as `<li>oranges</li>`.
### 6. Use Self-Closing Tags for Empty Elements[](https://kinsta.com/knowledgebase/what-is-jsx/#6-use-selfclosing-tags-for-empty-elements)

If you have an element that doesn’t have any content, you can use a self-closing tag instead of an opening and closing tag. For example:

```jsx
// Good
<img src="my-image.jpg" alt="My Image"/>

// Bad
<img src="my-image.jpg" alt="My Image"></img>
```

### Pro-tip: Use a JSX Converter [](https://react.dev/learn/writing-markup-with-jsx#pro-tip-use-a-jsx-converter "Link for Pro-tip: Use a JSX Converter")

Converting all these attributes in existing markup can be tedious! We recommend using a [converter](https://transform.tools/html-to-jsx) to translate your existing HTML and SVG to JSX. Converters are very useful in practice, but it’s still worth understanding what is going on so that you can comfortably write JSX on your own.