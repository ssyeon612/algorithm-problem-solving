const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const value = parseInt(input) / 4;
let result = "";
for (let i = 0; i < value; i++) {
    result += "long ";
}
result += "int";
console.log(result);
