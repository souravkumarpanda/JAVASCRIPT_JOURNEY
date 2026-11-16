// Bitwise operators are used to perform bit-level operations on binary numbers. They operate on the individual bits of the operands.
// Bitwise AND (&): Compares each bit of the first operand to the corresponding bit of the second operand. If both bits are 1, the corresponding result bit is set to 1; otherwise, it is set to 0.
let x = 5; // Binary: 0101
let y = 3; // Binary: 0011
let resultAnd = x & y; // Binary: 0001 (Decimal: 1)
console.log(resultAnd); // Output: 1

// Bitwise OR (|): Compares each bit of the first operand to the corresponding bit of the second operand. If either bit is 1, the corresponding result bit is set to 1; otherwise, it is set to 0.
let resultOr = x | y; // Binary: 0111 (Decimal: 7)
console.log(resultOr); // Output: 7

// Bitwise XOR (^): Compares each bit of the first operand to the corresponding bit of the second operand. If the bits are different, the corresponding result bit is set to 1; otherwise, it is set to 0.
let resultXor = x ^ y; // Binary: 0110 (Decimal: 6)
console.log(resultXor); // Output: 6

// Bitwise NOT (~): Inverts the bits of the operand. Each 0 becomes 1, and each 1 becomes 0.
let resultNot = ~x; // Binary: 1010 (Decimal: -6, due to two's complement representation)
console.log(resultNot); // Output: -6

// Left Shift (<<): Shifts the bits of the first operand to the left by the number of positions specified by the second operand. Zeros are shifted in from the right.
let resultLeftShift = x << 1; // Binary: 1010 (Decimal: 10)
console.log(resultLeftShift); // Output: 10

// Right Shift (>>): Shifts the bits of the first operand to the right by the number of positions specified by the second operand. The sign bit is used to fill in from the left.
let resultRightShift = x >> 1; // Binary: 0010 (Decimal: 2)
console.log(resultRightShift); // Output: 2

// Unsigned Right Shift (>>>): Shifts the bits of the first operand to the right by the number of positions specified by the second operand. Zeros are shifted in from the left.
let resultUnsignedRightShift = x >>> 1; // Binary: 0010 (Decimal: 2)
console.log(resultUnsignedRightShift); // Output: 2
