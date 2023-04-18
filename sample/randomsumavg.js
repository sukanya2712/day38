// Write a program that reads 5 Random 2 Digit values ,

// then find their sum and the average

let sum = 0;
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * 90) + 10; // generates a random 2-digit number
  console.log("Random number " + (i+1) + ": " + randomNumber);
  sum += randomNumber;
}

let average = sum / 5;
console.log("Sum: " + sum);
console.log("Average: " + average);