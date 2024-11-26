/*
37. Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. 
    If the string length is less than 3 convert all the characters to upper case. 
*/

function changeForm(inputString) {
    if(inputString.length <= 3) {
        return inputString.toUpperCase();
    }

    const frontPart = inputString.substring(0, 3).toLowerCase();
    const restPart = inputString.substring(3);

    return frontPart + restPart;
}

console.log(changeForm("Python"));
console.log(changeForm("Py"));
console.log(changeForm("JAVAScript")); 
