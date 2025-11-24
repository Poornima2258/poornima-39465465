// Program to check number properties

let num = parseInt(prompt("Enter a number:"));

// Even or Odd
if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// Positive / Negative / Zero
if (num > 0) {
    console.log(num + " is Positive");
} else if (num < 0) {
    console.log(num + " is Negative");
} else {
    console.log("The number is Zero");
}

// Divisible by both 3 and 5
if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " is divisible by both 3 and 5");
} else {
    console.log(num + " is NOT divisible by both 3 and 5");
}
