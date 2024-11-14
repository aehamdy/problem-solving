/*
34. Write a JavaScript program to find the largest number from the two given positive integers.
The two numbers are in the range 40..60 inclusive.
*/

function check(num1, num2) {
    if ((num1 < 40 || num1 > 60) || (num2 < 40 || num2 > 60)) {
        return "At least on of the entered values are out of the range of 40 - 60";
    } else {
        return num1 > num2 ? num1 : num2;
    }
}

console.log(check(40, 60));
console.log(check(45, 50));
console.log(check(58, 45));
console.log(check(45, 65));
console.log(check(30, 55));
console.log(check(30, 70));