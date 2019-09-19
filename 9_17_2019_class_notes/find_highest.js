var numbers = [3, 8, 12, 1, 6, 15, 3];

for(var i=0; i<numbers.length; i++) {

   console.log(numbers[i])
}


//Add all the numbers in the array and print
var final = 0
for(var i=0; i<numbers.length; i++) {

   final += numbers[i]; 
}

console.log(final);

//Using the for loop and if statements inside the for loop
//find the largest number in the array

var largest = 0
for(var i=0; i<numbers.length; i++) {
  if(numbers[i] > largest) {
  largest = numbers[i];
 }
}

console.log(largest)

//using numbers [0] references the number at position 0 in the array (3)
var largest = numbers[0]
for(var i=0; i<numbers.length; i++) {
  if(numbers[i] > largest) {
  largest = numbers[i];
 }
}

console.log(largest)


//Step 1: create a for loop that creates an array of 100 random numbers
//Step 2: from the random number array created above, find the smallest number

var random = []

for(var i=0; i<100; i++) {
   var randomNumbers = Math.random();
   random.push(randomNumbers);
 
}
console.log(random)

var smallest = random[0] 
for(var i=0; i<random.length; i++) {
  if(random[i] < smallest) {
  smallest = random[i];
 }
}

console.log(smallest)


