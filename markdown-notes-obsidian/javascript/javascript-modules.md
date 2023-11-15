# JavaScript Modules
## What are JavaScript Modules?
Back when web development was more simple, websites were usually served with *one JavaScript file* served in the HTML doc with all of the interactivity code in that one JS file. Today, we have many more use cases, libraries, and frameworks to use with our web pages, making you codebases **much larger**.

Modules were creating from the need for functionalities to be reusable, understandable, scalable, and more organized in the file structure.

## Making Modules Available in HTML
For modules to work in your JavaScript file, you need to make an edit to your script tag in HTML first. You need to add the **type** element with the value *module* as shown below.
```html
<script type="module" src="app.js"></script>
```
If a JavaScript file imports modules, it needs to be classified as a module itself so that it is able to function properly.
## Inline Export vs End of file Export
When exporting in JavaScript you have two options for *when* you execute your export.
>[!note]
>These two options are personal preference and how you decide organize your code base will determine which method you use
### Inline export
```js
export default sayMyName = () => {
	return 'Ricardo'
}
```
### End of file export
```js
const sayMyName = () => {
	return 'Ricardo'
}
export default sayMyName
```
## Named Export and Default Export
There are two conventions of exporting in JavaScript a **named export** and **default export**.

```js
```