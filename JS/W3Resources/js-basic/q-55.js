/*
55. Write a JavaScript program to check whether a given string contains an equal number of p's and t's. 
*/

function equalPT(string) {
    // const value = string.split("");
    // let pCount = 0;
    // let tCount = 0;

    // for(let i = 0; i < value.length; i++) {
    //     if (value[i].toLowerCase() === "p") {
    //         pCount++;
    //     } else if (value[i].toLowerCase() === "t") {
    //         tCount++;
    //     }
    // }

    // return pCount === tCount;

    let ps = string.toLowerCase().replace(/[^p]/g, "");
    let ts = string.toLowerCase().replace(/[^t]/g, "");

    return ps.length === ts.length;
};

console.log(equalPT("JavaScript"));
console.log(equalPT("Python"));
console.log(equalPT("paatpss"));
console.log(equalPT("paatps"));