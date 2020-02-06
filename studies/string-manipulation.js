/* String Manipulation
*
* 0. Stings are manipulated using string methods or operators
*/

// 1. String methods
//There is a lot of string methods that are beneficial. For a full list, look at mozilla developer tools for a full list of them.

// 1) Property Access // 
// This is used to find a specific character in a string. You must use [].

var lastName = 'Jones';
// create a variable for  my lastName

console.log(lastName[2]);
// prints --> n

// 2) slice() //
/* Used to extract part of a string and return taht part in a new string. This method 
* takes in 2 parameters: the first/start position, and an optional last/end position.
*/

var candy = "Skittles, Snickers, Twix";

var favorite = candy.slice(10, 17); 

console.log(favorite); // prints --> Snickers

// 3) substring() //
/* substring() is very similar to the slice() method. The only difference is that substring() cannot take in negative indexes as parameters.
*/

var vegetables = "Carrot, Lettuce, Onion";

var ourFav = vegetables.substring(8, 14);

console.log(ourFav); // prints --> Lettuce

// 4) .toUpperCase() //
// This method simply converts the text to uppercase.

var greeting = "Que Pasa";       // String

var intenseGreeting = greeting.toUpperCase();  // intenseGreeting is greeting converted to uppercase

console.log(intenseGreeting); // prints --> QUE PASA!

// 5) .toLowerCase() //
// This method simply converts the text to lowercase.

var relax = "Just Chill!";       // String

var calmDown = relax.toLowerCase();  // calmDown is relax converted to lowercase

console.log(calmDown); // prints --> Just Chill!

// 6) concat() //
// Concat is wonderful, because it can join two or more strings for you

var word1 = "You're";

var word2 = "Cool";

var concatedText = word1.concat(" ", word2); //combines word1 and word2 and a  " " in between.

console.log(concatedText); // prints "You're Cool"

// 7) split() //
// The split method splits a string into an array of strings. This is done by separating it into multiple substrings.

var thoughts = 'I hope I win the lottery this week!';

var separated = thoughts.split(' ');
console.log(separated[5]); // prints --> lottery


// 2. Operators

// + or combination // 

var one = 'What is';
var two = 'Happening?';
//create variables one and two

console.log(one + " " + two);
//prints --> What is HappeningS?

// += //

console.log(one += ' your name?');
//prints --> What's your name?
