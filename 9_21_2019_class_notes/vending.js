/**
*Vending Machine Group Exercise*

Vending Machines give us the ability to buy food and drink anywhere we go! You are hired as a contractor to write a vending machine application for a new line of vending machines to be released.

The vending machine will have the following items and prices:
- Snickers  $1.25
- Popcorn   $1.00
- Chewing Gum $0.25
- Nuts $0.50
- Cookies $1.70
- Cup Noodles $2.25

The vending machine can accept the following currency:
- Nickel $0.05
- Dime $0.10
- Quarter $.25
- Dollar $1.00

When a person is buying from the vending machine, the following happen:
- A list of items is shown to them with the prices
- They insert money into the machine based on the allowed currency above
- They then select their item and the following can happen:
-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
-- If they do not choose an item, all the money can be returned to them

Your task is to create a simulation in which 5 different buyers attempt to buy an item from the vending machine. Remember everything we have learned in class to use are your disposal:
- If Statements
- For Loops
- Arrays
- Objects
- Functions
*/


var vendingMachine = [
  {snack: "Snickers", price: 1.25},
  {snack: "Popcorn", price: 1.00},
  {snack: "Chewing Gum", price: 0.25},
  {snack: "Nuts", price: 0.50},
  {snack: "Cookies", price: 1.70},
  {snack: "Cup Noodles", price: 2.25}
];

var inMachine = []
var show = function(items) {
      for(var i=0; i<items.length; i++) {
          var list = items[i];
          inMachine.push(list.snack + " " + list.price)
      }
      return inMachine;
}
 var listResults = show(vendingMachine)
 console.log(listResults)


var insertedMoney = 0;
var totalMoney = function(item) {
       for(var i = 0; i<item.length; i++) {
               if (item[i] == "nickel") {
                 insertedMoney += 0.05
               } else if (item[i] == "dime") {
                 insertedMoney += 0.10
               } else if (item[i] == "quarter") {
                 insertedMoney += 0.25
               } else if (item[i] == "dollar") {
                 insertedMoney += 1.00
               }
           }
      return insertedMoney;
       }


var getSnack = function(choice, total) {
 var vend = []
   for(var i=0; i<vendingMachine.length; i++) {
       if(choice == vendingMachine[i].snack && insertedMoney == vendingMachine[i].price) {
           vend.push(choice + " is dispensed") && (insertedMoney-=insertedMoney);
           } else if (choice == vendingMachine[i].snack && insertedMoney > vendingMachine[i].price) {
               vend.push(choice + " is dispensed." + " And your change is: " + (insertedMoney -= vendingMachine[i].price)) && (insertedMoney-=insertedMoney);
                 } else if (choice == vendingMachine[i].snack && insertedMoney < vendingMachine[i].price) {
                     vend.push(choice + " is not dispensed." + " Add additional funds: " + (vendingMachine[i].price -= insertedMoney)) && (insertedMoney-=insertedMoney);
                     }
         }
  return vend
   }


var geraldinsert = ["dollar", "quarter", "dollar", "dime"];
      var geraldTotal = totalMoney(geraldinsert);
      console.log(geraldTotal)
            var vendSelection = getSnack("Snickers", geraldTotal);
            console.log(vendSelection);

var seyinsert = ["dollar"];
      var seyTotal = totalMoney(seyinsert);
      console.log(seyTotal);
            var vendSelection = getSnack("Popcorn", seyTotal);
            console.log(vendSelection);

var johninsert = ["dollar", "dollar", "dime"];
      var johnTotal = totalMoney(johninsert);
      console.log(johnTotal);
            var vendSelection = getSnack("Cup Noodles", johnTotal);
            console.log(vendSelection);

var carolinsert = ["dollar", "dime", "dime", "nickel"];
      var carolTotal = totalMoney(carolinsert);
      console.log(carolTotal);
            var vendSelection = getSnack("Nuts", carolTotal);
            console.log(vendSelection);
            
var steveinsert = ["dollar", "quarter"];
      var steveTotal = totalMoney(steveinsert);
      console.log(steveTotal);
            var vendSelection = getSnack("Cookies", steveTotal);
            console.log(vendSelection);