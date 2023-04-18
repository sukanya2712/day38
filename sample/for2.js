const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', numStr => {
    // Convert the input string to a number
    const num = parseInt(numStr);
  
    // Check if the input is a valid number
    if (isNaN(num)) {
      console.log('Invalid input');
      readline.close();
      return;
    }
  
    // Compute the factorial of the input number
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
  
    // Output the result
    console.log(`${num} factorial = ${factorial}`);
  
    readline.close();
  });
  