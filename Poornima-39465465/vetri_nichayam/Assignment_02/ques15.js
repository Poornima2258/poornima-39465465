let expenses = [2000, 1500, 3500, 4000];

function totalExpenses(arr) {
    let total = arr.reduce((sum, value) => sum + value, 0);
    console.log("Total Money Spent:", total);
}

totalExpenses(expenses);
