/*
6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

function findLongest(string) {
    const splitted = string.split(" ");

    const result = splitted.reduce((acc, curr) => acc.length > curr.length ? acc : curr);

    return result;
}

console.log(findLongest("Web Development Tutorial"));