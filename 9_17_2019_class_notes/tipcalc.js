var points = 0;

var tipConditions = {
 greeting: true,
 bread: true,
 refills: false,
 food: false,
 check: true,

}

for(var pointTotal in tipConditions) {
 if(true) {
    points + 1;
 } else if(false) {
    points + 0;
 }
 points += tipConditions[pointTotal];

}

console.log(points)

function tipTotal() {

   if (points == 0) {

     console.log(checkTotal * 0.01);

   } else if (points == 1) {

     console.log(checkTotal * 0.02);

   } else if (points == 2) {

     console.log(checkTotal * 0.04);

   } else if (points == 3) {

     console.log(checkTotal * 0.07);

   } else if (points == 4) {

     console.log(checkTotal * 0.10);

   } else if (points == 5) {

     console.log(checkTotal * 0.15);
   }

}

var checkTotal = 67
tipTotal()
