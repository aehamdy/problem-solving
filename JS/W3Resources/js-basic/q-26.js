/*
26. Write a JavaScript program to create a string from a given string. This is done by taking the 
last 3 characters and adding them at both the front and back. The string length must be 3 or more
*/

function change(string) {
    if (string.length < 3) {
        return false;
    }

    let letters = string.substring(string.length - 3);

    return letters + string + letters;
}

console.log(change("abc"));
console.log(change("ab"));
console.log(change("abcd"));