const year = parseInt(process.argv[2]); // get year from command line

if (isNaN(year)) { // check for invalid input
  console.log("Invalid input");
} else if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}


// leapyear
// Write a program that takes a year as input and outputs the Year is a Leap Year or not
// a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
// divisible by 400.