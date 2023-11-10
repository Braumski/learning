# React Project Structure
## Goals
1. Explain React's default folder structure
2. Outline the benefits of React's folder structure
3. Customize React's folder structure
4. Explain the benefits of planning folder use

## node_modules
This folder is a repository for all of the modules in your React app. Npm modules are functionalities and snippets of code created by other developers and uploaded to the npm ecosystem.

## public
This folder contains assets that will be displayed to the user in your app. For example, image files and your favicon.  In this folder, **robots.txt** is a file for search engine optimization. **manifest.json** is metadata for a device when your React powered web app is installed on it.

The most important file in public is the **index.html** file, where features of our react app are exported and injected into this html file.

## src
This is where a developer spends most of their time. In src are all of the essential components required to ensure that a React app functions. **index.js** and **app.js** are used to render the root components of the app.
