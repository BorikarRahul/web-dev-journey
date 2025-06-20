// console.log("Hello World") // console o/p
// console.error('this is an Error'); // Error Showing
// console.warn('this is warn'); // Warning

// Let, Const

// let score = 20;
// score = 10;


// console.log(score);

// const age = 43;
// age = 44;


// console.log(age);

//  String, Numbers, boolean, null, undefined, Symbol

// const nameA = 'john';
// const age = '30';

// Concatenation
// console.log('My Name is ' + nameA + 'and I am' + age);

// Template String
// const hello = `My name is ${nameA} and I am ${age}`;

// console.log(hello);
/*
const s = 'hello world!';
const sa = 'technology, is, Upgrading, it, self';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.split(''));
console.log(sa.split(', '))
// ---------------------------------------------
*/
/*
Multi line Comments
*/
// --------------------------------------
// Array = Variables that hold multiple values

// const numbers = new Array(1, 2, 3, 4, 5);
// const fruits = ['apple', 'orange', 'pears', 10, true]
// console.log(numbers, fruits);
// fruits[5] = 'Hello WOrld';
// console.log(fruits[2]);
// fruits.push('mangoes');
// fruits.unshift('Strawberries');
// fruits.pop();
// console.log(Array.isArray('hello'));
// console.log(fruits.indexOf('oranges'));
// console.log(fruits);
// ----------------------------------------
// Object leterals
/*
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40,
    hobbies: ['music', 'movie', 'sports'],
    address: {
        street: ' 50 main St.',
        city: 'Boston',
        state: 'MA'
    }
}
*/
// console.log(person)
// console.log(person.firstName)
// console.log(person.firstName, person.hobbies[2], person.address.city);

// DisStructaring

// const { firstName, lastName } = person;
// console.log(firstName);

// const { firstName, lastName, address: { city } } = person;
// console.log(city);

// to new add the object

// person.email = 'rahul.borikar@gmail.com';
// console.log(person);

// array of to do's ( deal with arrays of objects )
/*
const todos = [
    {
        id: 1,
        text: 'text out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos[1].text);

//  Json format

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)


*/

// -------------------------------

//  For Loop
/*
for (let i = 0; i < 10; i++) {
    console.log(`For loop Number: ${i}`);

}
*/
// We Can also use i.length to get the length of variable
//  While
/*
let i = 0;
while (i < 10) {
    console.log(`while loop Number: ${i}`);
    i++;
}
*/

//  Loops in Object's
/*
const todos = [
    {
        id: 1,
        text: 'text out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];*/

/*
for (let i = 0; i < todos.length; i++) {
    // console.log(`For Loop Number: ${i}`);
    console.log(todos[i].text);
}


for (let todo of todos) {
    console.log(todo.text);
}
*/
/*
// forEach, map, filter

// forEach
todos.forEach(function (todo) {
    console.log(todo.text);
});

todos.forEach(function (todo) {
});
// Map
const todoText = todos.map(function (todo) {
    return todo.text;
})

console.log(todoText);
//  filter

const todoText2 = todos.filter(function (todo) {
    return todo.isCompleted === true;
})
console.log(todoText2);
// to target on words
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
})
console.log(todoCompleted);

// If Statement

const x = 10;
if (x == 10) {
    console.log('x is 10');
} // True
if (x == '10') {
    console.log('x is 10');
} // True
if (x === 10) {
    console.log('x is 10');
} // True
if (x === '10') {
    console.log('x is 10');
    // False
}

// if else

if (x === '10') {
    console.log('x is 10');
    // False
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}
*/

//  || or
// const x = 6;
// const y = 11;

// if (x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10');

// }





