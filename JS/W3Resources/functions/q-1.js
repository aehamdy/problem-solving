/*
1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223
*/

function reverseNumber(num) {
    return +num.toString().split("").reverse().join("");
}

console.log(reverseNumber(32243));