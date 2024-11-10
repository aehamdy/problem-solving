/*
17. Write a JavaScript program to compute the absolute difference between a specified number and 19.
Returns triple the absolute difference if the specified number is greater than 19.
*/

function sum(val) {
    const num = 19

    return val > num ? (val - num) * 3 : num - val
}

console.log(sum(10));
console.log(sum(25));