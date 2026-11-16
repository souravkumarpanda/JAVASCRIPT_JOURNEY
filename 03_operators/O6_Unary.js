// Unary Plus (+): Converts the operand to a number.
let num = "5";
let resultPlus = +num; // Converts the string "5" to the number 5
console.log(resultPlus); // Output: 5

// Unary Minus (-): Converts the operand to a number and negates it.
let resultMinus = -num; // Converts the string "5" to the number 5 and negates it
console.log(resultMinus); // Output: -5

// Increment (++) operator: Increases the value of a variable by 1.
let count = 10;
count++;
console.log(count); // Output: 11

// Decrement (--) operator: Decreases the value of a variable by 1.
count--;
console.log(count); // Output: 10

// typeof operator: Returns a string indicating the type of the operand.
console.log(typeof num); // Output: "string"
console.log(typeof resultPlus); // Output: "number"

// delete operator: Deletes a property from an object.
let obj = { name: "Alice", age: 25 };
delete obj.age;
console.log(obj); // Output: { name: "Alice" }

// void operator: Evaluates an expression and returns undefined.
let voidResult = void (2 + 2);
console.log(voidResult); // Output: undefined
