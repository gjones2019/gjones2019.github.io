/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


// 3) var, let, const

// 3a) var
// Global and block scoped. Can be re-ssigned or re-declared. Available after it is declared.

var heatIndex = "1000";

function idk() { 
heatIndex = "100";
}

console.log(heatIndex); // prints => 1000

idk(); 

console.log(heatIndex); // prints => 100 

// 3b) Let
// Creates a block scope variable. Can be re-assigned.

let highSchool = "Chamberlain"; 
 
highSchool = "McGill-Toolen"; 

console.log(highSchool); // prints => Chamberlain

// 3c) Const
// Creates a block scope var that can not be re-assigned or re-declared.

const favShoes = "Nike"; // can’t be redeclared or reassigned

favShoes = "New Balance";

console.log(favShoes); // prints → Nike

/* 4) Hoisting 
This is where variables or function declarations are bumped to the top of their scope. This lets them be accessed
before the code is executed. Global scoped can be accessed anywhere, while local scoped can be accessed in the local/block scope.
Var can be accessed anywhere, let and const can only be accessed on or after the line they were declared on.
*/

var number = 1;

number2 = 2; //initialized but never disclosed

console.log(number + " " + number2);  // prints => '1 2'

var number2; //gets hoisted to the top of its scope, so it can be used in the console log
