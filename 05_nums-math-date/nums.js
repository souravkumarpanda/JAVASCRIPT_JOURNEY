// Number Declaration
// Two ways to declare numbers in JavaScript: as a primitive number or as a Number object.

// Primitive Number: Created using a numeric literal.
const nums = 400;
console.log(nums);

// Number Object: Created using the new Number() constructor. It returns an object instead of a primitive number.
const scores = new Number(95);
console.log(scores, typeof scores);

// Number Methods
// toString() - Converts a number into a string.
console.log(nums.toString());
// to find length
console.log(nums.toString().length);

// toFixed(n) - Formats a number with n digits after the decimal point.
console.log(nums.toFixed(2));

// toExponential() - Converts a number into exponential notation.
console.log(nums.toExponential());

// toPrecision(n) - Formats a number to the specified number of significant digits.
console.log(nums.toPrecision(3));

// toLocaleString() - Formats a number according to a specified locale.
const balance = 1000000;
console.log(balance.toLocaleString()); // This is by default in USA dollar format
console.log(balance.toLocaleString("en-IN")); // Using this to convert it into Indian format

// valueOf() - Returns the primitive numeric value from a Number object.
console.log(scores.valueOf());

// Key takeaway
//  Prefer primitive numbers (const num = 100) over Number objects (new Number(100)) in normal JavaScript programming.
