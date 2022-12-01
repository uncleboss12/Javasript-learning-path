// Function Declaration

function name(parameters, delimited, by, comma) {
    /* code */
}

function showMessage() {
    alert( 'Hello everyone!' );
  }
  
  showMessage();
  showMessage();

// Local variables
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
    alert( message);
}
showMessage();
alert(message);

// Outer variables
let userName = 'John';

function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
}
showMessage()



let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function



function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
}
  
showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)




function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    alert( from + ': ' + text );
}
  
let from = "Ann";
  
showMessage(from, "Hello"); // *Ann*: Hello

  // the value of "from" is the same, the function modified a local copy
alert( from ); // Ann




/* When a value is passed as a function parameter, it’s also called an argument.

In other words, to put these terms straight:

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).
We declare functions listing their parameters, then call them passing arguments.

In the example above, one might say: "the function showMessage is declared with two parameters, then called with two arguments: from and "Hello"". */


// Default Values 

function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
}
  
showMessage("Ann"); // Ann: no text given

// Default parameters in old JavaScript code

function showMessage(from, text) {
    if (text === undefined) {
      text = 'no text given';
    }
  
    alert( from + ": " + text );
}


function showMessage(from, text) {
    // If the value of text is falsy, assign the default value
    // this assumes that text == "" is the same as no text at all
    text = text || 'no text given';
    ...
}


// Alternative default parameters

function showMessage(text) {
    // ... 
    if (text === undefined ) { // if the parameter is missing 
        text = 'empty message';

    }
    alert(text);
}

showMessage(); // empty message 

// use nullish coalescing Operator 
function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
}
  
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown


// Returning a value

function sum (a, b) {
    return a + b;
}

let result = sum(3, 4);
alert(result);



function checkAge(age) {
    if (age >= 18) {
        return true
    }
    else { 
    return confirm('Do you have permission from your parents?')
    }
}
let age = prompt('How old are you?', 18);
if ( checkAge(age) ) {
    alert( 'Access granted' );
}
    else {
        alert( 'Access denied')
    }

// It is possible to use return without a value. That causes the function to exit immediately.

function showMovie(age) {
    if ( !checkAge(age) ) {
      return;
    }
  
    alert( "Showing you the movie" ); // (*)
    // ...
}

// A function with an empty return or without it returns undefined
function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true

function doNothing() {
    return;
  }
  
  alert( doNothing() === undefined ); // true



// Return values can work in this manner too 
return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
    )


// Naming a function
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false

// Functions == Comments

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // a prime
    }
}

or 

function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // a prime
    }
}
  
function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
}

// Rewrite Task
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }


function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
  
  
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}


function min(a, b) {
    if (a < b) {
        return a
    }
    else {
        return b
    }
}


function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
}



function pow(x,n) {
    return x ** n 
}