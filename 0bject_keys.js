// Object.keys, values, entries

/**
 * Object.keys, values, entries
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
 */

let user = {
    name: "John",
    age: 30
  };
  alert(Object.keys(user));
  alert(Object.values(user));
  alert(Object.entries(user));
  alert(Object.length(user)); // error, for arrays, map



  let user = {
    name: "John",
    age: 30
  };
  
  // loop over values
for (let value of Object.values(user)) {
    alert(value); // John, then 30
};

// Transforming objects

let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
    )
alert(doublePrices.banana);
alert(doublePrices.meat);


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
let sumSalaries = function(num) {
      sum = 0
      for (let sal of Object.values(salaries)) {
          sum += sal
        }
    return sum 
}

alert(sumSalaries(salaries));

// or 
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalary(sal) {
      return Object.values(sal).reduce((a, b) => (a + b))
};

alert(sumSalary(salaries));


let user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}
  
alert( count(user) ); // 2