'use strict'; // strict mode for modern tools

console.log('Hello, World!');
// PART 1
// Action on array inside 'tag' script
// -----------------------------------
console.log(`Pet array before modification: ${petArray.join(' ')}`);
petArray.shift(); // cat
console.log(`Pet array after modification: ${petArray.join(' ')}`);

// Difference of var, let, const
// -----------------------------
// var hoisting
console.log(`varVariable before asigning value = ${varVariable}`);
var varVariable = 14;
console.log(`varVariable after asigning value = ${varVariable}`);

// let usage
try {
  console.log(
    `This statement will not execute due to strict mode: ${letVariable}`
  );
} catch (exc) {
  console.error(exc);
}

let letVariable = 17;
console.log(`letVariable = ${letVariable}`);

// encapsulate part of code

{
  let letVariable = 13;
  console.log(`letVariable inside brackets = ${letVariable}`);
}

console.log(`letVariable outside brackets = ${letVariable}`);

// const
// Uncaught SyntaxError: Missing initializer in const declaration
// const constVar;

const constVar = 34;
console.log(`constVar = ${constVar}`);

try {
  constVar = 27;
} catch (err) {
  console.error(err);
}

// arrays, objects, strings
// ------------------------
test();
function test() {
  console.log('We are inside of function');
  for (let i = 0; i < 5; i++) {
    console.log(`i = ${i}`);
  }
}

const literalArray = [true, undefined, null, 5, 'hamburger']; //  literal initialization of array
literalArray[10] = 'body';
literalArray.forEach(item => console.log(item));

// break, continue
// for..in - go through keys in case of arrays
for (let key in literalArray) {
  console.log(`literalArray contains key ${key}`);
}

// for..of go through values
for (let value of literalArray) {
  console.log(`literalArray contains value ${value}`);
}

let whileCounter = 0;
while (whileCounter < 4) {
  ++whileCounter;
  if (whileCounter == 2) {
    continue;
  }
  console.log(`while iteration ${whileCounter}`);
}

let doWhileCounter = 0;
do {
  doWhileCounter++;
  console.log(`do while iteration ${doWhileCounter}`);
} while (doWhileCounter < 4);

while (true) {
  console.log('Inside while true');
  break;
}

// strings
const stringExample = 'Welcome to city 17';
console.log(stringExample[3]);
console.log(stringExample.toUpperCase());
console.log(stringExample.toLowerCase());

// dynamical typing
console.log(1 + '1');
console.log('1' + 1);
console.log(1 - '1');
console.log('1' - 1);

const age = '18';
console.log(typeof Number(age)); // converting string to Number
// objects
const person1 = {
  name: 'Venom',
  age: 23,
  interests: ['box', 'girls', 'weapon'],
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
    (() => console.log(this))();
  },
};

person1.interests[0] = 'news';
person1.sayHi();
for (let key in person1) {
  // use of obj as associative array
  console.log(key);
}
// PART 2 - functions
// ------------------
// function declaration, hoisting
printWoW();
function printWoW() {
  console.log('WoW');
}

// function expression
const incrementValue = x => x + 1;

// named function expression
const fibonacci = function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

literalArray.map(value => String(value)); // anonymous function
// default arguments in functions
function sum(a = 2, b = 4) {
  return a + b;
}

console.log(sum(1, 3));
console.log(sum());

// assigns a pointer
let anotherVar = sum;
anotherVar = 5;
console.log(`anotherVar = ${anotherVar}`);
console.log(`sum = ${sum}`);
const person2 = {
  name: 'Vasyl',
  surname: 'Valylonga',
};

const person3 = person2;
person3.name = 'Dmytro';
console.log(`person2 = ${person2}`);
console.log(`person3 = ${person3}`);

// var undefined =5; will cause error with 'use strict';

// ES6+ new standards
const arr1 = [2, 6, 7];
const arr2 = [12, 34, 545];
const resultArray = [...arr1, ...arr2]; // spread operator

function sumNumbers(first, second, ...rest) {
  // rest operator
  if (rest.length === 0) {
    return first + second;
  }
  return sumNumbers(first + second, ...rest);
}

console.log(sumNumbers(5, 6, 3, 4));
console.log(sumNumbers(7, 8));

const personObj = {
  name: 'Petro',
  age: 33,
};

const { name: nameOfPerson } = personObj;
console.log({ nameOfPerson }); // destructuring

// destructuring of array
{
  const [first, second, , fourth] = [1, 2, 3, 4, 5];
  console.log({ first, second, fourth });
}

// PART 3
//closures
function multiplierFunction(multiplier) {
  return x => x * multiplier;
}

const doubleValue = multiplierFunction(2);
console.log(`doubleValue(3) = ${doubleValue(3)}`);
console.log(`doubleValue(23) = ${doubleValue(23)}`);
// -------------------------------------------------
{
  let variable = 15;
  function simpleFunc() {
    return function () {
      return variable;
    };
  }
  const funcVar = simpleFunc();
  console.log(funcVar());
  variable = 30;
  console.log(funcVar());
}
// -------------------------------------------------
{
  // IIFE, Module
  const counter = (function (startValue = 0) {
    let privateCounter = startValue; // private variable

    return {
      increment: function () {
        privateCounter++;
      },
      decrement: function () {
        privateCounter--;
      },
      value() {
        return privateCounter;
      },
    };
  })();
  counter.increment();
  console.log({ counter: counter.increment() });
}

{
  // events, closures and anonymous function
  let counter = 0;
  const div = document.getElementsByTagName('div')[0];
  div.addEventListener('click', () => {
    div.innerText = ++counter;
  });
}
