// The formula for the LTV - Lifetime Value of a customer in business
// LTV = (ARPA * Gross Margin)/ CCR
// ARPA: Average Revenue Per Account (The average MRR across all of your active customers)
// Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically extremely high in Sa
// Customer Churn Rate: The rate at which you customers are canceling their subscriptions.

var ARPA = 500;
var GM = 1000;
var CCR = 10;
var LTV = ARPA * GM / CCR;

console.log(LTV);
