# Form Submission

Forms send data to the web server via the http "get" method or the http "post" method.

```html
<form method="get">

</form>
<form method="post">

</form>
```

When information to the server is received using the **GET** method, the form information is appended to the URL and then it is sent. There are three problems with this method of receiving information from the client.

1. The length of the URL is limited by the browser
2. The length of the URL is limited by the server
3. Security threats

The data will be lost to the server if the URL reaches its limit while extending the URL with the form info. There is also a security threat because your info was appended to the URL, it means the data is in your browser history, or in the request logs of the server.

When POST is used, the form information is stored in the HTTP request body. POST is a more secure method of server data transfer, but it still has vulnerabilities when used with HTTP and not HTTPS.

>[!summary]
> GET data is appended to the URL and not secure. POST data is more secure and appended to the HTTP request, but still vulnerable unless used with HTTPS encryption.

## Submit

How the form is submitted is determined by two essential attributes:

1. Action
2. Method

The action attribute specifies to *which web address* the form must be sent, this address is the location of server-side code that will process the request.

```html
<form action="/login"> 
</form> 
```

It is important to note that action can be a full URL address such as `https://meta.com`, an absolute path such as `/login`, or a relative path such as `login`.

The method attribute specifies which HTTP method is used to submit the form; GET or POST. 
```html
<form method="get"> 
</form> 
```

```html
<form method="post"> 
</form> 
```

However, as a front-end developer, it is essential to know that forms are not the only way to submit data to the web server. As you learn more about JavaScript and front-end libraries, you’ll discover that developers often submit HTTP requests directly via code and send data as part of the HTTP request body in a text format called JavaScript Object Notation, or JSON. But that is a topic for another course. 
