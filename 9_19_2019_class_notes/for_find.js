//we are going to have an array of items
//we are going to create a function with 2 parameters
//first parameter  will be an array to search
//second parameter will be a value to find

//Inside the function, use a for loop to go through the array
//and return true if it finds the second parameter inside the array
//otherwise return false

var items = ["Cat", "Dog", "Snake", "Ferret", "Big Foot"]

var findItem = "Big Foot"

function findParameter(haystack, needle) {

   for(var i = 0; i<haystack.length; i++) {
           if(haystack[i] == needle){
                   return true;
	   }
   }
   
   return false;
}

var result = findParameter(items, findItem)
console.log(result)
