---
date: 2020-03-14T00:00:00.000Z
title: JavaScript in array
tags:
  - javascript
  - arrays
metaDesc: >-
  As of ES6 (ES2015), there's a new and easy way to check of an item exists in
  an array, also known as in array.
socialImage: /images/javascript-in-array.jpg
_template: post
---

As of ES6 (ES2015), there's a new and easy way to check of an item exists in an array, also known as **in array**.

This is now possible by using the **Array.includes()** method which returns a boolean.

![](/images/javascript-in-array.jpg)

Here's a basic example:

```javascript
const names = ["Alex", "Sam", "Blane"];

names.includes("Alex"); //true
names.includes("Red"); //false
```

Notice how we call `.includes` on the array **names** and how it returns either true or false.

## Use cases

This is useful to check if an item exists in an array, however a more important use case is refactoring some if conditions. For example, assuming we want to check a variable **status**, instead of writing this long if condition:

```javascript
if (status === "en_route" || status === "pending" || status === "on_hold"){
    // do something
}
```

You can refactor it to a much more readable condition using the **javascript in array** method you learned above:

```javascript
const statuses = ["en_route", "pending", "on_hold"];

if (statuses.includes(status)){
    // do something
}
```

Notice how we define the allowed statuses in an array, and then call `statuses.includes(status)`, which will return either **true** or **false**.
