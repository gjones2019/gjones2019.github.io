/* 
* Functions
 0) functions are resuable blocks of code. They have optional inputs and outputs. 
 
 1) Syntax : function name (parameters) {
   <code block>
   return or console.log
 }
You can optionally assign a function to a variable. Parameters are the unnamed input values, arguements are parameters
that have been giving a value. The function name is used to call the function when we want to run it.
 */
// 2) Example

function subtract(x1, x2) {
  return x2 - x1; //will return x2 - x1
}

console.log(subtract(2, 10)); //prints => 8

/* 3) Scope
Varialbes declared outside of a function are global scoped and can be accessed from inside of a function. But 
variables declared inside of a function can't be accessed from outside of the function. Similarly, nested functions inside of functions can
access the parent function variables, but not vica versa.
*/

var x = 1; // this is a global scoped variable

function easy() {
  return  x / x;
}
console.log(easy()); // prints --> 1



function fun(num) {
  
  var z = 2;
  return x + z + num;

}

console.log(fun(1));  //prints --> 4
//console.log(z); prints => undefined

/* 4) Closures
* Closures are the combo of a function that is enclosed together with references to its lexical environment.
They let us have access to a outer function, but allows us to do this from inside an inner function.
*/

function addition(x) {
  return function(y) {
    return x + y;
  };
}

var add1 = addition(10);
var add2 = addition(10);

console.log(add1(2)); // prints => 12
console.log(add2(12)); //prints => 22
