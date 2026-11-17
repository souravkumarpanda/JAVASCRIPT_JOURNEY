// JavaScript Math Object
// The JavaScript Math object provides built-in properties and methods to perform mathematical operations such as rounding numbers, finding maximum/minimum values, calculating square roots, and generating random numbers.

// Math Methods
// Math.abs(x) - Returns the absolute (positive) value.
console.log(Math.abs(-5));

// Math.round(x) - Rounds to the nearest integer.
console.log(Math.round(4.7));

// Math.ceil(x) - Rounds up to the next integer.
console.log(Math.ceil(4.2));

// Math.floor(x) - Rounds down to the previous integer.
console.log(Math.floor(4.8));

// Math.sqrt(x) - Returns the square root.
console.log(Math.sqrt(16));

// Math.pow(x, y) - Returns x raised to the power y.
console.log(Math.pow(2, 3));

// Math.max() - Returns the largest value.
console.log(Math.max(1, 5, 3));

// Math.min() - Returns the smallest value.
console.log(Math.min(1, 5, 3));

// Math.random() - Generates a random decimal between 0 (inclusive) and 1 (exclusive).
console.log(Math.random());
// Generate a random decimal between 1 and 10.
console.log(Math.random() * 10 + 1);
// Generate a random integer between 1 and 10.
console.log(Math.floor(Math.random() * 10) + 1);

// Generate Random Numbers Between Minimum and Maximum
// We can generate a random integer within any given range using the following formula:
// { [Math.random() * (max-min+1)] + min }
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
