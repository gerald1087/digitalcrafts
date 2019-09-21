//in this exercise we are going to find an array that has duplicate values
//we will have a first loop that goes through all the items in the array
//we will have a second lood that checks all the items against the index of the first loop

//when a duplicate is found, print to screen

var items = ["Cat", "Dog", "Ferret", "Alien", "Dog", "Bird", "Ferret"];

var items = ["Cat", "Dog", "Ferret", "Alien", "Dog", "Bird", "Ferret"];

for(var i = 0; i<items.length; i++) {
        for(j=0; j<items.length; j++) {
                if(i !=j && items[i] == items[j]) {
                        console.log(items[j]);
                }
        }
}

