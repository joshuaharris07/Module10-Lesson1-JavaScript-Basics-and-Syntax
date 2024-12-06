let studentName = "Alice";
let studentAge = 15;
let studentGrade = 10;
let isPresent = true;

console.log(`The student's name is ${studentName}.`);
console.log(`${studentName} is ${studentAge} years old and is in grade ${studentGrade}.`);
console.log(`Is ${studentName} present? ${isPresent ? "Yes" : "No"}`);


let num1 = 10;
let num2 = 4;

console.log("Sum:", num1+num2);
console.log("Difference:", num1-num2);
console.log("Product:", num1*num2);
console.log("Quotient:", num1/num2);

num1 = -7;
num2 = 10;

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

console.log("Is num1 equal to num2?", num1==num2);
console.log("Is num1 greater than num2?", num1>num2);
console.log("Is num1 not equal to num2?", num1!=num2);

let isPositive = num1>0 && num2>0;
let isEven = num1%2==0 || num2%2==0
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);