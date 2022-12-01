// Method examples

let user = {
    name: 'John',
    age: 30,
};

user.sayHi() = function() {
    alert('Hello!');

};

user.sayHi(); // Hello!


// use function declaration 

let user = {
    // ...
  };
  
  // first, declare
  function sayHi() {
    alert("Hello!");
  }
  
  // then add as a method
  user.sayHi = sayHi;
  
  user.sayHi(); // Hello!

// Method shorthand

// these objects do the same

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };

// “this” in methods
let user = {
    name: 'john', 
    age: 30,

    sayHi() {
        alert(this.name)
    }
};


user.sayHi(); // John

/* But such code is unreliable. If we decide to copy user to another variable,
 e.g. admin = user and overwrite user with something else, then it will access the wrong object.

That’s demonstrated below:
*/
let user = {
    name: 'john', 
    age: 30,

    sayHi() {
        alert(this.name)
    }
};

let admin = user;

user = null; // overwrite to make things obvious

admin.sayHi(); //  TypeError: Cannot read property 'name' of null

// If we used this.name instead of user.name inside the alert, then the code would work.

// "this" is not bound

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  
    alert( this.name )
  
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

// Calling without an object: this == undefined

function sayHi() {
    alert(this);
}
  
sayHi(); // undefined

// Arrow functions have no “this”

let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
};
  
user.sayHi(); // Ilya

// this gives an error because of the presence ofg this 
function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
  
alert( user.ref.name ); // What's the result? // error : undefined 


function makeUser(){
    return this; // this time there's no object literal
}
  
alert( makeUser().name ); // Error: Cannot read property 'name' of undefined

// Here's the opposite case 

function makeUser() {
   return {
     name: 'John', 
     age : 30,
    
     ref() {
        return this;
     }
    }
   
}

let user = makeUser();
alert(user.ref().name); // John 

// create a calculator 

let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    read() {
        this.a = +prompt('a?1', 0);
        this.b = +prompt('b?2', 0);    
    }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
};

ladder.up().up().down().showStep().down().showStep();
  