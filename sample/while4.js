// Write a Program where a gambler starts with Rs 100 and places Re 1 bet
// until he/she goes broke i.e. no more money to gamble or reaches the
// goal of Rs 200. Keeps track of number of times won and number of bets
// made.

let money = 100;
let bets = 0;
let wins = 0;

while (money > 0 && money < 200) {
  bets++;
  if (Math.random() < 0.5) {
    money--;
  } else {
    money++;
    wins++;
  }
}

if (money === 0) {
  console.log(`You went broke after ${bets} bets`);
} else {
  console.log(`You reached your goal of Rs 200 after ${bets} bets`);
}

console.log(`Number of wins: ${wins}`);
console.log(`Winning percentage: ${(wins/bets * 100).toFixed(2)}%`);
