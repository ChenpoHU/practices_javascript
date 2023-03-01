/*
Scope 
In JavaScript, let, var, and const are used to declare variables, but they have different characteristics and scopes.

var is the oldest way of declaring variables in JavaScript, and it has a function scope. Variables declared with var can be re-declared and updated within the function they were declared in or anywhere within the global scope. When a variable is declared with var, it is hoisted to the top of its function scope.

let and const were introduced in ES6 (ECMAScript 2015) and have a block scope, meaning they are only accessible within the block they were declared in. A block is defined by a set of curly braces { }, which could be a loop, a conditional statement, or a function. Variables declared with let can be updated but not re-declared in the same scope. On the other hand, variables declared with const cannot be updated or re-declared once they are initialized. const is used to declare variables that are meant to be immutable.

Here's an example to illustrate the difference:

function myFunction() {
  var x = 1;
  let y = 2;
  const z = 3;
  
  if (true) {
    var x = 4; // This will update the existing x variable
    let y = 5; // This creates a new y variable within the block scope
    const z = 6; // This creates a new z variable within the block scope
    console.log(x, y, z); // Output: 4 5 6
  }
  
  console.log(x, y, z); // Output: 4 2 3
}

myFunction();
In the example above, var x is re-declared and updated within the block, whereas let y and const z are only accessible within the block they were declared in
*/

var x = 1;

var y = 3;

console.log(x, y);

function test() {

  var z = 0;

  console.log(z);

}

test();

function testing() {

  var z = 5;

  console.log(z);

}

testing();

if(true) {
  
  var p = 1;

}

console.log(p);