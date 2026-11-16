// Data Types in JavaScript
// Note: JavaScript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type is determined automatically based on the value assigned to the variable.

// Primitives in JavaScript
// String
let message = "Hello, World!";
console.log(message); // Output: Hello, World!

// Number
let age = 25;
console.log(age); // Output: 25
let price = 19.99;
console.log(price); // Output: 19.99
let scientificNumber = 1.23e4; // 1.23 * 10^4
console.log(scientificNumber); // Output: 12300
let binaryNumber = 0b1010; // Binary representation of 10
console.log(binaryNumber); // Output: 10
let octalNumber = 0o12; // Octal representation of 10
console.log(octalNumber); // Output: 10
let hexadecimalNumber = 0xa; // Hexadecimal representation of 10
console.log(hexadecimalNumber); // Output: 10
let infinityValue = Infinity;
console.log(infinityValue); // Output: Infinity
let negativeInfinityValue = -Infinity;
console.log(negativeInfinityValue); // Output: -Infinity
let notANumberValue = NaN; // Not a Number
console.log(notANumberValue); // Output: NaN

// Boolean
let isStudent = true;
console.log(isStudent); // Output: true

// Undefined
let undefinedValue;
console.log(undefinedValue); // Output: undefined

// Null
let nullValue = null;
console.log(nullValue); // Output: null

// Symbol
let symbolValue = Symbol("unique");
console.log(symbolValue); // Output: Symbol(unique)

// BigInt
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue); // Output: 1234567890123456789012345678901234567890n

// Non-Primitives in JavaScript
// Object
let person = {
  name: "John Doe",
  age: 30,
  address: "123 Main St",
};
console.log(person); // Output: { name: 'John Doe', age: 30, address: '123 Main St' }

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!
