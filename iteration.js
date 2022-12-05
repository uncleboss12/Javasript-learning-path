let range = {
    from: 1,
    to: 5
};
  
// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {
  
    // ...it returns the iterator object:
    // 2. Onward, for..of works only with the iterator object below, asking it for next values
    return {
        current: this.from,
        last: this.to,
  
        // 3. next() is called on each iteration by the for..of loop
        next() {
        // 4. it should return the value as an object {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};
  
// now it works!
for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}


let range = {
    from: 1,
    to: 5,
  
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
  
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
};
  
for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
}

// String is iterable
for (let char of "test") {
    // triggers 4 times: once for each character
    alert( char ); // t, then e, then s, then t
}


let str = '𝒳😂';
for (let char of str) {
    alert( char ); // 𝒳, and then 😂
}

// Calling an iterator explicitly

let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}

// Calling an iterator explicitly
let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // outputs characters one by one
}

// Iteratables and arrya-likes 
/**
 * Two official terms look similar, but are very different. 
 * Please make sure you understand them well to avoid the confusion.

Iterables are objects that implement the Symbol.iterator method, as described above.
Array-likes are objects that have indexes and length, so they look like arrays.
 */


let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
};
  
// Error (no Symbol.iterator)
for (let item of arrayLike) {}

/**
 * Both iterables and array-likes are usually not arrays, they don’t have push, pop etc.
 *  That’s rather inconvenient if we have such an object and want to work with it as with an array.
 *  E.g. we would like to work with range using array methods. How to achieve that?
 */

let arraylike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World (method works)


range = {
    from: 1,
    to: 5,
};

// assuming that range is taken from the example above
let arr = Array.from(range);
alert(arr); 


// syntax:
Array.from(obj[, mapFn, thisArg])

// assuming that range is taken from the example above

// square each number
let arr = Array.from(range, num => num * num);

alert(arr); // 1,4,9,16,25

let str = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

alert(chars[0]); // 𝒳
alert(chars[1]); // 😂
alert(chars.length); // 2

let str = '𝒳😂';

let chars = []; // Array.from internally does the same loop
for (let char of str) {
  chars.push(char);
}

alert(chars);



