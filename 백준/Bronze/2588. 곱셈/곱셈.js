const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

const a = num2 % 10;
const b = Math.floor((num2 % 100) / 10);
const c = Math.floor(num2 /100);

console.log(num1 * a);
console.log(num1 * b);
console.log(num1 * c);
console.log(num1 * num2);