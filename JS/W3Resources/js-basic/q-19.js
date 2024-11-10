/*
19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  
*/

function test(val) {
    return Math.abs(100 - val) <= 20 || Math.abs(400 - val) <= 20
}

console.log(test(10));
console.log(test(90));
console.log(test(99));
console.log(test(199));
console.log(test(200));