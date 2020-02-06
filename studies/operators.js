/* Operators
* 0. A simple way to think of operators is to think of asymbol that is used to
* performan operation.
*
* 1. There are 6 types of logical operators we use: 1) Assignment operators, 
* 2) Arithmetic operators, 3) Comparison operators,4) Logical operators,
* 5) Unary operators, and 6) Ternary operator 
*
* 2. Arithmetic operators
* An assignment operator assigns a value to its left operand based on the
* value of its right operand 
*/
// Assignment //
var x = 2;
//assigning the value of 2 to var x 
var z = x; 
//assigning the variable of z equal to x
console.log(z); 
//prints --> 2

// Addition assignment //
var bar = 5;
bar += 2;
//adding and assigning the value of 2 to var bar 

console.log(bar);  
//prints --> 7

// Subtractioin assignment //
var pie = 4;
pie -= 1;
//assigning and subtracting the value of 4 from var pie 

console.log(pie); 
//prints --> 3

// Multiplaction assignment //
var know = 5;
know *= 10;
//assigning and multiplying the value of 5 to var new 

console.log(know); 
//prints --> 50

// Division assignment //
var seat = 10;
seat /= 2;
//assigning and dividing the value of 2 to var new 

console.log(seat); 
//prints --> 5

/* 3. Arithmetic Operators 
* 
* These operators take numerical values as their operands and return a single numerical 
* value
*/

// Addition + //
var e = 8 + 3;

// assigned var e to the result of 8 + 3

console.log(e);
//prints --> 11

// Subtraction - //
var w = 2 - 3;

// assigned var w to the result of 2 - 3

console.log(w);
//prints --> -1

// Multiplication * //
var t = 2 * 3;

// assigned var t to the result of 2 * 3

console.log(t);
//prints --> 6

// Division / //
var r = 3 / 3;

// assigned var r to the result of 3 / 3

console.log(r);
//prints --> 1

// Remainder % //
var u = 5 % 5;

//assigned var u to the result of the remainder of 5 and 5 or 5 % 5

console.log(u); 
//prints --> 0

/* 4. Comparison Operators
* 
* Comparison operators compare two values and evalute to a boolean result
*/ 
// 1) Binary Comparison Operators //

//Greater than symbol > //

console.log(2 > 1);

// prints --> true

//Less than symbol < //

console.log(2 < 1);

// prints --> false

//Greater than or equal to symbol >= //

console.log(5 >= 7);

// prints --> false

//Less than or equal to symbol <= //

console.log(6 <= 6);

// prints --> true

// 2) Strict Comparison Operators //

// strictly equal to === //

console.log(10 === 10);
//prints --> true

// strictly not equal to !== //

console.log(2 !== 2);
//prints --> false

/* 5. Logical Operators 
*
* && = both must be true
* || = one must be true
* ! = flips the truthiness of a value
* !! = returns false is value is falsey (i.e. 0, null, undefined, NaN, etc)
*/

// && //

console.log(5 < 7 && 16 >= 14);
//prints --> true

// || //

console.log(5 > 7 || 16 >= 14);
//prints --> true

// ! //

console.log(!true);
//prints --> false

// !! //

console.log(!!0);
//prints --> false

/* 6. Unary Operators
* 
* typeof: shows the type of value you are working with
* - : turns values negative
* ! : does the opposite of, reverses truthiness
*/

// typeof //

var shoeSize = 10.5;

//create var for my shoe size

console.log(typeof(shoeSize));

//prints --> number

// - // 

var myAge = 28;
//create var for my age

console.log(-myAge);
//prints -28 

// ! //

console.log(!false);
//prints --> true

/* 7. Ternary Operators 
*
* uses 3 operands
* format (a ? b : c) aka (condition ? if true : if false)
*/
// ternary example //

var age = 28;
//create variable for age

var beverage = (age >= 21) ? "Beer" : "Juice";
//variable of beverage to decide beverage type depending on age. age >= 21 gets a beer

console.log(beverage); 
//prints --> Beer because age of 28 >= 21
