/* 
* Loops
*
* 0. Used to perform something over data, this can be done once or repeatedly. Loops allow us to 
* execute code block any number of times. This is extremely handy when dealing with collections of data. 
* Loops let you pull values out of collections and work with them, or use them, one at a time. 
* 3 types of loops: 1st) For , 2nd) For-in , 3rd) While  
*/
// For //
/* For loops have three parts: 1st) starting condition- where the loop begins, 2nd) stopping condition- where
* the loop will stop based on boolean value, 3rd) an incrementer- which tells us how much will be 
* moved per iteration.
*/

for (var i = 0; i <= 5; i++) {
    console.log(i); //prints --> 1, 2, 3, 4, 5
}

// For-in //
/* Use For-in loops to loop overthe properties of an object. This will extract the keys and/or values 
* from an object. Uses bracket notation. 
*/

var currentLocation = { City: 'N.O.', State: 'L.A.', County: "Jefferson" }; //creates object and assigns values

for (var key in currentLocation) { 
    console.log(key); // prints City, State, County
    console.log(currentLocation[key]); // --> prints N.O., L.A., Jefferson
}

// While //
/* While a condition is true, the loop will keep executing the code block. Must have an increment, otherwise
* you will get an infinite loop.
*/

var counter = 1; // 

while(counter < 5) { //while counter < 10
    console.log(counter); // prints --> 1, 2, 3, 4
    counter++; // increment by +1
}

// Loop any # of times //
var ok = [50, 2, 3, 4, 9, 1, 12];

for (var i = 0; i < 5 ; i++) {// 5 is interchangeable for x
    console.log(ok[i]); // prints --> 50, 2, 3, 4, 9
}

// Foward counting tolimit//

function hiccups(limit){
    for (var i = 1; i < limit; i +=1){
        console.log(i + " hiccup"); // --> prints i + sheep
    }
}

hiccups(3);  // prints --> 1 hiccup, 2 hiccup

// Backward counting to 0//


for (var x = 5; x >= 1; x--){
  console.log(x); // prints --> 5, 4, 3, 2, 1
}

// Loop forward over an array //

var array4 = [4, 2, 1]; //creates array to loop forward over

for (var a = 0; a < array4.length; a++) {
    console.log(array4[a]); // prints --> 4, 2, 1
}

// Loop backward over an array //

var array = [7, 3, 5]; //creates array to loop backwards over
for (var s = array.length-1; s > -1; s--) {
    console.log(array[s]); // prints --> 5, 3, 7
}

// Loop over a object //

var myObj = {first: 'Gabrielle', last: 'Jones', Age: 33};
// object to be looped over

for (var key in myObj) {
    console.log(myObj[key]); // prints --> Gabrielle, Jones, 33
}

