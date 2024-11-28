/*
54. Write a JavaScript program to count the number of vowels in a given string.  
*/

function countVowels(string) {
    // const vowels = ["a", "e", "i", "o", "u"];
    // const val = string.split("");
    // let vowelsCount = 0;

    // for(let i = 0; i < val.length; i++) {
    //     for(let n = 0; n < vowels.length; n++) {
    //         val[i] === vowels[n] && vowelsCount++;
    //     }
    // }

    // return vowelsCount;

    return string.replace(/[^aeiou]/g, "").length;
};

console.log(countVowels("Python"));
console.log(countVowels("w3resource.com"));