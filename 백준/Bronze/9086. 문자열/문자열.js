const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0];

for (let i = 1; i <= T; i++) {
    const str = input[i];
    const first = str.charAt(0);
    const last = str.charAt(str.length - 1);
    console.log(`${first}${last}`);
}
