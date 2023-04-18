// Find the Magic Number

// a. Ask the user to think of a number n between 1 to 100
// b. Then check with the user if the number is less then n/2 or greater
// c. Repeat till the Magic Number is reached..

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const n = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 to 100
let guess;

rl.question(`Think of a number between 1 to 100. Is your number less than ${n/2}? (y/n) `, answer => {
  if (answer.toLowerCase() === 'y') {
    guess = Math.floor(Math.random() * Math.floor(n/2)) + 1;
  } else {
    guess = Math.floor(Math.random() * (100 - Math.floor(n/2) + 1)) + Math.floor(n/2);
  }
  console.log(`My guess is ${guess}`);
  askUser();
});

function askUser() {
  rl.question('Is my guess correct? (y/n) ', answer => {
    if (answer.toLowerCase() === 'y') {
      console.log('I found the Magic Number!');
      rl.close();
    } else {
      rl.question('Is your number less than my guess? (y/n) ', answer => {
        if (answer.toLowerCase() === 'y') {
          guess = Math.floor(Math.random() * guess) + 1;
        } else {
          guess = Math.floor(Math.random() * (100 - guess + 1)) + guess;
        }
        console.log(`My new guess is ${guess}`);
        askUser();
      });
    }
  });
}
