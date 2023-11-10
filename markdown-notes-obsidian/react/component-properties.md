# Component Properties
Much like JavaScript functions, React components can be served data into the parentheses. Serving data in this field is called the components **properties**.
![[Pasted image 20231108120021.png]]
![[Pasted image 20231108120117.png]]
## React props

React props, or properties:
	1. Pass data between components
	2. Arguments are passed like HTML attributes
	3. Inside the function, you use the keyword props


>[!example]
>## Index.js
>```javascript
import React from 'react';
import ReactDom from 'react-dom/client';
>
>import App from './App.js';
>
>ReactDom.createRoot(
>	document.querySelector('#root')
).render(<App title="Welcome" />)
>```
>## App.js
>```javascript
>import React from 'react';
>
>export function App(props) {
>	return(
>		<h1>{props.title}</h1>
>	)
>}

As you can see above, React props can:
1. Send multiple data types
2. Use flexible dynamic content, much like a template literal in JavaScript