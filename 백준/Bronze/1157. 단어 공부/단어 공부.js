const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().toUpperCase();

let words = {};
for (let i = 0; i < input.length; i++) {
    if (input[i] in words) {
        words[input[i]] += 1;
    } else {
        words[input[i]] = 1;
    }
}

let max = 0;
let str = "";
for (let word in words) {
    if (max < words[word]) {
        max = words[word];
        str = word;
    } else if (max === words[word]) {
        str = "?";
    }
}

console.log(str);
