/* 
Loops

1) We use loops to iterate over data repeatedly, executing code block in the process. There are 3 main types of loops:
for, for-in, and while loops.
*/
// 2) For
// Must have a starting condition, stopping condition, and an incrementer. Used for arrays or counting

for (var i = 0; i < 4; i++) {
    console.log(i); 
} //prints => 0, 1, 2, 3

// 3) For-in
//Used for  looping over objects. Must be an object so you can input the key and object name into the loop syntax.
//Syntax:
// for (var propKey in objectName) {
//  //code block to be executed
// }

var object = {Name : "Garrett", City : "New Orleans", Neighborhood : "Uptown"};

for (var key in object) { //object is the object name and key is used to loop over all the keys in the object we are working on.
    console.log(key); //prints => Name, City, Neighborhood
    console.log(object[key]); //prints => Garrett, New Orleans, Uptown
}

// 4) While
//Code block will be executed while the condition is true. Incrementer is necessary to not get an infinite loop.
//Syntax:
// while (condition) {
//  // code block to be executed
// }

var count = 10; // 

while(count < 15) { //while count < 15
    console.log(count); // prints --> 10, 11, 12, 13, 14
    count++; // increment the count by +1 every loop
}


// 5) Looping any number of time

for (var i = -1; i <= 5 ; i++) {
    console.log(i); // prints --> -1, 0, 1, 2, 3, 4, 5
}

// 6) Forward counting 

function forward(stop){
    for (var i = 1; i < stop; i +=1){
        console.log(i + " free throw"); // --> prints i + free throw
    }
}

forward(5);  // prints --> 1 free throw, 2 free throw, 3 free throw, 4 free throw

// 7) Backward counting


for (var y = 10; y >= 5; y--){
  console.log(y); // prints --> 10, 9, 8, 7, 6, 5
}

// 8) Forward over an array 

var arr= [10, 8, 6, 4]; 

  for (var i = 0; i < arr.length; i++) {

console.log(arr[i]); // prints --> 10, 8, 6, 4
}

// Loop backward over an array //

var arr2 = [50, 30, 27, 16, 8]; 
  for (var a = arr2.length - 1; a >= 0; a--) {
    console.log(arr2[a]); // prints --> 8, 16, 27, 30, 50
}

// Loop over a object //

var lakers = {Best: 'LeBron', second: 'AD', Third: "Kuz"};

  for (var key in lakers) {
    
    console.log(lakers[key]); // prints --> Lebron, AD, Kuz
}