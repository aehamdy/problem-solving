/*
5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '
*/

function convertFirst(string) {
    const value = string.toLowerCase().split(" ");
    const result = value.map((phrase) => phrase.charAt(0).toUpperCase() + phrase.slice(1)).join(" ")

    return result;
}

console.log(convertFirst("the quick brown fox"));