/* CONTROL FLOW
*
* // 0| We control the flow of our code using if-elseif-else chains and switch statements. These evaluate
conditional statements and run the code based on the truthiness of the statement.
* 
* /* 1) Conditional statements: start with one, mandatory, if statement. Next is any number of, optional, 
* else-if statements. And finally ended with one, optional, else statement.
* 
*  2) Syntax: 
* if (conditional statement) {
* code block to run if true;
* } 
* else if (conditional statement) {
* code block to run if true;
* }
* else {
* code block to run no matter what;
* }
*
*/

// 3) If-elseif-else chain example

if (1 > 2) { 
console.log("Do you know math?");
}
else if ( 1 > 1) {
console.log("That is close, but no...");
} 
else {
console.log("You are going to fail the test!"); //prints => "You are going to fail the test!" because the other 
//conditional statements were false.
}

// 4) Switch 
/* Switch statements are similar to if-elseif-else chains. They take a arguement and compare it to several case clauses in 
the switch statement. If the arguement is matched, then the code for that case clause is run. Each case is separated with a 
break statement. The final case, similar to a else statement, is called the default clause. This is ran if none of the other 
cases are matched.
*/ 

var mood = 'happy'; //sets our mood var

switch (mood) {
    case 'sad':
        console.log('Oh no!'); //prints oh no if mood was sad
    break; //break statement 
    case 'bored':
        console.log('Go study'); //prints go study if mood was bored
    default: //this case presents no matter what
    console.log("You must be happy, like me"); //prints --> "You must be happy, like me" */
}
