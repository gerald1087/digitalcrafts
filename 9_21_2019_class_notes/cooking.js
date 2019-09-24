// Create an object to hold information on your favorite recipe. 
// It should have properties for title (a string), servings (a number), 
// ingredients (an array of strings), and a function called cook
// The cook function should print the following:
//  "Currently cooking [title] that will serve [servings] people. It will combine the following ingredients in a pot..."
// Loop through the array of ingredients
// After the function is complete, call the function cook function through the object

var faveRecipe = {
    title: "rice",
    servings: 4,
    ingredients: ["dry rice", "water", "oil", "salt"],
    cook: function() {
        console.log("Currently cooking " + this.title + " that will serve " + this.servings + ". It will combine the following ingredients in a pot...") 

        for(var i=0; i<this.ingredients.length; i++) {
            console.log(this.ingredients[i]);
        }

    }

};

faveRecipe.cook();