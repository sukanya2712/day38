let n = parseInt(process.argv[2]);
let i = 0;
let powerOfTwo = 1;

while (i <= n) {
  console.log("2^" + i + " = " + powerOfTwo);
  powerOfTwo *= 2;
  i++;
}

