// Enter 3 Numbers do following arithmetic operation and find the one that

// is maximum and minimum
// 1. a + b * c 3. c + a / b
// 2. a % b + c 4. a * b + c


const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const c = parseFloat(process.argv[4]);

const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

const maxResult = Math.max(result1, result2, result3, result4);
const minResult = Math.min(result1, result2, result3, result4);

console.log(`Maximum result: ${maxResult}`);
console.log(`Minimum result: ${minResult}`);
