const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

income = transactions.filter((transaction) => transaction.includes("income"));
expense = transactions.filter((transaction) => transaction.includes("expense"));
console.log(income);
console.log(expense);

totalincome = income.reduce((total, number) => total + number[1], 0);
totalexpenses = expense.reduce((total, number) => total + number[1], 0);
console.log(totalincome);
console.log(totalexpenses);

totalNet = totalincome - totalexpenses;
console.log(totalNet);
transactionabovefivehundred = transactions.filter(
  (transaction) => transaction[1] >= 500
);
console.log(totalNet);
console.log(transactionabovefivehundred);
