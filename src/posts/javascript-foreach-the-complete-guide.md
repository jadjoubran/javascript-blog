---
date: 2020-02-21
title: JavaScript forEach - the complete guide
tags:
- javascript
- guide
- foreach
metaDesc: The complete guide on how to use forEach to iterate over arrays in JavaScript.
socialImage: "/images/javascript-foreach.jpg"

---
The **forEach** method is a method that you can call on Arrays.

![JavaScript forEach - a complete guide](/images/javascript-foreach.jpg)

It helps you iterate (loop) over array items one by one. Here's an example:

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

The output (in the console) of both of these snippets of code is the following:

    "Calculator"
    "Messaging"
    "Clock"

Notice how the callback function passed to the **forEach** is being called **for every single element** of the array.

## Best practices

A couple of best practices to keep in mind:

1. Try to have the name of the array in plural (example: **apps**)
2. Then the first argument inside the forEach should be in singular (example: **app**)
3. Always start with a **console.log(item)** as this helps you visualise the items that you just iterated over (one by one).

You can also practise reading this in English as following:

> We have an **apps** array and we iterate over it one by one. Now we can start thinking about a single item of that array, which is one **app**

## NodeList

When working with the DOM, it's common to use the **document.querySelectorAll(css_selector)** method. This method returns a **NodeList** which is an element that looks like an array (but is not an array).

However the **NodeList** supports the same **.forEach** method. So you can use what you learned above to iterate over items in the NodeList, here's an example:

```javascript
const items = document.querySelectorAll("ul li");

items.forEach(item => {
    console.log(item);
});
```

## Iterate over array of objects

A common data structure that you will be working with is **arrays of objects**, for example:

```javascript
const users = [{
    id: 1,
    name: "Alex"
}, {
    id: 2,
    name: "Sam"
}];
```

Iterating over this array is the same as above, however keep in mind that the **item** you will get will be an **object**.

```javascript
users.forEach(user => {
     console.log(user); // an object
     console.log(user.id);
     console.log(user.name);
});
```

Because every **user** (or item) is an object, you can access the keys **id** and **name** by calling **user.id** and **user.name**.

There are also other array methods that work similarly, like the **.map** but that's for another article.

## Using the index in the forEach

You can also access the **index** of every item of an array inside the callback passed to forEach.

```javascript
const apps = ["Calculator", "Messaging", "Clock"];

apps.forEach(function(app, index) {
    console.log(index, app);
});
```

This will log:

> 0 "Calculator"
>
> 1 "Messaging"
>
> 2 "Clock"

Checkout my other post on [javascript forEach index](/posts/javascript-foreach-index/ "javascript foreach index") for more details.

### Early exit pattern

Using the element index it is possible to skip the callback for certain indices, for example:

```javascript
const apps = ["Calculator", "Messaging", "Clock", "Maps"];

apps.forEach(function(app, index) {
    if (index < 2) {
        return false
    }
    console.log(app);
});
```

The result of that code is:

> "Click"
>
> "Maps"

Note that the callback passed to forEach will still run in all cases, however we exit the function as soon as we see that the index is less than 2. This is called an early exit.

## forEach function signature

Now that we've seen the first 2 arguments: **callback** and **index**, let's take a look at the full function signature:

```javascript
array.forEach(callback(item, index, array))
```

As you can see the callback receives the current item, followed by the index and finally it also receives the array that we have called forEach on.

Here's an example:

```javascript
const people = ["Sam", "Alex"]

people.forEach((person, index, array) => {
	console.log(array)
});
```

Would output:

> \["Sam", "Alex"\]
>
> \["Sam", "Alex"\]

So the **array** argument allows you to get the array that we called forEach on, in case you don't have access to it in the current scope.