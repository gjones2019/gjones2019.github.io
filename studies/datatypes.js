/* Data types
* 
* 0. Javascript variables can hold a number of kinds of data types. The type is defined by the values that 
* can be input and what operations can be performed on it. Data types are a cruical part of programming.
*/
// 1. Numbers //
/* Numbers are simply numerical data. Numbers are a simply or primitive type of data. Numbers can 
* be positive or negative or have decimals. I.e. -10000, .003, 1562 are all numnbers!
*/
var freshmanYearAge = 18; 

// the number 18 is assigned to the freshmanYearAge to represent the age I was as a college freshman.
console.log(freshmanYearAge); //prints --> 18

// prints freshmanYearAge to the console 

// 2. Strings
/* Strings are any sequence of characters inside of quotes ("" or ''). The characters can be letters, 
* symbols, or numbers. Strings are also simple data types. Strings have several methods that
* they can be used with.
*/
var wishes = "I hope I'm a software engineer in 6 months!";

//wishes wss assigned to a string that was consisted of numbers, letters, and a symbol.

console.log(wishes); // prints --> "I hope I'm a software engineer in 6 months!"

// 3. Boolean //
/* Boolean data types are simple and consist of true or false values. These can be declared or done through
* logic. 
*/
var t = 10;
var v = 20;

if (t < v) {
    console.log('duh'); // prints --> "duh" if the t < v is true. 
}
else {
    console.log('idk'); //prints --> "idk" if the if statement of t < v is false.
}
// 4. Arrays //
/* With the power of arrays, a single variable can store different elements. These are mainly
* used for lists and ease of access. Arrays use bracket notation and indexing for access to it's elements
*/

var array = [];
//creating an array literal
array = [2, 4, 6, 'blue', 'you', false];
// initialize and declare a variable for array

console.log(array[3]);
//prints --> blue
/*we accessed the 4th element of the array with bracket notation and indexing.
*/
// 5. Object //
/* Ojects are defined as an unordered collection of data, primitive data types, or copy by reference
* data types. Format is: “key: value” pair. Objects are complex data types and can contain simple 
* data types. Objects can use: bracket notation, dot notation, or key/value pairs for access to it's
* key/value pairs.
*/

var highSchool = {};
//assigned an object literal 

highSchool = {
    name : "Chamberlain Senior High SChool",
    location : 'Tampa, Florida',
    graduation : '2009'
};

// We made a var named highSchool which was a object. Name, location, and grad year
// are keys. 'Xavier University of Louisiana, 'New Orleans', and '2014' are the values. 

console.log(highSchool.name); // prints --> Chamberlain Senior High SChool

//The key/value of name was accessed in our school object variable.

// 6. Function //
/* Functions are very useful because they are blocks of code that accept various inputs, outputs, 
* and return a new data value. Functions have a name, parameter(s) or arguement(s) for inputs, 
* function body where the code is actually run, and a finally return statement for the output.
* Parameters/arguements and even return statements are optional in functions. Functions are invoked 
* or called using their declared name. 
*/
function function1(z1, z2) {
  return z1 * z2;   // The function does the math and returns the product of the arguements/parameters
}
function1(10 , 25); //prints --> 250

// 7. Undefined //
/* Undefined means  that a value is not assigned. If a variable was declared, but never assigned,
* then it's value will be undefined. 
*/

var s;
//s has been declared but not assigned

console.log(s); // prints --> undefined 
//since s was never assigned, undefined was printed

// 8. Null //
/* Null means “empty”, “value not known” or “nothing”.
*/

var weight = null;
//this means that weight is unknown

console.log(weight); //prints --> undefined, because a  null value is empty/unknown

// 9. NaN //
/* If a return value has an undefined numerical result then, NaN will be returned. NaN isn't a keyword. 
* NaN can only occur are five ways; 1st: 0 / 0, 2nd: infinity / infinity, 3rd: infinity * zero, 
* 4th: Any operation where NaN is a operand, 5th: Changing a string that is not numberic or undefined
* to a number 
*/

var notNum = 0 / 0; 
// notNum shows a NaN moment

console.log(notNum); 
//prints --> NaN

// 10. -Infinity and Infinity //
/* Infinity is returned when a number exceeds 1.797693134862315E+308, this is the upper limit of 
the floating point numbers. -Infinity is negative value of infinity.
*/

var tooMany = Infinity; 
//assigns Infinity to tooMany

console.log(tooMany); 
//prints --> Infinity

var tooLittle = -Infinity;
//assigns -Infinity to tooLittle

console.log(tooLittle); 
// prints --> -Infinity

// 11. Simple data types and Complex data types //
/* Simple and complex data types are the two that we use in this class.
* 
* Simple data types are primitive or simples because they are immutable. This means that they do not 
* collect or hold other values, and they always return more simple data types. Numbers, strings, boolean, 
* NaN, undefined, and null are all simple data types.
*
* Complex data types take in other values. The are indefinite in size, aka mutable. Ojects, arrays, and 
* functions are all complex data types.
*/



// 12. Copy by value and copy by reference //
/* Simple data types = copy by value. Copy by value means being copied from var to var. 
* Complex data types = copy by reference. This means that they pass by reference when they are assigned or 
* re-assigned.
*/

// by value example
var mom= "Gaynor"; // assigns Gaynor to mom

var first = mom; //assigns mom to first

mom = "Mrs. Jones"; //re-assigns Mrs. JOnes to the mom

console.log(mom); // prints --> Mrs. Jones

console.log(first); // prints --> Gaynor


//by reference example
var uncle = {
  first: "Fredro"
}; //assigns key first and value Fredro to uncle object var

var who = uncle; // assigns value of myName to identity variable

uncle.first = "Collins"; // prints --> Collins
console.log(uncle.first); //  prints --> Collins

console.log(who.first); // Prints --> Collins