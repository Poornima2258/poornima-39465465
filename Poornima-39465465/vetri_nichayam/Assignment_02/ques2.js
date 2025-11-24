let marks = parseInt(prompt("Enter marks (0-100):"));
let age = parseInt(prompt("Enter age:"));

let grade;

if (marks >= 90) grade = "A";
else if (marks >= 75) grade = "B";
else if (marks >= 50) grade = "C";
else grade = "F";

console.log("Grade:", grade);

let result = (age >= 18) ? "Adult" : "Minor";
console.log("You are:", result);
