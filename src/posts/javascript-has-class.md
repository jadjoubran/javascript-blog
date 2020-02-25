---
date: 
title: JavaScript has class
tags: []
metaDesc: ''
socialImage: ''

---
If you're looking for **JavaScript has class** or **JavaScript hasclass** then there's a high probability that you used to work with **jQuery** in the past.  

It's great news that you don't need a library anymore to check if an element has a class or not, because you can now simply do it with a class to `classList.contains("class-name")`

Here's an example. Say you've got the following HTML:

```html
<div id="box1" class="active"></div>
<div id="box2"></div>
```

Then you can check if these boxes have the class `active` using the following JavaScript: 

```javascript
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

box1.classList.contains("active"); //true
box2.classList.contains("active"); //false
```

## Function signature

The function signature of classList.contains is:  

`classList.contains(className)`

Note that you should only give the **className** rather than a selector with a "**.**" because **classList** is only expecting a class.

## What is classList?

Any DOM element will have a **classList** object which contains a collection of methods that let you manage the classes, such as adding/removing.  

Here are some of the most common use cases you can do with classList:  

### Add class(es)

```javascript
element.classList.add("class1", "class2");
```

Checkout:

* [How to add class to element in JavaScript](https://codetogo.io/how-to-add-class-to-element-in-javascript/ "How to add class to element in JavaScript")
* [How to add multiple classes to element in JavaScript](https://codetogo.io/how-to-add-multiple-classes-to-element-in-javascript/ "How to add multiple classes to element in JavaScript")

### Remove class(es)

```javascript
element.classList.remove("class1, "class2");
```

Checkout:

* [How to remove class from element in JavaScript](https://codetogo.io/how-to-remove-class-from-element-in-javascript/ "How to remove class from element in JavaScript")
* [How to remove multiple classes from element in JavaScript](https://codetogo.io/how-to-remove-multiple-classes-from-element-in-javascript/ "How to remove multiple classes from element in JavaScript")

### Toggle class(es)

```javascript
element.classList.toggle("class1", "class2");
```

Checkout [How to toggle class of element in JavaScript](https://codetogo.io/how-to-toggle-class-of-element-in-javascript/ "How to toggle class of element")

### Replace class

```javascript
element.classList.replace("old-one", "new-one");
```

Checkout [How to replace a class of element in JavaScript](https://codetogo.io/how-to-replace-a-class-of-element-in-javascript/ "How to replace a class of element in JavaScript")