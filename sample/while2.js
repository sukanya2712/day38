let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  const result = Math.floor(Math.random() * 2) === 0 ? "heads" : "tails";
  
  if (result === "heads") {
    headsCount++;
  } else {
    tailsCount++;
  }

  console.log(`Result: ${result}. Score: Heads ${headsCount}, Tails ${tailsCount}`);
}

if (headsCount === 11) {
  console.log("Heads wins!");
} else {
  console.log("Tails wins!");
}
