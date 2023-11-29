const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);

let arr = new Array(N).fill(0);

for (i = 1; i <= M; i++) {
    const [start, end, ball] = input[i].trim().split(" ").map(Number);
    for (let j = start; j <= end; j++) {
        arr[j - 1] = ball;
    }
}

console.log(arr.join(' '));