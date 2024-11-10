/*
23. Write a JavaScript program to create a new string from a given string by changing the position of the first 
and last characters. The string length must be broader than or equal to 1
*/

function change(string) {
    if (string.length <= 1) {
        return string;
    }

    const midChars = string.substring(1, string.length - 1);

    return string.charAt(string.length - 1) + midChars + string.charAt(0);
}

console.log(change('a'));
console.log(change('ab'));
console.log(change('abc'));