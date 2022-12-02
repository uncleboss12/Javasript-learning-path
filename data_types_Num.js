let str = "Hello";

alert( str.toUpperCase() ); // HELLO


let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

// Constructors String/Number/Boolean are for internal use only

alert( typeof 0); // number

alert( typeof new Number(0)); // object

// Objects are always truthy in if, so here the alert will show up:
let zero = new Number(0);

if (zero) { // zero is true, because it's an object
    alert( "zero is truthy!" ); // true
}



// Numbers

let billion = 1000000000;

let billion = 1_000_000_000;

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

let mcs = 1e-6; // five zeroes to the left from 1

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

// Hex, binary and octal numbers

alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)

let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides

// toString(base)

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111


// the two dots is important for it to work if a variable if it is not given,
//  so as to tell javascript that there is a decimal part after the first dot.
alert( 123456..toString(36) ); // 2n9c

/**
 * Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
 */
let num = 1.23456;

alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// toFixed
let num = 12.34;
alert( num.toFixed(1) ); // "12.3"

// Please note that the result of toFixed is a string
let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits

// Imprecise calculations

alert( 1e500 ); // Infinity

alert( 0.1 + 0.2 == 0.3 ); // false

alert( 0.1.toFixed(20) ); // 0.10000000000000000555

let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30"

// since toFixed brings a string, then we need a + sign before the return of result.
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3

// Tests: isFinite and isNaN
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

alert( NaN === NaN ); // false


// isFinite(value) converts its argument to a number and returns true 
// if it’s a regular number, not NaN/Infinity/-Infinit
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, because a special value: NaN
alert( isFinite(Infinity) ); // false, because a special value: Infinity

// Sometimes isFinite is used to validate whether a string value is a regular number:

let num = +prompt("what kind of number you showing", '');

// will be true unless you enter Infinity, -Infinity or not a number
alert( isFinite(num));

// Number.isFinite and  Number.isNan arer more strict that isFinite aND isNan 
// isNaN and Number.isNaN difference 
alert( Number.isNaN(NaN) ); // true
alert( Number.isNaN("str" / 2) ); // true

// Note the difference:
alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion

// isFinite and Number.isFinite difference
alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false

// Note the difference:
alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123

// parseInt and parseFloat
// Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails:

alert( +'100px' ); // NaN

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading

// There are situations when parseInt/parseFloat will return NaN. It happens when no digits could be read:
alert( parseInt('a123') ); // NaN, the first symbol stops the process


// The second argument of parseInt(str, radix)

alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, without 0x also works

alert( parseInt('2n9c', 36) ); // 123456

// Other math functions

alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)

alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1
alert( Math.pow(2, 10) ); // 2 in power 10 = 1024