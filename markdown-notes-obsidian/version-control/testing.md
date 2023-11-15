# Testing 🧪
___

see also [version control](version-control-notes.md)

Comments in JavaScript are a great step in the right direction. They allow team members to know what the expected outcomes of a given piece of code are. But there is a better alternative, writing **Tests**. 

Tests are like comments, because they describe expectations. But the great thing about tests is that they can be executed/tested. **JEST** is an example of a testing framework. When tests fail ⛔ you say that they are red, and when they pass 🟢, you say they are green. If a test fails, then it's a sign that we need to write the code in such a way that it passes it's test. Once it passes we need to improve both the app's code and the test code, but without changing the behavior of either. This is known as **refactoring**.

Refactoring is the process in which we write code so that it runs more efficiently and it is easier to read for other progammers. As you fix code in response to red tests, it becomes a cyclical 🔁 activity. this is often described as the red-green-refactor cycle. This cycle is the basis of **Test Driven Development** or TDD approach to programming.

## Types of testing 🔨

There are many types of software testing because the tests a UX designer, software engineer, and project manager will look very different. But for now, lets just say that testing is confirming that software works as specified in the requirements. Here are three common methods of testing.

- End to end testing (e2e)
- Integration testing
- Unit testing

![Types of testing](https://miro.medium.com/v2/resize:fit:640/format:webp/1*lqWygfNJqWQ4VCyjecQ6Eg.png)

**End to end testing** is using a product how a user might, and ensuring that the required functions are in order. You are testing the entire finished product in the shoes of a user. E2e testing is time consuming and it requires a detailed understanding of the intentions of users.

**Integration testing** is testing how parts of your system interact with other parts of the system. Faster and cheaper than e2e testing but there is still one more type of testing to discuss.

**Unit Testing** is the process of testing the smallest units of your source code in isolation. A function is usually the most fundamental operation in code.

## Jest 

JavaScript doesn't have any built in testing capabilities. **Jest** is a JavaScript testing framework for React that was built by Meta. Jest also allows you to test:

  - Babel
  - TypeScript
  - Node
  - Angular
  - Vue

**Mocking** is when you isolate code from its dependencies during testing. For example, you can test front-end functionalities by mocking server data when the data actually came client-side. Mocking also saves time, because a front-end developer doesn't need to wait for a back end developer's implementation to be completed to test a feature. Jest allows **Snapshot testing**, which is used by web developers to verify that there are no regressions in the DOM. A **Regression** is simply when previously written code was made broken or buggy by code that was written after it, regressing the previous code.

![Regression testing](https://browserstack.wpenginepowered.com/wp-content/uploads/2019/09/Regression-testing-tutorual.png)

## Test Driven Development 📝

TDD is a streamlined process of writing code that will satisfy requirements.

![Test Driven Development](https://www.nimblework.com/wp-content/uploads/2022/12/tdd_flow1-1.gif)

  1. Read new requirement
  2. Write failing test
  3. Update source code to resolve requirement
  4. Run test that passes
  5. Refactor
   
This list can also be redefined as the red/green/refactor cycle. Here are the advantages of TDD

  - Minimize regressions in the code
  - Proves new implementation is working
  - Automated tests
  - Test implementations
  - Provide documentation

The beauty of test driven development is that the documentation is written as you go, and you can always go back and test a previous implementation at any given time.