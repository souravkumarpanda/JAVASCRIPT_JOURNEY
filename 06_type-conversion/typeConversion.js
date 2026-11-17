// String Conversion
let value = true;
console.log(typeof value); // boolean

value = String(value);
console.log(typeof value); // string

// Numeric Conversion
let str = "123";
console.log(typeof str); // string

str = Number(str);
console.log(typeof str); // number

// Boolean Conversion
let num = 0;
console.log(typeof num); // number

num = Boolean(num);
console.log(typeof num); // boolean

// Null and Undefined Conversion
let nullValue = null;
console.log(typeof nullValue); // object

nullValue = String(nullValue);
console.log(typeof nullValue); // string

let undefinedValue = undefined;
console.log(typeof undefinedValue); // undefined

undefinedValue = String(undefinedValue);
console.log(typeof undefinedValue); // string

// Explicit Conversion
let explicitValue = 42;
console.log(typeof explicitValue); // number

explicitValue = explicitValue.toString();
console.log(typeof explicitValue); // string

// Implicit Conversion
let implicitValue = 10;
console.log(typeof implicitValue); // number

implicitValue = implicitValue + ""; // Implicitly converts to string
console.log(typeof implicitValue); // string

// Key Takeaways
// - Use String(), Number(), and Boolean() for explicit type conversion.
// - JavaScript performs implicit type conversion in certain operations, but it's recommended to use explicit conversion for clarity.
