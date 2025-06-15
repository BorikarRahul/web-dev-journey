# JavaScript

## Crash Course of JavaScript with [Traversy Media ](https://youtu.be/hdI2bqOjy3c?si=nMls47vKl6xUsVWM)

- High level, interpreted programming language
- conform to ECMAScript standard Specification
- Multi-paradigm: supports object-oriented, imperative, and functional programming styles
- Runs on the client/browser as well as on the server (Node.js)

#### Why Learn JS?

- It is the programming language of the brower.
- build very interactive user interfaces with frameworks like React, Angular, or Vue.js
- Used in building very fast server-side & full stack applications
- Use in mobile development ( react native, NativeScropt, Ionic )
- Used desktop applications development (Electron JS)

#### What you Will Learn in this Course ? Crash Course

## What You Will Learn in This Course

Below are the main topics covered in this course, each with a brief description and example to help you understand better:

---

| Topic                                        | Description                                                                                        | Example                                                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Variables & Data Types**                   | Store and manage data using variables. Data types include numbers, strings, booleans, arrays, etc. | `let age = 25; let name = "Rahul"; let isStudent = true;`                                 |
| **Arrays**                                   | Store multiple values in a single variable.                                                        | `let fruits = ["apple", "banana", "orange"];`                                             |
| **Object Literals**                          | Group related data and functions together.                                                         | `let person = { name: "Rahul", age: 25 };`                                                |
| **Methods for strings, arrays, objects**     | Use built-in functions to manipulate data.                                                         | `"hello".toUpperCase(); fruits.push("grape"); Object.keys(person);`                       |
| **Loops - for, while, for…of, forEach, map** | Repeat actions multiple times using different loop types.                                          | `for(let i=0;i<3;i++){console.log(i);}`<br>`fruits.forEach(fruit => console.log(fruit));` |
| **Conditionals (if, ternary & switch)**      | Make decisions in code based on conditions.                                                        | `if(age>18){...} else {...}`<br>`let msg = age>18 ? "Adult" : "Minor";`                   |
| **Functions (normal & arrow)**               | Write reusable blocks of code.                                                                     | `function add(a,b){return a+b;}`<br>`const mul = (a,b) => a*b;`                           |
| **OOP (prototypes & classes)**               | Organize code using objects, prototypes, and classes.                                              | `class Animal { constructor(name){this.name=name;} }`                                     |
| **DOM Selection**                            | Select HTML elements using JavaScript.                                                             | `document.getElementById("main");`<br>`document.querySelector(".btn");`                   |
| **DOM manipulation**                         | Change HTML content, structure, or style dynamically.                                              | `element.textContent = "Hello!"; element.style.color = "red";`                            |
| **Events**                                   | Respond to user actions like clicks or key presses.                                                | `button.addEventListener("click", () => alert("Clicked!"));`                              |
| **Basic Form Validation**                    | Check user input before submitting a form.                                                         | `if(input.value === "") { alert("Field required!"); }`                                    |

---

### More Examples

#### Array Example

```js
let numbers = [1, 2, 3, 4];
numbers.push(5); // [1,2,3,4,5]
```

#### Object Example

```js
let car = {
  brand: "Toyota",
  year: 2020,
};
console.log(car.brand); // Toyota
```

#### Loop Example

```js
for (let fruit of fruits) {
  console.log(fruit);
}
```

#### DOM Manipulation Example

```js
document.querySelector("h1").style.color = "blue";
```

#### Event Example

```js
document.querySelector("button").onclick = function () {
  alert("Button was clicked!");
};
```

---

These topics will give you a strong foundation in JavaScript and web development, enabling you to build interactive and dynamic web applications.

---

## JavaScript Basics: Console, let, const, and Data Types

Below is a detailed explanation of each concept, including their `typeof` result and why/when to use them.

---

| Feature       | Description                                                                                | Example                  | `typeof` Result | Why/When to Use                |
| ------------- | ------------------------------------------------------------------------------------------ | ------------------------ | --------------- | ------------------------------ |
| **console**   | Used to output messages to the browser console for debugging.                              | `console.log("Hello");`  | n/a             | Debugging and inspecting code  |
| **let**       | Declares a block-scoped variable. Can be reassigned, but not redeclared in the same scope. | `let age = 25;`          | n/a             | When value may change          |
| **const**     | Declares a block-scoped constant. Cannot be reassigned or redeclared.                      | `const pi = 3.14;`       | n/a             | When value should not change   |
| **String**    | Sequence of characters, text data.                                                         | `let name = "Rahul";`    | `"string"`      | For textual data               |
| **Number**    | Numeric values (integer or floating point).                                                | `let score = 99.5;`      | `"number"`      | For all numbers                |
| **Boolean**   | Logical value: `true` or `false`.                                                          | `let isActive = true;`   | `"boolean"`     | For true/false logic           |
| **null**      | Represents intentional absence of any value.                                               | `let empty = null;`      | `"object"`      | To reset/clear a variable      |
| **undefined** | Variable declared but not assigned a value.                                                | `let x;`                 | `"undefined"`   | Default for uninitialized vars |
| **Symbol**    | Unique and immutable primitive value (ES6+).                                               | `let id = Symbol("id");` | `"symbol"`      | For unique object keys         |

---

### Examples

```js
// Console
console.log("Hello, world!"); // Output: Hello, world!
## Types of `console` Methods in JavaScript

The `console` object provides several methods for different types of output and debugging:

| Method            | Description                                 | Example Usage                        |
|-------------------|---------------------------------------------|--------------------------------------|
| `console.log()`   | General output for debugging/info           | `console.log("Hello");`              |
| `console.error()` | Outputs error messages (usually red)        | `console.error("This is an error");` |
| `console.warn()`  | Outputs warning messages (usually yellow)   | `console.warn("This is a warning");` |
| `console.info()`  | Outputs informational messages              | `console.info("Info message");`      |
| `console.debug()` | Outputs debug-level messages                | `console.debug("Debug info");`       |
| `console.table()` | Displays tabular data as a table            | `console.table([1,2,3]);`            |
| `console.dir()`   | Displays an interactive list of properties  | `console.dir(document.body);`        |
| `console.group()` | Groups messages together                    | `console.group("Group");`            |
| `console.groupEnd()` | Ends a group                             | `console.groupEnd();`                |
| `console.time()`  | Starts a timer                              | `console.time("timer");`             |
| `console.timeEnd()` | Ends a timer and logs the duration        | `console.timeEnd("timer");`          |
| `console.clear()` | Clears the console                          | `console.clear();`                   |
| `console.assert()`| Writes an error if assertion is false       | `console.assert(1 === 2, "Fail");`   |
| `console.count()` | Logs the number of times called with a label| `console.count("myLabel");`          |

**Note:**
The most commonly used are `log`, `error`, and `warn`, but others are useful for advanced debugging


// let and const
let age = 25;
age = 26; // OK

const pi = 3.14;
// pi = 3.15; // Error: Assignment to constant variable

// Data Types
let name = "Rahul"; // String
let score = 99.5; // Number
let isActive = true; // Boolean
let empty = null; // null
let notAssigned; // undefined
let uniqueId = Symbol("id"); // Symbol

// typeof examples
console.log(typeof name); // "string"
console.log(typeof score); // "number"
console.log(typeof isActive); // "boolean"
console.log(typeof empty); // "object" (this is a known JavaScript quirk)
console.log(typeof notAssigned); // "undefined"
console.log(typeof uniqueId); // "symbol"
```

---

**Why/When to Use:**

- Use `console` for debugging and checking values.
- Use `let` for variables that will change, `const` for constants.
- Use `String`, `Number`, `Boolean` for storing respective data.
- Use `null` to intentionally clear a variable.
- Use `undefined` for uninitialized variables (default).
- Use `Symbol` for unique keys in objects, especially when you want to avoid

---

## JavaScript Basics Explained

### Array

An array is a collection of values stored in a single variable. Arrays can hold any data type.

**Example:**

```js
let fruits = ["apple", "banana", "orange"];
```

---

### Object

An object stores data as key-value pairs. Each key (property) has a value.

**Example:**

```js
let person = {
  name: "Rahul",
  age: 25,
};
```

---

### for Loop

A `for` loop repeats a block of code a specific number of times.

**Example:**

```js
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
```

---

### while Loop

A `while` loop repeats a block of code as long as a condition is true.

**Example:**

```js
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

---

### if Statement

Executes code if a condition is true.

**Example:**

```js
if (age > 18) {
  console.log("Adult");
}
```

---

### if else Statement

Executes one block if the condition is true, another if it is false.

**Example:**

```js
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

### if elseif Statement

Checks multiple conditions in sequence.

**Example:**

```js
if (score > 90) {
  console.log("Excellent");
} else if (score > 75) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}
```

---

### forEach

Executes a function for each element in an array.

**Example:**

```js
fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

---

### map

Creates a new array by applying a function to each element.

**Example:**

```js
let lengths = fruits.map(function (fruit) {
  return fruit.length;
});
// lengths = [5, 6, 6]
```

---

### filter

Creates a new array with elements that pass a test.

**Example:**

```js
let longFruits = fruits.filter(function (fruit) {
  return fruit.length > 5;
});
// longFruits = ["banana", "orange"]
```
