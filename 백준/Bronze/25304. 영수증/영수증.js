const fs = require("fs");
const [x, n, ...arr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let total = 0;
for (let i = 0; i < n; i++) {
    const [a, b] = arr[i].split(" ");
    total += parseInt(a) * parseInt(b);
}

parseInt(x) === total ? console.log("Yes") : console.log("No");
