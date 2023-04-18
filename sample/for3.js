// Write a program that takes a input and determines if the number is a prime.

const prompt = require("prompt-sync")();

// Take user input
const num = parseInt(prompt("Enter a number: "));

let isPrime = true;

// Check if the number is prime
if (num === 1) {
  isPrime = false;
}
else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

// Print the result
if (isPrime) {
  console.log(`${num} is a prime number.`);
} else {
  console.log(`${num} is not a prime number.`);
}
