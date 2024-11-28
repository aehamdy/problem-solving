/*
48. Write a JavaScript program to reverse a given string. 
*/

function reverseString(value) {
    return value.split("").reverse().join("");
}

console.log(reverseString("Hello"));
console.log(reverseString("Welcome"));
console.log(reverseString("JavaScript"));