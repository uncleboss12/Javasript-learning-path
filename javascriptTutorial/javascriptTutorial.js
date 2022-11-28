"use strict";
//* wetin dey happen for this obodo*/
alert("who dey breathe..");

alert('who dey breathe');

[1, 2].array.forEach(alert); 

let menace;
menace = "hello";

alert(menace); //shows the variable

let user = "justine";
let age = 25;
let message = "hello";

let user1 = "james",
age1 = 34,
delivery = "Welcome";

//older version of javascript uses "var"
var detect;
detect = "Hello";


let hello = 'Hello world!';

let messages;

// copy 'Hello world' from hello into message
messages = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(messages); // Hello world!

// note: no "use strict" in this example

num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5

let $ = 12;
let _ = 34;
alert($ + _);

const myBirthday = '10-29-1994';
alert(myBirthday);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

let n = 234;
n = 123.5;

alert(1/0);  //infinity

alert(Infinity); // infinity 

alert('not a nmumber' / 2); // NaN, 

alert(Nan + 1); // NaN

alert(3 * NaN); // NaN

alert("not a number" / 2 -1 ); // NaN 

alert( NaN ** 0 is 1);

console.log(9007199254740991 + 1 ); // 9007199254740992
console.log(9007199254740991 + 2 ); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embedded another ${str}`;

let name = 'john';
alert(`Hello, ${name}!`); // Hello John

alert(`the result is ${1 + 2}`); // the result is 3

alert("the result is ${1 + 2}"); // the result is ${1 + 2}


let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1; 
alert(isGreater); // true (the comparison result is "yes")

let ageNum = null;


alert(ageNum); // shows "undefined"

let  ageGr = 100;
// change the value to undefined

ageGr = undefined;
alert(ageGr); // undefined

typeof  undefined  // undefined
typeof 0 // "number"
typeof 10n //"bigint"
typeof true // "booleen"
typeof "foo" // "string"
typeof Math // "object" (1)
typeof null // "object" (2)
typeof alert // "function" (3)


let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya

result = prompt(title, [default]);

let Age = prompt("How old are you?", 100);
alert(`You are ${Age} years old!`); //  You are 100 years old 


let test = prompt("Test", '')

result = confirm(question);

let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed 

let conf = confirm("You must be at least 18 years old to view this content.");
let name1 = prompt("What's your name?");
let ageN = prompt("What's your age?");

if (ageN>=18) {
alert(`Welcome ${name1}!`);
}
else {
alert(`Sorry ${name1}, you must be at least 18 years old to view this content.`);

}

'use strict';

    let Name = prompt("What is your name?", "");
    alert(Name);


