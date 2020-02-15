/* 
* Data types
* 
* 0) There are many types of datawe deal with in javascript.
*
* // 1) Numbers 
* Numbers are numerical data. They can be  positive, negative, have decimals, etc. Simple data type
*/

var hsGrad = 2009; 

console.log(hsGrad); //prints --> 2009


// 2) Strings
// Strings are any kind of characted or text inside of quotes. Simple data type


var thought = "I am tired of doing this studies project...";

console.log(thought); // prints --> "I am tired of doing this studies project..."

// 3) Boolean 
//Simply put, these are true or false values. Simple data type

if (1 < 2) {
    console.log('ok'); // prints --> "ok" if the 1< 2 is true. 
}
else {
    console.log('nice'); //prints --> "nice" if the if 1 < 2 is false.
}

// 4) Arrays 
//Arrays are data inside of []. They are good to use for lists. Must use bracket notation for access. Complex data type. 

var arr = []; // array literal
arr = ["cool", 5, 10, false]; //initialize/declare a variable

console.log(arr[1]); // prints --> 5


// 5) Object 
// Objects are collections of data. Can be accessed using bracket or dot notation. Comple data type.


var college = {}; //assign an object literal 

college = {
    name : "Xavier University of Louisiana",
    where : 'New Orleans, Louisiana',
    gradYear : '2014'
};

console.log(college.gradYear); // prints --> 2014


// 6) Function 
// Functions are resuable blocks of code. They have optional inputs and outputs. Complex data type.

function add(a1, a2) {
  return a1 + a2;   
}
console.log(add(50 , 25)); //prints --> 75

// 7) Undefined 
// When you see undefined it means something is not defined.

var a; //a is declared but never assigned

console.log(a); // prints --> undefined because it was never assigned to a value 

// 8) Null //
// Null means the value unknown or nothing. Simple data type.

var height = null; // this just means that height is unknown

console.log(height); //prints --> null

// 9) NaN //
/* Means there is a undefined numerical result. This can happen one of five ways:
The first is 0 / 0, second is infinity / infinity, third is infinity * zero, fourth is with any operation where NaN in it, and
the last is by changing a string that is not numberic or undefined to a specific number. Simple data type.
*/

var not = 0 / 0;

console.log(not); //prints => NaN

// 10) Infinity/-Infinity 
/* Infinity is a number that exceeds 1.797693134862315E+308, aka the upper limit of 
the floating point numbers. -Infinity is a number that exceeds -1.797693134862315E+308, aka the lower limit of 
the floating point numbers. Simple complex type.
*/

var lots = Infinity; 

console.log(lots); // prints --> Infinity

var negLots = -Infinity;

console.log(negLots); //prints --> -Infinity

// 11) Simple and Complex data types 
/* Primitive or simple data types are immutable. Meaning they don't collect/hold other values. They always return another primitive 
data type(s). Simple types include: strings, numbers, NaN, null, undefined, and infinity/-infinity
*
* Complex data types basically take in/hold/and allow other data types or values. They are mutable. Complex data types include:
functions, arrays, and objects.
*/


// 12) Copy by value vs by reference 
/* Simple data types = copy by value. Copy by value means being copied from var to var. 
* Complex data types = copy by reference. This means that they pass by reference when they are assigned or 
* re-assigned.
*/

// copy by value 
var name= "Garrett"; 

var myFirst = name; 

name = "Garrett Jones"; 

console.log(name); // prints => Garrett Jones

console.log(myFirst); // prints =>  Garrett


// copyby reference 
var mom = {
  first: "Gaynor"
};

var love = mom; // assigns value of myName to identity variable

mom.first = "Mommy";
console.log(mom.first); //  prints --> Mommy

console.log(love.first); // Prints --> Mommmy