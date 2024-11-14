/*
28. Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
Return true if either of them falls within the range.  
*/

function checkSome(num1, num2) {
    return num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <=99 ? true : false;
}

console.log(checkSome(50, 99));
console.log(checkSome(49, 99));
console.log(checkSome(55, 100));
console.log(checkSome(49, 100));
console.log(checkSome(1, 10));
console.log(checkSome(110, 120));