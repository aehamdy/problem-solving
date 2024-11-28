/*
53. Write a JavaScript program to check whether the characters a and b are separated by 
exactly 3 places anywhere (at least once) in a given string.  
*/

function abCheck(string) {
    return (/a...b/).test(string) || (/b...a/).test(string);
};

console.log(abCheck("Chainsbreak"));
console.log(abCheck("pane borrowed"));
console.log(abCheck("abCheck"));