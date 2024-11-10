/*
9. Write a JavaScript program to calculate the days left before Christmas.  
*/

const today = new Date();
let xmas = new Date(today.getFullYear(), 11, 25); //Create a Date object for christmas for current year

// Check if the current year date is after Dec 25th
if (today.getMonth() === 11 && today.getDate() > 25) {
    // If true, Set the Christmas to the next year
    xmas.getFullYear(xmas.getFullYear() + 1);
}

const one_day = 1000 * 60 * 60 * 24;

console.group(Math.ceil((xmas.getTime() - today.getTime()) / one_day))