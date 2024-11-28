/*
51. Write a JavaScript application that transforms a provided numerical value into hours and minutes.
*/

function timeConvert(num) {
    const hours = Math.floor(num / 60);
    const mins = num % 60

    return `${hours}:${mins}`;
};

console.log(timeConvert(71));
console.log(timeConvert(450));
console.log(timeConvert(1441));