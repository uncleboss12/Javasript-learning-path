// Function Expression 

let sayHi = function() {
    alert('Hello');
};

function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy ......no parentheses after sayHi
  
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)



// Callback Functions 

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
function showOk() {
    alert( "You agreed." );
}
  
function showCancel() {
    alert( "You canceled the execution." );
}
  
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);


// using function expression 

/*Here, functions are declared right inside the ask(...) call.
 They have no name, and so are called anonymous. Such functions are not accessible outside of ask
  (because they are not assigned to variables), but that’s just what we want here. */


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    'Do you agree',
    function() {
        alert( "You agreed." );
    },
    function() { 
        alert( "You canceled the execution." );
    }
);


// Function Expression vs Function Declaration

// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
let sum = function(a, b) {
    return a + b;
};


//  Function Declaration is only visible inside the code block in which it resides.

let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined


/* What can we do to make welcome visible outside of if?

The correct approach would be to use a Function Expression 

and assign welcome to the variable that is declared outside of 
if and has the proper visibility.

This code works as intended: */


let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

// Or we could simplify it even further using a question mark operator ?:

let welcome = (age < 18) ?
  function() {
        alert("Hello!");
    } :
    function() {("greetings!"); }; //  

welcome(); // ok now