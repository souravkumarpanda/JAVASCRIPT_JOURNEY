var name = "John Doe";
let age = 30;
const address = "123 Main St";

// for output
console.log("Name: " + name);
console.log("Age: " + age);
console.log("Address: " + address);

// reassigning variable
name = "Jane Smith";
age = 25;
// address = "456 Elm St"; // This will cause an error since const variables cannot be reassigned

// we can assign a value directly to a variable without declaring it first, but it's not recommended
city = "New York"; // This will create a global variable, which can lead to unexpected behavior
console.log(city);
// we can also reassign a value
city = "Los Angeles";
console.log(city);

// if we not assign any value to a variable, it will be undefined
let country;
console.log(country); // Output: undefined
// const date;  This will cause an error since const variables must be initialized with a value

// to print data in tabular format, we can use console.table()
console.table([name, age, address, city, country]);

// why prefer let and const over var?
// 1. Block Scope: let and const are block-scoped, meaning they are only accessible within the block they are defined in. var is function-scoped, which can lead to unexpected behavior.
{
  var a = 10;
  var b = 20;
  var c = 30;
}
console.log(a); // Output: 10
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined

// 2. Hoisting: var declarations are hoisted to the top of their scope and initialized with undefined, while let and const are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
console.log(x); // Output: undefined
var x = 5;
// console.log(y); ReferenceError: Cannot access 'y' before initialization
// let y = 10;

// 3. Reassignment: const variables cannot be reassigned, providing a way to create immutable variables, while var and let can be reassigned.
const PI = 3.14;
// PI = 3.14159; // This will cause an error since const variables cannot be reassigned

// 4. Re-declaration: var allows re-declaration of the same variable within the same scope, while let and const do not, preventing accidental overwrites.
var z = 1;
var z = 2;
// let z = 3; // This will cause an error since z is already declared with var

// declaring multiple variables in a single line
var firstName = "John",
  lastName = "Doe",
  isMarried = false;
let h,j,k;
const d = 1,
  e = 2,
  f = 3;
