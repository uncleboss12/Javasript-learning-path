// to convert to a string we can use 
let user = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
};
  
alert(user); // {name: "John", age: 30}



// JSON.stringify
// Syntax:
let json = JSON.stringify(value[, replacer, space])
/**
 * JavaScript provides methods:

JSON.stringify to convert objects into JSON.
JSON.parse to convert JSON back into an object.
 */

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};
  
let json = JSON.stringify(student);
  
alert(typeof json); // we've got a string!
  
alert(json);
  /* JSON-encoded object:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "spouse": null
  }
  */

/**
 * JSON supports following data types:

Objects { ... }
Arrays [ ... ]
Primitives:
strings,
numbers,
boolean values true/false,
null.
 */

// a number in JSON is just a number
alert( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
alert( JSON.stringify('test') ) // "test"

alert( JSON.stringify(true) ); // true

alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

/**JSON is data-only language-independent specification, so 
 * some JavaScript-specific object properties are skipped by JSON.stringify.

Namely:

Function properties (methods).
Symbolic keys and values.
Properties that store undefined. 
*/
let user = {
    sayHi() { // ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};
  
alert( JSON.stringify(user) ); // {} (empty object)

let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
};
  
alert( JSON.stringify(meetup) );
/* The whole structure is stringified:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  
*/


// The important limitation: there must be no circular references.
let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
};
  
meetup.place = room;       // meetup references room
room.occupiedBy = meetup; // room references meetup
  
JSON.stringify(meetup); // Error: Converting circular structure to JSON

// but this works when we include the other aspect of json.stringify synytax

let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
};
  
room.occupiedBy = meetup; // room references meetup
  
alert( JSON.stringify(meetup, ['title', 'participants']) );
// {"title":"Conference","participants":[{},{}]}

// if the other properties are passed it encodes only what is given 
let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
};
  
room.occupiedBy = meetup; // room references meetup
  
alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
  /*
  {
    "title":"Conference",
    "participants":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */

  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };
  
  room.occupiedBy = meetup; // room references meetup
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));
  
  /* key:value pairs that come to replacer:
  :             [object Object]
  title:        Conference
  participants: [object Object],[object Object]
  0:            [object Object]
  name:         John
  1:            [object Object]
  name:         Alice
  place:        [object Object]
  number:       23
  occupiedBy: [object Object]
  */

// Formatting: space

let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
};
  
alert(JSON.stringify(user, null, 2));
  /* two-space indents:
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */
  
  /* for JSON.stringify(user, null, 4) the result would be more indented:
  {
      "name": "John",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }
  */

// Custom “toJSON”
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
};
  
alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */

// Now let’s add a custom toJSON for our object room (2):
let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };
  
  let meetup = {
    title: "Conference",
    room
};
  
alert( JSON.stringify(room) ); // 23
  
alert( JSON.stringify(meetup) );
/*
    {
      "title":"Conference",
      "room": 23
    }
*/

// JSON.parse
// The syntax:

let value = JSON.parse(str, [reviver]);

// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert( user.friends[1] ); // 1

// Using reviver
// title: (meetup title), date: (meetup date)
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // now works!