let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

  // get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

user.isAdmin = true;

delete user.age;

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};

// this would give a syntax error
user.likes birds = true

let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
alert( user[key] ); // John (if enter "name")


let user = {
    name: "John",
    age: 30
  };
  
  let key = "name";
  alert( user.key ) // undefined


// Computed properties

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// or 

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;


let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// Property value shorthand
function makeUser(name, age) {
    return { 
        name: 'name',
        age : 'age',
    };
}
let user = makeUser('john', 30);
alert(user.name) // john

// Instead of name:name we can just write name, like this:
function makeUser(name, age) {
    return { 
        name,
        age,
    };
}
let user = makeUser('john', 30);
alert(user.name) // john

// Property names limitations
// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
alert( obj.for + obj.let + obj.return );  // 6

// can use number here, they are changed to strings when used as key
let obj = {
    0: "test" // same as "0": "test"
  };
  
  // both alerts access the same property (the number 0 is converted to string "0")
alert( obj["0"] ); // test
alert( obj[0] ); // test (same property)

// Property existence test, “in” operator

let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"


let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist


let user = { age: 30 };

let key = "age";
alert( key in user ); // true, property "age" exists

/**
 * Why does the in operator exist? Isn’t it enough to compare against undefined?

Well, most of the time the comparison with undefined works fine. But there’s a special case when it fails, but "in" works correctly.

It’s when an object property exists, but stores undefined:
 */


let obj = {
    test: undefined
  };
  
  alert( obj.test ); // it's undefined, so - no such property?
  
  alert( "test" in obj ); // true, the property does exist!


// The "for..in" loop
for (key in object) {
    // executes the body for each key among object properties
}

let user = {
    name: "John",
    age: 30,
    isAdmin: true,
}
for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
}

// "for (let prop in obj)"


// result are sorted in descending order
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
  };
  
  for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}

// On the other hand, if the keys are non-integer, then they are listed in the creation order, for instance:
let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    alert( prop ); // name, surname, age
  }

/**  So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer.
 *  Adding a plus "+" sign before each code is enough.
 */
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": "USA"
  };
  
for (let code in codes) {
   alert( +code ); // 49, 41, 44, 1
}


/**
 * Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
 */

let user = {};

let user = {
    name: "John",
    surname: "Smith"
}

user[name]  = Smith;

delete user[name];
or 
delete user.name;


// for loop sum 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
let sum = 0;
for (let sal in salaries) {
      sum += salaries[sal];
  }
alert( sum );


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
function Mult(obj) {
    for (let mu in obj) {
        if (typeof obj[mu] == 'number') {
            obj[mu] *= 2
        }
    }
}

alert(Mult(menu))
