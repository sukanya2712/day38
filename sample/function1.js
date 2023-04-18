
  
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter the num1: ', num1 => {
    readline.question('Enter the num2: ', num2 => {
      
  
      isPalindrome(num1,num2);
  
      
  
      readline.close();
    });
  });

  function isPalindrome(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
  
    if (str1.length !== str2.length) {
        isPalindrome = false;
    }
  
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[str2.length - i - 1]) {
        isPalindrome = false;
        break;
      }
    }
  
    if (isPalindrome) {
        console.log("Palindrome");
      } else {
        console.log("Not Palindrome");
      }
  }
  
