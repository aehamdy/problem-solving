/*
22. Write a JavaScript program to remove a character at the specified position in a given string 
and return the modified string.  
*/

function removeChar(string, pos) {
    const firstPart = string.substring(0, pos);
    const secondsPart = string.substring(pos + 1, string.length);

    return firstPart + secondsPart;
}

console.log(removeChar("JavaScript", 0))
console.log(removeChar("JavaScript", 3))
console.log(removeChar("JavaScript", 5))