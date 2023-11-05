# Semantics and Meta Tags 🔍

Semantic tags allow search engines and accessibility software to decipher the meaning of a tag, improving user experience and search engine optimization (SEO).

For example, it is common practice for developers to specify their links in the nav element as an unordered list

```html
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home"></a></li>
                <li><a href="#about"></a></li>
                <li><a href="#contact"></a></li>
            </ul>
        </nav>
    </header>
</body>
```

## Main content of a webpage: Articles & Sections 📰

The 2 elements used in the main content of a webpage are _Article_ and _Section_ elements.

Articles indicate content that is

 - Complete
 - Self-contained
 - Independently distributable

Another way to think about articles is that there are many articles of separate stories on a newspaper page, each able to be cut out with scissors for use somewhere else. Examples of articles:

- Forum post
- Article
- Blog post
- User comment
- Interactive widget

## Header and Footer Elements ✒️

Header elements should always be at the top of your body element. Footer elements will always be in the bottom of your body element.

```html
<body>
    <header>
		    <!--Header at the top of the body -->
    </header>
    <section>
    
    </section>
    <footer>
		  <!--Footer at the bottom of the body -->
    </footer>
</body>
```

- #### [Semantic HTML Cheat Sheet](semantic-html-cheat-sheet.md)
- #### [Semantics Example](semantics-example.md)

# Metadata

Meta tags provide information for search engines. A major part of launching a website is a process called **Search Engine Optimization** (SEO). This process involves making improvements to a websites content, semantics, and delivery.

> **Meta tags** define metadata about a webpage. **Metadata** can be defined as data about other data.

Here are some examples of the usage of metadata.

```html
<!DOCTYPE html>
<html>
    <head> <!-- Nothing in the 'head' tag is shown to users -->
        <meta name="" content="">
        <meta name="author" content="Jane Mildew">
        <meta name="description" content="Jane's first webpage">
        <meta name="keywords" content="holidays, free, summer, clothing">
        <!-- Do not use this ^ -->
	     <meta name="robots" content="index, follow">
	         <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- always use this ^ -->
        
    </head>
    <body>
    </body>
</html>
```

The  **keywords** metadata as shown above is an outdated system of ranking your webpage with keywords. Website creators abused this keyword system and now some search engines mark you site as spam if you use this keyword metadata.

The viewport metadata is extremely important for making responsive web pages that function appropriately on mobile devices. Without the above viewport metadata, phones will attempt to load a webpage as if it was on a desktop. This makes the viewing experience painful for those on mobile.

- #### [Metadata Cheat Sheet](metadata-cheat-sheet.md)

## Open Graph Protocol

Open Graph is an internet protocol that was originally created by Facebook to standardize the use of metadata within a webpage to represent the content of a page. Read about it in depth [here](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/)