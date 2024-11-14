/*
30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position 
in a given string. If "Script" appears in the string, return the string without "Script" otherwise return 
the original one.
*/

function checkPhrase(string) {
    const phrase = "Script";

    return string.startsWith(phrase, 4) ? string.replace("Script", "") : string;
}

console.log(checkPhrase("JavaScript"));
console.log(checkPhrase("TypeScriptoss"));
console.log(checkPhrase("criptScriptcript"));