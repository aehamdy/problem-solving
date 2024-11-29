/*
74. Write a JavaScript program to find the largest value between the first and last elements and set all the other elements to that value. Display the updated array. 
*/

function unifyMax(input) {
    const result = input.reduce((acc, curr) => acc > curr ? acc : curr);
    return input.map((el) => el = result);
}

console.log(unifyMax([20, 30, 40]));
console.log(unifyMax([-7, -9, 0]));
console.log(unifyMax([12, 10, 3]));