a = 7;
b = 9;

const temp = a;

a = b;
b = temp;
console.log(a, b);

// 2nd logic
let x = 6;
let y = 7;

console.log(x, y);
[x, y] = [y, x];
console.log(x, y)