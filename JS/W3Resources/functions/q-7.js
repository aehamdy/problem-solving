/*
7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5
*/

function countVowels(string) {
    const vowels = ["a", "i", "e", "o", "u"];
    let count = 0;
    const splitted = string.toLowerCase();

    for(let i = 0; i < splitted.length; i++) {
        for(let j = 0; j < vowels.length; j++) {
            splitted[i] === vowels[j] && count++;
        }
    }

    return count;
}

console.log(countVowels("The quick brown fox"));