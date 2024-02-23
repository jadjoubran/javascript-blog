---
date: 2020-03-04T00:00:00.000Z
title: JavaScript forEach index
tags:
  - foreach
  - javascript
metaDesc: >-
  Using forEach in JavaScript you can access the "index". Checkout the examples
  for using the JavaScript forEach index.
socialImage: /images/javascript-foreach-index.jpg
_template: post
---

When looping through an array in JavaScript, it may be useful sometimes to get the **index** of every item in the array.

<img class="fcp" src="/images/javascript-foreach-index.jpg" alt="" with="1747" height="1240">

This is possible with **.forEach** method, let's take an example to illustrate it:

```javascript
const apps = ['Calculator', 'Messaging', 'Clock'];

apps.forEach((app, index) => {
  console.log(app, index);
});
```

The output of this code is:

> **"Calculator" 0**
>
> **"Messaging" 1**
>
> **"Clock" 2**

Notice how the **index** starts at 0 and goes all the way until the array's length - 1 (`apps.length - 1` which is 2 here).

Not sure how the forEach method works? Checkout [JavaScript forEach](https://blog.learnjavascript.online/posts/javascript-foreach-the-complete-guide/ 'javascript foreach') for a full guide.

## Real life scenario

Why would the `index` be useful? Here's a real life scenario:

Let's say you have a list of options and would like to tag them with **Option 1**, **Option 2**, etc.

```javascript
const options = ['Milk', 'Cheese', 'Water'];

let html = '<div>';
options.forEach((option, index) => {
  html += `<p>Select option ${index + 1}: ${option}</p>`;
});
html += `</div>`;
console.log(html);
```

The result of the above code is:

```html
<div>
  <p>Select option 1: Milk</p>
  <p>Select option 2: Cheese</p>
  <p>Select option 3: Water</p>
</div>
```

Notice how we added `+ 1` to the `index` because the index is zero based (starts at zero).

## Early exit

Another use case of using the `index` is when you want to stop the forEach once it reaches a certain index.

Note that you can't really **stop** the forEach but you can make it skip the body of the function. Here's an example:

```javascript
const chars = ['A', 'B', 'C', 'D', 'E', 'F'];

chars.forEach((char, index) => {
  if (index >= 3) {
    return;
  }
  console.log(char);
});
```

The output of the above code is:

> "A"
>
> "B"
>
> "C"

Notice how the body of the forEach is being skipped based on the index, with the condition `index >= 3`
