// Symbol type 

/**
 * By specification, only two primitive types may serve as object property keys:

string type, or
symbol type.
Otherwise, if one uses another type, such as number, it’s autoconverted to string. So that obj[1]
 is the same as obj["1"], and obj[true] is the same as obj["true"].
 */

// A “symbol” represents a unique identifier.
let id = Symbol();


let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

// If we really want to show a symbol, we need to explicitly call .toString() on it, like here:
let id = Symbol("id");
alert(id.toString()); // Symbol(id), now it works

// Or get symbol.description property to show the description only:
let id = Symbol("id");
alert(id.description); // id

// “Hidden” properties

let user = { // belongs to another code
    name: "John"
};
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id] ); // we can access the data using the symbol as the key

// Symbols in an object literal

let id = Symbol("id");

let user = {
    name: "John"
    [id]: 123 // not 'id' : 123
};

// That’s because we need the value from the variable id as the key, not the string “id”.

// Symbols are skipped by for…in
let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 123 // 
};

for (key in user) {
    alert(user[key]); // name, age (no symbols)
     
}

alert( "Direct: ", user[id]); // Direct: 123

// In contrast, Object.assign copies both string and symbol properties:
let id = Symbol("id");

let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123

// Global symbols

/**
 * As we’ve seen, usually all symbols are different, even if they have the same name. 
 * But sometimes we want same-named symbols to be same entities. 
 * For instance, different parts of our application want to access symbol "id" meaning exactly the same property.

To achieve that, there exists a global symbol registry. We can create symbols in it and access them later,
 and it guarantees that repeated accesses by the same name return exactly the same symbol.

In order to read (create if absent) a symbol from the registry, use Symbol.for(key).

That call checks the global registry, and if there’s a symbol described as key, then returns it,
 otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.
 */

// read from the global registry

let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true

// Symbol.keyFor

/**
 * We have seen that for global symbols, Symbol.for(key) returns a symbol by name.
 * To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):
 */

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

// cannot see symbol which are local, can only access symbol which are global 

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name

/**
 * They are listed in the specification in the Well-known symbols table:

Symbol.hasInstance
Symbol.isConcatSpreadable
Symbol.iterator
Symbol.toPrimitive
…and so on.
 */


// Symbol.toPrimitive

let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};
  
  // conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// toString/valueOf

let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true


let user = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500
/**
 * Often we want a single “catch-all” place to handle all primitive conversions. 
 * In this case, we can implement toString only, like this:
 */
let user = {
    name: "John",
  
    toString() {
      return this.name;
    }
};
  
alert(user); // toString -> John
alert(user + 500); // toString -> John500

// Further conversions
let obj = {
    // toString handles all conversions in the absence of other methods
    toString() {
      return "2";
    }
};
  
alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number

// Binary plus will concatenate strings in the same situation, as it gladly accepts a string:

let obj = {
    toString() {
      return "2";
    }
};
  
alert(obj + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation