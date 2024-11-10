/*
7. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.
*/

// Loop through the years from 2014 to 2050 (inclusive)
for (let year = 2017; year <= 2050; year++) {

    // Create Date object for January 1st of the current year
    const d = new Date(year, 0 , 1);

    // Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
    if (d.getDay() === 0) {

        // Log a message if January 1st is a Sunday for the current year
        console.log("1st Jan is being a Sunday " + year);
        
    }
}