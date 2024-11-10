/*
21. Write a JavaScript program to create another string by adding "Py" in front of a given string.
If the given string begins with "Py" return the original string.  
*/

function stringCheck(string) {
    return string.startsWith("Py") ? string : 'Py' + string;
}

console.log(stringCheck("Python"));
console.log(stringCheck("thon"));