const fs = require("fs");
const num = +fs.readFileSync("/dev/stdin").toString();

for (let i = 1; i < num; i++) {
    let blank = " ".repeat(num - i);
    let star = "*".repeat(i + i - 1);
    console.log(blank + star);
}

for (let j = num; j > 0; j--) {
    let blank = " ".repeat(num - j);
    let star = "*".repeat(j + (j - 1));
    console.log(blank + star);
}
