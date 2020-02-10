/* 
* Functions
*
* 0. Functions are blocks of code that can be reused. Functions accept any input, output, and optionally can
* returns a new value. Fourparts to a function: the name, arguements/parameter(s), function/code 
* body, and a optional return statement.  
* function name (arguement(s) {
*               <body> 
*               <body>
*               return
*               }
*
* 1. The first part of using a function is declaration. This is where we create a function. The second part 
* is invoking the function so it can run, this is called calling a function.
* 
* 2. A arguement is var in the declaration of the function. This is what makes functions reusable and
* universal.
*
*/

// 3. Syntax
function funct(a1, a2) {
 
  return a1 * a2;   // The function returns a1 * a2
}

console.log(funct(100, 2)); // prints --> 200 (100*2)

// 4. Assigning

var message = function(){ //assigns a function with no parameters to a variable message
  
  console.log("Que Pasa!");
};

console.log(message);  // prints --> Que Pasa!

/* 5. Function inputs are opitional arguements/parameters. Function outputs are optional
* return statements or console.logs.
*/

function funt2(n1, n2) { //input parameters of n1 and n2

    return n1 / n2;  // return statement n1 / n2 
}

console.log(funt2(100, 5)); //prints --> 20

/* 6. Scope 
* A variable that is declared on the outside of a function automatically belongs to the global scope. These 
* variables are able to be accessed anywhere in your code. Every function has its own local/function scope.
* A variable that is declared in that function is only able to be accessed inside that function and any function
* inside of it.
*/

var z = 8; // this is global scoped and can be accessed anywhere

function cool() {
  return z * z;
}

console.log(cool()); //prints --> 64

// The code here can NOT use carName
function newFunct2(stripecolor) {
  
  var brand = "Levi's";
  return stripecolor + " " + brand;

  // code here CAN use carName
}

console.log(newFunct2('Red stripe'));  //prints --> Red stripe Levi's

/* 7. Closures
* Closures are the combo of a function that is bundled together or enclosed with references to the function's 
* lexical environment. Closures basically give access to an outer function's scope, but this 
* is done from inside a inner function.
*/
var addIt = (function () {
  var count = 2;
  return function () {count += 1; return count}; //nested function using closures
})(); //the function can still be accessed because we used closures

console.log(addIt()); // prints --> 3
console.log(addIt()); // prints --> 4
console.log(addIt()); // prints --> 5

