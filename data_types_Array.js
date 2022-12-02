// arrays are special structures to work with the ordered data
// Declaration
let arr = new Array();
let arr = [];

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum



let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = "Chicken";
alert(fruits);
alert(fruits.length); // 3


//An array can store elements of any type.

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1] ); // object object
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

// Get last elements with “at”
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits[fruits.length - 1]); // plum 

// or 
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.at(-1))

// Methods pop/push, shift/unshift

// Pop
let fruits = ["Apple", "Orange", "Pear"];

alert( fruits.pop() ); // remove "Pear" and alert it

alert( fruits ); // Apple, Orange

// Push 
let fruits = ["Apple", "Orange"];

fruits.push("Pear");

alert( fruits ); // Apple, Orange, Pear

// Shift
let fruits = ["Apple", "Orange"];

alert( fruits.shift() );

alert( fruits ); // Orange, Pear

// Unshift
let fruits = ["Orange", "Pear"];

fruits.unshift('Apple');

alert( fruits ); // Apple, Orange, Pear


// Internals:
let fruits = ["Banana"]

let arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now

// Loops
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

// But for arrays there is another form of loop, for..of:
let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  alert( fruit );
}


// possible to use for..in:
let arr = ["Apple", "Orange", "Pear"];

for (let key in arr) {
  alert( arr[key] ); // Apple, Orange, Pear
}

// Generally, we shouldn’t use for..in for arrays.

// A word about “length”

let fruits =  [];
fruits[123]  = "Apples"
alert( fruits.lenght ); // 124

// new Array()

let fruits = [];
fruits[123]  = "Apples";
alert( fruits.lenght ); // 124

// new Array(3)

let arr1 = new Array["Apple", "Orange", "etc"];
let arr1 = ["Apple", "Orange", "etc"]

// toString()

let arr = [1, 2, 3];  // [1, 2, 3]

alert( String(arr) == "1, 2, 3" ); // true 

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

//TASKS

let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4

//(2)

let styles = [ "Jazz", "Blues"];
styles.push('Rock-n-Roll');
styles[1] = "classics";
styles.shift();
styles.unshift("Rap", "Reggae");
alert(styles);

// (3)
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}

// (4)
// Question 


function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
      partialSum += item; // add it to partialSum
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0

// Array Methods
// splice 
// How to delete an element from the array?
let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3

arr.splice(start[, deleteCount, elem1, ..., elemN])

let arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]

// another example 
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]

// another example
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); // "I", "study", "complex", "language", "JavaScript"


// Negative indexes allowed
let arr = [1, 2, 5];

arr.splice(-1, 0, 3, 4);
alert( arr );

// Slice 
let arr = ["t", "e", "s", "t"];

alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr.slice(-2) ); // s,t (copy from -2 till the end)

// concat

let arr = [1, 2];

// create an array from: arr and [3,4]
alert( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something,else

// Iterate: forEach

The syntax:

arr.forEach(function(item, index, array) {
    // ... do something with item
  });

// for each element of the array:
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// And this code is more elaborate about their positions in the target array:
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});

// Searching in array
//indexOf/lastIndexOf and includes

let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true

// another example
let fruits = ['Apple', 'Orange', 'Apple']

alert( fruits.indexOf('Apple') ); // 0 (first Apple)
alert( fruits.lastIndexOf('Apple') ); // 2 (last Apple)

// The includes method handles NaN correctly
const arr = [NaN];
alert( arr.indexOf(NaN) ); // -1 (wrong, should be 0)
alert( arr.includes(NaN) );// true (correct)

// find and findIndex/findLastIndex

the synytax:

let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
  
let user = users.find(item => item.id == 1);
  
alert(user.name); // John

// example 2
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
  // Find the index of the first John
  alert(users.findIndex(user => user.name == 'John')); // 0
  
  // Find the index of the last John
  alert(users.findLastIndex(user => user.name == 'John')); // 3



  // filter
  // syntax
  let results = arr.filter(function(item, index, array) {
    // if true item is pushed to results and the iteration continues
    // returns empty array if nothing found
  });

  let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2 

  // Transform an array

  // map

  // the syntax:
let result = arr.map(function(item, index, array) {
    // returns the new value instead of item
}); 


let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths);

// sort(fn);

let arr = [ 1, 2, 15 ];

// the method reorders the content of arr
arr.sort();

alert( arr );  // 1, 15, 2

// to sort as numbers
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
  
let arr = [ 1, 2, 15 ];
  
arr.sort(compareNumeric);
  
alert(arr);  // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
    alert( a + " <> " + b );
    return a - b;
});

let arr = [ 1, 2, 15];

arr.sort(function(a, b) { a - b});
alert(arr); // 1, 2, 15

// or 
arr.sort((a, b) => a -b) ; // arrow functions 

// Use localeCompare for Strings 
let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

// reverse

let arr = [ 1, 2, 3, 4, 5];

arr.reverse();
alert(arr); // 5, 4, 3, 2, 1

// split and join 
let names = "Bilbo, Gandalf, Nazgul";

let arr = names.split(",");
for (let ag of arr) {
    alert(`A message ${ag}.`); // A message to Bilbo , Gandalf and Nazgul

};


let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

alert(arr); // Bilbo, Gandalf

// Split into letters
let str = "test";

alert( str.split('') ); // t,e,s,t

// he call arr.join(glue) does the reverse to split

let arr = ['t', 'e', 's', 't'];
alert(arr.join());// t,e,s,t

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join('#');
alert(str); // // Bilbo#Gandalf#Nazgul

// reduce/ reduceRight 

// The Syntax:
let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
  }, [initial]);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr.reduce( (sum, current) => sum + current, 0);
alert(sum); // 15

// or 
let sum = arr.reduce( ( sum, current) => sum + current)

aler(sum); // 15

// Array.isArray

alert(typeof {}); // object
alert(typeof []); // object (same)

alert(Array.isArray({})); // false

alert(Array.isArray([])); // true

// Most methods support “thisArg”

arr.find(func, thisArg);
arr.filter(func, thisArg);
arr.map(func, thisArg);
// ...
// thisArg is the optional last argument

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
    }
  };
  
  let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
  ];
  
  // find users, for who army.canJoin returns true
  let soldiers = users.filter(army.canJoin, army);
  
  alert(soldiers.length); // 2
  alert(soldiers[0].age); // 20
  alert(soldiers[1].age); // 23



function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};

// Translate border-left-width to borderLeftWidth

function camelize(str) {
    return str
      .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function filterRange(arr, a, b) {
    // added brackets around the expression for better readability
    return arr.filter(item => (a <= item && item <= b));
}
  
let arr = [5, 3, 8, 1];
  
let filtered = filterRange(arr, 1, 4);
  
alert( filtered ); // 3,1 (matching values)
  
alert( arr ); // 5,3,8,1 (not modified)



function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}
  
let arr = [5, 3, 8, 1];
  
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
alert( arr ); // [3, 1]


function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
}


// Filter range "in place"
let arr = [5, 3, 8, 1];
  
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
alert( arr ); // [3, 1]


// Sort in decreasing order

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );

// Create keyed object from array
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
let usersById = groupById(users);
  
/*
// after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// Shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
  
let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

// Sort users by age

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}
  
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
  
let arr = [ pete, john, mary ];
  
sortByAge(arr);
  
// now sorted is: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete