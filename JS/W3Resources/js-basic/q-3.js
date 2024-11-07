/*
* 3. Write a JavaScript program to get the current date.  
* Expected Output :
* mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

function getCurrentDate() {
    const d = new Date();

    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
}

console.log(getCurrentDate());