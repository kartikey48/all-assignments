/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
const transactions = [
  { itemName: 'item1', category: 'food', price: 10, timestamp: '2021-01-01' },
  { itemName: 'item2', category: 'electronics', price: 200, timestamp: '2021-01-01' },
  { itemName: 'item3', category: 'food', price: 15, timestamp: '2021-01-02' },
  { itemName: 'item4', category: 'clothing', price: 50, timestamp: '2021-01-03' },
  { itemName: 'item5', category: 'electronics', price: 100, timestamp: '2021-01-04' }
];

console.log(calculateTotalSpentByCategory(transactions));
// Output: [
//   { category: 'food', totalSpent: 25 },
//   { category: 'electronics', totalSpent: 300 },
//   { category: 'clothing', totalSpent: 50 }
// ]


function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store category-wise total spent
  let categorySpent = {};

  // Iterate through each transaction
  transactions.forEach(transaction => {
    // Destructure the transaction object to get category and price
    const { category, price } = transaction;

    // If the category is already present in the object, add the price to the existing value
    // Otherwise, initialize the category with the current price
    if (categorySpent[category]) {
      categorySpent[category] += price;
    } else {
      categorySpent[category] = price;
    }
  });

  // Convert the categorySpent object into an array of objects
  let result = [];
  for (let category in categorySpent) {
    result.push({ category: category, totalSpent: categorySpent[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

