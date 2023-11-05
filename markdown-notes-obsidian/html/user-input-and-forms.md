# Form Validation

Form Validation is a process that ensures that data entered by the user in the form is valid. There are two methods of form validation:

1. Client-side validation
2. Server-side validation

#### Client-side validation

Client-side validation is done by the browser or by JavaScript code. It gives immediate feedback and doesn't require any server requests or external information.

#### Server-side validation

Server-side validation is more **secure**. SSV can run more complex checks. But it needs to make a server requests, so it isn't as fast.

### Creating a Form

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>
<body>
    <main>
        <h1>Sign Up</h1>
        <form>
            <div>
                <label for="user_first_name">First Name</label><br>
                <input type="text" id="user_first_name" name="user_first_name">
            </div>
            <div>
                <label for="user_last_name">Last Name</label><br>
                <input type="text" id="user_last_name" name="user_last_name">

            </div>
            <div>
                <label for="email">Email</label><br>
                <input type="email" id="user_email" name="user_email">
            </div>
            <div>
                <label for="user_password">Password</label><br>
	                <input type="password" id="user_password" name="user_password">
            </div>
            <div>
                <label for="user_confirm_password">Confirm Password</label><br>
                <input type="password" id="user_confirm_password" name="user_password">
            </div>
        </form>
    </main>
</body>
</html>
```
[Making the most of client-side validation](https://www.coursera.org/learn/html-and-css-in-depth/lecture/R7n6S/making-the-most-of-client-side-validation)

## Methods of client-side validation

There are additional  attributes you can apply to elements for client side validation. Client side validation is important because *you don't want to user server resources to check for information that could have been check client-side*. 

>[!note]
> Use the "required" attribute in fields that need to be filled out.

You can also use CSS pseudo selectors to better notify the user if their information is invalid, for example:

```css
input:focus:invalid {
	border: 2px solid red;
}
```
