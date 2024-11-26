/*
38. Write a JavaScript program to evaluate a student's total marks across various examinations and 
    determine their grade. The grading criteria are as follows:

    If the total marks fall within the range of 89 to 100 (inclusive), the student receives an A+ grade.
    If the examination is labeled as "Final-exam," the student will receive an A+ grade only if their total
      marks are 90 or greater. Assume that final examination means we pass 'true' as second parameter otherwise blank.
    If the student achieves an A+ grade, the program should return 'true'; otherwise, it should return 'false'.
*/

function evaluateMarks(marks, isExam) {
    if(isExam) {
        return marks >= 90
    }

    return marks >= 89 && marks <= 100;
};

console.log(evaluateMarks("78", " "));
console.log(evaluateMarks("89", "true"));
console.log(evaluateMarks("99", "true"));