const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

input.sort((a, b) => {
    return b - a;
});
const [a, b, c] = input;

if (a !== b && a !== b && b !== c) {
    console.log(a * 100);
} else if (a === b && a !== c) {
    console.log(1000 + a * 100);
} else if (a === c && b !== c) {
    console.log(1000 + a * 100);
} else if (b === c && a !== c) {
    console.log(1000 + b * 100);
} else {
    console.log(10000 + a * 1000);
}
