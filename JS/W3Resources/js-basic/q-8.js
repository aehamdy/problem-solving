/*
8. Write a JavaScript program where the program takes a random integer between 1 and 10, 
and the user is then prompted to input a guess number. The program displays a message "Good Work" 
if the input matches the guess number otherwise "Not matched".
*/
const randomNum = Math.ceil(Math.random() * 10)
console.log(random);

const guessNum = prompt('Guess the number between 1 and 10 inclusive');

if (guessNum === random) {
    console.log("Matched")
} else {
    console.log('Not matched, the number is ' + randomNum)
}