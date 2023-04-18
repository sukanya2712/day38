// Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

// generate a random number between 0 and 1
const random = Math.random();

// if the number is less than 0.5, it's heads; otherwise, it's tails
const result = random < 0.5 ? "Heads" : "Tails";

// print out the result
console.log(result);
