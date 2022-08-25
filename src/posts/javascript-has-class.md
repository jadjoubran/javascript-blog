---
date: 2022-08-24
title: JavaScript hasclass using classList
tags:
- guide
- javascript
metaDesc: 'JavaScript has class: using classList to check if an element has a class
  or not in JavaScript'
socialImage: "/images/javascript-has-class.jpg"

---
If you're looking for **JavaScript has class** or **JavaScript hasclass** then there's a high probability that you used to work with **jQuery** in the past.

![](/images/javascript-has-class.jpg)

It's great news that you don't need a library anymore to check if an element has a class or not because you can now simply do it with a call to

    classList.contains("class-name")

Here's an example. Say you've got the following HTML:

```html
<div id="box1" class="active"></div>
<div id="box2"></div>
```

Then you can check if these boxes have the class `active` using the following JavaScript:

```javascript
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');

box1.classList.contains('active'); // true
box2.classList.contains('active'); // false
```

## Function signature

The function signature is:

`classList.contains(className)`

Note that you should only give the `className` rather than a selector with a "**.**" because `classList` is only expecting a class name rather than a selector.

For example, `document.querySelector("#box1").classList.contains(".active")` is incorrect ❌. It's looking for a class name of `.active`. Instead, it should be `active` (without the `.`).

## What is classList?

Any DOM element will have a `classList` object which contains a collection of methods that let you manage the classes, such as adding/removing.

Here are some of the most common use cases you can do with classList:

The examples below assume the following HTML:

```html
<div id="my-element"></div>
```

which then we select using querySelector:

```javascript
const element = document.querySelector("#my-element");
```

Make sure to update the selector based on your HTML code.

### Add one or more classes

You can add a class to an element with classList.add:

```javascript
element.classList.add("some-class");
```

Also, adding more than 1 class is possible. You can pass every class you want to add as an extra argument:

```javascript
element.classList.add("some-class", "another-class");
```

After running this line, the element would look like this:

```html
<div id="my-element" class="some-class another-class"></div>
```

Check out:

* [How to add class to element](https://codetogo.io/how-to-add-class-to-element-in-javascript/ "How to add class to element in JavaScript")
* [How to add multiple classes to element](https://codetogo.io/how-to-add-multiple-classes-to-element-in-javascript/ "How to add multiple classes to element in JavaScript")

### Remove one or more classes

You can also remove one more classes.  
Let's start by removing the class **`active`**

```javascript
element.classList.remove("active");
```

Similarly to classList.add, you can also remove multiple classes at the same time by passing the class names as different arguments:

```javascript
element.classList.remove("first-class", "another-class");
```

Check out how to [remove a class from an element](https://codetogo.io/how-to-remove-class-from-element-in-javascript/)

### Toggle classes

Toggling classes is especially useful when you have a click event handler and what to add a class the first time, then remove it the next it's clicked (and so on).

```javascript
element.classList.toggle("some-class", "another-class");
```

Here's an example of how you can toggle an element to become **active**:

```javascript
element.addEventListener("click", event => {
    event.currentTarget.classList.toggle("active");
});
```

This will end up adding the class `active` the first time you click on element and then remove it the next time you click on it.

Check out how to [toggle the class of an element](https://codetogo.io/how-to-toggle-class-of-element-in-javascript/)

### Replace class

This is a useful "shortcut" as it allows you to replace 2 lines with 1.

You can replace the following 2 lines:

```javascript
element.classList.remove("old-one");
element.classList.add("new-one");
```

By just one clean line:

```javascript
element.classList.replace("old-one", "new-one");
```

Check out how to [replace the class of an element](https://codetogo.io/how-to-replace-a-class-of-element-in-javascript/)