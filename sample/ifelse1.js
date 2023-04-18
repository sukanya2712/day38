// Generate 5 random 3-digit values
let values = [];
for (let i = 0; i < 5; i++) {
  values.push(Math.floor(Math.random() * 900) + 100);
}

// Find the minimum and maximum values
let minValue = values[0];
let maxValue = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] < minValue) {
    minValue = values[i];
  }
  if (values[i] > maxValue) {
    maxValue = values[i];
  }
}

// Output the results
console.log("The 5 random values are: " + values.join(", "));
console.log("The minimum value is: " + minValue);
console.log("The maximum value is: " + maxValue);


// Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value