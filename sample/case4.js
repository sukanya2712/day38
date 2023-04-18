// Write a program that takes User Inputs and does Unit Conversion of
// different Length units
// 1. Feet to Inch 3. Inch to Feet
// 2. Feet to Meter 4. Meter to Feet

const prompt = require("prompt-sync")();

console.log("Select the conversion option:");
console.log("1. Feet to Inch");
console.log("2. Feet to Meter");
console.log("3. Inch to Feet");
console.log("4. Meter to Feet");

const option = parseInt(prompt("Enter option number: "));

switch (option) {
  case 1:
    const feetToInch = parseFloat(prompt("Enter length in feet: "));
    const inch = feetToInch * 12;
    console.log(`${feetToInch} feet = ${inch} inches`);
    break;
  case 2:
    const feetToMeter = parseFloat(prompt("Enter length in feet: "));
    const meter = feetToMeter * 0.3048;
    console.log(`${feetToMeter} feet = ${meter} meters`);
    break;
  case 3:
    const inchToFeet = parseFloat(prompt("Enter length in inches: "));
    const feet = inchToFeet / 12;
    console.log(`${inchToFeet} inches = ${feet} feet`);
    break;
  case 4:
    const meterToFeet = parseFloat(prompt("Enter length in meters: "));
    const feet2 = meterToFeet / 0.3048;
    console.log(`${meterToFeet} meters = ${feet2} feet`);
    break;
  default:
    console.log("Invalid option");
    break;
}
