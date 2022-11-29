let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
  }

  let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}


let result = condition ? value1 : value2;

let accessAllowed = (age > 18) ? true : false;

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;

// Multiple '?'
alert(accessAllowed);

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message ); 


// if else alternatives

if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }

// Non-traditional use of ‘?’

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

   // if statement alternative

let company = prompt('Which company created JavaScript?', '');


if (company == 'Netscape') {
     alert('Right!');
   }
else {
     alert('Wrong.');
   }    

// TAsk 
if ('0') {
    alert('Hello');
}

// solutions

// Task 2 
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

// solution 
let result = (a + b < 4) ? 'Below' : 'Over';


// Task 3
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

// solution 
let message 
message = (login == 'Employee') ? 'Hello'  : 
(login == 'Director') ? 'Greetings' : 
(login == '') ? 'No login' : 
'';