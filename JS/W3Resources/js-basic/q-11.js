/*
11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C 
*/

function cToF(celsius) {
    const cTemp = celsius;

    const cToF = cTemp * 9 / 5 + 32;

    const result = `${cTemp}C is ${cToF}F`;

    console.log(result);
}

cToF(32);

function fToC(fahrenheit) {
    const fTemp = fahrenheit;

    const fToC = (fTemp - 32) * 5 / 9;

    const result = `${fTemp}F is ${fToC.toFixed(1)}C`;

    console.log(result);
}

fToC(100);