// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function greaterThan(value) {
        if (value > base) { //if the value is > base then true is returned
            return true; 
        }
        else {
            return false; //otherwise false is returned
        }
        };

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    
    return function lessThan(value) {
        if (value < base) {//if the value is < base the true is returned
            return true; 
        }
        else {
            return false; //otherwise false is returned
        }
        };

    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function equalCharacter(string) {
        if (startsWith.charAt(0).toLocaleUpperCase() === string.charAt(0).toLocaleUpperCase()) { //is startswith char 0 is = string char 0 then true is returned
            return true; 
        }
        else {
            return false; //otherwise false is returned
        }
        };

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
     return function equalCharacter(string) {
        if (endsWith.charAt(endsWith.length-1).toLocaleLowerCase() === string.charAt(string.length-1).toLocaleLowerCase()) {
            return true; //if the last character of the string is = to the endswith last char, then true is returned
        }
        else {
            return false; //otherwise false is returned
        }
        };

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let array= []; //create array variable for a container
    for (var i = 0; i < strings.length; i++ ) { //loop over the strings
        var newStr = modify(strings[i]); //modify strings[i]
        array.push(newStr);//push the newStr into array variable we created
    }
    return array; //return the new array var
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
let array = []; //create array variable as a container
for (var i = 0; i < strings.length; i++) { //create loop over the strings
    if(test(strings[i]) === true){ //if it passes the test then push the strings[i] into the array var
        array.push(strings[i]); 
    }
}
if (array.length === strings.length) {
    return true; //returns true if array length is the same as the strings length
}    
    return false; // otherwise false is returned
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}