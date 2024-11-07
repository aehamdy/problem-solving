/*
* 1. Write a JavaScript program to display the current day and time in the following format.  
* Sample Output : Today is : Tuesday.
* Current time is : 10 PM : 30 : 38
*/

function currentDay() {
    const d = new Date();

    const hour = d.getHours();

    const ampm = hour >= 12 ? "PM": "AM";

    let minutes = d.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes

    let seconds = d.getSeconds();
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    const weekday = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const day = weekday[d.getDay() + 1];

    return `Today is: ${day} - ${hour}:${minutes}:${seconds} ${ampm}`
}

console.log(currentDay());