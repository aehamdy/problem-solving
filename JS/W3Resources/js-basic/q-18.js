/*
18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or 
if their sum is 50.  
*/

function checkFifty(num1, num2) {
    const val = 50;
    return num1 === val || num2 === val || num1 + num2 === val ? true : false
}

console.log(checkFifty(10, 50));
console.log(checkFifty(50, 18));
console.log(checkFifty(30, 20));
console.log(checkFifty(18, 14));