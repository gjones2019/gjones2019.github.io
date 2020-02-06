/* Control Flow
*
* 0. Conditional statements are used to control the flow of our code. Statements are executed based on if the boolean value is true, 
* if false, then the next statement is evaluated for truthiness, and so on and so on. If-elseif-else chains and switch statements are
* the two forms of control flow that we use. 
* 
* 1. Condtional statements must start with ONE if statement, optionally followed by a as many else-if statements as wanted, and 
* finshed off with an optional default statement to be run called else.
*
* 2. For example: if (test condition) {code block}/ else-if (test condition) {code block}/ else (test-condition) {code block}
*
*/

// 3. If //
// This is the 1st condition that is checked for truthiness in its boolean value

let imSmart = true;

// assign a true boolean value to my variable imSmart

if (imSmart) { 
    //the if statement sets the condition on imSmart
    console.log('DUH!'); //prints --> 'DUH!'
}

//prints yes to console.log because happy is a true statement

// 4. Else-if //
// This is the second or nth condition that is checked for truthiness in its boolean value 

let shirtType = 'Long Sleeve';

// creates a variable for shirt type

if (shirtType === 'Short sleeve') {
    console.log('Your shirt is short sleeved'); 
}
else if (shirtType === 'Long sleeved') {
    console.log("Your shirt is long sleeved");  /*prints --> "Your shirt is long sleeved". This is because the if statement was false,
    because the shirtType variable was assigned to long sleeve.
    */
}

// 5. Else //
/* If the if and else-if statements turned out to be false boolean values and never got run, then
* the default, else, statement is run no matter what.
*/

var favoriteMusic = 'I do not know'; //assigns "I do not know" to the favoriteMusic variable

if (favoriteMusic === 'Rap') { 
    console.log('Thats cool');
}

else if (favoriteMusic === 'Jazz') {
    console.log('That a favorite of mine');
}

else if (favoriteMusic === "R&B") {
    console.log("You must have an old soul");
}

else {
    console.log('You must be indecisive'); //prints --> 'You must be indecisive'
}

// 6. Switch //
/* A switch statements takes an input expression, searches for a case clase to match it to, then executes the code associated to that case clause. 
* Similar to an else statement, switch statements have a final default clause, at the end of the switch statement, that is automatically run.
* Break statements are used to mark the end of a case statement, but there is no break statement after the default clause.
*/ 

var favoriteFood = 'Jamaican';

switch (favoriteFood) {
    case 'Italian': //creates a case if favoriteFood is italian
        console.log('Italian food is ok, not the best tho!');
    break; // break statement to move on to the next case 
    case 'Jamaican': //creates a case if favoriteFood is jamaican
        console.log('Jamaican food is my FAVORITE!'); //prints --> Jamaican food is my FAVORITE!
    }
    
var favoriteCountry = 'Brazil';

switch (favoriteCountry) {
    case 'LilWeezyAna':
        console.log('HAHAHA!');
    break;
    case 'Egypt':
        console.log('You like the Pyramids huh?');
    default: //this is going to be our default case because the other cases were not matched
    console.log("I'm tired of guessing, just tell me what your favorite country is!"); /*prints --> I'm
    tired of guessing, just tell me what your favorite country is! */
}
