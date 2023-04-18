// Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value

let minValue = 999; // initialize to a high value
let maxValue = 0;   // initialize to a low value

for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 900) + 100; // generates a random 3-digit number
  console.log("Random number " + (i+1) + ": " + randomNumber);

  if (randomNumber < minValue) {
    minValue = randomNumber;  // update the minimum value
  }

  if (randomNumber > maxValue) {
    maxValue = randomNumber;  // update the maximum value
  }
}

console.log("Minimum value: " + minValue);
console.log("Maximum value: " + maxValue);
