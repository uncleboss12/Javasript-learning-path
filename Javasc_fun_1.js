// Loops: while and for 

// The “while” loop

while (condition) {
    // code
    // so-called "loop body"
  }

let i = 0;

while (i < 3) { 
alert(i)
i++
}

let i = 3;

while (i != 0) {
    alert(i)
    i--;
}

let i = 3; 
while (i) {
    alert(i)
    i--;
}
while(i) alert(i--);

// The “do…while” loop

do {
    // loop  body
} while (condition)


let i = 0;
do {
    alert(i)
    i++;
} while (i < 3);

// The "For" Loop

for (begin; condition; step) {
    // .... loop body
}

for ( i = 0; i < 3; i++) {
    alert(i)
}

let i = 0;

for ( i = 0; i <6; i++) {
    alert(i)
}
alert(i);

// we can skip parts in a for  loop 

for ( ; i <6; i++) {
    alert(i)
}

let i = 0
for ( ; i <6;) {
    alert(i++)
}

// This makes the loop identical to while (i < 3). 

for (;;) {
    // repeats without limits
  }


// Breaking the Loop

let sum = 0;
while (true) {
    let value = +prompt("Enter the number", '');

    if (!value) break;

    sum += value;
}
alert('SUM: ' + sum);

// Continue to the next iteration

for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0 )  continue;
    alert(i);
}

// can use if nested for loops 
for (let i = 0; i < 10; i++) {

    if (i % 2) {
      alert( i );
    }
  
  }

 //  Labels for break/continue

 for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let = prompt(`Value at coords (${1}, ${j})`, '');
        
    }
 }
 alert('Done!');

 labelName: for (...) {
    ...
 }

 outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input  = prompt(`Value at coords (${1}, ${j})`, '');

        // // if an empty string or canceled, then break out of both loops
        if (!input)  break outer;

        // do something with the value...
        
    }
 }
 alert('Done!');

 // prefix form ++i;
let i = 0;
while (++i < 5) alert( i );

// postfix form i++;
while (i++ < 5) alert(i);

// same for for loop and while 

for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  }

  let i = 0;
  while (i < 3) {
      alert(`number ${i}`)
      i++;
  }


  let num;

// Repeat until the input is correct

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// Write the code which outputs prime numbers in the interval from 2 to n.
let n = 10;

nextPrime: 
for (i = 2; i <= n; i++) { 
    for ( let j = 2; j < i; j++) { 
    if ( i % j == 0) continue nextPrime;
    }
    alert(i)
}


// The "switch" statement

// The syntax

// switch(x) {
//     case 'value1':  // if (x === 'value1')
//       ...
//       [break]
  
//     case 'value2':  // if (x === 'value2')
//       ...
//       [break]
  
//     default:
//       ...
//       [break]
//   }

let a = 2 + 2;
switch (a) {
    case 3:
        alert('Too small');
        break;
    case 4:
        alert( "Exactly!");
        break;
    case 5:
        alert( 'Too Big' );
        break;
    default:
        alert(" I don't know such values");
}


let a = "1"
let b = 0;

switch(+a) {
    case b + 1:
        alert("this runs, because +a is 1, exactly equals b+1");
        break;
    default: 
         alert("this doesn't run");
}

/* Grouping of "case" */ 

let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

/* The ability to “group” cases is a side effect of how switch/case works without break.
 Here the execution of case 3 starts from the line (*) and goes through case 5, because there’s no break. */

 // Type Matters

 let arg = prompt("Enter a value?");
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' ); // it won't run because it is not a string 
    break;
  default:
    alert( 'An unknown value' );
}