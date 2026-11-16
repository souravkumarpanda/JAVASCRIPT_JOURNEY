// Ternary Opeartor
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

// String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// Comma Operator
let x = 1;
let y = 2;
let z = (x++, y++);
console.log(z); // Output: 2 (the value of y after incrementing)

// Member Access Operator
let person = {
  name: "Alice",
  age: 30,
};
console.log(person.name); // Output: Alice

// Optional Chaining Operator
let user = {
  profile: {
    email: "alice@example.com",
  },
};
console.log(user?.profile?.email); // Output: alice@example.com

// Instanceof Operator
class Animal {}
let dog = new Animal();
console.log(dog instanceof Animal); // Output: true
