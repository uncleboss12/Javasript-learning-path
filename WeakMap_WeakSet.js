//WeakMap
// The first difference between Map and WeakMap
//  is that keys must be objects, not primitive values:

let weakmap = new WeakMap();

obj = {};
WeakMap.set(obj, john, 14);

// can't use a string as the key
WeakMap.set('test', 'Whoops'); // Error, because "test" is not an object


let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // overwrite the reference

// john is removed from memory!

/**
 * WeakMap has only the following methods:

weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)
 */

// Use case: additional data 
weakMap.set(john, "secret documents");
// if john dies, secret documents will be destroyed automatically


// 📁 visitsCount.js
let visitsCountMap = new Map(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

// 📁 main.js
let john = { name: "John" };

countUser(john); // count his visits

// later john leaves us
john = null;

//We can avoid it by switching to WeakMap instead:

let visitsCountMap = new WeakMap(); // map: user => visits count

// increase the visits count
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

// use Case: Caching 
// 📁 cache.js
let cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let obj = {/* let's say we have an object */};

let result1 = process(obj); // calculated

// ...later, from another place of the code...
let result2 = process(obj); // remembered result taken from cache

// ...later, when the object is not needed any more:
obj = null;

alert(cache.size); // 1 (Ouch! The object is still in cache, taking memory!)

//If we replace Map with WeakMap, then this problem disappears. 
// The cached result will be removed from memory automatically after the object gets garbage collected.
// 📁 cache.js
let cache = new WeakMap();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* calculate the result for */ obj;

    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

// 📁 main.js
let obj = {/* some object */};

let result1 = process(obj);
let result2 = process(obj);

// ...later, when the object is not needed any more:
obj = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well

// WeakSet
// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically