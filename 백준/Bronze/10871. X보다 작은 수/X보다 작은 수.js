const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, x] = input[0].trim().split(" ");
const numbers = input[1].trim().split(" ").map(Number);

let result = [];
numbers.forEach((number) => {
    if (number < x) result.push(number);
});

console.log(result.join(" "));