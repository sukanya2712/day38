// Write a program that computes a factorial of a number taken as input.

const n = parseInt(process.argv[2]);

if (isNaN(n)) {
  console.error('Please provide a valid integer as the command-line argument');
  process.exit(1);
}

let factorial = 1;
for (let i = 2; i <= n; i++) {
  factorial *= i;
}

console.log(`The factorial of ${n} is ${factorial}`);
