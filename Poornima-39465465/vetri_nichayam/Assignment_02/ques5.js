let numbers = [12, 45, 7, 89, 23];

// Sum
let sum = numbers.reduce((a, b) => a + b, 0);
console.log("Sum:", sum);

// Largest number
let largest = Math.max(...numbers);
console.log("Largest Number:", largest);
