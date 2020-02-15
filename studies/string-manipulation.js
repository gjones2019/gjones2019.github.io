/* String Manipulation
*
* 0) Strings can be altered and manipulated with methods and operators. I will go over some of my favorite string methods and a brief
overview of operators.
*/

// 1) String methods
//String methods make our lives as developers a lot easier and simpler. There is a large list of methods that you can use and look at on
// mozilla's developer website.

// 1a) Accessing the character aka property access
// Using the [], you can access any character in a string.

var school = 'Xavier University of Louisiana'; //my school var


console.log(school[5]);// prints --> r to the console


// 1b) split() 
// Split turns a string into an array of strings. Each one can be individually accessed.

var sentence = "I am a true Laker fan"; //creates our sentence var

var splitSentence = sentence.split(" "); //splits the sentence into array of strings

console.log(splitSentence[4]); //prints => "Laker" to the console


// 1c) .toUpperCase()
//This method capitalizes whatever it is used on. Extremely useful. Can be individual characters, or a whole string.

var tableType = "oakwood"; //creates our tabletype var

console.log(tableType[0].toUpperCase() + tableType.slice(1)); //prints => "Oakwood"


// 1d) .toLowerCase()
//This method lowercases whatever it is used on. Like toUpperCase, it can be used on a whole string or just individual characters.

var bedSize = "King";

console.log(bedSize[0].toLowerCase() + bedSize.slice(1)); //prints => 'king'


// 1e) .slice()
//We use slice to return a portion of a string in a new string. This is used to isolate portions of a string that we want to use.

var stringy = "Let's go home early today!"; //creates stringy var

console.log(stringy.slice(0, 13)); //prints => "Let's go home" to the console
 
 
// 1f) .replace()
// This method simply replaces a value in a string with another value.

var help = "Please help me..."; //creates our help var string

console.log(help.replace("me", "yourself")); //prints => "Please help yourself..."

// 1g) concat()
// Concat joins 2 or more strings using the + symbol. This is almost identical to the plus operator.

var thought1 = "I don't like"; //creates our thought1 var string 

var thought2 = "your attitude."; //creates our thought2 var string


console.log(thought1 + " " + thought2); // prints => "I don't like your attitude."

 

// 2) Operators

//addition or combining
//this is similar to concat and the plus operator 

var p1 = 'Que pasa';  //creates our p1 string var
var p2 = 'mi amigo?'; //creates our p2 string var


console.log(p1 + " " + p2); //prints -->  "Que pasa mi amigo?"

// addition assignment 
//this assigns the value on the right of the = sign to the left 

var num = 1; //creates num variable

console.log(num += 2); // prints --> 3

