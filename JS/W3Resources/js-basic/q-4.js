// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

function findTriangleArea(s1, s2, s3) {
    const sideOne = s1;
    const sideTwo = s2;
    const sideThree = s3;

    const s = (sideOne + sideTwo + sideThree) / 2;

    const area = Math.sqrt(s * ((s - sideOne) * (s - sideTwo) * (s - sideThree)));

    return area;
}

console.log(findTriangleArea(5, 6, 7));