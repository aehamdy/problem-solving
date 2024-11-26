/* 
35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string.  
*/

function checkChar(string, char) {
    let ctr = 0;

    for(let i = 0; i <= string.length; i++) {
        if ((string.charAt(i) === char) && (i >= 1 && i <= 3)) {
            ctr = 1;
        }
    }
    if (ctr === 1) return true;
    return false;
};

console.log(checkChar("Python", "y"));
console.log(checkChar("JavaScript", "v"));
console.log(checkChar("JavaScript", "t"));