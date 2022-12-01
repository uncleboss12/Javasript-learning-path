let message = "Hello!";
let phrase = message;

// A variable assigned to an object stores not the object itself, 
// but its “address in memory” – in other words “a reference” to it.

let user = {
    name: "John"
};

let user = { name: "John" };

let admin = user; // copy the reference


// Comparison by reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

// And here two independent objects are not equal, even though they look alike (both are empty)

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

// Const objects can be modified

const user = {
    name: "John"
};
  
user.name = "Pete"; // (*)
  
alert(user.name); // Pete


// Cloning and merging, Object.assign

let user = {
    name: "John",
    age: 20
};

let clone = {}; //  the new empty object

// let's copy all user properties into it

for (key in user) {
    clone[key] = user[key];
};

// now clone is a fully independent object with the same content
clone.name = 'pete';  // changed the data in it

alert( user.name ); //  still John in the original object

// we can use Object.assign

// The syntax is:

Object.assign(dest, ...sources)


let user = { name : "John"}; 

let permission1 = { canView : true };

let permission2 = { canEdit : true };

// copies all properties from permissions1 and permissions2 into user

Object.assign(user, permission1, permission2);

// now user = { name: "John", canView: true, canEdit: true }

alert( user.name ); // John
alert( usert.canView ); // true
alert( usert.canEdit ); // true

// If the copied property name already exists, it gets overwritten:

let user = { name: "John" };

Object.assign(user, { name: "Pete" } );

alert(user.name); // now user = { name: "Pete" }

// We also can use Object.assign to perform a simple object cloning:

let user = { 
    name : "John",
    age : 30,
};

let clone = Object.assign({}, user); // 

clone.name = "James";

alert( clone.name ); // James


// Nested Cloning 

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
};
  
alert( user.sizes.height ); // 182


let user = {
    name : "John",
    age : 30,
    address : {
        city : "New York",
        country : "USA"
    }
};

let clone = Object.assign({}, user);

alert( user.address === clone.address ); // true, same object


// user and clone share addresses
user.address.city = 'Seattle'; // change a property from one place
alert( clone.address.city ) // seattle,  get the result from the other one


// Spread Operator 
let user = {
    name:"aman",
    rollno:11,
    }
    
let newobj = {...user }


// structuredClone

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related

let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true

// Garbage Collection 

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
}
  
let family = marry({
    name: "John"
  }, {
    name: "Ann"
});
