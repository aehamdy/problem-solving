/*
59. Write a JavaScript program to extract the first half of a even string.  
*/

function extractFirstHalf(string) {
    if(string.length % 2 === 0) {
        return string.slice(0, string.length / 2);
    }

    return "Input length is not even"
}

console.log(extractFirstHalf("Python"));
console.log(extractFirstHalf("JavaScript"));
console.log(extractFirstHalf("PHP"));