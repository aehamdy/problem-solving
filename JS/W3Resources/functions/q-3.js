/*
3. Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g 
*/

function writeCombinations(string) {
    const result = [];

    for(let i = 0; i < string.length; i++) {
        let temp = "";

        for(let j = i; j < string.length; j++) {
            temp += string[j];
            result.push(temp);
        }
    }

    return result.join(",");
}

console.log(writeCombinations("dog"));