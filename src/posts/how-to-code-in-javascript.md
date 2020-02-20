---
date: 2020-02-20
title: How to code in JavaScript
tags:
- introduction
- beginner

---
\**JavaScript** is a programming language used to make

websites dynamic & interactive.  

For example, it allows you to:

\- Show a message when the user clicks on a button

\- Hide a message when the user clicks on the close button

\- Open a sidebar when the user swipes to the right from the edge of

the screen

\- Play a video when you click on the **play** button

\**JavaScript** can also be used on the server side to

write the backend or API of your website. In that context it's called

\**Node** or **NodeJs**.

On the frontend side, JavaScript is often used in combination with

\**HTML** & **CSS**.

\## Basics of JavaScript

Let's start with the basics of JavaScript by looking at a simple

example:

\`\`\`javascript

function sum(a, b) {

return a + b;

}

\`\`\`

This code defines a function (which is a reusable piece of code) called

\**sum**. This means that you can now call

\`sum(1, 3)\` which returns **4**. You can run it

again with different values, such as \`sum(2, 5)\` and it will

return the result of \`2 + 5\` which is **7**.

\### A note on the return keyword

The keyword **return** instructs the function that this is

the result of that function. Think of it as an operation and then when

it completes, it will give you the result of the sum.

\## Strings

You can create a string in JavaScript by simply using the double

quotes (") or single quotes (') and later you will see the backtick

character.  

Here's an example:

\`\`\`javascript

"This is a string";

'this is another string!'

\`\`\`

There is no difference between using a double quote or a single quote.

They are exactly the same. Both of these strings do not support

interpolation (which means having a variable inside of them).

\### Basic String properties

The **.length** property is used to return the length of

the string. Here's an example of getting the length of

\**"Nice!"**:

\`\`\`javascript

"Nice!".length;

// returns 5

\`\`\`

\### Basic String methods

Here are some common methods that you can call on strings:

\#### .includes(searchString)

This method returns true when the searchString is included inside the

parent string. For example:

\`\`\`javascript

"Hello World".includes("Hello"); // true

"Hello World".includes("Potato"); // false

\`\`\`

\#### .toUpperCase()

This will return a new string that has all of its characters in upper

case:

\`\`\`javascript

"hello".toUpperCase(); // "HELLO";

\`\`\`

\#### .toLowerCase()

This will return a new string that has all of its characters in lower

case:

\`\`\`javascript

"NICe".toLowerCase(); // "nice";

\`\`\`

\## Numbers

1, 2, 0, -5, 3.5, 2000, 2019, -23.51.  

All of these are examples of Numbers in JavaScript. It doesn't matter if

it's negative or positive, if it has a decimal (values after the

\**.**) or not. We call them numbers.

\### Converting from number to string

You can convert a number to string by simply calling the .toString()

method. Let's take an example where we have a variable called answer

with a value 42:

\`\`\`javascript

answer.toString(); //"42"

\`\`\`

\### Converting from string to number

In some scenarios, you'd like to convert from a string to a number.

For that, you'd have to use the

\**Number.parseInt** method. Here's an example:

\`\`\`javascript

Number.parseInt("42", 10); //42

\`\`\`

Note that the **Number** in

\**Number.parseInt("42")** is an Object in JavaScript that

contains methods related to numbers, and

\**.parseInt()** is one of them. It's a method that you

call on **Number** to convert a string into a number.

The 2nd argument is called radix. A radix of 10 means that we're using

the decimal system. In short, humans use the decimal system (because

we have 10 fingers, from 0 to 9), and computers use the binary system

(on and off, 0s and 1s).

Unfortunately parseInt **does not default** to a radix of

10, thus it is recommended that you always specify it. If you omit the

radix, it may or may not work as you expect based on the string you

provided as a first argument. Thus to be safe, always specify the

radix.