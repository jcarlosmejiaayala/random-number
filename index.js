const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isValidInput(num) {
  return !isNumber(num) || !num || num < 0 || num > 1000000;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function flip(num) {
  return Date.now() % num;
}

function randomNumber(num) {
  if (isValidInput(num)) {
    throw `Make sure input follows next rules:
    - Must be a number.
    - Must be positive.
    - Must be greater than 0.
    - Must be lower than 1000000.
    `;
  }

  return flip(num);
}

rl.question("Enter a number, please: ", num => {
  console.log(`Your random numbers is: ${randomNumber(num)}`);
  
  rl.close();
});
