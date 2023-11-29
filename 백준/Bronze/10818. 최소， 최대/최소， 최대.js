const fs = require("fs");
const [n, arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = arr.trim().split(" ").map(Number);
let min = numbers[0];
let max = numbers[0];

for (i = 1; i < Number(n); i++) {
    const num = numbers[i];
    if (min > num) min = num;
    if (max < num) max = num;
}

console.log(min, max);
