// Comparisons 
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

// string comparison 
alert('Z' > 'A'); // true 
alert( 'Glow' > 'Glee'); // true 

alert( 'Bee' > 'Be'); // true 

// Comparison of different types 

alert( '2' > 1); // true, string '2' becomes a number 2
alert( '01' == 1); // true, string '01' becomes a number 1


alert( true == 1); // true 
alert( false == 0 ); // false

let a = 0; 
alert(Boolean(a)); // false 

let b = '0';
alert(Boolean(b)); // false 

alert(a == b); // true 

alert( 0 == false); // false

alert('' == false); // true 

// comparison with null and undefined
alert( null === undefined ); // false

alert( null == undefined ); // true 

// strange result: null vs 0

alert(null > 0); // false 
alert( null == 0 ); // false 
alert( null >= 0 ); // true 

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

// Condtional branching : if '?'
let year = prompt('In which year was ECMAScript-2015 specification published', ''); 
if ( year == 2015) alert('You are right!');

if (year == 2015) {
    alert("That's correct");
    alert("You are smart");
}

let year = prompt('In which year was ECMAScript-2015 specification published', ''); 

if ( year == 2015){
    alert("You guessed it right!");   
} 
else {
    alert(' How can you be so wrong'); // any value except 2015
}


let year = prompt(' In what year was the ECMAScript-2015 specification published', '');

if ( year < 2015){
    alert("Too early!..");
}
else if ( year > 2015) {
    alert("Too late..");
}
else {
    alert( 'Exactly' );
}

// conditional Operator '?'

let accessAllowed;
let age = prompt('How are old are you?', '');
if (age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
alert(accessAllowed);

let result = condition ? value1 : value2 

let accessAllowed = (age > 18) ? true: false;

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;

// Multiple '?'

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!': 
    (age < 18) ? 'Hello!': 
    (age < 100) ? 'Greetings!':
    'What an unusual age!';

alert(message);

let age = prompt('age?', 18);

if (age < 3) {
    message = "Hi, baby!";
}
else if (age < 18) {
    message = "Hello!";
}
else if (age < 100) {
    message = "Greetings!";
}
else {
    message = "What an unusual age!";
}


// Non traditional use of '?'
// dont use '?' like this snippet under

let company = prompt( "Which company created Javascript? ", '');

(company == 'Netspace') ? 
   alert('Right'): alert('Wrong.');

if (company == 'Netspace') {
    alert('Right!');
}
else {
    alert('Wrong!..');
}