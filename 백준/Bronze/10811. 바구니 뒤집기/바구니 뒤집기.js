const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].trim().split(" ").map(Number);

let basket = [];
for (let i = 1; i <= N; i++) basket.push(i);

for (let i = 1; i <= M; i++) {
    const [start, end] = input[i].trim().split(" ").map(Number);
    let reveredBasket = [];
    for (let j = start - 1; j < end; j++) {
        reveredBasket.push(basket[j]);
    }
    reveredBasket.reverse();
    basket.splice(start - 1, end - start + 1, ...reveredBasket);
}

console.log(basket.join(" "));
