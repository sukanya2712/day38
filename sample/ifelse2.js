const args = parseInt(process.argv[2]); // get command line arguments
const month = parseInt(args[0]);
const day = parseInt(args[1]);

if (month < 1 || month > 12) { // validate month
  console.log("Invalid month");
} else if (day < 1 || day > 31) { // validate day
  console.log("Invalid day");
} else if ((month == 3 && day >= 20) || (month == 4 || month == 5) || (month == 6 && day <= 20)) {
  console.log(true); // day is between March 20 and June 20
} else {
  console.log(false); // day is outside of the range
}
