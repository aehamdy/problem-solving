/*
27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise. 
*/

function checkInitial(str) {
    return str.toLowerCase().startsWith("java") ? true : false;
}

console.log(checkInitial("Javascript"));
console.log(checkInitial("jatess"));