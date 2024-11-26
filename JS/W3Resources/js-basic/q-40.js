/*
40. Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.  
*/

function checkIntegers(num1, num2) {
    if((num1 === 8 || num2 === 8) || ((num1 + num2 === 8) || (Math.abs(num1 - num2) === 8))) {
        return true;
    }
    return false;
}

console.log(checkIntegers(7, 8));
console.log(checkIntegers(16, 8));
console.log(checkIntegers(24, 32));
console.log(checkIntegers(4, 4));
console.log(checkIntegers(17, 18));