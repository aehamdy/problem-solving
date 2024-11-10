/*
24. Write a JavaScript program to create another string from a given string with the first character 
of the given string added to the front and back
*/

function frontBack(string) {
    const letter = string.substring(0, 1);

    return letter + string + letter;
}

console.log(frontBack('a'));
console.log(frontBack('ab'));
console.log(frontBack('abc'));