// Write a program to compute Factors of a number N using prime factorization method.

// Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
// O/P -> Print the prime factors of number N.


const n = parseInt(process.argv[2]);

if (isNaN(n)) {
  console.error('Please provide a valid integer as the command-line argument');
  process.exit(1);
}

let factors = [];
let i = 2;

while (i * i <= n) {
  while (n % i == 0) {
    factors.push(i);
    n /= i;
  }
  i++;
}

if (n > 1) {
  factors.push(n);
}

console.log(`The prime factors of ${process.argv[2]} are ${factors.join(', ')}`);
