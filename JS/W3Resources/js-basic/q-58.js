/*
58. Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above. 
*/

function createCopies(string) {
    return string.length >= 3 ? string.slice(-3).repeat(4) : "String length must be 3 or above.";
}

console.log(createCopies("Python 3.0"));
console.log(createCopies("JavaScript"));
console.log(createCopies("JS"));