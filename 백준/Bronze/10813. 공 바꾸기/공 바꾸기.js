const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);

let basket = [];

// 바구니에 적혀있는 번호와 같은 공 할당
for (let i = 1; i <= N; i++) {
    basket.push(i);
}

// 공 교환
for (let i = 1; i <= M; i++) {
    const [num1, num2] = input[i].trim().split(" ").map(Number);

    let temp = basket[num1 - 1];
    basket[num1 - 1] = basket[num2 - 1];
    basket[num2 - 1] = temp;
}

console.log(basket.join(" "));
