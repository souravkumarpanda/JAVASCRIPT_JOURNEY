// User input with strict mode
"use strict";

const readline = require("node:readline"); // Import the readline module to handle user input from the command line

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Please enter your name: ", (userInput) => {
  console.log(userInput);
  input.close();
});

// let userInput =  prompt("Please enter your name: "); used by brower
// console.log(userInput);
