/*
49. Write a JavaScript program to replace every character in a given string with the character 
following it in the alphabet.  
*/

function replace(value) {
    const alphabet = [
                    "a", "b", "c", "d", "e", "f", "g", "h",
                    "i", "j", "k", "l", "m", "n", "o", "p", "q", 
                    "r", "s", "t", "u","v", "w", "x", "y", "z",
                    ];

    const splittedVal = value.toLowerCase().split("");
    let replacedVal = "";

    for(let i = 0; i < splittedVal.length; i++) {
        const letterPos =  alphabet.indexOf(splittedVal[i]);

        if(letterPos === -1) {
            //handle non-alphabetic characters like (spaces, punctuations and numbers)
            replacedVal += splittedVal[i];
        } else {
            //handle the case where the character is 'z' wrapping it to 'a'
            replacedVal += alphabet[(letterPos + 1) % alphabet.length];
        }
    }

    return replacedVal.charAt(0).toUpperCase() + replacedVal.slice(1);
}

console.log(replace("Hello"));
console.log(replace("z"));
console.log(replace("z3"));