const fs = require('fs');
const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=0; i<n; i++) {
    const [a, b] = arr[i].split(' ');
    console.log(parseInt(a) + parseInt(b));
}