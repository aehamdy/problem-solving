// 6.Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

function leapYearCalculator(year) {
    return (year % 4 === 0) ? `${year} is a leap year` : `${year} isn't a leap year`;
}

console.log(leapYearCalculator(1994));
console.log(leapYearCalculator(2016));
console.log(leapYearCalculator(2022));
console.log(leapYearCalculator(2024));
console.log(leapYearCalculator(2025));