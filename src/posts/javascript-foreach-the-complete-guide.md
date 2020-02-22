---
date: 2020-02-21
title: JavaScript forEach - the complete guide
tags:
- guide
- foreach

---
* \[\] forEach why it's used
* \[\] on arrays
* \[\] with normal function
* \[\] or with arrow function
* \[\] tip: to use singular and why it makes it easier
* \[\] forEach on objects and how to access the data inside

**forEach** is a is a method that you can call on Arrays. 

**forEach** helps you iterate (loop) over array items one by one. Here's an example:  

```javascript
const apps = ["Calculator", "Messaging", "Clock"];

apps.forEach(app => {
    console.log(app);
});
```

If the `=>` is new to you, that's called an arrow function. In this particular example, you will not see a difference between using an arrow function and a regular function, so here's how you can iterate without an arrow function:  

```javascript
const apps = ["Calculator", "Messaging", "Clock"];

apps.forEach(function(app) {
    console.log(app);
});
```

***