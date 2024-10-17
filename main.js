// What are objects?
// a variable that can store multiple values (properties) and methods (functions)

// We can create variables and function separately
let username = "Sharegh";
let age = 25;
let isMarried = true;

function canTalk() {
  console.log("Hello, I am " + username);
}

// Or we can create an object that contains them all
var person1 = {
  // property: value,
  username: "Sharegh",
  age: 25,
  isMarried: true,
  canTalk: function canTalk() {
    console.log("Hello, I am " + this.username);
  },
};

console.log(person1);

var person2 = {
  username: "John",
  age: 27,
  isMarried: false,
  canTalk: function canTalk() {
    console.log("Hello, I am " + this.username);
  },
};

console.log(person2);

person1.canTalk(); // Hello, I am Sharegh
person2.canTalk(); // Hello, I am John

// We can create objects via a class rule
// Class is a blueprint for creating objects

class Person {
  // properties
  username = "";
  age = 0;
  isMarried = false;
  // constructor is a function that runs when we create an object from a class
  constructor(usernameArgument, ageArgument, isMarriedArgument) {
    // this keyword refers to the object that we are creating
    this.username = usernameArgument;
    this.age = ageArgument;
    this.isMarried = isMarriedArgument;
  }

  canTalk() {
    console.log("Hello, I am " + this.username);
  }
}

// new keyword calls the constructor function of the Person class
// the arguments are passed to the constructor function
var person3 = new Person("Jane", 30, true);
console.log(person3);
person3.canTalk(); // Hello, I am Jane

// log Person class
console.log(Person);

// update the username paragraph of person3.username
document.getElementById("username").innerHTML =
  "<span>Username: " + person3.username + "</span>";

document.getElementById("age").innerHTML =
  "<span>Age: " + person3.age + "</span>";

document.getElementById("isMarried").innerHTML =
  "<span>Marries? " + person3.isMarried + "</span>";
