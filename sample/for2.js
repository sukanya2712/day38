const n = parseInt(process.argv[2]);

if (isNaN(n)) {
  console.error('Please provide a valid integer as the command-line argument');
  process.exit(1);
}

let harmonic = 0;
for (let i = 1; i <= n; i++) {
  harmonic += 1 / i;
}

console.log(`The ${n}th harmonic number is ${harmonic}`);

// Write a program that takes a command-line argument n and prints the nth harmonic

// number. Harmonic Number is of the form