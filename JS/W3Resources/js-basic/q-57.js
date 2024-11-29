/*
57. Write a JavaScript program to create one string of specified copies (positive numbers) of a given string.  
*/

function stringCopies(string, copies) {
    return copies > 0 && string.repeat(copies);
}

console.log(stringCopies("abc", 5));
console.log(stringCopies("abc", 0));
console.log(stringCopies("abc", -2));