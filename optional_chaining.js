// Optional Chaining Method;

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element


let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

// ReferenceError: user is not defined
user?.address;


// Short-circuiting 

let user = null;
let x = 0;

user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

alert(x); // 0, value not incremented

// other variants: ?.(), ?.[]

let userAdmin = {
    admin() {
      alert("I am admin");
    }
};
  
let userGuest = {};
  
userAdmin.admin?.(); // I am admin
  
userGuest.admin?.(); // nothing happens (no such method)


let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

// Also we can use ?. with delete:

delete user?.name; // delete user.name if user exists

/** 
 * We can use ?. for safe reading and deleting, but not writing
The optional chaining ?. has no use on the left side of an assignment.

For example:
*/

let user = null;

user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"