---
date: 2020-03-25T00:00:00.000Z
title: What is an anonymous function in JavaScript?
tags:
  - beginner
  - javascript
metaDesc: >-
  An anonymous function is a function defined without a name. It is different
  from named functions which are functions that have a name. 
socialImage: /images/javascript-anonymous-function.jpg
_template: post
---

An anonymous function is a function defined without a name.

This could be either a normal function or an arrow function, let's take an example:  

![](/images/javascript-anonymous-function.jpg)

```javascript
function() {
    // this is an anonymous function
}

() => {
   // this is an anonymous arrow function
}
```

It is different from named functions which are functions that have a **name**. For example:  

```javascript
function doSomething() {
    // named function
}

const doSomething = () => {
    // named arrow function
}
```

Notice how the arrow function takes the name as a variable declaration.

Now you might be wondering, why do we have this concept of anonymous functions in JavaScript?

## Why it exists

JavaScript relies heavily on callbacks.  

A callback is a function that will be called (sometimes it could be called in the future).  

Those functions often do **not** require a name, which is when we tend to use anonymous functions.

Here are a few examples:

### Array operations

The most common use case is array operations such as [.forEach](https://blog.learnjavascript.online/posts/javascript-foreach-the-complete-guide/), .map, .filter, etc.

```javascript
const numbers = [1, 2, 3];
numbers.forEach(function (number) {
    // anonymous function
    console.log(number);
});

numbers.forEach(number => {
    // anonymous arrow function
    console.log(number);
});
```

Notice how the function does not take a name, because we will not need to call that function again later on.

### Event listeners

Another common example is event listeners.

```javascript
const button = document.querySelector("button");

button.addEventListener("click", () => {
    // anonymous (arrow) function
    console.log("Button clicked");
});
```

However the moment you need to call **removeEventListener** then you would need to give that function a name. For example:  

```javascript
const button = document.querySelector("button");

const handleClick = () => {
    // named (arrow) function
    console.log("Button clicked");
};

button.addEventListener("click", handleClick);

// remove event listener after 1 second
setTimeout(() => {
   button.removeEventListener("click", handleClick);
}, 1000);
```
