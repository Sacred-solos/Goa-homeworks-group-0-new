const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

rl.on('line', (input) => {
  let number = parseInt(input);
  if (!isNaN(number)) {
    numbers.push(number);
  }

  if (numbers.length === 10) {
    rl.close();
  }
});

rl.on('close', () => {
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log('sum of all numbers: ' + sum);
});