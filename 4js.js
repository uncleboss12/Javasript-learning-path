 // Logical Operators

// There are four logical operators in JavaScript: || (OR),
//  && (AND), ! (NOT), ?? (Nullish Coalescing).
//  Here we cover the first three,
//  the ?? operator is in the next article.

result = a || b;

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0 ) { //  works just like if( true || false )
    alert( 'truthy!');
}

let hour = 9;

if ( hour < 10 || hour > 18) {
    alert('The office is closed.')
}

let hour = 12; 
let isWeekend = true; 

if (hour < 10 || hour > 18 || isWeekend ) {
    alert( 'The office is closed.' ); // it is the weekend
}

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = " SuperCoder";

alert( firstName || lastName || nickName || 'Anonymous'); // Supercoder

true || alert("not printed");
false || alert("printed");

// && (AND)

result = a && b;

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30 ) {
    alert(" The time is 12:30 ");
}

if (1 && 0 ) { // evaluated as true && false
   alert( "won't work, because the result is falsy" );
}

// Multiple && 
alert( 1 && 2 && null && 3 ); // null


// don't use || instead of if
let x = 1;

(x > 0) && alert( 'Greater than zero!' );

alert( null || 2 && 3 || 4 ); // 3

// password task 

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}


// Nullish Coalescing Operators

result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); //

// || returns the first truthy value.
// ?? returns the first defined value.

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0

//  Precedence
let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000


// Using ?? with && or ||
// only with parenthesis

let x = (1 && 2) ?? 3; // Works

alert(x); // 2

// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

// It’s used to assign default values to variables:

// The operator ?? has a very low precedence, only a bit higher than ? and =,
//  so consider adding parentheses when using it in an expression.