"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(2, 4));
const mult = function (num1, num2) {
    return num1 + num2;
};
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a - b, 0);
}
let numbers = [1, 2, 3, 4, 5, 6];
console.log('add number 2:', add2(3, 4, 5, ...[5, 6, 7, 8, 9]));
