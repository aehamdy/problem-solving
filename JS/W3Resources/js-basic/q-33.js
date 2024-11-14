/*
33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
*/

function checkInOutRange(num1, num2) {
    if ((num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100) && (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100)) {
        console.log("both numbers are in range");
    } else {
        console.log("One of the numbers or both of them are out of the range");
    }
}

checkInOutRange(40, 100);
checkInOutRange(50, 80);
checkInOutRange(44, 105);
checkInOutRange(65, 90);
checkInOutRange(30, 110);