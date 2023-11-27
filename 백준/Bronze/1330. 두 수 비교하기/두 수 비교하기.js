const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);

const a = input[0];
const b = input[1];

let result = "";

if(a > b) result = ">";
if(a < b) result = "<";
if(a === b) result = "==";

console.log(result);