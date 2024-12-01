/*
4. Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed strin
*/

function orderAlphabetically(string) {
    const value = string.replace(/[^a-zA-Z0-9]/g, "");

    return value.split("").sort().join("");
}

console.log(orderAlphabetically("webmaster"));