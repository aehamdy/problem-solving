/*
9. Write a JavaScript function that accepts an argument and returns the type.
Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
*/

function checkType(val) {
    return typeof val;
}

console.log(checkType(12));
console.log(checkType("w3resource"));
console.log(checkType(false));