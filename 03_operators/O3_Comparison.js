// Equality and Strict Equality Operators
let num1 = 10;
let num2 = "10";
console.log(num1 == num2); // true (loose comparison)
console.log(num1 === num2); // false (strict comparison)

// Inequality and Strict Inequality Operators
let num3 = 5;
let num4 = "5";
console.log(num3 != num4); // false (loose comparison)
console.log(num3 !== num4); // true (strict comparison)

// Greater Than and Less Than and Greater Than or Equal and Less Than or Equal Operators
let a = 15;
let b = 20;
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true

// NOTE: NULL Coalescing Operator (??) is used to provide a default value when dealing with null or undefined values.
let value1 = null;
let value2 = undefined;
let defaultValue = 100;
console.log(value1 ?? defaultValue); // Output: 100
console.log(value2 ?? defaultValue); // Output: 100
