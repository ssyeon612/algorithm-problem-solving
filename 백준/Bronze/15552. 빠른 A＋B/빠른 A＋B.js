const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const max = Number(n);
let result = "";

for (let i = 0; i < max; i++) {
    const [a, b] = arr[i].split(" ").map(Number);
    result += `${Number(a) + Number(b)} \n`;
}
console.log(result);