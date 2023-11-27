const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()
const year = +input;
let result = 0;

// 윤년이면 1, 아니면 0 출력

// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
// 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 
// 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 
// 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

const condition1 = year%4 === 0;
const condition2 = year%100 === 0;
const condition3 = year%400 === 0;

if(condition1 && !condition2 || condition3) {
    result = 1;
} 

console.log(result);