// Strings

// Quotes

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

/**
 * Single and double quotes are essentially the same. Backticks, 
 * however, allow us to embed any expression into the string, by wrapping it in ${…}:
 */

 function sum(a, b) {
    return a + b;
}
  
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

// Special characters

let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests, same as above


let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true


alert( `The backslash: \\` ); // The backslash: \

alert( 'I\'m the Walrus!' ); // I'm the Walrus!

// String length

alert( `My\n`.length ); // 3

//Accessing characters

let str = `Hello`;

// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H

// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );

// use str.at(-2) because it will won't if you use str[-2]
let str = `Hello`;

alert( str[-2] ); // undefined
alert( str.at(-2) ); // l

// We can also iterate over characters using for..of:

for (let char of "Hello") {
    alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
};

// strings are immutable 
let str = 'Hi'

str[0] = 'h'; // error 
alert( str[0] ); // doesn't work 

//The usual workaround is to create a whole new string and assign it to str instead of the old one
let str = 'Hi';

str = 'h' + str[1]; // replace the string

alert( str ); // hi

// Changing the case

alert( 'Interface'.toUpperCase() );
alert( 'Interface'.toLowerCase() );

// a single character lowercased:
alert( 'Interface'[0].toLowerCase() ); // 'i'

// Searching for a substring
// str.indexOf

let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12

//  we can run indexOf in a loop.
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

// or

let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}

// doesn't work 

let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("We found it"); // doesn't work!
}

// this works;
let str = "Widget with id";

if (str.indexOf("Widget") != -1) {
    alert("We found it"); // works now!
}


// includes, startsWith, endsWith
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false

alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"

// Getting a substring

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

let str = "stringify";
alert( str.slice(2) ); // 'ringify', from the 2nd position till the end

let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert( str.slice(-4, -1) ); // 'gif'

// str.substring(start [, end])

let str = "stringify";

// these are same for substring
alert( str.substring(2, 6) ); // "ring"
alert( str.substring(6, 2) ); // "ring"

// ...but not for slice:
alert( str.slice(2, 6) ); // "ring" (the same)
alert( str.slice(6, 2) ); // "" (an empty string)

let str = "stringify";
alert( str.substr(2, 4) ); // 'ring', from the 2nd position get 4 characters

let str = "stringify";
alert( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters

// Comparing Strings 
alert( 'a' > 'Z'); // true 

alert( 'Österreich' > 'Zealand' ); // true

// str.codePointAt(pos)

// different case letters have different codes
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)

alert( String.fromCodePoint(90) ); // Z
alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)


let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// Correct comparisons
alert( 'Österreich'.localeCompare('Zealand') ); // -1


// Task
let ucFirst = function(str) {
    
    return  str[0].toUpperCase() + str.slice(1)
}
alert(ucFirst('john'));
alert(ucFirst('john') == 'John');

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );


function extractCurrencyValue(str) {
     
    return +str.slice(1, );
}

alert( extractCurrencyValue('$120') === 120 )


truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxLength) {
    return (str.length > maxLength) ? str.slice(0, maxLength) : str;
}



