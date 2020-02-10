/* Operators
* 0. Operators are symbols used to perform specific actions such as mathematics.
*
* 1. There are 6 types of operators: assignment, arithmetic, comparison, logical,
* unary, and ternary operators.
*
* 2. Assignement
* These assign values to the var to it's left based on the value of what is on it's right.
*/
// Regular Assignment //
var e = 3;
//assigned a value of 3 to e 
var o = e; 
//assigned var o to e
console.log(o); 
//prints --> 3

// Addition //
var cool = 3;
cool += 4;
//assigning the value of 4 to cool

console.log(cool);  
//prints --> 7

// Subtraction //
var thoughts = 3;
thoughts -= 2;
//subtracting 2 from thoughts

console.log(thoughts); 
//prints --> 1

// Multiplication //
var easy = 10;
easy *= 3;
//multiplying the value of 3 to easy

console.log(easy); 
//prints --> 30

// Division //
var sit = 100;
sit /= 50;
//dividing the value of 50 into sit

console.log(sit); 
//prints --> 2

/* 3. Arithmetic 
* 
* These takenumberical values, do math, and return a single number value
*/

// Addition //
var x = 1 + 34;

// assigned x to the result of 1 + 34

console.log(x);
//prints --> 35

// Subtraction //
var q = 20 - 10;

// assigned q to the result of 20 - 10

console.log(q);
//prints --> 10

// Multiplication //
var b = 90 * 1;

// assigned o to the result of 90 * 1

console.log(b);
//prints --> 90

// Division //
var p = 50 / 5;

// assigned p to the result of 50 / 5

console.log(p);
//prints --> 10

// Remainder //
var u = 10 % 4;

//assigned u to the remainder of 10 and 4 or 10 % 4

console.log(u); 
//prints --> 2

/* 4. Comparison
* 
* Comparison operators simply compare values and evaluate to a single T/F boolean value
*/ 
// 1) Binary Comparison //

//Greater than  > //

console.log(1 > 20);

// prints --> false

//Less than  < //

console.log(-200 < 1);

// prints --> true

//Greater than or equal to >= //

console.log(8 >= 4);

// prints --> true

//Less than or equal to <= //

console.log(88 <= 8);

// prints --> false

// 2) Strict Comparison //

// strictly equal //

console.log(2000 === 20);
//prints --> false

// strictly not equal //

console.log(4 !== 5);
//prints --> true

/* 5. Logical 
*
* && means that both of them have to be true
* || means that only one has to be true
* ! symbol flips the truthiness of the value given
* !! will return false if the value is falsey (such as: null , 0, NaN, undefined, etc etc)
*/

// && //

console.log(2 < 100 && 102 >= 2);
//prints --> true

// || //

console.log(15 > 6 || 160 >= 1000);
//prints --> true

// ! //

console.log(!false);
//prints --> true

// !! //

console.log(!!null);
//prints --> false

/* 6. Unary
* 
* typeof: shows you the type of value  that you are dealing with
* - : automatically will turn a value negative
* ! : this is a bang operator and will do the opposite of or revers truthiness of a value
*/

// typeof //

var hatSize = 7.5;

//my Hat size var

console.log(typeof(hatSize));

//prints --> number

// - // 

var height = "5'9";
//var for my height

console.log(-height);
//prints "-5'9" 

// ! //

console.log(!true);
//prints --> false

/* 7. Ternary 
*
* takes 3 operands
* formatting: (x ? y : z) or (condition ? what to do if true : what to do if false)
*/
// ternary example //

var yourAge = 18;
//var for your age

var tobacco = (yourAge >= 21) ? "Yes you can buy" : "No you can't buy";
//are you old enough to buy tobacco

console.log(tobacco); 
//prints --> No you can't buy because your age is < 21
