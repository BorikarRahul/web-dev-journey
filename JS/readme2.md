# Learn Form

[30 DaysCoding](https://courses.30dayscoding.com/s/courses/667b355e15b5126c4d9b0612/take)

## What is JS?

**JS** stands for **JavaScript**. It is a high-level, interpreted programming language that is primarily used to make web pages interactive and dynamic. JavaScript can manipulate HTML and CSS, handle user events, validate forms, create animations, and much more. It runs in all modern web browsers and is also used on the server side with environments like Node.js.

### What Can JS Be Used For?

- Adding interactivity to web pages (e.g., buttons, forms, sliders)
- Manipulating HTML and CSS dynamically
- Validating user input in forms
- Creating animations and visual effects
- Fetching data from servers without reloading the page (AJAX)
- Building web applications (front-end frameworks like React, Angular, Vue)
- Server-side programming with Node.js
- Game development
- Mobile app development (using frameworks like React Native)

#### Client-Side Development

JavaScript is primarily used for client-side development, meaning it runs in the user's web browser. This allows developers to create responsive and interactive user interfaces that enhance the user experience.

#### Server-Side Development

JavaScript can also be used on the server side with environments like Node.js, allowing developers to build scalable and efficient web applications using the same language for both client and server.

#### Mobile and Desktop Applications

JavaScript can be used to build mobile applications using frameworks like React Native, and desktop applications using Electron, allowing developers to create cross-platform applications with a single codebase.

**In summary:**  
JavaScript is essential for modern web development, enabling you to build

## JavaScript Variable Types (with Examples & Descriptions)

Below are the main variable types in JavaScript, along with examples and descriptions—useful for interviews:

| Type      | Description                                     | Example                         |
| --------- | ----------------------------------------------- | ------------------------------- |
| String    | Represents textual data                         | `let name = "Rahul";`           |
| Number    | Represents numeric values (integer or float)    | `let age = 25; let pi = 3.14;`  |
| Boolean   | Represents logical values: `true` or `false`    | `let isActive = true;`          |
| null      | Represents intentional absence of any value     | `let empty = null;`             |
| undefined | Variable declared but not assigned a value      | `let x; // x is undefined`      |
| Symbol    | Represents a unique and immutable value (ES6+)  | `let id = Symbol("id");`        |
| Object    | Collection of key-value pairs                   | `let person = {name: "Rahul"};` |
| Array     | Ordered list of values (special type of object) | `let nums = [1, 2, 3];`         |

---

##### Examples

```js
let name = "Rahul"; // String
let age = 25; // Number
let isStudent = false; // Boolean
let address = null; // null
let phone; // undefined
let uniqueId = Symbol("id"); // Symbol
let person = { name: "Rahul", age: 25 }; // Object
let scores = [90, 80, 70]; // Array
```

---

##### Interview Tips

- **String**: Used for text. Always in quotes.
- **Number**: Used for all numbers (integers and decimals).
- **Boolean**: Only `true` or `false`.
- **null**: Explicitly set to mean "no value".
- **undefined**: Default for uninitialized variables.
- **Symbol**: Unique identifiers, often for object keys.
- **Object**: Used for structured data.
- **Array**: Used for lists of items.

#### **Note:** Arrays are technically objects in JavaScript, but

---

#### Built-in Objects vs User-Defined Objects in JavaScript

##### Built-in Objects

These are objects provided by JavaScript itself. They offer useful properties and methods for common tasks.

**Examples:**

| Object   | Description                             | Example Usage              |
| -------- | --------------------------------------- | -------------------------- |
| `Math`   | Mathematical constants and functions    | `Math.random()`, `Math.PI` |
| `Date`   | Work with dates and times               | `new Date()`               |
| `Array`  | Work with ordered collections of values | `[1, 2, 3].push(4)`        |
| `String` | Work with text                          | `"hello".toUpperCase()`    |
| `Object` | Base object for all objects             | `Object.keys(obj)`         |
| `JSON`   | Parse and stringify JSON data           | `JSON.parse(str)`          |

---

##### User-Defined Objects

These are objects you create yourself to model real-world entities or custom data structures.

**Example 1: Object Literal**

```js
let person = {
  name: "Rahul",
  age: 25,
  greet: function () {
    console.log("Hello!");
  },
};
person.greet(); // Output: Hello!
```

**Example 2: Constructor Function**

```js
function Car(brand, year) {
  this.brand = brand;
  this.year = year;
}
let myCar = new Car("Toyota", 2020);
console.log(myCar.brand); // Output: Toyota
```

**Example 3: ES6 Class**

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}
let dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a sound.
```

---

**Summary:**

- **Built-in objects** are provided by JavaScript for common tasks.
- **User-defined objects** are created by you to represent custom data

#### BigInt in JavaScript

**BigInt** is a built-in JavaScript data type that allows you to represent integers larger than the `Number` type can safely store (greater than 2<sup>53</sup> - 1).

##### Why use BigInt?

- JavaScript's `Number` type can only safely represent integers up to 9007199254740991 (`Number.MAX_SAFE_INTEGER`).
- For calculations with very large integers (e.g., cryptography, scientific calculations), use `BigInt`.

#### How to create a BigInt

**Example:**

```js
let bigNumber = 1234567890123456789012345678901234567890n; // Add 'n' at the end
let anotherBig = BigInt("987654321098765432109876543210");
```

##### Operations with BigInt

You can use standard arithmetic operators, but both operands must be BigInt:

```js
let sum = 100000000000000000000n + 200000000000000000000n; // 300000000000000000000n
```

##### typeof BigInt

```js
console.log(typeof bigNumber); // "bigint"
```

##### Notes

- You cannot mix `BigInt` and `Number` in operations directly.
- Use BigInt for precise, large integer calculations.

## JavaScript Operators with Examples

- Arithmetic Operators: `+`, `-`, `*`, `/`, `%`
- Assignment Operators: `=`, `+=`, `-=`, `*=`, `/=`
- Comparison Operators: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- String Operators: `+` (concatenation)
- Logical Operators: `&&`, `||`, `!`
- Bitwise Operators: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`
- Ternary Operator: `condition ? expr1 : expr2`
- Typeof Operator: `typeof variable`

**Arithmetic Operators**

- `+` addition: `2 + 3 // 5`
- `-` subtraction: `5 - 2 // 3`
- `*` multiplication: `4 * 2 // 8`
- `/` division: `10 / 2 // 5`
- `%` modulus (remainder): `7 % 3 // 1`
- `**` exponentiation: `2 ** 3 // 8`
- `++` increment: `let a = 1; a++; // a is now 2`
- `--` decrement: `let b = 2; b--; // b is now 1`

**Assignment Operators**

- `=` assigns a value: `let x = 5;`
- `+=` adds and assigns: `x += 2; // x is now 7`
- `-=` subtracts and assigns: `x -= 1; // x is now 6`
- `*=` multiplies and assigns: `x *= 3; // x is now 18`
- `/=` divides and assigns: `x /= 2; // x is now 9`
- `%=` modulus and assigns: `x %= 4; // x is now 1`
- `**` exponentiation and assigns: `x **= 2; // x is now 1 (a = 10, b = 3, a **= b console.log(a) = 1000)`

**Comparison Operators**

- `==` equal to (loose): `5 == "5" // true`
- `===` equal to (strict): `5 === "5" // false`
- `!=` not equal (loose): `5 != "6" // true`
- `!==` not equal (strict): `5 !== "5" // true`
- `>` greater than: `7 > 3 // true`
- `<` less than: `2 < 5 // true`
- `>=` greater than or equal: `5 >= 5 // true`
- `<=` less than or equal: `4 <= 3 // false`

**Logical Operators**

- `&&` logical AND: `(a > 0 && b > 0)`
- `||` logical OR: `(a > 0 || b > 0)`
- `!` logical NOT: `!(a > 0)`

**String Operator**

- `+` concatenation: `"Hello" + " World" // "Hello World"`

**Conditional (Ternary) Operator**

- `? :` shorthand for if-else: `let result = age > 18 ? "Adult" : "Minor";`

**Type Operators**

- `typeof` returns the type: `typeof 5 // "number"`
- `instanceof` checks instance: `arr instanceof Array // true`

**Bitwise Operators**

- `&` AND: `5 & 1 // 1`
- `|` OR: `5 | 1 // 5`
- `^` XOR: `5 ^ 1 // 4`
- `~` NOT: `~5 // -6`
- `<<` left shift: `5 << 1 // 10`
- `>>` right shift: `5 >> 1 // 2`
- `>>>` unsigned right shift: `5 >>> 1

## Functions in JavaScript

Functions in JavaScript are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return outputs (values).
Functions can be defined in several ways, including function declarations, function expressions, and arrow functions.

```javascript
function fun(parameter1, parameter2) {
  // code to be executed
  console.log(parameter1 + parameter2); // example action
  //return value; // optional return statement
}
// to call a function
fun("argument =" "Hello", " World");
```

Functions in JavaScript are reusable blocks of code designed to perform a specific task. They help organize code, avoid repetition, and make programs easier to maintain.

### Why use functions?

- **Reusability:** Write once, use many times.
- **Organization:** Break complex problems into smaller, manageable pieces.
- **Maintainability:** Easier to update and debug code.

---

### Function Declaration

```js
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5
```

---

### Function Expression

```js
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 3)); // Output: 6
```

---

### Arrow Function (ES6)

```js
const subtract = (a, b) => a - b;
console.log(subtract(5, 2)); // Output: 3
---
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // Output: 5
```

---

### Parameters and Arguments

- **Parameters** are variables listed in the function definition.
- **Arguments** are values passed to the function when calling it.

```js
function greet(name) {
  // 'name' is a parameter
  console.log("Hello, " + name);
}
greet("Rahul"); // "Rahul" is an argument
```

---

### Return Statement

A function can return a value using the `return` keyword.

```js
function square(x) {
  return x * x;
}
let result = square(4); // result is 16
```

```javascript
IIFEs (Immediately Invoked Function Expressions)

(function () {
  console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();
```

## IIFE (Immediately Invoked Function Expression)

An **IIFE** is a function in JavaScript that runs as soon as it is defined.  
It is often used to create a private scope and avoid polluting the global namespace.

### Syntax

```js
(function () {
  // code inside IIFE
  console.log("This is an IIFE (Immediately Invoked Function Expression)");
})();
```

### How it works

- The function is wrapped in parentheses `()` to turn it into an expression.
- The final `()` invokes the function immediately after it is defined.

### Why use IIFE?

- To create a private scope for variables (they can't be accessed outside the IIFE).
- To avoid variable name conflicts in the global scope.
- Useful in modular code and when you want to execute code right away.

**Example with parameters:**

```js
(function (name) {
  console.log("Hello, " + name + "!");
})("Rahul"); // Output: Hello, Rahul!
```

**Summary:**  
 is a common JavaScript pattern for immediate execution and scope isolation.

---

## Higher-Order Functions (HOF) in JavaScript

A **Higher-Order Function (HOF)** is a function that does at least one of the following:

- Takes one or more functions as arguments (parameters)
- Returns a function as its result

Higher-order functions allow you to abstract or isolate actions, effects, or async flow control, and are a key feature of functional programming in JavaScript.
Higher-order Functions that takes other function as argument or return them.

---

### Common Examples

#### 1. Passing a Function as an Argument

```js
function greet(name) {
  return "Hello, " + name + "!";
}

function processUserInput(callback) {
  let name = "Rahul";
  console.log(callback(name));
}

processUserInput(greet); // Output: Hello, Rahul!
```

#### 2. Returning a Function

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10
```

#### 3. Array Methods as HOFs

Many array methods are higher-order functions because they take a function as an argument:

```js
let numbers = [1, 2, 3, 4];

let squares = numbers.map(function (num) {
  return num * num;
});
// squares = [1, 4, 9, 16]

let evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
let numbers = [1, 2, 3, 4];
let even = numbers.filter((num) => num % 2 === 0);
// evens = [2, 4]

numbers.forEach(function (num) {
  console.log(num);
});

let number = [1, 2, 3, 4];
let sum = number.reduce((acc, num) => acc + num, 0);
// sum = 10
// Using reduce to sum all numbers in the array
//                                                                        (accumulator first value = 0)
// numbers.reduce((accumulator, currentValue(num)) => accumulator + currentValue(num), 0);
// sum = 10
```

---

### Why Use Higher-Order Functions?

- **Code Reusability:** Write generic functions that can work with different behaviors.
- **Abstraction:** Hide details and expose only what’s necessary.
- **Functional Programming:** Enables powerful patterns like map, filter, reduce, and function composition.

---

**Summary:**  
A higher-order function is any function that takes another function as an argument or returns a function. They are widely used in JavaScript for tasks like array processing,

## Async Functions in JavaScript

An **async function** is a special type of function in JavaScript that allows you to write asynchronous code using the `async` and `await` keywords. Async functions always return a **Promise** and make it easier to work with asynchronous operations like fetching data from a server.

### Syntax

```js
async function fetchData() {
  // code here
}
```

### Example

```js
async function getUser() {
  // Simulate fetching data with a Promise
  return "Rahul";
}

getUser().then((user) => console.log(user)); // Output: Rahul
```

#### Using `await` inside async functions

You can use the `await` keyword inside an async function to pause execution until a Promise is resolved.

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showMessage() {
  console.log("Start");
  await delay(1000); // Waits for 1 second
  console.log("End after 1 second");
}

showMessage();
```

### Key Points

- An async function always returns a Promise.
- Use `await` to wait for a Promise to resolve inside an async function.
- Makes asynchronous code easier to read and write, similar to synchronous code.

---

**Tip:**  
Use async/await for cleaner and more readable asynchronous code, especially when dealing with multiple asynchronous operations in sequence.

### Example: Function Types Table

| Type                 | Syntax Example                                                  | Description                                |
| -------------------- | --------------------------------------------------------------- | ------------------------------------------ |
| Function Declaration | `function sum(a, b) { return a + b; }`                          | Hoisted, can be called before definition   |
| Function Expression  | `const sum = function(a, b) { return a + b; }`                  | Not hoisted, called after definition       |
| Arrow Function       | `const sum = (a, b) => a + b;`                                  | Short syntax, no own `this`                |
| IIFE                 | `(function() { console.log("IIFE"); })();`                      | Immediately invoked, creates private scope |
| HOF                  | `function process(arr, callback) { return arr.map(callback); }` | Takes a function as an argument            |
| Async Function       | `async function fetchData() { ... }`                            | Returns a promise, can use `await`         |

---

**Tip:**  
Use functions to keep your code DRY (Don't Repeat Yourself) and organized. If you find yourself writing the same code multiple times, consider creating a function to encapsulate that logic.

---

## Conditional Statements in JavaScript

Conditional statements are used to perform different actions based on different conditions. They help control the flow of your program.

---

### 1. if Statement

Executes a block of code if a specified condition is true.

```js
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
```

---

### 2. if...else Statement

Executes one block if the condition is true, another block if it is false.

```js
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

---

### 3. else if Statement

Checks multiple conditions in sequence.

```js
let score = 75;
if (score >= 90) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Good");
} else {
  console.log("Needs Improvement");
}
```

---

### 4. Nested if

An if statement inside another if statement.

```js
let num = 10;
if (num > 0) {
  if (num % 2 === 0) {
    console.log("Positive even number");
  } else {
    console.log("Positive odd number");
  }
}
```

---

### 5. switch Statement

Selects one of many code blocks to be executed.

```js
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
```

- **break** is used to exit the switch after a case matches.
- **default** runs if no case matches.

---

### 6. Ternary Operator

A shorthand for if...else.  
Syntax: `condition ? exprIfTrue : exprIfFalse`

```js
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult
```

---

**Summary:**

- Use `if`, `else if`, and `else` for simple and multiple conditions.
- Use `switch` for multiple possible values of a single variable.
- Use the ternary operator for concise conditional

---

## Loops in JavaScript

Loops are used to execute a block of code repeatedly until a specified condition is met. They help automate repetitive tasks and iterate over collections like arrays or objects.

---

### 1. for Loop

Executes a block of code a specific number of times.

```js
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
for (let i = 5; i >= 0; i--) {
  console.log(i); // Output: 5, 4, 3, 2, 1, 0
}
```

---

### 2. while Loop

Executes a block of code as long as a specified condition is true.

```js
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
let j = 5;
while (j >= 0) {
  console.log(j);
  j--;
}
```

---

### 3. do...while Loop

Executes a block of code once, and then repeats the loop as long as the condition is true.

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

### 4. for...of Loop

Iterates over iterable objects like arrays, strings, etc.

```js
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

---

### 5. for...in Loop

Iterates over the enumerable properties of an object.

```js
let person = { name: "Rahul", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

---

### 6. Array Methods as Loops

#### forEach

Executes a provided function once for each array element.

```js
let numbers = [1, 2, 3];
numbers.forEach(function (num) {
  console.log(num);
});
```

#### map

Creates a new array by applying a function to each element.

```js
let squares = numbers.map(function (num) {
  return num * num;
});
// squares = [1, 4, 9]
let num = [1, 2, 3];
let doubled = num.map((num) => num * 2);
// doubled = [2, 4, 6]
```

---

**Summary:**

- Use `for`, `while`, and `do...while` for general looping.
- Use `for...of` for arrays and iterable objects.
- Use `for...in` for object properties.
- Use array methods like `forEach` and `map` for cleaner, functional-style looping.

---

## Arrays in JavaScript

### Explanation & Interview Perspective

An **array** in JavaScript is a special variable that can hold multiple values at once, stored in an ordered list. Arrays are used to store collections of data, such as numbers, strings, objects, or even other arrays. Each value in an array is called an **element**, and each element has a numeric **index** starting from 0.

**Definition for Interviews:**  
"An array in JavaScript is an ordered, zero-indexed collection of elements that can hold values of any data type. Arrays are dynamic, meaning their size can change, and they provide various built-in methods for adding, removing, and manipulating elements."

---

### Why use Arrays?

- To store and manage lists of data efficiently.
- To perform operations on collections (like sorting, filtering, mapping).
- To iterate over multiple values using loops or array methods.

---

### Creating Arrays

```js
// Using array literal
let fruits = ["apple", "banana", "orange"];

// Using Array constructor
let numbers = new Array(1, 2, 3, 4);

// Arrays can hold mixed data types
let mixed = [1, "hello", true, null];
```

---

### Accessing and Modifying Elements

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple

fruits[1] = "mango"; // Change "banana" to "mango"
console.log(fruits); // Output: ["apple", "mango", "orange"]
```

---

### Common Array Methods

```js
let numbers = [1, 2, 3];

// Add element
numbers.push(4); // [1, 2, 3, 4]

// Remove last element
numbers.pop(); // [1, 2, 3]

// Add element at the beginning
numbers.unshift(0); // [0, 1, 2, 3]

// Remove first element
numbers.shift(); // [1, 2, 3]

// Find length
console.log(numbers.length); // 3

// Iterate using forEach
numbers.forEach(function (num) {
  console.log(num);
});

// Create new array with map
let squares = numbers.map(function (num) {
  return num * num;
}); // [1, 4, 9]
```

---

### Interview Tips

- Arrays are **zero-indexed** (`arr[0]` is the first element).
- Arrays can store **any data type**, including objects and other arrays (nested arrays).
- Arrays are **dynamic** (can grow or shrink in size).
- Use array methods (`push`, `pop`, `shift`, `unshift`, `map`, `filter`, `reduce`, etc.) for efficient data manipulation.
- Arrays are objects in JavaScript (`typeof arr === "object"`).

---

**Example Interview Question:**  
_"How would you reverse an array in JavaScript?"_

**Answer:**

```js
let arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
```

---

### Common Array Methods: indexOf, includes, slice, splice, reverse

#### 1. `indexOf`

Returns the first index at which a given element can be found in the array, or -1 if it is not present.

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana")); // Output: 1
console.log(fruits.indexOf("grape")); // Output: -1
```

---

#### 2. `includes`

Checks if an array contains a certain value. Returns `true` or `false`.

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // Output: true
console.log(fruits.includes("grape")); // Output: false
```

---

#### 3. `slice` (Does NOT change the original array)

Returns a shallow copy of a portion of an array into a new array, selected from `start` to `end` (end not included).

```js
let numbers = [1, 2, 3, 4, 5];
let sliced = numbers.slice(1, 4); // [2, 3, 4]
console.log(numbers); // [1, 2, 3, 4, 5] (original array unchanged)
```

---

#### 4. `splice` (Changes the original array)

Adds/removes elements from an array. Returns an array of removed elements.

```js
let numbers = [1, 2, 3, 4, 5];
// Remove 2 elements starting from index 1
let removed = numbers.splice(1, 2); // removed = [2, 3]
console.log(numbers); // [1, 4, 5] (original array changed)

// Insert elements at index 1
numbers.splice(1, 0, 10, 20); // numbers = [1, 10, 20, 4, 5]
```

---

#### 5. `reverse` (Changes the original array)

Reverses the order of the elements in the array.

```js
let arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

---

**Summary:**

- `indexOf` and `includes` are used for searching.
- `slice` creates a new array without changing the original.
- `splice` changes the original array (add/remove elements).
- `reverse` reverses the original array

**Summary:**  
Arrays are fundamental in JavaScript for handling lists of data. Understanding how to create, access, and manipulate arrays
