const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let wordCnt = 0;
for (let i = 0; i < input.length; i++) {
    if (input[i] !== "") wordCnt++;
}

console.log(wordCnt);
