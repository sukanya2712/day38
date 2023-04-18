const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to enter a year
rl.question('Enter a year:', (year) => {
  // Convert the year to a number
  year = Number(year);

  // Check if it is a leap year or not
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }

  // Close the interface
  rl.close();
});
