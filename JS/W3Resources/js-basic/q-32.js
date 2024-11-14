/*
32. Write a JavaScript program to find the closest value to 100 from two numerical values. 
*/

function findTheClosest(num1, num2) {
    const number = 100;

    const largest = number - num1 > number - num2 ? num2 : num1;

    return largest
}

console.log(findTheClosest(20, 50));
console.log(findTheClosest(70, 30));
console.log(findTheClosest(-20, 20));
console.log(findTheClosest(28, -50));