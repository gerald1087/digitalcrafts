// The formula for the LTV - Lifetime Value of a customer in business
// LTV = (ARPA * Gross Margin)/ CCR
// ARPA: Average Revenue Per Account (The average MRR across all of your active customers)
// Gross Margin: The difference between revenue and COGS (Cost of Goods Sold). This is typically extremely high in Sa
// Customer Churn Rate: The rate at which you customers are canceling their subscriptions.

var ltvFunction = function(ARPA, GM, CCR) {

	var LTV = (ARPA*GM)/CCR;
	
	return LTV;
}

console.log(ltvFunction(10, 20, 5));

console.log("Steve thinks the LTV should be " + ltvFunction(15, 25, 8));

console.log("John thinks the LTV should be " + ltvFunction(100, 25, 15));



// The formula area of a chircle is pi r^2

var circleFunction = function(pi, r) {

	var AC = (pi*r*r);

	return AC;

}

console.log("The area of a coffee lid is " + circleFunction(3.14, 6));

console.log("The area of a tire is " + circleFunction(3.14, 20));



// Optimizing the code Pi (3.14) is constant so does not have to be in function.

var circleFunction = function(r) {

        var AC = 3.14 * (r*r);

        return AC;

}

console.log("The area of a coffee lid is " + circleFunction(6));

console.log("The area of a tire is " + circleFunction(20));





var findAreaOfCircle = function(r) {
   return getPiValue() * (r*r);

}

var getPiValue = function() {
   return 3.14;

}

var findPerimeterOfOctogon = function (dimension, width) {
   return getPiValue() * (dimension + width);

}

console.log(findAreaOfCircle(5));
console.log(findPerimeterOfOctogon)
