const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the lower bound of the range: ', lower => {
    readline.question('Enter the upper bound of the range: ', upper => {
      // Convert the input strings to numbers
      lower = parseInt(lower);
      upper = parseInt(upper);
  
      console.log(`Prime numbers between ${lower} and ${upper}:`);
  
      // Loop over the numbers in the range
      for (let num = lower; num <= upper; num++) {
        let isPrime = true;
  
        // Check if the current number is prime
        if (num < 2) {
          isPrime = false;
        } else {
          for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
              isPrime = false;
              break;
            }
          }
        }
  
        // Output the number if it is prime
        if (isPrime) {
          console.log(num);
        }
      }
  
      readline.close();
    });
  });
  