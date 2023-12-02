const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input[0]);
const scores = input[1].trim().split(" ").map(Number);
const max = Math.max(...scores);

let result = 0;

for (let i = 0; i < scores.length; i++) {
    result += (scores[i] / max) * 100;
}

result = result / count;
console.log(result);
