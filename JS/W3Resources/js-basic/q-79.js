/*
79. Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.  
*/

function checkTwice(input) {
    let count30 = 0;
    let count40 = 0;

    if(input.length < 3) {
        for(let i = 0; i < input.length; i++) {
            if(input[i] === 30) {
                count30++;
            } else if (input[i] === 40) {
                count40++;
            }
        }
    }

    return count30 === 2 || count40 === 2;
}

console.log(checkTwice([30, 30]));
console.log(checkTwice([40, 40]));
console.log(checkTwice([20, 30]));
console.log(checkTwice([40, 30]));
console.log(checkTwice([30]));