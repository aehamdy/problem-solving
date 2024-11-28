/*
45. Write a JavaScript program that checks two integer values and returns true if either one is 15 or 
if their sum or difference is 15.  
*/

function checkIntegers(num1, num2) {
    return (num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15);
};

console.log(checkIntegers(15, 9));
console.log(checkIntegers(25, 15));
console.log(checkIntegers(7, 8));
console.log(checkIntegers(25, 10));
console.log(checkIntegers(5, 9));
console.log(checkIntegers(7, 9));
console.log(checkIntegers(9, 25)); 