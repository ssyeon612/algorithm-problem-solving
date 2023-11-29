const fs = require("fs");
const numbers = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let max = numbers[0];
let digit = 1;

for (let i = 1; i < 9; i++) {
    const value = numbers[i];
    if (max < value) {
        max = value;
        digit = i + 1;
    }
}

console.log(`${max}\n${digit}`)