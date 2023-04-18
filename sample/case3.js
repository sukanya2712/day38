// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...


const number = parseInt(process.argv[2]);

switch (number) {
  case 0:
    console.log("Zero");
    break;
  case 1:
    console.log("Unit");
    break;
  case 10:
    console.log("Ten");
    break;
  case 100:
    console.log("Hundred");
    break;
  case 1000:
    console.log("Thousand");
    break;
  case 10000:
    console.log("Ten Thousand");
    break;
  case 100000:
    console.log("Hundred Thousand");
    break;
  case 1000000:
    console.log("Million");
    break;
  default:
    console.log("Invalid input");
    break;
}
