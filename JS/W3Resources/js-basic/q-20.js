/*
20. Write a JavaScript program to check two given integers whether one is positive and another one is negative.
*/

function checkPN(x, y) {
    let result;

    if (x < 0 && y < 0) {
        result = `${x} & ${y} are negative numbers`;
    } else if (x > 0 && y < 0) {
        result = `${x} is a positive number and ${y} is a negative number`
    } else if (x < 0 && y > 0) {
        result = `${x} is a negative number and ${y} is a positive number`;
    } else {
        result = `${x} and ${y} are positive numbers`;
    }

    return result;
}

console.log(checkPN(10, -5));
console.log(checkPN(-5, 10));
console.log(checkPN(-2, -3));
console.log(checkPN(10, 11));