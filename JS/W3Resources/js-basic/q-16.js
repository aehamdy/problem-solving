/*
16. Write a JavaScript program to compute the sum of the two given integers.
If the two values are the same, then return triple their sum. 
*/

function sum(num1, num2) {
    return num1 === num2 ? (num1 + num2) * 3 : num1 + num2;
}

console.log(sum(5, 6))