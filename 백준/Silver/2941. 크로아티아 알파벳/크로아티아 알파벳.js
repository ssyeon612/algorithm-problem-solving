const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const alphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let word = input;
for (let i = 0; i < alphabet.length; i++) {
    word = word.split(alphabet[i]).join("*");
}

console.log(word.length);
