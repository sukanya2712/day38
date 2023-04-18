// Read a Number and Display the week day (Sunday, Monday,...)

const number = parseInt(process.argv[2]);

if (isNaN(number)) { // check for invalid input
  console.log("Invalid input");
} else if (number === 0) {
  console.log("Sunday");
} else if (number === 1) {
  console.log("Monday");
} else if (number === 2) {
  console.log("Tuesday");
} else if (number === 3) {
  console.log("Wednesday");
} else if (number === 4) {
  console.log("Thursday");
} else if (number === 5) {
  console.log("Friday");
} else if (number === 6) {
  console.log("Saturday");
} else {
  console.log("Invalid input");
}
