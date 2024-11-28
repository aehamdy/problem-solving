/*
52. Write a JavaScript program to convert letters of a given string alphabetically.  
*/

function orderAlphabetically(string) {
    return string.split("").sort().join("");
}

console.log(orderAlphabetically("JavaScript"));