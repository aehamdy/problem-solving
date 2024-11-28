/*
46. Write a JavaScript program to check two given non-negative integers if one (not both) is a multiple of 7 or 11.  
*/

function testIntegers(num1, num2) {

    if(!((num1 % 7 === 0 || num1 % 11 === 0) && (num2 % 7 === 0 || num2 % 11 === 0))) {

        return (num1 % 7 === 0 || num1 % 11 === 0) || (num2 % 7 === 0 || num2 % 11 === 0);

    } else {

        return false;
        
    }
    
};

console.log(testIntegers(14, 21));
console.log(testIntegers(14, 20));
console.log(testIntegers(16, 20)); 