// Arrow functions, the basics

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6

// If there are no arguments, parentheses are empty, but they must be present:
let sayHi = () => alert("Hello!");

sayHi();


// Arrow functions can be used in the same way as Function Expressions.

let age = prompt("what is your age", 18);

let welcome = (age < 18) ?
 () => alert("Hello!") : 
 () => alert('Greetings!');

welcome();

// Multiline arrow functions

/* Sometimes we need a more complex function, with multiple expressions and statements.
 In that case, we can enclose them in curly braces. The major difference is that
  curly braces require a return within them to return a value (just like a regular function does). */

let summation  = (a, b) => {
    let result = a + b;
    return result; // 
}

alert(summation(1, 2));

// Rewrite with arrow functions

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
  
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

// with 

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
  
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);