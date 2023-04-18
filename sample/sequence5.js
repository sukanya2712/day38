// Part a
const inchesToFeet = (inches) => inches / 12;
console.log(inchesToFeet(42)); // Output: 3.5

// Part b
const feetToMeters = (feet) => feet * 0.3048;
const lengthInMeters = feetToMeters(60);
const widthInMeters = feetToMeters(40);
console.log(`Length: ${lengthInMeters} meters, Width: ${widthInMeters} meters`);

// Part c
const squareFeetToAcres = (sqFeet) => sqFeet / 43560;
const totalAreaInSqFeet = 25 * 60 * 40;
const totalAreaInAcres = squareFeetToAcres(totalAreaInSqFeet);
console.log(`Total area: ${totalAreaInAcres} acres`);

// Use Script & Debug – Unit Conversion

// a. 1ft = 12 in then 42 in = ? ft
// b. Rectangular Plot of 60 feet x 40 feet in meters
// c. Calculate area of 25 such plots in acres