const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', num => {
    // Determine the number of digits in the number
    let numDigits = num.toString().length;
  
    // Calculate the place values and output them
    for (let i = 0; i < numDigits; i++) {
      let placeValue = Math.pow(10, i);
      let digit = Math.floor(num / placeValue) % 10;
  
      if (placeValue === 1) {
        console.log(digit + " unit");
      } else if (placeValue === 10) {
        console.log(digit + " ten");
      } else if (placeValue === 100) {
        console.log(digit + " hundred");
      } else if (placeValue === 1000) {
        console.log(digit + " thousand");
      } else {
        console.log(digit + " unknown");
      }
    }
  
    readline.close();
  });
  
  