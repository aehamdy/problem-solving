/*
69. Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.  
*/

function sum(inputArray) {
    return inputArray.reduce((acc, curr) => acc + curr);
}

console.log(sum([10, 32, 20]));
console.log(sum([5, 7, 9]));
console.log(sum([0, 8, -11]));