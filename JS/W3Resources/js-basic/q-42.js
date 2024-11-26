/*
Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31 

explain what is the difference between Strict mode and Soft mode 
*/

function checkOrder(num1, num2, num3) {
    if(num1 < num2 && num2 < num3) {
        return "Strict Mode";
    } else if (num1 <= num2 || num2 <= num3) {
        return "Soft Mode";
    }

    return "Undefined";
}

console.log(checkOrder(10, 15, 31));
console.log(checkOrder(24, 22, 31));
console.log(checkOrder(50, 21, 15));