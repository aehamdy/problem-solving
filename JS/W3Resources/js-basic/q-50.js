/*
50. Write a JavaScript program to capitalize the first letter of each word in a given string.  
*/

function capitalizeFirstLetter(string) {
    const value = string.split(" ");
    let result = "";

    for(let i = 0; i < value.length; i++) {
        result += value[i].charAt(0).toUpperCase() + value[i].slice(1).toLowerCase() + " ";
    }

    return result;
}

console.log(capitalizeFirstLetter("Write a JavaScript program to capitalize the first letter of each word of a given string."));
