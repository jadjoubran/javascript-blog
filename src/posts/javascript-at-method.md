---
date: 2022-08-15
title: JavaScript .at() method – the complete guide.
tags:
- javascript at()
- string.at()
- at()
- array.at()
metaDesc: Learn how to use string.at() and array.at() in JavaScript.
socialImage: "/images/javascript-at-method.jpg"

---
In 2022, JavaScript gained the `.at()` method for Strings and Arrays.

In this article, we'll look at how this method works and how you can use it in your projects.

## String.at(index = 0)

The `.at()` method can be used to access a character from a string. It accepts one argument: the index you'd like to access. The `index` parameter defaults to `0`.

### Basic usage

Here are some examples:

```javascript
const title = "JavaScript";

title.at(); // index defaults to 0 -> "J"
title.at(0); // reads first character -> "J"
title.at(1); // reads second character -> "a"
```

### Out of bound index

If you try accessing an index beyond the string's length, you will get undefined:

```javascript
const action = "Go";

title.at(0); // "G"
title.at(1); // "o"
title.at(2); // undefined
title.at(10); // undefined
```

So far, the `.at()` method looks pretty similar to the square bracket `[]` syntax that JavaScript had for a long time.

### Negative index

The major difference between the `.at()` method and the square bracket syntax can be seen when trying to access a character towards the end of the string.

For example, to access the last character of a string using square brackets, we had to calculate the index of the last character, which is the length of the string - 1:

```javascript
const name = "Jad"; // 3 characters -> last index is 3 - 1 = 2

name[name.length]; // undefined
name[name.length - 1]; // "d" (last character)
```

We cannot specify negative indices, for example, `-1`, due to legacy reasons.

This is the primary reason that initiated the `.at()` proposal. Since it's a new method, it can support negative indices.

Thus, you can specify `-1` to _walk back_ from the end of the string and read the last character:

```javascript
const name = "Kate";

name.at(-1); // "e" (last character)
name.at(-2); // "t"; (second to last character)
```

### Decimal number as the index

There's another interesting use case of the `.at()` method. If you provide an index with a decimal, the index will be converted to an integer. This means you're able to pass values such as `1.5` and `2.51` to the `.at()` system. This would **not** work when using the square bracket syntax.

```javascript
const name = "Jad";

name.at(1); // "a"
name.at(1.1); // "a"
name.at(1.5); // "a"
name.at(1.99999); // "a"
```

As you can see, the index is converted to a number. It is **not** rounded. Instead, all the values after the decimal point are ignored.

You may be wondering why this would be useful.

The benefit of accepting decimal numbers is the ability to use the result of methods that return a decimal number, such as `Math.random()`.

For example, if you have a string made up of two characters, you can pass `Math.random() * 2` as an index. This will let you randomly pick a character:

```javascript
const action = "Go";

action.at(Math.random() * 2); // Either "G" or "o" (randomly chosen)
action.at(Math.random() * 2); // Either "G" or "o" (randomly chosen)
```

This works because `Math.random()` returns a random number that satisfies the following condition:

```javascript
0 <= Math.random() < 1
```

In other words, the random number is between 0 and 1. It could be 0, but it's **never** 1. This means the first digit of `Math.random()` will always be 0. The digits after the decimal point will be random!

So, if we have two items, we can multiply `Math.random()` by 2 to get a number between 0 and 1.99999 (with a few more nines). Combined with `.at()`, this allows us to choose a character randomly!

Here's another example that returns a random character for any string length:

```javascript
const name = "Jad";

name.at(Math.random() * name.length); // Pick a random character ('J', 'a', or 'd')
```

## Array.at(index = 0)

The `.at()` method is also available on arrays! Its usage is precisely the same as that for strings. Instead of characters, you're accessing an item from an array.

So, we'll focus on providing some examples.

```javascript
const people = ["Sam", "Charley", "Alex"];

people.at(); // index defaults to 0 -> "Sam"
people.at(0); // first item of the array -> "Sam"
people.at(1); // second item of the array -> "Charley"
people.at(2); // third item of the array -> "Alex"
people.at(-1); // last item of the array -> "Alex"
people.at(-2); // second to last item of the array -> "Charley"
```

You can also choose a random item using the `Math.random() * people.length` index:

```javascript
const people = ["Sam", "Charley", "Alex"];

people.at(Math.random() * people.length); // Pick a random item
```

### Usage with arrays of objects

The `.at()` method also works with arrays of objects. The item you'll get back will be an object! Here's an example:

```javascript
const users = [{id: 1, name: "Sam"}, {id: 2, name: "Alex"}];

users.at(0); // {id: 1, name: "Sam"}
users.at(-1); // {id: 2, name: "Alex"}
```

## Conclusion

So, should you stop using the `[]` brackets? Probably not! There's nothing wrong with using the `[]` syntax. It works, and it won't be deprecated.

In general, the major takeaway of this article is that if you'd like to access the last item (or an item that you reach while counting from the end of a string/array), you can use the `.at()` method for an elegant answer. Additionally, if you need to pass decimal numbers, then the `.at()` method makes it easy!