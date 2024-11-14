/*
31. Write a JavaScript program to find the largest of three given integers.  
*/

function findLargest(...nums) {
    const values = nums.reduce((cur, acc) => cur < acc ? acc : cur);
    return values;
}

console.log(findLargest(5, 3, 1));
console.log(findLargest(10, 12, 100));
console.log(findLargest(12, 11, 14));