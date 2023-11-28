const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [hour, min] = input[0].split(" ").map(Number);
const cookingTime = +input[1];

min += cookingTime;

while (min >= 60) {
  min -= 60;
  hour += 1;
}
hour %= 24;

console.log(hour, min);
