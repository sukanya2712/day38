const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a number: ', num => {
    if (isPrime(num)) {
      const palindrome = getPalindrome(num);
      if (isPrime(palindrome)) {
        console.log(`${num} is a prime number and its palindrome ${palindrome} is also prime`);
      } else {
        console.log(`${num} is a prime number but its palindrome ${palindrome} is not prime`);
      }
    } else {
      console.log(`${num} is not a prime number`);
    }
    readline.close();
  });
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function getPalindrome(num) {
    let reversed = 0;
    let original = num;
    while (original > 0) {
      const digit = original % 10;
      reversed = reversed * 10 + digit;
      original = Math.floor(original / 10);
    }
    return reversed;
  }
  