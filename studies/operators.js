/* Operators
* 0) We use operator to perform operations and make our code easier to use. There are 6 types of operators:
* comparison, logical, assignment, arithmetic, unary, and ternary.
*
* 1) Comparison
* These operators compare data and resolve to a boolean T/F statement. There are two types: binary and strict.
*
* // 1a) Binary
*/ 
 //greater than 
 console.log(1 > 2); // prints => false because 1 is not greater than 2

 //less than
 console.log(1 < 2); // prints => true because 1 is less than 2

 //greater than or equal to
 console.log(3 <= 3); //prints => true because 3 is equal to 3

//less than or equal to
console.log(23 <= 24); //prints => true because 23 is less than 24

 // 2) Strict comparison
 
 //2a) strictly equal to 
 console.log(100 === 100); //prints => true becaue 100 is the exact same as 100
 
 //2b) strictly not equal to
 console.log(5 !== 4); //prints => true because 5 is not the same as 4
 
 //2c) The main difference between strictly and loosely equal to, is that loosely equal to converts 
 // the values into a common type before it makes the comparison. Strickly equal to does not do a conversion
 // and does the comparison as is. Loosely equal to converts the value and determines likeness based on it.
 
 /*
 *
 * // 3) Logical
 * There are 4 types that we use: &&, ||, !!, and !.
 */
 // 3a) && means that both statements must be true for anything to happen
 console.log(5 > 3 && 6 > 1); //prints => true because both logical statements are true
 
 // 3b) || meants that only one of the statements must be true for anything to happen
 console.log( 10 >= 10 || 1 > 1); //prints => true because one of the logical statements are true
 
 // 3c) !! returns false for falsey values
 console.log(!!NaN); // prints => false
 
 // 3d) ! will change the truthiness of a value
 console.log(!true); // prints => false
 
 
 /* 4) Assignment
 These operators assign the value to the right of the = sign to  what is on the left of it.
 */
 
 // traditional assignment
var i = 0; //  assigned the value of 0 to the variable i
var z = i; //assigne i to z
console.log(z); //prints => 0
 
 //addition assignment
 var stalk = 0;
 stalk += 1;
 console.log(stalk); //prints => 1
 
 //subtraction assignment
 var think = 0;
think -= 1;
console.log(think); //prints => -1
 
 //multiplication assignment
 var walk = 2;
 walk *= 2;
 console.log(walk); //prints => 4
 
 //division assignment
var run = 10;
run /= 5;
console.log(run); //prints => 2

/* 5) Arithmetic
* These are basic mathematical operators that we use everyday in coding. Returns a numerical value.
*/

// Addition
var w = 1 + 1;
console.log(w); // prints => 2

//Subtraction
var t = 1 - 1;
console.log(t); // prints => 0

//Multiplication
var p = 2 * 2;
console.log(p); //prints => 4

//Division
var m = 5 / 5;
console.log(m); //prints => 1

//Remainder

var y = 10 / 8;
console.log(y); //prints => 1.25

/* 6) Unary
Unary operators take one operand or argument and perform an operation. We mainly use 3 of them.
*/

// typeof 
// Typeof will tell you what type of data you are handling or dealing with.

var myAge = 28;
console.log(typeof(myAge)); // prints => "number"

// -
//this operator turns values negative

var yourIQ = 100;
console.log(-yourIQ); //prints => -100

// !
// this is a bang operator, and it will reverse the truthiness of a value that were working on

console.log(!false); //prints => true


/* 7) Ternary 
Takes in 3 operands. Very similar to conditional statements. 
Syntax: (a ? b : c) represents (test condition ? if true, do this : if false, do this)
*/

var sisterAge = 33;
var alcohol = ((sisterAge >= 21) ? "She is old enough to buy it." : "She is not old enough to buy it.");
console.log(alcohol); // prints => "She is old enough to buy it."

