/** 
 * Constructor functions technically are regular functions. There are two conventions though:

They are named with capital letter first.
They should be executed only with "new" operator.
For instance:
 */

function User(name) {
    this.name = name;
    this.isAdmin = true;
}

let user = new User('Jack');
alert(user.name); // 'Jack'
alert(user.isAdmin); // true 

/**
 * If we have many lines of code all about creation of a single complex object,
 *  we can wrap them in an immediately called constructor function, like this:
 */

// create a function and immediately call it with new
let user = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
};


// Constructor mode test: new.target

/** Advanced stuff
The syntax from this section is rarely used, skip it unless you want to know everything.
 * Inside a function, we can check whether it was called with new or without it, using a special new.target property.

It is undefined for regular calls and equals the function if called with new:
 */

function User() {
    alert(new.target);
}
  
  // without "new":
User(); // undefined
  
  // with "new":
new User(); // function User { ... }

// We can also make both new and regular calls to do the same, like this:
function User(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
  
    this.name = name;
}
  
let john = User("John"); // redirects call to new User
alert(john.name); // John

// Return from constructors

/**
 * But if there is a return statement, then the rule is simple:

If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.

For instance, here return overrides this by returning an object:
 */

function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
}
  
alert( new BigUser().name );  // Godzilla, got that object

function SmallUser() {

    this.name = "John";
  
    return ; // <-- returns this
}
  
alert( new SmallUser().name );  // John

// Omitting parentheses

// By the way, we can omit parentheses after new:
let user = new User; // <-- no parentheses
// same as
let user = new User();

function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi(); // My name is: John
  
  /*
  john = {
     name: "John",
     sayHi: function() { ... }
  }
  */


function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
}
  
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);