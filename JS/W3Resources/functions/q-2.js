/*
2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/

function checkIsPalindrome(string) {
    const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr.toLowerCase() === cleanedStr.toLowerCase().split("").reverse().join("");
}

console.log(checkIsPalindrome("madam"));
console.log(checkIsPalindrome("nurses run"));
console.log(checkIsPalindrome("hello"));