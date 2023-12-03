const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[1].trim().split("").map(Number);
const sum = numbers.reduce((acc, cur) => acc + cur);
console.log(sum);
